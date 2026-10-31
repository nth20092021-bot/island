import * as THREE from 'three';
import gsap from 'gsap';
import { IGraphicsEngine } from '../graphics/IGraphicsEngine';
import { ChestData, globalEventBus } from './EventBus';
import { DEFAULT_ISLAND_CONFIG } from './ChestManager';

/**
 * GreyboxScene: Chế độ dựng hình giả lập nhanh (Mock Engine) do Antigravity cung cấp.
 * Dựng đảo bằng nón cụt low-poly, 28 khối hộp rương có nắp bật mở, tia quét đơn giản,
 * và đường line quỹ đạo CatmullRomCurve3 để test ngay gameplay & camera.
 */
export class GreyboxScene implements IGraphicsEngine {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private islandGroup: THREE.Group = new THREE.Group();
  private chestsGroup: THREE.Group = new THREE.Group();
  private chestMeshMap: Map<number, { base: THREE.Mesh; lid: THREE.Group; root: THREE.Group }> = new Map();
  private beamMesh!: THREE.Line;
  private beamGeometry!: THREE.BufferGeometry;
  private trajectoryLine: THREE.Line | null = null;
  private eventUnsubscribers: (() => void)[] = [];

  public init(
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer,
    chests: ChestData[]
  ): void {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.scene.add(this.islandGroup);
    this.scene.add(this.chestsGroup);

    this.setupLighting();
    this.buildGreyboxIsland();
    this.buildGreyboxChests(chests);
    this.buildGreyboxBeam();
    this.setupEventListeners();
  }

  private setupLighting(): void {
    // Ánh sáng môi trường
    const ambientLight = new THREE.AmbientLight(0xddeeff, 0.65);
    this.scene.add(ambientLight);

    // Ánh sáng mặt trời tạo bóng khối low-poly
    const sunLight = new THREE.DirectionalLight(0xfff5e6, 1.2);
    sunLight.position.set(40, 60, 30);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    this.scene.add(sunLight);

    // Ánh sáng phản chiếu từ đại dương
    const hemiLight = new THREE.HemisphereLight(0x87ceeb, 0x1e3f66, 0.4);
    this.scene.add(hemiLight);
  }

  /**
   * Tạo đảo hình nón cụt phân tầng: Biển -> Bãi cát -> Sườn núi -> Đỉnh núi lửa
   */
  private buildGreyboxIsland(): void {
    const cfg = DEFAULT_ISLAND_CONFIG;

    // 1. Mặt biển
    const oceanGeo = new THREE.CircleGeometry(85, 48);
    const oceanMat = new THREE.MeshStandardMaterial({
      color: 0x127b9c,
      roughness: 0.15,
      metalness: 0.2,
      flatShading: true
    });
    const ocean = new THREE.Mesh(oceanGeo, oceanMat);
    ocean.rotation.x = -Math.PI / 2;
    ocean.position.y = 0.05;
    this.islandGroup.add(ocean);

    // 2. Thân đảo nón cụt (Truncated Cone)
    // CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments)
    const islandHeight = cfg.volcanoHeight;
    const islandGeo = new THREE.CylinderGeometry(
      cfg.volcanoRadius,
      cfg.beachRadius + 4,
      islandHeight,
      36,
      8
    );
    // Dịch tâm hình trụ lên để đáy nằm ở y = 0
    islandGeo.translate(0, islandHeight / 2, 0);

    const islandMat = new THREE.MeshStandardMaterial({
      color: 0x489643, // Xanh cây cỏ
      roughness: 0.8,
      flatShading: true // Phong cách low-poly
    });

    const islandMesh = new THREE.Mesh(islandGeo, islandMat);
    this.islandGroup.add(islandMesh);

    // 3. Vành cát bãi biển ngoài cùng
    const sandGeo = new THREE.RingGeometry(cfg.beachRadius - 3, cfg.beachRadius + 5, 36);
    const sandMat = new THREE.MeshStandardMaterial({
      color: 0xe5c483,
      roughness: 0.9,
      side: THREE.DoubleSide
    });
    const sand = new THREE.Mesh(sandGeo, sandMat);
    sand.rotation.x = -Math.PI / 2;
    sand.position.y = cfg.beachHeight + 0.1;
    this.islandGroup.add(sand);

    // 4. Miệng núi lửa nhỏ ở đỉnh trung tâm
    const craterGeo = new THREE.CylinderGeometry(cfg.volcanoRadius * 0.7, cfg.volcanoRadius * 0.9, 1.5, 24);
    craterGeo.translate(0, cfg.volcanoHeight + 0.75, 0);
    const craterMat = new THREE.MeshStandardMaterial({
      color: 0x2c1f18, // Màu đá núi lửa sẫm
      flatShading: true
    });
    const crater = new THREE.Mesh(craterGeo, craterMat);
    this.islandGroup.add(crater);

    // Lõi dung nham đỏ cam phát sáng trong miệng núi lửa
    const magmaGeo = new THREE.CircleGeometry(cfg.volcanoRadius * 0.65, 20);
    const magmaMat = new THREE.MeshBasicMaterial({
      color: 0xff3b00
    });
    const magma = new THREE.Mesh(magmaGeo, magmaMat);
    magma.rotation.x = -Math.PI / 2;
    magma.position.y = cfg.volcanoHeight + 1.4;
    this.islandGroup.add(magma);
  }

  /**
   * Tạo 28 hộp rương greybox có nắp bản lề xoay được
   */
  private buildGreyboxChests(chests: ChestData[]): void {
    const baseGeo = new THREE.BoxGeometry(1.2, 0.65, 0.85);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x8b5a2b, // Nâu gỗ
      roughness: 0.6,
      flatShading: true
    });

    const lidGeo = new THREE.BoxGeometry(1.24, 0.28, 0.88);
    // Dịch tâm của nắp về cạnh bản lề sau (z = -0.44) để nắp xoay đúng bản lề
    lidGeo.translate(0, 0.14, 0.44);

    const lidMat = new THREE.MeshStandardMaterial({
      color: 0xcd853f, // Vàng sồi
      roughness: 0.5,
      flatShading: true
    });

    chests.forEach((data) => {
      const root = new THREE.Group();
      root.position.copy(data.position);
      root.rotation.y = data.rotationY;

      // Thân rương
      const baseMesh = new THREE.Mesh(baseGeo, baseMat.clone());
      baseMesh.position.y = 0.325;
      root.add(baseMesh);

      // Nhóm bản lề của nắp (đặt ở mép sau của thân rương)
      const lidGroup = new THREE.Group();
      lidGroup.position.set(0, 0.65, -0.44);

      const lidMesh = new THREE.Mesh(lidGeo, lidMat.clone());
      lidGroup.add(lidMesh);
      root.add(lidGroup);

      // Thẻ số thứ tự rương
      const label = this.createNumberSprite(data.id, data.student.name);
      label.position.set(0, 1.4, 0);
      root.add(label);

      this.chestsGroup.add(root);
      this.chestMeshMap.set(data.id, { base: baseMesh, lid: lidGroup, root });
    });
  }

  /**
   * Tạo Sprite 2D hiển thị ID & tên học sinh nổi trên đầu rương
   */
  private createNumberSprite(id: number, name: string): THREE.Sprite {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = 'rgba(15, 23, 42, 0.75)';
    ctx.roundRect(10, 10, 236, 108, 16);
    ctx.fill();

    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 36px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`#${id}`, 128, 55);

    ctx.fillStyle = '#38bdf8';
    ctx.font = '22px sans-serif';
    ctx.fillText(name.length > 14 ? name.substring(0, 12) + '...' : name, 128, 95);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(1.8, 0.9, 1);
    return sprite;
  }

  /**
   * Tạo tia quét năng lượng (Beam) từ miệng núi lửa tới vị trí rương
   */
  private buildGreyboxBeam(): void {
    const points = [
      new THREE.Vector3(0, DEFAULT_ISLAND_CONFIG.volcanoHeight + 2, 0),
      new THREE.Vector3(0, DEFAULT_ISLAND_CONFIG.volcanoHeight + 2, 0)
    ];
    this.beamGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const beamMaterial = new THREE.LineBasicMaterial({
      color: 0x00ffff,
      linewidth: 4,
      transparent: true,
      opacity: 0.0 // Mặc định ẩn
    });
    this.beamMesh = new THREE.Line(this.beamGeometry, beamMaterial);
    this.scene.add(this.beamMesh);
  }

  private setupEventListeners(): void {
    const unOpen = globalEventBus.on('CHEST_OPENED', (payload) => {
      this.openChest(payload.chestId);
    });

    const unBeam = globalEventBus.on('BEAM_SCAN_TARGET', (payload) => {
      this.setBeamTarget(payload.position, 0.85);
      this.highlightChest(payload.chestId, true);
    });

    const unArrived = globalEventBus.on('CHEST_ARRIVED', (payload) => {
      this.highlightChest(payload.chestId, true);
      this.setBeamTarget(payload.position, 1.0);
    });

    this.eventUnsubscribers.push(unOpen, unBeam, unArrived);
  }

  public update(_delta: number, _elapsed: number): void {
    // Greybox scene loop (nếu cần xoay nhẹ hoặc update tia quét)
  }

  /**
   * Bật nắp rương (GSAP animation mở nắp ~115 độ)
   */
  public openChest(chestId: number): void {
    const chestEntry = this.chestMeshMap.get(chestId);
    if (!chestEntry) return;

    // Nắp xoay quanh trục X của lidGroup (bản lề phía sau)
    gsap.to(chestEntry.lid.rotation, {
      x: -Math.PI * 0.65, // Mở ngửa ra sau ~117 độ
      duration: 0.85,
      ease: 'back.out(1.8)'
    });

    // Làm sáng lấp lánh thân rương
    const baseMat = chestEntry.base.material as THREE.MeshStandardMaterial;
    gsap.to(baseMat.color, {
      r: 1.0,
      g: 0.85,
      b: 0.1,
      duration: 0.3
    });
  }

  public highlightChest(chestId: number, isHighlighted: boolean): void {
    const chestEntry = this.chestMeshMap.get(chestId);
    if (!chestEntry) return;

    const baseMat = chestEntry.base.material as THREE.MeshStandardMaterial;
    if (isHighlighted) {
      baseMat.emissive.setHex(0x00ffff);
      baseMat.emissiveIntensity = 0.5;
    } else {
      baseMat.emissive.setHex(0x000000);
      baseMat.emissiveIntensity = 0;
    }
  }

  public setBeamTarget(targetPosition: THREE.Vector3 | null, intensity: number = 1.0): void {
    if (!targetPosition) {
      (this.beamMesh.material as THREE.LineBasicMaterial).opacity = 0.0;
      return;
    }

    const volcanoPeak = new THREE.Vector3(0, DEFAULT_ISLAND_CONFIG.volcanoHeight + 1.8, 0);
    const positions = new Float32Array([
      volcanoPeak.x, volcanoPeak.y, volcanoPeak.z,
      targetPosition.x, targetPosition.y + 0.5, targetPosition.z
    ]);

    this.beamGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.beamGeometry.attributes.position.needsUpdate = true;

    const mat = this.beamMesh.material as THREE.LineBasicMaterial;
    mat.opacity = intensity;
  }

  public setTrajectoryLine(lineMesh: THREE.Line): void {
    if (this.trajectoryLine) {
      this.scene.remove(this.trajectoryLine);
    }
    this.trajectoryLine = lineMesh;
    this.scene.add(this.trajectoryLine);
  }

  public dispose(): void {
    this.eventUnsubscribers.forEach((un) => un());
    this.eventUnsubscribers = [];
  }
}

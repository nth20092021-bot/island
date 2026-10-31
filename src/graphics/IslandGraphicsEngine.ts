import * as THREE from 'three';
import gsap from 'gsap';
import { IGraphicsEngine } from './IGraphicsEngine';
import { ChestData, globalEventBus } from '../core/EventBus';
import { EnvironmentBuilder } from './EnvironmentBuilder';
import { EnergyBeamShader } from './EnergyBeamShader';

/**
 * IslandGraphicsEngine: Hiện thực hóa IGraphicsEngine kết hợp toàn bộ module
 * đồ họa cao cấp mà Codex vừa xây dựng:
 * - EnvironmentBuilder: Đảo nổi, núi lửa, dung nham, InstancedMesh cây, đá, mây.
 * - EnergyBeamShader: Custom GLSL Shader tia quét năng lượng và sóng xung kích (shockwave).
 * - 28 Rương Kho Báu Low-Poly chi tiết với bản lề mở nắp và hiệu ứng phát sáng.
 */
export class IslandGraphicsEngine implements IGraphicsEngine {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;

  private islandGroup: THREE.Group = new THREE.Group();
  private chestsGroup: THREE.Group = new THREE.Group();
  private chestMeshMap: Map<number, { base: THREE.Mesh; lid: THREE.Group; root: THREE.Group }> = new Map();

  private envBuilder: EnvironmentBuilder = new EnvironmentBuilder({
    seed: 42,
    treeCount: 32,
    rockCount: 24,
    cloudCount: 12
  });

  private beamShader: EnergyBeamShader = new EnergyBeamShader({
    color: 0x00f0ff,
    hotColor: 0xffffff,
    intensity: 1.8,
    radius: 0.65,
    height: 45
  });

  private volcanoPeak: THREE.Vector3 = new THREE.Vector3(0, 19.05, 0);
  private trajectoryLine: THREE.Line | null = null;
  private cloudsMesh: THREE.Object3D | null = null;
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
    this.buildOcean();
    this.buildCodexEnvironment();
    this.buildCodexBeam();
    this.buildLowPolyChests(chests);
    this.setupEventListeners();
  }

  private setupLighting(): void {
    // Ánh sáng môi trường mềm
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    this.scene.add(ambientLight);

    // Ánh nắng vàng rực rỡ nhiệt đới
    const sunLight = new THREE.DirectionalLight(0xfffaed, 1.8);
    sunLight.position.set(45, 65, 35);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 180;
    sunLight.shadow.camera.left = -50;
    sunLight.shadow.camera.right = 50;
    sunLight.shadow.camera.top = 50;
    sunLight.shadow.camera.bottom = -50;
    this.scene.add(sunLight);

    // Ánh sáng phản chiếu biển xanh
    const hemiLight = new THREE.HemisphereLight(0xbae6fd, 0x0369a1, 0.6);
    this.scene.add(hemiLight);
  }

  private buildOcean(): void {
    const oceanGeo = new THREE.CircleGeometry(110, 48);
    const oceanMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7, // Xanh ngọc nhiệt đới
      roughness: 0.1,
      metalness: 0.3,
      flatShading: true
    });
    const ocean = new THREE.Mesh(oceanGeo, oceanMat);
    ocean.rotation.x = -Math.PI / 2;
    ocean.position.y = 0.02;
    this.islandGroup.add(ocean);
  }

  /**
   * Tích hợp môi trường đảo do Codex dựng (EnvironmentBuilder)
   * Tỉ lệ scale (2.1, 1.0, 2.1) khớp chuẩn xác bán kính bãi biển 42m của 28 rương
   */
  private buildCodexEnvironment(): void {
    const island = this.envBuilder.build();
    island.scale.set(2.1, 1.0, 2.1);
    this.islandGroup.add(island);

    // Tìm nhóm mây để xoay nhẹ trong vòng lặp animation
    this.cloudsMesh = island.getObjectByName('StylizedTreasureIsland')?.children.find(
      (c) => c instanceof THREE.Group && c.children.some((sub) => sub instanceof THREE.InstancedMesh)
    ) || null;
  }

  /**
   * Tích hợp Custom Energy Beam Shader do Codex xây dựng
   */
  private buildCodexBeam(): void {
    this.beamShader.mesh.visible = false;
    this.beamShader.shockwave.visible = false;
    this.scene.add(this.beamShader.mesh);
    this.scene.add(this.beamShader.shockwave);
  }

  /**
   * Dựng 28 rương kho báu Low-Poly với bản lề xoay nắp
   */
  private buildLowPolyChests(chests: ChestData[]): void {
    // Thân rương gỗ viền vàng
    const baseGeo = new THREE.BoxGeometry(1.3, 0.7, 0.9);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x78350f, // Gỗ gụ nâu sẫm
      roughness: 0.65,
      metalness: 0.1,
      flatShading: true
    });

    // Nắp rương vòm cong nhẹ
    const lidGeo = new THREE.CylinderGeometry(0.48, 0.48, 1.34, 8, 1, false, 0, Math.PI);
    lidGeo.rotateZ(Math.PI / 2);
    lidGeo.translate(0, 0, 0.45);

    const lidMat = new THREE.MeshStandardMaterial({
      color: 0xb45309, // Gỗ sồi vàng
      roughness: 0.55,
      metalness: 0.15,
      flatShading: true
    });

    chests.forEach((data) => {
      const root = new THREE.Group();
      root.position.copy(data.position);
      root.rotation.y = data.rotationY;

      // Thân rương
      const baseMesh = new THREE.Mesh(baseGeo, baseMat.clone());
      baseMesh.position.y = 0.35;
      baseMesh.castShadow = true;
      baseMesh.receiveShadow = true;
      root.add(baseMesh);

      // Khớp bản lề nắp rương (đặt ở mép sau y = 0.7, z = -0.45)
      const lidGroup = new THREE.Group();
      lidGroup.position.set(0, 0.7, -0.45);

      const lidMesh = new THREE.Mesh(lidGeo, lidMat.clone());
      lidMesh.castShadow = true;
      lidGroup.add(lidMesh);
      root.add(lidGroup);

      // Nhãn thẻ bài số rương và tên học sinh
      const label = this.createChestBadge(data.id, data.student.name);
      label.position.set(0, 1.5, 0);
      root.add(label);

      this.chestsGroup.add(root);
      this.chestMeshMap.set(data.id, { base: baseMesh, lid: lidGroup, root });
    });
  }

  private createChestBadge(id: number, name: string): THREE.Sprite {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;

    // Nền tối kính mờ viền vàng
    ctx.fillStyle = 'rgba(15, 23, 42, 0.82)';
    ctx.roundRect(8, 8, 240, 112, 16);
    ctx.fill();

    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Số ID rương
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 38px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`#${id}`, 128, 56);

    // Tên học sinh
    ctx.fillStyle = '#38bdf8';
    ctx.font = '600 22px system-ui, sans-serif';
    ctx.fillText(name.length > 14 ? name.substring(0, 12) + '...' : name, 128, 96);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(1.9, 0.95, 1);
    return sprite;
  }

  private setupEventListeners(): void {
    const unOpen = globalEventBus.on('CHEST_OPENED', (payload) => {
      this.openChest(payload.chestId);
    });

    const unBeam = globalEventBus.on('BEAM_SCAN_TARGET', (payload) => {
      this.setBeamTarget(payload.position, 1.5);
      this.highlightChest(payload.chestId, true);
    });

    const unArrived = globalEventBus.on('CHEST_ARRIVED', (payload) => {
      this.highlightChest(payload.chestId, true);
      this.setBeamTarget(payload.position, 2.2);
    });

    this.eventUnsubscribers.push(unOpen, unBeam, unArrived);
  }

  public update(delta: number, elapsed: number): void {
    // Cập nhật shader tia năng lượng
    this.beamShader.update(elapsed, delta);

    // Mây trôi nhẹ bồng bềnh quanh đảo
    if (this.cloudsMesh) {
      this.cloudsMesh.rotation.y += delta * 0.04;
    }
  }

  /**
   * Bật mở nắp rương với hiệu ứng back.out đàn hồi và thân rương bừng sáng
   */
  public openChest(chestId: number): void {
    const chestEntry = this.chestMeshMap.get(chestId);
    if (!chestEntry) return;

    // Nắp mở ngửa ra sau ~120 độ
    gsap.to(chestEntry.lid.rotation, {
      x: -Math.PI * 0.68,
      duration: 0.9,
      ease: 'back.out(2.2)'
    });

    // Thân rương sáng lấp lánh ánh vàng
    const baseMat = chestEntry.base.material as THREE.MeshStandardMaterial;
    gsap.to(baseMat.color, {
      r: 1.0,
      g: 0.84,
      b: 0.0,
      duration: 0.35
    });
    baseMat.emissive.setHex(0xffaa00);
    gsap.to(baseMat, {
      emissiveIntensity: 0.8,
      duration: 0.4,
      yoyo: true,
      repeat: 3
    });
  }

  public highlightChest(chestId: number, isHighlighted: boolean): void {
    const chestEntry = this.chestMeshMap.get(chestId);
    if (!chestEntry) return;

    const baseMat = chestEntry.base.material as THREE.MeshStandardMaterial;
    if (isHighlighted) {
      baseMat.emissive.setHex(0x00f0ff);
      baseMat.emissiveIntensity = 0.6;
    } else {
      baseMat.emissive.setHex(0x000000);
      baseMat.emissiveIntensity = 0;
    }
  }

  public setBeamTarget(targetPosition: THREE.Vector3 | null, _intensity = 1.0): void {
    if (!targetPosition) {
      this.beamShader.mesh.visible = false;
      this.beamShader.shockwave.visible = false;
      return;
    }

    this.beamShader.mesh.visible = true;
    this.beamShader.shockwave.visible = true;
    this.beamShader.setTarget(targetPosition, this.volcanoPeak);
  }

  public setTrajectoryLine(lineMesh: THREE.Line): void {
    if (this.trajectoryLine) {
      this.scene.remove(this.trajectoryLine);
    }
    this.trajectoryLine = lineMesh;
    this.scene.add(this.trajectoryLine);
  }

  public setTrajectoryVisible(visible: boolean): void {
    if (this.trajectoryLine) {
      this.trajectoryLine.visible = visible;
    }
  }

  public dispose(): void {
    this.eventUnsubscribers.forEach((un) => un());
    this.eventUnsubscribers = [];
    this.envBuilder.dispose();
    this.beamShader.dispose();
  }
}

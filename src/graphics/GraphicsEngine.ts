import * as THREE from 'three';
import { ChestData, globalEventBus } from '../core/EventBus';
import { SUN_DIRECTION } from '../core/IslandLayout';
import { IGraphicsEngine } from './IGraphicsEngine';
import { EnvironmentBuilder } from './EnvironmentBuilder';
import { TreasureChestBuilder } from './TreasureChestBuilder';
import { skyEnvironment } from './TextureFactory';
import { skyVertexShader, skyFragmentShader } from './Shaders/SkyShader';

/** Các khối đặc camera phải né khi bay xuống rương (bỏ qua mặt nước, mây, hiệu ứng). */
const CAMERA_OBSTACLE_NAMES = new Set([
  'IslandSeaCliffs',
  'SummitAltar',
  'SummitBackdrop',
  'GrandWaterfalls',
  'RiverStones',
  'RiceTerraces',
  'VietVillage',
  'CoveredBridge',
  'OceanPier',
  'CurvedCoconutPalms',
  'ArecaPalms',
  'BananaGarden',
  'BambooGroves',
  'BanyanTrees',
  'CanopyForest',
  'HighlandTrees',
  'TropicalShrubs',
  'MossyBoulders',
  'CoastalStoneMonuments'
]);

/**
 * GraphicsEngine: Động cơ đồ họa hòn đảo thiên đường nhiệt đới tươi tốt (Lush Paradise Graphics Engine)
 * - Tích hợp EnvironmentBuilder với địa hình đồi cỏ xanh tươi & rừng rậm xum xuê
 * - Hệ thống 28 rương kho báu PBR rải rác trên đảo
 * - Ánh sáng mặt trời nhiệt đới rực rỡ và đổ bóng mềm mại
 */
export class GraphicsEngine implements IGraphicsEngine {
  protected scene!: THREE.Scene;
  protected camera!: THREE.PerspectiveCamera;
  protected renderer!: THREE.WebGLRenderer;
  protected environment = new EnvironmentBuilder({
    seed: 88, treeCount: 135, palmCount: 50, shrubCount: 90, rockCount: 85, cloudCount: 24
  });
  protected chestBuilder = new TreasureChestBuilder();
  protected island = new THREE.Group();
  protected chests = new THREE.Group();
  protected trajectory: THREE.Line | null = null;
  private readonly unsubs: (() => void)[] = [];
  private sky: THREE.Mesh | null = null;
  private skyMaterial: THREE.ShaderMaterial | null = null;
  private environmentTexture: THREE.Texture | null = null;
  private readonly sunDirection = new THREE.Vector3(...SUN_DIRECTION).normalize();
  private obstacleRoots: THREE.Object3D[] | null = null;
  private readonly obstacleRaycaster = new THREE.Raycaster();
  private readonly obstacleDown = new THREE.Vector3(0, -1, 0);
  private readonly obstacleOrigin = new THREE.Vector3();
  private readonly sightRaycaster = new THREE.Raycaster();
  private readonly sightDirection = new THREE.Vector3();

  public init(
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer,
    chestData: ChestData[]
  ): void {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    this.setupSky();
    scene.add(this.island, this.chests, this.chestBuilder.effects);
    this.setupLighting();

    this.environment.setChestClearings(chestData);
    this.island.add(this.environment.build());

    chestData.forEach((data) => this.chests.add(this.chestBuilder.build(data).root));
    this.setupEvents();
  }

  private setupSky(): void {
    const geometry = new THREE.SphereGeometry(4500, 48, 24);
    const material = new THREE.ShaderMaterial({
      vertexShader: skyVertexShader,
      fragmentShader: skyFragmentShader,
      uniforms: {
        uSunDirection: { value: this.sunDirection },
        uTime: { value: 0 }
      },
      side: THREE.BackSide,
      depthWrite: false,
      fog: false
    });
    this.skyMaterial = material;
    this.sky = new THREE.Mesh(geometry, material);
    this.sky.name = 'TropicalAtmosphere';
    this.sky.frustumCulled = false;
    this.sky.renderOrder = -1;
    this.scene.add(this.sky);
  }

  private setupLighting(): void {
    // Kim loại cần thứ để phản chiếu: không có môi trường thì đai thép, đồng thau
    // và tiền vàng (metalness cao) chỉ tối đen dưới ánh sáng định hướng đơn.
    this.environmentTexture = skyEnvironment();
    this.scene.environment = this.environmentTexture;
    this.scene.environmentIntensity = 0.24;

    // Nắng chiều vàng son: hướng thấp, đổ bóng dài, khớp với đĩa mặt trời trên sky shader.
    const sun = new THREE.DirectionalLight(0xffc184, 2.9);
    sun.position.copy(this.sunDirection).multiplyScalar(150);
    sun.castShadow = true;
    sun.shadow.mapSize.set(4096, 4096);
    sun.shadow.camera.near = 0.5;
    sun.shadow.camera.far = 340;
    sun.shadow.camera.left = -150;
    sun.shadow.camera.right = 150;
    sun.shadow.camera.top = 150;
    sun.shadow.camera.bottom = -150;
    sun.shadow.bias = -0.00035;
    sun.shadow.normalBias = 0.03;
    sun.shadow.radius = 2.5;
    this.scene.add(sun);

    // Ánh sáng hắt ấm từ mặt biển phía sau camera: giữ tiền cảnh có khối chứ không thành bóng đen.
    const fill = new THREE.DirectionalLight(0xffc79a, 1.0);
    fill.position.copy(this.sunDirection).multiplyScalar(-110);
    fill.position.y = 70;
    this.scene.add(fill);

    // Bóng đổ ngả lam khí quyển, đối lập với nắng son -> khối cây và đồi nổi hẳn lên.
    const hemi = new THREE.HemisphereLight(0x9db8dc, 0x5c4a2c, 1.05);
    const ambient = new THREE.AmbientLight(0xffd9b0, 0.26);
    this.scene.add(hemi, ambient);
  }

  private setupEvents(): void {
    this.unsubs.push(
      globalEventBus.on('CHEST_OPENED', (p) => {
        this.openChest(p.chestId);
      }),
      globalEventBus.on('CHEST_ARRIVED', (p) => {
        this.highlightChest(p.chestId, true);
      })
    );
  }

  public update(delta: number, elapsed: number): void {
    if (this.sky) this.sky.position.copy(this.camera.position);
    if (this.skyMaterial) this.skyMaterial.uniforms.uTime.value = elapsed;
    this.environment.update(elapsed);
    this.chestBuilder.update(delta, elapsed);
  }

  public openChest(id: number): void {
    this.chestBuilder.open(id);
  }

  public highlightChest(id: number, active: boolean): void {
    this.chestBuilder.highlight(id, active);
  }

  public setBeamTarget(_target: THREE.Vector3 | null, _intensity = 1): void {
    // Kept for the graphics interface; selecting a chest no longer draws a beam.
  }

  public setTrajectoryLine(line: THREE.Line): void {
    if (this.trajectory) this.scene.remove(this.trajectory);
    this.trajectory = line;
    this.scene.add(line);
  }

  public setTrajectoryVisible(visible: boolean): void {
    if (this.trajectory) this.trajectory.visible = visible;
  }

  public resetAll(): void {
    this.chestBuilder.resetAll();
  }

  public dispose(): void {
    this.unsubs.forEach((un) => un());
    this.environment.dispose();
    this.chestBuilder.dispose();
    this.environmentTexture?.dispose();
    this.scene.environment = null;
    if (this.sky) {
      this.scene.remove(this.sky);
      this.sky.geometry.dispose();
      (this.sky.material as THREE.Material).dispose();
      this.sky = null;
    }
  }

  public getTerrainHeightAt(x: number, z: number): number {
    return this.environment.getTerrainHeightAt(x, z);
  }

  public getTerrainNormalAt(x: number, z: number): THREE.Vector3 {
    return this.environment.getTerrainNormalAt(x, z);
  }

  private getObstacleRoots(): THREE.Object3D[] {
    if (!this.obstacleRoots) {
      const roots: THREE.Object3D[] = [];
      this.island.traverse((object) => {
        if (CAMERA_OBSTACLE_NAMES.has(object.name)) roots.push(object);
      });
      this.obstacleRoots = roots;
    }
    return this.obstacleRoots;
  }

  /**
   * Cao độ đỉnh vật thể đặc cao nhất tại cột (x, z): mái đình, vách thác, tán cây...
   * Dùng cho đường bay né vật thể; trả về -Infinity khi cột trống.
   */
  public getCameraObstacleTopAt(x: number, z: number, fromY = 140): number {
    const roots = this.getObstacleRoots();
    if (roots.length === 0) return Number.NEGATIVE_INFINITY;

    this.obstacleRaycaster.set(this.obstacleOrigin.set(x, fromY, z), this.obstacleDown);
    this.obstacleRaycaster.far = fromY + 20;
    const hits = this.obstacleRaycaster.intersectObjects(roots, true);
    return hits.length > 0 ? hits[0].point.y : Number.NEGATIVE_INFINITY;
  }

  /**
   * Đoạn thẳng từ camera tới rương có cắt qua vật thể đặc không.
   * Chính xác hơn dò theo cột vì bắt được cả cạnh tán cây, góc mái giữa hai mẫu.
   */
  public isCameraPathBlocked(from: THREE.Vector3, to: THREE.Vector3): boolean {
    const roots = this.getObstacleRoots();
    if (roots.length === 0) return false;

    const distance = from.distanceTo(to);
    if (distance < 1e-4) return false;

    this.sightDirection.copy(to).sub(from).divideScalar(distance);
    this.sightRaycaster.set(from, this.sightDirection);
    this.sightRaycaster.near = 0;
    this.sightRaycaster.far = distance;
    return this.sightRaycaster.intersectObjects(roots, true).length > 0;
  }
}

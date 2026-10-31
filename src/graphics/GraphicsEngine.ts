import * as THREE from 'three';
import { ChestData, globalEventBus } from '../core/EventBus';
import { SUN_DIRECTION } from '../core/IslandLayout';
import { IGraphicsEngine } from './IGraphicsEngine';
import { EnvironmentBuilder } from './EnvironmentBuilder';
import { TreasureChestBuilder } from './TreasureChestBuilder';
import { skyEnvironment } from './TextureFactory';
import { skyVertexShader, skyFragmentShader } from './Shaders/SkyShader';

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
    const geometry = new THREE.SphereGeometry(700, 48, 24);
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
    this.scene.environmentIntensity = 0.5;

    // Nguồn sáng chính trùng hướng mặt trời vẽ trên sky shader để bóng đổ khớp với bầu trời.
    const sun = new THREE.DirectionalLight(0xfff1d8, 2.8);
    sun.position.copy(this.sunDirection).multiplyScalar(112);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.near = 0.5;
    sun.shadow.camera.far = 240;
    sun.shadow.camera.left = -135;
    sun.shadow.camera.right = 135;
    sun.shadow.camera.top = 135;
    sun.shadow.camera.bottom = -135;
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.025;
    sun.shadow.radius = 2;
    this.scene.add(sun);

    // Ánh sáng môi trường: bầu trời xanh lơ + phản chiếu thảm cỏ xanh tươi
    const hemi = new THREE.HemisphereLight(0xc3e0f7, 0x58775b, 1.5);
    const ambient = new THREE.AmbientLight(0xf2f9ff, 0.25);
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
}

import * as THREE from 'three';
import { ChestData, globalEventBus } from '../core/EventBus';
import { IGraphicsEngine } from './IGraphicsEngine';
import { EnvironmentBuilder } from './EnvironmentBuilder';
import { EnergyBeamShader } from './EnergyBeamShader';
import { TreasureChestBuilder } from './TreasureChestBuilder';
import { skyVertexShader, skyFragmentShader } from './Shaders/SkyShader';

/**
 * GraphicsEngine: Động cơ đồ họa hòn đảo thiên đường nhiệt đới tươi tốt (Lush Paradise Graphics Engine)
 * - Tích hợp EnvironmentBuilder với địa hình đồi cỏ xanh tươi & rừng rậm xum xuê
 * - Hệ thống 28 rương kho báu PBR rải rác trên đảo
 * - Tia sáng năng lượng thiên giới màu vàng ngọc bích quét qua các rương
 * - Ánh sáng mặt trời nhiệt đới rực rỡ và đổ bóng mềm mại
 */
export class GraphicsEngine implements IGraphicsEngine {
  protected scene!: THREE.Scene;
  protected camera!: THREE.PerspectiveCamera;
  protected renderer!: THREE.WebGLRenderer;
  protected environment = new EnvironmentBuilder({ seed: 88, treeCount: 80, palmCount: 26, shrubCount: 50 });
  protected chestBuilder = new TreasureChestBuilder();
  // Tia sáng thiên giới vàng nắng ngọc lam
  protected beam = new EnergyBeamShader({ color: 0x38bdf8, hotColor: 0xfef08a, intensity: 1.6 });
  protected island = new THREE.Group();
  protected chests = new THREE.Group();
  protected trajectory: THREE.Line | null = null;
  private readonly unsubs: (() => void)[] = [];
  private sky: THREE.Mesh | null = null;
  private readonly sunDirection = new THREE.Vector3(-32, 58, 26).normalize();

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
    scene.add(this.island, this.chests);
    this.setupLighting();

    this.island.add(this.environment.build(), this.beam.mesh, this.beam.shockwave);
    this.beam.mesh.visible = false;
    this.beam.shockwave.visible = false;

    chestData.forEach((data) => this.chests.add(this.chestBuilder.build(data).root));
    this.setupEvents();
  }

  private setupSky(): void {
    const geometry = new THREE.SphereGeometry(450, 32, 16);
    const material = new THREE.ShaderMaterial({
      vertexShader: skyVertexShader,
      fragmentShader: skyFragmentShader,
      uniforms: { uSunDirection: { value: this.sunDirection } },
      side: THREE.BackSide,
      depthWrite: false,
      fog: false
    });
    this.sky = new THREE.Mesh(geometry, material);
    this.sky.name = 'TropicalAtmosphere';
    this.sky.frustumCulled = false;
    this.sky.renderOrder = -1;
    this.scene.add(this.sky);
  }

  private setupLighting(): void {
    // Mặt trời nhiệt đới ấm áp rực rỡ
    const sun = new THREE.DirectionalLight(0xffedcd, 2.75);
    sun.position.set(-32, 58, 26);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.near = 0.5;
    sun.shadow.camera.far = 160;
    sun.shadow.camera.left = -65;
    sun.shadow.camera.right = 65;
    sun.shadow.camera.top = 65;
    sun.shadow.camera.bottom = -65;
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.025;
    sun.shadow.radius = 2;
    this.scene.add(sun);

    // Ánh sáng môi trường: Bầu trời xanh lơ + phản chiếu thảm cỏ xanh tươi
    const hemi = new THREE.HemisphereLight(0xb7dcff, 0x58775b, 1.55);
    const ambient = new THREE.AmbientLight(0xf2f9ff, 0.25);
    this.scene.add(hemi, ambient);
  }

  private setupEvents(): void {
    this.unsubs.push(
      globalEventBus.on('CHEST_OPENED', (p) => this.openChest(p.chestId)),
      globalEventBus.on('BEAM_SCAN_TARGET', (p) => {
        this.setBeamTarget(p.position, 1.4);
        this.highlightChest(p.chestId, true);
      }),
      globalEventBus.on('CHEST_ARRIVED', (p) => {
        this.setBeamTarget(p.position, 1.8);
        this.highlightChest(p.chestId, true);
      }),
      globalEventBus.on('GAME_START', () => this.setBeamTarget(null))
    );
  }

  public update(delta: number, elapsed: number): void {
    if (this.sky) this.sky.position.copy(this.camera.position);
    this.environment.update(elapsed);
    this.beam.update(elapsed, delta);
  }

  public openChest(id: number): void {
    this.chestBuilder.open(id);
  }

  public highlightChest(id: number, active: boolean): void {
    this.chestBuilder.highlight(id, active);
  }

  public setBeamTarget(target: THREE.Vector3 | null, _intensity = 1): void {
    const visible = target !== null;
    this.beam.mesh.visible = visible;
    this.beam.shockwave.visible = visible;
    if (target) {
      // Tia sáng chiếu từ mây trời trên cao xuống rương
      this.beam.setTarget(target, new THREE.Vector3(0, 32, 0));
    }
  }

  public setTrajectoryLine(line: THREE.Line): void {
    if (this.trajectory) this.scene.remove(this.trajectory);
    this.trajectory = line;
    this.scene.add(line);
  }

  public setTrajectoryVisible(visible: boolean): void {
    if (this.trajectory) this.trajectory.visible = visible;
  }

  public dispose(): void {
    this.unsubs.forEach((un) => un());
    this.environment.dispose();
    this.chestBuilder.dispose();
    this.beam.dispose();
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

import * as THREE from 'three';
import gsap from 'gsap';
import { ChestData, globalEventBus } from '../core/EventBus';
import { IGraphicsEngine } from './IGraphicsEngine';
import { EnvironmentBuilder } from './EnvironmentBuilder';
import { TreasureChestBuilder } from './TreasureChestBuilder';
import { EnergyBeamShader } from './EnergyBeamShader';
import { MeteorShower } from './MeteorShower';
import { skyVertexShader, skyFragmentShader } from './Shaders/SkyShader';

/**
 * GraphicsEngine: Động cơ đồ họa hòn đảo thiên đường nhiệt đới tươi tốt (Lush Paradise Graphics Engine)
 * - Tích hợp EnvironmentBuilder với địa hình đồi cỏ xanh tươi & rừng rậm xum xuê
 * - Hệ thống 28 rương kho báu PBR rải rác trên đảo
 * - Chuyển đổi ngày (Ảnh 1: Anime mây trắng trời xanh) -> đêm (Ảnh 2: Trời đêm sao băng rơi lấp lánh)
 * - Rương kho báu phát ánh sáng vàng rực rỡ trong đêm
 */
export class GraphicsEngine implements IGraphicsEngine {
  protected scene!: THREE.Scene;
  protected camera!: THREE.PerspectiveCamera;
  protected renderer!: THREE.WebGLRenderer;
  protected environment = new EnvironmentBuilder({
    seed: 88,
    treeCount: 135,
    palmCount: 50,
    shrubCount: 90,
    rockCount: 85
  });
  protected chestBuilder = new TreasureChestBuilder();
  // Tia sáng năng lượng vàng ấm áp thiên giới
  protected beam = new EnergyBeamShader({ color: 0xf59e0b, hotColor: 0xfffbeb, intensity: 1.6 });
  // Mưa sao băng động trên nền trời đêm
  protected meteorShower = new MeteorShower();

  protected island = new THREE.Group();
  protected chests = new THREE.Group();
  protected trajectory: THREE.Line | null = null;
  private readonly unsubs: (() => void)[] = [];
  private sky: THREE.Mesh | null = null;
  private readonly sunDirection = new THREE.Vector3(-32, 58, 26).normalize();

  // Nguồn sáng động hỗ trợ chuyển đổi Ngày -> Đêm
  private sunLight!: THREE.DirectionalLight;
  private hemiLight!: THREE.HemisphereLight;
  private ambientLight!: THREE.AmbientLight;

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
    scene.add(this.island, this.chests, this.meteorShower.group);
    scene.add(this.beam.mesh, this.beam.shockwave);
    this.setBeamTarget(null);

    this.setupLighting();

    this.environment.setChestClearings(chestData);
    this.island.add(this.environment.build());

    chestData.forEach((data) => this.chests.add(this.chestBuilder.build(data).root));
    this.setupEvents();
  }

  private setupSky(): void {
    const geometry = new THREE.SphereGeometry(700, 32, 16);
    const material = new THREE.ShaderMaterial({
      vertexShader: skyVertexShader,
      fragmentShader: skyFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uDayNight: { value: 0.0 }, // Bắt đầu ở trạng thái Ngày (Ảnh 1)
        uSunDirection: { value: this.sunDirection }
      },
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
    // 1. Ánh sáng Mặt trời / Mặt trăng
    this.sunLight = new THREE.DirectionalLight(0xffedcd, 2.85);
    this.sunLight.position.set(-48, 85, 38);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    this.sunLight.shadow.camera.near = 0.5;
    this.sunLight.shadow.camera.far = 240;
    this.sunLight.shadow.camera.left = -135;
    this.sunLight.shadow.camera.right = 135;
    this.sunLight.shadow.camera.top = 135;
    this.sunLight.shadow.camera.bottom = -135;
    this.sunLight.shadow.bias = -0.0004;
    this.sunLight.shadow.normalBias = 0.025;
    this.sunLight.shadow.radius = 2;
    this.scene.add(this.sunLight);

    // 2. Ánh sáng môi trường hai cực (Trời / Đất)
    this.hemiLight = new THREE.HemisphereLight(0xb7dcff, 0x58775b, 1.55);

    // 3. Ánh sáng môi trường xung quanh
    this.ambientLight = new THREE.AmbientLight(0xf2f9ff, 0.25);
    this.scene.add(this.hemiLight, this.ambientLight);
  }

  /**
   * Chuyển mượt mà từ Trời Sáng (Ảnh 1) sang Trời Tối Mưa Sao Băng (Ảnh 2)
   */
  public transitionToNight(duration = 2.8): void {
    if (this.sky) {
      const mat = this.sky.material as THREE.ShaderMaterial;
      gsap.to(mat.uniforms.uDayNight, {
        value: 1.0,
        duration: duration,
        ease: 'power2.inOut'
      });
    }

    // Chuyển ánh sáng mặt trời sang ánh trăng bàng bạc huyền bí
    gsap.to(this.sunLight.color, {
      r: 0.58,
      g: 0.64,
      b: 0.72,
      duration: duration
    });
    gsap.to(this.sunLight, {
      intensity: 0.45,
      duration: duration
    });

    // Chuyển ánh sáng môi trường sang sắc đêm xanh lam chàm
    gsap.to(this.hemiLight.color, {
      r: 0.06,
      g: 0.09,
      b: 0.16,
      duration: duration
    });
    gsap.to(this.hemiLight.groundColor, {
      r: 0.01,
      g: 0.04,
      b: 0.03,
      duration: duration
    });
    gsap.to(this.hemiLight, {
      intensity: 0.35,
      duration: duration
    });

    gsap.to(this.ambientLight.color, {
      r: 0.12,
      g: 0.16,
      b: 0.23,
      duration: duration
    });
    gsap.to(this.ambientLight, {
      intensity: 0.15,
      duration: duration
    });

    // Chuyển sương mù sang màu bóng đêm
    if (this.scene.fog && this.scene.fog instanceof THREE.FogExp2) {
      gsap.to(this.scene.fog.color, {
        r: 0.02,
        g: 0.04,
        b: 0.09,
        duration: duration
      });
    }

    // Kích hoạt mưa sao băng lấp lánh rơi trên nền trời đêm
    this.meteorShower.setActive(true);
  }

  /**
   * Chuyển mượt mà từ Trời Tối trở lại Trời Sáng (Ảnh 1) khi chơi lại
   */
  public transitionToDay(duration = 2.0): void {
    if (this.sky) {
      const mat = this.sky.material as THREE.ShaderMaterial;
      gsap.to(mat.uniforms.uDayNight, {
        value: 0.0,
        duration: duration,
        ease: 'power2.inOut'
      });
    }

    gsap.to(this.sunLight.color, {
      r: 1.0,
      g: 0.93,
      b: 0.8,
      duration: duration
    });
    gsap.to(this.sunLight, {
      intensity: 2.85,
      duration: duration
    });

    gsap.to(this.hemiLight.color, {
      r: 0.72,
      g: 0.86,
      b: 1.0,
      duration: duration
    });
    gsap.to(this.hemiLight.groundColor, {
      r: 0.35,
      g: 0.47,
      b: 0.36,
      duration: duration
    });
    gsap.to(this.hemiLight, {
      intensity: 1.55,
      duration: duration
    });

    gsap.to(this.ambientLight.color, {
      r: 0.95,
      g: 0.98,
      b: 1.0,
      duration: duration
    });
    gsap.to(this.ambientLight, {
      intensity: 0.25,
      duration: duration
    });

    if (this.scene.fog && this.scene.fog instanceof THREE.FogExp2) {
      gsap.to(this.scene.fog.color, {
        r: 0.67,
        g: 0.8,
        b: 0.82,
        duration: duration
      });
    }

    // Tắt mưa sao băng & reset toàn bộ rương
    this.meteorShower.setActive(false);
    this.chestBuilder.resetAll();
    this.setBeamTarget(null);
  }

  private setupEvents(): void {
    this.unsubs.push(
      globalEventBus.on('CHEST_OPENED', (p) => {
        this.openChest(p.chestId);
        // Khi mở nắp rương, làm dịu dần tia sáng năng lượng để lộ rõ kho báu vàng
        gsap.to(this.beam.material.uniforms.uIntensity, {
          value: 0,
          duration: 0.6,
          onComplete: () => {
            this.setBeamTarget(null);
            this.beam.material.uniforms.uIntensity.value = 1.6;
          }
        });
      }),
      globalEventBus.on('BEAM_SCAN_TARGET', (p) => {
        this.setBeamTarget(p.position, 1.4);
        this.highlightChest(p.chestId, true);
      }),
      globalEventBus.on('CHEST_ARRIVED', (p) => {
        this.setBeamTarget(p.position, 1.8);
        this.highlightChest(p.chestId, true);
      }),
      globalEventBus.on('GAME_START', () => {
        // Bắt đầu game: Chuyển sang trời tối mưa sao băng
        this.transitionToNight(2.8);
      })
    );
  }

  public update(delta: number, elapsed: number): void {
    let dayNight = 0.0;
    if (this.sky) {
      this.sky.position.copy(this.camera.position);
      dayNight = (this.sky.material as THREE.ShaderMaterial).uniforms.uDayNight.value;
      (this.sky.material as THREE.ShaderMaterial).uniforms.uTime.value = elapsed;
    }
    this.environment.update(elapsed, dayNight);
    this.meteorShower.update(delta, dayNight);
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
      // Cột sáng vàng thiên giới chiếu rọi từ mây sao xuống rương
      this.beam.setTarget(target, new THREE.Vector3(target.x * 0.2, 54, target.z * 0.2));
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
    this.meteorShower.dispose();
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

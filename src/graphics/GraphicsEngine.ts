import * as THREE from 'three';
import { ChestData, globalEventBus } from '../core/EventBus';
import { IGraphicsEngine } from './IGraphicsEngine';
import { EnvironmentBuilder } from './EnvironmentBuilder';
import { EnergyBeamShader } from './EnergyBeamShader';
import { TreasureChestBuilder } from './TreasureChestBuilder';

export class GraphicsEngine implements IGraphicsEngine {
  protected scene!: THREE.Scene; protected camera!: THREE.PerspectiveCamera; protected renderer!: THREE.WebGLRenderer;
  protected environment = new EnvironmentBuilder({ seed: 77 }); protected chestBuilder = new TreasureChestBuilder();
  protected beam = new EnergyBeamShader({ color: 0x24d8ff, hotColor: 0xffffff, intensity: 1.8 });
  protected island = new THREE.Group(); protected chests = new THREE.Group(); protected trajectory: THREE.Line | null = null;
  private readonly unsubs: (() => void)[] = [];

  public init(scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, chestData: ChestData[]): void {
    this.scene = scene; this.camera = camera; this.renderer = renderer; scene.add(this.island, this.chests);
    this.setupLighting(); this.island.add(this.environment.build(), this.beam.mesh, this.beam.shockwave); this.beam.mesh.visible = false; this.beam.shockwave.visible = false;
    chestData.forEach(data => this.chests.add(this.chestBuilder.build(data).root)); this.setupEvents();
  }
  private setupLighting(): void { const sun = new THREE.DirectionalLight(0xffc987, 3.1); sun.position.set(-34, 60, 28); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); sun.shadow.camera.left = -70; sun.shadow.camera.right = 70; sun.shadow.camera.top = 70; sun.shadow.camera.bottom = -70; this.scene.add(sun); this.scene.add(new THREE.HemisphereLight(0x7bb7ff, 0x442414, 1.1), new THREE.AmbientLight(0x332040, .25)); }
  private setupEvents(): void { this.unsubs.push(globalEventBus.on('CHEST_OPENED', p => this.openChest(p.chestId)), globalEventBus.on('BEAM_SCAN_TARGET', p => { this.setBeamTarget(p.position, 1.3); this.highlightChest(p.chestId, true); }), globalEventBus.on('CHEST_ARRIVED', p => { this.setBeamTarget(p.position, 1.7); this.highlightChest(p.chestId, true); }), globalEventBus.on('GAME_START', () => this.setBeamTarget(null))); }
  public update(delta: number, elapsed: number): void { this.environment.update(elapsed); this.beam.update(elapsed, delta); }
  public openChest(id: number): void { this.chestBuilder.open(id); }
  public highlightChest(id: number, active: boolean): void { this.chestBuilder.highlight(id, active); }
  public setBeamTarget(target: THREE.Vector3 | null, _intensity = 1): void { const visible = target !== null; this.beam.mesh.visible = visible; this.beam.shockwave.visible = visible; if (target) this.beam.setTarget(target, new THREE.Vector3(0, 20, 0)); }
  public setTrajectoryLine(line: THREE.Line): void { if (this.trajectory) this.scene.remove(this.trajectory); this.trajectory = line; this.scene.add(line); }
  public setTrajectoryVisible(visible: boolean): void { if (this.trajectory) this.trajectory.visible = visible; }
  public dispose(): void { this.unsubs.forEach(un => un()); this.environment.dispose(); this.chestBuilder.dispose(); this.beam.dispose(); }
  public getTerrainHeightAt(x: number, z: number): number { return this.environment.getTerrainHeightAt(x, z); }
  public getTerrainNormalAt(x: number, z: number): THREE.Vector3 { return this.environment.getTerrainNormalAt(x, z); }
}
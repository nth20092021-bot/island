import * as THREE from 'three';
import { rockMaterial, sandMaterial } from './TextureFactory';
import { foliageVertexShader } from './Shaders/FoliageShader';
import { waterFragmentShader, waterVertexShader } from './Shaders/WaterShader';
import { lavaFragmentShader, lavaVertexShader } from './Shaders/LavaShader';

export interface EnvironmentBuilderOptions { seed?: number; treeCount?: number; rockCount?: number; cloudCount?: number; }

/** Deterministic terrain and biome builder. Height queries use the same field as the mesh. */
export class EnvironmentBuilder {
  private readonly opts: Required<EnvironmentBuilderOptions>;
  private readonly geometries: THREE.BufferGeometry[] = [];
  private readonly materials: Array<THREE.Material | THREE.Texture> = [];
  private readonly foliageMaterials: THREE.ShaderMaterial[] = [];
  private root = new THREE.Group();
  private clouds: THREE.Object3D | null = null;
  private random: () => number;

  public constructor(options: EnvironmentBuilderOptions = {}) {
    let seed = options.seed ?? 77;
    this.random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
    this.opts = { seed: options.seed ?? 77, treeCount: options.treeCount ?? 44, rockCount: options.rockCount ?? 34, cloudCount: options.cloudCount ?? 12 };
  }

  public build(): THREE.Group {
    this.root = new THREE.Group(); this.root.name = 'HighEndIsland';
    this.root.add(this.createOcean(), this.createFloatingCliff(), this.createTerrainSurface(), this.createSpiralTrail(), this.createPier());
    this.root.add(this.createBeachPalms(), this.createForest(), this.createRuins(), this.createCaldera(), this.createSatelliteRocks(), this.createWaterfalls());
    this.clouds = this.createClouds(); this.root.add(this.clouds);
    return this.root;
  }

  private noise(x: number, z: number): number {
    const a = Math.sin(x * 0.19 + this.opts.seed) * 43758.5453;
    const b = Math.sin(z * 0.23 - this.opts.seed * 0.7) * 24634.6345;
    const c = Math.sin((x + z) * 0.07) * 0.5;
    return ((a - Math.floor(a)) * 0.58 + (b - Math.floor(b)) * 0.42) * 2 - 1 + c;
  }

  public getTerrainHeightAt(x: number, z: number): number {
    const r = Math.sqrt(x * x + z * z);
    const base = THREE.MathUtils.clamp(1.35 + (1 - THREE.MathUtils.clamp(r / 44, 0, 1)) * 12.7, 1.2, 14.2);
    const crater = r < 7.5 ? -Math.max(0, 7.5 - r) * 0.5 : 0;
    return base + this.noise(x, z) * (r < 10 ? 0.25 : 0.8) + crater;
  }

  public getTerrainNormalAt(x: number, z: number): THREE.Vector3 {
    const e = 0.15;
    const dx = this.getTerrainHeightAt(x + e, z) - this.getTerrainHeightAt(x - e, z);
    const dz = this.getTerrainHeightAt(x, z + e) - this.getTerrainHeightAt(x, z - e);
    return new THREE.Vector3(-dx / (2 * e), 1, -dz / (2 * e)).normalize();
  }

  private mat(color: number, roughness = 0.82, metalness = 0): THREE.MeshStandardMaterial { const m = new THREE.MeshStandardMaterial({ color, roughness, metalness, flatShading: true }); this.materials.push(m); return m; }
  private geo<T extends THREE.BufferGeometry>(g: T): T { this.geometries.push(g); return g; }

  private createOcean(): THREE.Mesh { const g = this.geo(new THREE.CircleGeometry(115, 96)); g.rotateX(-Math.PI / 2); const m = new THREE.ShaderMaterial({ vertexShader: waterVertexShader, fragmentShader: waterFragmentShader, uniforms: { uTime: { value: 0 } }, transparent: true, side: THREE.DoubleSide }); this.materials.push(m); const water = new THREE.Mesh(g, m); water.name = 'TropicalOcean'; water.position.y = 0.15; return water; }
  private createFloatingCliff(): THREE.Mesh { const g = this.geo(new THREE.CylinderGeometry(19, 37, 14, 24, 8)); const p = g.attributes.position as THREE.BufferAttribute; for (let i = 0; i < p.count; i++) { const x = p.getX(i), z = p.getZ(i), s = 1 + this.noise(x, z) * 0.12; p.setX(i, x * s); p.setZ(i, z * s); } g.translate(0, -5.5, 0); const cliff = new THREE.Mesh(g, rockMaterial(this.materials)); cliff.name = 'AsymmetricFloatingCliff'; cliff.castShadow = true; return cliff; }
  private createTerrainSurface(): THREE.Mesh { const g = this.geo(new THREE.PlaneGeometry(89, 89, 64, 64)); g.rotateX(-Math.PI / 2); const p = g.attributes.position as THREE.BufferAttribute; for (let i = 0; i < p.count; i++) { const x = p.getX(i), z = p.getZ(i), r = Math.sqrt(x * x + z * z); p.setY(i, r > 44 ? -2 : this.getTerrainHeightAt(x, z)); } g.computeVertexNormals(); const mesh = new THREE.Mesh(g, sandMaterial(this.materials)); mesh.name = 'NoiseTerrainWithBiomes'; mesh.receiveShadow = true; return mesh; }
  private createSpiralTrail(): THREE.Line { const points: THREE.Vector3[] = []; for (let i = 0; i <= 120; i++) { const t = i / 120, a = -Math.PI / 4 + t * Math.PI * 4.8, r = 40 - t * 31, x = Math.cos(a) * r, z = Math.sin(a) * r; points.push(new THREE.Vector3(x, this.getTerrainHeightAt(x, z) + 0.1, z)); } const g = this.geo(new THREE.BufferGeometry().setFromPoints(points)); const m = new THREE.LineBasicMaterial({ color: 0xb7834d, transparent: true, opacity: 0.8 }); this.materials.push(m); return new THREE.Line(g, m); }
  private createPier(): THREE.Group { const group = new THREE.Group(), wood = this.mat(0x70442b, 0.7); for (let i = 0; i < 7; i++) { const post = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(0.22, 0.28, 3.2, 6)), wood); post.position.set(-32 + i * 1.3, 1.6, -10); post.rotation.z = 0.1; group.add(post); } const deck = new THREE.Mesh(this.geo(new THREE.BoxGeometry(11, 0.35, 2.1)), wood); deck.position.set(-28, 3, -10); deck.rotation.y = 0.15; group.add(deck); return group; }
  private createBeachPalms(): THREE.InstancedMesh { const palms = new THREE.InstancedMesh(this.geo(new THREE.CylinderGeometry(0.18, 0.35, 4.4, 7)), this.foliageMaterial(0x79502d), 10), matrix = new THREE.Matrix4(); for (let i = 0; i < 10; i++) { const a = this.random() * Math.PI * 2, x = Math.cos(a) * (28 + this.random() * 10), z = Math.sin(a) * (28 + this.random() * 10); matrix.makeTranslation(x, 3.4, z); palms.setMatrixAt(i, matrix); } palms.castShadow = true; return palms; }
  private createForest(): THREE.Group { const group = new THREE.Group(), trunk = this.geo(new THREE.CylinderGeometry(0.22, 0.4, 3.4, 6)), leaf = this.geo(new THREE.ConeGeometry(1.7, 3.5, 7)), t = new THREE.InstancedMesh(trunk, this.foliageMaterial(0x68462e), this.opts.treeCount), l = new THREE.InstancedMesh(leaf, this.foliageMaterial(0x2e8550), this.opts.treeCount), matrix = new THREE.Matrix4(); for (let i = 0; i < this.opts.treeCount; i++) { const a = this.random() * Math.PI * 2, r = 14 + this.random() * 14, x = Math.cos(a) * r, z = Math.sin(a) * r, s = 0.65 + this.random() * 0.55, y = this.getTerrainHeightAt(x, z); matrix.makeTranslation(x, y + 1.7, z).scale(new THREE.Vector3(s, s, s)); t.setMatrixAt(i, matrix); matrix.makeTranslation(x, y + 4.1, z).scale(new THREE.Vector3(s, s, s)); l.setMatrixAt(i, matrix); } t.castShadow = l.castShadow = true; group.add(t, l); return group; }
  private foliageMaterial(color: number): THREE.ShaderMaterial { const m = new THREE.ShaderMaterial({ vertexShader: foliageVertexShader, fragmentShader: 'varying vec3 vColor; void main(){gl_FragColor=vec4(vColor,1.0);}', uniforms: { uTime: { value: 0 }, uWind: { value: 0.12 }, uColor: { value: new THREE.Color(color) } } }); this.foliageMaterials.push(m); return m; }
  private createRuins(): THREE.Group { const group = new THREE.Group(), stone = this.mat(0x77736b, 0.92); for (let i = 0; i < 7; i++) { const step = new THREE.Mesh(this.geo(new THREE.BoxGeometry(6 - i * 0.45, 0.55, 2.2)), stone); step.position.set(15 - i * 0.5, this.getTerrainHeightAt(15 - i * 0.5, 3) + i * 0.55, 3); group.add(step); } for (const x of [9, 15]) { const pillar = new THREE.Mesh(this.geo(new THREE.BoxGeometry(1.5, 7, 1.5)), stone); pillar.position.set(x, 8, 3); group.add(pillar); } const lintel = new THREE.Mesh(this.geo(new THREE.BoxGeometry(8, 1.4, 1.5)), stone); lintel.position.set(12, 11.2, 3); group.add(lintel); return group; }
  private createCaldera(): THREE.Group { const group = new THREE.Group(), rim = new THREE.Mesh(this.geo(new THREE.TorusGeometry(7.2, 1.4, 8, 24)), this.mat(0x4b4641)); rim.rotation.x = Math.PI / 2; rim.position.y = this.getTerrainHeightAt(0, 0) + 0.8; group.add(rim); const lava = new THREE.Mesh(this.geo(new THREE.CircleGeometry(6, 32)), new THREE.ShaderMaterial({ vertexShader: lavaVertexShader, fragmentShader: lavaFragmentShader, uniforms: { uTime: { value: 0 } }, transparent: true })); lava.rotation.x = -Math.PI / 2; lava.position.y = this.getTerrainHeightAt(0, 0) + 0.85; group.add(lava); return group; }
  private createSatelliteRocks(): THREE.InstancedMesh { const rocks = new THREE.InstancedMesh(this.geo(new THREE.DodecahedronGeometry(1, 1)), this.mat(0x3f4a4c), this.opts.rockCount), matrix = new THREE.Matrix4(); for (let i = 0; i < this.opts.rockCount; i++) { const a = this.random() * Math.PI * 2, r = 42 + this.random() * 9; matrix.makeTranslation(Math.cos(a) * r, 2 + this.random() * 10, Math.sin(a) * r).scale(new THREE.Vector3(0.5 + this.random(), 0.5 + this.random(), 0.5 + this.random())); rocks.setMatrixAt(i, matrix); } return rocks; }
  private createWaterfalls(): THREE.Group { const g = new THREE.Group(), m = new THREE.ShaderMaterial({ vertexShader: waterVertexShader, fragmentShader: waterFragmentShader, uniforms: { uTime: { value: 0 } }, transparent: true, side: THREE.DoubleSide, depthWrite: false }); this.materials.push(m); for (const x of [-13, 18]) { const sheet = new THREE.Mesh(this.geo(new THREE.PlaneGeometry(3, 15, 8, 20)), m); sheet.position.set(x, -2, 5); sheet.rotation.y = 0.25; g.add(sheet); } return g; }
  private createClouds(): THREE.InstancedMesh { const clouds = new THREE.InstancedMesh(this.geo(new THREE.IcosahedronGeometry(2.6, 1)), this.mat(0xf7fbff, 0.95), this.opts.cloudCount), matrix = new THREE.Matrix4(); for (let i = 0; i < this.opts.cloudCount; i++) { const a = i / this.opts.cloudCount * Math.PI * 2, r = 56 + this.random() * 15; matrix.makeTranslation(Math.cos(a) * r, 24 + this.random() * 11, Math.sin(a) * r).scale(new THREE.Vector3(2.5, 0.65, 1.3)); clouds.setMatrixAt(i, matrix); } return clouds; }
  public update(elapsed: number): void { this.foliageMaterials.forEach(m => m.uniforms.uTime.value = elapsed); this.root.traverse(o => { const m = o as THREE.Mesh; if (m.material && !Array.isArray(m.material) && (m.material as THREE.ShaderMaterial).uniforms?.uTime) (m.material as THREE.ShaderMaterial).uniforms.uTime.value = elapsed; }); if (this.clouds) this.clouds.rotation.y += 0.0008; }
  public dispose(): void { this.geometries.forEach(g => g.dispose()); this.materials.forEach(resource => resource.dispose()); }
}
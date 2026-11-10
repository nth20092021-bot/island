import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import {
  brickMaterial, grassMaterial, lacquerMaterial, lateriteMaterial, limWoodMaterial,
  mistSprite, patinaMaterial, rockMaterial, sandMaterial, roofTileMaterial
} from './TextureFactory';
import { foliageVertexShader, foliageFragmentShader } from './Shaders/FoliageShader';
import { waterFragmentShader, waterVertexShader } from './Shaders/WaterShader';
import { streamFragmentShader, streamVertexShader } from './Shaders/LavaShader';
import { cloudVertexShader, cloudFragmentShader, SKY_HORIZON_FOG } from './Shaders/SkyShader';
import {
  ISLAND_SCALE, ISLAND_HEIGHT_SCALE, RIVER_PATH, SUN_DIRECTION, FOG_DENSITY, riverDistance,
  VILLAGE_CENTER, VILLAGE_FLAT_RADIUS, VILLAGE_BLEND_RADIUS, LOTUS_POND_CENTER, RICE_TERRACE_CENTER
} from '../core/IslandLayout';
import { ChestData } from '../core/EventBus';

export interface EnvironmentBuilderOptions {
  seed?: number;
  treeCount?: number;
  palmCount?: number;
  shrubCount?: number;
  rockCount?: number;
  cloudCount?: number;
}

/** Cao độ thềm ao sen sau khi san phẳng, để mặt nước nằm ngang thay vì lơ lửng trên sườn dốc. */
const LOTUS_PAD_Y = 13.5;

/**
 * EnvironmentBuilder: Hòn đảo Đại Việt hoàng hôn quy mô lớn.
 * - Địa hình đồi núi, thung lũng suối, thác nước đôi và đàn tế trời trên đỉnh
 * - Quần thể đình làng Việt: sân gạch, đình mái cong, cổng tam quan, tháp chuông,
 *   tượng rồng đá, cầu ngói vượt suối, ao sen và ruộng bậc thang
 * - Thảm thực vật bản địa: lũy tre, dừa thân cong, chuối, cau, cây đa, rừng tán rộng
 * - Vật liệu PBR: ngói âm dương, gỗ lim, sơn mài, đồng patina, đá ong, gạch nung
 */
export class EnvironmentBuilder {
  private readonly opts: Required<EnvironmentBuilderOptions>;
  private readonly geometries: THREE.BufferGeometry[] = [];
  private readonly materials: Array<THREE.Material | THREE.Texture> = [];
  private readonly foliageMaterials: THREE.ShaderMaterial[] = [];
  private readonly sunDirection = new THREE.Vector3(...SUN_DIRECTION).normalize();
  private readonly riverCurve = new THREE.CatmullRomCurve3(
    RIVER_PATH.map(([x, z]) => new THREE.Vector3(x, 0, z)), false, 'catmullrom', 0.5
  );
  private chestClearings: THREE.Vector2[] = [];
  private root = new THREE.Group();
  private clouds: THREE.Object3D | null = null;
  private spray: THREE.Points | null = null;
  private incense: THREE.Points | null = null;
  private fallMist: THREE.Points | null = null;
  private cranes: THREE.Group | null = null;
  private craneBodies: THREE.InstancedMesh | null = null;
  private craneWings: THREE.InstancedMesh | null = null;
  private fireflies: THREE.Points | null = null;
  private leaves: THREE.InstancedMesh | null = null;
  private readonly craneFlock = [
    { angle: 0.0, radius: 50, height: 30, speed: 0.030, phase: 0.0, scale: 1.0 },
    { angle: 0.5, radius: 53, height: 31.4, speed: 0.028, phase: 0.7, scale: 0.92 },
    { angle: 0.95, radius: 47, height: 29, speed: 0.033, phase: 1.9, scale: 0.86 },
    { angle: 1.6, radius: 56, height: 32.2, speed: 0.026, phase: 3.1, scale: 1.05 },
    { angle: 2.3, radius: 44, height: 27.6, speed: 0.035, phase: 4.4, scale: 0.8 },
    { angle: 3.1, radius: 58, height: 33.5, speed: 0.025, phase: 5.2, scale: 0.95 },
    { angle: 4.0, radius: 49, height: 28.4, speed: 0.031, phase: 2.5, scale: 0.9 }
  ];
  private readonly leafState: Array<{
    x: number; z: number; ground: number; fall: number; sway: number; phase: number; spin: number;
  }> = [];
  private readonly fireflyOrigin = new Float32Array(90 * 3);
  private stoneMaterial: THREE.MeshStandardMaterial | null = null;
  private wetStoneMaterial: THREE.MeshStandardMaterial | null = null;
  private gravelMaterial: THREE.MeshStandardMaterial | null = null;
  private limWoodMat: THREE.MeshStandardMaterial | null = null;
  private lacquerMat: THREE.MeshStandardMaterial | null = null;
  private patinaMat: THREE.MeshStandardMaterial | null = null;
  private roofTileMat: THREE.MeshStandardMaterial | null = null;
  private lateriteMat: THREE.MeshStandardMaterial | null = null;
  private brickMat: THREE.MeshStandardMaterial | null = null;
  /** Cao độ thềm làng: lấy từ địa hình gốc tại tâm làng rồi san phẳng quanh đó. */
  private villagePadY = 0;
  private readonly reserved = [
    { x: 0, z: 0, r: 13.2 },
    { x: 0, z: 14.6, r: 5.4 },
    { x: VILLAGE_CENTER.x, z: VILLAGE_CENTER.z, r: 21.5 },
    { x: LOTUS_POND_CENTER.x, z: LOTUS_POND_CENTER.z, r: 8.5 },
    { x: RICE_TERRACE_CENTER.x, z: RICE_TERRACE_CENTER.z, r: 20 }
  ];
  private random: () => number;

  public constructor(options: EnvironmentBuilderOptions = {}) {
    let seed = options.seed ?? 88;
    this.random = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };
    this.opts = {
      seed: options.seed ?? 88,
      treeCount: options.treeCount ?? 125,
      palmCount: options.palmCount ?? 42,
      shrubCount: options.shrubCount ?? 65,
      rockCount: options.rockCount ?? 55,
      cloudCount: options.cloudCount ?? 18
    };
    this.villagePadY = this.rawTerrainHeight(VILLAGE_CENTER.x, VILLAGE_CENTER.z);
  }

  public setChestClearings(chests: ChestData[]): void {
    this.chestClearings = chests.map((chest) => new THREE.Vector2(
      chest.position.x / ISLAND_SCALE, chest.position.z / ISLAND_SCALE
    ));
  }

  private clearOfChests(x: number, z: number, radius: number): boolean {
    return this.chestClearings.every((pos) => Math.hypot(x - pos.x, z - pos.y) > radius);
  }

  private clearOfStructures(x: number, z: number, radius: number): boolean {
    return this.reserved.every((area) => Math.hypot(x - area.x, z - area.z) > area.r + radius * 0.5);
  }

  private randomClearing(minRadius: number, maxRadius: number, clearance: number): THREE.Vector2 {
    for (let attempt = 0; attempt < 40; attempt++) {
      const angle = this.random() * Math.PI * 2;
      const radius = minRadius + this.random() * (maxRadius - minRadius);
      const x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
      if (this.clearOfChests(x, z, clearance)
        && this.clearOfStructures(x, z, clearance)
        && riverDistance(x, z) > 5) {
        return new THREE.Vector2(x, z);
      }
    }
    throw new Error('Unable to place decoration safely on the island');
  }

  public build(): THREE.Group {
    this.root = new THREE.Group();
    this.root.name = 'MajesticTropicalIsland';
    this.root.scale.set(ISLAND_SCALE, ISLAND_HEIGHT_SCALE, ISLAND_SCALE);

    // 1. Biển ngọc lam bao la & Vách đá ngầm hùng vĩ
    this.root.add(this.createOcean());
    this.root.add(this.createSeaCliffs());

    // 2. Bề mặt địa hình đồi núi hùng vĩ quy mô lớn
    this.root.add(this.createTerrainSurface());

    // 3. Công trình tự nhiên & di tích Việt
    this.root.add(this.createSummitAltar());      // Đàn tế trời, bia rùa & mặt trống đồng
    this.root.add(this.createSummitBackdrop());   // Rừng thông phủ kín vai núi sau đàn tế
    this.root.add(this.createGrandWaterfalls());  // Thác nước đôi đổ từ vách đá
    this.root.add(this.createMeanderingRiver());  // Con suối uốn lượn qua thung lũng
    this.root.add(this.createRiceTerraces());     // Ruộng bậc thang khoét theo đường đồng mức
    this.root.add(this.createLotusPond());        // Ao sen viền đá ong
    this.root.add(this.createVillage());          // Đình làng, tam quan, tháp chuông, sân gạch
    this.root.add(this.createCoveredBridge());    // Cầu ngói có mái vượt suối
    this.root.add(this.createPier());             // Cầu tàu ven biển

    // 4. Hệ sinh thái làng quê Việt: tre, dừa thân cong, chuối, cau, rừng tán rộng
    this.root.add(this.createBeachPalms());
    this.root.add(this.createCanopyForest());
    this.root.add(this.createArecaPalms());
    this.root.add(this.createBananaPlants());
    this.root.add(this.createBambooGroves());
    this.root.add(this.createBanyanTrees());
    this.root.add(this.createHighlandTrees());
    this.root.add(this.createTropicalShrubs());

    // 5. Tảng đá phủ rêu & Mây trời bồng bềnh
    this.root.add(this.createMossyBoulders());
    this.root.add(this.createCoastalMonuments());
    this.clouds = this.createClouds();
    this.root.add(this.clouds);

    // 6. Sinh vật & không khí: hạc bay, đom đóm, lá rơi, sương thác
    this.root.add(this.createCranes());
    this.root.add(this.createFireflies());
    this.root.add(this.createFallingLeaves());
    this.root.add(this.createWaterfallMist());

    return this.root;
  }

  private noise(x: number, z: number): number {
    // Continuous detail prevents sharp height jumps and water clipping through the terrain.
    return Math.sin(x * 0.23 + this.opts.seed) * Math.cos(z * 0.19) * 0.55
      + Math.sin(x * 0.48 + z * 0.34) * 0.23;
  }

  /**
   * Lấy độ cao chuẩn xác tại tọa độ (x, z) của hòn đảo hùng vĩ
   * Bán kính đảo mở rộng ~68m, đỉnh núi cao ~22m với thung lũng suối tự nhiên
   */
  public getTerrainHeightAt(x: number, z: number): number {
    return this.localTerrainHeightAt(x / ISLAND_SCALE, z / ISLAND_SCALE) * ISLAND_HEIGHT_SCALE;
  }

  /**
   * Độ cao địa hình gốc: đồi tròn + sống núi + thung lũng suối + lòng ao sen.
   * Chưa gồm thềm làng san phẳng để các công trình khác có thể lấy địa hình thật.
   */
  private rawTerrainHeight(x: number, z: number): number {
    const r = Math.sqrt(x * x + z * z);
    if (r >= 74) return -2.8;

    // Tỉ lệ khoảng cách từ tâm đến bờ biển (r=66m)
    const normR = THREE.MathUtils.clamp(r / 66.0, 0, 1);
    const hillShape = Math.cos(normR * (Math.PI / 2));

    // Độ cao cơ sở từ bờ biển (1.4m) lên đỉnh cao nguyên hùng vĩ (21.5m)
    const base = 1.4 + Math.pow(hillShape, 1.35) * 20.0;

    // Các sống núi và nếp gấp sườn đồi
    const mountainRidges = Math.sin(x * 0.07) * Math.cos(z * 0.07) * 2.6;

    // Thung lũng lòng suối uốn lượn tự nhiên
    const riverValley = -Math.exp(-Math.pow(riverDistance(x, z) / 4.2, 2)) * 2.8;
    const poolDistance = Math.hypot(x + 18, z - 18);
    const pool = -Math.exp(-Math.pow(poolDistance / 6.8, 4)) * 2.3;

    // Ao sen lõm nhẹ vào sườn đồi để mặt nước nằm dưới vành đá ong.
    const lotusDistance = Math.hypot(x - LOTUS_POND_CENTER.x, z - LOTUS_POND_CENTER.z);
    const lotus = -Math.exp(-Math.pow(lotusDistance / 5.4, 4)) * 1.25;

    const detail = this.noise(x, z) * (r < 18 ? 0.4 : 0.85);

    const height = THREE.MathUtils.clamp(base + mountainRidges + riverValley + pool + lotus + detail, 0.5, 25.5);
    // Lower the beach smoothly beneath the sea, rather than cutting a rectangular rim.
    const shore = THREE.MathUtils.smoothstep(r, 68, 74);
    let shaped = THREE.MathUtils.lerp(height, -2.8, shore);
    // Thềm ao sen: san phẳng vành ao để mặt nước phẳng không hở chân trên sườn dốc.
    const pondRadius = Math.hypot(x - LOTUS_POND_CENTER.x, z - LOTUS_POND_CENTER.z);
    if (pondRadius < 9.5) {
      const pad = 1 - THREE.MathUtils.smoothstep(pondRadius, 6.4, 9.5);
      shaped = THREE.MathUtils.lerp(shaped, LOTUS_PAD_Y + lotus, pad);
    }
    return shaped;
  }

  /** Địa hình thực tế: thềm làng được san phẳng và hòa dần vào sườn đồi xung quanh. */
  private localTerrainHeightAt(x: number, z: number): number {
    const raw = this.rawTerrainHeight(x, z);
    const distance = Math.hypot(x - VILLAGE_CENTER.x, z - VILLAGE_CENTER.z);
    if (distance >= VILLAGE_BLEND_RADIUS) return raw;
    const flat = 1 - THREE.MathUtils.smoothstep(distance, VILLAGE_FLAT_RADIUS, VILLAGE_BLEND_RADIUS);
    return THREE.MathUtils.lerp(raw, this.villagePadY, flat);
  }

  public getTerrainNormalAt(x: number, z: number): THREE.Vector3 {
    const e = 0.25;
    const dx = this.getTerrainHeightAt(x + e, z) - this.getTerrainHeightAt(x - e, z);
    const dz = this.getTerrainHeightAt(x, z + e) - this.getTerrainHeightAt(x, z - e);
    return new THREE.Vector3(-dx / (2 * e), 1, -dz / (2 * e)).normalize();
  }

  private mat(color: number, roughness = 0.82, metalness = 0): THREE.MeshStandardMaterial {
    const m = new THREE.MeshStandardMaterial({ color, roughness, metalness, flatShading: true });
    this.materials.push(m);
    return m;
  }

  private geo<T extends THREE.BufferGeometry>(g: T): T {
    this.geometries.push(g);
    return g;
  }

  /** Một bộ texture đá dùng chung cho toàn cảnh vật để không nhân bản canvas PBR. */
  private sharedStone(): THREE.MeshStandardMaterial {
    if (!this.stoneMaterial) this.stoneMaterial = rockMaterial(this.materials);
    return this.stoneMaterial;
  }

  /** Đá ngập nước: nhám thấp hơn, sẫm hơn để trông ướt và dính vào lòng suối. */
  private wetStone(): THREE.MeshStandardMaterial {
    if (!this.wetStoneMaterial) {
      const m = this.sharedStone().clone();
      m.roughness = 0.5;
      m.color = new THREE.Color(0xa9b3ae);
      this.wetStoneMaterial = m;
      this.materials.push(m);
    }
    return this.wetStoneMaterial;
  }

  /**
   * Sỏi cuội lòng suối: bỏ hẳn bộ texture đá (vốn tối màu) vì trên viên đá nhỏ
   * mỗi pixel chỉ lấy được một mẫu sẫm, làm cả bãi đá hóa đen như lỗ thủng trên cỏ.
   */
  private gravelStone(): THREE.MeshStandardMaterial {
    if (!this.gravelMaterial) {
      const m = this.sharedStone().clone();
      m.map = null;
      m.roughnessMap = null;
      m.normalMap = null;
      m.color = new THREE.Color(0x8f9a97);
      m.roughness = 0.62;
      this.gravelMaterial = m;
      this.materials.push(m);
    }
    return this.gravelMaterial;
  }

  private limWood(): THREE.MeshStandardMaterial {
    if (!this.limWoodMat) this.limWoodMat = limWoodMaterial(this.materials);
    return this.limWoodMat;
  }

  private lacquer(): THREE.MeshStandardMaterial {
    if (!this.lacquerMat) this.lacquerMat = lacquerMaterial(this.materials);
    return this.lacquerMat;
  }

  private patina(): THREE.MeshStandardMaterial {
    if (!this.patinaMat) this.patinaMat = patinaMaterial(this.materials);
    return this.patinaMat;
  }

  private roofTile(): THREE.MeshStandardMaterial {
    if (!this.roofTileMat) this.roofTileMat = roofTileMaterial(this.materials);
    return this.roofTileMat;
  }

  private laterite(): THREE.MeshStandardMaterial {
    if (!this.lateriteMat) this.lateriteMat = lateriteMaterial(this.materials);
    return this.lateriteMat;
  }

  private brick(): THREE.MeshStandardMaterial {
    if (!this.brickMat) this.brickMat = brickMaterial(this.materials);
    return this.brickMat;
  }

  private streamMaterial(overrides: Record<string, number>): THREE.ShaderMaterial {
    const uniforms: Record<string, THREE.IUniform> = {
      uTime: { value: 0 },
      uFlowSpeed: { value: 1 },
      uFoam: { value: 0.35 },
      uInvert: { value: 0 },
      uRadial: { value: 0 },
      uWhiteness: { value: 0 },
      uSideFade: { value: 0 },
      uSunDirection: { value: this.sunDirection }
    };
    for (const [key, value] of Object.entries(overrides)) uniforms[key] = { value };

    const m = new THREE.ShaderMaterial({
      vertexShader: streamVertexShader,
      fragmentShader: streamFragmentShader,
      uniforms,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    this.materials.push(m);
    return m;
  }

  /** Bề rộng lòng suối: hẹp ở đầu nguồn, mở dần về phía cửa và gợn sóng theo khúc khuỷu. */
  private riverHalfWidth(t: number): number {
    return 2.0 + t * 1.65 + Math.sin(t * 9.4) * 0.26;
  }

  /** Mặt nước cao hơn nền lòng suối: sâu ở tim đường, mép phải chìm dưới bờ để không lộ viền nước. */
  private riverSurfaceLift(side: number): number {
    return 0.34 - side * side * 0.52;
  }

  private addStone(
    slot: { mesh: THREE.InstancedMesh; index: number },
    x: number, z: number, baseY: number, size: number, sink: number, flatten?: number
  ): void {
    if (slot.index >= slot.mesh.count) return;
    const squashed = flatten ?? 0.42 + this.random() * 0.3;
    const euler = new THREE.Euler(
      (this.random() - 0.5) * 0.45, this.random() * Math.PI * 2, (this.random() - 0.5) * 0.45
    );
    const matrix = new THREE.Matrix4().compose(
      new THREE.Vector3(x, baseY - size * sink, z),
      new THREE.Quaternion().setFromEuler(euler),
      new THREE.Vector3(
        size * (0.85 + this.random() * 0.55),
        size * squashed,
        size * (0.85 + this.random() * 0.55)
      )
    );
    slot.mesh.setMatrixAt(slot.index++, matrix);
  }

  private stoneSlots(...meshes: THREE.InstancedMesh[]) {
    return meshes.map((mesh) => ({ mesh, index: 0 }));
  }

  private finishStones(...slots: Array<{ mesh: THREE.InstancedMesh; index: number }>): THREE.InstancedMesh[] {
    return slots.map(({ mesh, index }) => {
      mesh.count = index;
      mesh.instanceMatrix.needsUpdate = true;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      return mesh;
    });
  }

  /**
   * 1. Biển ngọc lam nhiệt đới bao la (mở rộng tới tận đường chân trời)
   */
  private createOcean(): THREE.Mesh {
    const g = this.geo(new THREE.CircleGeometry(4200, 160));
    g.rotateX(-Math.PI / 2);
    const m = new THREE.ShaderMaterial({
      vertexShader: waterVertexShader,
      fragmentShader: waterFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uPool: { value: 0 },
        uSunDirection: { value: this.sunDirection }
      },
      transparent: true,
      side: THREE.DoubleSide
    });
    this.materials.push(m);
    const water = new THREE.Mesh(g, m);
    water.name = 'MajesticLagoonOcean';
    water.position.y = 0.2;
    return water;
  }

  /**
   * 2. Vách đá ngầm nâng đỡ hòn đảo hùng vĩ
   */
  private createSeaCliffs(): THREE.Mesh {
    const g = this.geo(new THREE.CylinderGeometry(36, 68, 16, 36, 8));
    const p = g.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i);
      const z = p.getZ(i);
      const s = 1 + this.noise(x, z) * 0.12;
      p.setX(i, x * s);
      p.setZ(i, z * s);
    }
    g.translate(0, -6.5, 0);
    const cliff = new THREE.Mesh(g, this.sharedStone());
    cliff.name = 'IslandSeaCliffs';
    cliff.castShadow = true;
    cliff.receiveShadow = true;
    return cliff;
  }

  /**
   * 3. Bề mặt địa hình đồi núi nhiệt đới hùng vĩ với Vertex Colors (160m x 160m)
   */
  private createTerrainSurface(): THREE.Mesh {
    const size = 160;
    const segments = 160;
    const g = this.geo(new THREE.PlaneGeometry(size, size, segments, segments));
    g.rotateX(-Math.PI / 2);

    const p = g.attributes.position as THREE.BufferAttribute;
    const colors = new Float32Array(p.count * 3);

    const sandColor = new THREE.Color(0xe3b478);     // Cát vàng ấm bãi biển
    const shoreGrass = new THREE.Color(0xa8b062);    // Cỏ lau chuyển tiếp ven bờ
    const lushGrass = new THREE.Color(0x4f8544);     // Cỏ đồng xanh mướt
    const forestMeadow = new THREE.Color(0x2f6239);  // Thảm cỏ rừng thẫm
    const highlandGreen = new THREE.Color(0x7e944f); // Cỏ cao nguyên ngả vàng nắng
    const mountainPeak = new THREE.Color(0xa8a371);  // Đỉnh núi cỏ khô nắng chiều

    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i);
      const z = p.getZ(i);
      const r = Math.sqrt(x * x + z * z);
      const h = this.localTerrainHeightAt(x, z);
      p.setY(i, h);

      let c = lushGrass;
      if (h < 2.4) {
        c = sandColor;
      } else if (h < 5.0) {
        const t = (h - 2.4) / 2.6;
        c = sandColor.clone().lerp(shoreGrass, t);
      } else if (h < 11.5) {
        const t = (h - 5.0) / 6.5;
        c = shoreGrass.clone().lerp(lushGrass, t);
      } else if (h < 18.0) {
        const t = (h - 11.5) / 6.5;
        c = lushGrass.clone().lerp(forestMeadow, t);
      } else if (h < 22.5) {
        const t = (h - 18.0) / 4.5;
        c = forestMeadow.clone().lerp(highlandGreen, t);
      } else {
        const t = Math.min(1.0, (h - 22.5) / 3.0);
        c = highlandGreen.clone().lerp(mountainPeak, t);
      }

      // Bãi làng: quang đãng, cỏ non sáng hơn rừng thẫm để quần thể đình nổi khối.
      const villageDist = Math.hypot(x - VILLAGE_CENTER.x, z - VILLAGE_CENTER.z);
      if (villageDist < VILLAGE_BLEND_RADIUS) {
        const clearing = 1 - THREE.MathUtils.smoothstep(
          villageDist, VILLAGE_FLAT_RADIUS * 0.7, VILLAGE_BLEND_RADIUS
        );
        c = c.clone().lerp(new THREE.Color(0x7d9552), clearing * 0.55);
      }

      // Lòng suối & bãi bồi: nước chảy trên nền sỏi tối màu chứ không phải trên cỏ xanh.
      const rd = riverDistance(x, z);
      if (rd < 4.2) {
        const gravel = new THREE.Color(0x8b7d66);
        const bed = new THREE.Color(0x4a4436);
        c = c.clone().lerp(gravel, THREE.MathUtils.smoothstep(4.2 - rd, 0.0, 2.0) * 0.8);
        c = c.clone().lerp(bed, THREE.MathUtils.smoothstep(2.6 - rd, 0.0, 1.4) * 0.88);
      }

      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    g.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    g.computeVertexNormals();

    const mesh = new THREE.Mesh(g, grassMaterial(this.materials, true));
    mesh.name = 'MajesticTerrainSurface';
    mesh.receiveShadow = true;
    return mesh;
  }

  /**
   * 4. Đàn tế trời trên đỉnh núi (Summit Altar of Heaven)
   * Nền vuông tượng đất, hai tầng tròn tượng trời, bậc đá dẫn lên, mặt trống đồng
   * khảm giữa đàn, bia đá trên lưng rùa, đỉnh đồng khói hương và đèn đá soi lối.
   * Thay cho bể đá kiểu Hy-La cũ vốn lạc tông với không khí Đại Việt.
   */
  private createSummitAltar(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'SummitAltar';

    const summitY = this.localTerrainHeightAt(0, 0);
    const laterite = this.laterite();
    const brick = this.brick();
    const bronze = this.patina();
    const lacquer = this.lacquer();
    const blueStone = this.mat(0x78837a, 0.74);
    const goldTrim = this.mat(0xd9ab52, 0.3, 0.8);
    const warmPane = new THREE.MeshStandardMaterial({
      color: 0xffb877, emissive: 0xff7428, emissiveIntensity: 0.9, roughness: 0.5
    });
    this.materials.push(warmPane);

    // Đồng đánh bóng riêng cho đỉnh hương: patina xanh xỉn sẽ thành bóng đen
    // khi đặt trong bóng chiều, nên dùng đồng ấm có chút tự phát sáng.
    const censerBronze = new THREE.MeshStandardMaterial({
      color: 0xc08a4e,
      roughness: 0.4,
      metalness: 0.72,
      emissive: 0x3a2008,
      emissiveIntensity: 0.55
    });
    this.materials.push(censerBronze);

    const baseTop = summitY + 0.95;
    const midTop = summitY + 1.95;
    const topTop = summitY + 2.95;

    // Móng đá ong loe rộng ôm sườn đồi, để đàn tròn không lơ lửng trên đỉnh dốc.
    const foundation = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(11.9, 13.0, 2.6, 72)), laterite);
    foundation.position.y = summitY - 0.85;
    foundation.castShadow = true;
    foundation.receiveShadow = true;
    group.add(foundation);

    // Ba tầng tròn đồng tâm: nền lớn đá xanh, hai tầng gạch nung thu nhỏ dần (đất → trời).
    const groundTier = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(11.2, 11.8, 1.5, 72)), blueStone);
    groundTier.position.y = summitY + 0.2;
    groundTier.castShadow = true;
    groundTier.receiveShadow = true;
    group.add(groundTier);

    const middleTier = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(9.7, 10.4, 1.0, 56)), brick);
    middleTier.position.y = summitY + 1.45;
    middleTier.castShadow = true;
    middleTier.receiveShadow = true;
    group.add(middleTier);

    const upperTier = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(6.9, 7.6, 1.0, 56)), brick);
    upperTier.position.y = summitY + 2.45;
    upperTier.castShadow = true;
    upperTier.receiveShadow = true;
    group.add(upperTier);

    // Vành đá xanh ôm mép cả ba tầng tròn
    for (const [radius, y] of [[11.16, baseTop + 0.02], [9.92, midTop + 0.02], [7.12, topTop + 0.02]] as const) {
      const rim = new THREE.Mesh(this.geo(new THREE.TorusGeometry(radius, 0.14, 8, 64)), blueStone);
      rim.rotation.x = Math.PI / 2;
      rim.position.y = y;
      rim.receiveShadow = true;
      group.add(rim);
    }

    // Mặt đàn lát gạch nung, men theo vành trên
    const paving = new THREE.Mesh(this.geo(new THREE.CircleGeometry(6.88, 64)), brick);
    paving.rotation.x = -Math.PI / 2;
    paving.position.y = topTop + 0.02;
    paving.receiveShadow = true;
    group.add(paving);

    // Ba vế thang đá: chân đồi -> nền tròn -> tầng giữa -> tầng đàn
    const stairBaseY = summitY - 2.0;
    const stairGround = this.localTerrainHeightAt(0, 16.2);
    // Mỗi vế thang gộp thành một mesh để không tốn một draw call cho từng bậc.
    const addFlight = (fromZ: number, toZ: number, fromTop: number, toTop: number, width: number) => {
      const count = Math.max(2, Math.round((fromZ - toZ) / 0.72));
      const depth = (fromZ - toZ) / count;
      const rise = (toTop - fromTop) / count;
      const parts: THREE.BufferGeometry[] = [];
      for (let i = 0; i < count; i++) {
        const topY = fromTop + rise * (i + 1);
        const height = topY - stairBaseY;
        const step = new THREE.BoxGeometry(width - i * 0.09, height, depth + 0.06);
        step.translate(0, stairBaseY + height / 2, fromZ - depth * (i + 0.5));
        parts.push(step);
      }
      const merged = mergeGeometries(parts, false);
      parts.forEach((part) => part.dispose());
      if (!merged) return;
      const flight = new THREE.Mesh(this.geo(merged), laterite);
      flight.castShadow = true;
      flight.receiveShadow = true;
      group.add(flight);
    };
    addFlight(16.4, 11.0, stairGround + 0.12, baseTop, 6.2);
    addFlight(11.6, 9.35, baseTop, midTop, 4.9);
    addFlight(8.3, 5.7, midTop, topTop, 4.2);

    // Mặt trống đồng khảm giữa đàn: vành đồng, ba vòng hoa văn, sao 12 tia và 8 chấm
    const faceY = topTop + 0.19;
    const drumFace = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(2.3, 2.4, 0.16, 64)), bronze);
    drumFace.position.y = topTop + 0.1;
    drumFace.receiveShadow = true;
    group.add(drumFace);

    // Ba vành, 12 tia và 8 chấm vàng gộp chung một mesh thếp vàng.
    const faceParts: THREE.BufferGeometry[] = [];
    for (const radius of [2.12, 1.56, 0.96]) {
      const ring = new THREE.TorusGeometry(radius, 0.045, 6, 64);
      ring.rotateX(Math.PI / 2);
      ring.translate(0, faceY, 0);
      faceParts.push(ring);
    }
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const ray = new THREE.BoxGeometry(0.98, 0.05, 0.13);
      ray.rotateY(-angle);
      ray.translate(Math.cos(angle) * 0.99, faceY, Math.sin(angle) * 0.99);
      faceParts.push(ray);
    }
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2 + Math.PI / 8;
      const dot = new THREE.SphereGeometry(0.06, 6, 5);
      dot.translate(Math.cos(angle) * 1.86, faceY, Math.sin(angle) * 1.86);
      faceParts.push(dot);
    }
    const mergedFace = mergeGeometries(faceParts, false);
    faceParts.forEach((part) => part.dispose());
    if (mergedFace) group.add(new THREE.Mesh(this.geo(mergedFace), goldTrim));
    const boss = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(0.34, 0.4, 0.12, 20)), bronze);
    boss.position.y = faceY + 0.02;
    group.add(boss);

    // Bia đá dựng trên lưng rùa, mặt bia sơn son viền vàng
    const turtle = new THREE.Group();
    turtle.position.set(0, topTop + 0.03, -3.7);

    const shell = new THREE.Mesh(this.geo(new THREE.SphereGeometry(1.0, 20, 12)), blueStone);
    shell.scale.set(0.95, 0.4, 1.3);
    shell.position.y = 0.36;
    shell.castShadow = true;
    turtle.add(shell);

    const neck = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(0.15, 0.21, 0.46, 8)), blueStone);
    neck.rotation.x = Math.PI / 2;
    neck.position.set(0, 0.26, 1.02);
    turtle.add(neck);

    const head = new THREE.Mesh(this.geo(new THREE.SphereGeometry(0.24, 12, 10)), blueStone);
    head.scale.set(1, 0.85, 1.15);
    head.position.set(0, 0.32, 1.28);
    turtle.add(head);

    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        const leg = new THREE.Mesh(this.geo(new THREE.SphereGeometry(0.22, 8, 6)), blueStone);
        leg.scale.set(0.7, 0.55, 1.1);
        leg.position.set(sx * 0.66, 0.1, sz * 0.8);
        turtle.add(leg);
      }
    }
    const tail = new THREE.Mesh(this.geo(new THREE.ConeGeometry(0.1, 0.42, 5)), blueStone);
    tail.position.set(0, 0.16, -1.4);
    tail.rotation.x = -Math.PI * 0.4;
    turtle.add(tail);

    const stele = new THREE.Mesh(this.geo(new THREE.BoxGeometry(1.6, 2.0, 0.32)), blueStone);
    stele.position.set(0, 1.55, 0);
    stele.castShadow = true;
    turtle.add(stele);

    const crown = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(0.8, 0.8, 0.32, 24)), blueStone);
    crown.rotation.x = Math.PI / 2;
    crown.position.set(0, 2.55, 0);
    turtle.add(crown);

    const panel = new THREE.Mesh(this.geo(new THREE.BoxGeometry(1.16, 1.5, 0.05)), lacquer);
    panel.position.set(0, 1.72, 0.19);
    turtle.add(panel);

    for (const [w, h, x, y] of [
      [1.32, 0.08, 0, 2.53],
      [1.32, 0.08, 0, 0.91],
      [0.08, 1.7, -0.62, 1.72],
      [0.08, 1.7, 0.62, 1.72]
    ]) {
      const border = new THREE.Mesh(this.geo(new THREE.BoxGeometry(w, h, 0.04)), goldTrim);
      border.position.set(x, y, 0.21);
      turtle.add(border);
    }
    for (const x of [-0.3, 0.3]) {
      for (const y of [1.25, 1.55, 1.85, 2.15]) {
        const glyph = new THREE.Mesh(this.geo(new THREE.BoxGeometry(0.13, 0.13, 0.035)), goldTrim);
        glyph.position.set(x, y, 0.225);
        turtle.add(glyph);
      }
    }
    group.add(turtle);

    // Đỉnh đồng hương khói đặt chếch bên trái để không che bia rùa và mặt trống
    const censer = this.createBronzeCenser(censerBronze);
    censer.position.set(-3.6, topTop, 3.4);
    censer.rotation.y = 0.3;
    censer.scale.setScalar(0.82);
    group.add(censer);

    const smokeCount = 26;
    const smokeGeo = this.geo(new THREE.BufferGeometry());
    smokeGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(smokeCount * 3), 3));
    const smokeMat = new THREE.PointsMaterial({
      color: 0xdccdb6,
      size: 0.92,
      map: mistSprite(this.materials),
      transparent: true,
      opacity: 0.3,
      depthWrite: false
    });
    this.materials.push(smokeMat);
    this.incense = new THREE.Points(smokeGeo, smokeMat);
    this.incense.position.set(-3.6, topTop + 1.35, 3.4);
    this.incense.frustumCulled = false;
    group.add(this.incense);

    // Bốn đèn đá ở bốn góc tầng đàn
    const addLantern = (x: number, z: number) => {
      const lantern = new THREE.Group();
      lantern.position.set(x, topTop, z);
      lantern.scale.setScalar(0.8);

      const base = new THREE.Mesh(this.geo(new THREE.BoxGeometry(0.62, 0.22, 0.62)), blueStone);
      base.position.y = 0.11;
      base.receiveShadow = true;
      lantern.add(base);

      const post = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(0.14, 0.19, 1.05, 6)), blueStone);
      post.position.y = 0.74;
      lantern.add(post);

      const pane = new THREE.Mesh(this.geo(new THREE.BoxGeometry(0.5, 0.46, 0.5)), warmPane);
      pane.position.y = 1.5;
      lantern.add(pane);

      for (const angle of [0, Math.PI / 2]) {
        const frame = new THREE.Mesh(this.geo(new THREE.BoxGeometry(0.58, 0.56, 0.08)), blueStone);
        frame.position.y = 1.5;
        frame.rotation.y = angle;
        lantern.add(frame);
      }

      const roof = new THREE.Mesh(this.geo(new THREE.ConeGeometry(0.52, 0.36, 4)), blueStone);
      roof.position.y = 1.96;
      roof.rotation.y = Math.PI / 4;
      lantern.add(roof);

      const finial = new THREE.Mesh(this.geo(new THREE.SphereGeometry(0.07, 6, 5)), goldTrim);
      finial.position.y = 2.18;
      lantern.add(finial);

      group.add(lantern);
    };
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) addLantern(sx * 4.3, sz * 4.3);
    }

    // Rồng đá chầu hai bên chân thang
    for (const side of [-1, 1]) {
      const x = side * 4.85;
      const z = 15.2;
      const dragon = this.createStoneDragon(0.85);
      dragon.position.set(x, this.localTerrainHeightAt(x, z), z);
      dragon.rotation.y = side * 0.22;
      group.add(dragon);
    }

    // Một nguồn sáng ấm đặt phía trước, nâng đàn tế, mặt trống và đỉnh hương khỏi bóng chiều
    const altarLight = new THREE.PointLight(0xffa35c, 16, 24, 2);
    altarLight.position.set(-1.8, topTop + 2.4, 5.4);
    group.add(altarLight);

    return group;
  }

  /**
   * Vai núi sau đàn tế: rừng thông nhiều tầng tán, đá mọc rêu và bụi thấp phủ kín
   * vòng đất trống quanh móng đàn, để đỉnh núi không còn một khoảng trơ trọi.
   */
  private createSummitBackdrop(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'SummitBackdrop';

    const trunkMat = this.foliageMaterial(0x453329, 0.03);
    const pineMat = this.foliageMaterial(0x255d3a, 0.09);
    const shrubMat = this.foliageMaterial(0x5c7a3a, 0.12);
    const stoneMat = this.sharedStone();

    const pines = 18;
    const trunks = new THREE.InstancedMesh(
      this.geo(new THREE.CylinderGeometry(0.24, 0.4, 3.8, 6)), trunkMat, pines
    );
    const tiers = new THREE.InstancedMesh(this.geo(new THREE.ConeGeometry(2.0, 5.0, 7)), pineMat, pines * 2);
    const matrix = new THREE.Matrix4();

    for (let i = 0; i < pines; i++) {
      // Chỉ trồng trên nửa vòng khuất sau đàn (z âm), chừa lối thang phía trước.
      const angle = Math.PI * 1.06 + (i / (pines - 1)) * Math.PI * 0.88;
      const radius = 15.5 + this.random() * 5.5;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = this.localTerrainHeightAt(x, z);
      const s = 0.85 + this.random() * 0.5;

      matrix.makeTranslation(x, y + 1.9 * s, z).scale(new THREE.Vector3(s, s, s));
      trunks.setMatrixAt(i, matrix);

      matrix.makeTranslation(x, y + 4.5 * s, z).scale(new THREE.Vector3(s, s, s));
      tiers.setMatrixAt(i * 2, matrix);

      matrix.makeTranslation(x, y + 6.2 * s, z).scale(new THREE.Vector3(s * 0.66, s * 0.8, s * 0.66));
      tiers.setMatrixAt(i * 2 + 1, matrix);
    }

    // Bụi thấp lấp kín vành đất quanh móng đàn (trừ lối thang phía trước).
    const shrubs = 16;
    const bushes = new THREE.InstancedMesh(this.geo(new THREE.IcosahedronGeometry(1.0, 1)), shrubMat, shrubs);
    let bushIndex = 0;
    for (let i = 0; i < shrubs; i++) {
      const angle = (i / shrubs) * Math.PI * 2 + 0.12;
      const radius = 13.2 + this.random() * 1.6;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      if (z > 9 && Math.abs(x) < 4.2) continue;
      const y = this.localTerrainHeightAt(x, z);
      const s = 0.45 + this.random() * 0.35;
      matrix.makeTranslation(x, y + 0.4 * s, z).scale(new THREE.Vector3(s * 1.4, s * 0.8, s * 1.3));
      bushes.setMatrixAt(bushIndex++, matrix);
    }
    bushes.count = bushIndex;

    const rocks = 7;
    const boulders = new THREE.InstancedMesh(this.geo(new THREE.DodecahedronGeometry(1.4, 0)), stoneMat, rocks);
    for (let i = 0; i < rocks; i++) {
      const angle = Math.PI * 1.1 + this.random() * Math.PI * 0.8;
      const radius = 13 + this.random() * 5;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = this.localTerrainHeightAt(x, z);
      const s = 0.45 + this.random() * 0.6;
      matrix.makeTranslation(x, y + 0.3 * s, z).scale(new THREE.Vector3(s * 1.2, s * 0.8, s));
      boulders.setMatrixAt(i, matrix);
    }

    trunks.castShadow = tiers.castShadow = true;
    boulders.castShadow = boulders.receiveShadow = true;
    group.add(trunks, tiers, bushes, boulders);
    return group;
  }

  /**
   * 5. Thác nước đôi hùng vĩ (Grand Cascading Waterfalls)
   */
  private createGrandWaterfalls(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'GrandWaterfalls';

    const fallMat = this.streamMaterial({ uFlowSpeed: 3.4, uFoam: 0.9, uInvert: 1, uWhiteness: 0.9, uSideFade: 1 });
    const poolMat = this.streamMaterial({ uFlowSpeed: 1.15, uFoam: 0.8, uRadial: 1, uWhiteness: 0.14 });
    const stone = this.sharedStone();
    const wet = this.wetStone();

    const backdropGeo = this.geo(new THREE.DodecahedronGeometry(1, 1));
    const fallSlots = this.stoneSlots(
      new THREE.InstancedMesh(this.geo(new THREE.DodecahedronGeometry(1, 0)), wet, 90),
      new THREE.InstancedMesh(backdropGeo, stone, 110)
    );

    // Twin falls share the same rocky bowl and feed the stream at its source.
    // Mặt thác kéo dài xuống dưới mặt hồ để dòng nước không hụt chân ở mép.
    const fallDrop = 1.1;
    for (const [x, width, height] of [[-21, 4.5, 10], [-15, 3.6, 8.4]]) {
      const ground = this.localTerrainHeightAt(x, 18);
      const fall = new THREE.Mesh(this.geo(new THREE.PlaneGeometry(width, height + fallDrop, 8, 26)), fallMat);
      fall.position.set(x, ground + 0.25 + (height - fallDrop) * 0.5, 16.2);
      group.add(fall);

      // Vách đá sau thác: các khối đá cao xếp lệch thành nhiều tầng đá chồng.
      for (let i = 0; i < 13; i++) {
        const px = x + (i - 6) * (width / 11) + (this.random() - 0.5) * 0.5;
        const pz = 12.2 + this.random() * 2.8;
        const tier = i % 3;
        const py = this.localTerrainHeightAt(px, pz) + height * (0.24 + tier * 0.3) + 0.5;
        this.addStone(fallSlots[1], px, pz, py, 1.0 + this.random() * 0.55, 0.12, 1.45);
      }

      // Bậc đá trên miệng thác để dòng nước đổ qua khe đá chứ không chảy từ hư không.
      const crest = new THREE.Mesh(this.geo(new THREE.BoxGeometry(width + 1.2, 0.65, 2.2)), stone);
      crest.position.set(x, ground + height + 0.45, 14.9);
      crest.castShadow = true;
      group.add(crest);
      for (let i = 0; i < 4; i++) {
        const px = x - width * 0.45 + (i * width) / 3.2;
        this.addStone(fallSlots[0], px, 15.1, ground + height + 0.55, 0.24 + this.random() * 0.16, -0.1);
      }

      // Đá tảng dồn ở chân thác nơi dòng nước đập xuống.
      for (let i = 0; i < 7; i++) {
        const px = x + (this.random() - 0.5) * (width + 3.2);
        const pz = 17.4 + this.random() * 3.4;
        this.addStone(fallSlots[0], px, pz, this.localTerrainHeightAt(px, pz) + 0.34,
          0.3 + this.random() * 0.3, 0.32);
      }
    }

    const poolGeo = this.geo(new THREE.CircleGeometry(7.0, 48));
    poolGeo.rotateX(-Math.PI / 2);
    const positions = poolGeo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i) - 18, z = positions.getZ(i) + 18;
      // Vành hồ hạ thấp dần để mặt nước luồn xuống dưới bờ đá thay vì nổi trên cỏ.
      const edge = THREE.MathUtils.smoothstep(Math.hypot(positions.getX(i), positions.getZ(i)), 4.9, 6.9);
      positions.setY(i, this.localTerrainHeightAt(x, z) + 0.32 - edge * 0.5);
    }
    poolGeo.computeVertexNormals();
    const poolMesh = new THREE.Mesh(poolGeo, poolMat);
    poolMesh.position.set(-18, 0, 18);
    group.add(poolMesh);

    // Vòng đá quanh hồ: mép nước không còn là một đường tròn cắt ngọt trên cỏ.
    for (let i = 0; i < 34; i++) {
      const a = (i / 34) * Math.PI * 2 + this.random() * 0.12;
      const radius = 6.5 + this.random() * 1.9;
      const x = -18 + Math.cos(a) * radius;
      const z = 18 + Math.sin(a) * radius;
      const big = this.random() > 0.7;
      this.addStone(big ? fallSlots[1] : fallSlots[0], x, z, this.localTerrainHeightAt(x, z) + 0.3,
        big ? 0.45 + this.random() * 0.3 : 0.2 + this.random() * 0.22, 0.3);
    }
    // Vài tảng nổi giữa hồ nơi bọt nước tung quanh đá.
    for (let i = 0; i < 6; i++) {
      const a = this.random() * Math.PI * 2;
      const radius = 1.4 + this.random() * 3.4;
      const x = -18 + Math.cos(a) * radius;
      const z = 18 + Math.sin(a) * radius;
      this.addStone(fallSlots[0], x, z, this.localTerrainHeightAt(x, z) + 0.36,
        0.16 + this.random() * 0.18, -0.2);
    }

    // Vách đá sau thác: xếp đá thành khối núi có mặt bằng cao ngang miệng thác,
    // để dòng nước đổ ra từ vách núi và phía sau không còn khoảng trống trên cỏ.
    const cliffRows: Array<[number, number, number]> = [
      [13.4, 19.8, 2.0],
      [12.2, 19.1, 2.4],
      [11.0, 18.3, 2.4],
      [9.8, 17.3, 2.5],
      [8.6, 16.1, 2.5]
    ];
    for (const [rowZ, centerY, rowSize] of cliffRows) {
      for (let i = 0; i < 11; i++) {
        const x = -27 + (i / 10) * 18 + (this.random() - 0.5) * 0.8;
        const size = rowSize * (0.85 + this.random() * 0.35);
        this.addStone(fallSlots[1], x, rowZ + (this.random() - 0.5) * 0.7,
          centerY + (this.random() - 0.5) * 0.45, size, 0, 0.62);
      }
    }

    // Rừng thông trên mặt bằng đá phía sau thác: phủ kín hậu cảnh khi nhìn từ trên đồi.
    const pineTrunkMat = this.foliageMaterial(0x453329, 0.04);
    const pineMat = this.foliageMaterial(0x275f3b, 0.1);
    const pineSpots: Array<[number, number]> = [
      [-25.6, 11.6], [-23.2, 10.2], [-20.6, 11.4], [-18.0, 10.0], [-15.4, 11.2],
      [-12.8, 10.2], [-10.6, 11.8], [-24.0, 13.0], [-12.0, 13.2]
    ];
    const pineTrunks = new THREE.InstancedMesh(
      this.geo(new THREE.CylinderGeometry(0.22, 0.4, 4.4, 6)), pineTrunkMat, pineSpots.length
    );
    const pineTiers = new THREE.InstancedMesh(
      this.geo(new THREE.ConeGeometry(1.9, 4.8, 7)), pineMat, pineSpots.length * 2
    );
    const pineMatrix = new THREE.Matrix4();
    for (let i = 0; i < pineSpots.length; i++) {
      const [x, z] = pineSpots[i];
      const base = 19.9 + this.random() * 0.4;
      const s = 0.85 + this.random() * 0.4;
      pineMatrix.makeTranslation(x, base + 2.2 * s, z).scale(new THREE.Vector3(s, s, s));
      pineTrunks.setMatrixAt(i, pineMatrix);
      pineMatrix.makeTranslation(x, base + 4.1 * s, z).scale(new THREE.Vector3(s, s, s));
      pineTiers.setMatrixAt(i * 2, pineMatrix);
      pineMatrix.makeTranslation(x, base + 5.5 * s, z).scale(new THREE.Vector3(s * 0.66, s * 0.8, s * 0.66));
      pineTiers.setMatrixAt(i * 2 + 1, pineMatrix);
    }
    pineTrunks.castShadow = pineTiers.castShadow = true;
    group.add(pineTrunks, pineTiers);

    // Bụi rậm phủ chân vách đá và vành hồ.
    const shrubMat = this.foliageMaterial(0x4f7038, 0.14);
    const bushSpots: Array<[number, number]> = [
      [-26.8, 16.2], [-25.9, 18.4], [-24.6, 20.6], [-11.2, 16.0], [-10.2, 18.2],
      [-11.4, 21.0], [-24.5, 22.8], [-11.0, 22.4], [-26.0, 13.2]
    ];
    const bushes = new THREE.InstancedMesh(
      this.geo(new THREE.IcosahedronGeometry(1.0, 1)), shrubMat, bushSpots.length
    );
    for (let i = 0; i < bushSpots.length; i++) {
      const [x, z] = bushSpots[i];
      const s = 0.5 + this.random() * 0.4;
      pineMatrix.makeTranslation(x, this.localTerrainHeightAt(x, z) + 0.42 * s, z)
        .scale(new THREE.Vector3(s * 1.45, s * 0.8, s * 1.35));
      bushes.setMatrixAt(i, pineMatrix);
    }
    bushes.castShadow = true;
    group.add(bushes);

    for (const mesh of this.finishStones(...fallSlots)) group.add(mesh);

    // Light mist is one points draw call, animated above the plunge pool.
    const sprayGeometry = this.geo(new THREE.BufferGeometry());
    sprayGeometry.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(90 * 3), 3));
    const sprayMaterial = new THREE.PointsMaterial({
      color: 0xe9fffa, size: 1.6, map: mistSprite(this.materials), transparent: true,
      opacity: 0.5, depthWrite: false, sizeAttenuation: true, blending: THREE.AdditiveBlending
    });
    this.materials.push(sprayMaterial);
    this.spray = new THREE.Points(sprayGeometry, sprayMaterial);
    this.spray.frustumCulled = false;
    group.add(this.spray);

    return group;
  }

  /**
   * 6. Con suối uốn lượn qua thung lũng (Meandering River & Stream)
   */
  private createMeanderingRiver(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'MeanderingRiver';

    const riverMat = this.streamMaterial({ uFlowSpeed: 1.35, uFoam: 0.4 });

    // One continuous bank-following ribbon, not disconnected planes floating above the hills.
    const vertices: number[] = [], uv: number[] = [], indices: number[] = [];
    const steps = 170;
    const lanes = 8;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const point = this.riverCurve.getPoint(t), tangent = this.riverCurve.getTangent(t);
      const normal = new THREE.Vector2(-tangent.z, tangent.x).normalize();
      // Bờ lở tự nhiên: lòng suối rộng hẹp theo khúc khuỷu chứ không phải hai đường song song.
      const halfWidth = this.riverHalfWidth(t) * (1 + Math.sin(t * 23.0) * 0.07);
      for (let lane = 0; lane <= lanes; lane++) {
        const side = (lane / (lanes / 2)) - 1;
        const x = point.x + normal.x * side * halfWidth;
        const z = point.z + normal.y * side * halfWidth;
        const y = this.localTerrainHeightAt(x, z) + this.riverSurfaceLift(Math.abs(side));
        vertices.push(x, y, z);
        uv.push(lane / lanes, t * 7);
      }
      if (i < steps) {
        for (let lane = 0; lane < lanes; lane++) {
          const j = i * (lanes + 1) + lane;
          const stride = lanes + 1;
          indices.push(j, j + 1, j + stride, j + 1, j + stride + 1, j + stride);
        }
      }
    }
    const geometry = this.geo(new THREE.BufferGeometry());
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    group.add(new THREE.Mesh(geometry, riverMat));
    group.add(this.createRiverStones());

    return group;
  }

  /**
   * Đá lòng suối và ven bờ: bãi sỏi bồi ở khúc cong, đá cuội lăn theo mép nước,
   * tảng đá lớn chắn dòng và cụm đá ở cửa suối đổ ra biển.
   */
  private createRiverStones(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'RiverStones';

    const pebbles = new THREE.InstancedMesh(this.geo(new THREE.IcosahedronGeometry(1, 1)), this.gravelStone(), 320);
    const cobbles = new THREE.InstancedMesh(this.geo(new THREE.DodecahedronGeometry(1, 0)), this.gravelStone(), 150);
    const boulders = new THREE.InstancedMesh(this.geo(new THREE.DodecahedronGeometry(1, 1)), this.sharedStone(), 34);
    const slots = this.stoneSlots(pebbles, cobbles, boulders);

    const at = (t: number) => {
      const point = this.riverCurve.getPoint(t);
      const tangent = this.riverCurve.getTangent(t);
      return {
        point,
        normal: new THREE.Vector2(-tangent.z, tangent.x).normalize(),
        halfWidth: this.riverHalfWidth(t)
      };
    };

    // Đá rải dọc toàn bộ tuyến: phần lớn nằm sát mép nước, thỉnh thoảng một tảng chắn giữa dòng.
    for (let i = 0; i < 210; i++) {
      const t = 0.03 + this.random() * 0.94;
      const { point, normal, halfWidth } = at(t);
      const inChannel = this.random() > 0.84;
      const side = (inChannel ? (this.random() - 0.5) * 0.7 : (this.random() > 0.5 ? 1 : -1)
        * (0.55 + this.random() * 0.5));
      const x = point.x + normal.x * side * halfWidth;
      const z = point.z + normal.y * side * halfWidth;
      const surface = this.localTerrainHeightAt(x, z) + this.riverSurfaceLift(Math.abs(side));
      const roll = this.random();
      const slot = roll > 0.93 ? slots[2] : roll > 0.55 ? slots[1] : slots[0];
      const big = slot === slots[2], mid = slot === slots[1];
      const size = big ? 0.45 + this.random() * 0.35 : mid ? 0.28 + this.random() * 0.22 : 0.14 + this.random() * 0.12;
      // Đá dẹt nằm sát mặt đất: khối cầu tròn vo trông như quả bóng đặt cạnh suối.
      this.addStone(slot, x, z, surface + 0.05, size, inChannel ? -0.5 : 0.45,
        big ? 0.62 : mid ? 0.46 : 0.34);
    }

    // Bãi sỏi bồi ở mặt trong các khúc uốn — nơi dòng chảy chậm lại.
    for (let bar = 0; bar < 12; bar++) {
      const t = 0.06 + (bar / 12) * 0.9 + this.random() * 0.03;
      const { point, normal, halfWidth } = at(t);
      const side = (bar % 2 === 0 ? 1 : -1) * (0.68 + this.random() * 0.22);
      const bx = point.x + normal.x * side * halfWidth;
      const bz = point.z + normal.y * side * halfWidth;
      const along = new THREE.Vector2(point.x - bx, point.z - bz).normalize();
      for (let i = 0; i < 14; i++) {
        const spread = this.random();
        const x = bx + along.x * (this.random() - 0.5) * 4.2 + normal.x * (spread - 0.5) * 1.9;
        const z = bz + along.y * (this.random() - 0.5) * 4.2 + normal.y * (spread - 0.5) * 1.9;
        const ground = this.localTerrainHeightAt(x, z);
        this.addStone(slots[0], x, z, ground + 0.14, 0.12 + this.random() * 0.14, 0.28, 0.3);
      }
    }

    // Cụm đá ở cửa suối nơi nước ngọt hòa vào biển.
    const mouth = this.riverCurve.getPoint(0.985);
    for (let i = 0; i < 16; i++) {
      const x = mouth.x + (this.random() - 0.5) * 7.5;
      const z = mouth.z + (this.random() - 0.5) * 6.0;
      const ground = this.localTerrainHeightAt(x, z);
      this.addStone(this.random() > 0.55 ? slots[1] : slots[0], x, z, ground + 0.2,
        0.2 + this.random() * 0.3, 0.22);
    }

    for (const mesh of this.finishStones(...slots)) {
      mesh.frustumCulled = false;
      // Sỏi nhỏ chỉ đủ in vài đốm đen lên cỏ: bỏ đổ bóng, vẫn nhận bóng cho bám mặt đất.
      if (mesh === pebbles) mesh.castShadow = false;
      group.add(mesh);
    }
    return group;
  }

  /**
   * 7. Cầu ngói vượt suối: sàn gỗ lim, lan can chạm, mái ngói âm dương cong vút.
   */
  private createCoveredBridge(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'CoveredBridge';

    const t = 0.34;
    const point = this.riverCurve.getPoint(t);
    const tangent = this.riverCurve.getTangent(t);
    // Thân cầu vuông góc với dòng chảy: lấy hướng pháp tuyến của tiếp tuyến tại khúc đặt cầu.
    const yaw = Math.atan2(-tangent.z, tangent.x);
    const halfWidth = this.riverHalfWidth(t);
    const span = halfWidth * 2 + 3.4;
    const waterY = this.localTerrainHeightAt(point.x, point.z) + this.riverSurfaceLift(0);
    const deckY = waterY + 1.55;

    group.position.set(point.x, 0, point.z);
    group.rotation.y = yaw;

    const lim = this.limWood();
    const tile = this.roofTile();
    const toWorld = (lx: number, lz: number) => new THREE.Vector2(
      point.x + Math.cos(yaw) * lx + Math.sin(yaw) * lz,
      point.z - Math.sin(yaw) * lx + Math.cos(yaw) * lz
    );

    // Sàn ván lim, hai dầm dọc đỡ sàn.
    const deck = new THREE.Mesh(this.geo(new THREE.BoxGeometry(2.9, 0.3, span + 1.8)), lim);
    deck.position.set(0, deckY, 0);
    deck.castShadow = true;
    deck.receiveShadow = true;
    group.add(deck);

    for (const lx of [-1.05, 1.05]) {
      const beam = new THREE.Mesh(this.geo(new THREE.BoxGeometry(0.28, 0.34, span + 1.2)), lim);
      beam.position.set(lx, deckY - 0.3, 0);
      group.add(beam);
    }

    // Lan can hai bên.
    for (const lz of [-1.3, 1.3]) {
      const rail = new THREE.Mesh(this.geo(new THREE.BoxGeometry(span, 0.16, 0.16)), lim);
      rail.position.set(0, deckY + 1.02, lz);
      group.add(rail);
      const midRail = new THREE.Mesh(this.geo(new THREE.BoxGeometry(span, 0.1, 0.1)), lim);
      midRail.position.set(0, deckY + 0.55, lz);
      group.add(midRail);

      const posts = Math.max(4, Math.round(span / 1.7));
      for (let i = 0; i <= posts; i++) {
        const lx = (i / posts - 0.5) * (span - 0.4);
        const post = new THREE.Mesh(this.geo(new THREE.BoxGeometry(0.16, 1.1, 0.16)), lim);
        post.position.set(lx, deckY + 0.55, lz);
        group.add(post);
      }
    }

    // Sáu cột lim đỡ mái và hệ xà ngang.
    for (const lz of [-1.55, 1.55]) {
      for (const lx of [-span * 0.4, 0, span * 0.4]) {
        const post = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(0.16, 0.19, 3.1, 7)), lim);
        post.position.set(lx, deckY + 1.55, lz);
        post.castShadow = true;
        group.add(post);
      }
    }
    for (const lx of [-span * 0.4, 0, span * 0.4]) {
      const cross = new THREE.Mesh(this.geo(new THREE.BoxGeometry(0.22, 0.22, 3.5)), lim);
      cross.position.set(lx, deckY + 3.05, 0);
      group.add(cross);
    }

    // Mái: sống mái chạy dọc nhịp cầu (local Z), dốc xuống hai bên lan can.
    const roof = new THREE.Mesh(this.geo(this.curvedRoofGeometry(span + 2.0, 4.6, 2.1, 0.8)), tile);
    roof.rotation.y = Math.PI / 2;
    roof.position.set(0, deckY + 3.12, 0);
    roof.castShadow = true;
    group.add(roof);

    const ridge = new THREE.Mesh(this.geo(new THREE.BoxGeometry(0.3, 0.3, span + 2.3)), lim);
    ridge.position.set(0, deckY + 5.24, 0);
    group.add(ridge);

    // Mố cầu: đá ong ăn vào hai bờ.
    const abutmentGeo = this.geo(new THREE.DodecahedronGeometry(1, 0));
    const abutments = { mesh: new THREE.InstancedMesh(abutmentGeo, this.laterite(), 16), index: 0 };
    for (const side of [-1, 1]) {
      for (let i = 0; i < 8; i++) {
        const lz = side * (span * 0.5 + 0.35 + this.random() * 0.5);
        const lx = (i / 7 - 0.5) * 3.4;
        const world = toWorld(lx, lz);
        this.addStone(abutments, lx, lz,
          this.localTerrainHeightAt(world.x, world.y) + 0.5, 0.3 + this.random() * 0.22, 0.3);
      }
    }
    for (const mesh of this.finishStones(abutments)) group.add(mesh);

    return group;
  }

  /**
   * Mái cong Đại Việt: diềm mái hất lên, sống mái cao và dốc dần.
   * Sống mái nằm dọc trục X; mặt mái lợp ngói âm dương theo hướng dốc.
   */
  private curvedRoofGeometry(width: number, depth: number, rise: number, eaveLift: number): THREE.BufferGeometry {
    const rings = 12;
    const ridgeHalf = width * 0.2;
    const positions: number[] = [], uvs: number[] = [], indices: number[] = [];
    const cornerX = [1, -1, -1, 1];
    const cornerZ = [1, 1, -1, -1];
    const cornerU = [0, width, width + depth, width * 2 + depth];
    const slope = Math.hypot(rise, depth * 0.5);

    for (let k = 0; k <= rings; k++) {
      const s = k / rings;
      const wx = THREE.MathUtils.lerp(ridgeHalf, width * 0.5, Math.pow(s, 0.8));
      const wz = THREE.MathUtils.lerp(depth * 0.05, depth * 0.5, s);
      const y = rise * (1 - Math.pow(s, 1.3)) + eaveLift * Math.pow(s, 5);
      for (let c = 0; c < 4; c++) {
        positions.push(cornerX[c] * wx, y, cornerZ[c] * wz);
        uvs.push(cornerU[c] / 2.2, (s * slope) / 2.2);
      }
    }

    for (let k = 0; k < rings; k++) {
      for (let c = 0; c < 4; c++) {
        const next = (c + 1) % 4;
        const a = k * 4 + c, b = k * 4 + next;
        const d = (k + 1) * 4 + c, e = (k + 1) * 4 + next;
        indices.push(a, d, b, b, d, e);
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    return geometry;
  }

  /**
   * Máy đình/chùa: dựng mái, diềm gỗ lim và bốn đầu đao cong vút ở bốn góc.
   */
  private addCurvedRoof(
    group: THREE.Group,
    width: number, depth: number, rise: number, eaveLift: number,
    x: number, y: number, z: number, rotationY = 0, horns = true
  ): void {
    const roof = new THREE.Mesh(
      this.geo(this.curvedRoofGeometry(width, depth, rise, eaveLift)),
      this.roofTile()
    );
    roof.position.set(x, y, z);
    roof.rotation.y = rotationY;
    roof.castShadow = true;
    roof.receiveShadow = true;
    group.add(roof);

    const trim = this.mat(0x2d2118, 0.72);
    const cos = Math.cos(rotationY), sin = Math.sin(rotationY);
    const fascia = [
      { sx: width + 0.35, sz: 0.2, px: 0, pz: depth * 0.5 + 0.02 },
      { sx: width + 0.35, sz: 0.2, px: 0, pz: -depth * 0.5 - 0.02 },
      { sx: 0.2, sz: depth + 0.35, px: width * 0.5 + 0.02, pz: 0 },
      { sx: 0.2, sz: depth + 0.35, px: -width * 0.5 - 0.02, pz: 0 }
    ];
    for (const f of fascia) {
      const beam = new THREE.Mesh(this.geo(new THREE.BoxGeometry(f.sx, 0.24, f.sz)), trim);
      beam.position.set(
        x + f.px * cos + f.pz * sin,
        y + eaveLift - 0.12,
        z - f.px * sin + f.pz * cos
      );
      beam.rotation.y = rotationY;
      group.add(beam);
    }

    if (!horns) return;
    const hornGeo = this.geo(new THREE.TubeGeometry(
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0.16, 0.42, 0.1),
        new THREE.Vector3(0.06, 0.82, 0.24)
      ]), 5, 0.09, 5, false
    ));
    const corners = [
      { px: width * 0.5, pz: depth * 0.5, yaw: Math.PI * 0.25 },
      { px: -width * 0.5, pz: depth * 0.5, yaw: Math.PI * 0.75 },
      { px: -width * 0.5, pz: -depth * 0.5, yaw: Math.PI * 1.25 },
      { px: width * 0.5, pz: -depth * 0.5, yaw: Math.PI * 1.75 }
    ];
    for (const c of corners) {
      const horn = new THREE.Mesh(hornGeo, trim);
      horn.position.set(
        x + c.px * cos + c.pz * sin,
        y + eaveLift - 0.05,
        z - c.px * sin + c.pz * cos
      );
      horn.rotation.y = c.yaw + rotationY;
      horn.scale.setScalar(1 + Math.abs(width) * 0.02);
      group.add(horn);
    }
  }

  /**
   * 8. Ruộng bậc thang: các vành ruộng phẳng men theo đường đồng mức,
   * bờ đá ong cao dần về đỉnh đồi phía tây.
   */
  private createRiceTerraces(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'RiceTerraces';

    const cx = RICE_TERRACE_CENTER.x;
    const cz = RICE_TERRACE_CENTER.z;
    const startLevel = this.rawTerrainHeight(cx, cz) + 1.1;
    const step = 0.85;
    const bands = 8;
    const segments = 48;
    const outward = Math.atan2(cz, cx);
    const span = 2.2;
    const a0 = outward - span * 0.5;

    // Bán kính nơi sườn đồi cắt qua một cao độ nhất định.
    const contour = (angle: number, level: number): number => {
      const dx = Math.cos(angle), dz = Math.sin(angle);
      let prevR = 0.7;
      let prevH = this.rawTerrainHeight(cx + dx * prevR, cz + dz * prevR);
      for (let i = 1; i <= 60; i++) {
        const r = 0.7 + (i / 60) * 18.5;
        const h = this.rawTerrainHeight(cx + dx * r, cz + dz * r);
        if (prevH >= level && h < level) {
          const t = (prevH - level) / Math.max(1e-4, prevH - h);
          return prevR + (r - prevR) * t;
        }
        prevR = r;
        prevH = h;
      }
      return prevH >= level ? 18.5 : 0.9;
    };

    const surface = { position: [] as number[], color: [] as number[], uv: [] as number[], index: [] as number[] };
    const wall = { position: [] as number[], uv: [] as number[], index: [] as number[] };
    const palette = [new THREE.Color(0x4f8034), new THREE.Color(0x477a2f), new THREE.Color(0x3f6e29)];

    for (let b = 0; b < bands; b++) {
      const level = startLevel - b * step;
      const inner: number[] = [], outer: number[] = [];
      for (let i = 0; i <= segments; i++) {
        const angle = a0 + (i / segments) * span;
        inner.push(contour(angle, level));
        outer.push(contour(angle, level - step));
      }

      const base = surface.position.length / 3;
      for (let i = 0; i <= segments; i++) {
        const angle = a0 + (i / segments) * span;
        const dx = Math.cos(angle), dz = Math.sin(angle);
        const xi = cx + dx * inner[i], zi = cz + dz * inner[i];
        const xo = cx + dx * outer[i], zo = cz + dz * outer[i];
        surface.position.push(xi, level, zi, xo, level, zo);
        surface.uv.push(xi * 0.2, zi * 0.2, xo * 0.2, zo * 0.2);
        const tint = palette[(b + (i >> 3)) % palette.length];
        const shade = 0.92 + this.random() * 0.14;
        surface.color.push(
          tint.r * shade, tint.g * shade, tint.b * shade,
          tint.r * shade, tint.g * shade, tint.b * shade
        );
      }
      for (let i = 0; i < segments; i++) {
        const a = base + i * 2, b0 = base + i * 2 + 1;
        const c = base + (i + 1) * 2, d = base + (i + 1) * 2 + 1;
        surface.index.push(a, c, b0, b0, c, d);
      }

      // Bờ đá ong giữ đất phía ngoài vành ruộng.
      const wallBase = wall.position.length / 3;
      for (let i = 0; i <= segments; i++) {
        const angle = a0 + (i / segments) * span;
        const dx = Math.cos(angle), dz = Math.sin(angle);
        const x = cx + dx * outer[i], z = cz + dz * outer[i];
        wall.position.push(x, level, z, x, level - step, z);
        wall.uv.push(x * 0.25, level * 0.45, x * 0.25, (level - step) * 0.45);
      }
      for (let i = 0; i < segments; i++) {
        const a = wallBase + i * 2, b0 = wallBase + i * 2 + 1;
        const c = wallBase + (i + 1) * 2, d = wallBase + (i + 1) * 2 + 1;
        wall.index.push(a, c, b0, b0, c, d);
      }

      // Mặt cắt hai đầu thửa ruộng để bậc không hở.
      for (const i of [0, segments]) {
        const angle = a0 + (i / segments) * span;
        const dx = Math.cos(angle), dz = Math.sin(angle);
        const xi = cx + dx * inner[i], zi = cz + dz * inner[i];
        const xo = cx + dx * outer[i], zo = cz + dz * outer[i];
        const base2 = wall.position.length / 3;
        wall.position.push(xi, level, zi, xo, level, zo, xi, level - step, zi, xo, level - step, zo);
        wall.uv.push(xi * 0.25, level * 0.45, xo * 0.25, level * 0.45);
        wall.index.push(base2, base2 + 1, base2 + 2, base2 + 1, base2 + 3, base2 + 2);
      }
    }

    const surfaceGeometry = this.geo(new THREE.BufferGeometry());
    surfaceGeometry.setAttribute('position', new THREE.Float32BufferAttribute(surface.position, 3));
    surfaceGeometry.setAttribute('color', new THREE.Float32BufferAttribute(surface.color, 3));
    surfaceGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(surface.uv, 2));
    surfaceGeometry.setIndex(surface.index);
    surfaceGeometry.computeVertexNormals();
    // Ruộng nước: nhám hoàn toàn — độ bóng thấp của mặt phẳng đón nắng hoàng hôn
    // sẽ bắt loá thành dải trắng, che mất màu lúa.
    const paddyMaterial = new THREE.MeshStandardMaterial({
      vertexColors: true, roughness: 0.96, metalness: 0
    });
    this.materials.push(paddyMaterial);
    const paddy = new THREE.Mesh(surfaceGeometry, paddyMaterial);
    paddy.receiveShadow = true;
    group.add(paddy);

    const wallGeometry = this.geo(new THREE.BufferGeometry());
    wallGeometry.setAttribute('position', new THREE.Float32BufferAttribute(wall.position, 3));
    wallGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(wall.uv, 2));
    wallGeometry.setIndex(wall.index);
    wallGeometry.computeVertexNormals();
    const wallMaterial = this.laterite().clone();
    wallMaterial.side = THREE.DoubleSide;
    this.materials.push(wallMaterial);
    const risers = new THREE.Mesh(wallGeometry, wallMaterial);
    risers.castShadow = true;
    risers.receiveShadow = true;
    group.add(risers);

    return group;
  }

  /**
   * 9. Ao sen: lòng ao lõm vào sườn đồi, viền đá ong, lá sen và hoa sen nở.
   */
  private createLotusPond(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'LotusPond';

    const cx = LOTUS_POND_CENTER.x, cz = LOTUS_POND_CENTER.z;
    const waterY = this.localTerrainHeightAt(cx, cz) + 0.56;

    const waterMaterial = new THREE.ShaderMaterial({
      vertexShader: waterVertexShader,
      fragmentShader: waterFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uPool: { value: 1 },
        uSunDirection: { value: this.sunDirection }
      },
      transparent: true
    });
    this.materials.push(waterMaterial);
    // Mép ao rộng hơn vành đá ong để mặt nước luồn xuống dưới bờ, không lộ đường cắt.
    const water = new THREE.Mesh(this.geo(new THREE.CircleGeometry(4.85, 48)), waterMaterial);
    water.rotation.x = -Math.PI / 2;
    water.position.set(cx, waterY, cz);
    group.add(water);

    const rim = { mesh: new THREE.InstancedMesh(this.geo(new THREE.DodecahedronGeometry(1, 0)), this.laterite(), 84), index: 0 };
    for (let i = 0; i < 52; i++) {
      const angle = (i / 52) * Math.PI * 2 + this.random() * 0.05;
      const radius = 4.45 + this.random() * 0.55;
      const x = cx + Math.cos(angle) * radius;
      const z = cz + Math.sin(angle) * radius;
      this.addStone(rim, x, z, this.localTerrainHeightAt(x, z) + 0.12,
        0.3 + this.random() * 0.18, 0.3);
    }
    // Vành đá nhỏ ngập nửa người ngay mép nước, phá đường tròn hoàn hảo của mặt ao.
    for (let i = 0; i < 22; i++) {
      const angle = (i / 22) * Math.PI * 2 + this.random() * 0.14;
      const radius = 4.0 + this.random() * 0.35;
      const x = cx + Math.cos(angle) * radius;
      const z = cz + Math.sin(angle) * radius;
      this.addStone(rim, x, z, waterY + 0.04, 0.16 + this.random() * 0.12, 0.25);
    }
    for (const mesh of this.finishStones(rim)) group.add(mesh);

    const leafGeometry = this.geo(new THREE.CircleGeometry(0.42, 9));
    leafGeometry.rotateX(-Math.PI / 2);
    const leafMaterial = new THREE.MeshStandardMaterial({
      color: 0x38713f, roughness: 0.74, metalness: 0, side: THREE.DoubleSide
    });
    this.materials.push(leafMaterial);
    const leaves = new THREE.InstancedMesh(leafGeometry, leafMaterial, 40);
    const matrix = new THREE.Matrix4();
    const quaternion = new THREE.Quaternion();
    const euler = new THREE.Euler();
    for (let i = 0; i < 40; i++) {
      const angle = this.random() * Math.PI * 2;
      const radius = Math.sqrt(this.random()) * 3.6;
      euler.set(0, this.random() * Math.PI * 2, 0);
      quaternion.setFromEuler(euler);
      matrix.compose(
        new THREE.Vector3(cx + Math.cos(angle) * radius, waterY + 0.03, cz + Math.sin(angle) * radius),
        quaternion,
        new THREE.Vector3(0.62 + this.random() * 0.6, 1, 0.62 + this.random() * 0.6)
      );
      leaves.setMatrixAt(i, matrix);
    }
    leaves.instanceMatrix.needsUpdate = true;
    group.add(leaves);

    const flowerMaterial = new THREE.MeshStandardMaterial({
      color: 0xe98fa4, roughness: 0.6, flatShading: true
    });
    this.materials.push(flowerMaterial);
    const flowers = new THREE.InstancedMesh(this.geo(new THREE.ConeGeometry(0.19, 0.58, 6)), flowerMaterial, 9);
    for (let i = 0; i < 9; i++) {
      const angle = this.random() * Math.PI * 2;
      const radius = 0.8 + this.random() * 2.2;
      matrix.compose(
        new THREE.Vector3(cx + Math.cos(angle) * radius, waterY + 0.3, cz + Math.sin(angle) * radius),
        new THREE.Quaternion(),
        new THREE.Vector3(1, 1, 1)
      );
      flowers.setMatrixAt(i, matrix);
    }
    flowers.instanceMatrix.needsUpdate = true;
    group.add(flowers);

    return group;
  }

  /**
   * 10. Quần thể đình làng Việt: sân gạch, đình mái cong, cổng tam quan,
   * tháp chuông, tượng rồng đá và đường làng bậc đá dẫn xuống sườn đồi.
   */
  private createVillage(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'VietVillage';

    const vx = VILLAGE_CENTER.x, vz = VILLAGE_CENTER.z, pad = this.villagePadY;
    const yardTop = pad + 0.34;
    const lim = this.limWood();
    const brick = this.brick();
    const lacquer = this.lacquer();
    const patina = this.patina();
    const laterite = this.laterite();
    const gold = this.mat(0xc79b3f, 0.32, 0.82);

    // Sân gạch và bó vỉa đá ong.
    const yard = new THREE.Mesh(this.geo(new THREE.BoxGeometry(18, 0.34, 12)), brick);
    yard.position.set(vx, pad + 0.17, vz + 1);
    yard.receiveShadow = true;
    yard.castShadow = true;
    group.add(yard);
    for (const [ox, oz, sx, sz] of [
      [0, -5.0, 18.4, 0.4], [0, 7.0, 18.4, 0.4], [-9.0, 1.0, 0.4, 12.4], [9.0, 1.0, 0.4, 12.4]
    ]) {
      const curb = new THREE.Mesh(this.geo(new THREE.BoxGeometry(sx, 0.5, sz)), laterite);
      curb.position.set(vx + ox, pad + 0.25, vz + 1 + oz);
      curb.receiveShadow = true;
      group.add(curb);
    }

    // Đình làng.
    const dinhZ = vz - 2.6;
    const platformTop = yardTop + 0.7;
    const platform = new THREE.Mesh(this.geo(new THREE.BoxGeometry(11.8, 0.7, 8.0)), laterite);
    platform.position.set(vx, yardTop + 0.35, dinhZ);
    platform.receiveShadow = true;
    platform.castShadow = true;
    group.add(platform);

    for (let s = 0; s < 3; s++) {
      const step = new THREE.Mesh(this.geo(new THREE.BoxGeometry(4.2 - s * 0.3, 0.24, 0.6)), laterite);
      step.position.set(vx, yardTop + 0.5 - s * 0.18, dinhZ + 4.4 + s * 0.55);
      step.receiveShadow = true;
      group.add(step);
    }

    const columnTop = platformTop + 3.9;
    const columnOffsets = [-4.6, -1.55, 1.55, 4.6];
    for (const ox of columnOffsets) {
      for (const oz of [-1.55, 1.55]) {
        const base = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(0.44, 0.52, 0.32, 8)), laterite);
        base.position.set(vx + ox, platformTop + 0.16, dinhZ + oz);
        group.add(base);

        const column = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(0.26, 0.31, 3.9, 8)), lim);
        column.position.set(vx + ox, platformTop + 1.95, dinhZ + oz);
        column.castShadow = true;
        group.add(column);
      }
    }

    for (const oz of [-1.55, 1.55]) {
      const beam = new THREE.Mesh(this.geo(new THREE.BoxGeometry(10.4, 0.36, 0.34)), lim);
      beam.position.set(vx, columnTop - 0.18, dinhZ + oz);
      group.add(beam);
    }
    for (const ox of [-4.6, 4.6]) {
      const beam = new THREE.Mesh(this.geo(new THREE.BoxGeometry(0.34, 0.36, 3.5)), lim);
      beam.position.set(vx + ox, columnTop - 0.18, dinhZ);
      group.add(beam);
    }
    const spineBeam = new THREE.Mesh(this.geo(new THREE.BoxGeometry(0.3, 0.32, 3.4)), lim);
    spineBeam.position.set(vx, columnTop - 0.2, dinhZ);
    group.add(spineBeam);

    const backWall = new THREE.Mesh(this.geo(new THREE.BoxGeometry(9.9, 3.1, 0.2)), lim);
    backWall.position.set(vx, platformTop + 1.55, dinhZ - 3.35);
    backWall.castShadow = true;
    group.add(backWall);
    for (const ox of [-3.2, 0, 3.2]) {
      const panel = new THREE.Mesh(this.geo(new THREE.BoxGeometry(2.4, 2.4, 0.1)), lacquer);
      panel.position.set(vx + ox, platformTop + 1.5, dinhZ - 3.22);
      group.add(panel);
    }
    for (const ox of [-5.0, 5.0]) {
      const sideWall = new THREE.Mesh(this.geo(new THREE.BoxGeometry(0.2, 1.5, 3.6)), lim);
      sideWall.position.set(vx + ox, platformTop + 0.75, dinhZ);
      group.add(sideWall);
    }

    // Hoành phi sơn mài trên cửa chính.
    const plaque = new THREE.Mesh(this.geo(new THREE.BoxGeometry(2.8, 0.85, 0.14)), lacquer);
    plaque.position.set(vx, platformTop + 3.35, dinhZ + 1.66);
    group.add(plaque);
    for (const oy of [-0.5, 0.5]) {
      const trim = new THREE.Mesh(this.geo(new THREE.BoxGeometry(3.0, 0.09, 0.18)), gold);
      trim.position.set(vx, platformTop + 3.35 + oy, dinhZ + 1.67);
      group.add(trim);
    }

    this.addCurvedRoof(group, 13.6, 9.4, 3.3, 0.95, vx, columnTop, dinhZ, 0, true);

    // Lưỡng long chầu nguyệt trên sống mái.
    const ridgeY = columnTop + 3.3;
    const orb = new THREE.Mesh(this.geo(new THREE.SphereGeometry(0.34, 10, 8)), gold);
    orb.position.set(vx, ridgeY + 0.48, dinhZ);
    group.add(orb);
    for (const side of [-1, 1]) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(vx + side * 2.2, ridgeY - 0.02, dinhZ),
        new THREE.Vector3(vx + side * 1.45, ridgeY + 0.44, dinhZ),
        new THREE.Vector3(vx + side * 0.42, ridgeY + 0.34, dinhZ)
      ]);
      const dragon = new THREE.Mesh(this.geo(new THREE.TubeGeometry(curve, 8, 0.075, 5, false)), gold);
      group.add(dragon);
    }

    // Đôi lồng đèn son trước hiên: điểm ấm cho sân gạch khi nắng đã xuống.
    const lanternMat = new THREE.MeshStandardMaterial({
      color: 0x8a2216, emissive: 0xff6a2f, emissiveIntensity: 1.15, roughness: 0.48
    });
    this.materials.push(lanternMat);
    const ropeMat = this.mat(0x2a1c12, 0.9);
    for (const side of [-1, 1]) {
      const lx = vx + side * 3.1;
      const lantern = new THREE.Mesh(this.geo(new THREE.SphereGeometry(0.34, 12, 10)), lanternMat);
      lantern.scale.set(1, 1.22, 1);
      lantern.position.set(lx, columnTop - 0.92, dinhZ + 3.1);
      group.add(lantern);

      const cap = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(0.15, 0.19, 0.1, 8)), gold);
      cap.position.set(lx, columnTop - 0.48, dinhZ + 3.1);
      group.add(cap);

      const rope = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(0.014, 0.014, 0.4, 4)), ropeMat);
      rope.position.set(lx, columnTop - 0.25, dinhZ + 3.1);
      group.add(rope);
    }
    const porchLight = new THREE.PointLight(0xffa25c, 22, 24, 2);
    porchLight.position.set(vx, columnTop - 0.35, dinhZ + 3.4);
    group.add(porchLight);

    // Cổng tam quan.
    const gateZ = vz + 9.3;
    const gateTop = pad + 3.96;
    const gateBase = new THREE.Mesh(this.geo(new THREE.BoxGeometry(10.8, 0.36, 3.4)), brick);
    gateBase.position.set(vx, pad + 0.18, gateZ);
    gateBase.receiveShadow = true;
    group.add(gateBase);

    for (const ox of [-4.1, -1.55, 1.55, 4.1]) {
      const pillar = new THREE.Mesh(this.geo(new THREE.BoxGeometry(0.85, 3.6, 0.85)), laterite);
      pillar.position.set(vx + ox, pad + 2.16, gateZ);
      pillar.castShadow = true;
      group.add(pillar);

      const cap = new THREE.Mesh(this.geo(new THREE.BoxGeometry(1.1, 0.22, 1.1)), lim);
      cap.position.set(vx + ox, gateTop + 0.08, gateZ);
      group.add(cap);
    }
    for (const ox of [-2.82, 2.82]) {
      const lintel = new THREE.Mesh(this.geo(new THREE.BoxGeometry(2.2, 0.95, 0.6)), lim);
      lintel.position.set(vx + ox, gateTop - 0.52, gateZ);
      group.add(lintel);

      const medallion = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(0.33, 0.33, 0.08, 12)), lacquer);
      medallion.rotation.x = Math.PI / 2;
      medallion.position.set(vx + ox, gateTop - 0.52, gateZ + 0.33);
      group.add(medallion);
    }
    const centralPlaque = new THREE.Mesh(this.geo(new THREE.BoxGeometry(2.5, 0.72, 0.14)), lacquer);
    centralPlaque.position.set(vx, gateTop - 0.45, gateZ + 0.36);
    group.add(centralPlaque);

    this.addCurvedRoof(group, 4.9, 3.0, 1.55, 0.6, vx, gateTop + 0.24, gateZ, 0, true);
    for (const ox of [-2.82, 2.82]) {
      this.addCurvedRoof(group, 3.3, 2.5, 1.0, 0.45, vx + ox, gateTop - 1.05, gateZ, 0, false);
    }

    for (let s = 0; s < 2; s++) {
      const step = new THREE.Mesh(this.geo(new THREE.BoxGeometry(4.4, 0.22, 0.8)), laterite);
      step.position.set(vx, pad + 0.11 + s * 0.22, gateZ + 2.0 - s * 0.55);
      step.receiveShadow = true;
      group.add(step);
    }

    // Tháp chuông ba tầng mái.
    const towerX = vx - 7.4, towerZ = vz + 4.8;
    const towerGround = Math.min(this.localTerrainHeightAt(towerX, towerZ), pad);
    const plinthHeight = pad - towerGround + 0.7;
    const plinth = new THREE.Mesh(this.geo(new THREE.BoxGeometry(4.8, plinthHeight, 4.8)), laterite);
    plinth.position.set(towerX, pad - plinthHeight * 0.5 + 0.12, towerZ);
    plinth.receiveShadow = true;
    plinth.castShadow = true;
    group.add(plinth);

    const towerFloor = pad + 0.12;
    for (const ox of [-1.55, 1.55]) {
      for (const oz of [-1.55, 1.55]) {
        const column = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(0.19, 0.23, 3.2, 7)), lim);
        column.position.set(towerX + ox, towerFloor + 1.6, towerZ + oz);
        column.castShadow = true;
        group.add(column);
      }
    }
    for (const oz of [-1.55, 1.55]) {
      const beam = new THREE.Mesh(this.geo(new THREE.BoxGeometry(3.5, 0.28, 0.26)), lim);
      beam.position.set(towerX, towerFloor + 3.15, towerZ + oz);
      group.add(beam);
    }
    this.addCurvedRoof(group, 5.2, 5.2, 1.7, 0.65, towerX, towerFloor + 3.22, towerZ, 0, true);

    const upperY = towerFloor + 4.0;
    for (const ox of [-1.0, 1.0]) {
      for (const oz of [-1.0, 1.0]) {
        const column = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(0.14, 0.17, 2.4, 6)), lim);
        column.position.set(towerX + ox, upperY + 1.2, towerZ + oz);
        group.add(column);
      }
    }
    const upperPlaque = new THREE.Mesh(this.geo(new THREE.BoxGeometry(1.5, 0.55, 0.12)), lacquer);
    upperPlaque.position.set(towerX, upperY + 1.5, towerZ + 1.02);
    group.add(upperPlaque);
    this.addCurvedRoof(group, 3.7, 3.7, 1.3, 0.5, towerX, upperY + 2.45, towerZ, 0, true);

    // Chuông đồng treo dưới tầng trên.
    const bell = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(0.3, 0.56, 1.0, 12)), patina);
    bell.position.set(towerX, upperY + 1.85, towerZ);
    bell.castShadow = true;
    group.add(bell);
    const bellLoop = new THREE.Mesh(this.geo(new THREE.TorusGeometry(0.18, 0.05, 5, 10)), patina);
    bellLoop.position.set(towerX, upperY + 2.4, towerZ);
    group.add(bellLoop);

    // Tượng rồng đá chầu sân đình.
    for (const side of [-1, 1]) {
      const pedestal = new THREE.Mesh(this.geo(new THREE.BoxGeometry(2.3, 0.55, 1.7)), laterite);
      pedestal.position.set(vx + side * 4.9, yardTop + 0.275, vz + 6.2);
      pedestal.receiveShadow = true;
      group.add(pedestal);

      const dragon = this.createStoneDragon(0.95);
      dragon.position.set(vx + side * 4.9, yardTop + 0.55, vz + 6.2);
      dragon.rotation.y = side * -0.2;
      group.add(dragon);
    }

    const censer = this.createBronzeCenser();
    censer.position.set(vx, yardTop, vz + 3.1);
    group.add(censer);

    // Đường làng bậc gạch dẫn từ cổng xuống sườn đồi.
    const pathZ0 = gateZ + 2.7;
    const pathZ1 = vz + 19.6;
    const topStart = pad + 0.08;
    const topEnd = this.localTerrainHeightAt(vx, pathZ1) + 0.1;
    const stepCount = 10;
    for (let i = 0; i < stepCount; i++) {
      const top = THREE.MathUtils.lerp(topStart, topEnd, (i + 1) / stepCount);
      const z = THREE.MathUtils.lerp(pathZ0, pathZ1, (i + 0.5) / stepCount);
      const stair = new THREE.Mesh(
        this.geo(new THREE.BoxGeometry(3.4, 0.62, (pathZ1 - pathZ0) / stepCount + 0.12)), brick
      );
      stair.position.set(vx, top - 0.31, z);
      stair.receiveShadow = true;
      group.add(stair);
    }

    return group;
  }

  /** Rồng đá chầu: thân uốn khúc, sừng và chân ngắn, mắt đồng patina. */
  private createStoneDragon(scale: number): THREE.Group {
    const group = new THREE.Group();
    const stone = this.sharedStone();
    const patina = this.patina();

    const bodyCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0.26, -0.62),
      new THREE.Vector3(0.18, 0.5, -0.24),
      new THREE.Vector3(-0.14, 0.86, 0.06),
      new THREE.Vector3(0.14, 1.3, 0.38),
      new THREE.Vector3(0.02, 1.52, 0.72)
    ]);
    const body = new THREE.Mesh(this.geo(new THREE.TubeGeometry(bodyCurve, 16, 0.19, 6, false)), stone);
    body.castShadow = true;
    group.add(body);

    const head = new THREE.Mesh(this.geo(new THREE.DodecahedronGeometry(0.33, 0)), stone);
    head.position.set(0.02, 1.58, 0.82);
    head.castShadow = true;
    group.add(head);

    const snout = new THREE.Mesh(this.geo(new THREE.BoxGeometry(0.3, 0.19, 0.38)), stone);
    snout.position.set(0.02, 1.5, 1.05);
    group.add(snout);

    for (const side of [-1, 1]) {
      const horn = new THREE.Mesh(this.geo(new THREE.ConeGeometry(0.06, 0.34, 5)), stone);
      horn.position.set(0.02 + side * 0.14, 1.86, 0.74);
      horn.rotation.x = -0.55;
      group.add(horn);

      const eye = new THREE.Mesh(this.geo(new THREE.SphereGeometry(0.055, 6, 5)), patina);
      eye.position.set(0.02 + side * 0.17, 1.64, 1.02);
      group.add(eye);

      for (const dz of [-0.28, 0.34]) {
        const leg = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(0.055, 0.075, 0.42, 5)), stone);
        leg.position.set(0.02 + side * 0.17, 0.24, dz);
        leg.rotation.z = side * 0.35;
        group.add(leg);
      }
    }

    const tail = new THREE.Mesh(this.geo(new THREE.ConeGeometry(0.11, 0.5, 5)), stone);
    tail.position.set(0, 0.24, -0.9);
    tail.rotation.x = Math.PI * 0.62;
    group.add(tail);

    group.scale.setScalar(scale);
    return group;
  }

  /** Đỉnh đồng ba chân đặt giữa sân đình. */
  private createBronzeCenser(material?: THREE.MeshStandardMaterial): THREE.Group {
    const group = new THREE.Group();
    const bronze = material ?? this.patina();
    for (let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2;
      const leg = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(0.08, 0.14, 0.55, 6)), bronze);
      leg.position.set(Math.cos(angle) * 0.4, 0.27, Math.sin(angle) * 0.4);
      group.add(leg);
    }
    const bowl = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(0.62, 0.44, 0.6, 12)), bronze);
    bowl.position.y = 0.85;
    bowl.castShadow = true;
    group.add(bowl);
    const rim = new THREE.Mesh(this.geo(new THREE.TorusGeometry(0.62, 0.055, 5, 16)), bronze);
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 1.15;
    group.add(rim);
    const lid = new THREE.Mesh(this.geo(new THREE.ConeGeometry(0.54, 0.36, 12)), bronze);
    lid.position.y = 1.36;
    group.add(lid);
    const knob = new THREE.Mesh(this.geo(new THREE.SphereGeometry(0.09, 6, 5)), bronze);
    knob.position.y = 1.57;
    group.add(knob);
    for (const side of [-1, 1]) {
      const handle = new THREE.Mesh(this.geo(new THREE.TorusGeometry(0.16, 0.04, 5, 10)), bronze);
      handle.position.set(side * 0.62, 1.0, 0);
      handle.rotation.y = Math.PI / 2;
      group.add(handle);
    }
    return group;
  }

  /**
   * 11. Cầu tàu gỗ dài ven biển (Long Ocean Pier)
   */
  private createPier(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'OceanPier';

    const wood = this.mat(0x8a5435, 0.72);

    for (let i = 0; i < 11; i++) {
      const post = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(0.26, 0.32, 3.8, 6)), wood);
      post.position.set(-52 + i * 1.5, 1.9, -16);
      group.add(post);
    }

    const deck = new THREE.Mesh(this.geo(new THREE.BoxGeometry(17.5, 0.42, 2.8)), wood);
    deck.position.set(-45, 3.4, -16);
    deck.rotation.y = 0.12;
    deck.castShadow = true;
    group.add(deck);

    const lantern = new THREE.Mesh(this.geo(new THREE.DodecahedronGeometry(0.5)), this.mat(0xfef08a, 0.2));
    lantern.position.set(-53.5, 4.3, -16);
    group.add(lantern);

    return group;
  }

  /**
   * 12. Dừa thân cong ven biển: thân uốn nghiêng ra biển, tàu lá xòe tròn, buồng dừa.
   */
  private createBeachPalms(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'CurvedCoconutPalms';

    const trunkMat = this.foliageMaterial(0x7a5236, 0.05);
    const frondMat = this.foliageMaterial(0x357f42, 0.2);
    frondMat.side = THREE.DoubleSide;
    const nutMat = this.mat(0x5a3b22, 0.72);

    const count = Math.round(this.opts.palmCount * 0.66);
    const trunkInfo = this.curvedTrunkGeometry();
    const trunkGeo = this.geo(trunkInfo.geometry);
    const frondGeo = this.geo(this.bladeGeometry(3.2, 0.52, 0.62));
    const nutGeo = this.geo(new THREE.DodecahedronGeometry(0.22, 0));

    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, count);
    const frondsPerPalm = 9;
    const fronds = new THREE.InstancedMesh(frondGeo, frondMat, count * frondsPerPalm);
    const nuts = new THREE.InstancedMesh(nutGeo, nutMat, count * 3);

    const matrix = new THREE.Matrix4();
    const quaternion = new THREE.Quaternion();
    const euler = new THREE.Euler();
    const crown = new THREE.Vector3();
    const yAxis = new THREE.Vector3(0, 1, 0);
    const zAxis = new THREE.Vector3(0, 0, 1);

    for (let i = 0; i < count; i++) {
      const point = this.randomClearing(48, 64, 4.0);
      const x = point.x, z = point.y;
      const y = this.localTerrainHeightAt(x, z);
      const yaw = this.random() * Math.PI * 2;
      const s = 0.85 + this.random() * 0.35;

      euler.set(0, yaw, 0);
      quaternion.setFromEuler(euler);
      matrix.compose(new THREE.Vector3(x, y, z), quaternion, new THREE.Vector3(s, s, s));
      trunks.setMatrixAt(i, matrix);

      crown.copy(trunkInfo.crown).multiplyScalar(s).applyQuaternion(quaternion);
      crown.x += x; crown.y += y; crown.z += z;

      for (let j = 0; j < frondsPerPalm; j++) {
        const spread = yaw + (j / frondsPerPalm) * Math.PI * 2 + (this.random() - 0.5) * 0.22;
        const qYaw = new THREE.Quaternion().setFromAxisAngle(yAxis, spread);
        const qLift = new THREE.Quaternion().setFromAxisAngle(zAxis, 0.24 + this.random() * 0.3);
        const q = qYaw.multiply(qLift);
        const fs = s * (0.82 + this.random() * 0.26);
        matrix.compose(crown, q, new THREE.Vector3(fs, fs, fs));
        fronds.setMatrixAt(i * frondsPerPalm + j, matrix);
      }

      for (let j = 0; j < 3; j++) {
        const angle = this.random() * Math.PI * 2;
        matrix.compose(
          new THREE.Vector3(
            crown.x + Math.cos(angle) * 0.38 * s,
            crown.y - 0.3 * s,
            crown.z + Math.sin(angle) * 0.38 * s
          ),
          quaternion,
          new THREE.Vector3(s, s, s)
        );
        nuts.setMatrixAt(i * 3 + j, matrix);
      }
    }

    trunks.castShadow = true;
    fronds.castShadow = true;
    group.add(trunks, fronds, nuts);
    return group;
  }

  /**
   * 13. Rừng tán rộng nhiều chùm: tán ghép ba khối lá so le thay cho "cây kẹo" một quả cầu.
   */
  private createCanopyForest(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'CanopyForest';
    const trunkMat = this.foliageMaterial(0x4f3a2c, 0.04);
    const canopyMat = this.foliageMaterial(0x2f6b3c, 0.14);
    const crownMat = this.foliageMaterial(0x477f45, 0.16);

    const trunkGeo = this.geo(new THREE.CylinderGeometry(0.28, 0.5, 4.6, 6));
    const canopyGeo = this.geo(new THREE.DodecahedronGeometry(2.2, 1));
    const count = this.opts.treeCount;

    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, count);
    const canopies = new THREE.InstancedMesh(canopyGeo, canopyMat, count * 2);
    const crowns = new THREE.InstancedMesh(canopyGeo, crownMat, count);

    const matrix = new THREE.Matrix4();
    const quaternion = new THREE.Quaternion();
    const euler = new THREE.Euler();

    for (let i = 0; i < count; i++) {
      const point = this.randomClearing(18, 50, 4.5);
      const x = point.x, z = point.y;
      const y = this.localTerrainHeightAt(x, z);
      const s = 0.8 + this.random() * 0.7;
      const yaw = this.random() * Math.PI * 2;

      matrix.makeTranslation(x, y + 2.3 * s, z).scale(new THREE.Vector3(s, s, s));
      trunks.setMatrixAt(i, matrix);

      for (let j = 0; j < 2; j++) {
        const angle = yaw + j * Math.PI + (this.random() - 0.5) * 0.6;
        const spread = (0.9 + this.random() * 0.7) * s;
        euler.set(this.random() * 0.25, this.random() * Math.PI, this.random() * 0.25);
        quaternion.setFromEuler(euler);
        matrix.compose(
          new THREE.Vector3(
            x + Math.cos(angle) * spread,
            y + (4.4 + this.random() * 0.5) * s,
            z + Math.sin(angle) * spread
          ),
          quaternion,
          new THREE.Vector3(
            s * (0.85 + this.random() * 0.35),
            s * (0.7 + this.random() * 0.25),
            s * (0.85 + this.random() * 0.35)
          )
        );
        canopies.setMatrixAt(i * 2 + j, matrix);
      }

      euler.set(0, this.random() * Math.PI, 0);
      quaternion.setFromEuler(euler);
      matrix.compose(
        new THREE.Vector3(x, y + 5.8 * s, z),
        quaternion,
        new THREE.Vector3(s * 0.8, s * 0.72, s * 0.8)
      );
      crowns.setMatrixAt(i, matrix);
    }

    trunks.castShadow = true;
    canopies.castShadow = true;
    crowns.castShadow = true;
    group.add(trunks, canopies, crowns);
    return group;
  }

  /**
   * 14. Cây cau cao vút: thân trắng mảnh, vòm lá nhỏ trên đỉnh — dáng cây quen thuộc của làng quê.
   */
  private createArecaPalms(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'ArecaPalms';

    const trunkMat = this.foliageMaterial(0x8b8a73, 0.05);
    const frondMat = this.foliageMaterial(0x3c7a3c, 0.24);
    frondMat.side = THREE.DoubleSide;

    const count = 34;
    const frondsPerTree = 7;
    const trunkGeo = this.geo(new THREE.CylinderGeometry(0.1, 0.16, 8.2, 5));
    const frondGeo = this.geo(this.bladeGeometry(1.9, 0.3, 0.35));

    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, count);
    const fronds = new THREE.InstancedMesh(frondGeo, frondMat, count * frondsPerTree);

    const matrix = new THREE.Matrix4();
    const quaternion = new THREE.Quaternion();
    const euler = new THREE.Euler();
    const yAxis = new THREE.Vector3(0, 1, 0);
    const zAxis = new THREE.Vector3(0, 0, 1);

    for (let i = 0; i < count; i++) {
      const point = this.randomClearing(13, 56, 3);
      const x = point.x, z = point.y;
      const y = this.localTerrainHeightAt(x, z);
      const s = 0.78 + this.random() * 0.38;
      const yaw = this.random() * Math.PI * 2;

      euler.set(0, yaw, 0);
      quaternion.setFromEuler(euler);
      matrix.compose(new THREE.Vector3(x, y + 4.1 * s, z), quaternion, new THREE.Vector3(s, s, s));
      trunks.setMatrixAt(i, matrix);

      const crownY = y + 8.2 * s - 0.15;
      for (let j = 0; j < frondsPerTree; j++) {
        const spread = yaw + (j / frondsPerTree) * Math.PI * 2 + (this.random() - 0.5) * 0.18;
        const qYaw = new THREE.Quaternion().setFromAxisAngle(yAxis, spread);
        const qLift = new THREE.Quaternion().setFromAxisAngle(zAxis, 0.5 + this.random() * 0.35);
        const q = qYaw.multiply(qLift);
        matrix.compose(new THREE.Vector3(x, crownY, z), q, new THREE.Vector3(s, s, s));
        fronds.setMatrixAt(i * frondsPerTree + j, matrix);
      }
    }

    trunks.castShadow = true;
    fronds.castShadow = true;
    group.add(trunks, fronds);
    return group;
  }

  /**
   * 15. Vườn chuối: thân mọng nước, lá to bản cong rũ quanh gốc.
   */
  private createBananaPlants(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'BananaGarden';

    const trunkMat = this.foliageMaterial(0x7f8f45, 0.08);
    const leafMat = this.foliageMaterial(0x4c8a3e, 0.3);
    leafMat.side = THREE.DoubleSide;

    const spots: THREE.Vector2[] = [];
    for (let i = 0; i < 14; i++) spots.push(this.randomClearing(13, 52, 2.4));
    for (const [x, z] of [
      [VILLAGE_CENTER.x - 14, VILLAGE_CENTER.z + 12],
      [VILLAGE_CENTER.x + 13, VILLAGE_CENTER.z + 10],
      [VILLAGE_CENTER.x - 12, VILLAGE_CENTER.z - 12],
      [LOTUS_POND_CENTER.x - 6, LOTUS_POND_CENTER.z + 6],
      [LOTUS_POND_CENTER.x + 6, LOTUS_POND_CENTER.z - 7],
      [VILLAGE_CENTER.x + 8, VILLAGE_CENTER.z + 15]
    ]) {
      if (riverDistance(x, z) > 5.5) spots.push(new THREE.Vector2(x, z));
    }

    const leavesPerPlant = 7;
    const trunkGeo = this.geo(new THREE.CylinderGeometry(0.17, 0.27, 2.2, 6));
    const leafGeo = this.geo(this.bladeGeometry(2.6, 0.78, 0.42));
    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, spots.length);
    const leaves = new THREE.InstancedMesh(leafGeo, leafMat, spots.length * leavesPerPlant);

    const matrix = new THREE.Matrix4();
    const quaternion = new THREE.Quaternion();
    const euler = new THREE.Euler();
    const yAxis = new THREE.Vector3(0, 1, 0);
    const zAxis = new THREE.Vector3(0, 0, 1);

    for (let i = 0; i < spots.length; i++) {
      const { x, y: z } = spots[i];
      const y = this.localTerrainHeightAt(x, z);
      const s = 0.9 + this.random() * 0.4;
      const yaw = this.random() * Math.PI * 2;

      euler.set(0, yaw, 0);
      quaternion.setFromEuler(euler);
      matrix.compose(new THREE.Vector3(x, y + 1.1 * s, z), quaternion, new THREE.Vector3(s, s, s));
      trunks.setMatrixAt(i, matrix);

      const crownY = y + 2.15 * s;
      for (let j = 0; j < leavesPerPlant; j++) {
        const spread = yaw + (j / leavesPerPlant) * Math.PI * 2 + (this.random() - 0.5) * 0.3;
        const qYaw = new THREE.Quaternion().setFromAxisAngle(yAxis, spread);
        const qLift = new THREE.Quaternion().setFromAxisAngle(zAxis, 0.18 + this.random() * 0.5);
        const q = qYaw.multiply(qLift);
        const ls = s * (0.86 + this.random() * 0.26);
        matrix.compose(new THREE.Vector3(x, crownY, z), q, new THREE.Vector3(ls, ls, ls));
        leaves.setMatrixAt(i * leavesPerPlant + j, matrix);
      }
    }

    trunks.castShadow = true;
    leaves.castShadow = true;
    group.add(trunks, leaves);
    return group;
  }

  /**
   * 16. Lũy tre quanh làng (chừa cổng tam quan) và những bụi tre ven đồi.
   */
  private createBambooGroves(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'BambooGroves';

    const culmMat = this.foliageMaterial(0x7f9440, 0.22);
    const leafMat = this.foliageMaterial(0x4c7c38, 0.45);

    const clumps: Array<{ x: number; z: number; s: number }> = [];
    for (let i = 0; i < 46; i++) {
      const angle = (i / 46) * Math.PI * 2;
      if (Math.abs(angle - Math.PI / 2) < 0.26) continue;
      const radius = 18.2 + (i % 3) * 0.6 + this.random() * 0.8;
      clumps.push({
        x: VILLAGE_CENTER.x + Math.cos(angle) * radius,
        z: VILLAGE_CENTER.z + Math.sin(angle) * radius,
        s: 0.85 + this.random() * 0.45
      });
    }
    for (let i = 0; i < 14; i++) {
      const point = this.randomClearing(14, 60, 6);
      clumps.push({ x: point.x, z: point.y, s: 0.75 + this.random() * 0.6 });
    }

    const culms: THREE.Matrix4[] = [];
    const leafTufts: THREE.Matrix4[] = [];
    const matrix = new THREE.Matrix4();
    const quaternion = new THREE.Quaternion();
    const euler = new THREE.Euler();

    for (const clump of clumps) {
      const ground = this.localTerrainHeightAt(clump.x, clump.z);
      const culmCount = 14 + Math.floor(this.random() * 7);
      for (let c = 0; c < culmCount; c++) {
        const angle = this.random() * Math.PI * 2;
        const radius = Math.sqrt(this.random()) * 1.1 * clump.s;
        const x = clump.x + Math.cos(angle) * radius;
        const z = clump.z + Math.sin(angle) * radius;
        const height = (3.6 + this.random() * 1.8) * clump.s;

        euler.set((this.random() - 0.5) * 0.12, this.random() * Math.PI, (this.random() - 0.5) * 0.12);
        quaternion.setFromEuler(euler);
        matrix.compose(
          new THREE.Vector3(x, ground, z),
          quaternion,
          new THREE.Vector3(clump.s, height, clump.s)
        );
        culms.push(matrix.clone());

        // Chùm lá nhỏ rải khắp nửa trên thân: bụi tre kín, không thành cây cột cắm ô.
        const tuftCount = 3 + Math.floor(this.random() * 2);
        for (let l = 0; l < tuftCount; l++) {
          const tuftYaw = this.random() * Math.PI * 2;
          const tilt = 0.55 + this.random() * 0.7;
          euler.set(Math.sin(tuftYaw) * tilt, tuftYaw, Math.cos(tuftYaw) * tilt);
          quaternion.setFromEuler(euler);
          const ls = (0.5 + this.random() * 0.34) * clump.s;
          matrix.compose(
            new THREE.Vector3(
              x + Math.cos(tuftYaw) * 0.32 * clump.s,
              ground + height * (0.44 + this.random() * 0.5),
              z + Math.sin(tuftYaw) * 0.32 * clump.s
            ),
            quaternion,
            new THREE.Vector3(ls * 1.5, ls * 1.15, ls * 1.5)
          );
          leafTufts.push(matrix.clone());
        }
      }
    }

    const culmGeo = this.geo(new THREE.CylinderGeometry(0.055, 0.078, 1, 5));
    culmGeo.translate(0, 0.5, 0);
    const culmMesh = new THREE.InstancedMesh(culmGeo, culmMat, culms.length);
    culms.forEach((m, i) => culmMesh.setMatrixAt(i, m));
    culmMesh.instanceMatrix.needsUpdate = true;
    culmMesh.castShadow = true;
    group.add(culmMesh);

    const leafGeo = this.geo(new THREE.ConeGeometry(0.42, 1.15, 6));
    const leafMesh = new THREE.InstancedMesh(leafGeo, leafMat, leafTufts.length);
    leafTufts.forEach((m, i) => leafMesh.setMatrixAt(i, m));
    leafMesh.instanceMatrix.needsUpdate = true;
    leafMesh.castShadow = true;
    group.add(leafMesh);

    return group;
  }

  /**
   * 17. Cây đa cổ thụ: thân phình, rễ phụ buông xuống, tán rộng che mát đầu làng.
   */
  private createBanyanTrees(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'BanyanTrees';

    const barkMat = this.foliageMaterial(0x5d4a35, 0.04);
    const canopyMat = this.foliageMaterial(0x2e6b3b, 0.12);

    const spots = [
      { x: VILLAGE_CENTER.x - 17, z: VILLAGE_CENTER.z + 6 },
      { x: LOTUS_POND_CENTER.x - 9.5, z: LOTUS_POND_CENTER.z + 4.5 },
      { x: VILLAGE_CENTER.x + 13, z: VILLAGE_CENTER.z - 14 }
    ];

    const trunks = new THREE.InstancedMesh(
      this.geo(new THREE.CylinderGeometry(0.55, 0.95, 4.8, 7)), barkMat, spots.length
    );
    const roots = new THREE.InstancedMesh(
      this.geo(new THREE.ConeGeometry(0.42, 2.2, 6)), barkMat, spots.length * 4
    );
    const canopies = new THREE.InstancedMesh(
      this.geo(new THREE.DodecahedronGeometry(2.4, 1)), canopyMat, spots.length * 6
    );
    const aerialRoots = new THREE.InstancedMesh(
      this.geo(new THREE.CylinderGeometry(0.045, 0.07, 1, 4)), barkMat, spots.length * 5
    );

    const matrix = new THREE.Matrix4();
    const quaternion = new THREE.Quaternion();
    const euler = new THREE.Euler();

    for (let i = 0; i < spots.length; i++) {
      const { x, z } = spots[i];
      const y = this.localTerrainHeightAt(x, z);
      const s = 0.9 + this.random() * 0.25;

      matrix.compose(new THREE.Vector3(x, y + 2.4 * s, z), new THREE.Quaternion(), new THREE.Vector3(s, s, s));
      trunks.setMatrixAt(i, matrix);

      for (let r = 0; r < 4; r++) {
        const angle = (r / 4) * Math.PI * 2 + 0.4;
        euler.set(Math.sin(angle) * 0.42, angle, Math.cos(angle) * 0.42);
        quaternion.setFromEuler(euler);
        matrix.compose(
          new THREE.Vector3(x + Math.cos(angle) * 0.7, y + 0.8, z + Math.sin(angle) * 0.7),
          quaternion,
          new THREE.Vector3(s, s, s)
        );
        roots.setMatrixAt(i * 4 + r, matrix);
      }

      for (let c = 0; c < 6; c++) {
        const angle = (c / 6) * Math.PI * 2 + this.random() * 0.5;
        const spread = (c === 0 ? 0 : 1.6 + this.random() * 1.4) * s;
        euler.set(this.random() * 0.3, this.random() * Math.PI, this.random() * 0.3);
        quaternion.setFromEuler(euler);
        matrix.compose(
          new THREE.Vector3(
            x + Math.cos(angle) * spread,
            y + (5.0 + this.random() * 1.2) * s,
            z + Math.sin(angle) * spread
          ),
          quaternion,
          new THREE.Vector3(s * (1.2 + this.random() * 0.5), s * (0.9 + this.random() * 0.3), s * (1.2 + this.random() * 0.5))
        );
        canopies.setMatrixAt(i * 6 + c, matrix);
      }

      for (let a = 0; a < 5; a++) {
        const angle = (a / 5) * Math.PI * 2 + 0.25;
        const radius = (1.6 + this.random() * 1.2) * s;
        const length = (3.0 + this.random() * 1.8) * s;
        matrix.compose(
          new THREE.Vector3(
            x + Math.cos(angle) * radius,
            y + length * 0.5 + 0.1,
            z + Math.sin(angle) * radius
          ),
          new THREE.Quaternion(),
          new THREE.Vector3(1, length, 1)
        );
        aerialRoots.setMatrixAt(i * 5 + a, matrix);
      }
    }

    for (const mesh of [trunks, roots, canopies, aerialRoots]) {
      mesh.instanceMatrix.needsUpdate = true;
      mesh.castShadow = true;
    }
    group.add(trunks, roots, canopies, aerialRoots);
    return group;
  }

  /** Thân dừa uốn cong dần, trả kèm tọa độ ngọn để đặt tàu lá và buồng dừa. */
  private curvedTrunkGeometry(): { geometry: THREE.BufferGeometry; crown: THREE.Vector3 } {
    const parts: THREE.BufferGeometry[] = [];
    const segments = 7;
    const height = 0.95;
    let bx = 0, by = 0, bend = 0;
    for (let i = 0; i < segments; i++) {
      const g = new THREE.CylinderGeometry(
        0.3 - (i + 1) * 0.012, 0.3 - i * 0.012, height, 6
      );
      g.translate(0, height * 0.5, 0);
      g.applyMatrix4(new THREE.Matrix4().makeRotationZ(-bend));
      g.translate(bx, by, 0);
      parts.push(g);
      bx += Math.sin(bend) * height;
      by += Math.cos(bend) * height;
      bend += 0.115;
    }
    const geometry = mergeGeometries(parts, false)!;
    parts.forEach((p) => p.dispose());
    return { geometry, crown: new THREE.Vector3(bx, by + 0.05, 0) };
  }

  /** Tàu lá dừa/chuối: dải dài thuôn nhọn, gấp nhẹ theo sống lá và rũ dần về mũi. */
  private bladeGeometry(length: number, width: number, droop: number): THREE.BufferGeometry {
    const segments = 8;
    const positions: number[] = [], uvs: number[] = [], indices: number[] = [];
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const taper = Math.sin(Math.PI * Math.min(1, t * 0.9 + 0.1));
      const w = width * taper * (0.8 + 0.2 * Math.abs(Math.sin(t * Math.PI * 7)));
      const x = t * length;
      const y = -droop * t * t + 0.1 * Math.sin(t * Math.PI) * width;
      const fold = w * 0.16;
      positions.push(x, y + fold, -w, x, y, 0, x, y + fold, w);
      uvs.push(t, 0, t, 0.5, t, 1);
    }
    for (let i = 0; i < segments; i++) {
      const a = i * 3, b = (i + 1) * 3;
      indices.push(a, b, a + 1, a + 1, b, b + 1, a + 1, b + 1, a + 2, a + 2, b + 1, b + 2);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    return geometry;
  }

  /**
   * 18. Cây thông & Cây tán nhọn cao nguyên (Highland Trees)
   */
  private createHighlandTrees(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'HighlandTrees';
    const count = 45;
    const trunkMat = this.foliageMaterial(0x453329, 0.03);
    const pineMat = this.foliageMaterial(0x255d3a, 0.1);

    const trunkGeo = this.geo(new THREE.CylinderGeometry(0.22, 0.38, 3.8, 6));
    const coneGeo = this.geo(new THREE.ConeGeometry(1.9, 4.4, 7));

    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, count);
    const pines = new THREE.InstancedMesh(coneGeo, pineMat, count);

    const matrix = new THREE.Matrix4();

    for (let i = 0; i < count; i++) {
      const point = this.randomClearing(10, 30, 3.4);
      const x = point.x, z = point.y;
      const y = this.localTerrainHeightAt(x, z);
      const s = 0.7 + this.random() * 0.55;

      matrix.makeTranslation(x, y + 1.8 * s, z).scale(new THREE.Vector3(s, s, s));
      trunks.setMatrixAt(i, matrix);

      matrix.makeTranslation(x, y + 4.2 * s, z).scale(new THREE.Vector3(s, s, s));
      pines.setMatrixAt(i, matrix);
    }

    trunks.castShadow = pines.castShadow = true;
    group.add(trunks, pines);
    return group;
  }

  /**
   * 12. Bụi hoa & Dương xỉ nhiệt đới (Tropical Shrubs & Flowers)
   */
  private createTropicalShrubs(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'TropicalShrubs';
    const shrubMat = this.foliageMaterial(0x7d9c46, 0.18);
    const flowerMat = this.mat(0xd94b3f, 0.4);

    const shrubGeo = this.geo(new THREE.IcosahedronGeometry(1.1, 1));
    const flowerGeo = this.geo(new THREE.DodecahedronGeometry(0.4));

    const count = this.opts.shrubCount;
    const shrubs = new THREE.InstancedMesh(shrubGeo, shrubMat, count);
    const flowers = new THREE.InstancedMesh(flowerGeo, flowerMat, count);

    const matrix = new THREE.Matrix4();

    for (let i = 0; i < count; i++) {
      const point = this.randomClearing(12, 57, 2.8);
      const x = point.x, z = point.y;
      const y = this.localTerrainHeightAt(x, z);
      const s = 0.55 + this.random() * 0.7;

      matrix.makeTranslation(x, y + 0.5 * s, z).scale(new THREE.Vector3(s * 1.3, s * 0.75, s * 1.3));
      shrubs.setMatrixAt(i, matrix);

      matrix.makeTranslation(x, y + 1.0 * s, z).scale(new THREE.Vector3(s, s, s));
      flowers.setMatrixAt(i, matrix);
    }

    group.add(shrubs, flowers);
    return group;
  }

  /**
   * 13. Tảng đá hoa cương phủ rêu (Mossy Granite Boulders)
   */
  private createMossyBoulders(): THREE.InstancedMesh {
    const count = this.opts.rockCount;
    const rocks = new THREE.InstancedMesh(
      this.geo(new THREE.DodecahedronGeometry(1.5, 1)),
      this.sharedStone(),
      count
    );
    rocks.name = 'MossyBoulders';
    const matrix = new THREE.Matrix4();

    for (let i = 0; i < count; i++) {
      const point = this.randomClearing(14, 62, 3.5);
      const x = point.x, z = point.y;
      const y = this.localTerrainHeightAt(x, z);
      const s = 0.6 + this.random() * 1.3;

      matrix.makeTranslation(x, y + 0.5 * s, z).scale(new THREE.Vector3(s * 1.25, s * 0.8, s * 1.2));
      rocks.setMatrixAt(i, matrix);
    }

    rocks.castShadow = true;
    rocks.receiveShadow = true;
    return rocks;
  }

  /** Coastal basalt spires, terraces and a second small stone basin enlarge the silhouette. */
  private createCoastalMonuments(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'CoastalStoneMonuments';
    const stone = this.sharedStone();
    const moss = this.mat(0x4b7653);
    const spireGeometry = this.geo(new THREE.ConeGeometry(1, 1, 7));
    for (const [cx, cz, count] of [[-44, -36, 7], [48, -24, 6], [31, 55, 5]]) {
      for (let i = 0; i < count; i++) {
        const a = i * 2.39996;
        const x = cx + Math.cos(a) * (1.5 + i * 1.15);
        const z = cz + Math.sin(a) * (1.5 + i * 1.15);
        const height = 3.5 + (i * 17 % 11);
        const spire = new THREE.Mesh(spireGeometry, i % 4 === 0 ? moss : stone);
        spire.scale.set(1.8 + (i % 3) * 0.5, height, 1.8 + (i % 3) * 0.5);
        spire.position.set(x, this.localTerrainHeightAt(x, z) + height * 0.47, z);
        spire.rotation.z = Math.sin(a) * 0.12;
        spire.castShadow = true;
        group.add(spire);
      }
    }
    const x = 31, z = -28;
    const ground = this.localTerrainHeightAt(x, z);
    for (const [radius, height, y] of [[8, 0.8, 0.4], [6.4, 0.65, 1.1]]) {
      const terrace = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(radius, radius + 0.3, height, 12)), stone);
      terrace.position.set(x, ground + y, z);
      terrace.receiveShadow = true;
      group.add(terrace);
    }
    const basin = new THREE.Mesh(this.geo(new THREE.TorusGeometry(5.5, 0.55, 7, 32)), moss);
    basin.position.set(x, ground + 1.68, z);
    basin.rotation.x = Math.PI / 2;
    group.add(basin);
    const water = new THREE.Mesh(
      this.geo(new THREE.CircleGeometry(5.4, 32)),
      new THREE.ShaderMaterial({
        vertexShader: waterVertexShader,
        fragmentShader: waterFragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uPool: { value: 1 },
          uSunDirection: { value: this.sunDirection }
        },
        transparent: true
      })
    );
    this.materials.push(water.material as THREE.Material);
    water.rotation.x = -Math.PI / 2;
    water.position.set(x, ground + 1.55, z);
    group.add(water);
    return group;
  }

  /**
   * 14. Mây tích bồng bềnh (Cumulus Clouds)
   * Mỗi đám mây là một cụm khối cầu dẹt, viền mờ tan vào nền trời.
   */
  private createClouds(): THREE.Group {
    const group = new THREE.Group();
    const cloudMat = new THREE.ShaderMaterial({
      vertexShader: cloudVertexShader,
      fragmentShader: cloudFragmentShader,
      uniforms: { uTime: { value: 0 }, uSunDirection: { value: this.sunDirection } },
      transparent: true,
      depthWrite: false
    });
    this.materials.push(cloudMat);

    const puffsPerCloud = 11;
    const cloudCount = this.opts.cloudCount;
    const puffs = new THREE.InstancedMesh(
      this.geo(new THREE.IcosahedronGeometry(1, 2)), cloudMat, cloudCount * puffsPerCloud
    );
    puffs.frustumCulled = false;

    const matrix = new THREE.Matrix4();
    const position = new THREE.Vector3();
    const quaternion = new THREE.Quaternion();
    const euler = new THREE.Euler();
    const scale = new THREE.Vector3();
    let used = 0;

    for (let i = 0; i < cloudCount; i++) {
      const a = (i / cloudCount) * Math.PI * 2 + (this.random() - 0.5) * 0.5;
      const r = 96 + this.random() * 130;
      const cx = Math.cos(a) * r;
      const cz = Math.sin(a) * r;
      const baseY = 96 + this.random() * 42;
      const spread = 4.2 + this.random() * 6.0;
      const axis = this.random() * Math.PI;
      const puffsInCloud = 6 + Math.floor(this.random() * 5);

      for (let j = 0; j < puffsInCloud && used < puffs.count; j++) {
        const along = puffsInCloud === 1 ? 0 : (j / (puffsInCloud - 1)) * 2 - 1;
        // Phình ở giữa, thắt hai đầu và đáy gần như phẳng -> dáng bông mây thông thường.
        const puff = (1 - Math.abs(along) * 0.6) * (0.8 + this.random() * 0.5);
        position.set(
          cx + Math.cos(axis) * along * spread + (this.random() - 0.5) * 1.8,
          baseY + puff * 1.35 + (this.random() - 0.5) * 0.8,
          cz + Math.sin(axis) * along * spread + (this.random() - 0.5) * 1.8
        );
        scale.set(puff * 2.35 + 0.8, puff * 1.25 + 0.45, puff * 1.95 + 0.7);
        euler.set(0, this.random() * Math.PI, 0);
        quaternion.setFromEuler(euler);
        matrix.compose(position, quaternion, scale);
        puffs.setMatrixAt(used++, matrix);
      }
    }

    puffs.count = used;
    puffs.instanceMatrix.needsUpdate = true;
    group.add(puffs);
    group.name = 'CumulusClouds';
    return group;
  }

  /**
   * Hạc bay vòng quanh đảo: thân và hai cánh gộp vào 2 InstancedMesh,
   * mỗi khung hình chỉ cập nhật ma trận nên cả đàn chỉ tốn 2 draw call.
   */
  private createCranes(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'CraneFlock';

    const feather = new THREE.MeshBasicMaterial({
      color: 0xf4ead6, side: THREE.DoubleSide, transparent: true, opacity: 0.94
    });
    this.materials.push(feather);

    const bodyGeo = this.geo(new THREE.ConeGeometry(0.2, 1.35, 5));
    bodyGeo.rotateX(Math.PI / 2);

    const wingGeo = this.geo(new THREE.BufferGeometry());
    wingGeo.setAttribute('position', new THREE.Float32BufferAttribute([
      0, 0, 0.34, 0, 0, -0.34, 1.85, 0, -0.5
    ], 3));
    wingGeo.setIndex([0, 1, 2]);
    wingGeo.computeVertexNormals();

    const count = this.craneFlock.length;
    this.craneBodies = new THREE.InstancedMesh(bodyGeo, feather, count);
    this.craneWings = new THREE.InstancedMesh(wingGeo, feather, count * 2);
    this.craneBodies.frustumCulled = false;
    this.craneWings.frustumCulled = false;
    this.cranes = group;
    group.add(this.craneBodies, this.craneWings);
    return group;
  }

  /** Đom đóm vàng lập lờ trong rừng và ven suối, một draw call điểm sáng. */
  private createFireflies(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'Fireflies';
    const count = this.fireflyOrigin.length / 3;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = this.random() * Math.PI * 2;
      const radius = 15 + this.random() * 38;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = this.localTerrainHeightAt(x, z) + 1.2 + this.random() * 3.6;
      this.fireflyOrigin[i * 3] = x;
      this.fireflyOrigin[i * 3 + 1] = y;
      this.fireflyOrigin[i * 3 + 2] = z;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    const geometry = this.geo(new THREE.BufferGeometry());
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: 0xffd27a, size: 1.0, map: mistSprite(this.materials), transparent: true,
      opacity: 0.85, depthWrite: false, blending: THREE.AdditiveBlending
    });
    this.materials.push(material);
    this.fireflies = new THREE.Points(geometry, material);
    this.fireflies.frustumCulled = false;
    group.add(this.fireflies);
    return group;
  }

  /** Lá khô rơi xoay tản trong rừng, một InstancedMesh với màu theo từng lá. */
  private createFallingLeaves(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'FallingLeaves';
    const count = 64;
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    this.materials.push(material);
    this.leaves = new THREE.InstancedMesh(
      this.geo(new THREE.PlaneGeometry(0.17, 0.34)), material, count
    );
    this.leaves.frustumCulled = false;

    const palette = [0xb5722e, 0xcf9a45, 0x8f6b33, 0x6d8c3a, 0xa8552a];
    for (let i = 0; i < count; i++) {
      const angle = this.random() * Math.PI * 2;
      const radius = 13 + this.random() * 45;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const terrain = this.localTerrainHeightAt(x, z);
      this.leafState.push({
        x, z, ground: terrain,
        fall: 0.9 + this.random() * 0.9,
        sway: 0.5 + this.random() * 0.9,
        phase: this.random(),
        spin: (this.random() - 0.5) * 2.4
      });
      this.leaves.setColorAt(i, new THREE.Color(palette[i % palette.length]));
    }
    if (this.leaves.instanceColor) this.leaves.instanceColor.needsUpdate = true;
    group.add(this.leaves);
    return group;
  }

  /** Sương mù cuộn quanh chân thác, một draw call điểm sáng mờ. */
  private createWaterfallMist(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'WaterfallMist';
    const count = 34;
    const positions = new Float32Array(count * 3);
    const geometry = this.geo(new THREE.BufferGeometry());
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: 0xe6dfcf, size: 4.2, map: mistSprite(this.materials), transparent: true,
      opacity: 0.16, depthWrite: false, sizeAttenuation: true, blending: THREE.AdditiveBlending
    });
    this.materials.push(material);
    this.fallMist = new THREE.Points(geometry, material);
    this.fallMist.frustumCulled = false;
    group.add(this.fallMist);
    return group;
  }

  private foliageMaterial(color: number, wind = 0.12): THREE.ShaderMaterial {
    const m = new THREE.ShaderMaterial({
      vertexShader: foliageVertexShader,
      fragmentShader: foliageFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uWind: { value: wind },
        uColor: { value: new THREE.Color(color) },
        uSunDirection: { value: this.sunDirection },
        uFogColor: { value: new THREE.Color(SKY_HORIZON_FOG) },
        uFogDensity: { value: FOG_DENSITY }
      }
    });
    this.foliageMaterials.push(m);
    this.materials.push(m);
    return m;
  }

  public update(elapsed: number): void {
    this.foliageMaterials.forEach((m) => {
      m.uniforms.uTime.value = elapsed;
    });

    this.root.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.material && !Array.isArray(m.material)) {
        const sm = m.material as THREE.ShaderMaterial;
        if (sm.uniforms?.uTime) sm.uniforms.uTime.value = elapsed;
      }
    });

    if (this.clouds) this.clouds.rotation.y = elapsed * 0.0016;
    if (this.incense) {
      const positions = this.incense.geometry.getAttribute('position') as THREE.BufferAttribute;
      for (let i = 0; i < positions.count; i++) {
        const phase = (elapsed * 0.17 + i / positions.count) % 1;
        const angle = i * 2.39996 + phase * 2.4;
        const radius = 0.08 + phase * 0.55;
        positions.setXYZ(i, Math.cos(angle) * radius, phase * 2.7, Math.sin(angle) * radius);
      }
      positions.needsUpdate = true;
    }
    if (this.spray) {
      const positions = this.spray.geometry.getAttribute('position') as THREE.BufferAttribute;
      for (let i = 0; i < positions.count; i++) {
        const phase = (elapsed * (0.36 + (i % 7) * 0.035) + i * 0.619) % 1;
        const angle = i * 2.39996;
        const spread = 1.0 + phase * 5.0;
        const x = -18 + Math.cos(angle) * spread;
        const z = 18 + Math.sin(angle) * spread;
        positions.setXYZ(i, x, this.localTerrainHeightAt(x, z) + 0.4 + phase * (2.0 + i % 4), z);
      }
      positions.needsUpdate = true;
    }

    if (this.fallMist) {
      const positions = this.fallMist.geometry.getAttribute('position') as THREE.BufferAttribute;
      for (let i = 0; i < positions.count; i++) {
        const phase = (elapsed * (0.12 + (i % 5) * 0.014) + i * 0.37) % 1;
        const cx = i % 2 === 0 ? -21 : -15;
        const spread = 1.1 + phase * 1.9;
        const x = cx + Math.cos(i * 2.39996) * spread;
        const z = 16.0 + Math.sin(i * 2.39996) * spread * 0.55;
        positions.setXYZ(i, x, this.localTerrainHeightAt(x, z) + 0.6 + phase * 6.5, z);
      }
      positions.needsUpdate = true;
    }

    if (this.craneBodies && this.craneWings && this.cranes) {
      const matrix = new THREE.Matrix4();
      const position = new THREE.Vector3();
      const quaternion = new THREE.Quaternion();
      const wingQuaternion = new THREE.Quaternion();
      const euler = new THREE.Euler();
      const scale = new THREE.Vector3();
      for (let i = 0; i < this.craneFlock.length; i++) {
        const crane = this.craneFlock[i];
        const angle = crane.angle + elapsed * crane.speed;
        const bob = Math.sin(elapsed * 0.45 + crane.phase) * 0.7;
        position.set(Math.cos(angle) * crane.radius, crane.height + bob, Math.sin(angle) * crane.radius);
        euler.set(0, -angle, 0);
        quaternion.setFromEuler(euler);
        const s = crane.scale * 1.5;
        matrix.compose(position, quaternion, scale.set(s, s, s));
        this.craneBodies.setMatrixAt(i, matrix);

        const flap = Math.sin(elapsed * 5.2 + crane.phase) * 0.55;
        for (let w = 0; w < 2; w++) {
          euler.set(0, -angle, w === 0 ? flap : -flap);
          wingQuaternion.setFromEuler(euler);
          matrix.compose(position, wingQuaternion, scale.set(w === 0 ? s : -s, s, s));
          this.craneWings.setMatrixAt(i * 2 + w, matrix);
        }
      }
      this.craneBodies.instanceMatrix.needsUpdate = true;
      this.craneWings.instanceMatrix.needsUpdate = true;
    }

    if (this.fireflies) {
      const positions = this.fireflies.geometry.getAttribute('position') as THREE.BufferAttribute;
      for (let i = 0; i < positions.count; i++) {
        const t = elapsed * 0.6 + i * 1.7;
        const ox = this.fireflyOrigin[i * 3];
        const oy = this.fireflyOrigin[i * 3 + 1];
        const oz = this.fireflyOrigin[i * 3 + 2];
        positions.setXYZ(
          i,
          ox + Math.sin(t * 0.9 + i) * 0.9,
          oy + Math.sin(t * 1.4 + i * 0.7) * 0.55,
          oz + Math.cos(t * 0.75 + i * 1.3) * 0.9
        );
      }
      positions.needsUpdate = true;
    }

    if (this.leaves) {
      const matrix = new THREE.Matrix4();
      const position = new THREE.Vector3();
      const quaternion = new THREE.Quaternion();
      const euler = new THREE.Euler();
      const scale = new THREE.Vector3(1, 1, 1);
      const span = 14;
      for (let i = 0; i < this.leafState.length; i++) {
        const leaf = this.leafState[i];
        const cycle = (elapsed * leaf.fall / span + leaf.phase) % 1;
        position.set(
          leaf.x + Math.sin(elapsed * 1.1 + leaf.phase * 6.2) * leaf.sway,
          leaf.ground + span - cycle * span,
          leaf.z + Math.cos(elapsed * 0.9 + leaf.phase * 4.1) * leaf.sway * 0.7
        );
        euler.set(elapsed * leaf.spin, leaf.phase * 6.28 + elapsed * 1.2, elapsed * leaf.spin * 0.7);
        quaternion.setFromEuler(euler);
        matrix.compose(position, quaternion, scale);
        this.leaves.setMatrixAt(i, matrix);
      }
      this.leaves.instanceMatrix.needsUpdate = true;
    }
  }

  public dispose(): void {
    this.geometries.forEach((g) => g.dispose());
    this.materials.forEach((resource) => resource.dispose());
  }
}

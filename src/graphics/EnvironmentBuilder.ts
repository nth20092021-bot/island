import * as THREE from 'three';
import { grassMaterial, mistSprite, rockMaterial, sandMaterial } from './TextureFactory';
import { foliageVertexShader, foliageFragmentShader } from './Shaders/FoliageShader';
import { waterFragmentShader, waterVertexShader } from './Shaders/WaterShader';
import { streamFragmentShader, streamVertexShader } from './Shaders/LavaShader';
import { cloudVertexShader, cloudFragmentShader } from './Shaders/SkyShader';
import { ISLAND_SCALE, ISLAND_HEIGHT_SCALE, RIVER_PATH, SUN_DIRECTION, riverDistance } from '../core/IslandLayout';
import { ChestData } from '../core/EventBus';

export interface EnvironmentBuilderOptions {
  seed?: number;
  treeCount?: number;
  palmCount?: number;
  shrubCount?: number;
  rockCount?: number;
  cloudCount?: number;
}

/**
 * EnvironmentBuilder: Dựng hòn đảo nhiệt đới hùng vĩ quy mô lớn (Majestic Tropical Paradise Island)
 * - Đảo rộng ~110 đơn vị thế giới; địa hình và cảnh vật dùng chung hệ số mở rộng
 * - Địa hình đồi núi trập trùng, cao nguyên xanh, thung lũng sâu
 * - Thác nước đôi hùng vĩ (Grand Cascading Waterfalls) đổ từ vách đá cao xuống hồ nước ngọt
 * - Con suối trong lành uốn lượn (Meandering River & Stream) với đá cuội và bọt nước
 * - Bể đá cổ & Quần thể tàn tích cổ kính (Ancient Mossy Stone Baths & Sanctuary)
 * - Cầu gỗ vượt suối (Timber Footbridge) & Cầu tàu biển dài
 * - Rừng cây rậm rạp xum xuê (130+ cây tán rộng, cọ bãi biển, thông cao nguyên)
 * - Mây trời bồng bềnh đa tầng
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
  private stoneMaterial: THREE.MeshStandardMaterial | null = null;
  private wetStoneMaterial: THREE.MeshStandardMaterial | null = null;
  private gravelMaterial: THREE.MeshStandardMaterial | null = null;
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
  }

  public setChestClearings(chests: ChestData[]): void {
    this.chestClearings = chests.map((chest) => new THREE.Vector2(
      chest.position.x / ISLAND_SCALE, chest.position.z / ISLAND_SCALE
    ));
  }

  private clearOfChests(x: number, z: number, radius: number): boolean {
    return this.chestClearings.every((pos) => Math.hypot(x - pos.x, z - pos.y) > radius);
  }

  private randomClearing(minRadius: number, maxRadius: number, clearance: number): THREE.Vector2 {
    for (let attempt = 0; attempt < 40; attempt++) {
      const angle = this.random() * Math.PI * 2;
      const radius = minRadius + this.random() * (maxRadius - minRadius);
      const x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
      if (this.clearOfChests(x, z, clearance) && riverDistance(x, z) > 5) {
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

    // 3. Công trình tự nhiên & Tàn tích cổ
    this.root.add(this.createAncientStoneBaths()); // Bể đá cổ & đài phun nước rêu phong
    this.root.add(this.createGrandWaterfalls());  // Thác nước đôi đổ từ vách đá
    this.root.add(this.createMeanderingRiver());  // Con suối uốn lượn qua thung lũng
    this.root.add(this.createTimberBridge());     // Cầu gỗ mộc bắc qua suối
    this.root.add(this.createPier());             // Cầu tàu ven biển

    // 4. Hệ sinh thái thực vật nhiệt đới rậm rạp (Nhiều cây cối, cọ, hoa cỏ)
    this.root.add(this.createBeachPalms());
    this.root.add(this.createCanopyForest());
    this.root.add(this.createHighlandTrees());
    this.root.add(this.createTropicalShrubs());

    // 5. Tảng đá phủ rêu & Mây trời bồng bềnh
    this.root.add(this.createMossyBoulders());
    this.root.add(this.createCoastalMonuments());
    this.clouds = this.createClouds();
    this.root.add(this.clouds);

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

  private localTerrainHeightAt(x: number, z: number): number {
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

    const detail = this.noise(x, z) * (r < 18 ? 0.4 : 0.85);

    const height = THREE.MathUtils.clamp(base + mountainRidges + riverValley + pool + detail, 0.5, 25.5);
    // Lower the beach smoothly beneath the sea, rather than cutting a rectangular rim.
    const shore = THREE.MathUtils.smoothstep(r, 68, 74);
    return THREE.MathUtils.lerp(height, -2.8, shore);
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

  /** Mặt nước cao hơn nền lòng suối: sâu ở tim đường, nông và chìm dần vào bờ. */
  private riverSurfaceLift(side: number): number {
    return 0.36 - side * side * 0.26;
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
   * 1. Biển ngọc lam nhiệt đới bao la (bán kính mở rộng 260m)
   */
  private createOcean(): THREE.Mesh {
    const g = this.geo(new THREE.CircleGeometry(430, 160));
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

    const sandColor = new THREE.Color(0xf6d89b);     // Cát vàng bãi biển
    const shoreGrass = new THREE.Color(0xa3e635);    // Cỏ xanh mạ chuyển tiếp
    const lushGrass = new THREE.Color(0x22c55e);     // Cỏ ngọc bích sườn đồi
    const forestMeadow = new THREE.Color(0x16a34a);  // Thảm cỏ rừng rậm
    const highlandGreen = new THREE.Color(0x4ade80); // Cỏ cao nguyên tươi mát ngập nắng
    const mountainPeak = new THREE.Color(0x86efac);  // Đỉnh núi cao nguyên

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

      // Lòng suối & bãi bồi: nước chảy trên nền sỏi tối màu chứ không phải trên cỏ xanh.
      const rd = riverDistance(x, z);
      if (rd < 4.2) {
        const gravel = new THREE.Color(0x8d8574);
        const bed = new THREE.Color(0x4b4a3f);
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
   * 4. Bể đá cổ & Quần thể tàn tích cổ kính (Ancient Mossy Stone Baths & Sanctuary)
   */
  private createAncientStoneBaths(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'AncientStoneBaths';

    const stoneMat = this.mat(0x9ca3af, 0.88);
    const ancientGold = this.mat(0xfbbf24, 0.25, 0.75);

    const summitY = this.localTerrainHeightAt(0, 0);

    // Bể đá cổ tầng 1 (Tầng lớn bên ngoài)
    const bathTier1 = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(11.5, 12.8, 1.1, 32)), stoneMat);
    bathTier1.position.set(0, summitY + 0.55, 0);
    bathTier1.receiveShadow = true;
    group.add(bathTier1);

    // Bể đá cổ tầng 2 (Tầng cao bên trong)
    const bathTier2 = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(8.2, 9.4, 1.2, 28)), stoneMat);
    bathTier2.position.set(0, summitY + 1.6, 0);
    bathTier2.receiveShadow = true;
    group.add(bathTier2);

    // Lòng hồ nước trong xanh trong bể đá cổ
    const bathWater = new THREE.Mesh(
      this.geo(new THREE.CircleGeometry(7.6, 40)),
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
    bathWater.rotation.x = -Math.PI / 2;
    // Keep the surface above the upper stone disc (top = summitY + 2.2).
    bathWater.position.set(0, summitY + 2.31, 0);
    this.materials.push(bathWater.material as THREE.Material);
    group.add(bathWater);

    // 6 Cột đá cổ kính uy nghiêm bao quanh bể đá cổ
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3;
      const px = Math.cos(angle) * 7.8;
      const pz = Math.sin(angle) * 7.8;

      const column = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(0.5, 0.65, 5.2, 8)), stoneMat);
      column.position.set(px, summitY + 3.8, pz);
      column.castShadow = true;
      group.add(column);

      // Đầu cột chạm khắc
      const capital = new THREE.Mesh(this.geo(new THREE.BoxGeometry(1.2, 0.45, 1.2)), stoneMat);
      capital.position.set(px, summitY + 6.3, pz);
      group.add(capital);
    }

    // Đài phun nước cổ và biểu tượng thái dương vàng giữa bể đá
    const centralPedestal = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(1.4, 1.8, 2.2, 16)), stoneMat);
    centralPedestal.position.set(0, summitY + 2.5, 0);
    group.add(centralPedestal);

    const sunOrb = new THREE.Mesh(this.geo(new THREE.IcosahedronGeometry(1.2, 2)), ancientGold);
    sunOrb.position.set(0, summitY + 4.2, 0);
    group.add(sunOrb);

    // Bậc thang đá cổ dẫn lên bể đá
    for (let s = 0; s < 4; s++) {
      const step = new THREE.Mesh(this.geo(new THREE.BoxGeometry(4.2 - s * 0.4, 0.35, 1.2)), stoneMat);
      step.position.set(0, summitY + s * 0.35 + 0.18, 12.2 - s * 0.9);
      step.receiveShadow = true;
      group.add(step);
    }

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
      new THREE.InstancedMesh(backdropGeo, stone, 26)
    );

    // Twin falls share the same rocky bowl and feed the stream at its source.
    for (const [x, width, height] of [[-21, 4.5, 9], [-15, 3.6, 7.5]]) {
      const ground = this.localTerrainHeightAt(x, 18);
      const fall = new THREE.Mesh(this.geo(new THREE.PlaneGeometry(width, height, 8, 24)), fallMat);
      fall.position.set(x, ground + height * 0.5 + 0.25, 16.2);
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
      positions.setY(i, this.localTerrainHeightAt(x, z) + 0.3);
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
   * 7. Cầu gỗ mộc vượt suối (Timber River Bridge)
   */
  private createTimberBridge(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'TimberBridge';

    const wood = this.mat(0x78350f, 0.75);
    const t = 0.34;
    const point = this.riverCurve.getPoint(t);
    const tangent = this.riverCurve.getTangent(t);
    // Thân cầu vuông góc với dòng chảy: lấy hướng pháp tuyến của tiếp tuyến tại khúc đặt cầu.
    const yaw = Math.atan2(-tangent.z, tangent.x);
    const halfWidth = this.riverHalfWidth(t);
    const span = halfWidth * 2 + 3.4;
    const waterY = this.localTerrainHeightAt(point.x, point.z) + this.riverSurfaceLift(0);
    const deckY = waterY + 1.55;
    // Quy đổi offset (ngang suối, dọc suối) từ hệ trục của cầu sang tọa độ đảo.
    const place = (across: number, along: number) => new THREE.Vector2(
      point.x + Math.sin(yaw) * across + Math.cos(yaw) * along,
      point.z + Math.cos(yaw) * across - Math.sin(yaw) * along
    );

    const deck = new THREE.Mesh(this.geo(new THREE.BoxGeometry(2.6, 0.32, span)), wood);
    deck.position.set(point.x, deckY, point.z);
    deck.rotation.y = yaw;
    deck.castShadow = true;
    group.add(deck);

    // Lan can cầu gỗ hai bên
    for (const sx of [-1.2, 1.2]) {
      const rail = new THREE.Mesh(this.geo(new THREE.BoxGeometry(0.14, 0.85, span)), wood);
      const at = place(0, sx);
      rail.position.set(at.x, deckY + 0.5, at.y);
      rail.rotation.y = yaw;
      group.add(rail);
    }

    // Trụ cầu cắm xuống lòng suối
    for (const across of [-halfWidth * 0.62, halfWidth * 0.62]) {
      for (const along of [-0.9, 0.9]) {
        const post = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(0.22, 0.28, 3.4, 6)), wood);
        const at = place(across, along);
        post.position.set(at.x, deckY - 1.25, at.y);
        post.castShadow = true;
        group.add(post);
      }
    }

    // Mố đá hai đầu cầu để cầu ăn vào bờ thay vì lơ lửng trên cỏ.
    const abutmentGeo = this.geo(new THREE.DodecahedronGeometry(1, 0));
    const abutments = { mesh: new THREE.InstancedMesh(abutmentGeo, this.sharedStone(), 12), index: 0 };
    for (const side of [-1, 1]) {
      for (let i = 0; i < 6; i++) {
        const at = place(side * (halfWidth + 0.7), (i / 5 - 0.5) * 2.6);
        this.addStone(abutments, at.x, at.y, this.localTerrainHeightAt(at.x, at.y) + 0.42,
          0.26 + this.random() * 0.2, 0.3);
      }
    }
    for (const mesh of this.finishStones(abutments)) group.add(mesh);

    return group;
  }

  /**
   * 8. Cầu tàu gỗ dài ven biển (Long Ocean Pier)
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
   * 9. Rặng dừa nhiệt đới bãi biển (Coconut Palm Trees)
   */
  private createBeachPalms(): THREE.Group {
    const group = new THREE.Group();
    const trunkMat = this.foliageMaterial(0x785338, 0.05);
    const frondMat = this.foliageMaterial(0x16a34a, 0.16);

    const trunkGeo = this.geo(new THREE.CylinderGeometry(0.24, 0.42, 5.8, 7));
    const frondGeo = this.geo(new THREE.ConeGeometry(2.8, 1.3, 7));

    const count = this.opts.palmCount;
    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, count);
    const fronds = new THREE.InstancedMesh(frondGeo, frondMat, count);

    const matrix = new THREE.Matrix4();
    const tempQuat = new THREE.Quaternion();
    const tempEuler = new THREE.Euler();

    for (let i = 0; i < count; i++) {
      const point = this.randomClearing(48, 64, 4.0);
      const x = point.x, z = point.y;
      const a = Math.atan2(z, x);
      const y = this.localTerrainHeightAt(x, z);

      const leanAngle = 0.2 + this.random() * 0.18;
      tempEuler.set(Math.sin(a) * leanAngle, a, Math.cos(a) * leanAngle);
      tempQuat.setFromEuler(tempEuler);

      matrix.compose(
        new THREE.Vector3(x, y + 2.6, z),
        tempQuat,
        new THREE.Vector3(1, 1 + this.random() * 0.35, 1)
      );
      trunks.setMatrixAt(i, matrix);

      matrix.compose(
        new THREE.Vector3(x, y + 5.5, z),
        new THREE.Quaternion(),
        new THREE.Vector3(1.3 + this.random() * 0.4, 1, 1.3 + this.random() * 0.4)
      );
      fronds.setMatrixAt(i, matrix);
    }

    trunks.castShadow = fronds.castShadow = true;
    group.add(trunks, fronds);
    return group;
  }

  /**
   * 10. Rừng cây nhiệt đới tán rộng xum xuê (Lush Broadleaf Forest - 125+ cây)
   */
  private createCanopyForest(): THREE.Group {
    const group = new THREE.Group();
    const trunkMat = this.foliageMaterial(0x5c4033, 0.04);
    const canopyMat = this.foliageMaterial(0x22c55e, 0.14);

    const trunkGeo = this.geo(new THREE.CylinderGeometry(0.3, 0.52, 4.2, 6));
    const canopyGeo = this.geo(new THREE.DodecahedronGeometry(2.5, 1));

    const count = this.opts.treeCount;
    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, count);
    const foliage = new THREE.InstancedMesh(canopyGeo, canopyMat, count);

    const matrix = new THREE.Matrix4();

    for (let i = 0; i < count; i++) {
      const point = this.randomClearing(18, 50, 4.5);
      const x = point.x, z = point.y;
      const y = this.localTerrainHeightAt(x, z);
      const scale = 0.8 + this.random() * 0.65;

      matrix.makeTranslation(x, y + 2.1 * scale, z).scale(new THREE.Vector3(scale, scale, scale));
      trunks.setMatrixAt(i, matrix);

      matrix.makeTranslation(x, y + 4.5 * scale, z).scale(new THREE.Vector3(scale * 1.15, scale * 0.95, scale * 1.15));
      foliage.setMatrixAt(i, matrix);
    }

    trunks.castShadow = foliage.castShadow = true;
    group.add(trunks, foliage);
    return group;
  }

  /**
   * 11. Cây thông & Cây tán nhọn cao nguyên (Highland Trees)
   */
  private createHighlandTrees(): THREE.Group {
    const group = new THREE.Group();
    const count = 45;
    const trunkMat = this.foliageMaterial(0x4a3728, 0.03);
    const pineMat = this.foliageMaterial(0x166534, 0.1);

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
    const shrubMat = this.foliageMaterial(0x84cc16, 0.18);
    const flowerMat = this.mat(0xf43f5e, 0.4);

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
      const r = 74 + this.random() * 112;
      const cx = Math.cos(a) * r;
      const cz = Math.sin(a) * r;
      const baseY = 31 + this.random() * 27;
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
        scale.set(puff * 2.9 + 0.9, puff * 1.5 + 0.5, puff * 2.4 + 0.8);
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

  private foliageMaterial(color: number, wind = 0.12): THREE.ShaderMaterial {
    const m = new THREE.ShaderMaterial({
      vertexShader: foliageVertexShader,
      fragmentShader: foliageFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uWind: { value: wind },
        uColor: { value: new THREE.Color(color) }
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
  }

  public dispose(): void {
    this.geometries.forEach((g) => g.dispose());
    this.materials.forEach((resource) => resource.dispose());
  }
}

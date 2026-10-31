import * as THREE from 'three';
import { grassMaterial, rockMaterial, sandMaterial } from './TextureFactory';
import { foliageVertexShader, foliageFragmentShader } from './Shaders/FoliageShader';
import { waterFragmentShader, waterVertexShader } from './Shaders/WaterShader';
import { streamFragmentShader, streamVertexShader } from './Shaders/LavaShader';

export interface EnvironmentBuilderOptions {
  seed?: number;
  treeCount?: number;
  palmCount?: number;
  shrubCount?: number;
  rockCount?: number;
  cloudCount?: number;
}

/**
 * EnvironmentBuilder: Dựng hòn đảo nhiệt đới tươi tốt ngập tràn cây cối (Lush Tropical Paradise Island)
 * - Địa hình đồi cỏ xanh ngát mềm mại (Rolling Green Hills & Meadows)
 * - Bãi biển cát vàng nhiệt đới và rặng dừa nghiêng bóng
 * - Rừng cây rậm rạp nhiều tầng tán lá (cây nhiệt đới tán rộng, cây thông, cọ)
 * - Thác nước & dòng suối trong vắt từ cao nguyên chảy xuống
 * - Đài ngắm cảnh mặt trời cổ kính trên đỉnh cao nguyên xanh ngát (thay thế miệng núi lửa)
 */
export class EnvironmentBuilder {
  private readonly opts: Required<EnvironmentBuilderOptions>;
  private readonly geometries: THREE.BufferGeometry[] = [];
  private readonly materials: Array<THREE.Material | THREE.Texture> = [];
  private readonly foliageMaterials: THREE.ShaderMaterial[] = [];
  private root = new THREE.Group();
  private clouds: THREE.Object3D | null = null;
  private random: () => number;

  public constructor(options: EnvironmentBuilderOptions = {}) {
    let seed = options.seed ?? 88;
    this.random = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };
    this.opts = {
      seed: options.seed ?? 88,
      treeCount: options.treeCount ?? 75,
      palmCount: options.palmCount ?? 26,
      shrubCount: options.shrubCount ?? 55,
      rockCount: options.rockCount ?? 38,
      cloudCount: options.cloudCount ?? 14
    };
  }

  public build(): THREE.Group {
    this.root = new THREE.Group();
    this.root.name = 'LushTropicalParadiseIsland';

    // 1. Biển xanh & Vách đá ngầm đảo
    this.root.add(this.createOcean());
    this.root.add(this.createSeaCliffs());

    // 2. Bề mặt địa hình đồi cỏ đa tầng sinh thái
    this.root.add(this.createTerrainSurface());

    // 3. Công trình & Điểm nhấn cảnh quan
    this.root.add(this.createPier());
    this.root.add(this.createSummitLookout());
    this.root.add(this.createFreshwaterStreams());

    // 4. Hệ thực vật nhiệt đới tươi tốt (Nhiều cây cối, cọ, bụi hoa)
    this.root.add(this.createBeachPalms());
    this.root.add(this.createLushCanopyForest());
    this.root.add(this.createHighlandTrees());
    this.root.add(this.createTropicalShrubsAndFlowers());

    // 5. Tảng đá phủ rêu & Mây trời bồng bềnh
    this.root.add(this.createMossyRocks());
    this.clouds = this.createClouds();
    this.root.add(this.clouds);

    return this.root;
  }

  /**
   * Hàm nhiễu Perlin/Sine mượt mà tạo hình dáng đồi tự nhiên
   */
  private noise(x: number, z: number): number {
    const a = Math.sin(x * 0.17 + this.opts.seed) * 43758.5453;
    const b = Math.sin(z * 0.21 - this.opts.seed * 0.7) * 24634.6345;
    const c = Math.sin((x + z) * 0.08) * 0.6;
    return ((a - Math.floor(a)) * 0.58 + (b - Math.floor(b)) * 0.42) * 2 - 1 + c;
  }

  /**
   * Lấy độ cao chuẩn xác tại tọa độ (x, z) của hòn đảo tươi tốt
   * Không có miệng núi lửa hay hố sâu - đỉnh là cao nguyên xanh ngát thoai thoải
   */
  public getTerrainHeightAt(x: number, z: number): number {
    const r = Math.sqrt(x * x + z * z);
    if (r > 48) return -2.5;

    // Sườn đồi thoai thoải dạng đường cong hình sin từ bãi biển (r=42, h=1.4) lên cao nguyên đỉnh (r=0, h=13.2)
    const normalizedR = THREE.MathUtils.clamp(r / 42.0, 0, 1);
    const hillCurve = Math.cos(normalizedR * (Math.PI / 2));
    const base = 1.35 + Math.pow(hillCurve, 1.4) * 11.8;

    // Các nếp gấp uốn lượn nhẹ tạo thung lũng cho suối và đồi cỏ
    const valley = Math.sin(x * 0.11) * Math.cos(z * 0.11) * 1.1;
    const detail = this.noise(x, z) * (r < 12 ? 0.35 : 0.7);

    return THREE.MathUtils.clamp(base + valley + detail, 0.4, 14.5);
  }

  public getTerrainNormalAt(x: number, z: number): THREE.Vector3 {
    const e = 0.2;
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

  /**
   * 1. Biển ngọc lam nhiệt đới bao quanh
   */
  private createOcean(): THREE.Mesh {
    const g = this.geo(new THREE.CircleGeometry(210, 128));
    // The ocean reaches beyond the clouds; fine ripples are shaded per fragment.
    g.rotateX(-Math.PI / 2);
    const m = new THREE.ShaderMaterial({
      vertexShader: waterVertexShader,
      fragmentShader: waterFragmentShader,
      uniforms: { uTime: { value: 0 } },
      transparent: true,
      side: THREE.DoubleSide
    });
    this.materials.push(m);
    const water = new THREE.Mesh(g, m);
    water.name = 'TropicalLagoonOcean';
    water.position.y = 0.2;
    return water;
  }

  /**
   * 2. Vách đá ngầm nâng đỡ hòn đảo
   */
  private createSeaCliffs(): THREE.Mesh {
    const g = this.geo(new THREE.CylinderGeometry(20, 39, 13, 28, 8));
    const p = g.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i);
      const z = p.getZ(i);
      const s = 1 + this.noise(x, z) * 0.11;
      p.setX(i, x * s);
      p.setZ(i, z * s);
    }
    g.translate(0, -5.2, 0);
    const cliff = new THREE.Mesh(g, rockMaterial(this.materials));
    cliff.name = 'IslandSeaCliffs';
    cliff.castShadow = true;
    cliff.receiveShadow = true;
    return cliff;
  }

  /**
   * 3. Bề mặt địa hình đồi cỏ nhiệt đới đa tầng sinh thái với Vertex Colors
   */
  private createTerrainSurface(): THREE.Mesh {
    const size = 96;
    const segments = 76;
    const g = this.geo(new THREE.PlaneGeometry(size, size, segments, segments));
    g.rotateX(-Math.PI / 2);

    const p = g.attributes.position as THREE.BufferAttribute;
    const colors = new Float32Array(p.count * 3);

    const sandColor = new THREE.Color(0xf6d89b);     // Cát vàng mịn bãi biển
    const shoreGrass = new THREE.Color(0xa3e635);    // Cỏ xanh mạ chuyển tiếp
    const lushGrass = new THREE.Color(0x22c55e);     // Cỏ ngọc bích sườn đồi
    const forestMeadow = new THREE.Color(0x16a34a);  // Thảm cỏ rừng rậm
    const highlandGreen = new THREE.Color(0x4ade80); // Cỏ cao nguyên tươi mát ngập nắng

    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i);
      const z = p.getZ(i);
      const r = Math.sqrt(x * x + z * z);
      const h = r > 44.5 ? -2.2 : this.getTerrainHeightAt(x, z);
      p.setY(i, h);

      let c = lushGrass;
      if (h < 2.2) {
        c = sandColor;
      } else if (h < 4.2) {
        const t = (h - 2.2) / 2.0;
        c = sandColor.clone().lerp(shoreGrass, t);
      } else if (h < 8.2) {
        const t = (h - 4.2) / 4.0;
        c = shoreGrass.clone().lerp(lushGrass, t);
      } else if (h < 11.2) {
        const t = (h - 8.2) / 3.0;
        c = lushGrass.clone().lerp(forestMeadow, t);
      } else {
        const t = Math.min(1.0, (h - 11.2) / 2.5);
        c = forestMeadow.clone().lerp(highlandGreen, t);
      }

      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    g.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    g.computeVertexNormals();

    const mesh = new THREE.Mesh(g, grassMaterial(this.materials, true));
    mesh.name = 'LushTerrainSurface';
    mesh.receiveShadow = true;
    return mesh;
  }

  /**
   * 4. Con đường mòn đất đá uốn lượn xuyên rừng lên đỉnh cao nguyên
   */
  private createScenicTrail(): THREE.Line {
    const points: THREE.Vector3[] = [];
    const count = 130;
    for (let i = 0; i <= count; i++) {
      const t = i / count;
      const a = -Math.PI / 4 + t * Math.PI * 4.8;
      const r = 40 - t * 31;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      points.push(new THREE.Vector3(x, this.getTerrainHeightAt(x, z) + 0.12, z));
    }
    const g = this.geo(new THREE.BufferGeometry().setFromPoints(points));
    const m = new THREE.LineBasicMaterial({ color: 0xd4a373, transparent: true, opacity: 0.85, linewidth: 2 });
    this.materials.push(m);
    return new THREE.Line(g, m);
  }

  /**
   * 5. Cầu tàu gỗ mộc mạc bên bờ biển Tây Nam
   */
  private createPier(): THREE.Group {
    const group = new THREE.Group();
    const wood = this.mat(0x8a5435, 0.72);

    for (let i = 0; i < 8; i++) {
      const post = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(0.24, 0.3, 3.4, 6)), wood);
      post.position.set(-33 + i * 1.35, 1.7, -10);
      post.rotation.z = (this.random() - 0.5) * 0.08;
      group.add(post);
    }
    const deck = new THREE.Mesh(this.geo(new THREE.BoxGeometry(12.5, 0.38, 2.3)), wood);
    deck.position.set(-28.5, 3.1, -10);
    deck.rotation.y = 0.14;
    deck.castShadow = true;
    group.add(deck);

    // Đèn lồng treo đầu cầu tàu
    const lantern = new THREE.Mesh(this.geo(new THREE.DodecahedronGeometry(0.4)), this.mat(0xfef08a, 0.2));
    lantern.position.set(-34.5, 3.8, -10);
    group.add(lantern);

    return group;
  }

  /**
   * 6. Đài ngắm cảnh mặt trời cổ kính trên đỉnh cao nguyên xanh ngát (thay thế miệng núi lửa)
   */
  private createSummitLookout(): THREE.Group {
    const group = new THREE.Group();
    const stone = this.mat(0x9ca3af, 0.85);
    const sunGold = this.mat(0xfbbf24, 0.3, 0.7);

    const summitY = this.getTerrainHeightAt(0, 0);

    // Sân ngắm cảnh tròn bằng đá phủ rêu
    const platform = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(7.5, 8.2, 0.7, 24)), stone);
    platform.position.set(0, summitY + 0.35, 0);
    platform.receiveShadow = true;
    group.add(platform);

    // Vành gờ bảo vệ thấp bằng đá quanh đài ngắm cảnh
    const rim = new THREE.Mesh(this.geo(new THREE.TorusGeometry(7.2, 0.45, 8, 24)), stone);
    rim.rotation.x = Math.PI / 2;
    rim.position.set(0, summitY + 0.85, 0);
    group.add(rim);

    // 4 Cột đá cổ kính nhìn ra 4 phương
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2 + Math.PI / 4;
      const px = Math.cos(angle) * 5.5;
      const pz = Math.sin(angle) * 5.5;
      const pillar = new THREE.Mesh(this.geo(new THREE.CylinderGeometry(0.45, 0.55, 3.8, 8)), stone);
      pillar.position.set(px, summitY + 2.2, pz);
      pillar.castShadow = true;
      group.add(pillar);
    }

    // Hồ nước cẩm thạch trong lành ở trung tâm đài ngắm cảnh
    const pool = new THREE.Mesh(
      this.geo(new THREE.CircleGeometry(4.2, 24)),
      new THREE.ShaderMaterial({
        vertexShader: waterVertexShader,
        fragmentShader: waterFragmentShader,
        uniforms: { uTime: { value: 0 } },
        transparent: true,
        side: THREE.DoubleSide
      })
    );
    pool.rotation.x = -Math.PI / 2;
    pool.position.set(0, summitY + 0.75, 0);
    this.materials.push(pool.material as THREE.Material);
    group.add(pool);

    // Biểu tượng mặt trời hoàng kim ở giữa hồ nước
    const sunOrb = new THREE.Mesh(this.geo(new THREE.IcosahedronGeometry(0.9, 2)), sunGold);
    sunOrb.position.set(0, summitY + 1.8, 0);
    group.add(sunOrb);

    return group;
  }

  /**
   * 7. Dòng suối và thác nước trong vắt từ cao nguyên chảy xuống biển
   */
  private createFreshwaterStreams(): THREE.Group {
    const group = new THREE.Group();
    const streamMat = new THREE.ShaderMaterial({
      vertexShader: streamVertexShader,
      fragmentShader: streamFragmentShader,
      uniforms: { uTime: { value: 0 } },
      transparent: true,
      side: THREE.DoubleSide
    });
    this.materials.push(streamMat);

    // Đoạn suối uốn lượn xuống bờ đông
    const streamGeo = this.geo(new THREE.PlaneGeometry(3.2, 22, 6, 20));
    streamGeo.rotateX(-Math.PI / 2);
    const streamMesh = new THREE.Mesh(streamGeo, streamMat);
    streamMesh.position.set(16, 4.5, -8);
    streamMesh.rotation.y = 0.55;
    group.add(streamMesh);

    // Thác nước đổ ra biển ở vách đá
    for (const x of [-14, 19]) {
      const sheet = new THREE.Mesh(this.geo(new THREE.PlaneGeometry(3.5, 14, 8, 16)), streamMat);
      sheet.position.set(x, -1.8, 6);
      sheet.rotation.y = 0.22;
      group.add(sheet);
    }

    return group;
  }

  /**
   * 8. Hàng dừa bãi biển (Coconut Palm Trees) nghiêng bóng tự nhiên
   */
  private createBeachPalms(): THREE.Group {
    const group = new THREE.Group();
    const trunkMat = this.foliageMaterial(0x785338, 0.05);
    const palmFrondMat = this.foliageMaterial(0x16a34a, 0.16);

    const trunkGeo = this.geo(new THREE.CylinderGeometry(0.22, 0.38, 5.2, 7));
    const frondGeo = this.geo(new THREE.ConeGeometry(2.4, 1.2, 7));

    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, this.opts.palmCount);
    const fronds = new THREE.InstancedMesh(frondGeo, palmFrondMat, this.opts.palmCount);

    const matrix = new THREE.Matrix4();
    const tempQuat = new THREE.Quaternion();
    const tempEuler = new THREE.Euler();

    for (let i = 0; i < this.opts.palmCount; i++) {
      const a = (i / this.opts.palmCount) * Math.PI * 2 + (this.random() - 0.5) * 0.4;
      const r = 31 + this.random() * 9;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      const y = this.getTerrainHeightAt(x, z);

      // Thân dừa nghiêng nhẹ hướng ra biển
      const leanAngle = 0.18 + this.random() * 0.15;
      tempEuler.set(Math.sin(a) * leanAngle, a, Math.cos(a) * leanAngle);
      tempQuat.setFromEuler(tempEuler);

      matrix.compose(
        new THREE.Vector3(x, y + 2.3, z),
        tempQuat,
        new THREE.Vector3(1, 1 + this.random() * 0.3, 1)
      );
      trunks.setMatrixAt(i, matrix);

      // Tán lá dừa xoè rộng trên đỉnh
      matrix.compose(
        new THREE.Vector3(x, y + 4.9, z),
        new THREE.Quaternion(),
        new THREE.Vector3(1.2 + this.random() * 0.4, 1, 1.2 + this.random() * 0.4)
      );
      fronds.setMatrixAt(i, matrix);
    }

    trunks.castShadow = fronds.castShadow = true;
    group.add(trunks, fronds);
    return group;
  }

  /**
   * 9. Rừng nhiệt đới tán rộng xum xuê (Lush Broadleaf Canopy Forest)
   */
  private createLushCanopyForest(): THREE.Group {
    const group = new THREE.Group();
    const trunkMat = this.foliageMaterial(0x5c4033, 0.04);
    const canopyMat1 = this.foliageMaterial(0x22c55e, 0.14); // Xanh ngọc tươi sáng
    const canopyMat2 = this.foliageMaterial(0x15803d, 0.12); // Xanh rừng rậm đậm

    const trunkGeo = this.geo(new THREE.CylinderGeometry(0.28, 0.48, 3.6, 6));
    const canopyGeo = this.geo(new THREE.DodecahedronGeometry(2.2, 1));

    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, this.opts.treeCount);
    const foliage = new THREE.InstancedMesh(canopyGeo, canopyMat1, this.opts.treeCount);

    const matrix = new THREE.Matrix4();

    for (let i = 0; i < this.opts.treeCount; i++) {
      const a = this.random() * Math.PI * 2;
      const r = 12 + this.random() * 18; // Phân bổ trên các sườn đồi và thung lũng
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      const y = this.getTerrainHeightAt(x, z);
      const scale = 0.75 + this.random() * 0.6;

      matrix.makeTranslation(x, y + 1.8 * scale, z).scale(new THREE.Vector3(scale, scale, scale));
      trunks.setMatrixAt(i, matrix);

      matrix.makeTranslation(x, y + 3.9 * scale, z).scale(new THREE.Vector3(scale * 1.1, scale * 0.9, scale * 1.1));
      foliage.setMatrixAt(i, matrix);
    }

    trunks.castShadow = foliage.castShadow = true;
    group.add(trunks, foliage);
    return group;
  }

  /**
   * 10. Cây thông & Cây tán nhọn cao nguyên (Highland Trees)
   */
  private createHighlandTrees(): THREE.Group {
    const group = new THREE.Group();
    const count = 32;
    const trunkMat = this.foliageMaterial(0x4a3728, 0.03);
    const pineMat = this.foliageMaterial(0x166534, 0.1);

    const trunkGeo = this.geo(new THREE.CylinderGeometry(0.2, 0.35, 3.2, 6));
    const coneGeo = this.geo(new THREE.ConeGeometry(1.6, 3.8, 7));

    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, count);
    const pines = new THREE.InstancedMesh(coneGeo, pineMat, count);

    const matrix = new THREE.Matrix4();

    for (let i = 0; i < count; i++) {
      const a = this.random() * Math.PI * 2;
      const r = 7 + this.random() * 12; // Tập trung ở sườn đồi cao
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      const y = this.getTerrainHeightAt(x, z);
      const s = 0.65 + this.random() * 0.5;

      matrix.makeTranslation(x, y + 1.5 * s, z).scale(new THREE.Vector3(s, s, s));
      trunks.setMatrixAt(i, matrix);

      matrix.makeTranslation(x, y + 3.8 * s, z).scale(new THREE.Vector3(s, s, s));
      pines.setMatrixAt(i, matrix);
    }

    trunks.castShadow = pines.castShadow = true;
    group.add(trunks, pines);
    return group;
  }

  /**
   * 11. Bụi hoa nhiệt đới & Bụi dương xỉ xanh (Tropical Shrubs & Flowers)
   */
  private createTropicalShrubsAndFlowers(): THREE.Group {
    const group = new THREE.Group();
    const shrubMat = this.foliageMaterial(0x84cc16, 0.18); // Màu hoa cỏ vàng chanh rực rỡ
    const flowerMat = this.mat(0xf43f5e, 0.4);            // Hoa dâm bụt nhiệt đới hồng đỏ

    const shrubGeo = this.geo(new THREE.IcosahedronGeometry(0.9, 1));
    const flowerGeo = this.geo(new THREE.DodecahedronGeometry(0.35));

    const shrubs = new THREE.InstancedMesh(shrubGeo, shrubMat, this.opts.shrubCount);
    const flowers = new THREE.InstancedMesh(flowerGeo, flowerMat, this.opts.shrubCount);

    const matrix = new THREE.Matrix4();

    for (let i = 0; i < this.opts.shrubCount; i++) {
      const a = this.random() * Math.PI * 2;
      const r = 9 + this.random() * 26;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      const y = this.getTerrainHeightAt(x, z);
      const s = 0.5 + this.random() * 0.6;

      matrix.makeTranslation(x, y + 0.45 * s, z).scale(new THREE.Vector3(s * 1.3, s * 0.7, s * 1.3));
      shrubs.setMatrixAt(i, matrix);

      matrix.makeTranslation(x, y + 0.9 * s, z).scale(new THREE.Vector3(s, s, s));
      flowers.setMatrixAt(i, matrix);
    }

    group.add(shrubs, flowers);
    return group;
  }

  /**
   * 12. Tảng đá phủ rêu phong (Mossy Granite Rocks)
   */
  private createMossyRocks(): THREE.InstancedMesh {
    const rocks = new THREE.InstancedMesh(
      this.geo(new THREE.DodecahedronGeometry(1.2, 1)),
      rockMaterial(this.materials),
      this.opts.rockCount
    );
    const matrix = new THREE.Matrix4();

    for (let i = 0; i < this.opts.rockCount; i++) {
      const a = this.random() * Math.PI * 2;
      const r = 10 + this.random() * 32;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      const y = this.getTerrainHeightAt(x, z);
      const s = 0.5 + this.random() * 1.1;

      matrix.makeTranslation(x, y + 0.4 * s, z).scale(new THREE.Vector3(s * 1.2, s * 0.7, s * 1.1));
      rocks.setMatrixAt(i, matrix);
    }

    rocks.castShadow = true;
    rocks.receiveShadow = true;
    return rocks;
  }

  /**
   * 13. Mây trắng bồng bềnh trôi nhẹ (Floating Paradise Clouds)
   */
  private createClouds(): THREE.Group {
    const group = new THREE.Group();
    const geometry = this.geo(new THREE.IcosahedronGeometry(1, 1));
    const upper = this.mat(0xfffcf2, 1);
    const under = this.mat(0xc7dce2, 1);
    const count = this.opts.cloudCount * 6;
    const tops = new THREE.InstancedMesh(geometry, upper, count);
    const bases = new THREE.InstancedMesh(geometry, under, this.opts.cloudCount);
    const matrix = new THREE.Matrix4();
    const scale = new THREE.Vector3();
    const position = new THREE.Vector3();
    for (let i = 0; i < this.opts.cloudCount; i++) {
      const a = (i / this.opts.cloudCount) * Math.PI * 2 + (this.random() - 0.5) * 0.2;
      const r = 62 + this.random() * 65;
      const cx = Math.cos(a) * r, cz = Math.sin(a) * r;
      const cy = 31 + this.random() * 17;
      position.set(cx, cy - 1, cz);
      scale.set(5.8, 0.65, 2.7);
      matrix.compose(position, new THREE.Quaternion(), scale);
      bases.setMatrixAt(i, matrix);
      for (let j = 0; j < 6; j++) {
        position.set(cx + (j - 2.5) * 2.5, cy + Math.sin(j * 1.7 + i) * 0.6, cz + (this.random() - 0.5) * 2);
        const s = 1.6 + this.random() * 1.1;
        scale.set(s * 1.7, s * (j === 2 || j === 3 ? 1.3 : 0.9), s);
        matrix.compose(position, new THREE.Quaternion(), scale);
        tops.setMatrixAt(i * 6 + j, matrix);
      }
    }
    group.add(bases, tops);
    group.name = 'DriftingCumulusClouds';
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
      if (m.material && !Array.isArray(m.material) && (m.material as THREE.ShaderMaterial).uniforms?.uTime) {
        (m.material as THREE.ShaderMaterial).uniforms.uTime.value = elapsed;
      }
    });

    if (this.clouds) this.clouds.rotation.y = elapsed * 0.003;
  }

  public dispose(): void {
    this.geometries.forEach((g) => g.dispose());
    this.materials.forEach((resource) => resource.dispose());
  }
}
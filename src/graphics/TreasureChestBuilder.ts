import * as THREE from 'three';
import gsap from 'gsap';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { ChestData } from '../core/EventBus';
import { makePbrSet, mistSprite } from './TextureFactory';

export interface TreasureChest {
  root: THREE.Group;
  base: THREE.Group;
  lid: THREE.Group;
  treasure: THREE.Mesh;
}

/**
 * Kích thước chuẩn của rương (mét). Cả 28 rương dùng chung một bộ geometry đã gộp
 * nên chỉnh các số này là đổi hình dáng rương cả đảo.
 */
const W = 2.0; // ngang (trục x)
const D = 1.26; // sâu (trục z)
const HB = 0.7; // cao thân hộp gỗ, chưa tính nắp vòm
const R = D / 2; // bán kính vòm nắp
const WALL = 0.075; // độ dày ván: thân rương là hộp RỖNG LÒNG để mở nắp thấy kho báu

const STRAP_X = 0.6; // vị trí hai đai thếp vàng thẳng hàng giữa thân và nắp
const LID_OVERSHOT = -2.16; // ngả quá đà một chút lúc bật mở
const LID_REST = -1.98; // ~113 độ, tư thế nằm nghỉ của nắp

interface Part {
  geometry: THREE.BufferGeometry;
  matrix: THREE.Matrix4;
  tint?: THREE.Color;
}

const tmpPosition = new THREE.Vector3();
const tmpEuler = new THREE.Euler();
const tmpQuaternion = new THREE.Quaternion();
const tmpScale = new THREE.Vector3();

/** Ma trận đặt một chi tiết (vị trí + rotation + scale) trước khi gộp. */
function place(
  x: number,
  y: number,
  z: number,
  rx = 0,
  ry = 0,
  rz = 0,
  sx = 1,
  sy = 1,
  sz = 1
): THREE.Matrix4 {
  tmpPosition.set(x, y, z);
  tmpQuaternion.setFromEuler(tmpEuler.set(rx, ry, rz));
  tmpScale.set(sx, sy, sz);
  return new THREE.Matrix4().compose(tmpPosition, tmpQuaternion, tmpScale);
}

/**
 * Gộp hàng chục chi tiết sơn mài/vàng/đồng thành MỘT mesh cho mỗi nhóm vật liệu.
 * Model cũ để rải ~90 mesh/rương (≈2500 draw calls cả màu lẫn bóng đổ) và đó là
 * một nguyên nhân khung hình sập khi camera áp sát; gộp lại chỉ còn 8 mesh/rương.
 */
function mergeParts(parts: Part[]): THREE.BufferGeometry {
  const needTint = parts.some((part) => part.tint !== undefined);
  const clones = parts.map((part) => {
    const clone = part.geometry.clone().applyMatrix4(part.matrix);
    const count = clone.attributes.position.count;

    // PolyhedronGeometry (viên ngọc) không có index trong khi hộp/trụ/cầu thì có;
    // mergeGeometries từ chối trộn hai loại nên cấp tạm một index tuần tự.
    if (!clone.index) {
      const index = new Uint32Array(count);
      for (let i = 0; i < count; i++) index[i] = i;
      clone.setIndex(new THREE.BufferAttribute(index, 1));
    }

    if (needTint) {
      const color = part.tint ?? new THREE.Color(1, 1, 1);
      const colors = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
      }
      clone.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    }
    return clone;
  });

  const merged = mergeGeometries(clones, false) as THREE.BufferGeometry;
  clones.forEach((clone) => clone.dispose());
  merged.computeBoundingSphere();
  return merged;
}

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * TreasureChestBuilder: rương sơn son thếp vàng theo mỹ thuật cung đình Đại Việt.
 * - Thân hộp sơn mài đỏ rỗng lòng + nắp vòm bán nguyệt, để mở nắp là thấy kho báu.
 * - Nẹp thếp vàng, đinh đồng, quai xách đồng; ổ khoá là mặt trống đồng Đông Sơn
 *   nổi giữa mặt trước, chốt nắp chúc xuống ôm đúng vành trống khi đóng.
 * - Hình chỉ tính MỘT lần rồi chia sẻ geometry cho cả 28 rương.
 * - Mở rương: nắp bật có đà rồi khựng lại, kho báu vươn lên, ba vòng sóng trống đồng
 *   lan ra mặt đất, cột sáng ấm và bụi vàng bung tỏa quanh một nguồn sáng duy nhất.
 */
export class TreasureChestBuilder {
  /** Nhóm hiệu ứng trong scene: chỉ có một bản và nhảy tới rương đang mở. */
  public readonly effects = new THREE.Group();

  private readonly geometries: THREE.BufferGeometry[] = [];
  private readonly materials: THREE.Material[] = [];
  private readonly textures: THREE.Texture[] = [];
  private readonly entries = new Map<number, TreasureChest>();

  private model!: {
    baseBody: THREE.BufferGeometry;
    baseGold: THREE.BufferGeometry;
    baseBronze: THREE.BufferGeometry;
    baseSilk: THREE.BufferGeometry;
    lidBody: THREE.BufferGeometry;
    lidGold: THREE.BufferGeometry;
    lidBronze: THREE.BufferGeometry;
    treasure: THREE.BufferGeometry;
  };

  private lacquerMaterial!: THREE.MeshStandardMaterial;
  private goldMaterial!: THREE.MeshStandardMaterial;
  private bronzeMaterial!: THREE.MeshStandardMaterial;
  private silkMaterial!: THREE.MeshStandardMaterial;
  private treasureMaterial!: THREE.MeshStandardMaterial;

  private ripples: Array<{ mesh: THREE.Mesh; material: THREE.MeshBasicMaterial }> = [];
  private highlightRing!: THREE.Mesh;
  private highlightMaterial!: THREE.MeshBasicMaterial;
  private shaft!: THREE.Mesh;
  private shaftMaterial!: THREE.MeshBasicMaterial;
  private sparks!: THREE.Points;
  private sparkMaterial!: THREE.PointsMaterial;
  private sparkPositions!: Float32Array;
  private sparkVelocities!: Float32Array;
  private light!: THREE.PointLight;

  private readonly sparkCount = 140;
  private sparkLife = 0;
  private readonly sparkDuration = 2.6;
  /** gsap tween giá trị này; update() nhân thêm nhịp dập dờn rồi gán vào đèn. */
  private readonly lightState = { intensity: 0 };

  public constructor() {
    this.initMaterials();
    this.initModel();
    this.initEffects();
  }

  private remember<T extends THREE.BufferGeometry>(geometry: T): T {
    this.geometries.push(geometry);
    return geometry;
  }

  private initMaterials(): void {
    const lacquerSet = makePbrSet('lacquer');
    const metalSet = makePbrSet('metal');
    this.textures.push(lacquerSet.map, lacquerSet.normalMap, lacquerSet.roughnessMap);
    this.textures.push(metalSet.map, metalSet.normalMap, metalSet.roughnessMap);

    // Sơn mài đỏ son đánh bóng: giữ vân sơn mờ của texture, kéo màu về đỏ son.
    this.lacquerMaterial = new THREE.MeshStandardMaterial({
      map: lacquerSet.map,
      normalMap: lacquerSet.normalMap,
      roughnessMap: lacquerSet.roughnessMap,
      color: 0xffb29c,
      roughness: 0.34,
      metalness: 0.04,
      normalScale: new THREE.Vector2(0.18, 0.18)
    });

    // Thếp vàng cho đai, nẹp góc và viền nắp. Thêm chút emissive để vàng vẫn đọc
    // được khi mặt trước rương khuất nắng, vì kim loại gần như chỉ sống nhờ môi trường.
    this.goldMaterial = new THREE.MeshStandardMaterial({
      map: metalSet.map,
      normalMap: metalSet.normalMap,
      roughnessMap: metalSet.roughnessMap,
      color: 0xfff0c8,
      roughness: 0.38,
      metalness: 0.72,
      emissive: 0x3a260a,
      emissiveIntensity: 0.5,
      normalScale: new THREE.Vector2(0.22, 0.22)
    });

    // Đồng đỏ cho khoá trống đồng, đinh tán và quai xách.
    this.bronzeMaterial = new THREE.MeshStandardMaterial({
      map: metalSet.map,
      normalMap: metalSet.normalMap,
      roughnessMap: metalSet.roughnessMap,
      color: 0xd99a5d,
      roughness: 0.46,
      metalness: 0.66,
      emissive: 0x2e1908,
      emissiveIntensity: 0.5,
      normalScale: new THREE.Vector2(0.4, 0.4)
    });

    this.silkMaterial = new THREE.MeshStandardMaterial({
      color: 0x5c1218,
      roughness: 0.96,
      metalness: 0
    });

    this.treasureMaterial = new THREE.MeshStandardMaterial({
      vertexColors: true,
      color: 0xffffff,
      roughness: 0.22,
      metalness: 0.86,
      emissive: 0xb06a14,
      emissiveIntensity: 0.24
    });

    this.materials.push(
      this.lacquerMaterial,
      this.goldMaterial,
      this.bronzeMaterial,
      this.silkMaterial,
      this.treasureMaterial
    );
  }

  private initModel(): void {
    const wallH = HB - WALL;
    const baseBody: Part[] = [];
    const baseGold: Part[] = [];
    const baseBronze: Part[] = [];
    const baseSilk: Part[] = [];
    const lidBody: Part[] = [];
    const lidGold: Part[] = [];
    const lidBronze: Part[] = [];
    const treasure: Part[] = [];

    const rivet = new THREE.SphereGeometry(0.046, 9, 7);
    const addRivet = (list: Part[], x: number, y: number, z: number): void => {
      list.push({ geometry: rivet, matrix: place(x, y, z) });
    };

    // ===== THÂN RƯƠNG: đáy + 4 ván sơn mài, hộp rỗng lòng =====
    baseBody.push({ geometry: new THREE.BoxGeometry(W, WALL, D), matrix: place(0, WALL / 2, 0) });
    for (const sz of [-1, 1]) {
      baseBody.push({
        geometry: new THREE.BoxGeometry(W, wallH, WALL),
        matrix: place(0, WALL + wallH / 2, sz * (D / 2 - WALL / 2))
      });
      // Nẹp ván giữa mặt trước/sau: thêm chi tiết sơn mà không thêm mesh
      baseBody.push({
        geometry: new THREE.BoxGeometry(0.16, wallH, 0.02),
        matrix: place(0, WALL + wallH / 2, sz * (D / 2 + 0.006))
      });
    }
    for (const sx of [-1, 1]) {
      baseBody.push({
        geometry: new THREE.BoxGeometry(WALL, wallH, D - WALL * 2),
        matrix: place(sx * (W / 2 - WALL / 2), WALL + wallH / 2, 0)
      });
    }

    // ===== ĐAI THẾP VÀNG THÂN RƯƠNG =====
    baseGold.push({
      geometry: new THREE.BoxGeometry(W + 0.07, 0.15, D + 0.07),
      matrix: place(0, 0.075, 0)
    });
    baseGold.push({
      geometry: new THREE.BoxGeometry(W + 0.05, 0.11, D + 0.05),
      matrix: place(0, HB - 0.055, 0)
    });
    for (const sx of [-1, 1]) {
      baseGold.push({
        geometry: new THREE.BoxGeometry(0.13, HB + 0.02, D + 0.04),
        matrix: place(sx * STRAP_X, HB / 2, 0)
      });
      // Bản đỡ quai xách
      baseGold.push({
        geometry: new THREE.BoxGeometry(0.075, 0.22, 0.26),
        matrix: place(sx * (W / 2 + 0.03), 0.44, 0)
      });
    }
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        baseGold.push({
          geometry: new THREE.BoxGeometry(0.15, HB + 0.02, 0.15),
          matrix: place(sx * (W / 2 - 0.06), HB / 2, sz * (D / 2 - 0.06))
        });
      }
    }

    // ===== KHOÁ ĐỒNG CHẠM MẶT TRỐNG ĐỒNG (mặt trước) =====
    // Đĩa đồng dày, ba vành nổi, sao 8 tia và 8 chấm hoa văn Đông Sơn.
    const drumZ = D / 2 + 0.055;
    baseBronze.push({
      geometry: new THREE.CylinderGeometry(0.33, 0.33, 0.07, 40),
      matrix: place(0, 0.34, drumZ, Math.PI / 2)
    });
    for (const radius of [0.275, 0.2, 0.13]) {
      baseGold.push({
        geometry: new THREE.TorusGeometry(radius, 0.011, 6, 40),
        matrix: place(0, 0.34, drumZ + 0.036)
      });
    }
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      baseGold.push({
        geometry: new THREE.BoxGeometry(0.13, 0.026, 0.012),
        matrix: place(
          Math.cos(angle) * 0.19,
          0.34 + Math.sin(angle) * 0.19,
          drumZ + 0.037,
          0,
          0,
          angle
        )
      });
      baseGold.push({
        geometry: new THREE.SphereGeometry(0.013, 6, 5),
        matrix: place(
          Math.cos(angle + Math.PI / 8) * 0.235,
          0.34 + Math.sin(angle + Math.PI / 8) * 0.235,
          drumZ + 0.037
        )
      });
    }
    baseGold.push({
      geometry: new THREE.CylinderGeometry(0.055, 0.065, 0.028, 14),
      matrix: place(0, 0.34, drumZ + 0.05, Math.PI / 2)
    });

    // Quai xách đồng hai bên
    for (const sx of [-1, 1]) {
      baseBronze.push({
        geometry: new THREE.TorusGeometry(0.16, 0.036, 8, 18),
        matrix: place(sx * (W / 2 + 0.085), 0.29, 0, 0.2, Math.PI / 2)
      });
    }

    // Đinh đồng đóng dọc đai vàng và mép ván
    for (const sz of [-1, 1]) {
      for (const x of [-0.86, -0.43, 0, 0.43, 0.86]) {
        addRivet(baseBronze, x, 0.075, sz * (D / 2 + 0.048));
      }
      for (const x of [-0.86, 0, 0.86]) {
        addRivet(baseBronze, x, HB - 0.055, sz * (D / 2 + 0.032));
      }
      for (const x of [-STRAP_X, STRAP_X]) {
        for (const y of [0.2, 0.52]) {
          addRivet(baseBronze, x, y, sz * (D / 2 + 0.026));
        }
      }
      for (const x of [-0.94, 0.94]) {
        for (const y of [0.26, 0.56]) {
          addRivet(baseBronze, x, y, sz * (D / 2 + 0.018));
        }
      }
    }
    for (const sx of [-1, 1]) {
      for (const z of [-0.42, 0, 0.42]) {
        addRivet(baseBronze, sx * (W / 2 + 0.048), 0.075, z);
      }
    }

    // ===== LÓT LỤA ĐÁY RƯƠNG =====
    baseSilk.push({
      geometry: new THREE.BoxGeometry(W - 0.2, 0.07, D - 0.2),
      matrix: place(0, WALL + 0.035, 0)
    });

    // ===== NẮP VÒM (gốc tọa độ nằm ngay mép bản lề sau: y = HB, z = -D/2) =====
    const lidArc = new THREE.CylinderGeometry(R, R, W - 0.02, 26, 1, false, 0, Math.PI);
    lidArc.rotateZ(Math.PI / 2);
    lidBody.push({ geometry: lidArc, matrix: place(0, 0, R) });

    // Viền đầu hồi và đai gân: trụ bán nguyệt đã nằm dọc trục x nên ép BỀ DÀI bằng scale.x
    const lidBand = new THREE.CylinderGeometry(R + 0.032, R + 0.032, 1, 26, 1, false, 0, Math.PI);
    lidBand.rotateZ(Math.PI / 2);
    for (const sx of [-1, 1]) {
      lidGold.push({
        geometry: lidBand,
        matrix: place(sx * (W / 2 - 0.075), 0, R, 0, 0, 0, 0.15, 1, 1)
      });
      lidGold.push({ geometry: lidBand, matrix: place(sx * STRAP_X, 0, R, 0, 0, 0, 0.13, 1, 1) });
    }
    // Viền vàng bọc quanh mép dưới nắp
    for (const sz of [-1, 1]) {
      lidGold.push({
        geometry: new THREE.BoxGeometry(W + 0.06, 0.11, 0.06),
        matrix: place(0, -0.02, R + sz * (R - 0.02))
      });
    }
    for (const sx of [-1, 1]) {
      lidGold.push({
        geometry: new THREE.BoxGeometry(0.06, 0.11, D - 0.04),
        matrix: place(sx * (W / 2 + 0.005), -0.02, R)
      });
    }
    // Chốt nắp thếp vàng chúc xuống ôm vành trên mặt trống đồng
    lidGold.push({
      geometry: new THREE.BoxGeometry(0.17, 0.28, 0.05),
      matrix: place(0, -0.09, D + 0.12)
    });
    lidBronze.push({
      geometry: new THREE.TorusGeometry(0.055, 0.018, 8, 16),
      matrix: place(0, -0.24, D + 0.125)
    });
    for (const sx of [-1, 1]) {
      for (let step = 0; step < 5; step++) {
        const theta = (step + 0.5) * (Math.PI / 5);
        addRivet(
          lidBronze,
          sx * (W / 2 - 0.075),
          Math.sin(theta) * (R + 0.038),
          R - Math.cos(theta) * (R + 0.038)
        );
      }
      for (let step = 0; step < 4; step++) {
        const theta = (step + 0.6) * (Math.PI / 4.8);
        addRivet(
          lidBronze,
          sx * STRAP_X,
          Math.sin(theta) * (R + 0.038),
          R - Math.cos(theta) * (R + 0.038)
        );
      }
      addRivet(lidBronze, sx * 0.07, -0.14, D + 0.125);
    }

    // ===== KHO BÁU: dome vàng + tiền rơi vãi + thỏi + ngọc + trai =====
    const gold = new THREE.Color(0xffcf4d);
    const goldDeep = new THREE.Color(0xd8a026);
    const goldPale = new THREE.Color(0xfff0a8);

    treasure.push({
      geometry: new THREE.SphereGeometry(0.5, 18, 9, 0, Math.PI * 2, 0, Math.PI * 0.52),
      matrix: place(0, 0.06, 0, 0, 0, 0, 1.55, 0.66, 1.0),
      tint: goldDeep
    });

    const coin = new THREE.CylinderGeometry(0.112, 0.112, 0.026, 12);
    const random = mulberry32(20261031);
    for (let i = 0; i < 30; i++) {
      const angle = random() * Math.PI * 2;
      const rad = 0.25 + random() * 0.7;
      treasure.push({
        geometry: coin,
        matrix: place(
          Math.cos(angle) * rad * 0.78,
          0.1 + Math.max(0, 0.42 - rad * 0.3) + random() * 0.08,
          Math.sin(angle) * rad * 0.5,
          random() * 0.9 - 0.45,
          random() * Math.PI,
          random() * 0.8 - 0.4
        ),
        tint: random() > 0.55 ? goldPale : gold
      });
    }
    for (let i = 0; i < 4; i++) {
      treasure.push({
        geometry: new THREE.BoxGeometry(0.32, 0.08, 0.14),
        matrix: place(
          (random() - 0.5) * 1.1,
          0.17 + i * 0.035,
          (random() - 0.5) * 0.55,
          0,
          (random() - 0.5) * 0.8,
          (random() - 0.5) * 0.16
        ),
        tint: goldDeep
      });
    }
    const gems = [0x2f8f6a, 0xd9862b, 0xc23a2b, 0x2b6fa8, 0xe0c15a];
    for (let i = 0; i < gems.length; i++) {
      treasure.push({
        geometry: new THREE.IcosahedronGeometry(0.078, 0),
        matrix: place(
          (random() - 0.5) * 1.5,
          0.2 + random() * 0.12,
          (random() - 0.5) * 0.7,
          random() * Math.PI,
          random() * Math.PI,
          0
        ),
        tint: new THREE.Color(gems[i])
      });
    }
    for (let i = 0; i < 3; i++) {
      treasure.push({
        geometry: new THREE.SphereGeometry(0.072, 10, 8),
        matrix: place((random() - 0.5) * 1.3, 0.21 + random() * 0.1, (random() - 0.5) * 0.6),
        tint: new THREE.Color(0xf6f3ea)
      });
    }

    this.model = {
      baseBody: this.remember(mergeParts(baseBody)),
      baseGold: this.remember(mergeParts(baseGold)),
      baseBronze: this.remember(mergeParts(baseBronze)),
      baseSilk: this.remember(mergeParts(baseSilk)),
      lidBody: this.remember(mergeParts(lidBody)),
      lidGold: this.remember(mergeParts(lidGold)),
      lidBronze: this.remember(mergeParts(lidBronze)),
      treasure: this.remember(mergeParts(treasure))
    };
  }

  private initEffects(): void {
    // Ba vòng sóng trống đồng mảnh, đồng tâm, lần lượt lan ra mặt đất khi mở rương.
    const rippleGeo = new THREE.RingGeometry(0.92, 1.0, 72, 1);
    rippleGeo.rotateX(-Math.PI / 2);
    this.remember(rippleGeo);
    for (let i = 0; i < 3; i++) {
      const material = new THREE.MeshBasicMaterial({
        color: 0xffc46a,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide
      });
      const mesh = new THREE.Mesh(rippleGeo, material);
      mesh.position.y = 0.06 + i * 0.012;
      mesh.visible = false;
      mesh.renderOrder = 3;
      this.ripples.push({ mesh, material });
      this.materials.push(material);
      this.effects.add(mesh);
    }

    // Vòng nhấn mảnh khi rê chuột lên rương; hiệu ứng mở dùng ba vòng sóng ở trên.
    const highlightGeo = new THREE.RingGeometry(0.82, 0.94, 64);
    highlightGeo.rotateX(-Math.PI / 2);
    this.highlightMaterial = new THREE.MeshBasicMaterial({
      color: 0xffe0a3,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide
    });
    this.highlightRing = new THREE.Mesh(this.remember(highlightGeo), this.highlightMaterial);
    this.highlightRing.position.y = 0.05;
    this.highlightRing.visible = false;
    this.highlightRing.renderOrder = 3;

    // Cột sáng ấm bốc lên từ lòng rương, giảm alpha theo cao độ
    const shaftGeo = new THREE.CylinderGeometry(1.05, 0.5, 7.2, 28, 1, true);
    const shaftPos = shaftGeo.attributes.position;
    const shaftColors = new Float32Array(shaftPos.count * 4);
    for (let i = 0; i < shaftPos.count; i++) {
      const up = THREE.MathUtils.clamp((shaftPos.getY(i) + 3.6) / 7.2, 0, 1);
      shaftColors[i * 4] = 1;
      shaftColors[i * 4 + 1] = 0.72 - up * 0.14;
      shaftColors[i * 4 + 2] = 0.34 - up * 0.16;
      shaftColors[i * 4 + 3] = (1 - up) * (1 - up) * 0.75;
    }
    shaftGeo.setAttribute('color', new THREE.BufferAttribute(shaftColors, 4));
    this.shaftMaterial = new THREE.MeshBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide
    });
    this.shaft = new THREE.Mesh(this.remember(shaftGeo), this.shaftMaterial);
    this.shaft.position.y = 4.0;
    this.shaft.visible = false;
    this.shaft.renderOrder = 4;

    // Bụi vàng: mỗi hạt có vận tốc riêng và chịu trọng lực, tích phân trong update()
    this.sparkPositions = new Float32Array(this.sparkCount * 3);
    this.sparkVelocities = new Float32Array(this.sparkCount * 3);
    const sparkGeo = new THREE.BufferGeometry();
    sparkGeo.setAttribute('position', new THREE.BufferAttribute(this.sparkPositions, 3));
    this.sparkMaterial = new THREE.PointsMaterial({
      color: 0xffc266,
      size: 0.11,
      map: mistSprite(this.textures),
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    this.sparks = new THREE.Points(sparkGeo, this.sparkMaterial);
    this.sparks.frustumCulled = false;
    this.sparks.visible = false;
    this.sparks.renderOrder = 5;
    this.geometries.push(sparkGeo);

    // MỘT nguồn sáng duy nhất cho toàn đảo. Model cũ gắn 28 PointLight (một cái mỗi
    // rương) nên mọi vật liệu phải lặp 28 lần tính ánh sáng trên từng điểm ảnh, và
    // chi phí này bùng nổ đúng lúc rương chiếm gần hết khung hình.
    this.light = new THREE.PointLight(0xffb066, 0, 20, 2);
    this.light.position.set(0, 0.62, 0);

    this.effects.name = 'ChestRevealEffects';
    this.effects.add(this.highlightRing, this.shaft, this.sparks, this.light);
    this.materials.push(this.highlightMaterial, this.shaftMaterial, this.sparkMaterial);
  }

  public build(chest: ChestData): TreasureChest {
    const root = new THREE.Group();
    root.name = `TreasureChest_${chest.id}`;
    root.position.copy(chest.position);
    root.rotation.y = chest.rotationY;

    // ===== THÂN RƯƠNG =====
    const base = new THREE.Group();

    const shell = new THREE.Mesh(this.model.baseBody, this.lacquerMaterial);
    shell.castShadow = true;
    shell.receiveShadow = true;

    const bands = new THREE.Mesh(this.model.baseGold, this.goldMaterial);
    bands.castShadow = true;
    bands.receiveShadow = true;

    const fittings = new THREE.Mesh(this.model.baseBronze, this.bronzeMaterial);
    fittings.receiveShadow = true;

    const liner = new THREE.Mesh(this.model.baseSilk, this.silkMaterial);

    const treasure = new THREE.Mesh(this.model.treasure, this.treasureMaterial);
    treasure.position.set(0, 0.04, 0);

    base.add(shell, bands, fittings, liner, treasure);

    // ===== NẮP VÒM: xoay quanh đúng mép bản lề sau =====
    const lid = new THREE.Group();
    lid.position.set(0, HB, -D / 2);

    const lidShell = new THREE.Mesh(this.model.lidBody, this.lacquerMaterial);
    lidShell.castShadow = true;

    const lidBands = new THREE.Mesh(this.model.lidGold, this.goldMaterial);
    lidBands.castShadow = true;

    const lidFittings = new THREE.Mesh(this.model.lidBronze, this.bronzeMaterial);

    lid.add(lidShell, lidBands, lidFittings);

    root.add(base, lid);

    const entry: TreasureChest = { root, base, lid, treasure };
    this.entries.set(chest.id, entry);
    return entry;
  }

  private focusOn(entry: TreasureChest): void {
    this.effects.position.copy(entry.root.position);
    this.effects.rotation.y = entry.root.rotation.y;
  }

  /**
   * Mở rương: nắp bật ngả có đà rồi khựng lại, kho báu vươn lên khỏi thành rương,
   * ba vòng sóng trống đồng lan ra, cột sáng - bụi vàng - đèn cùng bừng lên.
   */
  public open(id: number): void {
    const entry = this.entries.get(id);
    if (!entry) return;
    this.focusOn(entry);

    const timeline = gsap.timeline();

    // 1. Nắp: bật mạnh rồi đáp nhẹ về tư thế nghỉ
    timeline.to(entry.lid.rotation, { x: LID_OVERSHOT, duration: 0.62, ease: 'power3.out' }, 0);
    timeline.to(entry.lid.rotation, { x: LID_REST, duration: 0.4, ease: 'sine.inOut' }, 0.62);

    // 2. Kho báu trồi lên khỏi miệng rương, xoay nhẹ cho vàng lấp lánh
    timeline.to(entry.treasure.position, { y: 0.34, duration: 1.0, ease: 'back.out(1.5)' }, 0.08);
    timeline.to(entry.treasure.rotation, { y: 0.32, duration: 2.4, ease: 'power1.out' }, 0.08);
    timeline.to(entry.treasure.scale, { x: 1.1, y: 1.06, z: 1.1, duration: 1.0, ease: 'power2.out' }, 0.08);

    // 3. Vàng tự phát sáng rồi dịu xuống
    timeline.to(this.treasureMaterial, { emissiveIntensity: 0.45, duration: 0.5, ease: 'power2.out' }, 0.12);
    timeline.to(this.treasureMaterial, { emissiveIntensity: 0.32, duration: 1.6, ease: 'power1.inOut' }, 0.7);

    // 4. Ba vòng sóng trống đồng lần lượt lan ra dưới chân rương
    this.ripples.forEach(({ mesh, material }, index) => {
      mesh.visible = true;
      mesh.scale.set(0.35, 1, 0.35);
      const start = 0.06 + index * 0.18;
      timeline.fromTo(
        material,
        { opacity: 0 },
        { opacity: 0.9, duration: 0.22, ease: 'power2.out' },
        start
      );
      timeline.to(mesh.scale, { x: 4.4, y: 1, z: 4.4, duration: 1.35, ease: 'power2.out' }, start);
      timeline.to(material, { opacity: 0, duration: 1.05, ease: 'power1.in' }, start + 0.3);
    });

    // 5. Cột sáng ấm vươn cao dần khỏi lòng rương
    this.shaft.visible = true;
    this.shaft.scale.set(0.55, 0.35, 0.55);
    this.shaft.position.y = 1.55;
    timeline.to(this.shaftMaterial, { opacity: 0.32, duration: 0.34, ease: 'power2.out' }, 0.06);
    timeline.to(this.shaft.scale, { x: 1.1, y: 1, z: 1.1, duration: 0.9, ease: 'power2.out' }, 0.06);
    timeline.to(this.shaft.position, { y: 4.0, duration: 0.9, ease: 'power2.out' }, 0.06);
    timeline.to(this.shaftMaterial, { opacity: 0.08, duration: 1.5, ease: 'power1.inOut' }, 0.75);

    // 6. Đèn vàng bừng rồi hạ về mức nền (update() thêm nhịp dập dờn)
    timeline.to(this.lightState, { intensity: 18, duration: 0.26, ease: 'power2.out' }, 0.06);
    timeline.to(this.lightState, { intensity: 6.5, duration: 1.7, ease: 'power1.inOut' }, 0.4);

    // 7. Bụi vàng bung tỏa
    timeline.add(() => this.emitSparks(), 0.1);
  }

  private emitSparks(): void {
    for (let i = 0; i < this.sparkCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const spread = 0.2 + Math.random() * 0.7;
      this.sparkPositions[i * 3] = Math.cos(angle) * spread * 0.8;
      this.sparkPositions[i * 3 + 1] = 0.24 + Math.random() * 0.2;
      this.sparkPositions[i * 3 + 2] = Math.sin(angle) * spread * 0.5;

      // Phún xiên ra ngoài rồi rơi tự do, nảy nhẹ khi chạm đáy rương
      const outward = 0.6 + Math.random() * 1.5;
      this.sparkVelocities[i * 3] = Math.cos(angle) * outward;
      this.sparkVelocities[i * 3 + 1] = 2.2 + Math.random() * 3.2;
      this.sparkVelocities[i * 3 + 2] = Math.sin(angle) * outward;
    }
    (this.sparks.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    this.sparks.visible = true;
    this.sparkMaterial.opacity = 1;
    this.sparkLife = this.sparkDuration;
  }

  public highlight(id: number, active: boolean): void {
    const entry = this.entries.get(id);
    if (!entry) return;
    this.focusOn(entry);
    gsap.killTweensOf(this.highlightMaterial);
    if (active) {
      this.highlightRing.visible = true;
      this.highlightRing.scale.set(1, 1, 1);
      gsap.to(this.highlightMaterial, { opacity: 0.55, duration: 0.45 });
    } else {
      gsap.to(this.highlightMaterial, { opacity: 0, duration: 0.4 });
    }
  }

  /** Nhịp thở của ánh sáng và bụi vàng; GraphicsEngine gọi mỗi khung hình. */
  public update(delta: number, elapsed: number): void {
    this.light.intensity = this.lightState.intensity * (0.9 + 0.1 * Math.sin(elapsed * 3.1));

    if (this.sparkLife > 0) {
      this.sparkLife = Math.max(0, this.sparkLife - delta);
      for (let i = 0; i < this.sparkCount; i++) {
        const o = i * 3;
        this.sparkVelocities[o + 1] -= 7.2 * delta;
        this.sparkPositions[o] += this.sparkVelocities[o] * delta;
        this.sparkPositions[o + 1] += this.sparkVelocities[o + 1] * delta;
        this.sparkPositions[o + 2] += this.sparkVelocities[o + 2] * delta;
        if (this.sparkPositions[o + 1] < 0.04) {
          this.sparkPositions[o + 1] = 0.04;
          this.sparkVelocities[o + 1] *= -0.34;
          this.sparkVelocities[o] *= 0.7;
          this.sparkVelocities[o + 2] *= 0.7;
        }
      }
      (this.sparks.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;

      const lifeRatio = this.sparkLife / this.sparkDuration;
      this.sparkMaterial.opacity = lifeRatio < 0.45 ? lifeRatio / 0.45 : 1;
      if (this.sparkLife === 0) this.sparks.visible = false;
    }

    if (this.shaft.visible) this.shaft.rotation.y += delta * 0.4;
  }

  public resetAll(): void {
    this.entries.forEach((entry) => {
      gsap.killTweensOf(entry.lid.rotation);
      gsap.killTweensOf(entry.treasure.position);
      gsap.killTweensOf(entry.treasure.rotation);
      gsap.killTweensOf(entry.treasure.scale);
      entry.lid.rotation.set(0, 0, 0);
      entry.treasure.position.set(0, 0.04, 0);
      entry.treasure.rotation.set(0, 0, 0);
      entry.treasure.scale.set(1, 1, 1);
    });

    gsap.killTweensOf(this.treasureMaterial);
    gsap.killTweensOf(this.highlightMaterial);
    gsap.killTweensOf(this.shaftMaterial);
    gsap.killTweensOf(this.shaft.scale);
    gsap.killTweensOf(this.shaft.position);
    gsap.killTweensOf(this.lightState);
    this.ripples.forEach(({ mesh, material }) => {
      gsap.killTweensOf(material);
      gsap.killTweensOf(mesh.scale);
      material.opacity = 0;
      mesh.visible = false;
      mesh.scale.set(1, 1, 1);
    });

    this.treasureMaterial.emissiveIntensity = 0.24;
    this.highlightMaterial.opacity = 0;
    this.shaftMaterial.opacity = 0;
    this.highlightRing.visible = false;
    this.shaft.visible = false;
    this.shaft.scale.set(1, 1, 1);
    this.shaft.position.y = 4.0;
    this.sparks.visible = false;
    this.sparkMaterial.opacity = 0;
    this.sparkLife = 0;
    this.lightState.intensity = 0;
    this.light.intensity = 0;
  }

  public dispose(): void {
    this.geometries.forEach((geometry) => geometry.dispose());
    this.textures.forEach((texture) => texture.dispose());
    this.materials.forEach((material) => material.dispose());
    this.entries.clear();
  }
}

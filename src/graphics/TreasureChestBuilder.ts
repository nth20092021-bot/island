import * as THREE from 'three';
import gsap from 'gsap';
import { ChestData } from '../core/EventBus';
import { chestPbrMaterials } from './TextureFactory';

export interface TreasureChest {
  root: THREE.Group;
  base: THREE.Mesh;
  lid: THREE.Group;
  glow: THREE.Mesh;
  particles: THREE.Points;
  goldMound: THREE.Mesh;
}

/**
 * TreasureChestBuilder: Model rương kho báu hải tặc cách điệu (Stylized Pirate Treasure Chest)
 * - Thân gỗ tếch ấm áp với nẹp góc kim loại mạ vàng và đinh tán
 * - Nắp vòm cong có đai gân hoàng kim & ổ khóa chạm khắc tinh xảo
 * - Bên trong chứa kho báu tiền vàng lấp lánh hé lộ khi bật mở nắp
 * - Quai xách bằng đồng hai bên hông
 * - Tái sử dụng chung geometries/materials chia sẻ giữa 28 rương để đạt hiệu năng 60 FPS
 */
export class TreasureChestBuilder {
  private readonly geometries: THREE.BufferGeometry[] = [];
  private readonly materials: THREE.Material[] = [];
  private readonly entries = new Map<number, TreasureChest>();

  // Shared Materials
  private sharedPbr!: { wood: THREE.MeshStandardMaterial; metal: THREE.MeshStandardMaterial };
  private goldTreasureMaterial!: THREE.MeshStandardMaterial;
  private glowMaterial!: THREE.MeshBasicMaterial;
  private particleMaterial!: THREE.PointsMaterial;

  // Shared Geometries
  private baseBoxGeo!: THREE.BoxGeometry;
  private cornerBracketGeo!: THREE.BoxGeometry;
  private rimBandGeo!: THREE.BoxGeometry;
  private handleGeo!: THREE.TorusGeometry;
  private goldMoundGeo!: THREE.CylinderGeometry;
  private lidArchGeo!: THREE.CylinderGeometry;
  private lidRibGeo!: THREE.TorusGeometry;
  private lockPlateGeo!: THREE.BoxGeometry;
  private lockHaspGeo!: THREE.BoxGeometry;
  private keyholeGeo!: THREE.CylinderGeometry;
  private glowGeo!: THREE.BoxGeometry;
  private particleGeo!: THREE.BufferGeometry;

  public constructor() {
    this.initSharedResources();
  }

  private initSharedResources(): void {
    // 1. Materials PBR
    this.sharedPbr = chestPbrMaterials();
    // Tinh chỉnh màu gỗ ấm áp và kim loại vàng cổ
    this.sharedPbr.wood.color.setHex(0xa0522d); // Gỗ nâu đỏ nhiệt đới ấm
    this.sharedPbr.metal.color.setHex(0xfbbf24); // Vàng kim rực rỡ
    this.sharedPbr.metal.metalness = 0.92;
    this.sharedPbr.metal.roughness = 0.22;
    this.materials.push(this.sharedPbr.wood, this.sharedPbr.metal);

    // Chất liệu kho báu tiền vàng bên trong
    this.goldTreasureMaterial = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      metalness: 0.95,
      roughness: 0.18,
      emissive: 0x78350f,
      emissiveIntensity: 0.35,
      flatShading: true
    });
    this.materials.push(this.goldTreasureMaterial);

    // Vòng hào quang vàng mềm mại dưới chân rương khi được quét/chọn (KHÔNG dùng wireframe để tránh tạo đường chỉ trắng)
    this.glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xfde047,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    this.materials.push(this.glowMaterial);

    // Hạt bụi vàng khi mở nắp
    const positions = new Float32Array(70 * 3);
    for (let i = 0; i < 70; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2.0;
      positions[i * 3 + 1] = Math.random() * 2.6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1.4;
    }
    this.particleGeo = this.remember(new THREE.BufferGeometry());
    this.particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    this.particleMaterial = new THREE.PointsMaterial({
      color: 0xfde047,
      size: 0.14,
      transparent: true,
      blending: THREE.AdditiveBlending
    });
    this.materials.push(this.particleMaterial);

    // 2. Geometries (Tạo 1 lần duy nhất)
    // Thân rương gỗ: Rộng 1.9m, Cao 0.9m, Sâu 1.25m
    this.baseBoxGeo = this.remember(new THREE.BoxGeometry(1.9, 0.9, 1.25));

    // Nẹp góc kim loại bảo vệ 4 góc rương
    this.cornerBracketGeo = this.remember(new THREE.BoxGeometry(0.14, 0.92, 0.14));

    // Đai nẹp viền miệng rương và chân rương
    this.rimBandGeo = this.remember(new THREE.BoxGeometry(1.94, 0.08, 1.29));

    // Quai xách bằng đồng hai bên hông
    this.handleGeo = this.remember(new THREE.TorusGeometry(0.16, 0.035, 8, 16));

    // Kho báu tiền vàng lấp lánh nằm sẵn bên trong rương
    this.goldMoundGeo = this.remember(new THREE.CylinderGeometry(0.55, 0.78, 0.32, 14));

    // Nắp rương vòm cong bán nguyệt
    this.lidArchGeo = this.remember(new THREE.CylinderGeometry(0.63, 0.63, 1.9, 20, 1, false, 0, Math.PI));
    this.lidArchGeo.rotateZ(Math.PI / 2);

    // Đai gân kim loại cong ôm qua vòm nắp rương
    this.lidRibGeo = this.remember(new THREE.TorusGeometry(0.645, 0.05, 8, 20, Math.PI));

    // Khóa rương mặt trước: Tấm ốp khóa + móc khóa + lỗ khóa
    this.lockPlateGeo = this.remember(new THREE.BoxGeometry(0.28, 0.36, 0.09));
    this.lockHaspGeo = this.remember(new THREE.BoxGeometry(0.14, 0.22, 0.11));
    this.keyholeGeo = this.remember(new THREE.CylinderGeometry(0.025, 0.025, 0.1, 8));
    this.keyholeGeo.rotateX(Math.PI / 2);

    const ringGeo = new THREE.RingGeometry(0.7, 1.55, 28);
    ringGeo.rotateX(-Math.PI / 2);
    this.glowGeo = this.remember(ringGeo as any);
  }

  public build(chest: ChestData): TreasureChest {
    const root = new THREE.Group();
    root.name = `TreasureChest_${chest.id}`;
    root.position.copy(chest.position);
    root.rotation.y = chest.rotationY;

    // === PHẦN 1: THÂN RƯƠNG (BASE) ===
    const baseGroup = new THREE.Group();
    baseGroup.position.y = 0.45;

    // Khối gỗ chính
    const baseWood = new THREE.Mesh(this.baseBoxGeo, this.sharedPbr.wood);
    baseWood.castShadow = true;
    baseWood.receiveShadow = true;
    baseGroup.add(baseWood);

    // 4 Nẹp góc kim loại mạ vàng
    const halfW = 1.9 / 2 - 0.06;
    const halfD = 1.25 / 2 - 0.06;
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        const bracket = new THREE.Mesh(this.cornerBracketGeo, this.sharedPbr.metal);
        bracket.position.set(sx * halfW, 0, sz * halfD);
        baseGroup.add(bracket);
      }
    }

    // Viền kim loại trên miệng rương và đáy rương
    const topRim = new THREE.Mesh(this.rimBandGeo, this.sharedPbr.metal);
    topRim.position.y = 0.42;
    const botRim = new THREE.Mesh(this.rimBandGeo, this.sharedPbr.metal);
    botRim.position.y = -0.42;
    baseGroup.add(topRim, botRim);

    // 2 Đai kim loại dọc thân rương
    for (const x of [-0.55, 0.55]) {
      const band = new THREE.Mesh(this.remember(new THREE.BoxGeometry(0.12, 0.91, 1.28)), this.sharedPbr.metal);
      band.position.set(x, 0, 0);
      baseGroup.add(band);
    }

    // Quai xách bằng đồng hai bên sườn rương
    for (const sx of [-1, 1]) {
      const handle = new THREE.Mesh(this.handleGeo, this.sharedPbr.metal);
      handle.position.set(sx * (1.9 / 2 + 0.03), 0.05, 0);
      handle.rotation.y = Math.PI / 2;
      handle.rotation.x = 0.2;
      baseGroup.add(handle);
    }

    // Đống tiền vàng & đá quý phát sáng hé lộ bên trong rương
    const goldMound = new THREE.Mesh(this.goldMoundGeo, this.goldTreasureMaterial);
    goldMound.position.set(0, 0.28, 0);
    goldMound.scale.set(1.1, 1.0, 1.1);
    baseGroup.add(goldMound);

    root.add(baseGroup);

    // === PHẦN 2: NẮP RƯƠNG VÒM CONG (LID) ===
    // Trục xoay bản lề đặt ở mép sau của nắp: z = -0.625, y = 0.9
    const lid = new THREE.Group();
    lid.position.set(0, 0.9, -0.625);

    // Vòm gỗ nắp rương
    const lidWood = new THREE.Mesh(this.lidArchGeo, this.sharedPbr.wood);
    lidWood.position.set(0, 0, 0.625);
    lidWood.castShadow = true;
    lid.add(lidWood);

    // 2 Đai gân kim loại cong ôm theo vòm nắp
    for (const x of [-0.55, 0.55]) {
      const rib = new THREE.Mesh(this.lidRibGeo, this.sharedPbr.metal);
      rib.position.set(x, 0, 0.625);
      rib.rotation.y = Math.PI / 2;
      lid.add(rib);
    }

    // Viền kim loại mép trước nắp rương
    const frontLip = new THREE.Mesh(
      this.remember(new THREE.BoxGeometry(1.94, 0.08, 0.08)),
      this.sharedPbr.metal
    );
    frontLip.position.set(0, 0.04, 1.25);
    lid.add(frontLip);

    // Ổ khóa kim loại mặt trước nắp rương
    const lockGroup = new THREE.Group();
    lockGroup.position.set(0, 0, 1.26);

    const lockPlate = new THREE.Mesh(this.lockPlateGeo, this.sharedPbr.metal);
    const lockHasp = new THREE.Mesh(this.lockHaspGeo, this.sharedPbr.metal);
    lockHasp.position.y = -0.06;

    // Lỗ khóa màu tối tương phản
    const keyholeMat = new THREE.MeshBasicMaterial({ color: 0x18181b });
    this.materials.push(keyholeMat);
    const keyhole = new THREE.Mesh(this.keyholeGeo, keyholeMat);
    keyhole.position.set(0, 0.02, 0.05);

    lockGroup.add(lockPlate, lockHasp, keyhole);
    lid.add(lockGroup);

    root.add(lid);

    // === PHẦN 3: HIỆU ỨNG GLOW, HẠT VÀNG & BẢNG TÊN ===
    const chestGlowMat = this.glowMaterial.clone();
    this.materials.push(chestGlowMat);
    const glow = new THREE.Mesh(this.glowGeo, chestGlowMat);
    glow.position.y = 0.05;
    root.add(glow);

    const particles = new THREE.Points(this.particleGeo, this.particleMaterial.clone());
    this.materials.push(particles.material as THREE.Material);
    particles.position.y = 1.0;
    particles.visible = false;
    root.add(particles);

    // Bảng tên học sinh bay lơ lửng trên rương
    const label = this.createLabel(chest.student.name);
    label.position.set(0, 2.1, 0);
    label.rotation.x = -0.12;
    root.add(label);

    const entry: TreasureChest = { root, base: baseWood, lid, glow, particles, goldMound };
    this.entries.set(chest.id, entry);
    return entry;
  }

  private remember<T extends THREE.BufferGeometry>(g: T): T {
    this.geometries.push(g);
    return g;
  }

  private createLabel(name: string): THREE.Sprite {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;

    // Nền gỗ viền vàng sang trọng
    ctx.fillStyle = 'rgba(24, 18, 12, 0.92)';
    ctx.beginPath();
    ctx.roundRect(4, 4, 248, 56, 12);
    ctx.fill();

    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = '#fef3c7';
    ctx.font = 'bold 22px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(name, 128, 32);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
    this.materials.push(spriteMat);

    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(2.4, 0.6, 1);
    return sprite;
  }

  /**
   * Bật mở nắp rương mượt mà với hoạt ảnh nảy nhẹ (Back ease) và hé lộ vàng ngọc
   */
  public open(id: number): void {
    const e = this.entries.get(id);
    if (!e) return;

    // 1. Mở nắp vòm rương ngả về sau 115 độ
    gsap.to(e.lid.rotation, {
      x: -Math.PI * 0.64,
      duration: 1.1,
      ease: 'back.out(1.6)'
    });

    // 2. Đống tiền vàng bừng sáng
    gsap.to(e.goldMound.scale, {
      x: 1.25,
      y: 1.2,
      z: 1.25,
      duration: 0.9,
      ease: 'power2.out'
    });

    // 3. Pháo hoa bụi vàng bung tỏa
    e.particles.visible = true;
    gsap.fromTo(
      e.particles.scale,
      { x: 0.3, y: 0.3, z: 0.3 },
      { x: 1.6, y: 1.8, z: 1.6, duration: 1.4, ease: 'power2.out' }
    );

    // 4. Glow highlight tỏa sáng rồi tan dần
    gsap.fromTo(
      e.glow.material as THREE.MeshBasicMaterial,
      { opacity: 0.9 },
      { opacity: 0, duration: 1.6 }
    );
  }

  public highlight(id: number, active: boolean): void {
    const e = this.entries.get(id);
    if (e) {
      gsap.to(e.glow.material as THREE.MeshBasicMaterial, {
        opacity: active ? 0.85 : 0,
        duration: 0.25
      });
    }
  }

  public get(id: number): TreasureChest | undefined {
    return this.entries.get(id);
  }

  public dispose(): void {
    this.geometries.forEach((g) => g.dispose());
    const textures = new Set<THREE.Texture>();
    this.materials.forEach((material) => {
      const mapped = material as THREE.MeshStandardMaterial;
      for (const texture of [mapped.map, mapped.roughnessMap, mapped.normalMap]) {
        if (texture) textures.add(texture);
      }
    });
    textures.forEach((texture) => texture.dispose());
    this.materials.forEach((m) => m.dispose());
  }
}

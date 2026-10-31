import * as THREE from 'three';
import gsap from 'gsap';
import { ChestData } from '../core/EventBus';

export interface TreasureChest {
  root: THREE.Group;
  base: THREE.Group;
  lid: THREE.Group;
  glow: THREE.Mesh;
  particles: THREE.Points;
  goldMound: THREE.Mesh;
}

/**
 * TreasureChestBuilder: Model rương kho báu hải tặc chuẩn xác theo hình ảnh tham chiếu (Stylized Pirate Chest)
 * - Thân rương gỗ sồi vàng óng (honey-golden wood planks) với các đường rãnh ghép ván gỗ tự nhiên
 * - Viền kim loại thép xám đen (gunmetal steel) với các nẹp góc, đai ngang, đai vòm nắp và đinh tán đầu tròn bạc sáng
 * - Ổ khóa mặt trước với tấm ốp kim loại hình khiên cách điệu, móc khóa và vòng khuyên treo
 * - Quai xách hình chữ D bản dày hai bên hông rương
 * - Kho báu tiền vàng lấp lánh hé lộ bên trong rương
 * - Animation mở nắp xoay chuẩn xác 100% quanh bản lề mép sau mà không bị lệch hay bay chi tiết
 * - Tối ưu tái sử dụng tài nguyên chia sẻ (shared geometry & materials) cho cả 28 rương
 */
export class TreasureChestBuilder {
  private readonly geometries: THREE.BufferGeometry[] = [];
  private readonly materials: THREE.Material[] = [];
  private readonly entries = new Map<number, TreasureChest>();

  // Shared Materials
  private woodMaterial!: THREE.MeshStandardMaterial;
  private steelMaterial!: THREE.MeshStandardMaterial;
  private rivetMaterial!: THREE.MeshStandardMaterial;
  private goldTreasureMaterial!: THREE.MeshStandardMaterial;
  private glowMaterial!: THREE.MeshBasicMaterial;
  private particleMaterial!: THREE.PointsMaterial;

  // Shared Geometries
  private baseBoxGeo!: THREE.BoxGeometry;
  private woodPlankGeo!: THREE.BoxGeometry;
  private bottomBandGeo!: THREE.BoxGeometry;
  private cornerBracketGeo!: THREE.BoxGeometry;
  private verticalStrapGeo!: THREE.BoxGeometry;
  private buckleGeo!: THREE.BoxGeometry;
  private rivetGeo!: THREE.SphereGeometry;
  private sideHandleBracketGeo!: THREE.BoxGeometry;
  private sideHandleRingGeo!: THREE.TorusGeometry;
  private lockBackingGeo!: THREE.BoxGeometry;
  private lockLatchGeo!: THREE.BoxGeometry;
  private lockLoopGeo!: THREE.TorusGeometry;
  private goldMoundGeo!: THREE.CylinderGeometry;

  // Lid Geometries (gốc tọa độ đặt tại mép bản lề sau)
  private lidWoodGeo!: THREE.CylinderGeometry;
  private lidEndCapGeo!: THREE.CylinderGeometry;
  private lidRibGeo!: THREE.CylinderGeometry;
  private lidFrontLipGeo!: THREE.BoxGeometry;
  private lidHaspGeo!: THREE.BoxGeometry;

  private glowGeo!: THREE.BufferGeometry;
  private particleGeo!: THREE.BufferGeometry;

  public constructor() {
    this.initSharedResources();
  }

  private initSharedResources(): void {
    // === 1. MATERIALS ===
    // Chất liệu gỗ sồi vàng mật ong (Honey-golden oak planks)
    this.woodMaterial = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      roughness: 0.55,
      metalness: 0.05,
      flatShading: true
    });
    this.materials.push(this.woodMaterial);

    // Chất liệu thép xám đen viền nẹp kim loại (Dark gunmetal steel)
    this.steelMaterial = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.28,
      metalness: 0.88,
      flatShading: true
    });
    this.materials.push(this.steelMaterial);

    // Đinh tán tròn đầu kim loại sáng bóng (Polished steel rivets)
    this.rivetMaterial = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      roughness: 0.2,
      metalness: 0.95,
      flatShading: false
    });
    this.materials.push(this.rivetMaterial);

    // Kho báu tiền vàng & đá quý phát sáng rực rỡ bên trong
    this.goldTreasureMaterial = new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0x854d0e,
      emissiveIntensity: 0.45,
      flatShading: true
    });
    this.materials.push(this.goldTreasureMaterial);

    // Hào quang vàng dịu dưới chân rương khi chọn (Không dùng wireframe)
    this.glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xfde047,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    this.materials.push(this.glowMaterial);

    // Bụi vàng phát sáng khi mở nắp
    const positions = new Float32Array(75 * 3);
    for (let i = 0; i < 75; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1.8;
      positions[i * 3 + 1] = Math.random() * 2.8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1.4;
    }
    this.particleGeo = this.remember(new THREE.BufferGeometry());
    this.particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    this.particleMaterial = new THREE.PointsMaterial({
      color: 0xfef08a,
      size: 0.15,
      transparent: true,
      blending: THREE.AdditiveBlending
    });
    this.materials.push(this.particleMaterial);

    // === 2. GEOMETRIES ===
    // Kích thước chuẩn tỉ lệ rương tham chiếu: Rộng 1.85m, Cao thân 0.78m, Sâu 1.18m
    const W = 1.85;
    const H = 0.78;
    const D = 1.18;

    // Khối thân chính
    this.baseBoxGeo = this.remember(new THREE.BoxGeometry(W, H, D));

    // Nẹp chân đáy rương
    this.bottomBandGeo = this.remember(new THREE.BoxGeometry(W + 0.05, 0.14, D + 0.05));

    // 4 Nẹp góc chữ L dày dặn
    this.cornerBracketGeo = this.remember(new THREE.BoxGeometry(0.18, H + 0.02, 0.18));

    // 2 Đai dọc thân rương
    this.verticalStrapGeo = this.remember(new THREE.BoxGeometry(0.12, H + 0.02, D + 0.03));

    // Khóa đai kim loại
    this.buckleGeo = this.remember(new THREE.BoxGeometry(0.15, 0.08, 0.06));

    // Đinh tán tròn đầu
    this.rivetGeo = this.remember(new THREE.SphereGeometry(0.042, 8, 8));

    // Quai xách hông rương
    this.sideHandleBracketGeo = this.remember(new THREE.BoxGeometry(0.08, 0.22, 0.22));
    this.sideHandleRingGeo = this.remember(new THREE.TorusGeometry(0.15, 0.038, 8, 16));

    // Khóa mặt trước (tấm khiên + chốt móc + vòng khuyên)
    this.lockBackingGeo = this.remember(new THREE.BoxGeometry(0.36, 0.32, 0.05));
    this.lockLatchGeo = this.remember(new THREE.BoxGeometry(0.16, 0.24, 0.07));
    this.lockLoopGeo = this.remember(new THREE.TorusGeometry(0.065, 0.02, 8, 14));

    // Đống tiền vàng bên trong
    this.goldMoundGeo = this.remember(new THREE.CylinderGeometry(0.55, 0.72, 0.35, 14));

    // Nắp rương vòm cong bán nguyệt (bán kính R = D/2 = 0.59m, dài W = 1.85m)
    const R = D / 2;
    // Cylinder tạo vòm bán nguyệt xoay ngang
    this.lidWoodGeo = this.remember(new THREE.CylinderGeometry(R, R, W, 24, 1, false, 0, Math.PI));
    this.lidWoodGeo.rotateZ(Math.PI / 2);

    // Đai nẹp hai bên đầu hồi vòm nắp (Left & Right End-Caps)
    this.lidEndCapGeo = this.remember(new THREE.CylinderGeometry(R + 0.025, R + 0.025, 0.16, 24, 1, false, 0, Math.PI));
    this.lidEndCapGeo.rotateZ(Math.PI / 2);

    // 2 Đai nẹp gân vòng qua vòm nắp (Middle Ribs)
    this.lidRibGeo = this.remember(new THREE.CylinderGeometry(R + 0.025, R + 0.025, 0.12, 24, 1, false, 0, Math.PI));
    this.lidRibGeo.rotateZ(Math.PI / 2);

    // Mép kim loại nằm ngang phía trước nắp
    this.lidFrontLipGeo = this.remember(new THREE.BoxGeometry(W + 0.05, 0.12, 0.06));

    // Tấm móc khóa trên nắp
    this.lidHaspGeo = this.remember(new THREE.BoxGeometry(0.26, 0.22, 0.08));

    // Hào quang đĩa tròn dưới đất
    const ring = new THREE.RingGeometry(0.75, 1.6, 28);
    ring.rotateX(-Math.PI / 2);
    this.glowGeo = this.remember(ring);
  }

  public build(chest: ChestData): TreasureChest {
    const root = new THREE.Group();
    root.name = `TreasureChest_${chest.id}`;
    root.position.copy(chest.position);
    root.rotation.y = chest.rotationY;

    const W = 1.85;
    const H = 0.78;
    const D = 1.18;
    const R = D / 2;

    // ==========================================
    // 1. THÂN RƯƠNG (BASE GROUP)
    // Tâm đặt tại y = H/2 = 0.39m (đáy tiếp đất y = 0)
    // ==========================================
    const base = new THREE.Group();
    base.position.set(0, H / 2, 0);

    // Khối gỗ thân rương
    const woodBox = new THREE.Mesh(this.baseBoxGeo, this.woodMaterial);
    woodBox.castShadow = true;
    woodBox.receiveShadow = true;
    base.add(woodBox);

    // Nẹp kim loại chân đáy rương
    const bottomBand = new THREE.Mesh(this.bottomBandGeo, this.steelMaterial);
    bottomBand.position.y = -H / 2 + 0.07;
    bottomBand.receiveShadow = true;
    base.add(bottomBand);

    // Đinh tán nẹp chân đáy rương
    for (const x of [-0.75, -0.4, 0, 0.4, 0.75]) {
      const rFront = new THREE.Mesh(this.rivetGeo, this.rivetMaterial);
      rFront.position.set(x, -H / 2 + 0.07, D / 2 + 0.025);
      base.add(rFront);
    }

    // 4 Nẹp góc kim loại chữ L bảo vệ 4 góc
    const cornerX = W / 2 - 0.08;
    const cornerZ = D / 2 - 0.08;
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        const bracket = new THREE.Mesh(this.cornerBracketGeo, this.steelMaterial);
        bracket.position.set(sx * cornerX, 0, sz * cornerZ);
        base.add(bracket);

        // 3 Đinh tán dọc theo mỗi nẹp góc
        for (const ry of [-0.22, 0.05, 0.28]) {
          const rivetFront = new THREE.Mesh(this.rivetGeo, this.rivetMaterial);
          rivetFront.position.set(sx * (W / 2 - 0.06), ry, sz * (D / 2 + 0.012));
          base.add(rivetFront);

          const rivetSide = new THREE.Mesh(this.rivetGeo, this.rivetMaterial);
          rivetSide.position.set(sx * (W / 2 + 0.012), ry, sz * (D / 2 - 0.06));
          base.add(rivetSide);
        }
      }
    }

    // 2 Đai dọc thân rương với đinh tán
    for (const x of [-0.52, 0.52]) {
      const strap = new THREE.Mesh(this.verticalStrapGeo, this.steelMaterial);
      strap.position.set(x, 0, 0);
      base.add(strap);

      // Đinh tán trên đai dọc
      for (const y of [-0.15, 0.2]) {
        const r = new THREE.Mesh(this.rivetGeo, this.rivetMaterial);
        r.position.set(x, y, D / 2 + 0.02);
        base.add(r);
      }
    }

    // Quai xách bằng đồng hai bên hông rương (như hình mẫu)
    for (const sx of [-1, 1]) {
      const handleGroup = new THREE.Group();
      handleGroup.position.set(sx * (W / 2 + 0.01), 0.05, 0);

      // Bản lề đỡ quai xách
      const bracket = new THREE.Mesh(this.sideHandleBracketGeo, this.steelMaterial);
      handleGroup.add(bracket);

      // Vòng khuyên chữ D buông thõng
      const ring = new THREE.Mesh(this.sideHandleRingGeo, this.steelMaterial);
      ring.position.set(sx * 0.06, -0.06, 0);
      ring.rotation.y = Math.PI / 2;
      ring.rotation.x = 0.2;
      handleGroup.add(ring);

      base.add(handleGroup);
    }

    // Bộ khóa mặt trước thân rương (Lock Plate + Hanging Latch)
    const lockBaseGroup = new THREE.Group();
    lockBaseGroup.position.set(0, 0.16, D / 2 + 0.025);

    const lockPlate = new THREE.Mesh(this.lockBackingGeo, this.steelMaterial);
    const lockLatch = new THREE.Mesh(this.lockLatchGeo, this.steelMaterial);
    lockLatch.position.set(0, -0.04, 0.025);

    const lockLoop = new THREE.Mesh(this.lockLoopGeo, this.rivetMaterial);
    lockLoop.position.set(0, -0.12, 0.04);
    lockLoop.rotation.y = Math.PI / 2;

    // Đinh tán trên tấm khóa
    for (const sx of [-0.12, 0.12]) {
      const r = new THREE.Mesh(this.rivetGeo, this.rivetMaterial);
      r.position.set(sx, 0.08, 0.03);
      lockBaseGroup.add(r);
    }

    lockBaseGroup.add(lockPlate, lockLatch, lockLoop);
    base.add(lockBaseGroup);

    // Đống tiền vàng & ngọc bích phát sáng bên trong rương
    const goldMound = new THREE.Mesh(this.goldMoundGeo, this.goldTreasureMaterial);
    goldMound.position.set(0, 0.15, 0);
    goldMound.scale.set(1.15, 1.0, 1.15);
    base.add(goldMound);

    root.add(base);

    // ==========================================
    // 2. NẮP RƯƠNG VÒM CONG (LID GROUP)
    // Điểm tựa bản lề xoay (Pivot) đặt chuẩn xác tại mép sau rương:
    // x = 0, y = H = 0.78m, z = -D/2 = -0.59m
    // Toàn bộ các bộ phận nắp được gắn bên trong lid group
    // ==========================================
    const lid = new THREE.Group();
    lid.position.set(0, H, -D / 2);

    // Trong hệ tọa độ của lid:
    // Trục bản lề nằm ở z = 0, y = 0
    // Tâm vòm nắp cong nằm ở z = R = 0.59m, y = 0
    // Mép trước nắp nằm ở z = D = 1.18m, y = 0

    // Vòm gỗ nắp rương
    const lidWood = new THREE.Mesh(this.lidWoodGeo, this.woodMaterial);
    lidWood.position.set(0, 0, R);
    lidWood.castShadow = true;
    lid.add(lidWood);

    // 2 Đai nẹp kim loại hai bên đầu hồi vòm nắp (Left & Right End-Caps)
    for (const sx of [-1, 1]) {
      const endCap = new THREE.Mesh(this.lidEndCapGeo, this.steelMaterial);
      endCap.position.set(sx * (W / 2 - 0.08), 0, R);
      lid.add(endCap);

      // Đinh tán cong theo vòm nắp đầu hồi (5 đinh mỗi bên)
      for (let step = 0; step < 5; step++) {
        const theta = (step + 0.5) * (Math.PI / 5);
        const ry = Math.sin(theta) * (R + 0.03);
        const rz = R - Math.cos(theta) * (R + 0.03);
        const rMesh = new THREE.Mesh(this.rivetGeo, this.rivetMaterial);
        rMesh.position.set(sx * (W / 2 - 0.02), ry, rz);
        lid.add(rMesh);
      }
    }

    // 2 Đai nẹp gân vòng qua vòm nắp (Middle Straps) với đinh tán
    for (const x of [-0.52, 0.52]) {
      const rib = new THREE.Mesh(this.lidRibGeo, this.steelMaterial);
      rib.position.set(x, 0, R);
      lid.add(rib);

      // Khóa đai kim loại ở mép trước
      const buckle = new THREE.Mesh(this.buckleGeo, this.steelMaterial);
      buckle.position.set(x, 0.05, D + 0.02);
      lid.add(buckle);

      // Đinh tán dọc theo đai vòm nắp
      for (let step = 0; step < 4; step++) {
        const theta = (step + 0.6) * (Math.PI / 4.8);
        const ry = Math.sin(theta) * (R + 0.03);
        const rz = R - Math.cos(theta) * (R + 0.03);
        const rMesh = new THREE.Mesh(this.rivetGeo, this.rivetMaterial);
        rMesh.position.set(x, ry, rz);
        lid.add(rMesh);
      }
    }

    // Mép viền kim loại nằm ngang phía trước nắp rương
    const frontLip = new THREE.Mesh(this.lidFrontLipGeo, this.steelMaterial);
    frontLip.position.set(0, 0.04, D);
    lid.add(frontLip);

    // Tấm chốt khóa trên nắp rương khớp với khóa thân dưới
    const lidHasp = new THREE.Mesh(this.lidHaspGeo, this.steelMaterial);
    lidHasp.position.set(0, 0.02, D + 0.035);

    // Đinh tán trên tấm chốt khóa
    for (const sx of [-0.08, 0.08]) {
      const r = new THREE.Mesh(this.rivetGeo, this.rivetMaterial);
      r.position.set(sx, 0.06, D + 0.08);
      lid.add(r);
    }
    lid.add(lidHasp);

    root.add(lid);

    // ==========================================
    // 3. HIỆU ỨNG HÀO QUANG, HẠT VÀNG & BẢNG TÊN
    // ==========================================
    // Đĩa ánh sáng vàng dịu trên mặt đất (Không có wireframe)
    const chestGlowMat = this.glowMaterial.clone();
    this.materials.push(chestGlowMat);
    const glow = new THREE.Mesh(this.glowGeo, chestGlowMat);
    glow.position.y = 0.04;
    root.add(glow);

    // Hạt bụi vàng khi mở nắp
    const particles = new THREE.Points(this.particleGeo, this.particleMaterial.clone());
    this.materials.push(particles.material as THREE.Material);
    particles.position.set(0, 0.85, 0);
    particles.visible = false;
    root.add(particles);

    // Bảng tên học sinh bay lơ lửng phía trên rương
    const label = this.createLabel(chest.student.name);
    label.position.set(0, H + R + 0.55, 0);
    root.add(label);

    const entry: TreasureChest = { root, base, lid, glow, particles, goldMound };
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

    ctx.fillStyle = 'rgba(20, 24, 33, 0.92)';
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
   * Bật mở nắp rương mượt mà: xoay toàn bộ cụm nắp về sau 110 độ quanh trục bản lề
   */
  public open(id: number): void {
    const e = this.entries.get(id);
    if (!e) return;

    // 1. Mở nắp vòm rương ngả về sau 110 độ (Xoay hoàn hảo quanh bản lề mép sau)
    gsap.to(e.lid.rotation, {
      x: -Math.PI * 0.62,
      duration: 1.15,
      ease: 'back.out(1.5)'
    });

    // 2. Đống tiền vàng bên trong bừng sáng và phồng lên nhẹ
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

    // 4. Đĩa hào quang vàng dưới đất sáng rực rồi dịu dần
    gsap.fromTo(
      e.glow.material as THREE.MeshBasicMaterial,
      { opacity: 0.95 },
      { opacity: 0.25, duration: 1.6 }
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

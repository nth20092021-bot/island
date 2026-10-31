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
}

/**
 * TreasureChestBuilder: Xây dựng 28 rương kho báu PBR tối ưu hiệu năng
 * Tái sử dụng chung geometries và materials cho cả 28 rương để tránh tràn VRAM/OpenGL
 */
export class TreasureChestBuilder {
  private readonly geometries: THREE.BufferGeometry[] = [];
  private readonly materials: THREE.Material[] = [];
  private readonly entries = new Map<number, TreasureChest>();

  // Shared Geometries & Materials (Tạo 1 lần duy nhất)
  private sharedPbr!: { wood: THREE.MeshStandardMaterial; metal: THREE.MeshStandardMaterial };
  private baseGeo!: THREE.BoxGeometry;
  private lidGeo!: THREE.CylinderGeometry;
  private bandGeo!: THREE.BoxGeometry;
  private lockGeo!: THREE.BoxGeometry;
  private glowGeo!: THREE.BoxGeometry;
  private particleGeo!: THREE.BufferGeometry;
  private glowMaterial!: THREE.MeshBasicMaterial;
  private particleMaterial!: THREE.PointsMaterial;

  public constructor() {
    this.initSharedResources();
  }

  private initSharedResources(): void {
    this.sharedPbr = chestPbrMaterials();
    this.materials.push(this.sharedPbr.wood, this.sharedPbr.metal);

    this.baseGeo = this.remember(new THREE.BoxGeometry(2.2, 1.15, 1.45));
    this.lidGeo = this.remember(new THREE.CylinderGeometry(0.73, 0.73, 2.2, 16, 1, false, 0, Math.PI));
    this.lidGeo.rotateZ(Math.PI / 2);

    this.bandGeo = this.remember(new THREE.BoxGeometry(0.16, 1.28, 1.52));
    this.lockGeo = this.remember(new THREE.BoxGeometry(0.32, 0.4, 0.12));
    this.glowGeo = this.remember(new THREE.BoxGeometry(2.5, 1.5, 1.7));

    this.glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      wireframe: true
    });
    this.materials.push(this.glowMaterial);

    const positions = new Float32Array(60 * 3);
    for (let i = 0; i < 60; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2.2;
      positions[i * 3 + 1] = Math.random() * 2.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1.5;
    }
    this.particleGeo = this.remember(new THREE.BufferGeometry());
    this.particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    this.particleMaterial = new THREE.PointsMaterial({
      color: 0xfbbf24,
      size: 0.12,
      transparent: true,
      blending: THREE.AdditiveBlending
    });
    this.materials.push(this.particleMaterial);
  }

  public build(chest: ChestData): TreasureChest {
    const root = new THREE.Group();
    root.name = `TreasureChest_${chest.id}`;
    root.position.copy(chest.position);
    root.rotation.y = chest.rotationY;

    // Thân rương
    const base = new THREE.Mesh(this.baseGeo, this.sharedPbr.wood);
    base.position.y = 0.65;
    base.castShadow = true;
    base.receiveShadow = true;
    root.add(base);

    // Nắp rương có bản lề xoay
    const lid = new THREE.Group();
    lid.position.set(0, 1.22, -0.7);
    const lidMesh = new THREE.Mesh(this.lidGeo, this.sharedPbr.wood);
    lidMesh.castShadow = true;
    lid.add(lidMesh);
    root.add(lid);

    // 2 Đai kim loại bảo vệ
    for (const x of [-0.82, 0.82]) {
      const band = new THREE.Mesh(this.bandGeo, this.sharedPbr.metal);
      band.position.set(x, 0.66, 0);
      root.add(band);
    }

    // Ổ khóa kim loại mặt trước
    const lock = new THREE.Mesh(this.lockGeo, this.sharedPbr.metal);
    lock.position.set(0, 0.8, 0.76);
    root.add(lock);

    // Glow highlight riêng cho từng rương (clone material để điều khiển opacity độc lập)
    const chestGlowMat = this.glowMaterial.clone();
    this.materials.push(chestGlowMat);
    const glow = new THREE.Mesh(this.glowGeo, chestGlowMat);
    glow.position.y = 0.75;
    root.add(glow);

    // Hiệu ứng hạt bụi vàng khi mở nắp
    const particles = new THREE.Points(this.particleGeo, this.particleMaterial.clone());
    this.materials.push(particles.material as THREE.Material);
    particles.position.y = 1.2;
    particles.visible = false;
    root.add(particles);

    // Bảng tên học sinh bay lơ lửng trên rương
    const label = this.createLabel(chest.student.name);
    label.position.set(0, 2.2, 0);
    label.rotation.x = -0.15;
    root.add(label);

    const entry = { root, base, lid, glow, particles };
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

    // Nền thẻ bài gỗ viền vàng
    ctx.fillStyle = 'rgba(16, 28, 20, 0.88)';
    ctx.beginPath();
    ctx.roundRect(4, 4, 248, 56, 12);
    ctx.fill();

    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = '#ecfdf5';
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

  public open(id: number): void {
    const e = this.entries.get(id);
    if (!e) return;

    // Bật mở nắp rương
    gsap.to(e.lid.rotation, {
      x: -Math.PI * 0.68,
      duration: 0.85,
      ease: 'back.out(1.8)'
    });

    // Bụi vàng phát sáng tung bay
    e.particles.visible = true;
    gsap.fromTo(
      e.particles.scale,
      { x: 0.3, y: 0.3, z: 0.3 },
      { x: 1.5, y: 1.5, z: 1.5, duration: 1.2, ease: 'power2.out' }
    );

    gsap.fromTo(
      e.glow.material as THREE.MeshBasicMaterial,
      { opacity: 0.85 },
      { opacity: 0, duration: 1.5 }
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
    this.materials.forEach((m) => m.dispose());
  }
}

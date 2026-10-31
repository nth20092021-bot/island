import * as THREE from 'three';
import gsap from 'gsap';
import { ChestData } from '../core/EventBus';
import { chestPbrMaterials } from './TextureFactory';

export interface TreasureChest { root: THREE.Group; base: THREE.Mesh; lid: THREE.Group; glow: THREE.Mesh; particles: THREE.Points; }

export class TreasureChestBuilder {
  private readonly geometry: THREE.BufferGeometry[] = [];
  private readonly materials: THREE.Material[] = [];
  private readonly entries = new Map<number, TreasureChest>();

  public build(chest: ChestData): TreasureChest {
    const root = new THREE.Group(); root.name = `TreasureChest_${chest.id}`; root.position.copy(chest.position); root.rotation.y = chest.rotationY;
    const pbr = chestPbrMaterials(); this.materials.push(pbr.wood, pbr.metal);
    const base = new THREE.Mesh(this.remember(new THREE.BoxGeometry(2.2, 1.15, 1.45)), pbr.wood); base.position.y = 0.65; base.castShadow = true; root.add(base);
    const lid = new THREE.Group(); lid.position.set(0, 1.22, -0.7); const lidMesh = new THREE.Mesh(this.remember(new THREE.CylinderGeometry(.73, .73, 2.2, 16, 1, false, 0, Math.PI)), pbr.wood); lidMesh.rotation.z = Math.PI / 2; lidMesh.castShadow = true; lid.add(lidMesh); root.add(lid);
    for (const x of [-0.82, 0.82]) { const band = new THREE.Mesh(this.remember(new THREE.BoxGeometry(.16, 1.28, 1.52)), pbr.metal); band.position.set(x, .66, 0); root.add(band); }
    const lock = new THREE.Mesh(this.remember(new THREE.BoxGeometry(.32, .4, .12)), pbr.metal); lock.position.set(0, .8, .76); root.add(lock);
    const glow = new THREE.Mesh(this.remember(new THREE.BoxGeometry(2.5, 1.5, 1.7)), new THREE.MeshBasicMaterial({ color: 0x21dfff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, wireframe: true })); glow.position.y = .75; root.add(glow);
    const particles = this.createParticles(); particles.position.y = 1.2; particles.visible = false; root.add(particles);
    const label = this.createLabel(chest.student.name); label.position.set(0, 2.25, 0); label.rotation.x = -0.2; root.add(label);
    const entry = { root, base, lid, glow, particles }; this.entries.set(chest.id, entry); return entry;
  }
  private remember<T extends THREE.BufferGeometry>(g: T): T { this.geometry.push(g); return g; }
  private createLabel(name: string): THREE.Sprite { const canvas = document.createElement('canvas'); canvas.width = 512; canvas.height = 128; const ctx = canvas.getContext('2d')!; ctx.fillStyle = 'rgba(22,16,30,.88)'; ctx.roundRect(4, 4, 504, 120, 20); ctx.fill(); ctx.strokeStyle = '#ffd166'; ctx.lineWidth = 5; ctx.stroke(); ctx.fillStyle = '#fff2c2'; ctx.font = 'bold 30px sans-serif'; ctx.textAlign = 'center'; ctx.fillText(name, 256, 78); const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(canvas), transparent: true })); sprite.scale.set(2.6, .65, 1); return sprite; }
  private createParticles(): THREE.Points { const positions = new Float32Array(90 * 3); for (let i = 0; i < 90; i++) { positions[i * 3] = (Math.random() - .5) * 2.5; positions[i * 3 + 1] = Math.random() * 3; positions[i * 3 + 2] = (Math.random() - .5) * 1.7; } const g = this.remember(new THREE.BufferGeometry()); g.setAttribute('position', new THREE.BufferAttribute(positions, 3)); const m = new THREE.PointsMaterial({ color: 0xffd166, size: .1, transparent: true, blending: THREE.AdditiveBlending }); this.materials.push(m); return new THREE.Points(g, m); }
  public open(id: number): void { const e = this.entries.get(id); if (!e) return; gsap.to(e.lid.rotation, { x: -Math.PI * .67, duration: .85, ease: 'back.out(1.8)' }); e.particles.visible = true; gsap.fromTo(e.particles.scale, { x: .3, y: .3, z: .3 }, { x: 1.4, y: 1.4, z: 1.4, duration: 1.2, ease: 'power2.out' }); gsap.fromTo((e.glow.material as THREE.MeshBasicMaterial), { opacity: .8 }, { opacity: 0, duration: 1.4 }); }
  public highlight(id: number, active: boolean): void { const e = this.entries.get(id); if (e) gsap.to((e.glow.material as THREE.MeshBasicMaterial), { opacity: active ? .8 : 0, duration: .22 }); }
  public get(id: number): TreasureChest | undefined { return this.entries.get(id); }
  public dispose(): void { this.geometry.forEach(g => g.dispose()); this.materials.forEach(m => m.dispose()); }
}
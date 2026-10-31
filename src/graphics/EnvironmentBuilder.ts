import * as THREE from 'three';

export interface EnvironmentBuilderOptions {
  seed?: number;
  treeCount?: number;
  rockCount?: number;
  cloudCount?: number;
}

const COLORS = {
  rock: 0x4d5961,
  rockDark: 0x29343b,
  sand: 0xe7bd68,
  grass: 0x4c9a55,
  grassLight: 0x83bd63,
  lava: 0xff6b27,
  lavaCore: 0xffd166,
  trunk: 0x80502e,
  leaf: 0x218b61,
  cloud: 0xffffff
};

/** Builds the stylized island with deliberately shared geometries for stable frame time. */
export class EnvironmentBuilder {
  private readonly random: () => number;
  private readonly options: Required<EnvironmentBuilderOptions>;
  private readonly geometries: THREE.BufferGeometry[] = [];
  private readonly materials: THREE.Material[] = [];

  public constructor(options: EnvironmentBuilderOptions = {}) {
    let state = options.seed ?? 1337;
    this.random = () => {
      state = (state * 1664525 + 1013904223) >>> 0;
      return state / 4294967296;
    };
    this.options = {
      seed: options.seed ?? 1337,
      treeCount: options.treeCount ?? 24,
      rockCount: options.rockCount ?? 18,
      cloudCount: options.cloudCount ?? 10
    };
  }

  public build(): THREE.Group {
    const root = new THREE.Group();
    root.name = 'StylizedTreasureIsland';
    root.add(this.createFloatingRock());
    root.add(this.createLayer(20, 3.0, 0.5, COLORS.sand, 0.8));
    root.add(this.createLayer(17.5, 5.0, 2.8, COLORS.grass, 1.0));
    root.add(this.createMountain());
    root.add(this.createVolcano());
    root.add(this.createInstancedTrees());
    root.add(this.createInstancedRocks());
    root.add(this.createClouds());
    return root;
  }

  private material(color: number, emissive = 0x000000, intensity = 0): THREE.MeshStandardMaterial {
    const material = new THREE.MeshStandardMaterial({
      color,
      roughness: 0.86,
      metalness: 0.02,
      flatShading: true,
      emissive,
      emissiveIntensity: intensity
    });
    this.materials.push(material);
    return material;
  }

  private remember<T extends THREE.BufferGeometry>(geometry: T): T {
    this.geometries.push(geometry);
    return geometry;
  }

  private createFloatingRock(): THREE.Mesh {
    const geometry = this.remember(new THREE.CylinderGeometry(15, 25, 10, 12, 4));
    geometry.translate(0, -5, 0);
    return new THREE.Mesh(geometry, this.material(COLORS.rockDark));
  }

  private createLayer(radius: number, height: number, y: number, color: number, roughness: number): THREE.Mesh {
    const geometry = this.remember(new THREE.CylinderGeometry(radius, radius * 1.08, height, 28, 3));
    geometry.translate(0, y, 0);
    const material = this.material(color);
    material.roughness = roughness;
    return new THREE.Mesh(geometry, material);
  }

  private createMountain(): THREE.Mesh {
    const geometry = this.remember(new THREE.ConeGeometry(12, 15, 14, 4));
    geometry.translate(0, 12, 0);
    return new THREE.Mesh(geometry, this.material(COLORS.grassLight));
  }

  private createVolcano(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'VolcanoSummit';
    const rim = new THREE.Mesh(
      this.remember(new THREE.TorusGeometry(4.2, 1.1, 6, 14)),
      this.material(COLORS.rock)
    );
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 19.0;
    group.add(rim);
    const lava = new THREE.Mesh(
      this.remember(new THREE.CircleGeometry(3.8, 14)),
      this.material(COLORS.lava, COLORS.lava, 3.2)
    );
    lava.rotation.x = -Math.PI / 2;
    lava.position.y = 19.05;
    group.add(lava);
    return group;
  }

  private createInstancedTrees(): THREE.Group {
    const group = new THREE.Group();
    const trunkGeometry = this.remember(new THREE.CylinderGeometry(0.18, 0.32, 3.2, 6));
    const leafGeometry = this.remember(new THREE.ConeGeometry(1.35, 2.5, 7));
    const trunk = new THREE.InstancedMesh(trunkGeometry, this.material(COLORS.trunk), this.options.treeCount);
    const leaves = new THREE.InstancedMesh(leafGeometry, this.material(COLORS.leaf), this.options.treeCount);
    const matrix = new THREE.Matrix4();
    for (let i = 0; i < this.options.treeCount; i += 1) {
      const angle = this.random() * Math.PI * 2;
      const radius = 8 + this.random() * 10;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const scale = 0.65 + this.random() * 0.5;
      matrix.makeTranslation(x, 5.2, z).scale(new THREE.Vector3(scale, scale, scale));
      trunk.setMatrixAt(i, matrix);
      matrix.makeTranslation(x, 7.8, z).scale(new THREE.Vector3(scale, scale, scale));
      leaves.setMatrixAt(i, matrix);
    }
    trunk.instanceMatrix.needsUpdate = true;
    leaves.instanceMatrix.needsUpdate = true;
    trunk.castShadow = true;
    leaves.castShadow = true;
    group.add(trunk, leaves);
    return group;
  }

  private createInstancedRocks(): THREE.InstancedMesh {
    const geometry = this.remember(new THREE.DodecahedronGeometry(1, 0));
    const rocks = new THREE.InstancedMesh(geometry, this.material(COLORS.rock), this.options.rockCount);
    const matrix = new THREE.Matrix4();
    for (let i = 0; i < this.options.rockCount; i += 1) {
      const angle = this.random() * Math.PI * 2;
      const radius = 10 + this.random() * 8;
      const scale = 0.5 + this.random() * 1.4;
      matrix.makeTranslation(Math.cos(angle) * radius, 5.1 + this.random() * 2, Math.sin(angle) * radius)
        .scale(new THREE.Vector3(scale, scale * (0.7 + this.random() * 0.6), scale));
      rocks.setMatrixAt(i, matrix);
    }
    rocks.instanceMatrix.needsUpdate = true;
    rocks.castShadow = true;
    return rocks;
  }

  private createClouds(): THREE.Group {
    const group = new THREE.Group();
    const geometry = this.remember(new THREE.IcosahedronGeometry(2.2, 0));
    const material = this.material(COLORS.cloud);
    const matrix = new THREE.Matrix4();
    const clouds = new THREE.InstancedMesh(geometry, material, this.options.cloudCount);
    for (let i = 0; i < this.options.cloudCount; i += 1) {
      const angle = (i / this.options.cloudCount) * Math.PI * 2;
      const radius = 29 + this.random() * 10;
      matrix.makeTranslation(Math.cos(angle) * radius, 14 + this.random() * 10, Math.sin(angle) * radius)
        .scale(new THREE.Vector3(1.6 + this.random() * 2, 0.45 + this.random() * 0.5, 1));
      clouds.setMatrixAt(i, matrix);
    }
    clouds.instanceMatrix.needsUpdate = true;
    group.add(clouds);
    return group;
  }

  public dispose(): void {
    this.geometries.forEach((geometry) => geometry.dispose());
    this.materials.forEach((material) => material.dispose());
  }
}
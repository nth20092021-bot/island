import * as THREE from 'three';

interface MeteorData {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  length: number;
  speed: number;
  life: number;
  maxLife: number;
  scale: number;
}

const meteorVertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vNormal;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  }
`;

const meteorFragmentShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vNormal;
  uniform float uOpacity;

  void main() {
    // vUv.y: 0 ở đuôi mờ dần, 1 ở đầu phát sáng chói lọi
    float head = vUv.y;
    float core = pow(head, 2.2);

    // Bảng màu sao băng bám sát chuẩn xác Ảnh 2:
    // Đầu: Trắng sáng rực rỡ
    // Thân: Xanh ngọc cyan điện quang rực sáng (#38bdf8 / #67e8f9)
    // Đuôi: Xanh lam thẳm vũ trụ (#1d4ed8 / #1e3a8a)
    vec3 colorHead = vec3(1.0, 1.0, 1.0);
    vec3 colorMid  = vec3(0.24, 0.82, 1.0);
    vec3 colorTail = vec3(0.11, 0.31, 0.85);

    vec3 col = mix(colorTail, colorMid, smoothstep(0.08, 0.58, head));
    col = mix(col, colorHead, smoothstep(0.70, 1.0, head));

    float alpha = core * uOpacity;
    gl_FragColor = vec4(col * (1.5 + core * 2.8), alpha);
  }
`;

/**
 * MeteorShower: Hệ thống mưa sao băng 3D sống động xé toạc màn đêm (Bám sát Ảnh 2)
 * - Sử dụng InstancedMesh hình trụ thuôn 3D (Cylinder) để nhìn đẹp từ mọi góc máy quay flycam 360 độ
 * - Độ sáng tự động đồng bộ theo tiến trình đêm (uDayNight)
 */
export class MeteorShower {
  public readonly group: THREE.Group = new THREE.Group();
  private readonly instancedMesh: THREE.InstancedMesh;
  private readonly material: THREE.ShaderMaterial;
  private readonly count = 65;
  private readonly meteors: MeteorData[] = [];
  private readonly dummy = new THREE.Object3D();
  // Hướng bay chéo từ góc trên cao phía Đông Bắc chếch xuống Tây Nam (như góc nghiêng trong Ảnh 2)
  private readonly travelDirection = new THREE.Vector3(-0.52, -0.65, 0.55).normalize();
  private targetOpacity = 0.0;
  private currentOpacity = 0.0;

  constructor() {
    this.group.name = 'MeteorShowerSystem';

    // Hình trụ 3D vuốt nhọn (bán kính đuôi 0.04m, bán kính đầu 0.42m, chiều dài 15m)
    const geometry = new THREE.CylinderGeometry(0.04, 0.42, 15.0, 6, 1, false);
    // Dịch tâm để đầu sao băng nằm ở gốc toạ độ
    geometry.translate(0, 7.5, 0);

    this.material = new THREE.ShaderMaterial({
      vertexShader: meteorVertexShader,
      fragmentShader: meteorFragmentShader,
      uniforms: {
        uOpacity: { value: 0.0 }
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    });

    this.instancedMesh = new THREE.InstancedMesh(geometry, this.material, this.count);
    this.instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.instancedMesh.frustumCulled = false;
    this.group.add(this.instancedMesh);

    // Khởi tạo các vệt sao băng với độ trễ và kích thước ngẫu nhiên
    for (let i = 0; i < this.count; i++) {
      const data: MeteorData = {
        position: new THREE.Vector3(),
        velocity: new THREE.Vector3(),
        length: 12 + Math.random() * 8,
        speed: 130 + Math.random() * 95,
        life: 0,
        maxLife: 0.8 + Math.random() * 0.7,
        scale: 0.75 + Math.random() * 0.8
      };
      this.resetMeteor(data, true);
      this.meteors.push(data);
    }

    this.updateMatrices();
  }

  private resetMeteor(m: MeteorData, initial = false): void {
    // Phân bổ sao băng trên bầu trời bao quanh hòn đảo (Bán kính 50m - 180m, Độ cao 55m - 145m)
    const r = 50 + Math.random() * 135;
    const phi = Math.random() * Math.PI * 2;
    const y = 60 + Math.random() * 85;

    m.position.set(Math.cos(phi) * r + 25, y, Math.sin(phi) * r - 25);

    // Vận tốc lao vút theo hướng sao băng rơi
    const speed = 125 + Math.random() * 110;
    const spread = (Math.random() - 0.5) * 0.14;
    m.velocity
      .copy(this.travelDirection)
      .add(new THREE.Vector3(spread, spread * 0.4, spread))
      .normalize()
      .multiplyScalar(speed);

    m.length = 12 + Math.random() * 8;
    m.scale = 0.8 + Math.random() * 0.75;
    m.maxLife = 0.75 + Math.random() * 0.65;
    m.life = initial ? -Math.random() * 2.5 : -(Math.random() * 0.9);
  }

  public setActive(active: boolean): void {
    this.targetOpacity = active ? 1.0 : 0.0;
  }

  public setOpacity(opacity: number): void {
    this.targetOpacity = THREE.MathUtils.clamp(opacity, 0, 1);
  }

  public update(delta: number, dayNight = -1): void {
    if (dayNight >= 0) {
      this.targetOpacity = dayNight;
    }

    this.currentOpacity = THREE.MathUtils.lerp(this.currentOpacity, this.targetOpacity, delta * 3.8);
    this.material.uniforms.uOpacity.value = this.currentOpacity;

    if (this.currentOpacity < 0.008) {
      this.instancedMesh.visible = false;
      return;
    }
    this.instancedMesh.visible = true;

    for (let i = 0; i < this.count; i++) {
      const m = this.meteors[i];
      m.life += delta;

      if (m.life < 0) {
        this.dummy.position.set(0, -9999, 0);
        this.dummy.scale.set(0, 0, 0);
        this.dummy.updateMatrix();
        this.instancedMesh.setMatrixAt(i, this.dummy.matrix);
        continue;
      }

      if (m.life >= m.maxLife || m.position.y < 4) {
        this.resetMeteor(m);
        continue;
      }

      // Di chuyển sao băng trong không gian 3D
      m.position.addScaledVector(m.velocity, delta);

      this.dummy.position.copy(m.position);

      // Căn chỉnh trục dài của hình trụ dọc theo vector vận tốc
      const lookTarget = m.position.clone().add(this.travelDirection);
      this.dummy.lookAt(lookTarget);
      this.dummy.rotateX(Math.PI / 2); // Khớp trục Y của cylinder hướng theo vận tốc

      const progress = m.life / m.maxLife;
      const stretch = Math.sin(progress * Math.PI);
      this.dummy.scale.set(
        m.scale * (0.7 + stretch * 0.4),
        (m.length / 15.0) * (0.75 + stretch * 0.45),
        m.scale * (0.7 + stretch * 0.4)
      );

      this.dummy.updateMatrix();
      this.instancedMesh.setMatrixAt(i, this.dummy.matrix);
    }

    this.instancedMesh.instanceMatrix.needsUpdate = true;
  }

  private updateMatrices(): void {
    for (let i = 0; i < this.count; i++) {
      this.dummy.position.set(0, -9999, 0);
      this.dummy.updateMatrix();
      this.instancedMesh.setMatrixAt(i, this.dummy.matrix);
    }
    this.instancedMesh.instanceMatrix.needsUpdate = true;
  }

  public dispose(): void {
    this.instancedMesh.geometry.dispose();
    this.material.dispose();
  }
}

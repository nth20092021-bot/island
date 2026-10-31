import * as THREE from 'three';

export const energyBeamVertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vWorldPosition;
  void main() {
    vUv = uv;
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

export const energyBeamFragmentShader = /* glsl */ `
  uniform float uTime;
  uniform float uIntensity;
  uniform vec3 uColor;
  uniform vec3 uHotColor;
  varying vec2 vUv;
  varying vec3 vWorldPosition;
  void main() {
    float distanceFromCore = abs(vUv.x - 0.5) * 2.0;
    float core = pow(max(0.0, 1.0 - distanceFromCore), 5.0);
    float waves = 0.5 + 0.5 * sin(vUv.y * 38.0 - uTime * 6.0 + sin(vUv.y * 11.0) * 2.0);
    float edgeGlow = pow(max(0.0, 1.0 - distanceFromCore), 1.7);
    float pulse = 0.82 + 0.18 * sin(uTime * 4.0 + vUv.y * 20.0);
    vec3 color = mix(uColor, uHotColor, core * 0.9 + waves * 0.2);
    float alpha = (core * 1.8 + edgeGlow * 0.7) * pulse * uIntensity;
    gl_FragColor = vec4(color * (1.0 + core * 2.5) * uIntensity, alpha);
  }
`;

export interface EnergyBeamOptions {
  color?: THREE.ColorRepresentation;
  hotColor?: THREE.ColorRepresentation;
  intensity?: number;
  radius?: number;
  height?: number;
}

export class EnergyBeamShader {
  public readonly material: THREE.ShaderMaterial;
  public readonly mesh: THREE.Mesh;
  public readonly shockwave: THREE.Mesh;

  public constructor(options: EnergyBeamOptions = {}) {
    this.material = new THREE.ShaderMaterial({
      vertexShader: energyBeamVertexShader,
      fragmentShader: energyBeamFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uIntensity: { value: options.intensity ?? 1.4 },
        uColor: { value: new THREE.Color(options.color ?? 0x24d8ff) },
        uHotColor: { value: new THREE.Color(options.hotColor ?? 0xffffff) }
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    });
    const radius = options.radius ?? 0.8;
    const height = options.height ?? 38;
    this.mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, height, 16, 32, true), this.material);
    this.mesh.name = 'EnergyBeam';

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: options.hotColor ?? 0xffffff,
      transparent: true,
      opacity: 0.72,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide
    });
    this.shockwave = new THREE.Mesh(new THREE.RingGeometry(0.2, 1.6, 48), ringMaterial);
    this.shockwave.name = 'EnergyShockwave';
    this.shockwave.rotation.x = -Math.PI / 2;
  }

  public setTarget(target: THREE.Vector3, source = new THREE.Vector3(0, 38, 0)): void {
    const direction = target.clone().sub(source);
    const length = direction.length();
    this.mesh.position.copy(source).add(target).multiplyScalar(0.5);
    this.mesh.scale.y = length / ((this.mesh.geometry as THREE.CylinderGeometry).parameters.height || 38);
    this.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
    this.shockwave.position.copy(target).add(new THREE.Vector3(0, 0.08, 0));
  }

  public update(elapsed: number, delta = 1 / 60): void {
    this.material.uniforms.uTime.value = elapsed;
    const ringMaterial = this.shockwave.material as THREE.MeshBasicMaterial;
    const phase = (elapsed * 0.8) % 1;
    const scale = 0.8 + phase * 4.5;
    this.shockwave.scale.setScalar(scale);
    ringMaterial.opacity = (1 - phase) * 0.72;
    this.shockwave.rotation.z += delta * 0.8;
  }

  public dispose(): void {
    this.mesh.geometry.dispose();
    this.material.dispose();
    this.shockwave.geometry.dispose();
    (this.shockwave.material as THREE.Material).dispose();
  }
}
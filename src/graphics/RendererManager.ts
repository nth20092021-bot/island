import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

export interface RendererManagerOptions {
  bloomStrength?: number;
  bloomRadius?: number;
  bloomThreshold?: number;
  godRayStrength?: number;
  enablePostProcessing?: boolean;
}

/**
 * Tia nắng xuyên mây: radial blur về phía mặt trời trên buffer HDR.
 * Chạy trước bloom để các tia sáng cũng được khuếch tán mềm.
 */
const GodRaysShader = {
  name: 'GodRaysShader',
  uniforms: {
    tDiffuse: { value: null as THREE.Texture | null },
    uSunScreen: { value: new THREE.Vector2(0.5, 0.5) },
    uIntensity: { value: 0.5 },
    uEnabled: { value: 1 }
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform vec2 uSunScreen;
    uniform float uIntensity;
    uniform float uEnabled;
    varying vec2 vUv;

    void main() {
      vec4 base = texture2D(tDiffuse, vUv);
      if (uEnabled < 0.5) {
        gl_FragColor = base;
        return;
      }

      vec2 delta = uSunScreen - vUv;
      float dist = length(delta);
      vec2 stepSize = delta * (0.95 / 48.0);
      vec2 uv = vUv;
      vec3 shafts = vec3(0.0);
      float decay = 1.0;
      float total = 0.0;

      for (int i = 0; i < 48; i++) {
        uv += stepSize;
        vec3 sampleColor = texture2D(tDiffuse, clamp(uv, 0.001, 0.999)).rgb;
        float luminance = dot(sampleColor, vec3(0.2126, 0.7152, 0.0722));
        float mask = smoothstep(1.05, 3.10, luminance);
        shafts += sampleColor * mask * decay;
        total += decay;
        decay *= 0.955;
      }
      shafts /= max(total, 0.0001);

      // Tia đậm gần mặt trời, tan dần khi xa nguồn sáng.
      float edgeFade = 1.0 - smoothstep(0.25, 1.25, dist);
      gl_FragColor = vec4(base.rgb + shafts * uIntensity * (0.30 + 0.70 * edgeFade), base.a);
    }
  `
};

/**
 * Grade LDR sau OutputPass: teal – and – son, vignette mềm, hạt phim rất nhẹ.
 */
const ColorGradeShader = {
  name: 'ColorGradeShader',
  uniforms: {
    tDiffuse: { value: null as THREE.Texture | null },
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uSaturation: { value: 1.20 },
    uContrast: { value: 1.14 },
    uVignette: { value: 0.34 },
    uGrain: { value: 0.028 }
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec2 uResolution;
    uniform float uSaturation;
    uniform float uContrast;
    uniform float uVignette;
    uniform float uGrain;
    varying vec2 vUv;

    float hash21(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    void main() {
      vec3 color = texture2D(tDiffuse, vUv).rgb;
      float luma = dot(color, vec3(0.299, 0.587, 0.114));

      color = mix(vec3(luma), color, uSaturation);
      color = (color - 0.5) * uContrast + 0.5;

      // Vùng sáng ngả vàng son, vùng tối ngả lam ngọc.
      color += vec3(0.042, 0.018, -0.014) * smoothstep(0.45, 1.0, luma);
      color += vec3(-0.010, 0.003, 0.018) * (1.0 - smoothstep(0.0, 0.45, luma));

      vec2 q = vUv - 0.5;
      q.x *= uResolution.x / max(uResolution.y, 1.0);
      color *= 1.0 - uVignette * smoothstep(0.35, 1.05, length(q));

      float grain = hash21(vUv * uResolution + fract(uTime) * 91.7) - 0.5;
      color += grain * uGrain * (0.55 + 0.45 * (1.0 - luma));

      gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
    }
  `
};

/** Owns the HDR renderer, MSAA composer and the golden-hour post-processing stack. */
export class RendererManager {
  public readonly renderer: THREE.WebGLRenderer;
  public readonly composer: EffectComposer;
  public readonly bloomPass: UnrealBloomPass;
  public readonly godRaysPass: ShaderPass;
  public readonly gradePass: ShaderPass;
  public readonly outputPass: OutputPass;

  private readonly scene: THREE.Scene;
  private readonly camera: THREE.PerspectiveCamera;
  private readonly sunWorld = new THREE.Vector3();
  private readonly cameraDirection = new THREE.Vector3();
  private postProcessingEnabled: boolean;

  public constructor(
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    container: HTMLElement,
    options: RendererManagerOptions = {}
  ) {
    this.scene = scene;
    this.camera = camera;
    this.postProcessingEnabled = options.enablePostProcessing ?? true;

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance'
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    this.renderer.setSize(width, height);
    container.appendChild(this.renderer.domElement);

    // Khung MSAA half-float: giữ HDR cho bloom và khử răng cưa cho cảnh low-poly.
    const renderTarget = new THREE.WebGLRenderTarget(width, height, {
      type: THREE.HalfFloatType,
      samples: 4
    });
    this.composer = new EffectComposer(this.renderer, renderTarget);
    this.composer.setPixelRatio(this.renderer.getPixelRatio());
    this.composer.setSize(width, height);

    this.composer.addPass(new RenderPass(this.scene, this.camera));

    this.godRaysPass = new ShaderPass(GodRaysShader);
    this.godRaysPass.uniforms.uIntensity.value = options.godRayStrength ?? 0.55;
    this.composer.addPass(this.godRaysPass);

    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      options.bloomStrength ?? 0.30,
      options.bloomRadius ?? 0.55,
      options.bloomThreshold ?? 1.55
    );
    this.composer.addPass(this.bloomPass);

    // OutputPass chuyển HDR -> ACES -> sRGB; grade chạy trên ảnh LDR đã hiển thị.
    this.outputPass = new OutputPass();
    this.composer.addPass(this.outputPass);

    this.gradePass = new ShaderPass(ColorGradeShader);
    this.gradePass.uniforms.uResolution.value.set(width * this.renderer.getPixelRatio(), height * this.renderer.getPixelRatio());
    this.composer.addPass(this.gradePass);
  }

  /** Cập nhật vị trí mặt trời trên màn hình để tia nắng bám đúng nguồn sáng. */
  public updateSun(sunDirection: THREE.Vector3): void {
    this.camera.getWorldDirection(this.cameraDirection);
    const facing = this.cameraDirection.dot(sunDirection);
    if (facing <= 0.02) {
      this.godRaysPass.uniforms.uEnabled.value = 0;
      return;
    }

    this.sunWorld.copy(this.camera.position).addScaledVector(sunDirection, 420).project(this.camera);
    const onScreen = this.sunWorld.z < 1 && Math.abs(this.sunWorld.x) < 1.5 && Math.abs(this.sunWorld.y) < 1.5;
    this.godRaysPass.uniforms.uEnabled.value = onScreen ? 1 : 0;
    this.godRaysPass.uniforms.uSunScreen.value.set(
      this.sunWorld.x * 0.5 + 0.5,
      this.sunWorld.y * 0.5 + 0.5
    );
  }

  public setPostProcessingEnabled(enabled: boolean): void {
    this.postProcessingEnabled = enabled;
  }

  public resize(width: number, height: number, pixelRatio = Math.min(window.devicePixelRatio, 2)): void {
    this.renderer.setPixelRatio(pixelRatio);
    this.renderer.setSize(width, height, false);
    this.composer.setPixelRatio(pixelRatio);
    this.composer.setSize(width, height);
    this.gradePass.uniforms.uResolution.value.set(width * pixelRatio, height * pixelRatio);
  }

  public render(elapsed: number): void {
    this.gradePass.uniforms.uTime.value = elapsed;
    if (this.postProcessingEnabled) {
      this.composer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }

  public dispose(): void {
    this.composer.dispose();
    this.bloomPass.dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}

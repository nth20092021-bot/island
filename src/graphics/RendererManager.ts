import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js';
import { BokehPass } from 'three/addons/postprocessing/BokehPass.js';

export interface RendererManagerOptions {
  bloomStrength?: number;
  bloomRadius?: number;
  bloomThreshold?: number;
  enablePostProcessing?: boolean;
}

/** Owns the HDR-friendly renderer and the high-end low-poly post-processing stack. */
export class RendererManager {
  public readonly renderer: THREE.WebGLRenderer;
  public readonly composer: EffectComposer;
  public readonly bloomPass: UnrealBloomPass;
  public readonly ssaoPass: SSAOPass;
  public readonly bokehPass: BokehPass;

  private readonly scene: THREE.Scene;
  private readonly camera: THREE.PerspectiveCamera;
  private readonly renderPass: RenderPass;
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
    this.renderer.toneMappingExposure = 1.12;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(container.clientWidth || window.innerWidth, container.clientHeight || window.innerHeight);
    container.appendChild(this.renderer.domElement);

    this.composer = new EffectComposer(this.renderer);
    this.renderPass = new RenderPass(scene, camera);
    this.composer.addPass(this.renderPass);

    const size = new THREE.Vector2();
    this.renderer.getSize(size);
    this.bloomPass = new UnrealBloomPass(
      size,
      options.bloomStrength ?? 1.35,
      options.bloomRadius ?? 0.65,
      options.bloomThreshold ?? 0.72
    );
    this.composer.addPass(this.bloomPass);

    this.ssaoPass = new SSAOPass(scene, camera, size.x, size.y);
    this.ssaoPass.kernelRadius = 12;
    this.ssaoPass.minDistance = 0.001;
    this.ssaoPass.maxDistance = 0.18;
    this.ssaoPass.output = SSAOPass.OUTPUT.Default;
    this.composer.addPass(this.ssaoPass);

    this.bokehPass = new BokehPass(scene, camera, {
      focus: 28,
      aperture: 0.00012,
      maxblur: 0.012
    });
    this.composer.addPass(this.bokehPass);
  }

  public setDepthOfField(enabled: boolean, focusDistance?: number): void {
    this.bokehPass.enabled = enabled;
    if (focusDistance !== undefined) {
      const focusUniform = (this.bokehPass.uniforms as { focus?: { value: number } }).focus;
      if (focusUniform) {
        focusUniform.value = focusDistance;
      }
    }
  }

  public setPostProcessingEnabled(enabled: boolean): void {
    this.postProcessingEnabled = enabled;
  }

  public resize(width: number, height: number, pixelRatio = Math.min(window.devicePixelRatio, 2)): void {
    this.renderer.setPixelRatio(pixelRatio);
    this.renderer.setSize(width, height, false);
    this.composer.setSize(width, height);
  }

  public render(): void {
    if (this.postProcessingEnabled) {
      this.composer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }

  public dispose(): void {
    this.composer.dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}
/**
 * Shaders cho dòng suối mát và thác nước nhiệt đới (thay thế dung nham cũ)
 */
export const streamVertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vWorld;
  uniform float uTime;

  void main() {
    vUv = uv;
    vec3 p = position;
    // Dòng nước chảy xiết nhấp nhô
    p.z += sin(p.x * 2.5 + uTime * 3.5) * 0.04;
    vec4 w = modelMatrix * vec4(p, 1.0);
    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`;

export const streamFragmentShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vWorld;
  uniform float uTime;

  void main() {
    float flow = vUv.y * 14.0 - uTime * 3.0;
    float ribbons = sin(flow + sin(vUv.x * 18.0 + uTime) * 1.4);
    float sparkle = sin(flow * 2.7 - vUv.x * 28.0) * sin(vUv.x * 12.0 + uTime * 1.5);
    float foam = smoothstep(0.28, 0.85, ribbons * 0.5 + sparkle * 0.25 + 0.5);
    float banks = smoothstep(0.72, 0.98, abs(vUv.x - 0.5) * 2.0);
    vec3 color = mix(vec3(0.055, 0.42, 0.53), vec3(0.79, 0.96, 0.94), foam * 0.72 + banks * 0.16);
    gl_FragColor = vec4(color, 0.91);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

// Tương thích ngược nếu còn import cũ
export const lavaVertexShader = streamVertexShader;
export const lavaFragmentShader = streamFragmentShader;

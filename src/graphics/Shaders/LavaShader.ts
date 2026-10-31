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
    // Dòng suối trong vắt với bọt nước trắng xoá chảy xiết
    float flow = fract(vUv.y * 3.5 - uTime * 1.8);
    float foam = smoothstep(0.4, 0.85, sin(vUv.x * 16.0 + flow * 12.0) * 0.5 + 0.5);

    vec3 waterClean = vec3(0.12, 0.88, 0.82); // Xanh ngọc suối nguồn
    vec3 foamWhite = vec3(0.95, 1.0, 1.0);     // Bọt thác trắng xoá

    vec3 color = mix(waterClean, foamWhite, foam * 0.55);
    gl_FragColor = vec4(color, 0.88);
  }
`;

// Tương thích ngược nếu còn import cũ
export const lavaVertexShader = streamVertexShader;
export const lavaFragmentShader = streamFragmentShader;

/**
 * Shader mặt biển và hồ nước trên đỉnh.
 * uPool: 0 = biển (sóng dài + bọt mép bờ không đều), 1 = hồ tĩnh (gợn nhỏ, phản chiếu trời).
 */
export const waterVertexShader = /* glsl */ `
  varying vec3 vWorld;
  varying vec2 vUv;
  uniform float uTime;

  void main() {
    vUv = uv;
    vec4 w = modelMatrix * vec4(position, 1.0);
    // Sóng lừng chỉ nhìn thấy ở vòng ngoài; phần trong được giữ phẳng để không hở mép.
    float rim = smoothstep(120.0, 260.0, length(w.xz));
    w.y += sin(w.x * 0.055 + uTime * 0.8) * cos(w.z * 0.048 - uTime * 0.62) * 0.55 * rim;
    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`;

export const waterFragmentShader = /* glsl */ `
  varying vec3 vWorld;
  varying vec2 vUv;
  uniform float uTime;
  uniform float uPool;
  uniform vec3 uSunDirection;

  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x),
               mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x), u.y);
  }

  float fbm(vec2 p) {
    float value = 0.0, amplitude = 0.5;
    for (int i = 0; i < 4; i++) {
      value += amplitude * vnoise(p);
      p = p * 2.11 + 5.2;
      amplitude *= 0.5;
    }
    return value;
  }

  // Ba lớp sóng chồng nhau theo hướng lệch nhau -> gợn trải dài, không còn chấm tròn đều tăm tắp.
  float waveField(vec2 q, float t) {
    float swell = sin(q.x * 0.052 + t * 0.85) * 0.62
                + sin((q.x * 0.031 - q.y * 0.046) + t * 0.6) * 0.55;
    float mid = sin((q.x * 0.12 + q.y * 0.09) - t * 1.5 + swell * 0.9) * 0.42;
    float chop = fbm(q * 0.16 + vec2(t * 0.06, -t * 0.045)) * 1.9;
    return swell + mid + chop;
  }

  void main() {
    float t = uTime * mix(1.0, 0.35, uPool);
    vec2 q = vWorld.xz;

    float e = 1.5;
    float h0 = waveField(q, t);
    float hx = waveField(q + vec2(e, 0.0), t);
    float hy = waveField(q + vec2(0.0, e), t);
    float steep = mix(0.30, 0.08, uPool);
    vec3 normal = normalize(vec3(-(hx - h0) / e * steep, 1.0, -(hy - h0) / e * steep));

    float dist = length(q);
    float depth = smoothstep(112.0, 235.0, dist);
    vec3 shallow = vec3(0.10, 0.60, 0.62);
    vec3 deep = vec3(0.025, 0.185, 0.40);
    vec3 color = mix(shallow, deep, depth);
    color = mix(color, vec3(0.06, 0.42, 0.50), uPool * 0.8);
    color *= 0.92 + smoothstep(-1.0, 1.8, h0) * 0.16;

    // Đường bọt mép bờ bám theo hình dạng thật của hòn đảo và thở theo nhịp sóng vỗ.
    float angle = atan(q.y, q.x);
    float shore = 110.0 + sin(angle * 5.0) * 2.6 + cos(angle * 11.0 + 1.7) * 1.4;
    float runup = (dist - shore) - sin(t * 1.1 + angle * 3.0) * 1.7;
    float foam = (1.0 - smoothstep(0.3, 3.8, abs(runup)))
               * (0.5 + fbm(q * 0.11 + vec2(t * 0.22, -t * 0.17)));
    foam = clamp(foam, 0.0, 1.0) * (1.0 - uPool);
    float whitecap = smoothstep(2.35, 2.95, h0) * depth * 0.42 * (1.0 - uPool);
    color = mix(color, vec3(0.90, 0.97, 0.97), max(foam, whitecap) * 0.8);

    vec3 viewDir = normalize(cameraPosition - vWorld);
    float fresnel = pow(1.0 - abs(dot(normal, viewDir)), 3.2);
    color = mix(color, vec3(0.60, 0.79, 0.92), fresnel * mix(0.30, 0.45, uPool));
    float glint = pow(max(dot(reflect(-normalize(uSunDirection), normal), viewDir), 0.0), 120.0);
    color += vec3(1.0, 0.93, 0.78) * glint * mix(0.55, 0.35, uPool) * (1.0 - max(foam, whitecap));

    // Sương mù khí quyển: mặt biển nhạt dần rồi hòa đúng sắc chân trời của sky shader.
    color = mix(color, vec3(0.62, 0.78, 0.92), smoothstep(150.0, 430.0, dist) * (1.0 - uPool));

    gl_FragColor = vec4(color, mix(1.0, 0.9, uPool));
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

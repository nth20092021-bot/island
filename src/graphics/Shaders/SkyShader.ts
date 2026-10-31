/** Màu sương mù khung cảnh nên khớp với sắc chân trời của sky shader. */
export const SKY_HORIZON_FOG = 0xc8d7e1;

export const skyVertexShader = /* glsl */ `
  varying vec3 vDirection;
  void main() {
    vDirection = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const noiseGlsl = /* glsl */ `
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
      p = p * 2.07 + 11.3;
      amplitude *= 0.5;
    }
    return value;
  }
`;

/**
 * Bầu trời ban ngày: gradient tán xạ khí quyển + đĩa mặt trời + quầng sáng + dải mây mờ chân trời.
 */
export const skyFragmentShader = /* glsl */ `
  varying vec3 vDirection;
  uniform vec3 uSunDirection;
  uniform float uTime;
  ${noiseGlsl}

  void main() {
    vec3 dir = normalize(vDirection);
    vec3 sun = normalize(uSunDirection);
    float up = clamp(dir.y, 0.0, 1.0);
    float cosSun = dot(dir, sun);
    float sunSide = max(cosSun, 0.0);

    vec3 zenith = vec3(0.045, 0.185, 0.58);
    vec3 midSky = vec3(0.165, 0.375, 0.79);
    // Sắc chân trời dùng chung với lớp sương của mặt biển -> không còn đường nối cứng.
    vec3 horizon = vec3(0.62, 0.78, 0.92);

    // Gradient cong: đổi màu mạnh trong ~25 độ đầu rồi mới chùng dần, giống tán xạ Rayleigh thật.
    vec3 sky = mix(horizon, midSky, smoothstep(0.015, 0.42, up));
    sky = mix(sky, zenith, smoothstep(0.28, 0.95, up));

    // Ánh sáng mặt trời bị khí quyển tán xạ: ấm dần về phía mặt trời, nhạt dần lên đỉnh trời.
    sky += vec3(0.42, 0.26, 0.10) * pow(sunSide, 4.0) * (1.0 - up) * 0.22;
    sky += vec3(1.0, 0.87, 0.66) * pow(sunSide, 10.0) * 0.10;
    sky += vec3(1.0, 0.94, 0.80) * pow(sunSide, 160.0) * 0.42;
    sky += vec3(1.35, 1.28, 1.12) * smoothstep(0.99968, 0.99982, cosSun);

    // Dải mây ti mỏng bám sát chân trời, trôi chậm theo thời gian.
    float band = smoothstep(-0.01, 0.05, dir.y) * (1.0 - smoothstep(0.09, 0.40, dir.y));
    if (band > 0.001) {
      vec2 cuv = dir.xz / max(dir.y, 0.05) * 0.42;
      float body = fbm(cuv * 1.25 + vec2(uTime * 0.0035, uTime * 0.0018));
      float detail = fbm(cuv * 3.4 - vec2(uTime * 0.006, uTime * 0.0025));
      float cover = smoothstep(0.50, 0.74, body * 0.75 + detail * 0.28);
      vec3 tint = mix(vec3(0.72, 0.78, 0.86), vec3(1.02, 1.0, 0.98), detail);
      sky = mix(sky, tint, cover * band * 0.9);
    }

    // Lấy nét màu (dither) để loại bỏ hiện tượng dải gradient bậc thang.
    sky += (hash21(gl_FragCoord.xy) - 0.5) * 0.008;

    gl_FragColor = vec4(sky, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

/**
 * Mây tích (cumulus) dạng cụm quả cầu mềm: mờ dần ở viền để không còn đường nét cứng.
 */
export const cloudVertexShader = /* glsl */ `
  uniform float uTime;
  varying vec3 vNormalWorld;
  varying vec3 vWorld;

  void main() {
    vec4 local = vec4(position, 1.0);
    vec3 localNormal = normal;
    #ifdef USE_INSTANCING
      local = instanceMatrix * local;
      localNormal = mat3(instanceMatrix) * localNormal;
    #endif
    vec4 w = modelMatrix * local;
    w.y += sin(uTime * 0.16 + w.x * 0.045 + w.z * 0.03) * 0.4;
    vWorld = w.xyz;
    vNormalWorld = normalize(mat3(modelMatrix) * localNormal);
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`;

export const cloudFragmentShader = /* glsl */ `
  varying vec3 vNormalWorld;
  varying vec3 vWorld;
  uniform vec3 uSunDirection;

  void main() {
    vec3 n = normalize(vNormalWorld);
    vec3 viewDir = normalize(cameraPosition - vWorld);
    float sun = max(dot(n, normalize(uSunDirection)), 0.0);

    vec3 color = mix(vec3(0.74, 0.80, 0.90), vec3(1.06, 1.04, 1.0), sun);
    color *= mix(0.70, 1.0, smoothstep(-0.45, 0.45, n.y));

    // Viền mỗi khối cầu tan dần vào nền trời -> cụm mây mềm như thật.
    float rim = 1.0 - abs(dot(n, viewDir));
    float alpha = 0.96 * (1.0 - smoothstep(0.30, 0.92, rim));
    alpha *= mix(0.72, 1.0, sun);

    gl_FragColor = vec4(color, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

/** Màu sương mù khung cảnh nên khớp với sắc chân trời của sky shader. */
export const SKY_HORIZON_FOG = 0xc09a72;

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
 * Bầu trời hoàng hôn Đại Việt: trên cao chàm ngọc, giữa trời xanh mực,
 * chân trời vàng son; mặt trời thấp, quầng tán xạ ấm, núi xa lam sơn nhiều lớp.
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
    float azimuth = atan(dir.z, dir.x);
    float sunAzimuth = atan(sun.z, sun.x);

    vec3 zenith = vec3(0.012, 0.028, 0.100);
    vec3 upperSky = vec3(0.055, 0.115, 0.300);
    vec3 horizonWarm = vec3(0.700, 0.300, 0.085);
    vec3 horizonCool = vec3(0.075, 0.050, 0.060);

    // Chân trời đổi màu theo phương vị: phía mặt trời là vàng son, phía khuất là tím lam.
    vec3 horizon = mix(horizonCool, horizonWarm, pow(sunSide, 1.3));

    // Gradient dốc gần chân trời: vàng son tích tụ ở dải thấp rồi mới chùng lên chàm.
    vec3 sky = mix(horizon, upperSky, smoothstep(0.06, 0.45, up));
    sky = mix(sky, zenith, smoothstep(0.30, 0.90, up));

    // Dải mây ti bám chân trời, nhuộm ấm theo hướng mặt trời.
    float band = smoothstep(-0.005, 0.04, dir.y) * (1.0 - smoothstep(0.09, 0.32, dir.y));
    if (band > 0.001) {
      vec2 cuv = dir.xz / max(dir.y, 0.06) * 0.40;
      float body = fbm(cuv * 1.1 + vec2(uTime * 0.0035, uTime * 0.0012));
      float detail = fbm(cuv * 3.0 - vec2(uTime * 0.006, uTime * 0.002));
      float cover = smoothstep(0.56, 0.80, body * 0.78 + detail * 0.26);
      vec3 tint = mix(vec3(0.24, 0.17, 0.19), vec3(0.72, 0.42, 0.20), detail);
      tint = mix(tint, vec3(1.00, 0.62, 0.26), pow(sunSide, 3.0) * 0.45);
      sky = mix(sky, tint, cover * band * 0.40);
    }

    // Núi xa lam sơn: hai lớp silhouette ở chân trời, gợn theo phương vị.
    // Dùng toạ độ vòng tròn để đường chân trời không bị seam tại ±π.
    vec2 azDir = vec2(cos(azimuth), sin(azimuth));
    float rangeMask = smoothstep(0.28, 0.72, fbm(azDir * 1.6 + vec2(2.7, 0.8)));
    float ridgeFar = (0.008 + fbm(azDir * 2.6 + vec2(4.1, 2.3)) * 0.020) * (0.30 + 0.70 * rangeMask);
    float ridgeNear = (0.004 + fbm(azDir * 4.3 + vec2(9.2, 6.7)) * 0.010) * (0.22 + 0.78 * rangeMask);
    float aboveHorizon = step(-0.015, dir.y);

    float farMask = (1.0 - smoothstep(ridgeFar - 0.004, ridgeFar, dir.y)) * aboveHorizon;
    if (farMask > 0.001) {
      float h = clamp(dir.y / max(ridgeFar, 0.001), 0.0, 1.0);
      vec3 farColor = mix(vec3(0.210, 0.125, 0.105), vec3(0.075, 0.080, 0.130), h);
      farColor = mix(farColor, vec3(0.78, 0.40, 0.15), pow(sunSide, 2.0) * 0.45);
      // Phối sương khí quyển: núi xa không còn là dải đen cứng mà mờ dần vào nền trời.
      farColor = mix(farColor, sky, 0.40);
      sky = mix(sky, farColor, farMask * 0.82);
    }

    float nearMask = (1.0 - smoothstep(ridgeNear - 0.003, ridgeNear, dir.y)) * aboveHorizon;
    if (nearMask > 0.001) {
      float h = clamp(dir.y / max(ridgeNear, 0.001), 0.0, 1.0);
      vec3 nearColor = mix(vec3(0.120, 0.072, 0.065), vec3(0.032, 0.040, 0.070), h);
      nearColor = mix(nearColor, vec3(0.58, 0.28, 0.10), pow(sunSide, 4.0) * 0.30);
      nearColor = mix(nearColor, sky, 0.20);
      sky = mix(sky, nearColor, nearMask * 0.88);
    }

    // Tia nắng xuyên mây (crepuscular rays) tỏa ra từ mặt trời thấp.
    float azDelta = azimuth - sunAzimuth;
    float rayField = fbm(vec2(azDelta * 5.5 + 3.1, up * 1.6 + uTime * 0.004));
    float rayBand = pow(sunSide, 6.0) * smoothstep(0.0, 0.035, up) * (1.0 - smoothstep(0.14, 0.46, up));
    float shafts = smoothstep(0.56, 0.86, rayField) * rayBand;
    sky += vec3(1.0, 0.60, 0.26) * shafts * 0.20;

    // Tán xạ quanh mặt trời + đĩa mặt trời HDR để bloom bắt được.
    sky += vec3(0.50, 0.24, 0.07) * pow(sunSide, 3.0) * (1.0 - up * 0.65) * 0.30;
    sky += vec3(1.05, 0.60, 0.22) * pow(sunSide, 26.0) * 0.42;
    sky += vec3(4.20, 3.00, 1.80) * smoothstep(0.99955, 0.99985, cosSun);
    sky += vec3(1.50, 0.92, 0.48) * pow(sunSide, 160.0) * 0.50;

    // Lấy nét màu (dither) để loại bỏ hiện tượng dải gradient bậc thang.
    sky += (hash21(gl_FragCoord.xy) - 0.5) * 0.007;

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
    vec3 sunDir = normalize(uSunDirection);
    float sun = max(dot(n, sunDir), 0.0);

    // Mây ngà: bóng phía khuất chuyển tím than, đỉnh đón nắng chuyển vàng son.
    vec3 shade = vec3(0.24, 0.17, 0.18);
    vec3 lit = vec3(1.00, 0.74, 0.50);
    vec3 color = mix(shade, lit, smoothstep(-0.20, 0.68, sun));
    color *= mix(0.78, 1.02, smoothstep(-0.45, 0.45, n.y));
    color += vec3(0.30, 0.14, 0.04) * pow(sun, 4.0);

    // Viền mỗi khối cầu tan dần vào nền trời -> cụm mây mềm như thật.
    float rim = 1.0 - abs(dot(n, viewDir));
    float alpha = 0.78 * (1.0 - smoothstep(0.26, 0.88, rim));
    alpha *= mix(0.64, 1.0, sun);

    gl_FragColor = vec4(color, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

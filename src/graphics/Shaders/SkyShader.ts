export const skyVertexShader = /* glsl */ `
  varying vec3 vWorldPosition;
  varying vec3 vDirection;

  void main() {
    vDirection = position;
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPos.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`;

export const skyFragmentShader = /* glsl */ `
  varying vec3 vWorldPosition;
  varying vec3 vDirection;

  uniform float uTime;
  uniform float uDayNight; // 0.0 = Ngày rực rỡ (Ảnh 1), 1.0 = Đêm huyền bí (Ảnh 2)
  uniform vec3 uSunDirection;

  // Thuật toán hash số ngẫu nhiên cho sao & mây
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  // 2D Noise
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  // Fractal Brownian Motion (FBM) cho mây anime & dải ngân hà
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p = rot * p * 2.1 + vec2(1.5, 3.2);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 dir = normalize(vDirection);
    float h = dir.y; // Độ cao từ -1 đến 1

    // ==========================================
    // 1. BẦU TRỜI BAN NGÀY (DAY SKY - BÁM SÁT ẢNH 1)
    // ==========================================
    // Dải màu gradient Anime trong vắt: từ xanh dương thắm trên đỉnh tới xanh lơ và trắng ngọc ở chân trời
    vec3 dayZenith = vec3(0.0, 0.588, 0.91);    // #0096e8 - Xanh thiên thanh đậm đỉnh trời
    vec3 dayMid    = vec3(0.14, 0.71, 0.96);    // #24b6f6 - Xanh biển nhiệt đới rực rỡ
    vec3 dayLow    = vec3(0.42, 0.88, 0.99);    // #6ce0fd - Xanh ngọc sáng
    vec3 dayHorizon= vec3(0.85, 0.98, 1.0);     // #d9faff - Trắng hơi ánh xanh chân trời

    float dayH = clamp(h, 0.0, 1.0);
    vec3 daySky = mix(dayHorizon, dayLow, smoothstep(0.0, 0.18, dayH));
    daySky = mix(daySky, dayMid, smoothstep(0.18, 0.55, dayH));
    daySky = mix(daySky, dayZenith, smoothstep(0.55, 0.95, dayH));

    // Mặt trời ban ngày tỏa sáng
    float sunDot = max(dot(dir, normalize(uSunDirection)), 0.0);
    daySky += vec3(1.0, 0.95, 0.85) * pow(sunDot, 64.0) * 0.45;
    daySky += vec3(1.0, 0.85, 0.65) * pow(sunDot, 12.0) * 0.15;

    // Mây Anime trắng bồng bềnh phong cách Ghibli (Ảnh 1)
    if (h > 0.02) {
      vec2 cloudUV = dir.xz / (h + 0.18) * 0.65 + vec2(uTime * 0.008, uTime * 0.003);
      float cDensity = fbm(cloudUV * 2.2);
      float cShape = smoothstep(0.42, 0.72, cDensity);
      
      // Bóng đổ và viền sáng trên mây anime
      vec3 cloudHighlight = vec3(1.0, 1.0, 1.0);
      vec3 cloudShadow = vec3(0.78, 0.88, 0.95);
      vec3 cloudColor = mix(cloudShadow, cloudHighlight, smoothstep(0.48, 0.82, cDensity));

      float cloudAlpha = cShape * smoothstep(0.02, 0.16, h) * smoothstep(0.85, 0.45, h);
      daySky = mix(daySky, cloudColor, cloudAlpha * 0.92);
    }

    // ==========================================
    // 2. BẦU TRỜI BAN ĐÊM (NIGHT SKY - BÁM SÁT ẢNH 2)
    // ==========================================
    // Dải màu đêm sâu thẳm: Midnight Navy -> Indigo -> Chân trời ánh hoàng hôn mờ
    vec3 nightZenith  = vec3(0.015, 0.03, 0.08); // #040814 - Đêm đen huyền bí
    vec3 nightMid     = vec3(0.04, 0.09, 0.20);  // #0a1733 - Lam chàm đậm
    vec3 nightLow     = vec3(0.07, 0.16, 0.28);  // #122947 - Xanh bóng đêm chân mây
    vec3 nightHorizon = vec3(0.12, 0.24, 0.35);  // #1f3d59 - Hơi ửng lam xám chân trời
    vec3 nightWarmGlow= vec3(0.38, 0.20, 0.12);  // Ánh hoàng hôn ấm áp sót lại ở chân trời (như góc phải Ảnh 2)

    float nightH = clamp(h, 0.0, 1.0);
    vec3 nightSky = mix(nightHorizon, nightLow, smoothstep(0.0, 0.22, nightH));
    nightSky = mix(nightSky, nightMid, smoothstep(0.22, 0.60, nightH));
    nightSky = mix(nightSky, nightZenith, smoothstep(0.60, 0.95, nightH));

    // Thêm ánh cam hoàng hôn mờ nhẹ sát mép chân trời hướng tây (Ảnh 2)
    float horizonGlow = smoothstep(0.18, -0.02, h) * (0.5 + 0.5 * dir.x);
    nightSky = mix(nightSky, nightWarmGlow, horizonGlow * 0.42);

    // Màn sao lấp lánh dày đặc (Twinkling Starfield)
    if (h > 0.04) {
      vec2 starCoord = dir.xz / (h + 0.08) * 120.0;
      float starGrid = hash(floor(starCoord));
      float starBrightness = pow(starGrid, 24.0); // Chỉ các điểm cực đại mới thành ngôi sao sắc nét
      
      // Hiệu ứng nhấp nháy theo thời gian
      float twinkle = 0.65 + 0.35 * sin(uTime * 3.5 + starGrid * 62.83);
      vec3 starColor = mix(vec3(0.7, 0.85, 1.0), vec3(1.0, 0.95, 0.8), starGrid);
      nightSky += starColor * starBrightness * twinkle * 1.8 * smoothstep(0.04, 0.25, h);

      // Cụm bụi sao & Tinh vân xanh biếc (Cosmic Nebula Dust)
      vec2 nebulaUV = dir.xz / (h + 0.22) * 1.2 + vec2(0.3, 0.7);
      float nebula = fbm(nebulaUV * 1.8);
      vec3 nebulaColor = mix(vec3(0.08, 0.22, 0.45), vec3(0.18, 0.42, 0.65), nebula);
      nightSky += nebulaColor * pow(nebula, 2.2) * 0.45 * smoothstep(0.1, 0.5, h);

      // Đám mây đen bóng mờ chân trời ban đêm (Silhouetted Night Clouds - Ảnh 2)
      vec2 nCloudUV = dir.xz / (h + 0.12) * 0.75 + vec2(uTime * 0.003, 0.0);
      float nCloudDensity = fbm(nCloudUV * 2.8);
      float nCloudMask = smoothstep(0.48, 0.74, nCloudDensity) * smoothstep(0.35, 0.05, h) * smoothstep(-0.02, 0.08, h);
      vec3 nCloudColor = vec3(0.02, 0.04, 0.09); // Mây đêm đen tối hơn nền trời
      nightSky = mix(nightSky, nCloudColor, nCloudMask * 0.88);
    }

    // ==========================================
    // 3. HÒA TRỘN NGÀY VÀ ĐÊM THEO TIẾN TRÌNH (uDayNight)
    // ==========================================
    // Áp dụng đường cong chuyển tiếp mượt mà
    float t = smoothstep(0.0, 1.0, uDayNight);
    vec3 finalColor = mix(daySky, nightSky, t);

    gl_FragColor = vec4(finalColor, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

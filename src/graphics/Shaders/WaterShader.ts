export const waterVertexShader = /* glsl */ `
  varying vec3 vWorld;
  uniform float uTime;

  void main() {
    vec3 p = position;
    vec4 w = modelMatrix * vec4(p, 1.0);
    // Sóng nước tự nhiên dập dềnh
    w.y += sin(w.x * 0.3 + uTime * 1.3) * 0.07 + cos(w.z * 0.38 - uTime) * 0.05;
    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`;

export const waterFragmentShader = /* glsl */ `
  varying vec3 vWorld;
  uniform float uTime;
  uniform float uDayNight; // 0.0 = Ngày, 1.0 = Đêm

  void main() {
    float dist = length(vWorld.xz);
    float isPool = step(10.0, vWorld.y);
    float depth = smoothstep(105.0, 350.0, dist);

    // 1. Màu nước ban ngày (Ảnh 1: Biển ngọc lam nhiệt đới)
    vec3 dayColor = mix(vec3(0.09, 0.67, 0.67), vec3(0.025, 0.22, 0.44), depth);
    dayColor = mix(dayColor, vec3(0.07, 0.52, 0.63), isPool * 0.7);

    // 2. Màu nước ban đêm (Ảnh 2: Biển đêm đen sâu thẳm ánh trăng)
    vec3 nightColor = mix(vec3(0.018, 0.055, 0.12), vec3(0.006, 0.018, 0.05), depth);
    nightColor = mix(nightColor, vec3(0.012, 0.04, 0.08), isPool * 0.7);

    float t = clamp(uDayNight, 0.0, 1.0);
    vec3 color = mix(dayColor, nightColor, t);

    // Gợn sóng lăn tăn
    float ripples = sin(vWorld.x * 0.82 + uTime * 1.5 + sin(vWorld.z * 0.32))
                  * sin(vWorld.z * 0.66 - uTime * 1.2);
    vec3 rippleColor = mix(vec3(0.12, 0.23, 0.22), vec3(0.03, 0.08, 0.14), t);
    color += rippleColor * smoothstep(0.56, 0.94, ripples) * 0.5;

    // Bọt sóng vỗ bờ cát
    float edge = abs(dist - (110.0 + sin(vWorld.x * 0.24 + uTime) * 1.1 + cos(vWorld.z * 0.18 - uTime * 0.6) * 0.8));
    float foam = (1.0 - smoothstep(0.2, 1.55, edge)) * (0.72 + ripples * 0.2) * (1.0 - isPool);
    vec3 foamColor = mix(vec3(0.85, 0.97, 0.93), vec3(0.35, 0.48, 0.62), t);
    color = mix(color, foamColor, foam * 0.65);

    // Phản xạ Fresnel
    vec3 normal = normalize(vec3(-0.021 * cos(vWorld.x * 0.3 + uTime * 1.3), 1.0,
      0.019 * sin(vWorld.z * 0.38 - uTime)));
    vec3 viewDir = normalize(cameraPosition - vWorld);
    float fresnel = pow(1.0 - abs(dot(normal, viewDir)), 3.0);
    vec3 fresnelColor = mix(vec3(0.67, 0.83, 0.89), vec3(0.12, 0.22, 0.38), t);
    color = mix(color, fresnelColor, fresnel * 0.28);

    // Ánh lấp lánh phản chiếu mặt trời (ngày) hoặc ánh trăng bạc (đêm)
    float glint = pow(max(dot(reflect(-normalize(vec3(-0.45, 0.82, 0.37)), normal), viewDir), 0.0), 36.0);
    vec3 glintColor = mix(vec3(1.0, 0.87, 0.61), vec3(0.65, 0.85, 1.0), t);
    color += glintColor * glint * (mix(0.38, 0.25, t));

    gl_FragColor = vec4(color, isPool > 0.5 ? 0.88 : 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

/**
 * Shaders cho dòng suối mát, thác nước và hồ nước ngọt (thay thế dung nham cũ).
 * uFlowSpeed/uFoam/uInvert/uRadial cho phép cùng một shader dùng cho
 * suối nằm ngang, thác đứng và hồ xoáy tròn dưới chân thác.
 */
export const streamVertexShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vWorld;
  uniform float uTime;

  void main() {
    vUv = uv;
    vec3 p = position;
    // Mặt nước gợn nhẹ theo thời gian thay vì phẳng lì như tấm băng dính.
    p.y += sin(p.x * 1.7 + uTime * 2.1) * 0.03 + cos(p.z * 1.9 - uTime * 1.6) * 0.025;
    vec4 w = modelMatrix * vec4(p, 1.0);
    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`;

export const streamFragmentShader = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vWorld;
  uniform float uTime;
  uniform float uFlowSpeed;
  uniform float uFoam;
  uniform float uInvert;
  uniform float uRadial;
  uniform float uWhiteness;
  uniform float uSideFade;
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
      p = p * 2.03 + 7.7;
      amplitude *= 0.5;
    }
    return value;
  }

  // Trường cao độ mặt nước: gợn dài theo hạ lưu, nhiễu loạn ngang do xoáy đá.
  float waterField(vec2 p, float t) {
    float warp = fbm(vec2(p.x * 4.2 + 1.7, p.y * 2.4 - t * 0.55));
    float swells = sin(p.y * 15.0 - t * 2.4 + warp * 3.6 + p.x * 2.1);
    float chop = sin(p.y * 31.0 - t * 4.1 + p.x * 8.0 - warp * 2.2) * 0.45;
    float cross = sin(p.x * 11.0 + t * 0.9) * 0.3;
    return swells + chop + cross + warp * 1.5;
  }

  void main() {
    float t = uTime * uFlowSpeed;
    vec2 p = vec2(vUv.x, mix(vUv.y, 1.0 - vUv.y, uInvert));
    // Thác đứng là mesh duy nhất đặt uInvert = 1, nên p.y cũng chính là quãng nước đã rơi.
    float fall = uInvert;

    float e = 0.01;
    float h0 = waterField(p, t);
    float hx = waterField(p + vec2(e, 0.0), t);
    float hy = waterField(p + vec2(0.0, e), t);
    vec3 normal = normalize(vec3((hx - h0) / e * 0.045, 1.0, (hy - h0) / e * 0.045));

    // Bờ: chỉ dải ngoài cùng có bọt, trong lòng suối giữ màu nước để không thành dải băng trắng.
    float edge = mix(abs(vUv.x - 0.5) * 2.0, length(vUv - 0.5) * 2.0, uRadial);
    float bank = smoothstep(0.92, 1.14, edge + h0 * 0.04 - 0.06);
    float crest = smoothstep(1.25, 2.3, h0);
    float streak = fbm(vec2(p.x * 7.0, p.y * 3.0 - t * 0.8));
    float plunge = uRadial * (1.0 - smoothstep(0.02, 0.34, edge));

    // Tấm thác: các cột nước dựng chạy song song, càng rơi càng tơi thành bọt trắng.
    float filament = smoothstep(0.34, 0.76, fbm(vec2(vUv.x * 21.0, p.y * 1.3 - t * 0.45)));
    float aeration = mix(0.10, 1.0, smoothstep(0.0, 1.15, p.y + filament * 0.25));
    float veil = filament * aeration;

    float foam = clamp(bank * (0.30 + streak * 0.5) + crest * (0.14 + uFoam * 0.30)
                     + plunge * 0.34 + fall * veil * (0.30 + uFoam * 0.55), 0.0, 1.0);

    vec3 deep = vec3(0.022, 0.155, 0.195);
    vec3 mid = vec3(0.055, 0.33, 0.375);
    vec3 color = mix(deep, mid, smoothstep(-1.2, 1.8, h0));
    color = mix(color, vec3(0.14, 0.48, 0.50), uRadial * 0.6);
    // Thân thác chỉ trắng ở các cột bọt, phần giữa vẫn còn sắc ngọc để nhìn ra khối nước.
    color = mix(color, vec3(0.82, 0.93, 0.95), uWhiteness * (0.22 + streak * 0.22 + veil * 0.62));
    color = mix(color, vec3(0.90, 0.98, 0.98), foam * 0.8);

    vec3 viewDir = normalize(cameraPosition - vWorld);
    float fresnel = pow(1.0 - abs(dot(normal, viewDir)), 3.0);
    color = mix(color, vec3(0.63, 0.80, 0.91), fresnel * 0.26);
    float glint = pow(max(dot(reflect(-normalize(uSunDirection), normal), viewDir), 0.0), 80.0);
    color += vec3(1.0, 0.94, 0.80) * glint * 0.5 * (1.0 - foam);

    float alpha = mix(0.93, 0.985, 1.0 - bank) + foam * 0.015;
    // Vạt thác tan thành bụi nước: hai bên mép không còn là đường cắt thẳng của một tấm bảng.
    float sheet = smoothstep(1.04, 0.52, edge + (0.55 - filament) * 0.34);
    alpha *= mix(1.0, (0.62 + 0.34 * p.y) * sheet, uSideFade);
    gl_FragColor = vec4(color, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

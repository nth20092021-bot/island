export const foliageVertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uWind;
  uniform vec3 uColor;
  varying vec3 vColor;
  varying vec3 vNormal;
  varying float vFogDepth;

  void main() {
    vec3 p = position;

    // Use the instanced transform for a different wind phase on every tree.
    vec3 origin = vec3(0.0);
    #ifdef USE_INSTANCING
      origin = vec3(instanceMatrix[3].xyz);
    #endif
    float heightFactor = max(0.0, position.y + 0.5);
    float sway1 = sin(uTime * 1.2 + origin.x * 0.37 + origin.z * 0.19 + position.y * 0.6) * uWind * heightFactor;
    float sway2 = cos(uTime * 1.6 + origin.z * 0.27 + position.y) * uWind * 0.35 * heightFactor;
    p.x += sway1;
    p.z += sway2;

    vec4 localPos = vec4(p, 1.0);
    vec3 localNormal = normal;
    #ifdef USE_INSTANCING
      localPos = instanceMatrix * localPos;
      localNormal = mat3(instanceMatrix) * localNormal;
    #endif
    vec4 worldPos = modelMatrix * localPos;
    vec4 viewPos = viewMatrix * worldPos;
    vNormal = normalize(mat3(modelMatrix) * localNormal);
    vFogDepth = -viewPos.z;

    vColor = uColor;

    gl_Position = projectionMatrix * viewPos;
  }
`;

export const foliageFragmentShader = /* glsl */ `
  varying vec3 vColor;
  varying vec3 vNormal;
  varying float vFogDepth;
  uniform vec3 uSunDirection;
  uniform vec3 uFogColor;
  uniform float uFogDensity;

  void main() {
    vec3 n = normalize(vNormal);
    vec3 sun = normalize(uSunDirection);
    float diffuse = max(dot(n, sun), 0.0);
    float sky = clamp(n.y * 0.5 + 0.5, 0.0, 1.0);

    // Tán lá: bóng ngả lam ngọc, mặt đón nắng ngả vàng son.
    vec3 shadowTint = vColor * vec3(0.24, 0.33, 0.37);
    vec3 sunTint = vColor * vec3(1.20, 1.04, 0.76);
    vec3 color = mix(shadowTint, sunTint, diffuse * 0.84 + sky * 0.16);
    color += vColor * vec3(0.85, 0.52, 0.20) * pow(diffuse, 3.0) * 0.10;
    // Mặt dưới tán tối hẳn để khối lá tròn trịa thay vì một quả cầu phẳng.
    color *= 0.72 + 0.28 * smoothstep(-0.6, 0.7, n.y);

    // Sương ấm: cây ở xa tan vào chân trời thay vì đứng neon trên nền mờ.
    float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
    color = mix(color, uFogColor, fogFactor);

    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

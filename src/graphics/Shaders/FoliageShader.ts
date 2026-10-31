export const foliageVertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uWind;
  uniform vec3 uColor;
  varying vec3 vColor;
  varying vec3 vNormal;

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
    vNormal = normalize(mat3(modelMatrix) * localNormal);

    // Hiệu ứng ánh nắng nhiệt đới chiếu rọi lên ngọn lá (Sunlit Foliage Highlight)
    vColor = uColor;

    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`;

export const foliageFragmentShader = /* glsl */ `
  varying vec3 vColor;
  varying vec3 vNormal;

  void main() {
    float diffuse = max(dot(normalize(vNormal), normalize(vec3(-0.45, 0.82, 0.37))), 0.0);
    vec3 color = vColor * (0.55 + diffuse * 0.53);
    color = mix(color, color * vec3(1.15, 1.08, 0.84), diffuse * 0.24);
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

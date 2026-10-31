export const skyVertexShader = /* glsl */ `
  varying vec3 vDirection;
  void main() {
    vDirection = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const skyFragmentShader = /* glsl */ `
  varying vec3 vDirection;
  uniform vec3 uSunDirection;
  void main() {
    vec3 direction = normalize(vDirection);
    float height = direction.y;
    vec3 horizon = vec3(0.67, 0.83, 0.88);
    vec3 blue = vec3(0.24, 0.61, 0.86);
    vec3 zenith = vec3(0.065, 0.29, 0.63);
    vec3 color = mix(horizon, blue, smoothstep(-0.08, 0.42, height));
    color = mix(color, zenith, smoothstep(0.35, 0.95, height) * 0.65);
    float sun = max(dot(direction, normalize(uSunDirection)), 0.0);
    color += vec3(1.0, 0.69, 0.39) * pow(sun, 8.0) * 0.18;
    color += vec3(1.0, 0.88, 0.64) * pow(sun, 150.0) * 0.55;
    color += vec3(1.0, 0.96, 0.82) * pow(sun, 1800.0) * 1.1;
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;
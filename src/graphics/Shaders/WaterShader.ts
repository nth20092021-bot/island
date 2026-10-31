export const waterVertexShader = /* glsl */ `
  varying vec3 vWorld;
  uniform float uTime;

  void main() {
    vec3 p = position;
    vec4 w = modelMatrix * vec4(p, 1.0);
    // World coordinates keep waves aligned on the ocean and the summit pool.
    w.y += sin(w.x * 0.3 + uTime * 1.3) * 0.07 + cos(w.z * 0.38 - uTime) * 0.05;
    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`;

export const waterFragmentShader = /* glsl */ `
  varying vec3 vWorld;
  uniform float uTime;

  void main() {
    float dist = length(vWorld.xz);
    float isPool = step(10.0, vWorld.y);
    float depth = smoothstep(39.0, 155.0, dist);
    vec3 color = mix(vec3(0.09, 0.67, 0.67), vec3(0.025, 0.22, 0.44), depth);
    color = mix(color, vec3(0.07, 0.52, 0.63), isPool * 0.7);
    float ripples = sin(vWorld.x * 0.82 + uTime * 1.5 + sin(vWorld.z * 0.32))
                  * sin(vWorld.z * 0.66 - uTime * 1.2);
    color += vec3(0.12, 0.23, 0.22) * smoothstep(0.56, 0.94, ripples) * 0.5;
    // A moving shoreline ring breaks up the surf with smaller ripples.
    float edge = abs(dist - (43.4 + sin(vWorld.x * 0.24 + uTime) * 0.75 + cos(vWorld.z * 0.18 - uTime * 0.6) * 0.55));
    float foam = (1.0 - smoothstep(0.2, 1.55, edge)) * (0.72 + ripples * 0.2) * (1.0 - isPool);
    color = mix(color, vec3(0.85, 0.97, 0.93), foam * 0.7);
    vec3 normal = normalize(vec3(-0.021 * cos(vWorld.x * 0.3 + uTime * 1.3), 1.0,
      0.019 * sin(vWorld.z * 0.38 - uTime)));
    vec3 viewDir = normalize(cameraPosition - vWorld);
    float fresnel = pow(1.0 - abs(dot(normal, viewDir)), 3.0);
    color = mix(color, vec3(0.67, 0.83, 0.89), fresnel * 0.28);
    float glint = pow(max(dot(reflect(-normalize(vec3(-0.45, 0.82, 0.37)), normal), viewDir), 0.0), 36.0);
    color += vec3(1.0, 0.87, 0.61) * glint * 0.38;
    gl_FragColor = vec4(color, isPool > 0.5 ? 0.88 : 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;
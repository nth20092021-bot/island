/** One layout shared by terrain, chest placement and the overview camera. */
export const ISLAND_SCALE = 1.55;
export const ISLAND_HEIGHT_SCALE = 1.4;
export const ISLAND_SHORE_RADIUS = 70 * ISLAND_SCALE;

// Coordinates here are in unscaled terrain space. The stream flows into the south-east bay.
// Waypoints alternate sides of the valley so the channel meanders instead of cutting a straight trench.
export const RIVER_PATH: readonly [number, number][] = [
  [-18, 18], [-14, 24], [-6, 26], [1, 31], [0, 39],
  [8, 45], [18, 44], [26, 49], [31, 57], [40, 61]
];

/** Shared sun vector: sky shader, key light and water specular all read this. */
export const SUN_DIRECTION: readonly [number, number, number] = [-0.45, 0.82, 0.37];

export function riverDistance(x: number, z: number): number {
  let closest = Infinity;
  for (let i = 1; i < RIVER_PATH.length; i++) {
    const [ax, az] = RIVER_PATH[i - 1];
    const [bx, bz] = RIVER_PATH[i];
    const dx = bx - ax, dz = bz - az;
    const t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / (dx * dx + dz * dz)));
    closest = Math.min(closest, Math.hypot(x - ax - dx * t, z - az - dz * t));
  }
  return closest;
}
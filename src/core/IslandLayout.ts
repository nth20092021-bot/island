/** One layout shared by terrain, chest placement and the overview camera. */
export const ISLAND_SCALE = 1.55;
export const ISLAND_HEIGHT_SCALE = 1.4;
export const ISLAND_SHORE_RADIUS = 70 * ISLAND_SCALE;

// Coordinates here are in unscaled terrain space. The stream flows into the south-east bay.
export const RIVER_PATH: readonly [number, number][] = [
  [-18, 18], [-14, 24], [-4, 29], [7, 35], [20, 42], [34, 50], [46, 56]
];

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
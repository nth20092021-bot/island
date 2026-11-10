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

/** Shared sun vector: sky shader, key light and water specular all read this.
 *  Mặt trời thấp ~15° chếch trái khung nhìn mặc định để thấy được quầng hoàng hôn. */
export const SUN_DIRECTION: readonly [number, number, number] = [-0.42, 0.20, -0.60];

/** Mật độ sương mù ấm dùng chung cho scene và shader tán lá. */
export const FOG_DENSITY = 0.0015;

// Quần thể làng Việt (tọa độ nội bộ đảo, trước khi nhân ISLAND_SCALE):
// sân đình nằm trên một thềm đất phẳng khoét vào sườn đông nam, hướng ra khung nhìn mặc định.
export const VILLAGE_CENTER = { x: 32, z: 8 } as const;
export const VILLAGE_FLAT_RADIUS = 12.5;
export const VILLAGE_BLEND_RADIUS = 18.5;
export const LOTUS_POND_CENTER = { x: 16, z: 24 } as const;
export const RICE_TERRACE_CENTER = { x: -38, z: 10 } as const;

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
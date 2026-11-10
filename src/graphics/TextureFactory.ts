import * as THREE from 'three';

export type TextureMode =
  | 'sand' | 'rock' | 'wood' | 'chestWood' | 'metal' | 'grass'
  | 'limWood' | 'lacquer' | 'patina' | 'roofTile' | 'laterite' | 'brick';

const smoothstep = (a: number, b: number, x: number): number => {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

function hash(x: number, y: number, seed: number): number {
  let n = Math.imul(x, 374761393) + Math.imul(y, 668265263) + Math.imul(seed, 1442695041);
  n = Math.imul(n ^ (n >>> 13), 1274126177);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967295;
}

// Periodic noise makes each tile seamless, even when wrapped on large meshes.
function noise(x: number, y: number, cells: number, seed: number): number {
  const ix = Math.floor(x), iy = Math.floor(y);
  const fx = x - ix, fy = y - iy;
  const u = fx * fx * (3 - 2 * fx), v = fy * fy * (3 - 2 * fy);
  const h = (a: number, b: number) => hash((a + cells) % cells, (b + cells) % cells, seed);
  const a = h(ix, iy) * (1 - u) + h(ix + 1, iy) * u;
  const b = h(ix, iy + 1) * (1 - u) + h(ix + 1, iy + 1) * u;
  return a * (1 - v) + b * v;
}

function surface(mode: TextureMode, x: number, y: number, size: number): { color: number[]; height: number; roughness: number } {
  const u = x / size, v = y / size;
  const broad = noise(u * 8, v * 8, 8, 12);
  const detail = noise(u * 48, v * 48, 48, 42);
  const grain = hash(x, y, 83);
  if (mode === 'wood') {
    const lines = Math.sin(v * Math.PI * 48 + broad * 4 + Math.sin(u * Math.PI * 8) * 0.6);
    const t = broad * 0.22 + detail * 0.17 + lines * 0.12;
    return { color: [87 + t * 100, 46 + t * 65, 24 + t * 38], height: t + lines * 0.12, roughness: 0.65 + detail * 0.16 };
  }
  if (mode === 'chestWood') {
    // Gỗ sồi làm rương: 3 ván ghép với rãnh tối, vân gỗ chạy dọc theo chiều cao ván.
    const seam = Math.pow(Math.abs(Math.sin(v * Math.PI * 3.0)), 26);
    const grain = noise(u * 8, v * 64, 8, 21) * 0.62 + detail * 0.28;
    const t = broad * 0.18 + grain * 0.5;
    const shade = 1 - seam * 0.78;
    return {
      color: [(168 + t * 76) * shade, (112 + t * 60) * shade, (52 + t * 36) * shade],
      height: t * 0.55 - seam * 1.1,
      roughness: 0.5 + t * 0.24 + seam * 0.3
    };
  }
  if (mode === 'rock') {
    const veins = Math.abs(Math.sin((u + v * 0.65) * Math.PI * 18 + broad * 7));
    const t = broad * 0.48 + detail * 0.32 + grain * 0.12;
    return { color: [83 + t * 52 - veins * 11, 94 + t * 47 + broad * 12, 89 + t * 44], height: t + veins * 0.16, roughness: 0.79 + detail * 0.13 };
  }
  if (mode === 'sand') {
    const t = broad * 0.27 + detail * 0.16 + grain * 0.22;
    return { color: [197 + t * 63, 160 + t * 69, 106 + t * 68], height: t, roughness: 0.83 + grain * 0.13 };
  }
  if (mode === 'grass') {
    const blades = Math.sin(u * Math.PI * 96 + detail * 3) * Math.sin(v * Math.PI * 72);
    const t = broad * 0.25 + detail * 0.24 + blades * 0.06;
    // Pale albedo preserves vertex biome colors instead of multiplying green by green.
    return { color: [160 + t * 52, 174 + t * 44, 132 + t * 50], height: t + grain * 0.1, roughness: 0.86 + detail * 0.1 };
  }
  if (mode === 'limWood') {
    // Gỗ lim đỏ sẫm, vân mịn và thẳng: cột đình chạm khắc cần mặt gỗ đanh chứ không thô như gỗ rương.
    const lines = Math.sin(v * Math.PI * 112 + broad * 2.4 + Math.sin(u * Math.PI * 5) * 0.5);
    const fine = noise(u * 96, v * 26, 96, 31);
    const t = broad * 0.2 + fine * 0.26 + lines * 0.05;
    return { color: [62 + t * 74, 34 + t * 48, 24 + t * 34], height: t + lines * 0.08, roughness: 0.5 + fine * 0.2 };
  }
  if (mode === 'lacquer') {
    // Sơn mài đỏ son: nền sâu, vệt quầng sáng mờ như lớp sơn then được đánh bóng.
    const swirl = noise(u * 6 + Math.sin(v * 7) * 0.45, v * 6, 6, 77);
    const shine = noise(u * 20, v * 20, 20, 13);
    const t = swirl * 0.45 + shine * 0.18;
    return {
      color: [104 + t * 74, 15 + t * 24, 13 + t * 20],
      height: t * 0.2,
      roughness: 0.16 + shine * 0.14 + (1 - swirl) * 0.12
    };
  }
  if (mode === 'patina') {
    // Đồng thau lên ten xanh: mảng gỉ ngọc bám trên nền đồng nâu, mép gỉ sần và nhám.
    const blotch = noise(u * 7 + Math.sin(v * 5) * 0.6, v * 7, 7, 91);
    const crust = noise(u * 26, v * 26, 26, 57);
    const verdigris = smoothstep(0.36, 0.7, blotch * 0.72 + crust * 0.28);
    const bronze = [104 + detail * 46, 70 + detail * 30, 34 + detail * 18];
    const green = [46 + detail * 34, 96 + detail * 40, 76 + detail * 30];
    return {
      color: [
        bronze[0] + (green[0] - bronze[0]) * verdigris,
        bronze[1] + (green[1] - bronze[1]) * verdigris,
        bronze[2] + (green[2] - bronze[2]) * verdigris
      ],
      height: verdigris * 0.7 + crust * 0.22,
      roughness: 0.34 + verdigris * 0.42 + detail * 0.1
    };
  }
  if (mode === 'roofTile') {
    // Ngói âm dương: 8 dải sóng dọc mái, mỗi hàng ngói chồng lên nhau một gờ tối.
    const strip = u * 8;
    const s = strip - Math.floor(strip);
    const profile = Math.sin(s * Math.PI);
    const row = v * 10;
    const seam = Math.pow(Math.abs(Math.cos(row * Math.PI)), 34);
    const t = broad * 0.2 + detail * 0.18;
    const bright = Math.pow(profile, 1.4);
    const shade = 1 - seam * 0.52;
    // Ngói âm dương nung xám chì, hơi ngả lam khi lên rêu — không phải ngói đất nung đỏ.
    const moss = smoothstep(0.62, 0.86, broad);
    return {
      color: [
        (64 + bright * 40 + t * 14 - moss * 6) * shade,
        (72 + bright * 42 + t * 14 + moss * 10) * shade,
        (80 + bright * 44 + t * 16 + moss * 2) * shade
      ],
      height: profile * 0.85 - seam * 0.55 + t * 0.15,
      roughness: 0.58 + detail * 0.16 + seam * 0.18
    };
  }
  if (mode === 'laterite') {
    // Đá ong: khối đất nung xốp, lỗ rỗ dày đặc và sắc cam gỉ.
    const pores = noise(u * 34, v * 34, 34, 17);
    const hole = smoothstep(0.6, 0.82, pores);
    const t = broad * 0.42 + detail * 0.3;
    return {
      color: [
        (132 + t * 44) * (1 - hole * 0.46),
        (86 + t * 32) * (1 - hole * 0.42),
        (62 + t * 26) * (1 - hole * 0.4)
      ],
      height: t - hole * 0.95,
      roughness: 0.82 + detail * 0.14
    };
  }
  if (mode === 'brick') {
    // Sân gạch Bắc Bộ: gạch đỏ nung xếp so le, mạch vữa xám lõm sâu.
    const rows = 8;
    const row = v * rows;
    const rowIndex = Math.floor(row);
    const offset = (rowIndex % 2) * 0.5;
    const col = u * 4 + offset;
    const colIndex = Math.floor(col);
    const fx = col - colIndex, fy = row - rowIndex;
    const joint = 1 - smoothstep(0.015, 0.085, Math.min(Math.min(fx, 1 - fx), Math.min(fy, 1 - fy)));
    const brickTint = hash(colIndex, rowIndex, 61) * 34;
    const t = broad * 0.18 + detail * 0.16;
    return {
      color: [
        (112 + t * 38 + brickTint * 0.8) * (1 - joint * 0.42),
        (72 + t * 26 + brickTint * 0.5) * (1 - joint * 0.34),
        (56 + t * 20 + brickTint * 0.35) * (1 - joint * 0.3)
      ],
      height: (1 - joint) * 0.35 - joint * 0.6,
      roughness: 0.78 + detail * 0.14 + joint * 0.08
    };
  }
  const brushed = Math.sin(v * Math.PI * 96) * 0.05 + grain * 0.08;
  return { color: [202 + broad * 36 + brushed * 25, 148 + broad * 36 + brushed * 20, 54 + broad * 27], height: brushed + detail * 0.12, roughness: 0.32 + broad * 0.18 };
}

export function makePbrSet(mode: TextureMode): {
  map: THREE.CanvasTexture;
  roughnessMap: THREE.CanvasTexture;
  normalMap: THREE.CanvasTexture;
} {
  const size = 256;
  const albedo = document.createElement('canvas');
  const rough = document.createElement('canvas');
  const normal = document.createElement('canvas');
  for (const canvas of [albedo, rough, normal]) canvas.width = canvas.height = size;
  const a = albedo.getContext('2d')!, r = rough.getContext('2d')!, n = normal.getContext('2d')!;
  const ai = a.createImageData(size, size), ri = r.createImageData(size, size), ni = n.createImageData(size, size);
  const heights = new Float32Array(size * size);
  const clamp = (v: number) => Math.max(0, Math.min(255, Math.round(v)));
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const i = y * size + x, o = i * 4;
    const s = surface(mode, x, y, size);
    heights[i] = s.height;
    ai.data[o] = clamp(s.color[0]); ai.data[o + 1] = clamp(s.color[1]); ai.data[o + 2] = clamp(s.color[2]); ai.data[o + 3] = 255;
    const rv = clamp(s.roughness * 255);
    ri.data[o] = ri.data[o + 1] = ri.data[o + 2] = rv; ri.data[o + 3] = 255;
  }
  const strength = mode === 'rock' ? 2.2 : mode === 'sand' ? 1.2
    : mode === 'roofTile' ? 2.0 : mode === 'laterite' ? 2.6 : mode === 'brick' ? 2.2
    : mode === 'patina' ? 1.8 : mode === 'lacquer' ? 0.8 : 1.5;
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const o = (y * size + x) * 4;
    const dx = (heights[y * size + (x + 1) % size] - heights[y * size + (x + size - 1) % size]) * strength;
    const dy = (heights[((y + 1) % size) * size + x] - heights[((y + size - 1) % size) * size + x]) * strength;
    const length = Math.hypot(dx, dy, 1);
    ni.data[o] = clamp(128 - dx / length * 127);
    ni.data[o + 1] = clamp(128 - dy / length * 127);
    ni.data[o + 2] = clamp(128 + 127 / length);
    ni.data[o + 3] = 255;
  }
  a.putImageData(ai, 0, 0); r.putImageData(ri, 0, 0); n.putImageData(ni, 0, 0);
  const map = new THREE.CanvasTexture(albedo);
  const roughnessMap = new THREE.CanvasTexture(rough);
  const normalMap = new THREE.CanvasTexture(normal);
  map.colorSpace = THREE.SRGBColorSpace;
  for (const texture of [map, roughnessMap, normalMap]) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.anisotropy = 4;
  }
  return { map, roughnessMap, normalMap };
}

export function grassMaterial(
  store: Array<THREE.Material | THREE.Texture>,
  useVertexColors = true
): THREE.MeshStandardMaterial {
  const p = makePbrSet('grass');
  for (const texture of Object.values(p)) texture.repeat.set(7, 7);
  const m = new THREE.MeshStandardMaterial({
    map: p.map,
    roughnessMap: p.roughnessMap,
    normalMap: p.normalMap,
    roughness: 0.95,
    normalScale: new THREE.Vector2(0.35, 0.35),
    vertexColors: useVertexColors,
    flatShading: true
  });
  store.push(m, p.map, p.roughnessMap, p.normalMap);
  return m;
}

export function sandMaterial(
  store: Array<THREE.Material | THREE.Texture>,
  useVertexColors = false
): THREE.MeshStandardMaterial {
  const p = makePbrSet('sand');
  const m = new THREE.MeshStandardMaterial({
    map: p.map,
    roughnessMap: p.roughnessMap,
    normalMap: p.normalMap,
    roughness: 1,
    normalScale: new THREE.Vector2(0.5, 0.5),
    vertexColors: useVertexColors,
    flatShading: true
  });
  store.push(m, p.map, p.roughnessMap, p.normalMap);
  return m;
}

export function rockMaterial(store: Array<THREE.Material | THREE.Texture>): THREE.MeshStandardMaterial {
  const p = makePbrSet('rock');
  const m = new THREE.MeshStandardMaterial({
    map: p.map,
    roughnessMap: p.roughnessMap,
    normalMap: p.normalMap,
    roughness: 0.9,
    normalScale: new THREE.Vector2(0.55, 0.55),
    flatShading: true
  });
  store.push(m, p.map, p.roughnessMap, p.normalMap);
  return m;
}

function vietMaterial(
  store: Array<THREE.Material | THREE.Texture>,
  mode: TextureMode,
  options: THREE.MeshStandardMaterialParameters,
  repeat?: [number, number]
): THREE.MeshStandardMaterial {
  const p = makePbrSet(mode);
  if (repeat) for (const texture of Object.values(p)) texture.repeat.set(repeat[0], repeat[1]);
  const m = new THREE.MeshStandardMaterial({
    map: p.map,
    roughnessMap: p.roughnessMap,
    normalMap: p.normalMap,
    roughness: 1,
    ...options
  });
  store.push(m, p.map, p.roughnessMap, p.normalMap);
  return m;
}

/** Gỗ lim đỏ sẫm vân mịn — cột, xà và ván đình làng. */
export function limWoodMaterial(store: Array<THREE.Material | THREE.Texture>): THREE.MeshStandardMaterial {
  return vietMaterial(store, 'limWood', {
    normalScale: new THREE.Vector2(0.4, 0.4)
  }, [1.4, 1.4]);
}

/** Sơn mài đỏ son đánh bóng — vách đình, hoành phi, cột tháp chuông. */
export function lacquerMaterial(store: Array<THREE.Material | THREE.Texture>): THREE.MeshStandardMaterial {
  return vietMaterial(store, 'lacquer', {
    metalness: 0.06,
    normalScale: new THREE.Vector2(0.18, 0.18)
  });
}

/** Đồng thau lên ten xanh — chuông, đỉnh đồng và mắt rồng. */
export function patinaMaterial(store: Array<THREE.Material | THREE.Texture>): THREE.MeshStandardMaterial {
  return vietMaterial(store, 'patina', {
    metalness: 0.82,
    normalScale: new THREE.Vector2(0.7, 0.7)
  });
}

/** Ngói âm dương — mái đình, tam quan, tháp chuông và cầu ngói. */
export function roofTileMaterial(store: Array<THREE.Material | THREE.Texture>): THREE.MeshStandardMaterial {
  return vietMaterial(store, 'roofTile', {
    normalScale: new THREE.Vector2(1.0, 1.0),
    side: THREE.DoubleSide
  });
}

/** Đá ong xốp màu gỉ sắt — móng đình, bậc cấp, viền ao sen và tường ruộng bậc thang. */
export function lateriteMaterial(store: Array<THREE.Material | THREE.Texture>): THREE.MeshStandardMaterial {
  return vietMaterial(store, 'laterite', {
    normalScale: new THREE.Vector2(0.85, 0.85)
  }, [2, 2]);
}

/** Sân gạch đỏ nung xếp so le. */
export function brickMaterial(store: Array<THREE.Material | THREE.Texture>): THREE.MeshStandardMaterial {
  return vietMaterial(store, 'brick', {
    normalScale: new THREE.Vector2(0.55, 0.55)
  }, [6, 4]);
}

/**
 * Sprites bụi nước: PointsMaterial không có map sẽ vẽ ô vuông trắng,
 * nên cần một vệt tròn mờ để hơi nước tan vào không khí.
 */
export function mistSprite(store: Array<THREE.Material | THREE.Texture>): THREE.CanvasTexture {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, 'rgba(255,255,255,0.85)');
  grad.addColorStop(0.4, 'rgba(255,255,255,0.32)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  store.push(tex);
  return tex;
}

/**
 * Môi trường phản chiếu rẻ tiền: ảnh equirect 128x64 mô phỏng bầu trời, chân trời
 * và thảm cỏ. Kim loại có metalness cao KHÔNG còn đường nào phản chiếu thì sẽ bị
 * render ra màu đen, nên đồng thau và vàng của rương cần bản đồ này.
 */
export function skyEnvironment(): THREE.CanvasTexture {
  const width = 128;
  const height = 64;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;

  const sky = ctx.createLinearGradient(0, 0, 0, height);
  sky.addColorStop(0, '#101a33');
  sky.addColorStop(0.32, '#2c3c58');
  sky.addColorStop(0.47, '#a8663a');
  sky.addColorStop(0.53, '#8a5535');
  sky.addColorStop(0.62, '#55432f');
  sky.addColorStop(1, '#241f1a');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, width, height);

  // Vệt nắng rực để kim loại có một điểm sáng phản chiếu rõ ràng
  const sun = ctx.createRadialGradient(width * 0.27, height * 0.36, 0, width * 0.27, height * 0.36, width * 0.2);
  sun.addColorStop(0, 'rgba(255,240,208,1)');
  sun.addColorStop(1, 'rgba(255,198,130,0)');
  ctx.fillStyle = sun;
  ctx.fillRect(0, 0, width, height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function chestPbrMaterials(): {
  wood: THREE.MeshStandardMaterial;
  metal: THREE.MeshStandardMaterial;
} {
  const w = makePbrSet('wood');
  const m = makePbrSet('metal');
  return {
    wood: new THREE.MeshStandardMaterial({
      map: w.map,
      normalMap: w.normalMap,
      roughnessMap: w.roughnessMap,
      roughness: 0.82,
      normalScale: new THREE.Vector2(0.45, 0.45)
    }),
    metal: new THREE.MeshStandardMaterial({
      map: m.map,
      metalness: 0.72,
      roughness: 0.65,
      normalMap: m.normalMap,
      roughnessMap: m.roughnessMap,
      normalScale: new THREE.Vector2(0.22, 0.22)
    })
  };
}

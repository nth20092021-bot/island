import * as THREE from 'three';
import gsap from 'gsap';
import { ChestData, globalEventBus } from './EventBus';
import { HeightSampler } from './ChestManager';
import { ISLAND_SCALE } from './IslandLayout';

export interface CameraDirectorConfig {
  overviewPosition: THREE.Vector3;
  overviewLookAt: THREE.Vector3;
  flightDuration: number;
}

export const DEFAULT_CAMERA_CONFIG: CameraDirectorConfig = {
  overviewPosition: new THREE.Vector3(0, 76, 163),
  overviewLookAt: new THREE.Vector3(0, 14, 0),
  flightDuration: 11.6 // ~5,1 giây lượn toàn cảnh + ~6,5 giây sà xuống rương theo cung né vật thể
};

export type ObstacleTopSampler = (x: number, z: number, fromY?: number) => number;
export type SightBlockedSampler = (from: THREE.Vector3, to: THREE.Vector3) => boolean;

const Y_AXIS = new THREE.Vector3(0, 1, 0);
const GROUND_CLEARANCE = 2.4;
const OBSTACLE_CLEARANCE = 2.4;
const LANDING_HEIGHT = 2.7;
const PATH_SAMPLES = 64;
const VALIDATION_SAMPLES = 220;
const VALIDATION_PASSES = 6;
// Trong 2 m cuối quanh điểm đáp không dò nâng theo cột: điểm cuối đã ghim độ cao,
// nâng vùng này sẽ sinh gò phình rồi lao dốc đứng.
const ENDPOINT_GUARD = 2;
// Cây/đình/thác cao nhất đảo ~44 m; cao hơn mốc này thì không cần dò cột vật thể.
const OBSTACLE_CEILING = 52;

/**
 * CameraDirector: Đạo diễn camera điện ảnh hùng vĩ (Cinematic 360 Tour & Chest Landing)
 * 1. Giai đoạn 1: Bay lượn 1 vòng 360 độ quanh bản đồ để chiêm ngưỡng toàn cảnh đảo hùng vĩ
 *    (thác nước đôi, con suối uốn lượn, đàn tế trời, rừng cây và bãi biển).
 * 2. Giai đoạn 2: Lướt sà xuống theo đường cong CatmullRom mượt mà tiến thẳng về chiếc rương được chọn.
 * 3. Nội suy góc nhìn mượt mà (Smoothstep Hermite LookAt) triệt tiêu hoàn toàn giật góc quay.
 * 4. Không vẽ bất kỳ đường chỉ trắng nào.
 */
export class CameraDirector {
  public camera: THREE.PerspectiveCamera;
  private config: CameraDirectorConfig;
  private currentCurve: THREE.CatmullRomCurve3 | null = null;
  public currentTween: gsap.core.Tween | null = null;
  private currentLookAt: THREE.Vector3;
  private isFlying: boolean = false;
  private heightSampler?: HeightSampler;
  private obstacleSampler?: ObstacleTopSampler;
  private sightBlockedSampler?: SightBlockedSampler;

  constructor(camera: THREE.PerspectiveCamera, config: CameraDirectorConfig = DEFAULT_CAMERA_CONFIG) {
    this.camera = camera;
    this.config = config;
    this.currentLookAt = config.overviewLookAt.clone();
    this.resetToOverview();
  }

  public setHeightSampler(sampler: HeightSampler): void {
    this.heightSampler = sampler;
  }

  /** Nguồn dò đỉnh vật thể đặc (mái đình, vách thác, tán cây) để camera né. */
  public setObstacleSampler(sampler: ObstacleTopSampler): void {
    this.obstacleSampler = sampler;
  }

  /** Kiểm tra đoạn thẳng có xuyên qua vật thể đặc hay không (dùng cho tầm nhìn tới rương). */
  public setSightBlockedSampler(sampler: SightBlockedSampler): void {
    this.sightBlockedSampler = sampler;
  }

  public isCameraFlying(): boolean {
    return this.isFlying;
  }

  /**
   * Đưa camera về vị trí toàn cảnh nhìn xuống đảo
   */
  public resetToOverview(instant: boolean = true): void {
    if (this.currentTween) {
      this.currentTween.kill();
      this.currentTween = null;
    }
    this.isFlying = false;

    if (instant) {
      this.camera.position.copy(this.config.overviewPosition);
      this.currentLookAt.copy(this.config.overviewLookAt);
      this.camera.lookAt(this.currentLookAt);
    } else {
      gsap.to(this.camera.position, {
        x: this.config.overviewPosition.x,
        y: this.config.overviewPosition.y,
        z: this.config.overviewPosition.z,
        duration: 1.8,
        ease: 'power2.out'
      });
      gsap.to(this.currentLookAt, {
        x: this.config.overviewLookAt.x,
        y: this.config.overviewLookAt.y,
        z: this.config.overviewLookAt.z,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: () => {
          this.camera.lookAt(this.currentLookAt);
        }
      });
    }
  }

  private groundAt(x: number, z: number): number {
    return this.heightSampler ? this.heightSampler(x, z) : 0;
  }

  private obstacleAt(x: number, z: number, cache: Map<string, number>): number {
    if (!this.obstacleSampler) return Number.NEGATIVE_INFINITY;
    // Cache theo ô 0,5 m: các cung né và bước kiểm tra dùng lại cùng một cột.
    const key = `${Math.round(x * 2)}:${Math.round(z * 2)}`;
    const cached = cache.get(key);
    if (cached !== undefined) return cached;
    const top = this.obstacleSampler(x, z);
    cache.set(key, top);
    return top;
  }

  private requiredFlightY(
    x: number,
    z: number,
    cache: Map<string, number>,
    sampleY: number = Number.NEGATIVE_INFINITY
  ): number {
    const requiredGround = this.groundAt(x, z) + GROUND_CLEARANCE;
    if (sampleY > OBSTACLE_CEILING) return requiredGround;
    const top = this.obstacleAt(x, z, cache);
    if (Number.isFinite(top)) return Math.max(requiredGround, top + OBSTACLE_CLEARANCE);
    return requiredGround;
  }

  /**
   * Chọn điểm đáp quanh rương: đủ gần để thấy rương, nhưng không nằm trong
   * tường/mái/tán cây, không bị vật thể che mất rương và không nằm dưới vòm lá
   * (camera phải sà xuống qua khoảng trời thoáng, không xuyên qua tán).
   */
  private chooseLandingPosition(targetChest: ChestData, cache: Map<string, number>): THREE.Vector3 {
    const chest = targetChest.position;
    const forward = new THREE.Vector3(
      Math.sin(targetChest.rotationY),
      0,
      Math.cos(targetChest.rotationY)
    ).normalize();
    const right = new THREE.Vector3(forward.z, 0, -forward.x).normalize();
    const baseDir = forward.clone().multiplyScalar(4.6).add(right.clone().multiplyScalar(2.1)).normalize();
    const baseY = chest.y + LANDING_HEIGHT;
    const chestTarget = chest.clone().add(new THREE.Vector3(0, 0.55, 0));
    const eye = new THREE.Vector3();

    // Quét đủ 360 độ: phía sau rương (hướng ra biển) thường thoáng hơn phía rừng.
    const angles = [0, 22, -22, 44, -44, 66, -66, 90, -90, 115, -115, 140, -140, 160, -160, 180];
    const radii = [4.4, 5.5, 6.6];

    interface LandingCandidate {
      position: THREE.Vector3;
      score: number;
      degrees: number;
    }

    const candidates: LandingCandidate[] = [];
    for (const radius of radii) {
      for (const degrees of angles) {
        const dir = baseDir.clone().applyAxisAngle(Y_AXIS, THREE.MathUtils.degToRad(degrees));
        const spot = chest.clone().addScaledVector(dir, radius);
        const ground = this.groundAt(spot.x, spot.z);
        const obstacleTop = this.obstacleAt(spot.x, spot.z, cache);
        let y = Math.max(baseY, ground + GROUND_CLEARANCE + 0.2);
        let score = Math.abs(degrees) * 0.04 + (radius - radii[0]) * 0.7;

        if (Number.isFinite(obstacleTop) && y - obstacleTop < OBSTACLE_CLEARANCE + 1.2) {
          // Điểm đáp nằm ngay trong tán/mái: nhấc lên trên đỉnh, nhưng phạt nặng
          // để các hướng thoáng hơn được ưu tiên.
          const lifted = obstacleTop + OBSTACLE_CLEARANCE + 0.6;
          score += 5 + (lifted - y) * 0.6;
          y = lifted;
        }
        score += Math.max(0, y - baseY) * 0.25;

        eye.set(spot.x, y, spot.z);
        if (this.sightBlockedSampler) {
          if (this.sightBlockedSampler(eye, chestTarget)) score += 24;
        } else {
          for (let step = 1; step <= 3; step++) {
            const k = step / 4;
            const sx = THREE.MathUtils.lerp(spot.x, chestTarget.x, k);
            const sz = THREE.MathUtils.lerp(spot.z, chestTarget.z, k);
            const lineY = THREE.MathUtils.lerp(y, chestTarget.y, k);
            const sightTop = this.obstacleAt(sx, sz, cache);
            if (Number.isFinite(sightTop) && sightTop > lineY - 0.25) {
              score += (sightTop - lineY + 0.25) * 2;
            }
          }
        }

        // Địa hình chắn giữa camera và rương (sườn dốc, mép đê...).
        for (let step = 1; step <= 4; step++) {
          const k = step / 5;
          const sx = THREE.MathUtils.lerp(spot.x, chestTarget.x, k);
          const sz = THREE.MathUtils.lerp(spot.z, chestTarget.z, k);
          const lineY = THREE.MathUtils.lerp(y, chestTarget.y, k);
          const sightGround = this.groundAt(sx, sz);
          if (sightGround > lineY - 0.35) score += (sightGround - lineY + 0.35) * 2;
        }

        candidates.push({ position: new THREE.Vector3(spot.x, y, spot.z), score, degrees });
      }
    }

    candidates.sort((a, b) => a.score - b.score);

    // Giữ ứng viên tốt nhất của từng hướng, rồi kiểm tra khoảng trời quanh điểm đáp.
    const bestPerAngle: LandingCandidate[] = [];
    const usedAngles = new Set<number>();
    for (const candidate of candidates) {
      if (usedAngles.has(candidate.degrees)) continue;
      usedAngles.add(candidate.degrees);
      bestPerAngle.push(candidate);
    }

    let best = bestPerAngle[0];
    let bestScore = Infinity;
    for (const candidate of bestPerAngle) {
      let ringTop = Number.NEGATIVE_INFINITY;
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        const sx = candidate.position.x + Math.cos(a) * 2;
        const sz = candidate.position.z + Math.sin(a) * 2;
        const top = this.obstacleAt(sx, sz, cache);
        if (Number.isFinite(top)) ringTop = Math.max(ringTop, top);
      }

      let score = candidate.score;
      if (Number.isFinite(ringTop)) {
        const gap = ringTop - candidate.position.y;
        // Vòm lá/mái đình phủ ngay trên đầu: camera sà xuống sẽ xuyên qua.
        if (gap > -1.5) score += 12 + Math.max(0, gap + 1.5) * 1.6;
      }
      if (score < bestScore) {
        bestScore = score;
        best = candidate;
      }
    }

    if (best) return best.position.clone();
    return chest.clone().addScaledVector(forward, 4.6).add(new THREE.Vector3(0, LANDING_HEIGHT, 0));
  }

  private approachControlPoints(
    finalPosition: THREE.Vector3,
    outward: THREE.Vector3,
    sideSign: number
  ): THREE.Vector3[] {
    const start = this.camera.position.clone();
    const dx = finalPosition.x - start.x;
    const dz = finalPosition.z - start.z;
    const side = new THREE.Vector3(-dz, 0, dx);
    if (side.lengthSq() < 1e-6) side.set(1, 0, 0);
    else side.normalize();

    const wp1 = start.clone().lerp(finalPosition, 0.33).addScaledVector(side, sideSign * 13);
    const wp2 = start.clone().lerp(finalPosition, 0.68).addScaledVector(side, sideSign * 6);
    const wp3 = finalPosition.clone().addScaledVector(outward, 2.4);
    return [start, wp1, wp2, wp3, finalPosition.clone()];
  }

  /** Ước lượng độ "leo" cần thiết cho mỗi bên cung lượn để chọn bên thoáng hơn. */
  private sideLiftCost(
    targetChest: ChestData,
    finalPosition: THREE.Vector3,
    sideSign: number,
    cache: Map<string, number>
  ): number {
    const outward = new THREE.Vector3(
      finalPosition.x - targetChest.position.x,
      0,
      finalPosition.z - targetChest.position.z
    );
    if (outward.lengthSq() < 1e-6) outward.set(1, 0, 0);
    else outward.normalize();

    const controls = this.approachControlPoints(finalPosition, outward, sideSign);
    const xzCurve = new THREE.CatmullRomCurve3(
      controls.map((point) => new THREE.Vector3(point.x, 0, point.z)),
      false,
      'centripetal',
      0.5
    );
    const startY = this.camera.position.y;
    let cost = 0;
    for (let i = 1; i < 26; i++) {
      const u = i / 26;
      const point = xzCurve.getPointAt(u);
      const eased = u * u * (3 - 2 * u);
      const baseY = THREE.MathUtils.lerp(startY, finalPosition.y, eased);
      cost += Math.max(0, this.requiredFlightY(point.x, point.z, cache, baseY) + 0.2 - baseY);
    }
    return cost;
  }

  /**
   * Dựng cung bay mượt: hạ dần từ toàn cảnh xuống rương, nhưng nâng thành
   * gò mềm mỗi khi phía trước có đồi, mái đình hay tán cây.
   */
  private buildAvoidingCurve(
    targetChest: ChestData,
    finalPosition: THREE.Vector3,
    sideSign: number,
    cache: Map<string, number>
  ): THREE.CatmullRomCurve3 {
    const outward = new THREE.Vector3(
      finalPosition.x - targetChest.position.x,
      0,
      finalPosition.z - targetChest.position.z
    );
    if (outward.lengthSq() < 1e-6) outward.set(1, 0, 0);
    else outward.normalize();

    const controls = this.approachControlPoints(finalPosition, outward, sideSign);
    const xzCurve = new THREE.CatmullRomCurve3(
      controls.map((point) => new THREE.Vector3(point.x, 0, point.z)),
      false,
      'centripetal',
      0.5
    );
    xzCurve.arcLengthDivisions = 400;
    xzCurve.updateArcLengths();

    const start = this.camera.position;
    const samples: THREE.Vector3[] = [];
    for (let i = 0; i < PATH_SAMPLES; i++) {
      samples.push(xzCurve.getPointAt(i / (PATH_SAMPLES - 1)));
    }
    samples[0].set(start.x, 0, start.z);
    samples[PATH_SAMPLES - 1].set(finalPosition.x, 0, finalPosition.z);

    const heights = samples.map((_, index) => {
      const u = index / (PATH_SAMPLES - 1);
      const eased = u * u * (3 - 2 * u);
      return THREE.MathUtils.lerp(start.y, finalPosition.y, eased);
    });

    const requiredAt = (x: number, z: number): number =>
      this.requiredFlightY(x, z, cache, Number.NEGATIVE_INFINITY) + 0.2;

    // Nâng theo gò cos² để camera bắt đầu lấy độ cao từ xa và hạ xuống êm.
    for (let pass = 0; pass < 4; pass++) {
      const additions = new Float32Array(PATH_SAMPLES);
      let changed = false;
      for (let i = 0; i < PATH_SAMPLES; i++) {
        const required = requiredAt(samples[i].x, samples[i].z);
        const deficit = required - heights[i];
        if (deficit <= 0.06) continue;
        changed = true;
        const radius = 10;
        for (let j = Math.max(0, i - radius); j <= Math.min(PATH_SAMPLES - 1, i + radius); j++) {
          const weight = 0.5 + 0.5 * Math.cos(((j - i) / radius) * Math.PI);
          additions[j] = Math.max(additions[j], deficit * weight);
        }
      }
      for (let i = 0; i < PATH_SAMPLES; i++) heights[i] += additions[i];
      heights[0] = start.y;
      heights[PATH_SAMPLES - 1] = finalPosition.y;
      if (!changed) break;
    }

    const controlPoints = samples.map(
      (point, index) => new THREE.Vector3(point.x, heights[index], point.z)
    );
    let curve = new THREE.CatmullRomCurve3(controlPoints, false, 'centripetal', 0.5);

    // Kiểm tra lại trên cung thật: cung CatmullRom có thể võng giữa hai điểm điều
    // khiển, nên dò dày và nâng mọi đoạn còn thiếu (không chỉ đoạn tệ nhất) cho tới khi sạch.
    // Bỏ qua 2 m cuối quanh điểm đáp: vùng này đã được kiểm tra khoảng trời khi chọn
    // điểm đáp, còn nếu vẫn nâng theo cột ở đây thì điểm cuối bị ghim sẽ sinh gò phình vô hạn.
    for (let iteration = 0; iteration < VALIDATION_PASSES; iteration++) {
      const additions = new Float32Array(PATH_SAMPLES);
      let worstDeficit = 0;
      for (let i = 0; i <= VALIDATION_SAMPLES; i++) {
        const t = i / VALIDATION_SAMPLES;
        const point = curve.getPointAt(t);
        if (Math.hypot(point.x - finalPosition.x, point.z - finalPosition.z) < ENDPOINT_GUARD) continue;
        const required = requiredAt(point.x, point.z);
        const deficit = required - point.y;
        if (deficit <= 0.08) continue;
        worstDeficit = Math.max(worstDeficit, deficit);

        const center = Math.round(t * (PATH_SAMPLES - 1));
        const radius = 14;
        for (
          let j = Math.max(0, center - radius);
          j <= Math.min(PATH_SAMPLES - 1, center + radius);
          j++
        ) {
          const weight = 0.5 + 0.5 * Math.cos(((j - center) / radius) * Math.PI);
          additions[j] = Math.max(additions[j], deficit * weight);
        }
      }
      if (worstDeficit <= 0.1) break;

      for (let j = 0; j < PATH_SAMPLES; j++) {
        if (additions[j] > 0) controlPoints[j].y += additions[j] + 0.1;
      }
      controlPoints[0].y = start.y;
      controlPoints[PATH_SAMPLES - 1].y = finalPosition.y;
      curve = new THREE.CatmullRomCurve3(controlPoints, false, 'centripetal', 0.5);
    }

    // Bảng độ dài cung mặc định (200) quá thô so với đoạn cuối dốc đứng:
    // getPointAt sẽ nhảy tốc độ khi sà xuống. Chia dày để camera trượt đều tay.
    curve.arcLengthDivisions = 1600;
    curve.updateArcLengths();

    return curve;
  }

  /**
   * Xây dựng đường bay CatmullRomCurve3 sà xuống rương, né địa hình và vật thể.
   */
  public buildCinematicPath(
    targetChest: ChestData,
    _allChests: ChestData[]
  ): THREE.CatmullRomCurve3 {
    const cache = new Map<string, number>();
    const finalPosition = this.chooseLandingPosition(targetChest, cache);
    const rightCost = this.sideLiftCost(targetChest, finalPosition, 1, cache);
    const leftCost = this.sideLiftCost(targetChest, finalPosition, -1, cache);
    const sideSign = rightCost <= leftCost ? 1 : -1;
    this.currentCurve = this.buildAvoidingCurve(targetChest, finalPosition, sideSign, cache);
    return this.currentCurve;
  }

  /**
   * Bắt đầu chuyến bay điện ảnh:
   * 1. Quay hết 1 vòng 360 độ quanh bản đồ ngắm toàn cảnh hùng vĩ
   * 2. Lướt sà xuống rương kho báu chiến thắng và mở nắp rương
   */
  public flyToChest(
    targetChest: ChestData,
    allChests: ChestData[],
    onComplete?: () => void
  ): void {
    this.isFlying = true;

    const islandCenter = new THREE.Vector3(0, 14, 0);
    const finalLookTarget = targetChest.position.clone().add(new THREE.Vector3(0, 0.55, 0));

    // Điểm xuất phát của camera
    const startPos = this.config.overviewPosition.clone();
    const startAngle = Math.atan2(startPos.z, startPos.x);
    const orbitRadius = Math.sqrt(startPos.x * startPos.x + startPos.z * startPos.z) || 110 * ISLAND_SCALE;
    const orbitAltitude = startPos.y || 56;

    // Chuẩn bị đường bay sà xuống rương (Giai đoạn 2)
    const approachStartPos = new THREE.Vector3(
      Math.cos(startAngle) * orbitRadius,
      orbitAltitude,
      Math.sin(startAngle) * orbitRadius
    );
    this.camera.position.copy(approachStartPos);
    const approachCurve = this.buildCinematicPath(targetChest, allChests);

    const flightState = { progress: 0 };

    if (this.currentTween) {
      this.currentTween.kill();
    }

    // Tỉ lệ thời gian: 44% vòng quay 360 độ, 56% sà xuống rương
    const orbitThreshold = 0.44;

    // Vị trí & hướng nhìn của cả hai giai đoạn đều là hàm THUẦN CỦA TIẾN TRÌNH.
    // Trừ khi còn dùng bộ lọc đệ quy (lerp mỗi khung hình) thì góc quay mới phụ thuộc fps
    // và bị trễ rồi "giật snap" đúng lúc camera áp sát rương.
    this.currentTween = gsap.to(flightState, {
      progress: 1,
      duration: this.config.flightDuration,
      ease: 'none',
      onUpdate: () => {
        const t = flightState.progress;

        if (t <= orbitThreshold) {
          // ==========================================
          // GIAI ĐOẠN 1: QUAY HẾT 1 VÒNG 360 ĐỘ QUANH ĐẢO
          // ==========================================
          const orbitProgress = t / orbitThreshold; // 0 -> 1
          // Hàm easing nhẹ nhàng cho vòng quay 360
          const easedOrbit = gsap.parseEase('power1.inOut')(orbitProgress);

          // Sóng sin bằng 0 ở cả hai đầu vòng quay: khung hình cuối pha 1 khớp
          // chính xác điểm khởi đầu của đường bay sà xuống, không còn cú nảy vị trí.
          const wave = Math.sin(easedOrbit * Math.PI * 2);
          const angle = startAngle + easedOrbit * Math.PI * 2;
          const r = orbitRadius + wave * 4.0;
          const y = orbitAltitude + wave * 3.5;

          this.camera.position.set(Math.cos(angle) * r, y, Math.sin(angle) * r);

          // Điểm nhìn hướng vào trung tâm đảo hùng vĩ
          this.currentLookAt.copy(islandCenter);
          this.camera.lookAt(this.currentLookAt);

        } else {
          // ==========================================
          // GIAI ĐOẠN 2: LƯỚT SÀ XUỐNG RƯƠNG CHIẾN THẮNG
          // ==========================================
          const descentProgress = (t - orbitThreshold) / (1.0 - orbitThreshold); // 0 -> 1
          // power1 mềm hơn power2: camera lấy đà và đổi độ cao từ tốn, không vọt.
          const easedDescent = gsap.parseEase('power1.inOut')(descentProgress);

          const pos = approachCurve.getPointAt(easedDescent);
          this.camera.position.copy(pos);

          // Hướng nhìn: trượt từ tâm đảo sang thân rương bằng hai đường smoothstep lồng nhau
          const lookAhead = approachCurve.getPointAt(Math.min(1, easedDescent + 0.045));
          const grip = THREE.MathUtils.smoothstep(easedDescent, 0.1, 0.62);
          const desiredLook = lookAhead.lerp(finalLookTarget, grip);
          const lockOn = THREE.MathUtils.smoothstep(easedDescent, 0, 0.3);
          this.currentLookAt.copy(islandCenter).lerp(desiredLook, lockOn);
          this.camera.lookAt(this.currentLookAt);

        }

        // Bắn sự kiện tiến trình camera
        globalEventBus.emit('CAMERA_PROGRESS', { progress: t });
      },
      onComplete: () => {
        this.isFlying = false;
        this.currentLookAt.copy(finalLookTarget);
        this.camera.lookAt(finalLookTarget);

        globalEventBus.emit('CHEST_ARRIVED', {
          chestId: targetChest.id,
          studentName: targetChest.student.name,
          position: targetChest.position
        });

        // Bật mở nắp rương hé lộ kho báu tiền vàng
        gsap.delayedCall(0.35, () => {
          globalEventBus.emit('CHEST_OPENED', {
            chestId: targetChest.id,
            studentName: targetChest.student.name
          });
        });

        if (onComplete) onComplete();
      }
    });
  }

  public createTrajectoryLineMesh(_curve?: THREE.CatmullRomCurve3): THREE.Line {
    const emptyGeo = new THREE.BufferGeometry();
    const invisibleMat = new THREE.LineBasicMaterial({ visible: false, transparent: true, opacity: 0 });
    return new THREE.Line(emptyGeo, invisibleMat);
  }
}

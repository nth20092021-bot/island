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
  flightDuration: 9.8 // 5 giây bay 1 vòng 360 độ ngắm toàn cảnh đảo hùng vĩ + 4.8 giây sà xuống rương
};

/**
 * CameraDirector: Đạo diễn camera điện ảnh hùng vĩ (Cinematic 360 Tour & Chest Landing)
 * 1. Giai đoạn 1: Bay lượn 1 vòng 360 độ quanh bản đồ để chiêm ngưỡng toàn cảnh đảo hùng vĩ
 *    (thác nước đôi, con suối uốn lượn, bể đá cổ, rừng cây và bãi biển).
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

  constructor(camera: THREE.PerspectiveCamera, config: CameraDirectorConfig = DEFAULT_CAMERA_CONFIG) {
    this.camera = camera;
    this.config = config;
    this.currentLookAt = config.overviewLookAt.clone();
    this.resetToOverview();
  }

  public setHeightSampler(sampler: HeightSampler): void {
    this.heightSampler = sampler;
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

  /**
   * Xây dựng đường bay CatmullRomCurve3 sà xuống rương
   */
  public buildCinematicPath(
    targetChest: ChestData,
    _allChests: ChestData[]
  ): THREE.CatmullRomCurve3 {
    const points: THREE.Vector3[] = [];
    const sampler = this.heightSampler;

    // Điểm tiếp nối từ vòng bay 360 độ
    const startPos = this.camera.position.clone();
    points.push(startPos);

    // Vector hướng mặt trước của rương
    const forward = new THREE.Vector3(
      Math.sin(targetChest.rotationY),
      0,
      Math.cos(targetChest.rotationY)
    ).normalize();
    const right = new THREE.Vector3(forward.z, 0, -forward.x).normalize();

    // Điểm đáp cuối cùng: Góc nhìn 3/4 điện ảnh (chếch 32 độ nhìn xuống)
    // Cự ly chuẩn xác 3.4m phía trước và 1.6m bên hông giúp rương chiếm trọn trung tâm khung hình
    const finalCameraPos = targetChest.position
      .clone()
      .add(forward.clone().multiplyScalar(3.4))
      .add(right.clone().multiplyScalar(1.6))
      .add(new THREE.Vector3(0, 2.2, 0));

    // Điểm neo 1: Lướt sà xuống từ tầng mây (30% chặng đường)
    const directVec = finalCameraPos.clone().sub(startPos);
    const sideVec = new THREE.Vector3(-directVec.z, 0, directVec.x).normalize();
    const sideSign = sideVec.dot(forward) >= 0 ? 1 : -1;
    const arcOffset = sideVec.multiplyScalar(sideSign * 12.0);

    const wp1 = startPos.clone().lerp(finalCameraPos, 0.32).add(arcOffset.clone().multiplyScalar(0.7));
    if (sampler) {
      wp1.y = Math.max(wp1.y, sampler(wp1.x, wp1.z) + 14.0);
    } else {
      wp1.y = Math.max(wp1.y, 24.0);
    }
    points.push(wp1);

    // Điểm neo 2: Lướt sà xuống trên ngọn cây và thung lũng suối (65% chặng đường)
    const wp2 = startPos.clone().lerp(finalCameraPos, 0.65).add(arcOffset.clone().multiplyScalar(0.4));
    if (sampler) {
      wp2.y = Math.max(wp2.y, sampler(wp2.x, wp2.z) + 7.5);
    } else {
      wp2.y = Math.max(wp2.y, 14.0);
    }
    points.push(wp2);

    // Điểm neo 3: Tiếp cận phía trước rương theo góc 3/4 (84% chặng đường)
    const wp3 = targetChest.position
      .clone()
      .add(forward.clone().multiplyScalar(6.5))
      .add(right.clone().multiplyScalar(2.6))
      .add(new THREE.Vector3(0, 3.2, 0));
    if (sampler) {
      wp3.y = Math.max(wp3.y, sampler(wp3.x, wp3.z) + 2.0);
    }
    points.push(wp3);

    // Điểm neo 4: Điểm đáp trước mặt rương + chống bị gò đất che khuất tầm nhìn
    if (sampler) {
      const groundAtCam = sampler(finalCameraPos.x, finalCameraPos.z);
      finalCameraPos.y = Math.max(finalCameraPos.y, groundAtCam + 1.25);

      // Quét kiểm tra gò đất giữa camera và rương
      for (const ratio of [0.3, 0.5, 0.7]) {
        const midX = THREE.MathUtils.lerp(finalCameraPos.x, targetChest.position.x, ratio);
        const midZ = THREE.MathUtils.lerp(finalCameraPos.z, targetChest.position.z, ratio);
        const midGround = sampler(midX, midZ);
        const lineY = THREE.MathUtils.lerp(finalCameraPos.y, targetChest.position.y + 0.55, ratio);
        if (midGround > lineY - 0.35) {
          finalCameraPos.y += (midGround - lineY + 0.6);
        }
      }
    }
    points.push(finalCameraPos);

    this.currentCurve = new THREE.CatmullRomCurve3(points, false, 'centripetal', 0.5);
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

    // Tỉ lệ thời gian: 48% vòng quay 360 độ, 52% sà xuống rương
    const orbitThreshold = 0.48;

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

          const angle = startAngle + easedOrbit * Math.PI * 2;
          const r = orbitRadius + Math.sin(easedOrbit * Math.PI * 2) * 4.0;
          const y = orbitAltitude + Math.cos(easedOrbit * Math.PI * 2) * 3.5;

          this.camera.position.set(Math.cos(angle) * r, y, Math.sin(angle) * r);

          // Điểm nhìn hướng vào trung tâm đảo hùng vĩ
          this.currentLookAt.lerp(islandCenter, 0.08);
          this.camera.lookAt(this.currentLookAt);

        } else {
          // ==========================================
          // GIAI ĐOẠN 2: LƯỚT SÀ XUỐNG RƯƠNG CHIẾN THẮNG
          // ==========================================
          const descentProgress = (t - orbitThreshold) / (1.0 - orbitThreshold); // 0 -> 1
          const easedDescent = gsap.parseEase('power2.inOut')(descentProgress);

          const pos = approachCurve.getPointAt(easedDescent);
          this.camera.position.copy(pos);

          // Hướng nhìn phía trước dọc theo tiếp tuyến đường bay
          const tangent = approachCurve.getTangentAt(Math.min(0.999, easedDescent)).normalize();
          const aheadLook = pos.clone().add(tangent.multiplyScalar(14));

          // Chuyển mượt mà từ nhìn đường bay sang nhìn ổ khóa rương
          const blendFactor = THREE.MathUtils.smoothstep(easedDescent, 0.22, 0.88);
          const desiredLook = aheadLook.clone().lerp(finalLookTarget, blendFactor);
          this.currentLookAt.lerp(desiredLook, 0.12);
          this.camera.lookAt(this.currentLookAt);

        }

        // Bắn sự kiện tiến trình camera
        globalEventBus.emit('CAMERA_PROGRESS', { progress: t });
      },
      onComplete: () => {
        this.isFlying = false;
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

import * as THREE from 'three';
import gsap from 'gsap';
import { ChestData, globalEventBus } from './EventBus';
import { HeightSampler } from './ChestManager';

export interface CameraDirectorConfig {
  overviewPosition: THREE.Vector3;
  overviewLookAt: THREE.Vector3;
  flightDuration: number;
}

export const DEFAULT_CAMERA_CONFIG: CameraDirectorConfig = {
  overviewPosition: new THREE.Vector3(0, 36, 68),
  overviewLookAt: new THREE.Vector3(0, 6, 0),
  flightDuration: 6.2
};

/**
 * CameraDirector: Đạo diễn camera điện ảnh mượt mà (Smooth Cinematic Camera Path)
 * - Đường bay CatmullRomCurve3 cong lượn tự nhiên theo hướng rương mục tiêu
 * - Chống giật xoay góc bằng hàm nội suy mượt mà (Smoothstep Hermite LookAt)
 * - Kiểm tra cao độ địa hình đảm bảo camera lướt êm ái trên ngọn cây/đồi cỏ mà không va chạm
 * - Không hiển thị bất kỳ đường chỉ trắng nào
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
   * Xây dựng đường bay CatmullRomCurve3 mượt mà uốn lượn tự nhiên hướng về rương
   */
  public buildCinematicPath(
    targetChest: ChestData,
    _allChests: ChestData[]
  ): THREE.CatmullRomCurve3 {
    const points: THREE.Vector3[] = [];
    const sampler = this.heightSampler;

    // Điểm xuất phát của camera
    const startPos = this.camera.position.clone();
    points.push(startPos);

    // Vector hướng mặt trước của rương
    const forward = new THREE.Vector3(
      Math.sin(targetChest.rotationY),
      0,
      Math.cos(targetChest.rotationY)
    ).normalize();

    // Điểm đáp cuối cùng: Cách mặt trước rương 3.2m, góc nhìn thấp nhìn lên
    const finalCameraPos = targetChest.position
      .clone()
      .add(forward.clone().multiplyScalar(3.2))
      .add(new THREE.Vector3(0, 0.45, 0));

    // Vector chỉ phương từ xuất phát đến đích
    const directVec = finalCameraPos.clone().sub(startPos);
    // Vector tiếp tuyến ngang tạo vòng cung lượn mềm mại quanh hòn đảo
    const sideVec = new THREE.Vector3(-directVec.z, 0, directVec.x).normalize();
    // Chọn hướng lượn hợp tự nhiên với góc quay của rương
    const sideSign = sideVec.dot(forward) >= 0 ? 1 : -1;
    const arcOffset = sideVec.multiplyScalar(sideSign * 9.5);

    // Điểm neo 1: Bay sà từ trên cao lướt qua bầu trời (28% chặng đường)
    const wp1 = startPos.clone().lerp(finalCameraPos, 0.28).add(arcOffset.clone().multiplyScalar(0.75));
    if (sampler) {
      wp1.y = Math.max(wp1.y, sampler(wp1.x, wp1.z) + 12.0);
    } else {
      wp1.y = Math.max(wp1.y, 22.0);
    }
    points.push(wp1);

    // Điểm neo 2: Lướt sà xuống trên ngọn cây và sườn đồi cỏ (62% chặng đường)
    const wp2 = startPos.clone().lerp(finalCameraPos, 0.62).add(arcOffset.clone().multiplyScalar(0.45));
    if (sampler) {
      wp2.y = Math.max(wp2.y, sampler(wp2.x, wp2.z) + 6.0);
    } else {
      wp2.y = Math.max(wp2.y, 11.0);
    }
    points.push(wp2);

    // Điểm neo 3: Tiến vào góc nhìn thẳng trước rương (82% chặng đường, cách rương 7.5m)
    const wp3 = targetChest.position
      .clone()
      .add(forward.clone().multiplyScalar(7.5))
      .add(new THREE.Vector3(0, 1.8, 0));
    if (sampler) {
      wp3.y = Math.max(wp3.y, sampler(wp3.x, wp3.z) + 1.5);
    }
    points.push(wp3);

    // Điểm neo 4: Điểm đáp thấp trước nắp rương
    if (sampler) {
      finalCameraPos.y = Math.max(finalCameraPos.y, sampler(finalCameraPos.x, finalCameraPos.z) + 0.35);
    }
    points.push(finalCameraPos);

    // Centripetal CatmullRomCurve3 đảm bảo đường cong uốn lượn liên tục, triệt tiêu giật góc
    this.currentCurve = new THREE.CatmullRomCurve3(points, false, 'centripetal', 0.5);
    return this.currentCurve;
  }

  /**
   * Bắt đầu chuyến bay điện ảnh bay tới rương chiến thắng
   */
  public flyToChest(
    targetChest: ChestData,
    allChests: ChestData[],
    onComplete?: () => void
  ): void {
    const curve = this.buildCinematicPath(targetChest, allChests);
    this.isFlying = true;

    // Điểm nhìn mục tiêu: Ổ khóa vàng và nắp rương
    const finalLookTarget = targetChest.position.clone().add(new THREE.Vector3(0, 0.72, 0));
    const flightState = { progress: 0 };

    if (this.currentTween) {
      this.currentTween.kill();
    }

    this.currentTween = gsap.to(flightState, {
      progress: 1,
      duration: this.config.flightDuration,
      ease: 'power2.inOut',
      onUpdate: () => {
        const t = flightState.progress;

        // Tọa độ camera trượt mượt mà theo CatmullRomCurve3
        const pos = curve.getPointAt(t);
        this.camera.position.copy(pos);

        // Hướng nhìn phía trước dọc theo tiếp tuyến đường bay
        const tangent = curve.getTangentAt(Math.min(0.999, t)).normalize();
        const aheadLook = pos.clone().add(tangent.multiplyScalar(14));

        // Nội suy mượt mà từ nhìn đường bay sang nhìn rương (Smoothstep Hermite Blending)
        const blendFactor = THREE.MathUtils.smoothstep(t, 0.18, 0.88);
        const desiredLook = aheadLook.clone().lerp(finalLookTarget, blendFactor);
        this.currentLookAt.lerp(desiredLook, 0.12);

        this.camera.lookAt(this.currentLookAt);

        // Bắn sự kiện tiến trình camera
        globalEventBus.emit('CAMERA_PROGRESS', { progress: t });

        // Quét tia sáng năng lượng thiên giới qua các rương
        const scanIndex = Math.min(
          allChests.length - 1,
          Math.floor(t * allChests.length * 1.4) % allChests.length
        );
        const scanningChest = allChests[scanIndex];
        if (scanningChest) {
          globalEventBus.emit('BEAM_SCAN_TARGET', {
            chestId: scanningChest.id,
            position: scanningChest.position
          });
        }
      },
      onComplete: () => {
        this.isFlying = false;
        this.camera.lookAt(finalLookTarget);

        globalEventBus.emit('CHEST_ARRIVED', {
          chestId: targetChest.id,
          studentName: targetChest.student.name,
          position: targetChest.position
        });

        // Bật mở nắp rương hé lộ vàng ngọc
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

  /**
   * Trả về line trống vô hình để tương thích các interface cũ (không vẽ đường chỉ trắng)
   */
  public createTrajectoryLineMesh(_curve?: THREE.CatmullRomCurve3): THREE.Line {
    const emptyGeo = new THREE.BufferGeometry();
    const invisibleMat = new THREE.LineBasicMaterial({ visible: false, transparent: true, opacity: 0 });
    return new THREE.Line(emptyGeo, invisibleMat);
  }
}

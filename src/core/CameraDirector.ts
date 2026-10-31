import * as THREE from 'three';
import gsap from 'gsap';
import { ChestData, globalEventBus } from './EventBus';

export interface CameraDirectorConfig {
  overviewPosition: THREE.Vector3;
  overviewLookAt: THREE.Vector3;
  flightDuration: number; // Thời gian bay (giây)
}

export const DEFAULT_CAMERA_CONFIG: CameraDirectorConfig = {
  overviewPosition: new THREE.Vector3(45, 42, 60),
  overviewLookAt: new THREE.Vector3(0, 6, 0),
  flightDuration: 6.5
};

/**
 * CameraDirector: Đạo diễn camera điện ảnh (Cinematic Camera Path)
 * Sử dụng THREE.CatmullRomCurve3 loại 'centripetal' để chống giật góc cua,
 * và GSAP để tạo gia tốc / giảm tốc siêu mượt khi lướt qua đảo và đáp trước rương.
 */
export class CameraDirector {
  public camera: THREE.PerspectiveCamera;
  private config: CameraDirectorConfig;
  private currentCurve: THREE.CatmullRomCurve3 | null = null;
  private currentTween: gsap.core.Tween | null = null;
  private currentLookAt: THREE.Vector3;
  private targetLookAt: THREE.Vector3;
  private isFlying: boolean = false;
  private curveTrajectoryMesh: THREE.Line | null = null;

  constructor(camera: THREE.PerspectiveCamera, config: CameraDirectorConfig = DEFAULT_CAMERA_CONFIG) {
    this.camera = camera;
    this.config = config;
    this.currentLookAt = config.overviewLookAt.clone();
    this.targetLookAt = config.overviewLookAt.clone();
    this.resetToOverview();
  }

  /**
   * Đưa camera về vị trí toàn cảnh trên cao
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
        duration: 2.0,
        ease: 'power2.out'
      });
      gsap.to(this.currentLookAt, {
        x: this.config.overviewLookAt.x,
        y: this.config.overviewLookAt.y,
        z: this.config.overviewLookAt.z,
        duration: 2.0,
        ease: 'power2.out',
        onUpdate: () => {
          this.camera.lookAt(this.currentLookAt);
        }
      });
    }
  }

  /**
   * Xây dựng đường bay CatmullRomCurve3 loại centripetal hướng về rương chiến thắng
   */
  public buildCinematicPath(
    targetChest: ChestData,
    allChests: ChestData[]
  ): THREE.CatmullRomCurve3 {
    const points: THREE.Vector3[] = [];

    // Điểm 0: Vị trí hiện tại của camera
    points.push(this.camera.position.clone());

    // Tính toán hướng trước mặt rương để camera dừng đúng góc
    // Rương có rotationY, vector mặt trước là (sin(rotY), 0, cos(rotY))
    const forward = new THREE.Vector3(
      Math.sin(targetChest.rotationY),
      0,
      Math.cos(targetChest.rotationY)
    ).normalize();

    // Vị trí camera dừng: cách mặt trước rương 3.2m, hơi thấp (y + 0.4) để tạo góc nhìn chếch lên
    const finalCameraPos = targetChest.position.clone()
      .add(forward.clone().multiplyScalar(3.2))
      .add(new THREE.Vector3(0, 0.45, 0));

    // Điểm cận đích (pre-arrival): cách rương khoảng 9m trên không
    const preArrivalPos = targetChest.position.clone()
      .add(forward.clone().multiplyScalar(9.0))
      .add(new THREE.Vector3(0, 3.5, 0));

    // Chọn 2-3 điểm trung chuyển (waypoints) bay lượn qua các rương khác để tạo cảm giác lướt đảo
    const targetIdx = targetChest.index;
    const stepCount = 3;
    for (let s = 1; s <= stepCount; s++) {
      const intermediateIdx = Math.floor((targetIdx * s) / (stepCount + 1));
      if (allChests[intermediateIdx]) {
        const wpChest = allChests[intermediateIdx];
        // Bay cao hơn rương trung gian khoảng 5 - 10m
        const wpPos = wpChest.position.clone().add(new THREE.Vector3(
          Math.sin(s * 1.5) * 5,
          7.0 + (stepCount - s) * 3,
          Math.cos(s * 1.5) * 5
        ));
        points.push(wpPos);
      }
    }

    points.push(preArrivalPos);
    points.push(finalCameraPos);

    // Sử dụng centripetal curve để không bị văng cua (overshoot) hay thắt nút góc nhọn
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

    // Điểm nhìn mục tiêu khi đáp xuống: Tâm trên nắp rương (để thấy nắp bật lên)
    const finalLookTarget = targetChest.position.clone().add(new THREE.Vector3(0, 0.75, 0));

    const flightState = { progress: 0 };

    if (this.currentTween) {
      this.currentTween.kill();
    }

    // GSAP tween với ease power2.inOut: tăng tốc điện ảnh và giảm tốc mượt mà khi tới đích
    this.currentTween = gsap.to(flightState, {
      progress: 1,
      duration: this.config.flightDuration,
      ease: 'power2.inOut',
      onUpdate: () => {
        const t = flightState.progress;

        // Vị trí camera dọc theo CatmullRomCurve3
        const pos = curve.getPointAt(t);
        this.camera.position.copy(pos);

        // Nội suy điểm nhìn (LookAt):
        // Nửa đầu chặng bay nhìn bao quát, nửa sau chặng bay khóa chặt vào rương trúng
        if (t < 0.45) {
          const tangent = curve.getTangentAt(t).multiplyScalar(10);
          const aheadLook = pos.clone().add(tangent);
          this.currentLookAt.lerp(aheadLook, 0.08);
        } else {
          // Bắt đầu hướng dần góc nhìn về rương đích
          const blendFactor = (t - 0.45) / 0.55;
          this.currentLookAt.lerp(finalLookTarget, Math.min(1, blendFactor * 0.15 + 0.05));
        }

        this.camera.lookAt(this.currentLookAt);

        // Phát sự kiện tiến trình camera cho hệ thống
        globalEventBus.emit('CAMERA_PROGRESS', { progress: t });

        // Quét tia năng lượng qua các rương gần nhất trong lúc bay
        const scanIndex = Math.min(
          allChests.length - 1,
          Math.floor(t * allChests.length * 1.5) % allChests.length
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

        // Phát sự kiện đã tới rương
        globalEventBus.emit('CHEST_ARRIVED', {
          chestId: targetChest.id,
          studentName: targetChest.student.name,
          position: targetChest.position
        });

        // Tự động kích hoạt nắp rương mở sau 0.4s
        gsap.delayedCall(0.4, () => {
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
   * Tạo mesh đường line hiển thị quỹ đạo CatmullRomCurve3 để debug
   */
  public createTrajectoryLineMesh(curve?: THREE.CatmullRomCurve3): THREE.Line {
    const activeCurve = curve || this.currentCurve;
    if (!activeCurve) {
      throw new Error('Chưa có CatmullRomCurve3 để tạo line debug.');
    }

    if (this.curveTrajectoryMesh) {
      this.curveTrajectoryMesh.geometry.dispose();
      (this.curveTrajectoryMesh.material as THREE.Material).dispose();
    }

    const points = activeCurve.getPoints(120);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: 0x00ffff,
      linewidth: 3,
      transparent: true,
      opacity: 0.85
    });

    this.curveTrajectoryMesh = new THREE.Line(geometry, material);
    this.curveTrajectoryMesh.name = 'DebugCameraTrajectory';
    return this.curveTrajectoryMesh;
  }

  public getTrajectoryLineMesh(): THREE.Line | null {
    return this.curveTrajectoryMesh;
  }

  public isCameraFlying(): boolean {
    return this.isFlying;
  }
}

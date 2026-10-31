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
  flightDuration: 6.8
};

/**
 * CameraDirector: Đạo diễn camera điện ảnh (Cinematic Camera Path)
 * Tinh chỉnh các điểm neo (waypoints) để camera lướt qua bãi biển, cầu tàu, rừng cây,
 * và sườn núi lửa mà không đâm xuyên qua bất kỳ vách đá nào, đáp thấp trước nắp rương.
 */
export class CameraDirector {
  public camera: THREE.PerspectiveCamera;
  private config: CameraDirectorConfig;
  private currentCurve: THREE.CatmullRomCurve3 | null = null;
  private currentTween: gsap.core.Tween | null = null;
  private currentLookAt: THREE.Vector3;
  private isFlying: boolean = false;
  private curveTrajectoryMesh: THREE.Line | null = null;
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
   * Xây dựng đường bay CatmullRomCurve3 lướt qua các địa danh của đảo (cầu tàu, rừng cây, sườn núi)
   * và kiểm tra cao độ địa hình để không đâm vào vách đá
   */
  public buildCinematicPath(
    targetChest: ChestData,
    allChests: ChestData[]
  ): THREE.CatmullRomCurve3 {
    const points: THREE.Vector3[] = [];
    const sampler = this.heightSampler;

    // Điểm 0: Vị trí xuất phát của camera
    points.push(this.camera.position.clone());

    // Vector hướng mặt trước của rương
    const forward = new THREE.Vector3(
      Math.sin(targetChest.rotationY),
      0,
      Math.cos(targetChest.rotationY)
    ).normalize();

    // Điểm đích cuối: Cách rương 3.4m, góc nhìn thấp ngước lên nắp rương
    const finalCameraPos = targetChest.position.clone()
      .add(forward.clone().multiplyScalar(3.4))
      .add(new THREE.Vector3(0, 0.45, 0));

    // Điểm cận đích: Cách rương 9m trên không
    const preArrivalPos = targetChest.position.clone()
      .add(forward.clone().multiplyScalar(9.2))
      .add(new THREE.Vector3(0, 3.2, 0));

    // Tọa độ đặc trưng trên đảo Codex
    // 1. Cầu tàu gỗ (Pier) hướng Tây Nam: (-28, 3, -10)
    // 2. Bãi biển bờ cát (Beach): bán kính 36m
    // 3. Rừng cây & tàn tích đá (Ruins & Forest): (12, 11, 3)
    const targetIdx = targetChest.index;

    // Waypoint 1: Lướt sà xuống bờ biển phía cầu tàu
    const wpCoastal = new THREE.Vector3(-24, 18, 22);
    if (sampler) {
      wpCoastal.y = Math.max(wpCoastal.y, sampler(wpCoastal.x, wpCoastal.z) + 12);
    }
    points.push(wpCoastal);

    // Waypoint 2: Lượn vòng qua khu rừng cây và mỏm đá sinh thái
    const midChest = allChests[Math.floor(targetIdx * 0.45)] || allChests[5];
    const wpMid = midChest.position.clone().add(new THREE.Vector3(-6, 9.5, 6));
    if (sampler) {
      wpMid.y = Math.max(wpMid.y, sampler(wpMid.x, wpMid.z) + 8.5);
    }
    points.push(wpMid);

    // Waypoint 3: Lượn dọc sườn núi lửa tiến về phía rương mục tiêu
    const nearChest = allChests[Math.floor(targetIdx * 0.8)] || targetChest;
    const wpRidge = nearChest.position.clone().add(new THREE.Vector3(5, 7.0, -4));
    if (sampler) {
      wpRidge.y = Math.max(wpRidge.y, sampler(wpRidge.x, wpRidge.z) + 6.5);
    }
    points.push(wpRidge);

    // Điểm cận đích và điểm đáp
    if (sampler) {
      preArrivalPos.y = Math.max(preArrivalPos.y, sampler(preArrivalPos.x, preArrivalPos.z) + 2.0);
      finalCameraPos.y = Math.max(finalCameraPos.y, sampler(finalCameraPos.x, finalCameraPos.z) + 0.35);
    }

    points.push(preArrivalPos);
    points.push(finalCameraPos);

    // Centripetal CatmullRomCurve3 chống giật góc và ngăn ngừa overshoot xuyên đất
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

    // Điểm nhìn mục tiêu: nắp rương và ổ khóa mạ vàng
    const finalLookTarget = targetChest.position.clone().add(new THREE.Vector3(0, 0.75, 0));
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

        // Vị trí camera dọc theo CatmullRomCurve3
        const pos = curve.getPointAt(t);
        this.camera.position.copy(pos);

        // Chuyển đổi điểm nhìn: nửa đầu nhìn về phía trước đường bay, nửa sau hướng vào rương
        if (t < 0.45) {
          const tangent = curve.getTangentAt(t).multiplyScalar(10);
          const aheadLook = pos.clone().add(tangent);
          this.currentLookAt.lerp(aheadLook, 0.08);
        } else {
          const blendFactor = (t - 0.45) / 0.55;
          this.currentLookAt.lerp(finalLookTarget, Math.min(1, blendFactor * 0.18 + 0.06));
        }

        this.camera.lookAt(this.currentLookAt);

        // Bắn sự kiện tiến trình camera
        globalEventBus.emit('CAMERA_PROGRESS', { progress: t });

        // Quét tia năng lượng qua các rương dọc đường
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

        globalEventBus.emit('CHEST_ARRIVED', {
          chestId: targetChest.id,
          studentName: targetChest.student.name,
          position: targetChest.position
        });

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
      color: 0x00f0ff,
      linewidth: 3,
      transparent: true,
      opacity: 0.8
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

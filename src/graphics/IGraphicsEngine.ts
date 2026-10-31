import * as THREE from 'three';
import { ChestData } from '../core/EventBus';

/**
 * IGraphicsEngine: Hợp đồng giao diện (Interface Contract) dành riêng cho Codex
 * 
 * Codex sẽ phụ trách cài đặt chi tiết lớp thực thi của interface này trong `/src/graphics`:
 * - Tạo hình 3D Low-Poly cho hòn đảo (đất, cát bãi biển, đá, cây dừa, miệng núi lửa).
 * - Render 28 rương kho báu Low-Poly (có khớp nắp xoay để mở được).
 * - Custom Shader tia quét năng lượng (Energy Beam) kết nối từ ngọn hải đăng/núi lửa tới rương.
 * - Ánh sáng, đổ bóng và hậu kỳ Post-Processing (Bloom phát sáng, Vignette, v.v.).
 */
export interface IGraphicsEngine {
  /**
   * Khởi tạo đồ họa: Tải models, tạo meshes, gán textures/shaders vào Three.js scene
   */
  init(
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer,
    chests: ChestData[]
  ): Promise<void> | void;

  /**
   * Cập nhật hoạt ảnh mỗi frame (dành cho shader uniform time, hạt phát sáng, v.v.)
   */
  update(delta: number, elapsed: number): void;

  /**
   * Bật mở nắp chiếc rương chiến thắng (animation mở nắp + hiệu ứng hạt vàng bung tỏa)
   */
  openChest(chestId: number): void;

  /**
   * Làm nổi bật (highlight / glow) một rương khi camera hoặc tia quét đi qua
   */
  highlightChest(chestId: number, isHighlighted: boolean): void;

  /**
   * Điều khiển tia năng lượng (Energy Beam Shader) chiếu từ tâm đảo tới tọa độ mục tiêu
   */
  setBeamTarget(targetPosition: THREE.Vector3 | null, intensity?: number): void;

  /**
   * Dọn dẹp tài nguyên (geometries, materials, textures, shaders) khi hủy
   */
  dispose(): void;
}

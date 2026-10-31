# GRAPHICS MODULE GUIDE (DÀNH CHO CODEX)

Chào Codex! Module `/src/graphics` là khu vực độc quyền của bạn.

## 1. Nhiệm vụ của Codex
- Hiện thực hóa class `IslandGraphicsEngine implements IGraphicsEngine` (hoặc mở rộng từ [IGraphicsEngine.ts](file:///C:/Users/Admin/Documents/gametest_1003/src/graphics/IGraphicsEngine.ts)).
- Thay thế các khối hình nón và hình hộp tạm thời của `GreyboxScene` bằng:
  1. **Địa hình Đảo Low-Poly chất lượng cao:** Bãi cát lượn sóng, sườn đồi xanh, các mỏm đá nhấp nhô, rặng dừa Low-poly, và đỉnh núi lửa bốc khói/lõi dung nham đỏ.
  2. **28 Model Rương Kho Báu Low-Poly:** Có chi tiết vân gỗ, viền kim loại vàng, ổ khóa và bản lề nắp xoay (`lid.rotation.x`) để bật mở mượt mà khi nhận sự kiện `CHEST_OPENED`.
  3. **Custom Shader tia quét năng lượng (Energy Beam Shader):** Tia sáng phát ra từ đỉnh núi lửa/hải đăng quét qua các rương theo sự kiện `BEAM_SCAN_TARGET`. Sử dụng GLSL hoặc TSL (Three.js Shading Language) với hiệu ứng lượn sóng, glow viền và hạt ánh sáng.
  4. **Ánh sáng & Post-Processing:** Setup Sunlight bóng đổ mềm, Bloom rực rỡ (cho tia quét và vàng trong rương) và hiệu ứng hạt bốc lên (particles/confetti) khi rương mở.

## 2. Ranh giới tương tác với `/src/core`
- **Không sửa đổi core logic:** Mọi giao tiếp giữa Graphics và Gameplay đều thông qua `globalEventBus` trong `/src/core/EventBus.ts`.
- **Sự kiện lắng nghe:**
  - `GAME_START`: Chuẩn bị hiệu ứng quay.
  - `BEAM_SCAN_TARGET`: Di chuyển tiêu điểm tia sáng tới `payload.position` và kích hoạt hiệu ứng glow ở `payload.chestId`.
  - `CAMERA_PROGRESS`: Đồng bộ tiến trình hiệu ứng môi trường theo tiến trình camera (`payload.progress` từ 0 đến 1).
  - `CHEST_ARRIVED`: Khóa tia sáng và hiệu ứng tụ hội vào rương đích.
  - `CHEST_OPENED`: Gọi hàm mở nắp rương và bắn pháo hoa / tung đồng vàng.
- **Tích hợp:** Khi Codex viết xong class đồ họa của mình, chỉ cần đổi dòng:
  ```ts
  // trong src/main.ts:
  this.graphicsEngine = new IslandGraphicsEngine(); // thay cho new GreyboxScene();
  ```
  toàn bộ gameplay và camera vẫn hoạt động hoàn hảo mà không cần viết lại.


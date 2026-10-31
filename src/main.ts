import * as THREE from 'three';
import { ChestManager } from './core/ChestManager';
import { CameraDirector } from './core/CameraDirector';
import { GreyboxScene } from './core/GreyboxScene';
import { globalEventBus, Student } from './core/EventBus';

class GameApp {
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private clock: THREE.Clock = new THREE.Clock();

  private chestManager!: ChestManager;
  private cameraDirector!: CameraDirector;
  private graphicsEngine!: GreyboxScene;

  // UI Elements
  private btnSpinRandom!: HTMLButtonElement;
  private btnSpinTarget!: HTMLButtonElement;
  private btnResetCam!: HTMLButtonElement;
  private selectChest!: HTMLSelectElement;
  private progressBar!: HTMLElement;
  private winnerBanner!: HTMLElement;
  private winnerNameEl!: HTMLElement;
  private winnerChestIdEl!: HTMLElement;
  private systemStatusEl!: HTMLElement;

  constructor() {
    this.initDOM();
    this.initThree();
    this.initCore();
    this.initUIEvents();
    this.initGameEvents();

    window.addEventListener('resize', () => this.onResize());
    this.animate();
  }

  private initDOM(): void {
    this.btnSpinRandom = document.getElementById('btn-spin-random') as HTMLButtonElement;
    this.btnSpinTarget = document.getElementById('btn-spin-target') as HTMLButtonElement;
    this.btnResetCam = document.getElementById('btn-reset-cam') as HTMLButtonElement;
    this.selectChest = document.getElementById('select-chest') as HTMLSelectElement;
    this.progressBar = document.getElementById('progress-bar') as HTMLElement;
    this.winnerBanner = document.getElementById('winner-banner') as HTMLElement;
    this.winnerNameEl = document.getElementById('winner-name') as HTMLElement;
    this.winnerChestIdEl = document.getElementById('winner-chest-id') as HTMLElement;
    this.systemStatusEl = document.getElementById('system-status') as HTMLElement;
  }

  private initThree(): void {
    const container = document.getElementById('canvas-container')!;

    // 1. Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a1628);
    this.scene.fog = new THREE.FogExp2(0x0a1628, 0.008);

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(
      48,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);
  }

  private initCore(): void {
    // 1. Khởi tạo ChestManager với 28 rương
    this.chestManager = new ChestManager();
    const chests = this.chestManager.generateChests();

    // 2. Khởi tạo CameraDirector
    this.cameraDirector = new CameraDirector(this.camera);

    // 3. Khởi tạo Engine đồ họa (ở Giai đoạn 1 là GreyboxScene)
    this.graphicsEngine = new GreyboxScene();
    this.graphicsEngine.init(this.scene, this.camera, this.renderer, chests);

    // 4. Đổ dữ liệu 28 học sinh vào Dropdown
    chests.forEach((chest) => {
      const option = document.createElement('option');
      option.value = chest.id.toString();
      option.textContent = `#${chest.id} - ${chest.student.name} (Tầng ${chest.index < 10 ? 'Bãi biển' : chest.index < 20 ? 'Sườn núi' : 'Đỉnh núi lửa'})`;
      this.selectChest.appendChild(option);
    });
  }

  private initUIEvents(): void {
    // Nút quay ngẫu nhiên
    this.btnSpinRandom.addEventListener('click', () => {
      if (this.cameraDirector.isCameraFlying()) return;
      const winner = this.chestManager.selectWinner();
      this.startSpin(winner);
    });

    // Nút bay tới rương chỉ định
    this.btnSpinTarget.addEventListener('click', () => {
      if (this.cameraDirector.isCameraFlying()) return;
      const targetId = parseInt(this.selectChest.value, 10);
      if (isNaN(targetId)) {
        alert('Vui lòng chọn 1 rương trong danh sách!');
        return;
      }
      const winner = this.chestManager.selectWinner(targetId);
      this.startSpin(winner);
    });

    // Nút Reset camera
    this.btnResetCam.addEventListener('click', () => {
      this.cameraDirector.resetToOverview(false);
      this.winnerBanner.classList.remove('visible');
      this.progressBar.style.width = '0%';
      this.systemStatusEl.textContent = 'Sẵn sàng (Chế độ Greybox)';
      this.setButtonsDisabled(false);
    });
  }

  private initGameEvents(): void {
    // Cập nhật thanh tiến trình bay
    globalEventBus.on('CAMERA_PROGRESS', ({ progress }) => {
      this.progressBar.style.width = `${(progress * 100).toFixed(1)}%`;
      this.systemStatusEl.textContent = `Camera lướt đảo: ${(progress * 100).toFixed(0)}%`;
    });

    // Khi camera đáp xuống trước rương
    globalEventBus.on('CHEST_ARRIVED', ({ chestId, studentName }) => {
      this.systemStatusEl.textContent = `Đã đáp tại rương #${chestId}`;
      this.winnerNameEl.textContent = studentName;
      this.winnerChestIdEl.textContent = `Rương May Mắn #${chestId}`;
      this.winnerBanner.classList.add('visible');
    });

    // Khi nắp rương bật mở
    globalEventBus.on('CHEST_OPENED', ({ chestId, studentName }) => {
      this.systemStatusEl.textContent = `🎉 CHÚC MỪNG: ${studentName}!`;
      this.setButtonsDisabled(false);
    });
  }

  private startSpin(winnerChest: any): void {
    this.setButtonsDisabled(true);
    this.winnerBanner.classList.remove('visible');

    // 1. Bắn sự kiện GAME_START
    const students: Student[] = this.chestManager.getAllChests().map((c) => c.student);
    globalEventBus.emit('GAME_START', { students });

    // 2. Tạo đường line CatmullRom hiển thị trong Greybox scene để kiểm tra
    const curve = this.cameraDirector.buildCinematicPath(winnerChest, this.chestManager.getAllChests());
    const lineMesh = this.cameraDirector.createTrajectoryLineMesh(curve);
    this.graphicsEngine.setTrajectoryLine(lineMesh);

    // 3. Thực hiện chuyến bay điện ảnh
    this.cameraDirector.flyToChest(winnerChest, this.chestManager.getAllChests());
  }

  private setButtonsDisabled(disabled: boolean): void {
    this.btnSpinRandom.disabled = disabled;
    this.btnSpinTarget.disabled = disabled;
  }

  private onResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  private animate = (): void => {
    requestAnimationFrame(this.animate);
    const delta = this.clock.getDelta();
    const elapsed = this.clock.getElapsedTime();

    this.graphicsEngine.update(delta, elapsed);
    this.renderer.render(this.scene, this.camera);
  };
}

// Khởi chạy game khi DOM đã sẵn sàng
window.addEventListener('DOMContentLoaded', () => {
  new GameApp();
});

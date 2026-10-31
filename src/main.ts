import * as THREE from 'three';
import { ChestManager } from './core/ChestManager';
import { CameraDirector } from './core/CameraDirector';
import { GraphicsEngine } from './graphics/GraphicsEngine';
import { globalEventBus, Student, ChestData } from './core/EventBus';

class GameApp {
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private clock: THREE.Clock = new THREE.Clock();

  private chestManager!: ChestManager;
  private cameraDirector!: CameraDirector;
  private graphicsEngine!: GraphicsEngine;
  private allChests: ChestData[] = [];

  // Ultra-Minimalist UI Elements
  private btnStart!: HTMLButtonElement;
  private startContainer!: HTMLElement;
  private btnSettings!: HTMLButtonElement;
  private settingsPopover!: HTMLElement;
  private btnCloseSettings!: HTMLButtonElement;
  private selectChest!: HTMLSelectElement;
  private btnResetCam!: HTMLButtonElement;
  private studentsPreview!: HTMLElement;
  private winnerBanner!: HTMLElement;
  private winnerNameEl!: HTMLElement;
  private winnerChestIdEl!: HTMLElement;
  private btnCloseWinner!: HTMLButtonElement;

  constructor() {
    this.initDOM();
    this.initThree();
    this.initCore();
    this.initUIEvents();
    this.initGameEvents();

    window.addEventListener('resize', () => this.onResize());
    (window as any).__gameApp = this;
    this.animate();
  }

  private initDOM(): void {
    this.btnStart = document.getElementById('btn-start') as HTMLButtonElement;
    this.startContainer = document.getElementById('start-container') as HTMLElement;
    this.btnSettings = document.getElementById('btn-settings') as HTMLButtonElement;
    this.settingsPopover = document.getElementById('settings-popover') as HTMLElement;
    this.btnCloseSettings = document.getElementById('btn-close-settings') as HTMLButtonElement;
    this.selectChest = document.getElementById('select-chest') as HTMLSelectElement;
    this.btnResetCam = document.getElementById('btn-reset-cam') as HTMLButtonElement;
    this.studentsPreview = document.getElementById('students-preview') as HTMLElement;
    this.winnerBanner = document.getElementById('winner-banner') as HTMLElement;
    this.winnerNameEl = document.getElementById('winner-name') as HTMLElement;
    this.winnerChestIdEl = document.getElementById('winner-chest-id') as HTMLElement;
    this.btnCloseWinner = document.getElementById('btn-close-winner') as HTMLButtonElement;
  }

  private initThree(): void {
    const container = document.getElementById('app')!;

    // 1. Scene nhiệt đới tươi sáng
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x9acbdc); // Fallback khi shader bầu trời chưa được khởi tạo
    this.scene.fog = new THREE.FogExp2(0xaacdd0, 0.0025);

    // 2. Camera: Vị trí ban đầu nhìn thẳng góc 45 độ xuống hòn đảo và 28 chiếc rương
    this.camera = new THREE.PerspectiveCamera(
      48,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 35, 65);
    this.camera.lookAt(0, 5, 0);

    // 3. Renderer: gắn trực tiếp vào #app kích thước 100vw x 100vh
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.innerHTML = '';
    container.appendChild(this.renderer.domElement);
  }

  private initCore(): void {
    // 1. Khởi tạo Đồ họa Đảo Low-Poly do Codex xây dựng
    this.graphicsEngine = new GraphicsEngine();
    const heightSampler = (x: number, z: number) => this.graphicsEngine.getTerrainHeightAt(x, z);

    // 2. Quản lý 28 rương: Phân bổ dọc con đường mòn xoắn ốc và neo sát mặt đất
    this.chestManager = new ChestManager();
    this.allChests = this.chestManager.generateChests(undefined, heightSampler);

    // 3. Khởi tạo Graphics với dữ liệu rương chuẩn hóa
    this.graphicsEngine.init(this.scene, this.camera, this.renderer, this.allChests);

    // 4. Đạo diễn Camera: Tích hợp hàm kiểm tra cao độ địa hình để chống va chạm vách đá
    this.cameraDirector = new CameraDirector(this.camera);
    this.cameraDirector.setHeightSampler(heightSampler);

    // 4. Nạp dữ liệu 28 học sinh vào Popover cài đặt
    this.allChests.forEach((chest) => {
      // Dropdown chọn rương chỉ định
      const option = document.createElement('option');
      option.value = chest.id.toString();
      option.textContent = `#${chest.id} - ${chest.student.name}`;
      this.selectChest.appendChild(option);

      // Danh sách cuộn xem nhanh 28 học sinh
      const item = document.createElement('div');
      item.className = 'student-item';
      const zoneName =
        chest.index < 7
          ? 'Bãi biển & Cọ'
          : chest.index < 14
          ? 'Thung lũng & Suối'
          : chest.index < 21
          ? 'Rừng cây & Đồi xanh'
          : 'Cao nguyên & Đỉnh';
      item.innerHTML = `<span>#${chest.id} ${chest.student.name}</span> <span style="color:#34d399;">${zoneName}</span>`;
      this.studentsPreview.appendChild(item);
    });
  }

  private initUIEvents(): void {
    // 1. Nút BẮT ĐẦU duy nhất ở màn hình chính
    this.btnStart.addEventListener('click', () => {
      if (this.cameraDirector.isCameraFlying()) return;

      // Ẩn nút Bắt đầu hoàn toàn để nhường 100% không gian cho 3D
      this.startContainer.classList.add('hidden');
      this.settingsPopover.classList.add('hidden');

      const targetId = parseInt(this.selectChest.value, 10);
      const winner = isNaN(targetId)
        ? this.chestManager.selectWinner()
        : this.chestManager.selectWinner(targetId);

      this.startFlight(winner);
    });

    // 2. Toggle Menu Bánh Răng (⚙️)
    this.btnSettings.addEventListener('click', (e) => {
      e.stopPropagation();
      this.settingsPopover.classList.toggle('hidden');
    });

    this.btnCloseSettings.addEventListener('click', () => {
      this.settingsPopover.classList.add('hidden');
    });

    // Bấm ra ngoài đóng Popover
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (!this.settingsPopover.contains(target) && target !== this.btnSettings) {
        this.settingsPopover.classList.add('hidden');
      }
    });

    // 3. Reset Camera
    this.btnResetCam.addEventListener('click', () => {
      this.cameraDirector.resetToOverview(false);
      this.winnerBanner.classList.add('hidden');
      this.startContainer.classList.remove('hidden');
      this.settingsPopover.classList.add('hidden');
    });

    // 4. Nút Tiếp tục / Chơi lại ở Winner Banner
    this.btnCloseWinner.addEventListener('click', () => {
      this.winnerBanner.classList.add('hidden');
      this.cameraDirector.resetToOverview(false);
      this.startContainer.classList.remove('hidden');
    });
  }

  private initGameEvents(): void {
    globalEventBus.on('CHEST_ARRIVED', ({ chestId, studentName }) => {
      this.winnerNameEl.textContent = studentName;
      this.winnerChestIdEl.textContent = `Rương May Mắn #${chestId}`;
      this.winnerBanner.classList.remove('hidden');
    });
  }

  private startFlight(winnerChest: ChestData): void {
    this.winnerBanner.classList.add('hidden');

    const students: Student[] = this.allChests.map((c) => c.student);
    globalEventBus.emit('GAME_START', { students });

    // Hoạt ảnh bay mượt mà không có bất kỳ đường chỉ trắng nào
    this.cameraDirector.flyToChest(winnerChest, this.allChests);
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

// Khởi tạo app an toàn bất kể trạng thái DOM
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', () => new GameApp());
} else {
  new GameApp();
}

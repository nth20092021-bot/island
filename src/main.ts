import gsap from 'gsap';
import * as THREE from 'three';
import { ChestManager } from './core/ChestManager';
import { CameraDirector } from './core/CameraDirector';
import { GraphicsEngine } from './graphics/GraphicsEngine';
import { RendererManager } from './graphics/RendererManager';
import { SKY_HORIZON_FOG } from './graphics/Shaders/SkyShader';
import { SUN_DIRECTION, FOG_DENSITY } from './core/IslandLayout';
import { globalEventBus, Student, ChestData } from './core/EventBus';
import { SoundEngine } from './core/SoundEngine';

class GameApp {
  private rendererManager!: RendererManager;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private clock: THREE.Clock = new THREE.Clock();
  private readonly sunDirection = new THREE.Vector3(...SUN_DIRECTION).normalize();

  private chestManager!: ChestManager;
  private cameraDirector!: CameraDirector;
  private graphicsEngine!: GraphicsEngine;
  private allChests: ChestData[] = [];
  private readonly sound = new SoundEngine();

  // Ultra-Minimalist UI Elements
  private btnStart!: HTMLButtonElement;
  private startContainer!: HTMLElement;
  private startEyebrow!: HTMLElement;
  private btnSettings!: HTMLButtonElement;
  private settingsPopover!: HTMLElement;
  private btnCloseSettings!: HTMLButtonElement;
  private selectChest!: HTMLSelectElement;
  private btnResetCam!: HTMLButtonElement;
  private btnSound!: HTMLButtonElement;
  private studentsPreview!: HTMLElement;
  private winnerBanner!: HTMLElement;
  private winnerNameEl!: HTMLElement;
  private winnerChestIdEl!: HTMLElement;
  private btnCloseWinner!: HTMLButtonElement;
  private btnOpenQuiz!: HTMLButtonElement;
  private goldenFlash!: HTMLElement;

  constructor() {
    this.initDOM();
    this.initThree();
    this.initCore();
    this.initUIEvents();
    this.initGameEvents();

    window.addEventListener('resize', () => this.onResize());
    window.addEventListener('pointerdown', () => this.sound.unlock(), { once: true });
    (window as any).__gameApp = this;
    this.animate();
  }

  private initDOM(): void {
    this.btnStart = document.getElementById('btn-start') as HTMLButtonElement;
    this.startContainer = document.getElementById('start-container') as HTMLElement;
    this.startEyebrow = this.startContainer.querySelector('.start-eyebrow') as HTMLElement;
    this.btnSettings = document.getElementById('btn-settings') as HTMLButtonElement;
    this.settingsPopover = document.getElementById('settings-popover') as HTMLElement;
    this.btnCloseSettings = document.getElementById('btn-close-settings') as HTMLButtonElement;
    this.selectChest = document.getElementById('select-chest') as HTMLSelectElement;
    this.btnResetCam = document.getElementById('btn-reset-cam') as HTMLButtonElement;
    this.btnSound = document.getElementById('btn-sound') as HTMLButtonElement;
    this.studentsPreview = document.getElementById('students-preview') as HTMLElement;
    this.winnerBanner = document.getElementById('winner-banner') as HTMLElement;
    this.winnerNameEl = document.getElementById('winner-name') as HTMLElement;
    this.winnerChestIdEl = document.getElementById('winner-chest-id') as HTMLElement;
    this.btnCloseWinner = document.getElementById('btn-close-winner') as HTMLButtonElement;
    this.btnOpenQuiz = document.getElementById('btn-open-quiz') as HTMLButtonElement;
    this.goldenFlash = document.getElementById('golden-flash') as HTMLElement;

    this.syncSoundButton();
    this.resetWinnerBanner();
  }

  private resetWinnerBanner(): void {
    this.winnerBanner.classList.add('hidden');
    this.winnerNameEl.textContent = '';
    this.winnerChestIdEl.textContent = '';
    gsap.killTweensOf(this.goldenFlash);
    this.goldenFlash.style.opacity = '0';
  }

  private initThree(): void {
    const container = document.getElementById('app')!;

    // 1. Scene hoàng hôn Đại Việt: sương ấm khớp sắc chân trời của sky shader
    this.scene = new THREE.Scene();
    this.scene.background = null; // Bầu trời do SkyShader quản lý toàn diện
    this.scene.fog = new THREE.FogExp2(SKY_HORIZON_FOG, FOG_DENSITY);

    // 2. Camera: Vị trí ban đầu nhìn thẳng góc 45 độ xuống hòn đảo và 28 chiếc rương
    this.camera = new THREE.PerspectiveCamera(
      48,
      window.innerWidth / window.innerHeight,
      0.1,
      15000
    );
    this.camera.position.set(0, 76, 163);
    this.camera.lookAt(0, 14, 0);

    // 3. Renderer + hậu kỳ hoàng hôn: MSAA, tia nắng, bloom, color grade
    container.innerHTML = '';
    this.rendererManager = new RendererManager(this.scene, this.camera, container, {
      bloomStrength: 0.30,
      bloomRadius: 0.55,
      bloomThreshold: 1.55,
      godRayStrength: 0.55
    });
  }

  private initCore(): void {
    // 1. Khởi tạo Đồ họa Đảo Low-Poly do Codex xây dựng
    this.graphicsEngine = new GraphicsEngine();
    const heightSampler = (x: number, z: number) => this.graphicsEngine.getTerrainHeightAt(x, z);

    // 2. Rải đều 28 rương trên bốn vành đảo, tránh suối/công trình và neo sát mặt đất
    this.chestManager = new ChestManager();
    this.allChests = this.chestManager.generateChests(undefined, heightSampler);

    // Khôi phục các rương đã gọi khi quay về từ game trắc nghiệm (?used=...),
    // sau đó xoá tham số khỏi URL để F5 làm mới trang sẽ đặt lại toàn bộ rương.
    this.chestManager.markUsed(this.takeUsedIdsFromUrl());
    this.updateStartAvailability();

    // 3. Khởi tạo Graphics với dữ liệu rương chuẩn hóa
    this.graphicsEngine.init(this.scene, this.camera, this.rendererManager.renderer, this.allChests);

    // 4. Đạo diễn Camera: Tích hợp hàm kiểm tra cao độ địa hình để chống va chạm vách đá
    this.cameraDirector = new CameraDirector(this.camera);
    this.cameraDirector.setHeightSampler(heightSampler);
    this.cameraDirector.setObstacleSampler(
      (x, z, fromY) => this.graphicsEngine.getCameraObstacleTopAt(x, z, fromY)
    );
    this.cameraDirector.setSightBlockedSampler(
      (from, to) => this.graphicsEngine.isCameraPathBlocked(from, to)
    );

    // 4. Nạp dữ liệu 28 học sinh vào Popover cài đặt
    this.rebuildChestLists();
  }

  private rebuildChestLists(): void {
    const used = new Set(this.chestManager.getUsedIds());

    this.selectChest.innerHTML = '<option value="">-- Ngẫu nhiên --</option>';
    this.studentsPreview.innerHTML = '';

    this.allChests.forEach((chest) => {
      const usedNow = used.has(chest.id);

      const option = document.createElement('option');
      option.value = chest.id.toString();
      option.textContent = `#${chest.id} - ${chest.student.name}${usedNow ? ' (đã gọi)' : ''}`;
      option.disabled = usedNow;
      this.selectChest.appendChild(option);

      const item = document.createElement('div');
      item.className = usedNow ? 'student-item used' : 'student-item';
      const zoneName =
        chest.index < 7
          ? 'Bãi biển & Cột đá'
          : chest.index < 14
          ? 'Ven rừng & Suối'
          : chest.index < 21
          ? 'Rừng cây & Đàn tế'
          : 'Cao nguyên & Đài cổ';
      item.innerHTML = usedNow
        ? `<span>#${chest.id} ${chest.student.name}</span> <span style="color:#a98563;">Đã gọi</span>`
        : `<span>#${chest.id} ${chest.student.name}</span> <span style="color:#34d399;">${zoneName}</span>`;
      this.studentsPreview.appendChild(item);
    });
  }

  private updateStartAvailability(): void {
    const allUsed = this.chestManager.getAvailableChests().length === 0;
    this.btnStart.disabled = allUsed;
    this.startEyebrow.textContent = allUsed
      ? 'Đã gọi hết 28 rương — hãy làm mới trang'
      : 'Hòn đảo kho báu';
  }

  private takeUsedIdsFromUrl(): number[] {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get('used');
    if (raw === null) return [];

    params.delete('used');
    const query = params.toString();
    window.history.replaceState(
      null,
      '',
      window.location.pathname + (query ? `?${query}` : '') + window.location.hash
    );

    return raw
      .split(',')
      .map((value) => parseInt(value, 10))
      .filter((value) => !isNaN(value));
  }

  private syncSoundButton(): void {
    this.btnSound.textContent = this.sound.isMuted() ? '🔇 Âm thanh: Tắt' : '🔊 Âm thanh: Bật';
  }

  private initUIEvents(): void {
    // 1. Nút BẮT ĐẦU duy nhất ở màn hình chính
    this.btnStart.addEventListener('click', () => {
      if (this.cameraDirector.isCameraFlying()) return;

      this.sound.unlock();
      this.sound.click();

      const targetId = parseInt(this.selectChest.value, 10);
      const winner = isNaN(targetId)
        ? this.chestManager.selectWinner()
        : this.chestManager.selectWinner(targetId);

      if (!winner) {
        this.sound.allUsed();
        this.updateStartAvailability();
        return;
      }

      // Đánh dấu đã gọi ngay khi chọn: rương này sẽ không bao giờ xuất hiện lại
      // cho tới khi làm mới trang.
      this.chestManager.markUsed([winner.id]);
      this.rebuildChestLists();
      this.updateStartAvailability();

      try {
        localStorage.setItem('selectedStudent', winner.student.name);
        localStorage.setItem('selectedChestId', winner.id.toString());
      } catch {
        /* localStorage có thể bị chặn */
      }

      // Ẩn nút Bắt đầu hoàn toàn để nhường 100% không gian cho 3D
      this.startContainer.classList.add('hidden');
      this.settingsPopover.classList.add('hidden');

      this.sound.start();
      this.startFlight(winner);
    });

    // 2. Toggle Menu Bánh Răng (⚙️)
    this.btnSettings.addEventListener('click', (e) => {
      e.stopPropagation();
      this.sound.unlock();
      this.sound.click();
      this.settingsPopover.classList.toggle('hidden');
    });

    this.btnCloseSettings.addEventListener('click', () => {
      this.sound.click();
      this.settingsPopover.classList.add('hidden');
    });

    // Bấm ra ngoài đóng Popover
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (!this.settingsPopover.contains(target) && target !== this.btnSettings) {
        this.settingsPopover.classList.add('hidden');
      }
    });

    // 3. Bật/tắt âm thanh (lưu lựa chọn vào localStorage)
    this.btnSound.addEventListener('click', () => {
      this.sound.unlock();
      const muted = this.sound.toggle();
      this.syncSoundButton();
      if (!muted) this.sound.click();
    });

    // 4. Reset Camera: Trở về góc nhìn tổng quan & reset lại rương
    this.btnResetCam.addEventListener('click', () => {
      this.sound.click();
      this.returnToOverview();
    });

    // 5. Nút "Trở lại" ở Winner Banner
    this.btnCloseWinner.addEventListener('click', () => {
      this.sound.click();
      this.returnToOverview();
    });

    // 6. Nút "Câu hỏi": sang game trắc nghiệm, mang theo danh sách rương đã gọi
    this.btnOpenQuiz.addEventListener('click', () => {
      this.sound.click();
      this.openQuizGame();
    });
  }

  private returnToOverview(): void {
    this.sound.reset();
    this.cameraDirector.resetToOverview(false);
    this.resetWinnerBanner();
    this.startContainer.classList.remove('hidden');
    this.settingsPopover.classList.add('hidden');
    this.graphicsEngine.resetAll();
    this.rebuildChestLists();
    this.updateStartAvailability();
  }

  private openQuizGame(): void {
    const url = new URL('./tracnghiem_1003/index.html', window.location.href);
    const studentName = this.winnerNameEl.textContent?.trim();
    const used = this.chestManager.getUsedIds().join(',');

    if (studentName) url.searchParams.set('student', studentName);
    if (used) url.searchParams.set('used', used);

    const target = url.toString();
    const exit = (window as unknown as { __islandExitToQuiz?: (u: string) => void }).__islandExitToQuiz;
    if (typeof exit === 'function') exit(target);
    else window.location.href = target;
  }

  private initGameEvents(): void {
    globalEventBus.on('CHEST_ARRIVED', ({ chestId, studentName }) => {
      // Lưu sẵn thông tin người thắng, đợi ánh sáng bùng nổ rồi mới hiển thị
      this.winnerNameEl.textContent = studentName;
      this.winnerChestIdEl.textContent = `Rương May Mắn #${chestId}`;
      this.sound.arrive();
    });

    // Khi mở rương: Sáng lên khắp màn hình trong khoảng 1s rồi mờ dần đưa ra tên học sinh trong rương
    globalEventBus.on('CHEST_OPENED', () => {
      this.sound.open();

      // 1. Sáng bừng lên khắp màn hình
      gsap.to(this.goldenFlash, {
        opacity: 1,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          // 2. Giữ ánh sáng rực rỡ khắp màn hình trong khoảng 1s
          gsap.delayedCall(0.9, () => {
            // 3. Mờ dần ánh sáng rực rỡ
            gsap.to(this.goldenFlash, {
              opacity: 0,
              duration: 0.9,
              ease: 'power2.out'
            });

            // 4. Đưa ra tên học sinh trong rương trang trọng
            this.winnerBanner.classList.remove('hidden');
            this.sound.win();
          });
        }
      });
    });
  }

  private startFlight(winnerChest: ChestData): void {
    this.resetWinnerBanner();

    const students: Student[] = this.allChests.map((c) => c.student);
    globalEventBus.emit('GAME_START', { students });

    // Hoạt ảnh bay mượt mà không có bất kỳ đường chỉ trắng nào
    this.cameraDirector.flyToChest(winnerChest, this.allChests);
  }

  private onResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.rendererManager.resize(window.innerWidth, window.innerHeight);
  }

  private animate = (): void => {
    requestAnimationFrame(this.animate);
    const delta = this.clock.getDelta();
    const elapsed = this.clock.getElapsedTime();

    this.graphicsEngine.update(delta, elapsed);
    this.rendererManager.updateSun(this.sunDirection);
    this.rendererManager.render(elapsed);
  };
}

/**
 * Tự động đẩy sang Google Chrome / trình duyệt ngoài nếu mở trong WebView phụ (Messenger, Facebook, Zalo...)
 */
function handleInAppBrowser(): void {
  const ua = navigator.userAgent || navigator.vendor || '';
  const isInApp = /FBAN|FBAV|FB_IAB|FBIOS|Messenger|Zalo|Instagram|TikTok|Line/i.test(ua);
  if (!isInApp) return;

  const href = window.location.href;
  const isAndroid = /Android/i.test(ua);
  const noScheme = href.replace(/^https?:\/\//, '');

  if (isAndroid) {
    // Tự động chuyển thẳng sang Google Chrome trên Android qua Chrome Intent
    window.location.href = `intent://${noScheme}#Intent;scheme=https;package=com.android.chrome;end;`;
  } else {
    // Thử scheme Google Chrome trên iOS
    window.location.href = `googlechrome://${noScheme}`;
  }

  // Banner hỗ trợ bấm thủ công nếu app chặn tự động chuyển hướng
  const promptEl = document.createElement('div');
  promptEl.id = 'inapp-browser-prompt';
  promptEl.className = 'inapp-prompt';
  promptEl.innerHTML = `
    <div class="inapp-prompt-content">
      <span>🚀 Đang mở trong Messenger. Bấm để mở bằng <b>Google Chrome</b> cho trải nghiệm 3D mượt nhất!</span>
      <button id="btn-open-external" class="inapp-btn">Mở bằng Google</button>
      <button id="btn-close-inapp" class="inapp-close" aria-label="Đóng">✕</button>
    </div>
  `;
  document.body.prepend(promptEl);

  document.getElementById('btn-open-external')?.addEventListener('click', () => {
    if (isAndroid) {
      window.location.href = `intent://${noScheme}#Intent;scheme=https;package=com.android.chrome;end;`;
    } else {
      window.location.href = `googlechrome://${noScheme}`;
    }
  });

  document.getElementById('btn-close-inapp')?.addEventListener('click', () => {
    promptEl.remove();
  });
}

// Khởi tạo app an toàn bất kể trạng thái DOM
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', () => {
    handleInAppBrowser();
    new GameApp();
  });
} else {
  handleInAppBrowser();
  new GameApp();
}

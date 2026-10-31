import * as THREE from 'three';
import { ChestData, Student } from './EventBus';

export const DEFAULT_STUDENTS: Student[] = [
  { id: 1, name: 'Nguyễn An Bình' },
  { id: 2, name: 'Trần Bảo Châu' },
  { id: 3, name: 'Lê Hoàng Dũng' },
  { id: 4, name: 'Phạm Minh Đức' },
  { id: 5, name: 'Hoàng Gia Hân' },
  { id: 6, name: 'Vũ Khánh Huyền' },
  { id: 7, name: 'Đặng Tuấn Kiệt' },
  { id: 8, name: 'Bùi Phương Linh' },
  { id: 9, name: 'Đỗ Hải Nam' },
  { id: 10, name: 'Hồ Nhật Minh' },
  { id: 11, name: 'Ngô Thanh Nga' },
  { id: 12, name: 'Dương Phúc Nguyên' },
  { id: 13, name: 'Lý Thảo Nhi' },
  { id: 14, name: 'Mai Đăng Khoa' },
  { id: 15, name: 'Trịnh Hoài Phong' },
  { id: 16, name: 'Lương Bảo Phúc' },
  { id: 17, name: 'Đinh Diệu Quỳnh' },
  { id: 18, name: 'Phan Tấn Phát' },
  { id: 19, name: 'Võ Minh Quân' },
  { id: 20, name: 'Tạ Thục Quyên' },
  { id: 21, name: 'Cao Ngọc Sơn' },
  { id: 22, name: 'Lâm Tuệ Tâm' },
  { id: 23, name: 'Nguyễn Thành Trung' },
  { id: 24, name: 'Hà Cẩm Tú' },
  { id: 25, name: 'Đoàn Quang Vinh' },
  { id: 26, name: 'Trương Như Ý' },
  { id: 27, name: 'Châu Trọng Tín' },
  { id: 28, name: 'Huỳnh Kim Yến' }
];

export interface IslandConfig {
  beachRadius: number;     // Bán kính bãi biển (ngoài cùng) = 40
  volcanoRadius: number;   // Bán kính miệng núi lửa = 9
  spiralTurns: number;     // 2.4 vòng xoắn ốc
  totalChests: number;     // Đúng 28 rương
  beachHeight: number;     // Độ cao bãi biển
  volcanoHeight: number;   // Độ cao đỉnh núi lửa
}

export const DEFAULT_ISLAND_CONFIG: IslandConfig = {
  beachRadius: 40.0,
  volcanoRadius: 9.0,
  spiralTurns: 2.4,
  totalChests: 28,
  beachHeight: 1.0,
  volcanoHeight: 22.0
};

export type HeightSampler = (x: number, z: number) => number;

/**
 * ChestManager: Quản lý vị trí không gian 3D của đúng 28 chiếc rương kho báu
 * phân bổ dọc theo con đường mòn xoắn ốc (spiral trail) tự nhiên của đảo,
 * neo độ cao khít với bề mặt địa hình 3D (không lơ lửng, không chìm vào đá).
 */
export class ChestManager {
  private chests: ChestData[] = [];
  private winningChest: ChestData | null = null;
  private config: IslandConfig;

  constructor(config: IslandConfig = DEFAULT_ISLAND_CONFIG) {
    this.config = config;
  }

  /**
   * Tạo 28 vị trí rương dọc theo con đường mòn xoắn ốc của đảo
   * @param customStudents Danh sách học sinh tùy chọn (mặc định 28 học sinh Việt Nam)
   * @param heightSampler Hàm lấy độ cao địa hình từ GraphicsEngine / EnvironmentBuilder
   */
  public generateChests(customStudents?: Student[], heightSampler?: HeightSampler): ChestData[] {
    const students = customStudents && customStudents.length >= this.config.totalChests
      ? customStudents.slice(0, this.config.totalChests)
      : DEFAULT_STUDENTS;

    this.chests = [];
    const count = this.config.totalChests;
    const initialAngle = -Math.PI / 4;

    for (let i = 0; i < count; i++) {
      // t chạy đều từ 0 (bãi biển) đến 1 (đỉnh núi lửa)
      const t = i / (count - 1);

      // Công thức đường mòn xoắn ốc đồng bộ với createSpiralTrail() của EnvironmentBuilder
      const angle = initialAngle + t * Math.PI * 4.8;
      const radius = 40 - t * 31; // Từ r=40 về r=9

      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      // Lấy độ cao chuẩn xác từ hàm địa hình Procedural Noise của đảo
      const groundHeight = heightSampler ? heightSampler(x, z) : 1.35 + (1 - radius / 44) * 12.7;
      const y = groundHeight + 0.02; // Đặt rương khít ngay trên mặt đất

      // Hướng mặt trước của rương hơi quay ra phía đường mòn để camera tiếp cận dễ thấy nắp
      const nextT = Math.min(1, t + 0.02);
      const nextAngle = initialAngle + nextT * Math.PI * 4.8;
      const nextR = 40 - nextT * 31;
      const dirX = Math.cos(nextAngle) * nextR - x;
      const dirZ = Math.sin(nextAngle) * nextR - z;
      const rotationY = Math.atan2(dirX, dirZ) - Math.PI / 2;

      const chest: ChestData = {
        id: students[i].id,
        index: i,
        student: students[i],
        position: new THREE.Vector3(x, y, z),
        rotationY: rotationY,
        isWinner: false
      };

      this.chests.push(chest);
    }

    return this.chests;
  }

  /**
   * Cập nhật lại cao độ của 28 rương theo địa hình sau khi GraphicsEngine đã khởi tạo xong
   */
  public updateElevations(heightSampler: HeightSampler): void {
    this.chests.forEach((chest) => {
      chest.position.y = heightSampler(chest.position.x, chest.position.z) + 0.02;
    });
  }

  public getAllChests(): ChestData[] {
    return this.chests;
  }

  public getChest(idOrIndex: number): ChestData | undefined {
    return this.chests.find((c) => c.id === idOrIndex || c.index === idOrIndex);
  }

  public selectWinner(specifiedIndexOrId?: number): ChestData {
    if (this.chests.length === 0) {
      this.generateChests();
    }

    this.chests.forEach((c) => {
      c.isWinner = false;
    });

    let winner: ChestData;
    if (specifiedIndexOrId !== undefined) {
      const found = this.getChest(specifiedIndexOrId);
      winner = found || this.chests[Math.floor(Math.random() * this.chests.length)];
    } else {
      const randomIndex = Math.floor(Math.random() * this.chests.length);
      winner = this.chests[randomIndex];
    }

    winner.isWinner = true;
    this.winningChest = winner;
    return winner;
  }

  public getWinningChest(): ChestData | null {
    return this.winningChest;
  }
}

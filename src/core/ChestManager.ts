import * as THREE from 'three';
import { ChestData, Student, globalEventBus } from './EventBus';

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
  beachRadius: number;     // Bán kính vùng bãi biển (ngoài cùng)
  volcanoRadius: number;   // Bán kính vùng đỉnh núi lửa (trung tâm)
  beachHeight: number;     // Độ cao bãi biển
  volcanoHeight: number;   // Độ cao đỉnh núi lửa
  spiralTurns: number;     // Số vòng xoắn ốc (khoảng 2.3 - 2.8 vòng)
  totalChests: number;     // Đúng 28 rương
}

export const DEFAULT_ISLAND_CONFIG: IslandConfig = {
  beachRadius: 42.0,
  volcanoRadius: 8.5,
  beachHeight: 1.2,
  volcanoHeight: 14.8,
  spiralTurns: 2.4,
  totalChests: 28
};

/**
 * ChestManager: Quản lý vị trí không gian 3D của 28 rương theo đường xoắn ốc tự nhiên,
 * dữ liệu học sinh tương ứng và logic chọn rương trúng thưởng.
 */
export class ChestManager {
  private chests: ChestData[] = [];
  private winningChest: ChestData | null = null;
  private config: IslandConfig;

  constructor(config: IslandConfig = DEFAULT_ISLAND_CONFIG) {
    this.config = config;
  }

  /**
   * Tạo 28 vị trí rương theo đường xoắn ốc tự nhiên từ bãi biển lên đỉnh núi lửa
   */
  public generateChests(customStudents?: Student[]): ChestData[] {
    const students = customStudents && customStudents.length >= this.config.totalChests
      ? customStudents.slice(0, this.config.totalChests)
      : DEFAULT_STUDENTS;

    this.chests = [];
    const count = this.config.totalChests;
    const initialAngleOffset = -Math.PI / 4;

    for (let i = 0; i < count; i++) {
      // t chạy từ 0 (bãi biển ngoài cùng) đến 1 (đỉnh núi lửa)
      const t = i / (count - 1);

      // Góc quay theo số vòng xoắn ốc
      const angle = initialAngleOffset + t * this.config.spiralTurns * Math.PI * 2;

      // Bán kính giảm dần theo dạng mũ nhẹ
      const radius = THREE.MathUtils.lerp(
        this.config.beachRadius,
        this.config.volcanoRadius,
        Math.pow(t, 0.9)
      );

      // Độ cao nâng dần (sườn núi dốc dần về đỉnh)
      const height = THREE.MathUtils.lerp(
        this.config.beachHeight,
        this.config.volcanoHeight,
        Math.pow(t, 1.25)
      );

      // Tọa độ X, Z theo đường xoắn + chút biến thiên tự nhiên có kiểm soát
      const jitterX = (Math.sin(i * 3.7) * 0.4);
      const jitterZ = (Math.cos(i * 4.3) * 0.4);

      const x = Math.cos(angle) * radius + jitterX;
      const z = Math.sin(angle) * radius + jitterZ;
      const y = height;

      // Góc xoay mặt rương hướng ra phía đường đi hoặc hơi hướng ra ngoài
      const rotationY = Math.atan2(x, z) + Math.PI;

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
   * Lấy danh sách toàn bộ 28 rương
   */
  public getAllChests(): ChestData[] {
    return this.chests;
  }

  /**
   * Lấy dữ liệu rương theo id hoặc index
   */
  public getChest(idOrIndex: number): ChestData | undefined {
    return this.chests.find((c) => c.id === idOrIndex || c.index === idOrIndex);
  }

  /**
   * Chọn 1 rương chiến thắng (ngẫu nhiên hoặc chỉ định cụ thể)
   */
  public selectWinner(specifiedIndexOrId?: number): ChestData {
    if (this.chests.length === 0) {
      this.generateChests();
    }

    // Reset trạng thái winner trước đó
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


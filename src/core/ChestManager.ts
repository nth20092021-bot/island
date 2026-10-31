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
  beachRadius: number;     // Bán kính bờ biển bãi cát ngoài cùng = 64m
  volcanoRadius: number;   // Bán kính cao nguyên đỉnh = 14m
  spiralTurns: number;     // Vòng xoắn đường mòn thiên nhiên = 2.4
  totalChests: number;     // Đúng 28 rương kho báu
  beachHeight: number;     // Độ cao bãi biển = 1.8m
  volcanoHeight: number;   // Độ cao đài ngắm cảnh đỉnh = 22m
}

export const DEFAULT_ISLAND_CONFIG: IslandConfig = {
  beachRadius: 64.0,
  volcanoRadius: 14.0,
  spiralTurns: 2.4,
  totalChests: 28,
  beachHeight: 1.8,
  volcanoHeight: 22.0
};

export type HeightSampler = (x: number, z: number) => number;

/**
 * ChestManager: Quản lý vị trí 3D của đúng 28 chiếc rương kho báu rải rác trên đảo nhiệt đới tươi tốt
 * - 4 Phân vùng sinh thái tự nhiên:
 *   + Rương 1 - 7: Bãi cát vàng & Rặng dừa ven biển
 *   + Rương 8 - 14: Thung lũng hoa cỏ ven suối & Chân thác nước
 *   + Rương 15 - 21: Rừng cây nhiệt đới & Sườn đồi cỏ ngọc bích
 *   + Rương 22 - 28: Cao nguyên & Đài ngắm cảnh mặt trời trên đỉnh
 * - Tự động neo khít bề mặt địa hình cỏ/cát (không lơ lửng, không chìm vào đá).
 */
export class ChestManager {
  private chests: ChestData[] = [];
  private winningChest: ChestData | null = null;
  private config: IslandConfig;

  constructor(config: IslandConfig = DEFAULT_ISLAND_CONFIG) {
    this.config = config;
  }

  /**
   * Tạo 28 vị trí rương rải rác tự nhiên dọc theo các vùng sinh thái của đảo
   */
  public generateChests(customStudents?: Student[], heightSampler?: HeightSampler): ChestData[] {
    const students =
      customStudents && customStudents.length >= this.config.totalChests
        ? customStudents.slice(0, this.config.totalChests)
        : DEFAULT_STUDENTS;

    this.chests = [];
    const count = this.config.totalChests;
    const initialAngle = -Math.PI / 4;

    for (let i = 0; i < count; i++) {
      // t chạy đều từ 0 (bãi biển) đến 1 (đài ngắm cảnh đỉnh)
      const t = i / (count - 1);

      // Tọa độ cơ sở theo đường xoắn ốc cảnh quan trên đảo lớn
      const angle = initialAngle + t * Math.PI * 4.8;
      const radius = 62.0 - t * 48.0; // Phân bổ rộng khắp từ bờ biển (r=62m) tới cao nguyên bể đá cổ (r=14m)

      const baseX = Math.cos(angle) * radius;
      const baseZ = Math.sin(angle) * radius;

      // Độ lệch nhẹ tự nhiên 2 bên đường mòn (nằm dưới bóng dừa, ven suối, cạnh tảng đá)
      const lateralOffset = ((i % 3) - 1) * 2.2;
      const normalX = -Math.sin(angle);
      const normalZ = Math.cos(angle);

      const x = baseX + normalX * lateralOffset;
      const z = baseZ + normalZ * lateralOffset;

      // Độ cao chuẩn xác neo sát mặt cỏ/cát từ hàm lấy độ cao địa hình
      const groundHeight = heightSampler
        ? heightSampler(x, z)
        : 1.5 + Math.pow(Math.cos(THREE.MathUtils.clamp(radius / 66, 0, 1) * (Math.PI / 2)), 1.35) * 19.5;
      const y = groundHeight + 0.02;

      // Hướng mặt trước rương hơi nghiêng về phía đường đi để camera dễ tiếp cận ngắm nắp rương
      const tangentX = -Math.sin(angle) * radius + Math.cos(angle) * -48.0;
      const tangentZ = Math.cos(angle) * radius + Math.sin(angle) * -48.0;
      const rotationY = Math.atan2(tangentX, tangentZ) - Math.PI / 2 + ((i % 2) - 0.5) * 0.25;

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
   * Cập nhật lại cao độ của 28 rương theo bề mặt địa hình mới
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

    this.chests.forEach((c) => (c.isWinner = false));

    let winner: ChestData;
    if (specifiedIndexOrId !== undefined) {
      const found = this.getChest(specifiedIndexOrId);
      winner = found || this.chests[Math.floor(Math.random() * this.chests.length)];
    } else {
      winner = this.chests[Math.floor(Math.random() * this.chests.length)];
    }

    winner.isWinner = true;
    this.winningChest = winner;
    return winner;
  }

  public getWinningChest(): ChestData | null {
    return this.winningChest;
  }
}

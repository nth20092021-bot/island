import * as THREE from 'three';
import { ChestData, Student } from './EventBus';
import { ISLAND_SCALE, ISLAND_SHORE_RADIUS, riverDistance } from './IslandLayout';

export const DEFAULT_STUDENTS: Student[] = [
  { id: 1, name: 'Vương Trần Thiên Ái' },
  { id: 2, name: 'Nguyễn Hải Anh' },
  { id: 3, name: 'Nguyễn Phạm Minh Anh' },
  { id: 4, name: 'Nguyễn Ngọc Minh Châu' },
  { id: 5, name: 'Nguyễn Trần Diễm Chi' },
  { id: 6, name: 'Nguyễn Khải Hoàn' },
  { id: 7, name: 'A Se Kinl' },
  { id: 8, name: 'Trình Nhã Kỳ' },
  { id: 9, name: 'Nguyễn Ngọc Bảo Linh' },
  { id: 10, name: 'Phạm Hoàng Trúc Linh' },
  { id: 11, name: 'Bành Gia Mẫn' },
  { id: 12, name: 'Trần Thục Bảo Nghi' },
  { id: 13, name: 'Thiên Ngọc' },
  { id: 14, name: 'Bùi Hoàng Nhân' },
  { id: 15, name: 'Vũ Nguyễn Yến Nhi' },
  { id: 16, name: 'Ngô Tâm Như' },
  { id: 17, name: 'Nguyễn Ngọc Thảo Như' },
  { id: 18, name: 'Bùi Nguyễn Phúc Ni' },
  { id: 19, name: 'Hoàng Phúc' },
  { id: 20, name: 'Lê Ngọc Thuận' },
  { id: 21, name: 'Nguyễn Minh Thư' },
  { id: 22, name: 'Trần Ngọc Anh Thư' },
  { id: 23, name: 'Hồ Ngọc Bảo Thy' },
  { id: 24, name: 'Nguyễn Ngọc Phương Trang' },
  { id: 25, name: 'Nguyễn Minh Triết' },
  { id: 26, name: 'Huỳnh Ngọc Thanh Vy' },
  { id: 27, name: 'Lê Ngọc Tường Vy' },
  { id: 28, name: 'Đặng Thanh Xuân' }
];

export interface IslandConfig {
  beachRadius: number;     // Bán kính ngoài cùng dành cho rương
  volcanoRadius: number;   // Bán kính lõi không đặt rương (bể đá cổ)
  spiralTurns: number;     // Vòng xoắn đường mòn thiên nhiên = 2.4
  totalChests: number;     // Đúng 28 rương kho báu
  beachHeight: number;     // Giá trị tương thích cấu hình cũ
  volcanoHeight: number;   // Giá trị tương thích cấu hình cũ
}

export const DEFAULT_ISLAND_CONFIG: IslandConfig = {
  beachRadius: ISLAND_SHORE_RADIUS - 9,
  volcanoRadius: 16.0 * ISLAND_SCALE,
  spiralTurns: 2.4,
  totalChests: 28,
  beachHeight: 1.8,
  volcanoHeight: 22.0
};

export type HeightSampler = (x: number, z: number) => number;

/**
 * ChestManager: Quản lý vị trí 3D của đúng 28 chiếc rương kho báu rải rác trên đảo nhiệt đới tươi tốt
 * - Bốn vành diện tích, mỗi vành bảy rương xoay lệch góc, tránh suối và công trình.
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
      // Four equal-area bands, seven evenly spaced sectors each. Rotate adjacent bands
      // to avoid radial rows and keep every quadrant populated.
      const ring = 3 - Math.floor(i / 7);
      const sector = i % 7;
      const outer = this.config.beachRadius;
      const inner = this.config.volcanoRadius;
      const radius = Math.sqrt(inner * inner + ((ring + 0.5) / 4) * (outer * outer - inner * inner));
      const angle = initialAngle + sector * Math.PI * 2 / 7 + ring * 0.41;
      let x = Math.cos(angle) * radius;
      let z = Math.sin(angle) * radius;
      // Avoid stream, falls, summit baths, the second basin and coastal monuments.
      for (let attempt = 0; attempt < 18; attempt++) {
        const lx = x / ISLAND_SCALE, lz = z / ISLAND_SCALE;
        const safe = riverDistance(lx, lz) > 6.8
          && Math.hypot(lx + 18, lz - 18) > 11
          && Math.hypot(lx - 31, lz + 28) > 10
          && Math.hypot(lx, lz) > 14.5
          && Math.hypot(lx + 44, lz + 36) > 15
          && Math.hypot(lx - 48, lz + 24) > 14
          && Math.hypot(lx - 31, lz - 55) > 12;
        if (safe) break;
        const shifted = angle + (attempt + 1) * 0.17;
        x = Math.cos(shifted) * radius;
        z = Math.sin(shifted) * radius;
      }

      // Độ cao chuẩn xác neo sát mặt cỏ/cát từ hàm lấy độ cao địa hình
      const groundHeight = heightSampler
        ? heightSampler(x, z)
        : 2.0 + Math.pow(Math.cos(THREE.MathUtils.clamp(radius / ISLAND_SHORE_RADIUS, 0, 1) * (Math.PI / 2)), 1.35) * 27;
      const y = groundHeight + 0.02;

      // Hướng mặt trước rương hơi nghiêng về phía đường đi để camera dễ tiếp cận ngắm nắp rương
      const rotationY = Math.atan2(-x, -z) + ((i % 2) - 0.5) * 0.25;

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

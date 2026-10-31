import * as THREE from 'three';

export interface Student {
  id: number;
  name: string;
}

export interface ChestData {
  id: number;
  index: number;
  student: Student;
  position: THREE.Vector3;
  rotationY: number;
  isWinner?: boolean;
}

export interface GameEvents {
  GAME_START: { students: Student[] };
  BEAM_SCAN_TARGET: { chestId: number; position: THREE.Vector3 };
  CAMERA_PROGRESS: { progress: number };
  CHEST_ARRIVED: { chestId: number; studentName: string; position: THREE.Vector3 };
  CHEST_OPENED: { chestId: number; studentName: string };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Listener<T = any> = (payload: T) => void;

/**
 * EventBus: Hệ thống giao tiếp sự kiện kiểu dữ liệu chặt chẽ (Typed Event Emitter)
 * Dùng làm cầu nối độc lập giữa Core Gameplay (Antigravity) và Graphics/Shaders (Codex)
 */
export class EventBus {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private listeners: Map<keyof GameEvents, Set<Listener<any>>> = new Map();

  on<K extends keyof GameEvents>(event: K, listener: Listener<GameEvents[K]>): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    const set = this.listeners.get(event)!;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    set.add(listener as Listener<any>);
    return () => this.off(event, listener);
  }

  off<K extends keyof GameEvents>(event: K, listener: Listener<GameEvents[K]>): void {
    const set = this.listeners.get(event);
    if (set) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set.delete(listener as Listener<any>);
    }
  }

  emit<K extends keyof GameEvents>(event: K, payload: GameEvents[K]): void {
    const set = this.listeners.get(event);
    if (set) {
      set.forEach((fn) => {
        try {
          fn(payload);
        } catch (err) {
          console.error(`[EventBus] Lỗi trong handler của sự kiện "${event}":`, err);
        }
      });
    }
  }

  once<K extends keyof GameEvents>(event: K, listener: Listener<GameEvents[K]>): () => void {
    const wrapper = (payload: GameEvents[K]) => {
      this.off(event, wrapper);
      listener(payload);
    };
    return this.on(event, wrapper);
  }

  clear(): void {
    this.listeners.clear();
  }
}

export const globalEventBus = new EventBus();

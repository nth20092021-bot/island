type ToneOptions = {
  type?: OscillatorType;
  gain?: number;
  delay?: number;
  slideTo?: number;
};

/**
 * SoundEngine: hiệu ứng âm thanh tổng hợp bằng Web Audio, không cần file âm thanh.
 * AudioContext chỉ được tạo sau thao tác đầu tiên của người dùng (chính sách autoplay).
 */
export class SoundEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private muted = false;

  constructor() {
    try {
      this.muted = localStorage.getItem('sound_muted') === '1';
    } catch {
      this.muted = false;
    }
  }

  public unlock(): void {
    if (!this.ctx) {
      const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!Ctor) return;
      this.ctx = new Ctor();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.muted ? 0 : 0.5;
      this.master.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      void this.ctx.resume();
    }
  }

  public isMuted(): boolean {
    return this.muted;
  }

  public toggle(): boolean {
    this.setMuted(!this.muted);
    return this.muted;
  }

  public setMuted(muted: boolean): void {
    this.muted = muted;
    try {
      localStorage.setItem('sound_muted', muted ? '1' : '0');
    } catch {
      /* localStorage có thể bị chặn */
    }
    if (this.master && this.ctx) {
      const now = this.ctx.currentTime;
      this.master.gain.cancelScheduledValues(now);
      this.master.gain.setTargetAtTime(muted ? 0 : 0.5, now, 0.02);
    }
  }

  private tone(freq: number, duration: number, options: ToneOptions = {}): void {
    if (!this.ctx || !this.master || this.muted) return;
    const { type = 'sine', gain = 0.12, delay = 0, slideTo } = options;
    const start = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const env = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, start);
    if (slideTo !== undefined) {
      osc.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), start + duration);
    }

    const attack = Math.min(0.02, duration * 0.2);
    env.gain.setValueAtTime(0.0001, start);
    env.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), start + attack);
    env.gain.exponentialRampToValueAtTime(0.0001, start + duration);

    osc.connect(env).connect(this.master);
    osc.start(start);
    osc.stop(start + duration + 0.05);
  }

  private noise(duration: number, filterFreq: number, gainValue = 0.12, delay = 0): void {
    if (!this.ctx || !this.master || this.muted) return;
    const start = this.ctx.currentTime + delay;
    const frames = Math.max(1, Math.floor(this.ctx.sampleRate * duration));
    const buffer = this.ctx.createBuffer(1, frames, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < frames; i++) {
      const t = i / frames;
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, 2.2);
    }

    const src = this.ctx.createBufferSource();
    src.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = filterFreq;
    filter.Q.value = 0.7;
    const env = this.ctx.createGain();
    env.gain.value = gainValue;

    src.connect(filter).connect(env).connect(this.master);
    src.start(start);
  }

  public click(): void {
    this.tone(620, 0.07, { type: 'triangle', gain: 0.07 });
  }

  public start(): void {
    this.unlock();
    this.tone(112, 0.55, { type: 'sine', gain: 0.3, slideTo: 58 });
    this.noise(0.7, 900, 0.1);
    this.tone(320, 0.8, { type: 'sawtooth', gain: 0.045, slideTo: 760, delay: 0.08 });
  }

  public arrive(): void {
    this.tone(784, 1.1, { type: 'sine', gain: 0.1 });
    this.tone(1175, 0.9, { type: 'sine', gain: 0.06, delay: 0.05 });
    this.tone(1568, 0.7, { type: 'sine', gain: 0.035, delay: 0.1 });
  }

  public open(): void {
    this.tone(98, 1.6, { type: 'sine', gain: 0.26, slideTo: 92 });
    this.tone(147, 1.5, { type: 'sine', gain: 0.14 });
    this.tone(196, 1.4, { type: 'triangle', gain: 0.1 });
    this.noise(1.2, 2600, 0.08);
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
      this.tone(f, 0.6, { type: 'triangle', gain: 0.075, delay: 0.18 + i * 0.1 });
    });
  }

  public win(): void {
    [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((f, i) => {
      this.tone(f, 0.9, { type: 'sine', gain: 0.09, delay: i * 0.12 });
    });
  }

  public reset(): void {
    this.tone(440, 0.18, { type: 'triangle', gain: 0.07, slideTo: 330 });
    this.tone(330, 0.3, { type: 'triangle', gain: 0.06, delay: 0.12, slideTo: 220 });
  }

  public allUsed(): void {
    this.tone(220, 0.25, { type: 'triangle', gain: 0.07 });
    this.tone(184, 0.35, { type: 'triangle', gain: 0.06, delay: 0.14 });
  }
}

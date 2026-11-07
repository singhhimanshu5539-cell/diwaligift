/**
 * Web Audio API Sound Synthesizer for Festive Sounds
 * Zero external audio files required for interactive feedback!
 */

class SoundSynthesizer {
  constructor() {
    this.ctx = null;
    this.ambientNodes = null;
    this.isAmbientPlaying = false;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Melodic chime when a diya is lit
  playDiyaChime(index = 0) {
    try {
      this.init();
      if (!this.ctx) return;

      const pentatonic = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50]; // C, D, E, G, A, high C
      const freq = pentatonic[index % pentatonic.length];

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      // Subtle pitch bend up
      osc.frequency.exponentialRampToValueAtTime(freq * 1.05, this.ctx.currentTime + 0.1);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 1.2);
    } catch {
      // Audio autoplay policy catch
    }
  }

  // Sparkling firework whoosh & sparkle sound
  playFireworkSound() {
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // Sparkle chime burst
      const notes = [659.25, 783.99, 987.77, 1174.66, 1318.51];
      notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);

        gain.gain.setValueAtTime(0.001, now + i * 0.08);
        gain.gain.linearRampToValueAtTime(0.12, now + i * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 0.8);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.8);
      });
    } catch {
      // Ignore audio restriction
    }
  }

  // Magical celebratory chime for opening gift box or envelope
  playGiftUnwrapSound() {
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const arpeggio = [440, 554.37, 659.25, 880, 1108.73, 1318.51]; // A major festive chord

      arpeggio.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);

        gain.gain.setValueAtTime(0.001, now + idx * 0.07);
        gain.gain.linearRampToValueAtTime(0.15, now + idx * 0.07 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.07 + 1.4);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 1.5);
      });
    } catch {
      // Ignore
    }
  }

  // Gentle Tanpura / Ambient Festive Drone
  startAmbientDrone() {
    try {
      this.init();
      if (!this.ctx || this.isAmbientPlaying) return;

      const baseFreq = 146.83; // D3 root note (traditional Indian classical drone)
      const harmonics = [1, 1.5, 2]; // Sa, Pa, high Sa

      this.ambientNodes = harmonics.map((h) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(baseFreq * h, this.ctx.currentTime);

        gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.02 / h, this.ctx.currentTime + 3);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        return { osc, gain };
      });

      this.isAmbientPlaying = true;
    } catch {
      // Ignore
    }
  }

  stopAmbientDrone() {
    if (this.ambientNodes && this.ctx) {
      try {
        this.ambientNodes.forEach(({ osc, gain }) => {
          gain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 1);
          setTimeout(() => {
            try { osc.stop(); } catch {}
          }, 1000);
        });
      } catch {}
      this.ambientNodes = null;
      this.isAmbientPlaying = false;
    }
  }
}

export const soundEffects = new SoundSynthesizer();


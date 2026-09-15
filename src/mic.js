// Port of MicrophoneNoise: the real microphone feeds a level meter; a frame over the threshold
// while the hunt is on becomes a "breathing" clue for the killer (one clue per cooldown).
// getUserMedia needs https and, on iOS, a tap - so enable() is only ever called from a button.
export class Mic {
  constructor(audio) {
    this.audio = audio; this.stream = null; this.analyser = null; this.buf = null;
    this.gain = 6; this.threshold = 0.4; this.cooldown = 2.5; this.decay = 2.5;
    this.raw = 0; this.level = 0; this.nextClue = 0; this.armed = false; this.error = null;
    this.onClue = null;
  }
  get enabled() { return !!this.stream; }
  async enable() {
    if (this.stream) return true;
    this.error = null;
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { this.error = 'This browser cannot use the microphone (needs https).'; return false; }
    try {
      this.audio.unlock();
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true }, video: false });
      const ctx = this.audio.ctx;
      if (ctx.state === 'suspended') await ctx.resume();
      const src = ctx.createMediaStreamSource(this.stream);
      this.analyser = ctx.createAnalyser();
      this.analyser.fftSize = 1024;
      this.analyser.smoothingTimeConstant = 0;
      src.connect(this.analyser); // analyser only: never to the speakers
      this.buf = new Float32Array(this.analyser.fftSize);
      try { localStorage.setItem('hs-mic', '1'); } catch {}
      return true;
    } catch (e) {
      this.error = e && e.name === 'NotAllowedError' ? 'Microphone permission was refused.' : 'Microphone unavailable: ' + (e && e.message);
      this.stream = null;
      return false;
    }
  }
  disable() {
    if (this.stream) for (const t of this.stream.getTracks()) t.stop();
    this.stream = null; this.analyser = null; this.raw = 0; this.level = 0;
    try { localStorage.setItem('hs-mic', '0'); } catch {}
  }
  update(dt, now) {
    if (!this.analyser) { this.raw = 0; this.level = Math.max(0, this.level - this.decay * dt); return; }
    this.analyser.getFloatTimeDomainData(this.buf);
    let sum = 0;
    for (let i = 0; i < this.buf.length; i++) sum += this.buf[i] * this.buf[i];
    const rms = Math.sqrt(sum / this.buf.length);
    this.raw = Math.min(1, rms * this.gain);
    this.level = Math.max(this.raw, this.level - this.decay * dt);
    if (this.armed && this.raw >= this.threshold && now >= this.nextClue) {
      this.nextClue = now + this.cooldown * 1000;
      const t = (this.raw - this.threshold) / (1 - this.threshold);
      const loudness = 0.7 + 0.7 * Math.max(0, Math.min(1, t));
      if (this.onClue) this.onClue(loudness);
    }
  }
  get isLoud() { return this.raw >= this.threshold; }
}

import React, { useState, useRef } from 'react';

export const HeroBedroomCanvas = () => {
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const audioContextRef = useRef(null);
  const gainNodeRef = useRef(null);
  const noiseSourceRef = useRef(null);

  // Gentle soothing lofi ambient room breeze synthesizer (Web Audio API)
  const toggleSound = () => {
    if (isPlayingSound) {
      try {
        if (gainNodeRef.current) {
          gainNodeRef.current.gain.setTargetAtTime(0, audioContextRef.current.currentTime, 0.5);
          setTimeout(() => {
            if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
              audioContextRef.current.suspend();
            }
          }, 600);
        }
      } catch (e) {
        console.error(e);
      }
      setIsPlayingSound(false);
    } else {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!audioContextRef.current) {
          audioContextRef.current = new AudioCtx();
        }
        const ctx = audioContextRef.current;
        if (ctx.state === 'suspended') {
          ctx.resume();
        }

        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          output[i] = (lastOut + 0.02 * white) / 1.02;
          lastOut = output[i];
          output[i] *= 2.5;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 380;

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.001, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 1.2);

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        whiteNoise.start(0);
        noiseSourceRef.current = whiteNoise;
        gainNodeRef.current = gainNode;
        setIsPlayingSound(true);
      } catch (e) {
        console.error("Audio failed to start:", e);
      }
    }
  };

  return (
    <div className="relative group rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/90 shadow-card bg-cream-dark">
      
      {/* Top Left Washi Tape Pin */}
      <div className="absolute top-2 left-4 z-20 pointer-events-none">
        <div className="w-20 h-5 bg-rose-soft/85 border border-rose/30 transform -rotate-3 shadow-sm rounded-sm" />
      </div>

      {/* Top Right Cute Tag */}
      <div className="absolute top-3 right-3 z-20">
        <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-sand text-[11px] font-hand text-sm text-nearblack/80 shadow-sm flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose animate-pulse" />
          <span>lofi morning sketch ♡</span>
        </div>
      </div>

      {/* Main Artistic Lofi Girl Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src="/girl_in_pink_hero.jpg"
          alt="Artistic lofi girl sitting in pink gingham bed looking out the window"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.015]"
        />

        {/* Gentle Warm Sunbeam Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-rose-dark/10 via-transparent to-amber-100/20 pointer-events-none" />

        {/* Bottom Left Sticker Pill */}
        <div className="absolute bottom-3 left-3 z-20">
          <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-rose/20 text-xs font-hand text-sm text-nearblack/90 shadow-sm flex items-center gap-1.5">
            <span>🌸</span>
            <span>morning in my pink gingham corner</span>
          </div>
        </div>

        {/* Bottom Right Soothing Ambient Sound Button */}
        <div className="absolute bottom-3 right-3 z-20">
          <button
            onClick={toggleSound}
            className={`px-3 py-1.5 rounded-full backdrop-blur-md text-xs font-sans transition-all duration-200 shadow-sm flex items-center gap-1.5 ${
              isPlayingSound 
                ? 'bg-rose text-white border border-rose font-medium'
                : 'bg-white/90 text-nearblack/80 hover:bg-white border border-sand'
            }`}
            title="Listen to gentle morning breeze"
          >
            <span>{isPlayingSound ? '🍃' : '☕'}</span>
            <span className="text-[11px]">{isPlayingSound ? 'playing morning breeze' : 'soothing breeze'}</span>
          </button>
        </div>

      </div>

    </div>
  );
};

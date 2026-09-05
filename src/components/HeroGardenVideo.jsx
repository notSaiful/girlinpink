import React, { useState, useEffect, useRef } from 'react';

export const HeroGardenVideo = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(14);
  const [butterflies, setButterflies] = useState([
    { id: 1, x: 25, y: 70, scale: 0.9, duration: 18, delay: 0, color: '#F4A7B9' }, // near foot roses
    { id: 2, x: 65, y: 35, scale: 0.75, duration: 22, delay: 3, color: '#E8A598' }, // near window sunbeam
    { id: 3, x: 45, y: 55, scale: 0.85, duration: 16, delay: 6, color: '#F7D1BA' }, // over rumpled bed
    { id: 4, x: 15, y: 45, scale: 0.7, duration: 24, delay: 1.5, color: '#FFB6C1' }, // near bedside table
    { id: 5, x: 80, y: 65, scale: 0.8, duration: 20, delay: 4.5, color: '#FAD2E1' }, // right garden foliage
  ]);

  const audioContextRef = useRef(null);
  const ambientNodesRef = useRef(null);

  // Time scrubber simulation
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentTime((prev) => (prev >= 60 ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Peaceful Ambient Sound Generator (Web Audio API)
  const toggleAudio = () => {
    if (isMuted) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioCtx();
        audioContextRef.current = ctx;

        // 1. Soft Warm Breeze Generator (Filtered Pink Noise)
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
          b6 = white * 0.115926;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 350; // gentle deep warm room breeze

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.3, ctx.currentTime);

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);
        whiteNoise.start();

        // 2. Soft Chime / Bird Chirp Organic Interval
        const playChime = () => {
          if (!audioContextRef.current) return;
          const osc = ctx.createOscillator();
          const chimeGain = ctx.createGain();
          const freq = [523.25, 659.25, 783.99, 1046.50][Math.floor(Math.random() * 4)]; // C major chords
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          
          chimeGain.gain.setValueAtTime(0.001, ctx.currentTime);
          chimeGain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 0.1);
          chimeGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.5);

          osc.connect(chimeGain);
          chimeGain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 2.6);
        };

        const chimeTimer = setInterval(() => {
          if (Math.random() > 0.4) playChime();
        }, 4000);

        ambientNodesRef.current = { whiteNoise, gainNode, chimeTimer };
        setIsMuted(false);
      } catch (e) {
        console.error('Audio init error:', e);
      }
    } else {
      if (ambientNodesRef.current) {
        clearInterval(ambientNodesRef.current.chimeTimer);
        ambientNodesRef.current.gainNode.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.5);
        setTimeout(() => {
          if (audioContextRef.current) {
            audioContextRef.current.close();
            audioContextRef.current = null;
          }
        }, 600);
      }
      setIsMuted(true);
    }
  };

  // Add interactive butterfly on click
  const handleCanvasClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = ((e.clientX - rect.left) / rect.width) * 100;
    const clickY = ((e.clientY - rect.top) / rect.height) * 100;

    const newButterfly = {
      id: Date.now(),
      x: clickX,
      y: clickY,
      scale: 0.85,
      duration: 14,
      delay: 0,
      color: ['#F4A7B9', '#FFD1DC', '#FAD2E1', '#E8A598'][Math.floor(Math.random() * 4)]
    };

    setButterflies((prev) => [...prev.slice(-6), newButterfly]);
  };

  return (
    <div className="relative group rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/80 bg-[#FAF5F2]">
      
      {/* 1. Gingham Underlay Frame */}
      <div className="absolute inset-0 bg-pink-gingham-canvas opacity-30 pointer-events-none" />

      {/* 2. Main Animated Living Scene */}
      <div 
        onClick={handleCanvasClick}
        className="relative aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden cursor-pointer select-none"
      >
        
        {/* Layer A: Base High-Res Room & Garden Visual with Slow Cinematic Breathing Zoom */}
        <div 
          className={`w-full h-full transform transition-transform duration-[12000ms] ease-in-out ${
            isPlaying ? 'scale-105 translate-x-[-1%] translate-y-[-1%]' : 'scale-100'
          }`}
          style={{
            backgroundImage: "url('/garden_bed_sanctuary.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%'
          }}
        />

        {/* Layer B: Golden Sunbeams & Dreamy Light Leaks */}
        <div className="absolute inset-0 bg-gradient-to-tr from-rose/10 via-transparent to-amber-100/25 pointer-events-none mix-blend-overlay" />

        {/* Layer C: Sunbeam Dust Sparkles Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-amber-200/60 blur-[0.5px] animate-pulse"
              style={{
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
                top: `${Math.random() * 60 + 10}%`,
                left: `${Math.random() * 50 + 40}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Layer D: Floating Rose & Daisy Petals */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { left: '20%', top: '-10%', delay: '0s', dur: '11s', size: '10px' },
            { left: '45%', top: '-10%', delay: '3s', dur: '14s', size: '12px' },
            { left: '70%', top: '-10%', delay: '1.5s', dur: '12s', size: '8px' },
            { left: '85%', top: '-10%', delay: '5s', dur: '16s', size: '11px' },
            { left: '32%', top: '-10%', delay: '7s', dur: '13s', size: '9px' }
          ].map((petal, idx) => (
            <div
              key={idx}
              className="absolute pointer-events-none"
              style={{
                left: petal.left,
                animation: `petalFall ${petal.dur} linear infinite`,
                animationDelay: petal.delay
              }}
            >
              <div 
                className="rounded-full opacity-70 transform rotate-45"
                style={{
                  width: petal.size,
                  height: `calc(${petal.size} * 1.5)`,
                  background: 'linear-gradient(135deg, #FAD2E1 0%, #E8A598 100%)',
                  boxShadow: '0 2px 6px rgba(194, 120, 120, 0.2)'
                }}
              />
            </div>
          ))}
        </div>

        {/* Layer E: 3D Fluttering Garden Butterflies Engine */}
        {butterflies.map((b, idx) => (
          <div
            key={b.id}
            className="absolute pointer-events-none transition-all"
            style={{
              top: `${b.y}%`,
              left: `${b.x}%`,
              transform: `scale(${b.scale})`,
              animation: `butterflyFloat ${b.duration}s ease-in-out infinite`,
              animationDelay: `${b.delay}s`
            }}
          >
            {/* The 3D Butterfly Body and Flapping Wings */}
            <div className="relative w-8 h-8 flex items-center justify-center">
              
              {/* Left Wing */}
              <div 
                className="w-4 h-4 rounded-tl-full rounded-bl-full shadow-sm"
                style={{
                  backgroundColor: b.color,
                  border: '0.5px solid rgba(255,255,255,0.7)',
                  transformOrigin: 'right center',
                  animation: 'wingFlapLeft 0.24s ease-in-out infinite alternate'
                }}
              />

              {/* Slender Body */}
              <div className="w-[1.5px] h-3 bg-amber-950/70 rounded-full mx-[0.5px] z-10" />

              {/* Right Wing */}
              <div 
                className="w-4 h-4 rounded-tr-full rounded-br-full shadow-sm"
                style={{
                  backgroundColor: b.color,
                  border: '0.5px solid rgba(255,255,255,0.7)',
                  transformOrigin: 'left center',
                  animation: 'wingFlapRight 0.24s ease-in-out infinite alternate'
                }}
              />

              {/* Subtle Butterfly Light Glow */}
              <div 
                className="absolute inset-0 rounded-full blur-sm opacity-40 -z-10"
                style={{ backgroundColor: b.color }}
              />
            </div>
          </div>
        ))}

        {/* Click Hint Overlay */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md border border-white/90 shadow-sm text-[11px] font-sans text-nearblack">
          <span className="w-2 h-2 rounded-full bg-rose animate-ping" />
          <span className="font-serif italic font-medium">Living Bedroom Sanctuary</span>
          <span className="text-muted text-[10px] hidden sm:inline">• Tap to call butterflies</span>
        </div>

        {/* Top Right Video Quality Badge */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <div className="px-2.5 py-1 rounded-lg bg-nearblack/75 backdrop-blur-md text-white text-[10px] font-sans font-medium tracking-wide">
            4K COZY LOOP
          </div>
        </div>

        {/* Center Big Play Indicator (when paused) */}
        {!isPlaying && (
          <div className="absolute inset-0 z-30 bg-nearblack/30 backdrop-blur-[2px] flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 text-rose flex items-center justify-center text-2xl shadow-xl pl-1">
              ▶
            </div>
          </div>
        )}

      </div>

      {/* 3. Video Controls Ribbon */}
      <div className="px-4 py-3 bg-white/95 backdrop-blur-md border-t border-sand/80 flex items-center justify-between text-xs font-sans text-nearblack gap-3">
        
        {/* Play/Pause Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(!isPlaying);
            }}
            className="w-8 h-8 rounded-full bg-rose/10 hover:bg-rose/20 text-rose flex items-center justify-center text-sm font-bold transition"
            title={isPlaying ? "Pause Scene" : "Play Scene"}
          >
            {isPlaying ? "❚❚" : "▶"}
          </button>

          {/* Time Scrubber & Looping Counter */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-muted font-mono">
              00:{currentTime < 10 ? `0${currentTime}` : currentTime}
            </span>
            <div className="w-16 sm:w-24 h-1.5 bg-sand/60 rounded-full overflow-hidden">
              <div 
                className="h-full bg-rose transition-all duration-300 rounded-full"
                style={{ width: `${(currentTime / 60) * 100}%` }}
              />
            </div>
            <span className="text-[10px] text-rose font-medium hidden sm:inline">
              Looping
            </span>
          </div>
        </div>

        {/* Ambient Calming Audio Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleAudio();
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition border ${
              !isMuted 
                ? 'bg-rose text-white border-rose shadow-soft' 
                : 'bg-sand/40 hover:bg-sand/70 text-nearblack/80 border-sand'
            }`}
          >
            <span>{!isMuted ? "🔊" : "🔈"}</span>
            <span className="text-[11px]">{!isMuted ? "Garden Breeze On" : "Listen to Room"}</span>
          </button>
        </div>

      </div>

      {/* CSS Keyframes for Butterfly Wings & Flight */}
      <style>{`
        @keyframes wingFlapLeft {
          0% { transform: perspective(300px) rotateY(0deg); }
          100% { transform: perspective(300px) rotateY(68deg); }
        }
        @keyframes wingFlapRight {
          0% { transform: perspective(300px) rotateY(0deg); }
          100% { transform: perspective(300px) rotateY(-68deg); }
        }
        @keyframes butterflyFloat {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          25% { transform: translate(18px, -24px) scale(1.05) rotate(8deg); }
          50% { transform: translate(-15px, -45px) scale(0.95) rotate(-6deg); }
          75% { transform: translate(-25px, -15px) scale(1.02) rotate(4deg); }
          100% { transform: translate(0, 0) scale(1) rotate(0deg); }
        }
        @keyframes petalFall {
          0% {
            transform: translateY(0) rotate(0deg) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(500px) rotate(360deg) translateX(50px);
            opacity: 0;
          }
        }
      `}</style>

    </div>
  );
};

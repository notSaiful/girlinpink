import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { sounds } from '../utils/soundFx';
import { 
  Flame, 
  Droplets, 
  Sparkles, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  HelpCircle,
  Wind,
  Layers
} from 'lucide-react';

const LIQUIDS = [
  {
    id: 'maggi',
    name: '3 AM Maggi Curry Broth',
    icon: '🍜',
    color: '#D97706',
    bgColor: 'rgba(217, 119, 6, 0.9)',
    stainEffect: 'Oily turmeric & chili masala broth',
    dangerLevel: 'Hostel Hazard Level: 99%',
    description: 'Packed with yellow turmeric and oily chili powder that permanently ruins normal white/light sheets.'
  },
  {
    id: 'chai',
    name: 'Kadak Masala Chai',
    icon: '☕',
    color: '#78350F',
    bgColor: 'rgba(120, 53, 15, 0.9)',
    stainEffect: 'Steaming hot sweet milk tea drops',
    dangerLevel: 'Daily Mess Tumbler Risk',
    description: 'Hot tannins and boiled milk that seep deep into unshielded cotton fibers.'
  },
  {
    id: 'energy',
    name: 'Red Bull / Fizzy Cola',
    icon: '🥤',
    color: '#991B1B',
    bgColor: 'rgba(153, 27, 27, 0.9)',
    stainEffect: 'Sticky carbonated syrup drops',
    dangerLevel: 'Exam Week Spill',
    description: 'Sticky sugar molecules that attract hostel ants if not cleaned immediately.'
  },
  {
    id: 'ink',
    name: 'Midnight Gel Pen Ink',
    icon: '🖊️',
    color: '#1E3A8A',
    bgColor: 'rgba(30, 58, 138, 0.9)',
    stainEffect: 'Late night open nib bleed',
    dangerLevel: 'All-Nighter Notes Accident',
    description: 'Concentrated dye that leaks when sleeping with open pens on assignment sheets.'
  }
];

export const StainSimulator = () => {
  const { addToCart } = useCart();
  const [selectedLiquid, setSelectedLiquid] = useState(LIQUIDS[0]);
  const [fabricType, setFabricType] = useState('dormcozy'); // 'dormcozy' | 'regular'
  const [isSpilled, setIsSpilled] = useState(false);
  const [isWiped, setIsWiped] = useState(false);
  const [isPouring, setIsPouring] = useState(false);
  const [wipeAnimation, setWipeAnimation] = useState(false);

  const handlePour = () => {
    sounds.playPop();
    setIsPouring(true);
    setIsWiped(false);
    setTimeout(() => {
      setIsPouring(false);
      setIsSpilled(true);
    }, 600);
  };

  const handleWipe = () => {
    sounds.playSwoosh();
    setWipeAnimation(true);
    setTimeout(() => {
      setWipeAnimation(false);
      setIsWiped(true);
    }, 800);
  };

  const handleReset = () => {
    sounds.playClick();
    setIsSpilled(false);
    setIsWiped(false);
    setIsPouring(false);
  };

  return (
    <section id="stain-simulator" className="py-16 md:py-24 bg-dorm-card/30 border-b border-dorm-border/60 relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold mb-3">
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            <span>INTERACTIVE FABRIC LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The 3 AM Spill Simulator
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Test how hot Maggi curry, sweet chai, cola & ink behave on <span className="text-orange-400 font-semibold">DORMRIZZ SpillShield™</span> vs standard cotton sheets.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls: Select Spill Liquid & Fabric Mode */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* Step 1: Pick Liquid */}
            <div className="bg-dorm-card border border-dorm-border rounded-xl p-4 shadow-card">
              <div className="text-xs font-mono uppercase text-dorm-textMuted mb-3 flex items-center justify-between">
                <span>1. Select Liquid Hazard:</span>
                <span className="text-[10px] text-orange-400">Hostel Staples</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {LIQUIDS.map((liq) => {
                  const isSelected = selectedLiquid.id === liq.id;
                  return (
                    <button
                      key={liq.id}
                      onClick={() => {
                        setSelectedLiquid(liq);
                        handleReset();
                      }}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        isSelected 
                          ? 'border-orange-500 bg-orange-500/10 shadow-sm' 
                          : 'border-dorm-border bg-dorm-bg/60 hover:bg-dorm-bg hover:border-slate-600'
                      }`}
                    >
                      <div className="text-2xl mb-1">{liq.icon}</div>
                      <div className="text-xs font-bold text-slate-200 truncate">{liq.name}</div>
                      <div className="text-[10px] text-dorm-textMuted mt-0.5 truncate">{liq.dangerLevel}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Compare Fabric Type */}
            <div className="bg-dorm-card border border-dorm-border rounded-xl p-4 shadow-card">
              <div className="text-xs font-mono uppercase text-dorm-textMuted mb-3">
                2. Select Fabric Technology:
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => {
                    setFabricType('dormcozy');
                    handleReset();
                  }}
                  className={`w-full p-3 rounded-lg border text-left flex items-start gap-3 transition ${
                    fabricType === 'dormcozy'
                      ? 'border-emerald-500 bg-emerald-950/30 ring-1 ring-emerald-500'
                      : 'border-dorm-border bg-dorm-bg/60 hover:bg-dorm-bg'
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      DORMCOZY StainShield™
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded font-mono">
                        Nanotech
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      Hydrophobic & oleophobic nano-barrier. Liquid beads up without sinking.
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setFabricType('regular');
                    handleReset();
                  }}
                  className={`w-full p-3 rounded-lg border text-left flex items-start gap-3 transition ${
                    fabricType === 'regular'
                      ? 'border-red-500 bg-red-950/30 ring-1 ring-red-500'
                      : 'border-dorm-border bg-dorm-bg/60 hover:bg-dorm-bg'
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-300">
                      Standard Amazon Cotton Sheet
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Porous untreated cotton. Absorbs liquid instantly & leaves permanent yellow ring.
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* Liquid Description Box */}
            <div className="p-3.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-xs text-orange-200">
              <span className="font-semibold">{selectedLiquid.icon} {selectedLiquid.name}: </span>
              {selectedLiquid.description}
            </div>

          </div>

          {/* Center & Right: Interactive Test Surface */}
          <div className="lg:col-span-8">
            <div className="bg-dorm-card border border-dorm-border rounded-2xl p-6 shadow-card space-y-6">
              
              {/* Simulation Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-dorm-border pb-4">
                <div>
                  <div className="text-xs font-mono uppercase text-dorm-textMuted">
                    Live Testing Surface
                  </div>
                  <div className="text-lg font-bold text-white flex items-center gap-2">
                    Testing: {fabricType === 'dormcozy' ? 'DORMCOZY™ Fabric' : 'Regular Cotton Fabric'}
                    {fabricType === 'dormcozy' ? (
                      <span className="text-xs text-emerald-400 bg-emerald-950/80 border border-emerald-700 px-2 py-0.5 rounded-full">
                        Hydrophobic Active
                      </span>
                    ) : (
                      <span className="text-xs text-red-400 bg-red-950/80 border border-red-700 px-2 py-0.5 rounded-full">
                        Untreated Standard
                      </span>
                    )}
                  </div>
                </div>

                {/* Reset button */}
                {(isSpilled || isWiped) && (
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white bg-dorm-bg hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-dorm-border transition"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset Surface
                  </button>
                )}
              </div>

              {/* The Interactive Fabric Canvas */}
              <div className="relative h-72 sm:h-80 rounded-xl overflow-hidden border border-dorm-border shadow-inner bg-[#1A1F2C] flex items-center justify-center select-none">
                
                {/* Woven Fabric Texture */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    fabricType === 'dormcozy' 
                      ? 'bg-[#371E18] bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:12px_12px]' 
                      : 'bg-[#E2E8F0] bg-[radial-gradient(#0000000a_1px,transparent_1px)] [background-size:8px_8px]'
                  }`}
                />

                {/* Status Watermark */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={`text-[10px] font-mono font-bold px-2 py-1 rounded backdrop-blur-md ${
                    fabricType === 'dormcozy' 
                      ? 'bg-black/60 text-slate-300 border border-white/10' 
                      : 'bg-white/80 text-slate-800 border border-black/10'
                  }`}>
                    {fabricType === 'dormcozy' ? 'DORMCOZY Bio-Weave 400TC' : '100% Porous Cotton'}
                  </span>
                </div>

                {/* STATE 1: Empty / Ready */}
                {!isSpilled && !isPouring && !isWiped && (
                  <div className="relative z-10 text-center p-6 backdrop-blur-sm bg-black/40 rounded-xl border border-white/10 max-w-sm">
                    <div className="text-3xl mb-2 animate-bounce-slow">{selectedLiquid.icon}</div>
                    <div className="text-sm font-bold text-white">Surface Ready for Spill Test</div>
                    <p className="text-xs text-slate-300 mt-1">
                      Click <strong className="text-orange-400">"Pour {selectedLiquid.name}"</strong> below to simulate a late-night spill.
                    </p>
                  </div>
                )}

                {/* STATE 2: Pouring Animation */}
                {isPouring && (
                  <div className="relative z-20 flex flex-col items-center animate-pulse">
                    <div className="text-5xl animate-bounce">{selectedLiquid.icon}</div>
                    <div 
                      className="w-4 h-24 rounded-full animate-pulse mt-1"
                      style={{ backgroundColor: selectedLiquid.color }}
                    />
                    <span className="text-xs font-mono font-bold text-white mt-2 bg-black/70 px-2 py-0.5 rounded">
                      Pouring onto fabric...
                    </span>
                  </div>
                )}

                {/* STATE 3: Liquid Spilled on Surface */}
                {isSpilled && !isWiped && (
                  <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                    {fabricType === 'dormcozy' ? (
                      /* DORMCOZY BEADED EFFECT */
                      <div className="relative w-64 h-48 flex items-center justify-center">
                        {/* Hydrophobic Contact Angle Droplet Simulation */}
                        <div 
                          className="w-32 h-32 rounded-full shadow-2xl border-2 border-white/40 flex flex-col items-center justify-center transform transition-transform animate-float"
                          style={{ 
                            background: `radial-gradient(circle at 30% 30%, #ffffff88, ${selectedLiquid.bgColor})`,
                            boxShadow: `0 15px 35px -5px ${selectedLiquid.color}88, inset -5px -5px 15px rgba(0,0,0,0.4)`
                          }}
                        >
                          <div className="w-6 h-3 bg-white/70 rounded-full blur-[1px] -mt-10 self-start ml-6" />
                          <span className="text-2xl mt-2">{selectedLiquid.icon}</span>
                          <span className="text-[10px] font-mono font-bold text-white px-1.5 py-0.5 bg-black/40 rounded mt-1">
                            100% Beaded Up
                          </span>
                        </div>

                        {/* Smaller satellite beading droplets */}
                        <div 
                          className="absolute top-4 left-6 w-8 h-8 rounded-full border border-white/40 shadow-lg animate-pulse"
                          style={{ background: selectedLiquid.bgColor }}
                        />
                        <div 
                          className="absolute bottom-6 right-10 w-10 h-10 rounded-full border border-white/40 shadow-lg animate-pulse"
                          style={{ background: selectedLiquid.bgColor }}
                        />
                        <div 
                          className="absolute bottom-4 left-14 w-6 h-6 rounded-full border border-white/40 shadow-lg"
                          style={{ background: selectedLiquid.bgColor }}
                        />

                        {/* Notification Tag */}
                        <div className="absolute -bottom-2 bg-emerald-900/90 border border-emerald-500 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Hydrophobic Barrier Held! 0% Absorption.</span>
                        </div>
                      </div>
                    ) : (
                      /* REGULAR BEDDING SOAKED STAIN EFFECT */
                      <div className="relative w-72 h-52 flex flex-col items-center justify-center">
                        {/* Spreading Ugly Soaked Stain Blotch */}
                        <div 
                          className="w-56 h-40 rounded-[40%_60%_70%_30%/40%_50%_60%_55%] opacity-90 filter blur-[1px] animate-pulse flex items-center justify-center border border-dashed border-red-800/40"
                          style={{ 
                            backgroundColor: selectedLiquid.color,
                            boxShadow: `inset 0 0 30px rgba(0,0,0,0.5), 0 0 20px ${selectedLiquid.color}`
                          }}
                        >
                          <div className="text-center p-3 text-white">
                            <span className="text-2xl block mb-1">⚠️</span>
                            <span className="text-xs font-bold block">Deep Fiber Saturation</span>
                            <span className="text-[10px] text-amber-200">Soaked through to mattress!</span>
                          </div>
                        </div>

                        <div className="absolute -bottom-2 bg-red-900/95 border border-red-500 text-red-200 text-xs font-semibold px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                          <XCircle className="w-3.5 h-3.5 text-red-400" />
                          <span>Permanent Oil & Color Stain Created!</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* STATE 4: Wiped Result */}
                {isWiped && (
                  <div className="relative z-10 text-center p-6">
                    {fabricType === 'dormcozy' ? (
                      <div className="bg-black/70 border border-emerald-500/50 p-5 rounded-xl backdrop-blur-md max-w-sm mx-auto shadow-2xl animate-in zoom-in-95 duration-200">
                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2 text-2xl">
                          ✨
                        </div>
                        <div className="text-base font-bold text-white flex items-center justify-center gap-1.5">
                          <span>100% Pristine Clean!</span>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        </div>
                        <p className="text-xs text-slate-300 mt-1">
                          Wiped in 2 seconds with a normal dry tissue. Zero grease, zero turmeric yellowing, zero lingering smell.
                        </p>
                        <div className="mt-3 inline-block px-2.5 py-1 bg-emerald-950 text-emerald-300 text-[11px] font-mono rounded border border-emerald-800">
                          Ready for late-night sleep 😴
                        </div>
                      </div>
                    ) : (
                      <div className="bg-slate-900/90 border border-red-500/50 p-5 rounded-xl backdrop-blur-md max-w-sm mx-auto shadow-2xl">
                        <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mx-auto mb-2 text-2xl">
                          ❌
                        </div>
                        <div className="text-base font-bold text-red-300 flex items-center justify-center gap-1.5">
                          <span>Wiping Failed (Stain Remains)</span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1">
                          Even after scrubbing with tissue, the oil and dye are locked inside the cotton threads. Requires expensive laundry detergent & bleaching.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Wipe Tissue Animation Overlay */}
                {wipeAnimation && (
                  <div className="absolute inset-0 z-30 bg-gradient-to-r from-transparent via-white/80 to-transparent transform -skew-x-12 translate-x-full animate-[shimmer_0.8s_ease-in-out_forwards] flex items-center justify-center">
                    <div className="bg-white text-slate-900 font-bold px-4 py-2 rounded-lg shadow-2xl text-xs font-mono">
                      🧻 Wiping Surface...
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons below Canvas */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2">
                  {!isSpilled && !isWiped ? (
                    <button
                      onClick={handlePour}
                      disabled={isPouring}
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-sm shadow-glow flex items-center gap-2 transition"
                    >
                      <Droplets className="w-4 h-4" />
                      <span>Pour {selectedLiquid.name}</span>
                    </button>
                  ) : !isWiped ? (
                    <button
                      onClick={handleWipe}
                      disabled={wipeAnimation}
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg flex items-center gap-2 transition animate-bounce-slow"
                    >
                      <span>🧻 Wipe Clean with Tissue</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleReset}
                      className="px-5 py-3 rounded-xl bg-dorm-bg hover:bg-slate-800 border border-dorm-border text-slate-200 font-bold text-sm flex items-center gap-2 transition"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Test Another Spill</span>
                    </button>
                  )}
                </div>

                {/* Quick Add To Cart from Simulator */}
                <button
                  onClick={() => addToCart({
                    productId: 'stain-lab-kit',
                    title: 'The 3 AM Maggi Master Bedkit (StainShield™)',
                    colorId: 'terracotta',
                    colorName: 'Terracotta Rust',
                    colorHex: '#4A231A',
                    sizeId: 'hostel-single',
                    sizeName: 'Hostel Single Cot (36"×75")',
                    tier: 'classic',
                    tierName: 'All-Nighter Classic Kit',
                    addons: ['protector'],
                    addonsDetails: ['Waterproof Mattress Shield'],
                    price: 1998,
                    originalPrice: 3598,
                    quantity: 1,
                    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80',
                    isCustom: false
                  })}
                  className="px-4 py-3 rounded-xl bg-dorm-card hover:bg-dorm-cardHover border border-orange-500/50 hover:border-orange-500 text-orange-400 hover:text-orange-300 text-xs sm:text-sm font-semibold flex items-center gap-2 transition"
                >
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  <span>Get This Maggi-Proof Kit (₹1,599)</span>
                </button>
              </div>

              {/* Science Spec Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-dorm-border/60">
                <div className="flex items-start gap-2.5 p-2.5 bg-dorm-bg/40 rounded-lg">
                  <Layers className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-200">Oleophobic Nanotech</div>
                    <div className="text-[11px] text-dorm-textMuted">Repels oils, noodles & dairy fats</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 bg-dorm-bg/40 rounded-lg">
                  <Wind className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-200">100% Breathable Weave</div>
                    <div className="text-[11px] text-dorm-textMuted">Micro-porous airflow, zero heat trap</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 bg-dorm-bg/40 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-200">50+ Wash Durability</div>
                    <div className="text-[11px] text-dorm-textMuted">Nano-barrier molecularly bonded</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

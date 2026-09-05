import React, { useState } from 'react';
import { sounds } from '../utils/soundFx';
import { 
  Sparkles, 
  Droplets, 
  Wind, 
  Layers, 
  ShieldCheck, 
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Sun
} from 'lucide-react';

export const HostelCareGuide = () => {
  const [activeTab, setActiveTab] = useState('bucket');

  const TABS = [
    { id: 'bucket', label: '🧼 Bucket & Hostel Washing' },
    { id: 'maggi', label: '🍜 Maggi Spill Protocol' },
    { id: 'drying', label: '☀️ 25-Min Balcony Dry' },
    { id: 'ironing', label: '🚫 Zero Ironing Tech' }
  ];

  return (
    <section id="care-guide" className="py-16 md:py-24 border-b border-dorm-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LOW-MAINTENANCE PROTOCOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered For Lazy Hostel Life
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            No dry cleaners, no expensive irons, no complicated care labels. How to keep your DORMRIZZ kit fresh with minimal effort.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-dorm-card border border-dorm-border">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  sounds.playClick();
                  setActiveTab(tab.id);
                }}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                  activeTab === tab.id
                    ? 'bg-dorm-accent text-white shadow-glow'
                    : 'text-slate-400 hover:text-white hover:bg-dorm-cardHover'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Box */}
        <div className="max-w-4xl mx-auto bg-dorm-card border border-dorm-border rounded-2xl p-6 sm:p-8 shadow-card">
          
          {activeTab === 'bucket' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Washing in a Hostel Bathroom Bucket or Shared Semi-Auto Machine</span>
              </h3>
              <p className="text-xs text-slate-300">
                You don't need fancy front-load washers. Our high-density micro-cotton weave releases grime with normal cold tap water and minimal detergent.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 bg-dorm-bg rounded-xl border border-dorm-border space-y-1.5">
                  <div className="font-mono text-orange-400 font-bold text-xs">Step 1: 5-Min Soak</div>
                  <p className="text-[11px] text-slate-300">
                    Add half a cap of regular detergent in a hostel bucket with normal tap water. Soak for 5 mins.
                  </p>
                </div>

                <div className="p-3.5 bg-dorm-bg rounded-xl border border-dorm-border space-y-1.5">
                  <div className="font-mono text-orange-400 font-bold text-xs">Step 2: Gentle Rinse</div>
                  <p className="text-[11px] text-slate-300">
                    Swirl gently 3 times. Grime slips right off the oleophobic fiber surface without aggressive scrubbing.
                  </p>
                </div>

                <div className="p-3.5 bg-dorm-bg rounded-xl border border-dorm-border space-y-1.5">
                  <div className="font-mono text-orange-400 font-bold text-xs">Step 3: Light Wring</div>
                  <p className="text-[11px] text-slate-300">
                    Lightly squeeze water out. The lightweight fabric retains 70% less water than heavy conventional cotton.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'maggi' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-500" />
                <span>The 3 AM Emergency Maggi & Chai Spill Protocol</span>
              </h3>
              <p className="text-xs text-slate-300">
                Spilled yellow turmeric broth or hot sugary tea while cramming for exams? Here is how to clean it without getting out of bed:
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-start gap-3 p-3 bg-dorm-bg rounded-xl border border-dorm-border">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 font-mono text-xs flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Don't Panic (You Have 10 Minutes)</div>
                    <p className="text-[11px] text-slate-400">
                      The StainShield™ nano-barrier stops liquid from penetrating down to the mattress. The broth will bead into droplets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-dorm-bg rounded-xl border border-dorm-border">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 font-mono text-xs flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Dab with Dry Tissue or Napkin</div>
                    <p className="text-[11px] text-slate-400">
                      Touch a tissue to the droplet. It will instantly wick into the tissue like a sponge, leaving the sheet completely dry.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-dorm-bg rounded-xl border border-dorm-border">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 font-mono text-xs flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Quick Damp Wipe for Oily Chili Residuals</div>
                    <p className="text-[11px] text-slate-400">
                      If hot chili oil remains, wipe once with a damp wet-wipe. Zero turmeric stain left behind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'drying' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sun className="w-5 h-5 text-amber-400" />
                <span>25-Minute Rapid Balcony Air-Dry</span>
              </h3>
              <p className="text-xs text-slate-300">
                Hostel rooms lack drying space and laundry drying racks are always crowded.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 bg-dorm-bg rounded-xl border border-dorm-border space-y-1">
                  <div className="text-xs font-bold text-amber-400 flex items-center gap-1">
                    <Wind className="w-4 h-4" /> Balcony Railing Dry: ~25 mins
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Hang on your hostel room balcony rope or window grill. The micro-porous structure releases moisture 3x faster than heavy bedsheets.
                  </p>
                </div>

                <div className="p-4 bg-dorm-bg rounded-xl border border-dorm-border space-y-1">
                  <div className="text-xs font-bold text-blue-400 flex items-center gap-1">
                    <Wind className="w-4 h-4" /> Ceiling Fan Dry (Monsoon Season): ~40 mins
                  </div>
                  <p className="text-[11px] text-slate-400">
                    During rainy weeks, simply drape over your chair or bunk railing directly under the ceiling fan.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ironing' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>100% Wrinkle-Free & Iron-Free Tech</span>
              </h3>
              <p className="text-xs text-slate-300">
                Nobody has time or money for dhobi ironing in college.
              </p>

              <div className="p-4 bg-dorm-bg rounded-xl border border-dorm-border space-y-2">
                <div className="text-xs font-bold text-emerald-300">
                  Elastic Tension Auto-Smooths Fabric:
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  When you snap the 360° elastic hem around your hostel cot mattress, the natural lateral tension pulls every crease flat automatically. Your bed looks like a luxury hotel setup the moment you make it in 15 seconds.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

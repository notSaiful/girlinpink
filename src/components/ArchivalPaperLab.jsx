import React, { useState } from 'react';

export const ArchivalPaperLab = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('cotton');

  const paperSpecs = {
    cotton: {
      name: '150 GSM Handmade Cotton Rag',
      foundIn: 'Dragonfly Botanical Leather & Vintage Lace Junk Journal',
      features: [
        'Raw, hand-torn deckle edges with rich tactile tooth',
        'Handles wet fountain pens, gouache washes, and pressed floral gluing',
        'Crafted from 100% recycled cotton textile fibers with zero chemical bleaches',
        'Zero bleed-through to the reverse side of every sheet'
      ]
    },
    ivory: {
      name: '120–130 GSM Daiei Japanese Ivory Paper',
      foundIn: 'Katakana Cherry Blossom & Embroidered Linen Journal',
      features: [
        'Silky, glass-smooth pen glide engineered for fast lecture notes and calligraphy',
        'Warm, eye-friendly ivory tint that prevents study eye strain under desk lamps',
        'Acid-free archival formulation guaranteed for 100+ years of memory keeping',
        'Micro-structured fibers prevent ink spidering and line spreading'
      ]
    }
  };

  return (
    <section id="paper-lab" className="py-14 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFE8ED] border border-[#F5CCD6] text-[#8C3847] text-[11px] font-sans font-medium tracking-wide mb-3">
          <span>✒️</span>
          <span>The Paper Science • Tested in University Studios</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2D1C20] font-normal tracking-tight">
          The Archival Paper Laboratory
        </h2>
        <p className="font-serif italic text-lg text-[#DD6B80] mt-1">
          Zero Ghosting. Zero Bleed. 100% Tactile Peace.
        </p>
        <p className="text-xs sm:text-sm text-[#69464C] mt-2 font-sans max-w-lg mx-auto leading-relaxed">
          The single biggest disappointment in commercial stationery is thin paper that bleeds through. Every journaly edition is strictly bound with 120–150 GSM archival paper.
        </p>
      </div>

      {/* Main Split Test Card */}
      <div className="relative bg-[#FFF8F9] rounded-3xl border border-[#F6D5DC] p-4 sm:p-8 shadow-[0_8px_30px_rgba(240,165,180,0.12)] mb-10">
        
        {/* Washi Tag */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-44 h-5 bg-[#FADADD]/90 backdrop-blur-xs border border-dashed border-[#E5A8B4] rounded-xs shadow-2xs rotate-0.5 z-10 flex items-center justify-center pointer-events-none">
          <span className="text-[10px] font-hand text-[#8C3847] font-semibold tracking-wider">the real ink bleed test ♡</span>
        </div>

        {/* Visual Comparison Banner */}
        <div className="rounded-2xl overflow-hidden border border-[#F8D2DA] shadow-sm mb-6 bg-white">
          <img
            src="/sections/paper_lab_comparison.jpg"
            alt="Paper Lab Ink Bleed Comparison: journaly 150 GSM Cotton Rag vs Ordinary 70 GSM Paper"
            className="w-full h-auto object-cover max-h-[500px]"
            loading="lazy"
          />
        </div>

        {/* 3 Core Quality Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          
          <div className="p-4 rounded-2xl bg-white/80 border border-[#F7CCD6] flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FFE8EE] border border-[#F5CCD6] text-[#DD6B80] flex items-center justify-center text-lg shrink-0">
              ✒️
            </div>
            <div>
              <h4 className="font-serif text-sm font-medium text-[#2D1C20]">Fountain Pen & Gouache Safe</h4>
              <p className="text-xs text-[#7A4E57] font-sans mt-0.5 leading-relaxed">
                Tested with wet fountain pens, calligraphic dip nibs, gel inks, and light watercolor washes.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-[#F7CCD6] flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FFE8EE] border border-[#F5CCD6] text-[#DD6B80] flex items-center justify-center text-lg shrink-0">
              📖
            </div>
            <div>
              <h4 className="font-serif text-sm font-medium text-[#2D1C20]">180° Lay-Flat Spine</h4>
              <p className="text-xs text-[#7A4E57] font-sans mt-0.5 leading-relaxed">
                Smyth-sewn and coptic hand-stitching opens completely flat on cramped college desks without fighting your hand.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-[#F7CCD6] flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FFE8EE] border border-[#F5CCD6] text-[#DD6B80] flex items-center justify-center text-lg shrink-0">
              🌿
            </div>
            <div>
              <h4 className="font-serif text-sm font-medium text-[#2D1C20]">Acid-Free 100-Year Life</h4>
              <p className="text-xs text-[#7A4E57] font-sans mt-0.5 leading-relaxed">
                pH-neutral archival fibers prevent yellowing, brittleness, and fading for decades of student memories.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Paper Substrate Switcher */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FFF1F4] border border-[#FAD2DB]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#2D1C20] font-medium">
              Explore Our Two Archival Paper Substrates
            </h3>
            <p className="text-xs text-[#69464C] font-sans mt-1">
              Select a paper type to inspect its physical properties and binding pairings.
            </p>
          </div>

          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => setActiveTab('cotton')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-sans transition ${
                activeTab === 'cotton'
                  ? 'bg-[#DD6B80] text-white font-medium shadow-xs'
                  : 'bg-white text-[#69464C] border border-[#F5CCD6] hover:bg-[#FFE8ED]'
              }`}
            >
              150 GSM Cotton Rag
            </button>
            <button
              onClick={() => setActiveTab('ivory')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-sans transition ${
                activeTab === 'ivory'
                  ? 'bg-[#DD6B80] text-white font-medium shadow-xs'
                  : 'bg-white text-[#69464C] border border-[#F5CCD6] hover:bg-[#FFE8ED]'
              }`}
            >
              120 GSM Japanese Ivory
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-[#F7CCD6]">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#DD6B80] font-sans block mb-1">
              Paired With:
            </span>
            <div className="font-serif text-base text-[#2D1C20]">
              {paperSpecs[activeTab].foundIn}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#F7CCD6] space-y-1.5">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#DD6B80] font-sans block mb-1">
              Paper Highlights:
            </span>
            {paperSpecs[activeTab].features.map((feat, i) => (
              <div key={i} className="flex items-start gap-2 text-xs font-sans text-[#69464C]">
                <span className="text-[#DD6B80] shrink-0">✦</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => onNavigate && onNavigate('products')}
            className="inline-flex items-center gap-2 text-xs font-sans font-medium text-[#8C3847] hover:text-[#2D1C20] underline underline-offset-4 transition"
          >
            <span>Choose Your Preferred Paper Weight in All 6 Editions →</span>
          </button>
        </div>

      </div>

    </section>
  );
};

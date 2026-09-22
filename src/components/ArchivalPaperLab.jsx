import React from 'react';

export const ArchivalPaperLab = ({ onNavigate } = {}) => {
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
      <div className="relative bg-[#FFF8F9] rounded-3xl border border-[#F6D5DC] p-4 sm:p-8 shadow-[0_8px_30px_rgba(240,165,180,0.12)]">
        
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

    </section>
  );
};

import React from 'react';
import { useCart } from '../context/CartContext';
import { LAUNCH_PRINTS } from '../data/preorderData';

export const ProductShowcase = () => {
  const { openReservation } = useCart();

  return (
    <section id="the-prints" className="py-16 md:py-24 border-b border-sand">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-serif italic text-rose mb-2 uppercase tracking-wider">
            Launch Collection
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-nearblack font-normal">
            The 2 Launch Prints
          </h2>
          <p className="text-muted text-sm sm:text-base mt-2 font-sans font-light">
            Each set includes a 360° deep-pocket fitted sheet, cloud duvet cover, and two envelope pillowcases in 100% washed long-staple cotton percale.
          </p>
        </div>

        {/* 2 Launch Prints Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {LAUNCH_PRINTS.map((print) => {
            const isRose = print.id === 'french-rose-gingham';

            return (
              <div 
                key={print.id}
                className="bg-cream-card rounded-2xl border border-sand p-6 sm:p-8 flex flex-col justify-between shadow-soft group hover:border-sand/90 transition"
              >
                <div>
                  
                  {/* Photo Container with Gingham Underlay */}
                  <div className="relative rounded-xl overflow-hidden mb-6 aspect-[4/3] bg-cream-dark">
                    <img
                      src={print.editorialImage}
                      alt={print.name}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
                    />

                    {/* Tactile Gingham Tag Top Left */}
                    <div className="absolute top-3 left-3 bg-[#FAF8F5]/95 backdrop-blur-md px-3 py-1 rounded-full border border-sand text-xs font-medium text-nearblack shadow-sm flex items-center gap-2">
                      <span 
                        className="w-2.5 h-2.5 rounded-full border border-white" 
                        style={{ backgroundColor: print.checkColor }}
                      />
                      <span className="font-sans text-[11px]">{print.paletteName}</span>
                    </div>

                    {/* Stock counter */}
                    <div className="absolute bottom-3 right-3 bg-nearblack/80 text-white backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-sans font-medium">
                      {print.availableSets} sets remaining in Batch 01
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1 mb-4">
                    <h3 className="font-serif text-2xl sm:text-3xl text-nearblack font-normal">
                      {print.name}
                    </h3>
                    <p className="text-xs text-muted font-serif italic">
                      {print.tagline}
                    </p>
                  </div>

                  {/* Editorial Description */}
                  <p className="text-xs sm:text-sm text-nearblack/75 font-sans font-light leading-relaxed mb-6">
                    {print.description}
                  </p>

                  {/* Complete Inclusions List */}
                  <div className="p-4 rounded-xl bg-cream border border-sand/70 space-y-2 mb-6 text-xs text-nearblack/85">
                    <div className="font-serif italic font-semibold text-nearblack mb-1">
                      Full 4-Piece Makeover Kit Includes:
                    </div>
                    {print.includes.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-rose" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Fabric Specs */}
                  <div className="space-y-1.5 pb-6 border-b border-sand text-[11px] text-muted font-sans">
                    <div><strong>Aesthetic:</strong> Korean-dorm subtle check (calibrated for fluorescent room lights)</div>
                    <div><strong>Fabric:</strong> {print.specs.material}</div>
                    <div><strong>Cot Fit:</strong> {print.specs.fit}</div>
                  </div>

                </div>

                {/* Tier Choices & Action Buttons */}
                <div className="pt-6 space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-sand/30 border border-sand/60">
                    <div>
                      <div className="font-serif text-xs font-semibold text-nearblack">
                        Complete 4-Piece Glow-Up Kit
                      </div>
                      <div className="text-[10px] text-muted">
                        Fitted sheet + duvet cover + 2 envelope cases
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-serif font-bold text-nearblack text-base">₹1,200</div>
                      <div className="text-[10px] text-rose">or ₹390 deposit</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-sand/15 border border-sand/40">
                    <div>
                      <div className="font-serif text-xs font-medium text-nearblack">
                        Essential 3-Piece Sheet Set
                      </div>
                      <div className="text-[10px] text-muted">
                        Fitted sheet + 2 envelope cases
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-serif font-semibold text-nearblack text-sm">₹850</div>
                      <div className="text-[10px] text-muted">or ₹290 deposit</div>
                    </div>
                  </div>

                  <button
                    onClick={() => openReservation(print)}
                    className={`w-full py-3.5 rounded-full text-white text-xs sm:text-sm font-medium transition shadow-soft mt-2 ${
                      isRose 
                        ? 'bg-rose hover:bg-rose-dark' 
                        : 'bg-sage hover:bg-sage-dark'
                    }`}
                  >
                    Reserve This Print (from ₹850)
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React from 'react';

export const UnboxingExperience = ({ onNavigate }) => {
  const inclusions = [
    {
      icon: '📖',
      title: 'Handcrafted Journal of Choice',
      desc: 'Carefully wrapped in protective ivory tissue paper with wax-sealed sticker.'
    },
    {
      icon: '🎀',
      title: 'Solid Antique Brass Bookmark Clip',
      desc: 'Heirloom heavy brass clip embossed with delicate floral motif to hold your place.'
    },
    {
      icon: '📦',
      title: 'Rigid Keepsake Storage Box',
      desc: 'Heavyweight blush-rose presentation box hot-stamped with gold foil journaly logo.'
    },
    {
      icon: '💌',
      title: 'Numbered Edition Postcard',
      desc: 'Personalized welcome card noting your exact copy number in Batch 01 (out of 150).'
    }
  ];

  return (
    <section id="unboxing" className="py-14 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFE8ED] border border-[#F5CCD6] text-[#8C3847] text-[11px] font-sans font-medium tracking-wide mb-3">
          <span>🎀</span>
          <span>The Keepsake Packaging • Hand-Packed in Bangalore</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2D1C20] font-normal tracking-tight">
          Unboxing an Heirloom
        </h2>
        <p className="font-serif italic text-lg text-[#DD6B80] mt-1">
          What Arrives at Your Campus Gate
        </p>
        <p className="text-xs sm:text-sm text-[#69464C] mt-2 font-sans max-w-lg mx-auto leading-relaxed">
          We believe stationery should feel ceremonial. You aren't just receiving a notebook in a plastic mailer—you are unwrapping a timeless keepsake.
        </p>
      </div>

      {/* Main Feature Container */}
      <div className="relative bg-[#FFF8F9] rounded-3xl border border-[#F6D5DC] p-4 sm:p-8 shadow-[0_8px_30px_rgba(240,165,180,0.12)]">
        
        {/* Washi Tape Tag */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-48 h-5 bg-[#FADADD]/90 backdrop-blur-xs border border-dashed border-[#E5A8B4] rounded-xs shadow-2xs rotate-0.5 z-10 flex items-center justify-center pointer-events-none">
          <span className="text-[10px] font-hand text-[#8C3847] font-semibold tracking-wider">signature keepsake gift box ♡</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Luxury Unboxing Photography (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#F8D2DA] shadow-sm bg-white">
            <img
              src="/sections/unboxing_heirloom_box.jpg"
              alt="Unboxing an Heirloom: journaly Keepsake Box with Brass Bookmark and Wax Seal"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Right: Inclusions Checklist & Gifting Value (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="space-y-1">
              <span className="text-xs font-medium uppercase tracking-wider text-[#DD6B80] font-sans">
                Every Order Includes:
              </span>
              <h3 className="font-serif text-2xl text-[#2D1C20] font-normal leading-snug">
                The Complete Collector Experience
              </h3>
            </div>

            <div className="space-y-3 pt-2">
              {inclusions.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-white border border-[#F7CCD6] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#FFE8EE] border border-[#F5CCD6] text-[#DD6B80] flex items-center justify-center text-sm shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-medium text-[#2D1C20]">{item.title}</h4>
                    <p className="text-xs text-[#7A4E57] font-sans mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 3 Campus Delivery Pillars */}
            <div className="pt-4 border-t border-[#F8D2DA] flex flex-wrap gap-2 text-xs font-sans">
              <span className="px-2.5 py-1 rounded-full bg-[#FFE8EE] text-[#8C3847] border border-[#F5CCD6] font-medium">
                📦 Free Campus Shipping
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#FFE8EE] text-[#8C3847] border border-[#F5CCD6] font-medium">
                🎁 Gift-Ready Packaging
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#FFE8EE] text-[#8C3847] border border-[#F5CCD6] font-medium">
                🔒 100% Refund Guarantee
              </span>
            </div>

            <button
              onClick={() => onNavigate && onNavigate('products')}
              className="w-full mt-2 py-3 rounded-full bg-[#DD6B80] hover:bg-[#CC5A6F] text-white text-xs sm:text-sm font-medium tracking-wide transition shadow-xs hover:shadow-sm active:scale-98 flex items-center justify-center gap-2"
            >
              <span>Explore All 6 Handcrafted Editions</span>
              <span className="text-xs">♡</span>
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

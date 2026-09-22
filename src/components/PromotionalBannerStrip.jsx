import React from 'react';
import { useCart } from '../context/CartContext';
import { useCountdown } from '../hooks/useCountdown';

// Curated promotional highlights tailored strictly to our ICP (creative college students, dorm desk rituals, aesthetic stationery)
const PROMO_ITEMS = [
  { icon: '🌸', text: 'Small-Batch Handcrafted Stationery', highlight: 'Batch 01 Edition' },
  { icon: '✒️', text: '120–150 GSM Archival Bleedproof Paper', highlight: 'Fountain Pen Safe' },
  { icon: '🪡', text: 'Bespoke Custom Name Embroidery & Katakana Foil', highlight: 'Personalized Keepsakes' },
  { icon: '📖', text: '180° Lay-Flat Desk Binding', highlight: 'Dorm Desk Friendly' },
  { icon: '🌿', text: 'Vegetable-Tanned Leather, Heirloom Lace & Linen', highlight: 'Artisanal Craft' },
  { icon: '🎀', text: 'Free Solid Antique Brass Bookmark Included', highlight: 'With Every Journal' },
  { icon: '✨', text: 'Strictly 150 Copies Per Edition', highlight: 'Limited Run' },
  { icon: '📦', text: 'Free Campus Shipping Across India', highlight: 'Delivered to Your Hostel' },
  { icon: '♡', text: '100% Unconditional Refund Prior to Dispatch', highlight: 'Hassle-Free Pre-Orders' }
];

/**
 * 1. Continuous Moving Promotional Marquee Strip (Positioned directly below Header)
 */
export const PromotionalMarquee = () => {
  return (
    <div className="w-full bg-[#FFE8ED] border-b border-[#F5CCD6] py-3 text-xs sm:text-sm font-medium text-[#8C3847] shadow-2xs overflow-hidden">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {[...PROMO_ITEMS, ...PROMO_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 mx-5 sm:mx-8 shrink-0">
            <span className="text-base sm:text-lg">{item.icon}</span>
            <span className="font-serif tracking-tight text-[#2D1C20]">{item.text}</span>
            <span className="text-[11px] font-sans px-2.5 py-0.5 rounded-full bg-white/85 border border-[#F2CCD6] text-[#8C3847] font-medium">
              {item.highlight}
            </span>
            <span className="text-xs text-[#DD6B80] ml-3">♡</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * 2. Order Launch Countdown Timer Bar (Positioned below Hero Section)
 */
export const PreLaunchTimerSection = ({ onNavigate, onExplore }) => {
  const { getPrintStats } = useCart();
  const timeLeft = useCountdown();

  const handleAction = () => {
    if (onNavigate) {
      onNavigate('products');
    } else if (onExplore) {
      onExplore();
    } else {
      const el = document.getElementById('prints-carousel');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="launch-timer-section" className="w-full py-6 sm:py-12 px-3.5 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-[#FFF2F5] rounded-3xl border border-[#F8D2DA] p-4 sm:p-8 pt-7 sm:pt-8 shadow-[0_8px_30px_rgba(242,175,188,0.18)]">
          
          {/* Top Scrapbook Washi Tape Strip */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 sm:px-5 py-0.5 sm:py-1 bg-[#FADADD]/95 backdrop-blur-xs border border-dashed border-[#E5A8B4] rounded-xs shadow-2xs rotate-0.5 z-10 flex items-center justify-center max-w-[94%] text-center pointer-events-none">
            <span className="text-[10px] sm:text-[11px] font-hand text-[#8C3847] font-semibold tracking-wider whitespace-nowrap">
              <span className="hidden sm:inline">batch 01 pre-launch • pre-orders open september 9th 8:00 pm ♡</span>
              <span className="sm:hidden">batch 01 pre-launch • drops sept 9th 8 pm ♡</span>
            </span>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            
            {/* Left: Pre-Launch & ICP Context */}
            <div className="text-center lg:text-left space-y-1.5 max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#F5CCD6] text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-[#C2546A]">
                <span className="w-2 h-2 rounded-full bg-[#DD6B80] animate-ping" />
                <span>Pre-Launch: Orders Open Sept 9th, 8 PM</span>
              </div>
              
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2D1C20] font-normal tracking-tight">
                Batch 01 Stationery Drop Soon
              </h3>
              
              <p className="text-xs sm:text-sm text-[#69464C] leading-relaxed font-sans">
                We are currently in <strong>pre-launch</strong>! Handcrafted journal pre-orders unlock on <strong>September 9th at 8:00 PM IST</strong>. Strictly capped at 150 individually inspected copies per edition with custom name embroidery & foil options.
              </p>

              {/* Real-time remaining allocation pill */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 pt-1 text-xs font-sans">
                <span className="px-2.5 py-1 rounded-full border text-[10px] sm:text-[11px] font-medium bg-white text-[#8C3847] border-[#F5CCD6]">
                  🌿 Dragonfly Leather: 19 Sets Left
                </span>
                <span className="px-2.5 py-1 rounded-full border text-[10px] sm:text-[11px] font-medium bg-white text-[#8C3847] border-[#F5CCD6]">
                  🎀 Vintage Lace: 14 Sets Left
                </span>
                <span className="px-2.5 py-1 rounded-full border text-[10px] sm:text-[11px] font-medium bg-white text-[#8C3847] border-[#F5CCD6]">
                  🪡 Embroidered Linen: 22 Sets Left
                </span>
              </div>
            </div>

            {/* Right: The Aesthetic Countdown Timer Units & CTA */}
            <div className="flex flex-col items-center gap-4 shrink-0 w-full sm:w-auto">
              
              {/* Countdown Flip Blocks */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2.5">
                
                {/* Days */}
                <div className="flex flex-col items-center">
                  <div className="w-12 sm:w-16 md:w-18 h-14 sm:h-18 md:h-20 bg-white rounded-xl sm:rounded-2xl border border-[#F6D5DC] shadow-[0_4px_16px_rgba(221,107,128,0.12)] flex items-center justify-center -rotate-1">
                    <span className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#2D1C20]">
                      {String(timeLeft.days).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-medium tracking-wider uppercase font-sans text-[#8C5E68] mt-1">
                    Days
                  </span>
                </div>

                <span className="font-serif text-base sm:text-xl md:text-2xl text-[#DD6B80] font-bold mb-3 sm:mb-4">:</span>

                {/* Hours */}
                <div className="flex flex-col items-center">
                  <div className="w-12 sm:w-16 md:w-18 h-14 sm:h-18 md:h-20 bg-white rounded-xl sm:rounded-2xl border border-[#F6D5DC] shadow-[0_4px_16px_rgba(221,107,128,0.12)] flex items-center justify-center rotate-0.5">
                    <span className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#2D1C20]">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-medium tracking-wider uppercase font-sans text-[#8C5E68] mt-1">
                    Hours
                  </span>
                </div>

                <span className="font-serif text-base sm:text-xl md:text-2xl text-[#DD6B80] font-bold mb-3 sm:mb-4">:</span>

                {/* Minutes */}
                <div className="flex flex-col items-center">
                  <div className="w-12 sm:w-16 md:w-18 h-14 sm:h-18 md:h-20 bg-white rounded-xl sm:rounded-2xl border border-[#F6D5DC] shadow-[0_4px_16px_rgba(221,107,128,0.12)] flex items-center justify-center -rotate-0.5">
                    <span className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#2D1C20]">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-medium tracking-wider uppercase font-sans text-[#8C5E68] mt-1">
                    Mins
                  </span>
                </div>

                <span className="font-serif text-base sm:text-xl md:text-2xl text-[#DD6B80] font-bold mb-3 sm:mb-4">:</span>

                {/* Seconds */}
                <div className="flex flex-col items-center">
                  <div className="w-12 sm:w-16 md:w-18 h-14 sm:h-18 md:h-20 bg-[#FFE8EE] rounded-xl sm:rounded-2xl border border-[#F2CCD6] shadow-[0_4px_16px_rgba(221,107,128,0.18)] flex items-center justify-center rotate-1">
                    <span className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#DD6B80]">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-medium tracking-wider uppercase font-sans text-[#DD6B80] mt-1">
                    Secs
                  </span>
                </div>

              </div>

              {/* Status & CTA Button */}
              <div className="w-full flex flex-col items-center sm:items-end gap-2">
                <button
                  onClick={handleAction}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full bg-[#DD6B80] hover:bg-[#CC5A6F] text-white font-medium text-xs sm:text-sm tracking-wide shadow-[0_4px_16px_rgba(221,107,128,0.35)] hover:shadow-[0_6px_22px_rgba(221,107,128,0.45)] transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Explore 6 Journal Editions</span>
                  <span className="text-xs">♡</span>
                </button>
                <span className="text-[10px] sm:text-[11px] text-[#8C5E68] font-sans flex items-center gap-1">
                  <span>🔒</span>
                  <span>Pre-orders unlock Sept 9th, 8:00 PM</span>
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

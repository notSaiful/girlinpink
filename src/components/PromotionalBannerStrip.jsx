import React from 'react';
import { useCart } from '../context/CartContext';
import { useCountdown, TARGET_CUTOFF_LABEL } from '../hooks/useCountdown';

export const PromotionalBannerStrip = ({ onNavigate, onExplore }) => {
  const { getPrintStats } = useCart();
  const timeLeft = useCountdown();

  const roseStats = getPrintStats ? getPrintStats('The French Rose Gingham') : { remaining: 150, isSoldOut: false };
  const blueStats = getPrintStats ? getPrintStats('The Sky Blue Gingham') : { remaining: 150, isSoldOut: false };

  const handleAction = () => {
    if (onNavigate) {
      onNavigate('product');
    } else if (onExplore) {
      onExplore();
    } else {
      const el = document.getElementById('prints-carousel');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Curated promotional highlights tailored strictly to our ICP (college girls, dorm life, hostel cots, cute aesthetic)
  const promoItems = [
    { icon: '🌸', text: 'Strictly 150 Sets Per Print Edition', highlight: 'Batch 01 Small-Batch' },
    { icon: '⏰', text: 'Pre-Orders Close September 20th', highlight: '11:59 PM Final Cutoff' },
    { icon: '🧸', text: '360° Deep Elastic Fitted Sheet', highlight: 'Never Pops Off Hostel Cots' },
    { icon: '☁️', text: '100% Washed Percale Cotton', highlight: 'Breathable & Zero Microfiber Sweat' },
    { icon: '🎀', text: 'Free Canvas Tote Bag Included', highlight: 'With Complete Bedding Kit' },
    { icon: '💌', text: '100% Unconditional Refund Guarantee', highlight: 'If Hostel Allotment Changes' },
    { icon: '🚚', text: 'Free Campus Dispatch', highlight: 'Direct to Your University Hostel Gate' },
    { icon: '♡', text: 'Pay Only ₹390 Deposit Today', highlight: 'Balance Due at Dispatch' },
    { icon: '🧺', text: 'Pre-Shrunk & Enzyme Softened', highlight: 'Tough on Hostel Laundry' }
  ];

  return (
    <div className="w-full bg-[#FFF9FA] border-b border-[#F6D5DC] overflow-hidden">
      
      {/* 1. CONTINUOUS MOVING PROMOTIONAL MARQUEE STRIP */}
      <div className="relative bg-[#FFE8ED] border-y border-[#F5CCD6] py-3 text-xs sm:text-sm font-medium text-[#8C3847] shadow-2xs overflow-hidden">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {[...promoItems, ...promoItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 mx-5 sm:mx-8 shrink-0">
              <span className="text-base sm:text-lg">{item.icon}</span>
              <span className="font-serif tracking-tight text-[#2D1C20]">{item.text}</span>
              <span className="text-[11px] font-sans px-2 py-0.5 rounded-full bg-white/80 border border-[#F2CCD6] text-[#A84A5C]">
                {item.highlight}
              </span>
              <span className="text-xs text-[#DD6B80] ml-3">♡</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. ORDER CUTOFF COUNTDOWN TIMER BAR (SEPTEMBER 20TH DEADLINE) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="relative bg-[#FFF2F5] rounded-3xl border border-[#F8D2DA] p-6 sm:p-8 shadow-[0_8px_30px_rgba(242,175,188,0.18)]">
          
          {/* Top Scrapbook Washi Tape Strip */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1 bg-[#FADADD]/95 backdrop-blur-xs border border-dashed border-[#E5A8B4] rounded-xs shadow-2xs rotate-0.5 z-10 flex items-center gap-2">
            <span className="text-[11px] font-hand text-[#8C3847] font-semibold tracking-wider">
              batch 01 order deadline • september 20th 11:59 pm ♡
            </span>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            
            {/* Left: Deadline & ICP Context */}
            <div className="text-center lg:text-left space-y-1.5 max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#F5CCD6] text-[11px] font-medium uppercase tracking-wider text-[#C2546A]">
                <span className="w-2 h-2 rounded-full bg-[#DD6B80] animate-ping" />
                <span>Orders Close September 20th</span>
              </div>
              
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2D1C20] font-normal tracking-tight">
                Batch 01 Pre-Orders Close Soon
              </h3>
              
              <p className="text-xs sm:text-sm text-[#69464C] leading-relaxed font-sans">
                We only accept orders until <strong>September 20th at 11:59 PM</strong> to custom-loom our natural washed percale cotton for October campus move-in. Strictly capped at 150 sets per print.
              </p>

              {/* Real-time remaining allocation pill */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs font-sans">
                <span className={`px-2.5 py-1 rounded-full border text-[11px] font-medium ${
                  roseStats.isSoldOut 
                    ? 'bg-rose-100 text-rose-800 border-rose-300 font-semibold' 
                    : 'bg-white text-[#8C3847] border-[#F5CCD6]'
                }`}>
                  🌸 French Rose: {roseStats.isSoldOut ? 'Out of Stock (150/150 Reserved)' : 'A few sets left'}
                </span>
                <span className={`px-2.5 py-1 rounded-full border text-[11px] font-medium ${
                  blueStats.isSoldOut 
                    ? 'bg-sky-100 text-sky-800 border-sky-300 font-semibold' 
                    : 'bg-white text-[#2B5B7E] border-[#CFE0ED]'
                }`}>
                  ☁️ Sky Blue: {blueStats.isSoldOut ? 'Out of Stock (150/150 Reserved)' : 'A few sets left'}
                </span>
              </div>
            </div>

            {/* Right: The Aesthetic Countdown Timer Units & CTA */}
            <div className="flex flex-col items-center gap-4 shrink-0">
              
              {/* Countdown Flip Blocks */}
              <div className="flex items-center gap-2 sm:gap-3">
                
                {/* Days */}
                <div className="flex flex-col items-center">
                  <div className="w-14 sm:w-18 h-16 sm:h-20 bg-white rounded-2xl border border-[#F6D5DC] shadow-[0_4px_16px_rgba(221,107,128,0.12)] flex items-center justify-center -rotate-1">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#2D1C20]">
                      {String(timeLeft.days).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-[10px] font-medium tracking-wider uppercase font-sans text-[#8C5E68] mt-1.5">
                    Days
                  </span>
                </div>

                <span className="font-serif text-xl sm:text-2xl text-[#DD6B80] font-bold mb-4">:</span>

                {/* Hours */}
                <div className="flex flex-col items-center">
                  <div className="w-14 sm:w-18 h-16 sm:h-20 bg-white rounded-2xl border border-[#F6D5DC] shadow-[0_4px_16px_rgba(221,107,128,0.12)] flex items-center justify-center rotate-0.5">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#2D1C20]">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-[10px] font-medium tracking-wider uppercase font-sans text-[#8C5E68] mt-1.5">
                    Hours
                  </span>
                </div>

                <span className="font-serif text-xl sm:text-2xl text-[#DD6B80] font-bold mb-4">:</span>

                {/* Minutes */}
                <div className="flex flex-col items-center">
                  <div className="w-14 sm:w-18 h-16 sm:h-20 bg-white rounded-2xl border border-[#F6D5DC] shadow-[0_4px_16px_rgba(221,107,128,0.12)] flex items-center justify-center -rotate-0.5">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#2D1C20]">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-[10px] font-medium tracking-wider uppercase font-sans text-[#8C5E68] mt-1.5">
                    Mins
                  </span>
                </div>

                <span className="font-serif text-xl sm:text-2xl text-[#DD6B80] font-bold mb-4">:</span>

                {/* Seconds */}
                <div className="flex flex-col items-center">
                  <div className="w-14 sm:w-18 h-16 sm:h-20 bg-[#FFE8EE] rounded-2xl border border-[#F2CCD6] shadow-[0_4px_16px_rgba(221,107,128,0.18)] flex items-center justify-center rotate-1">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#9E2B42]">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-[10px] font-medium tracking-wider uppercase font-sans text-[#9E2B42] mt-1.5 font-bold">
                    Secs
                  </span>
                </div>

              </div>

              {/* Fast Action CTA */}
              {(roseStats.isSoldOut && blueStats.isSoldOut) ? (
                <button
                  disabled
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#F3CCD5] text-[#8C5E68] font-medium text-xs sm:text-sm tracking-wide cursor-not-allowed flex items-center justify-center gap-2 border border-[#E8B2BD]"
                >
                  <span>Out of Stock (All Editions Reserved) 🔒</span>
                </button>
              ) : (
                <button
                  onClick={handleAction}
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#DD6B80] hover:bg-[#CC5A6F] text-white font-medium text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-[0_4px_16px_rgba(221,107,128,0.35)] hover:shadow-[0_6px_22px_rgba(221,107,128,0.45)] hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Reserve Pre-Order — ₹390 Deposit</span>
                  <span className="text-xs">♡</span>
                </button>
              )}

              <div className="text-[11px] text-[#8C5E68] font-sans text-center">
                100% Unconditional Refund Anytime Before Campus Dispatch
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

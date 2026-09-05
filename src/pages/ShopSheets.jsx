import React from 'react';
import { useCart } from '../context/CartContext';
import { LAUNCH_PRINTS } from '../data/preorderData';

export const ShopSheets = ({ onNavigate }) => {
  const { openReservation } = useCart();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 animate-in fade-in duration-300">
      
      {/* Top Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-light border border-rose/20 text-rose-dark text-xs font-hand text-base mb-2">
          <span>page 02 • the two prints 🌸</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-nearblack font-normal">
          choose your cozy print
        </h2>
        <p className="font-hand text-xl text-nearblack/70 mt-1">
          loomed in small batches of 150. pure 100% washed cotton percale.
        </p>
      </div>

      {/* 2 Scrapbook Polaroids Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        
        {/* Set 1: French Rose Gingham */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-white p-6 sm:p-7 shadow-card relative flex flex-col justify-between transform hover:-translate-y-1 transition duration-300">
          
          {/* Top Washi Tape */}
          <div className="absolute -top-3 left-10 w-20 h-5 bg-rose-soft/80 border border-rose/30 transform -rotate-3 z-10 shadow-sm rounded-sm" />

          <div>
            {/* Polaroid Photo Frame */}
            <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[4/3] bg-cream-dark border border-sand/60">
              <img
                src="/french_rose_bed.jpg"
                alt="French Rose Gingham washed cotton bedding"
                className="w-full h-full object-cover object-center"
              />
              
              {/* Cute Sticker Tag */}
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full border border-sand text-xs font-hand text-sm text-nearblack shadow-sm flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose" />
                <span>dusty rose gingham 🌸</span>
              </div>

              <div className="absolute top-3 right-3 bg-nearblack/75 backdrop-blur-sm px-2.5 py-1 rounded-lg text-white text-[10px] font-sans">
                Drops Sept 9th
              </div>
            </div>

            {/* Set Name & Cute Note */}
            <div className="mb-4">
              <h3 className="font-serif text-2xl text-nearblack font-normal">
                The French Rose Gingham
              </h3>
              <p className="font-hand text-lg text-rose-dark mt-0.5">
                “feels like slow rainy mornings, warm tea & quiet studying”
              </p>
            </div>

            {/* Cute Inclusions List */}
            <div className="p-4 rounded-2xl bg-[#FFF9F9] border border-rose/15 space-y-1.5 text-xs text-nearblack/80 mb-5">
              <div className="font-hand text-base text-rose-dark font-semibold">
                what’s inside your tote bag:
              </div>
              <div className="flex items-center gap-2">
                <span>♡</span>
                <span>1x 360° deep-pocket fitted sheet (hugs dorm cot tight)</span>
              </div>
              <div className="flex items-center gap-2">
                <span>♡</span>
                <span>1x washed cotton duvet cover (with real coconut buttons)</span>
              </div>
              <div className="flex items-center gap-2">
                <span>♡</span>
                <span>2x French envelope pillowcases (no scratchy zippers)</span>
              </div>
            </div>
          </div>

          {/* Pricing & Button */}
          <div className="pt-4 border-t border-sand/60 flex items-center justify-between gap-3">
            <div>
              <div className="font-serif text-2xl font-bold text-nearblack">
                ₹1,200
              </div>
              <div className="text-[11px] text-muted">
                or sheet set ₹850 • deposit ₹390
              </div>
            </div>

            <button
              onClick={() => openReservation(LAUNCH_PRINTS[0])}
              className="px-6 py-3 rounded-full bg-rose hover:bg-rose-dark text-white text-xs font-medium transition shadow-soft flex items-center gap-1.5"
            >
              <span>i want this one</span>
              <span>♡</span>
            </button>
          </div>

        </div>

        {/* Set 2: Morning Sage Check */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-white p-6 sm:p-7 shadow-card relative flex flex-col justify-between transform hover:-translate-y-1 transition duration-300">
          
          {/* Top Washi Tape */}
          <div className="absolute -top-3 right-10 w-20 h-5 bg-sage-light border border-sage/30 transform rotate-3 z-10 shadow-sm rounded-sm" />

          <div>
            {/* Polaroid Photo Frame */}
            <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[4/3] bg-cream-dark border border-sand/60">
              <img
                src="/products/morning_blue_bed.jpg"
                alt="Sky Blue Gingham washed cotton bedding"
                className="w-full h-full object-cover object-center"
              />
              
              {/* Cute Sticker Tag */}
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full border border-sand text-xs font-hand text-sm text-nearblack shadow-sm flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6B93AB]" />
                <span>sky blue gingham ☁️</span>
              </div>

              <div className="absolute top-3 right-3 bg-nearblack/75 backdrop-blur-sm px-2.5 py-1 rounded-lg text-white text-[10px] font-sans">
                Drops Sept 9th
              </div>
            </div>

            {/* Set Name & Cute Note */}
            <div className="mb-4">
              <h3 className="font-serif text-2xl text-nearblack font-normal">
                The Sky Blue Gingham
              </h3>
              <p className="font-hand text-lg text-[#345D78] mt-0.5">
                “breezy sky blue and soft cream check for an airy, peaceful sanctuary”
              </p>
            </div>

            {/* Cute Inclusions List */}
            <div className="p-4 rounded-2xl bg-[#F4F8F4] border border-sage/20 space-y-1.5 text-xs text-nearblack/80 mb-5">
              <div className="font-hand text-base text-sage-dark font-semibold">
                what’s inside your tote bag:
              </div>
              <div className="flex items-center gap-2">
                <span>♡</span>
                <span>1x 360° deep-pocket fitted sheet (hugs dorm cot tight)</span>
              </div>
              <div className="flex items-center gap-2">
                <span>♡</span>
                <span>1x washed cotton duvet cover (with real coconut buttons)</span>
              </div>
              <div className="flex items-center gap-2">
                <span>♡</span>
                <span>2x French envelope pillowcases (no scratchy zippers)</span>
              </div>
            </div>
          </div>

          {/* Pricing & Button */}
          <div className="pt-4 border-t border-sand/60 flex items-center justify-between gap-3">
            <div>
              <div className="font-serif text-2xl font-bold text-nearblack">
                ₹1,200
              </div>
              <div className="text-[11px] text-muted">
                or sheet set ₹850 • deposit ₹390
              </div>
            </div>

            <button
              onClick={() => openReservation(LAUNCH_PRINTS[1])}
              className="px-6 py-3 rounded-full bg-sage hover:bg-sage-dark text-white text-xs font-medium transition shadow-soft flex items-center gap-1.5"
            >
              <span>i want this one</span>
              <span>♡</span>
            </button>
          </div>

        </div>

      </div>

      {/* Bottom Page Navigation Links */}
      <div className="mt-12 flex items-center justify-between text-xs font-hand text-lg text-nearblack/70">
        <button
          onClick={() => onNavigate('story')}
          className="hover:text-rose transition flex items-center gap-1"
        >
          <span>←</span>
          <span>back to bedroom story</span>
        </button>

        <button
          onClick={() => onNavigate('diary')}
          className="hover:text-rose transition flex items-center gap-1"
        >
          <span>read our loom diary</span>
          <span>➔</span>
        </button>
      </div>

    </div>
  );
};

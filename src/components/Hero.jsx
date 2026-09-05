import React from 'react';
import { useCart } from '../context/CartContext';
import { LAUNCH_PRINTS } from '../data/preorderData';
import { HeroGardenVideo } from './HeroGardenVideo';

export const Hero = () => {
  const { openReservation, scrollToId } = useCart();
  const primaryPrint = LAUNCH_PRINTS[0]; // French Rose Gingham

  return (
    <section className="relative py-8 sm:py-12 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white/85 backdrop-blur-md rounded-3xl border border-white/90 p-6 sm:p-10 lg:p-12 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: The Emotional Statement & Single Action */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              
              {/* Small Batch Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand/60 border border-sand text-nearblack/80 text-xs font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-rose animate-pulse" />
                <span>Small Batch 01 • 150 Sets Only</span>
              </div>

              {/* The Emotional Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.12] text-nearblack font-normal">
                your room isn't yours yet, <br />
                <span className="italic font-normal text-rose">your bed can be.</span>
              </h1>

              {/* Subtext: grounded, soft, and honest */}
              <p className="text-base sm:text-lg text-nearblack/80 max-w-xl mx-auto lg:mx-0 font-sans font-light leading-relaxed">
                No renovation, no landlord permission. Crisp 100% washed cotton gingham loomed in small drops for your Bangalore hostel, PG, or first apartment bed. Marshmallow-soft comfort in a space you finally control.
              </p>

              {/* Single Clear Action with transparent terms */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => openReservation(primaryPrint)}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-rose hover:bg-rose-dark text-white font-medium text-sm sm:text-base shadow-soft transition-all transform active:scale-[0.99] text-center"
                >
                  Reserve my set (from ₹850)
                </button>

                <button
                  onClick={() => scrollToId('the-prints')}
                  className="text-xs text-muted hover:text-nearblack underline underline-offset-4 transition"
                >
                  Explore the 2 launch prints →
                </button>
              </div>

              {/* Micro Reassurances */}
              <div className="pt-3 flex items-center justify-center lg:justify-start gap-6 text-xs text-muted font-sans flex-wrap">
                <span>₹1,200 full 4-pc kit</span>
                <span>•</span>
                <span>₹850 sheet set</span>
                <span>•</span>
                <span>100% refundable anytime before dispatch</span>
              </div>

            </div>

            {/* Right Column: The Animative Garden Video Scene */}
            <div className="lg:col-span-6">
              <div className="relative animate-hero-settle">
                
                {/* Background Gingham Fabric Swatch Block */}
                <div 
                  className="absolute -top-3 -left-3 w-full h-full rounded-3xl bg-gingham-rose-dense border border-sand/80 shadow-soft transform -rotate-1 pointer-events-none" 
                />

                {/* The Living Animative Garden Video Player */}
                <HeroGardenVideo />

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

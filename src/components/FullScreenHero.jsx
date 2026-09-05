import React from 'react';

export const FullScreenHero = ({ onExplore }) => {
  const handleScroll = () => {
    if (onExplore) {
      onExplore();
    } else {
      const el = document.getElementById('prints-carousel');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative w-full h-[85vh] sm:h-screen max-h-[880px] min-h-[520px] flex items-center justify-center overflow-hidden">
      {/* Background Hero Image */}
      <img
        src="/user_hero_bedroom.jpg"
        alt="your room isn’t yours yet, your bed can be"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Soft, gentle contrast overlay for clean typography readability */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Centered Text Overlay & Girly CTA */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight drop-shadow-md">
          your room isn’t yours yet, <br />
          <span className="italic font-serif">your bed can be.</span>
        </h1>

        {/* Hero Girly CTA Button */}
        <div className="mt-8 sm:mt-10 flex justify-center animate-in fade-in duration-500 delay-150">
          <button
            onClick={handleScroll}
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#DD6B80] hover:bg-[#CC5A6F] text-white font-medium text-xs sm:text-sm tracking-wide shadow-[0_4px_25px_rgba(221,107,128,0.4)] hover:shadow-[0_8px_30px_rgba(221,107,128,0.55)] transition-all duration-200 border border-white/40 hover:-translate-y-0.5 active:scale-95"
          >
            <span>explore the collection</span>
            <span className="text-xs group-hover:translate-y-0.5 transition-transform">♡</span>
          </button>
        </div>
      </div>
    </section>
  );
};

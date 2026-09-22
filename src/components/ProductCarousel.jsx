import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useCountdown } from '../hooks/useCountdown';
import { LAUNCH_PRINTS } from '../data/preorderData';

export const ProductCarousel = ({ onNavigate }) => {
  const { setSelectedPrint, getPrintStats } = useCart();
  const timeLeft = useCountdown();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleChoosePrint = (printData) => {
    if (setSelectedPrint && printData) {
      setSelectedPrint(printData);
    }
    if (onNavigate) {
      onNavigate('product');
    }
  };

  const slides = LAUNCH_PRINTS.map(journal => ({
    id: journal.id,
    title: journal.name,
    tag: journal.badge || 'Artisanal Journal',
    tagColor: 'bg-[#FFF5F7] text-[#7E3846] border-[#F6D5DC]',
    description: journal.description,
    image: journal.editorialImage,
    price: `₹${journal.price.toLocaleString('en-IN')}`,
    subPrice: `Handcrafted Edition • ₹${journal.depositPrice} pre-order deposit`,
    badge: `${journal.availableSets} copies remaining`,
    inclusions: journal.includes || [
      'Handcrafted journal in signature keepsake box',
      'Solid antique brass bookmark clip',
      'Protective cloth dust bag'
    ],
    printData: journal
  }));

  // Auto advance every 7s unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const current = slides[currentIndex];

  return (
    <section id="prints-carousel" className="py-14 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      
      {/* Clean Section Header */}
      <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
        <span className="text-xs font-medium tracking-widest uppercase text-[#DD6B80] font-sans block mb-2">
          The Autumn Collection ♡
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#221F1E] font-normal tracking-tight">
          Select Your Creative Journal
        </h2>
        <p className="text-sm text-stone-600 mt-2 font-sans max-w-md mx-auto">
          Six signature handcrafted editions featuring deckle-edge paper, vintage lace, Japanese Katakana foil, and bespoke floral embroidery.
        </p>
      </div>

      {/* Main Carousel Card Container */}
      <div 
        className="relative bg-[#FFF8F9] rounded-3xl border border-[#F6D5DC] p-4 sm:p-10 shadow-[0_8px_30px_rgba(242,175,188,0.15)]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Scrapbook Washi Tape Tab */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 sm:w-44 h-5 bg-[#FADADD]/85 backdrop-blur-xs border border-dashed border-[#E5A8B4]/70 rounded-xs shadow-2xs rotate-0.5 pointer-events-none z-10" />

        {/* Carousel Slide Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">
          
          {/* Slide Photo */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square bg-stone-100 border border-[#F8D2DA] shadow-sm group">
            <img 
              key={current.image}
              src={current.image} 
              alt={current.title}
              className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105"
            />

            {/* Live Sets Remaining Badge (out of 150 limit) */}
            <div className={`absolute top-2.5 sm:top-3.5 right-2.5 sm:right-3.5 backdrop-blur-md text-white px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-sans tracking-wide z-20 ${
              (getPrintStats ? getPrintStats(current.title).isSoldOut : false)
                ? 'bg-rose-950/95 font-semibold text-rose-100 shadow-sm'
                : 'bg-[#7A2A38]/85'
            }`}>
              {(getPrintStats && getPrintStats(current.title).isSoldOut)
                ? 'Out of Stock'
                : !timeLeft.isExpired
                  ? 'Drops Sept 9th'
                  : current.badge}
            </div>

            {/* Out of Stock Photo Overlay */}
            {(getPrintStats && getPrintStats(current.title).isSoldOut) && (
              <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 text-center z-10">
                <span className="px-4 py-1.5 rounded-full bg-rose-950 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase border border-rose-800 shadow-md">
                  Out of Stock
                </span>
                <span className="text-[10px] sm:text-[11px] text-white/90 font-sans mt-1.5 font-medium">
                  Batch 01 allocation full (150/150 reserved)
                </span>
              </div>
            )}

            {/* Bottom Style Tag */}
            <div className="absolute bottom-2.5 sm:bottom-3.5 left-2.5 sm:left-3.5 bg-[#FFF8F9]/95 backdrop-blur-sm px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-[#F7D5DC] text-[11px] sm:text-xs font-sans text-[#7E3846] shadow-xs z-20">
              {current.tag}
            </div>
          </div>

          {/* Slide Content Details */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              {/* Category Tag */}
              <div className="inline-block px-3 py-1 rounded-full text-xs font-medium border mb-3 bg-[#FFE8EE] text-[#8C3847] border-[#F2CCD6]">
                {current.tag}
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2D1C20] font-normal tracking-tight">
                {current.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#69464C] mt-2 leading-relaxed font-sans">
                {current.description}
              </p>

              {/* Inclusions List */}
              <div className="mt-5 p-4 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB] space-y-2 text-xs text-[#69464C]">
                <div className="font-medium text-[#7E3846] tracking-wide uppercase text-[11px]">
                  Thoughtful Artisanal Details:
                </div>
                {current.inclusions.map((inc, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C27878] mt-1.5 shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price & Action Area */}
            <div className="pt-4 border-t border-[#F8D2DA] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-normal text-[#2D1C20]">
                  {current.price}
                </div>
                <div className="text-xs text-[#8C5E68] mt-0.5 font-sans">
                  {current.subPrice}
                </div>
              </div>

              {/* Single Primary Action Button */}
              {(getPrintStats && getPrintStats(current.title).isSoldOut) ? (
                <button
                  disabled
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#F3CCD5] text-[#8C5E68] border border-[#E8B2BD] text-xs font-medium tracking-wide cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <span>Out of Stock</span>
                  <span>🔒</span>
                </button>
              ) : !timeLeft.isExpired ? (
                <button
                  onClick={() => handleChoosePrint(current.printData)}
                  className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#DD6B80] hover:bg-[#CC5A6F] text-white text-xs sm:text-sm font-medium tracking-wide transition shadow-[0_4px_16px_rgba(221,107,128,0.35)] hover:shadow-[0_6px_22px_rgba(221,107,128,0.45)] hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span className="hidden sm:inline">Preview & Personalize (Drops Sept 9)</span>
                  <span className="sm:hidden">Personalize (Drops Sept 9)</span>
                  <span className="text-xs">⏰</span>
                </button>
              ) : (
                <button
                  onClick={() => handleChoosePrint(current.printData)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#DD6B80] hover:bg-[#CC5A6F] text-white text-xs sm:text-sm font-medium tracking-wide transition shadow-[0_4px_16px_rgba(221,107,128,0.35)] hover:shadow-[0_6px_22px_rgba(221,107,128,0.45)] hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Personalize & Reserve</span>
                  <span className="text-xs">♡</span>
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Thumbnail Selector Strip for all 6 editions */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 mt-8 pt-6 border-t border-[#F8D2DA]">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentIndex(idx)}
              className={`text-left p-1 sm:p-1.5 rounded-xl border transition-all duration-200 flex flex-col items-center gap-1.5 ${
                currentIndex === idx
                  ? 'bg-white border-[#DD6B80] shadow-sm scale-102 ring-2 ring-[#DD6B80]/30'
                  : 'bg-white/60 border-[#F5CCD6] hover:bg-white hover:border-[#E8A5B2]'
              }`}
            >
              <div className="w-full aspect-square rounded-lg overflow-hidden bg-stone-100">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-serif text-[#2D1C20] line-clamp-1 text-center font-normal px-1">
                {s.title.replace('Personalized ', '')}
              </span>
            </button>
          ))}
        </div>

        {/* Carousel Navigation Footer */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#F7D5DC]">
          
          <button 
            onClick={prevSlide}
            className="w-9 h-9 rounded-full bg-[#FFF5F7] border border-[#F3CAD3] hover:border-[#DD6B80] hover:bg-[#FFEBF0] text-[#7E3846] transition flex items-center justify-center text-sm shadow-xs"
            aria-label="Previous journal"
          >
            ←
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-200 rounded-full ${
                  currentIndex === idx 
                    ? 'w-6 h-2 bg-[#DD6B80]' 
                    : 'w-2 h-2 bg-[#F3CAD3] hover:bg-[#E8B2BD]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="w-9 h-9 rounded-full bg-[#FFF5F7] border border-[#F3CAD3] hover:border-[#DD6B80] hover:bg-[#FFEBF0] text-[#7E3846] transition flex items-center justify-center text-sm shadow-xs"
            aria-label="Next journal"
          >
            →
          </button>

        </div>

      </div>

    </section>
  );
};

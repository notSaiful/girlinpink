import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { LAUNCH_PRINTS } from '../data/preorderData';

export const ProductCarousel = ({ onNavigate }) => {
  const { setSelectedPrint, getPrintStats } = useCart();
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

  const slides = [
    {
      id: 'french-rose',
      title: 'The French Rose Gingham',
      tag: 'Dusty Rose Check',
      tagColor: 'bg-[#F9F4F3] text-[#7A4B50] border-[#EEDBDB]',
      description: 'Muted dusty rose check that softens harsh institutional room lighting into a warm, inviting personal sanctuary.',
      image: '/products/french_rose_bed.jpg',
      price: '₹1,200',
      subPrice: 'Complete 4-Piece Kit • ₹390 pre-order deposit',
      badge: '19 sets remaining',
      inclusions: [
        '360° deep-pocket elastic fitted sheet for cot mattresses',
        'Washed cotton duvet cover with interior ties and concealed zip',
        'Two matching envelope pillowcases with seamless folds'
      ],
      printData: LAUNCH_PRINTS[0]
    },
    {
      id: 'sky-blue',
      title: 'The Sky Blue Gingham',
      tag: 'Sky Blue Check',
      tagColor: 'bg-[#F0F5F8] text-[#345D78] border-[#CFDEE7]',
      description: 'Breezy sky blue and soft cream check bringing an airy, peaceful clarity to your room and study space.',
      image: '/products/morning_blue_bed.jpg',
      price: '₹1,200',
      subPrice: 'Complete 4-Piece Kit • ₹390 pre-order deposit',
      badge: '14 sets remaining',
      inclusions: [
        '360° deep-pocket elastic fitted sheet for cot mattresses',
        'Washed cotton duvet cover with interior ties and concealed zip',
        'Two matching envelope pillowcases with seamless folds'
      ],
      printData: LAUNCH_PRINTS[1]
    }
  ];

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
      <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
        <span className="text-xs font-medium tracking-widest uppercase text-stone-400 font-sans block mb-2">
          The Autumn Collection
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#221F1E] font-normal tracking-tight">
          Select Your Bedding
        </h2>
        <p className="text-sm text-stone-600 mt-2 font-sans max-w-md mx-auto">
          Loomed in small batches of 150 from 100% long-staple washed cotton percale.
        </p>
      </div>

      {/* Main Carousel Card Container */}
      <div 
        className="relative bg-[#FFF8F9] rounded-3xl border border-[#F6D5DC] p-6 sm:p-10 shadow-[0_8px_30px_rgba(242,175,188,0.15)]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Scrapbook Washi Tape Tab */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 sm:w-44 h-5 bg-[#FADADD]/85 backdrop-blur-xs border border-dashed border-[#E5A8B4]/70 rounded-xs shadow-2xs rotate-0.5 pointer-events-none z-10" />

        {/* Carousel Slide Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
          
          {/* Slide Photo */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square bg-stone-100 border border-[#F8D2DA] shadow-sm">
            <img 
              key={current.image}
              src={current.image} 
              alt={current.title}
              className="w-full h-full object-cover object-center transition-all duration-500"
            />

            {/* Live Sets Remaining Badge (out of 150 limit) */}
            <div className={`absolute top-3.5 right-3.5 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-sans tracking-wide ${
              (getPrintStats ? getPrintStats(current.title).isSoldOut : false)
                ? 'bg-rose-950/90 font-medium'
                : 'bg-[#7A2A38]/85'
            }`}>
              {getPrintStats
                ? (getPrintStats(current.title).isSoldOut 
                    ? 'Sold Out (150/150 Reserved)' 
                    : `${getPrintStats(current.title).remaining} of 150 sets left`)
                : current.badge}
            </div>

            {/* Bottom Style Tag */}
            <div className="absolute bottom-3.5 left-3.5 bg-[#FFF8F9]/95 backdrop-blur-sm px-3 py-1 rounded-full border border-[#F7D5DC] text-xs font-sans text-[#7E3846] shadow-xs">
              {current.tag}
            </div>
          </div>

          {/* Slide Content Details */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              {/* Category Tag */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mb-3 ${current.tagColor}`}>
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
                  What arrives in your set:
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
            <div className="pt-4 border-t border-[#F8D2DA] flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-normal text-[#2D1C20]">
                  {current.price}
                </div>
                <div className="text-xs text-[#8C5E68] mt-0.5 font-sans">
                  {current.subPrice}
                </div>
              </div>

              {/* Single Primary Action Button - Consistently Pink or Sold Out */}
              {(getPrintStats && getPrintStats(current.title).isSoldOut) ? (
                <button
                  disabled
                  className="px-6 py-3.5 rounded-full bg-stone-300 text-stone-600 text-xs font-medium tracking-wide cursor-not-allowed flex items-center gap-2"
                >
                  <span>Allocation Full (150/150)</span>
                  <span>🔒</span>
                </button>
              ) : (
                <button
                  onClick={() => handleChoosePrint(current.printData)}
                  className="px-6 py-3.5 rounded-full bg-[#DD6B80] hover:bg-[#CC5A6F] text-white text-xs font-medium tracking-wide transition shadow-[0_4px_16px_rgba(221,107,128,0.35)] hover:shadow-[0_6px_22px_rgba(221,107,128,0.45)] hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
                >
                  <span>Customize & Pre-Order</span>
                  <span className="text-xs">♡</span>
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Carousel Navigation Footer */}
        <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#F7D5DC]">
          
          <button 
            onClick={prevSlide}
            className="w-9 h-9 rounded-full bg-[#FFF5F7] border border-[#F3CAD3] hover:border-[#DD6B80] hover:bg-[#FFEBF0] text-[#7E3846] transition flex items-center justify-center text-sm shadow-xs"
            aria-label="Previous print"
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
            aria-label="Next print"
          >
            →
          </button>

        </div>

      </div>

    </section>
  );
};

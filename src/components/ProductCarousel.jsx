import React, { useRef, useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { LAUNCH_PRINTS } from '../data/preorderData';
import { isShopifyConnected, generateShopifyCartPermalink } from '../services/shopify';

export const ProductCarousel = ({ onNavigate }) => {
  const { setSelectedPrint, getPrintStats } = useCart();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.journal-card')?.offsetWidth || 320;
      const scrollAmount = direction === 'left' ? -(cardWidth + 24) * 1.5 : (cardWidth + 24) * 1.5;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScroll, 350);
    }
  };

  const handleSelectProduct = (journal) => {
    if (setSelectedPrint && journal) {
      setSelectedPrint(journal);
    }
    if (onNavigate) {
      onNavigate('product', journal);
    } else {
      window.location.hash = `product-${journal?.id || ''}`;
    }
  };

  return (
    <section id="prints-carousel" className="py-12 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Section Header & Horizontal Nav Buttons */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE8ED] border border-[#F5CCD6] text-[#8C3847] text-[11px] font-sans font-medium tracking-wide mb-2.5">
            <span>🌸</span>
            <span>Batch 01 Editions • Small-Batch 150 Copies</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2D1C20] font-normal tracking-tight">
            Handcrafted Creative Journals
          </h2>
          <p className="text-xs sm:text-sm text-[#69464C] mt-2 font-sans max-w-xl leading-relaxed">
            Explore our six handcrafted editions bound with raw deckle paper, tea-stained antique lace, custom Katakana foil & Belgian linen embroidery.
          </p>
        </div>

        {/* Carousel Navigation Buttons & View All link */}
        <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
          <button
            onClick={() => onNavigate && onNavigate('products')}
            className="text-xs font-sans text-[#8C3847] hover:text-[#2D1C20] underline underline-offset-4 font-medium mr-2 transition"
          >
            View All 6 Editions →
          </button>

          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Previous journals"
            className="w-10 h-10 rounded-full border border-[#F5CCD6] bg-[#FFF5F7] hover:bg-[#FFE8ED] text-[#8C3847] disabled:opacity-35 disabled:cursor-not-allowed flex items-center justify-center transition shadow-2xs active:scale-95"
          >
            ←
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Next journals"
            className="w-10 h-10 rounded-full border border-[#F5CCD6] bg-[#FFF5F7] hover:bg-[#FFE8ED] text-[#8C3847] disabled:opacity-35 disabled:cursor-not-allowed flex items-center justify-center transition shadow-2xs active:scale-95"
          >
            →
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div 
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-1 no-scrollbar -mx-4 sm:mx-0 px-4 sm:px-0"
      >
        {LAUNCH_PRINTS.map((journal) => {
          const stats = getPrintStats ? getPrintStats(journal.name) : { remaining: journal.availableSets, isSoldOut: false };

          return (
            <div
              key={journal.id}
              onClick={() => handleSelectProduct(journal)}
              className="journal-card w-[290px] sm:w-[330px] md:w-[350px] shrink-0 snap-start bg-[#FFF9FA] rounded-3xl border border-[#F6D5DC] p-4 sm:p-5 shadow-[0_6px_24px_rgba(240,165,180,0.12)] hover:shadow-[0_12px_32px_rgba(240,165,180,0.22)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Product Photo with Hover Zoom */}
                <div 
                  onClick={() => handleSelectProduct(journal)}
                  className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#FDF0F3] border border-[#F7D5DC] mb-4 cursor-pointer"
                >
                  <img
                    src={journal.editorialImage}
                    alt={journal.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Top Badge: Batch Remaining */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#FFF5F7]/95 backdrop-blur-xs border border-[#F5CCD6] text-[10px] font-medium text-[#8C3847] shadow-2xs">
                    {journal.badge || 'Batch 01'}
                  </div>

                  {/* Top Right: Stock Scarcity */}
                  <div className={`absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-sans font-medium backdrop-blur-xs ${
                    stats.isSoldOut 
                      ? 'bg-rose-900 text-rose-100' 
                      : 'bg-black/60 text-white'
                  }`}>
                    {stats.isSoldOut ? 'Sold Out' : `${journal.availableSets} Copies Left`}
                  </div>

                  {/* Personalization Tag Indicator */}
                  {journal.isPersonalized && (
                    <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#FFE8ED]/95 backdrop-blur-xs border border-[#F5CCD6] text-[10px] font-medium text-[#9E2B42] flex items-center gap-1">
                      <span>🪡</span>
                      <span>Custom Stamped</span>
                    </div>
                  )}
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1.5 mb-1.5 text-xs text-[#8C5E68]">
                  <span className="text-[#DD6B80]">★★★★★</span>
                  <span className="font-medium text-[#2D1C20]">{journal.rating}</span>
                  <span className="text-[11px] text-[#A85E5E]">({journal.reviewsCount} reviews)</span>
                </div>

                {/* Journal Title */}
                <h3 
                  onClick={() => handleSelectProduct(journal)}
                  className="font-serif text-lg sm:text-xl text-[#2D1C20] font-medium leading-snug group-hover:text-[#DD6B80] transition line-clamp-1 cursor-pointer"
                >
                  {journal.name}
                </h3>

                {/* Short Subtitle */}
                <p className="text-xs text-[#7A4E57] font-sans mt-1 line-clamp-2 leading-relaxed">
                  {journal.tagline || journal.shortStory}
                </p>

                {/* Quick Craft Highlight Pills */}
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#F8D2DA]">
                  <span className="px-2 py-0.5 rounded-md bg-[#FFF0F4] border border-[#F7CCD6] text-[10px] text-[#8C3847] font-sans">
                    {journal.specs?.paper?.split('•')[0]?.trim() || 'Archival Paper'}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-[#FFF0F4] border border-[#F7CCD6] text-[10px] text-[#8C3847] font-sans">
                    180° Lay-Flat
                  </span>
                </div>
              </div>

              {/* Price & Action Section */}
              <div className="mt-4 pt-3 border-t border-[#F8D2DA] space-y-2">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#2D1C20]">
                      ₹{journal.price}
                    </span>
                    {journal.originalPrice && (
                      <span className="text-xs text-[#A87680] line-through">
                        ₹{journal.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-sans font-medium text-emerald-700 bg-[#EBF5EE] px-2 py-0.5 rounded-full border border-[#CDE5D4]">
                    In Stock
                  </span>
                </div>

                {/* Action CTA Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectProduct(journal);
                  }}
                  className="w-full py-2.5 sm:py-3 rounded-full bg-[#DD6B80] hover:bg-[#CC5A6F] text-white text-xs sm:text-sm font-medium tracking-wide transition shadow-xs hover:shadow-sm active:scale-98 flex items-center justify-center gap-1.5"
                >
                  <span>{journal.isPersonalized ? 'Personalize & Buy' : `Buy Now — ₹${journal.price}`}</span>
                  <span className="text-xs">♡</span>
                </button>

                {/* Direct Shopify Link if connected */}
                {isShopifyConnected() && (
                  <a
                    onClick={(e) => e.stopPropagation()}
                    href={generateShopifyCartPermalink({
                      quantity: 1,
                      tier: 'Single Journal Edition'
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-1.5 text-center text-[11px] font-sans text-[#8C3847] hover:text-[#2D1C20] transition block"
                  >
                    Buy via Shopify Checkout ↗
                  </a>
                )}
              </div>

            </div>
          );
        })}
      </div>

      {/* Bottom Subtle Scroll Hint */}
      <div className="mt-4 flex items-center justify-between text-xs text-[#8C5E68] font-sans px-1">
        <span className="flex items-center gap-1.5">
          <span>👈 Swipe horizontally to view all editions 👉</span>
        </span>
        <button
          onClick={() => onNavigate && onNavigate('products')}
          className="text-[#8C3847] hover:underline font-medium"
        >
          See full catalog & specs →
        </button>
      </div>

    </section>
  );
};

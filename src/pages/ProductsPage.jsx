import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { LAUNCH_PRINTS } from '../data/preorderData';
import { isShopifyConnected, generateShopifyCartPermalink } from '../services/shopify';

export const ProductsPage = ({ onNavigate }) => {
  const { setSelectedPrint, getPrintStats } = useCart();
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterCategories = [
    { id: 'all', label: 'All Editions (6)' },
    { id: 'personalized', label: 'Personalized Monogram' },
    { id: 'vintage', label: 'Vintage Lace & Keepsake' },
    { id: 'leather', label: 'Botanical Leather' },
    { id: 'illustrated', label: 'Cozy Farm & Planners' }
  ];

  const filteredJournals = LAUNCH_PRINTS.filter(journal => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'personalized') return journal.isPersonalized;
    if (selectedFilter === 'vintage') return journal.id.includes('vintage') || journal.id.includes('embroidered');
    if (selectedFilter === 'leather') return journal.id.includes('leather');
    if (selectedFilter === 'illustrated') return journal.id.includes('valley') || journal.id.includes('planner');
    return true;
  });

  const handleSelectJournal = (journal) => {
    if (setSelectedPrint) {
      setSelectedPrint(journal);
    }
    if (onNavigate) {
      onNavigate('product');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 animate-in fade-in duration-300">
      
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => onNavigate && onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-[#7A4E57] hover:text-[#2D1C20] transition"
        >
          <span>←</span>
          <span>Back to Home</span>
        </button>

        <span className="text-xs font-serif italic text-[#A85E68]">
          Batch 01 • Strictly 150 copies per edition
        </span>
      </div>

      {/* Page Header Card */}
      <div className="relative bg-[#FFF8F9] rounded-3xl border border-[#F6D5DC] p-6 sm:p-12 shadow-[0_8px_30px_rgba(242,175,188,0.12)] text-center max-w-4xl mx-auto mb-10">
        {/* Washi Tape Strip */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-48 h-5 bg-[#FADADD]/90 backdrop-blur-xs border border-dashed border-[#E8A5B2]/60 rounded-xs shadow-2xs rotate-0.5 z-10 flex items-center justify-center">
          <span className="text-[10px] font-hand text-[#A85E5E] tracking-wider">the complete autumn collection ♡</span>
        </div>

        <span className="text-xs font-medium tracking-widest uppercase text-[#DD6B80] font-sans block mb-2">
          Small-Batch Handcrafted Stationery
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D1C20] font-normal tracking-tight">
          Creative Journals & Notebooks
        </h1>
        <p className="text-xs sm:text-sm text-[#69464C] mt-3 font-sans max-w-2xl mx-auto leading-relaxed">
          Crafted specifically for crowded college desks, late-night tea rituals, and mindful slow journaling. Bound with 120–150 GSM bleedproof paper that never ghosts under fountain pens.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6 pt-4 border-t border-[#F8D2DA]">
          {filterCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-sans transition-all duration-150 ${
                selectedFilter === cat.id
                  ? 'bg-[#DD6B80] text-white font-medium shadow-xs'
                  : 'bg-white text-[#69464C] border border-[#F5CCD6] hover:bg-[#FFE8ED]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Catalog Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredJournals.map(journal => {
          const stats = getPrintStats ? getPrintStats(journal.name) : { remaining: journal.availableSets, isSoldOut: false };

          return (
            <div
              key={journal.id}
              className="bg-[#FFF9FA] rounded-3xl border border-[#F6D5DC] p-5 shadow-[0_6px_24px_rgba(240,165,180,0.1)] hover:shadow-[0_12px_32px_rgba(240,165,180,0.2)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo & Scarcity Badges */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#FDF0F3] border border-[#F7D5DC] mb-4">
                  <img
                    src={journal.editorialImage}
                    alt={journal.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#FFF5F7]/95 backdrop-blur-xs border border-[#F5CCD6] text-[10px] font-medium text-[#8C3847] shadow-2xs">
                    {journal.badge || 'Batch 01'}
                  </div>

                  {/* Stock count */}
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-sans font-medium bg-black/60 text-white backdrop-blur-xs">
                    {stats.isSoldOut ? 'Sold Out' : `${journal.availableSets} Copies Left`}
                  </div>

                  {/* Personalization Tag */}
                  {journal.isPersonalized && (
                    <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#FFE8ED]/95 backdrop-blur-xs border border-[#F5CCD6] text-[10px] font-medium text-[#9E2B42] flex items-center gap-1">
                      <span>🪡</span>
                      <span>Custom Stamped</span>
                    </div>
                  )}
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-1.5 mb-1.5 text-xs text-[#8C5E68]">
                  <span className="text-[#DD6B80]">★★★★★</span>
                  <span className="font-medium text-[#2D1C20]">{journal.rating}</span>
                  <span className="text-[11px] text-[#A85E5E]">({journal.reviewsCount} verified reviews)</span>
                </div>

                {/* Title */}
                <h2 className="font-serif text-xl text-[#2D1C20] font-medium leading-snug group-hover:text-[#C27878] transition line-clamp-1">
                  {journal.name}
                </h2>

                {/* Tagline */}
                <p className="text-xs text-[#7A4E57] font-sans mt-1 line-clamp-2 leading-relaxed">
                  {journal.tagline || journal.shortStory}
                </p>

                {/* Material & Paper Specs */}
                <div className="space-y-1.5 mt-3 pt-3 border-t border-[#F8D2DA] text-xs font-sans text-[#69464C]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#DD6B80]">✦</span>
                    <span className="line-clamp-1"><strong>Material:</strong> {journal.specs?.material?.split('with')[0]?.trim()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#DD6B80]">✦</span>
                    <span className="line-clamp-1"><strong>Paper:</strong> {journal.specs?.paper?.split('•')[0]?.trim()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#DD6B80]">✦</span>
                    <span><strong>Pages:</strong> {journal.specs?.pages?.split('(')[0]?.trim()}</span>
                  </div>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="mt-5 pt-3 border-t border-[#F8D2DA] space-y-2">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-2xl font-bold text-[#2D1C20]">
                      ₹{journal.price}
                    </span>
                    {journal.originalPrice && (
                      <span className="text-xs text-[#A87680] line-through">
                        ₹{journal.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-sans font-medium text-[#DD6B80] bg-[#FFE8EE] px-2.5 py-0.5 rounded-full border border-[#F5CCD6]">
                    ₹{journal.depositPrice} Deposit
                  </span>
                </div>

                <button
                  onClick={() => handleSelectJournal(journal)}
                  className="w-full py-3 rounded-full bg-[#DD6B80] hover:bg-[#CC5A6F] text-white text-xs sm:text-sm font-medium tracking-wide transition shadow-xs hover:shadow-sm active:scale-98 flex items-center justify-center gap-1.5"
                >
                  <span>{journal.isPersonalized ? 'Personalize & Pre-Order' : 'Select Edition & Order'}</span>
                  <span className="text-xs">♡</span>
                </button>

                {isShopifyConnected() && (
                  <a
                    href={generateShopifyCartPermalink({
                      quantity: 1,
                      tier: 'Single Journal Edition'
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-1 text-center text-[11px] font-sans text-[#8C3847] hover:text-[#2D1C20] transition block"
                  >
                    Buy via Shopify ↗
                  </a>
                )}
              </div>

            </div>
          );
        })}
      </div>

      {/* Craftsmanship Guarantee Box at bottom */}
      <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#FFF1F4] border border-[#FAD2DB] grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div className="space-y-1">
          <div className="text-lg font-serif font-medium text-[#2D1C20] flex items-center justify-center md:justify-start gap-2">
            <span>✒️</span>
            <span>Zero Ink Bleed</span>
          </div>
          <p className="text-xs text-[#69464C] font-sans leading-relaxed">
            120–150 GSM archival cotton & Daiei ivory paper tested rigorously with wet fountain pens, gouache, and calligraphy ink.
          </p>
        </div>

        <div className="space-y-1">
          <div className="text-lg font-serif font-medium text-[#2D1C20] flex items-center justify-center md:justify-start gap-2">
            <span>📖</span>
            <span>180° Lay-Flat Desk Spine</span>
          </div>
          <p className="text-xs text-[#69464C] font-sans leading-relaxed">
            Engineered to lay completely flat on small university desks without fighting the binding or requiring heavy paperweights.
          </p>
        </div>

        <div className="space-y-1">
          <div className="text-lg font-serif font-medium text-[#2D1C20] flex items-center justify-center md:justify-start gap-2">
            <span>💌</span>
            <span>100% Full Refund Guarantee</span>
          </div>
          <p className="text-xs text-[#69464C] font-sans leading-relaxed">
            If your university plans change or you decide to cancel before dispatch in October, receive a 100% unconditional full refund.
          </p>
        </div>
      </div>

    </div>
  );
};

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { LAUNCH_PRINTS, SIZES, TIERS, RULINGS } from '../data/preorderData';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { useCountdown } from '../hooks/useCountdown';
import { isShopifyConnected, generateShopifyCartPermalink } from '../services/shopify';

export const ProductPage = ({ onNavigate }) => {
  const {
    setSelectedPrint,
    setSelectedSize,
    setSelectedTier,
    setSelectedRuling,
    setPersonalization,
    selectedPrint,
    selectedSize,
    selectedTier,
    selectedRuling,
    personalization,
    isDepositOnly,
    setIsDepositOnly,
    basePrice,
    depositPrice,
    amountToPayNow,
    balanceDueLater,
    getPrintStats
  } = useCart();

  const timeLeft = useCountdown();

  const [selectedPrintId, setSelectedPrintId] = useState(() => {
    if (selectedPrint?.id) return selectedPrint.id;
    return LAUNCH_PRINTS[0].id;
  });
  const [selectedSizeId, setSelectedSizeId] = useState(selectedSize?.id || SIZES[0].id);
  const [selectedRulingId, setSelectedRulingId] = useState(selectedRuling?.id || RULINGS[0].id);
  const [selectedTierId, setSelectedTierId] = useState(selectedTier?.id || TIERS[0].id);
  const [customName, setCustomName] = useState(personalization || 'Eleanor');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Sync if selectedPrint in cart changes from external navigation
  React.useEffect(() => {
    if (selectedPrint?.id && selectedPrint.id !== selectedPrintId) {
      setSelectedPrintId(selectedPrint.id);
      setActiveImageIndex(0);
    }
  }, [selectedPrint?.id]);

  const currentJournal = LAUNCH_PRINTS.find(p => p.id === selectedPrintId) || LAUNCH_PRINTS[0];
  const currentSize = SIZES.find(s => s.id === selectedSizeId) || SIZES[0];
  const currentRuling = RULINGS.find(r => r.id === selectedRulingId) || RULINGS[0];
  const currentTier = TIERS.find(t => t.id === selectedTierId) || TIERS[0];

  const currentStats = getPrintStats 
    ? getPrintStats(currentJournal.name) 
    : { remaining: 150, isSoldOut: false, reserved: 0, capacity: 150 };

  const galleryImages = currentJournal.gallery || [
    {
      src: currentJournal.editorialImage,
      label: 'Journal Overview'
    }
  ];

  const safeActiveIndex = activeImageIndex >= galleryImages.length ? 0 : activeImageIndex;

  const handleJournalChange = (printId) => {
    setSelectedPrintId(printId);
    setActiveImageIndex(0);
    const chosen = LAUNCH_PRINTS.find(p => p.id === printId);
    if (chosen && setSelectedPrint) setSelectedPrint(chosen);
  };

  const handleSizeChange = (sId) => {
    setSelectedSizeId(sId);
    const chosen = SIZES.find(s => s.id === sId);
    if (chosen && setSelectedSize) setSelectedSize(chosen);
  };

  const handleRulingChange = (rId) => {
    setSelectedRulingId(rId);
    const chosen = RULINGS.find(r => r.id === rId);
    if (chosen && setSelectedRuling) setSelectedRuling(chosen);
  };

  const handleTierChange = (tId) => {
    setSelectedTierId(tId);
    const chosen = TIERS.find(t => t.id === tId);
    if (chosen && setSelectedTier) setSelectedTier(chosen);
  };

  const handleNameChange = (e) => {
    const val = e.target.value.slice(0, 16);
    setCustomName(val);
    if (setPersonalization) setPersonalization(val);
  };

  const handleReserveClick = () => {
    if (!timeLeft.isExpired) return; // Locked during pre-launch countdown
    if (currentStats.isSoldOut) return;
    if (setSelectedPrint) setSelectedPrint(currentJournal);
    if (setSelectedSize) setSelectedSize(currentSize);
    if (setSelectedRuling) setSelectedRuling(currentRuling);
    if (setSelectedTier) setSelectedTier(currentTier);
    if (setPersonalization) setPersonalization(customName);
    if (onNavigate) {
      onNavigate('checkout');
    }
  };

  return (
    <div className="w-full animate-in fade-in duration-300">
      
      {/* Top Navigation Ribbon */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-2">
        <button
          onClick={() => onNavigate && onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-stone-500 hover:text-[#221F1E] transition"
        >
          <span>←</span>
          <span>Back to Collection</span>
        </button>
      </div>

      {/* Main Product Card: Stacked Layout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="relative bg-[#FFF8F9] rounded-3xl border border-[#F6D5DC] p-6 sm:p-10 shadow-[0_8px_30px_rgba(242,175,188,0.15)]">
          {/* Scrapbook Washi Tape Tab */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 sm:w-44 h-5 bg-[#FADADD]/85 backdrop-blur-xs border border-dashed border-[#E5A8B4]/70 rounded-xs shadow-2xs rotate-0.5 pointer-events-none z-10" />
          
          {/* ================= SECTION 1: PRODUCT IMAGES (TOP) ================= */}
          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            
            {/* Featured Image Frame */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-stone-100 border border-[#F8D2DA] shadow-sm">
              <img
                src={galleryImages[safeActiveIndex].src}
                alt={currentJournal.name}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />

              {/* Photo Caption Pill */}
              <div className="absolute bottom-3.5 left-3.5 bg-[#FFF8F9]/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#F7D5DC] text-xs font-sans text-[#7E3846] shadow-xs z-20">
                {galleryImages[safeActiveIndex].label}
              </div>

              {/* Batch Remaining Badge (Strict 150 Limit) */}
              <div className={`absolute top-3.5 right-3.5 backdrop-blur-md px-3 py-1 rounded-full text-xs font-sans tracking-wide z-20 ${
                currentStats.isSoldOut ? 'bg-rose-950/95 font-semibold text-rose-100 shadow-sm' : 'bg-[#7A2A38]/85 text-white'
              }`}>
                {currentStats.isSoldOut
                  ? 'Out of Stock'
                  : !timeLeft.isExpired
                    ? 'Drops Sept 9th'
                    : `${currentJournal.availableSets} copies remaining`}
              </div>

              {/* Out of Stock Photo Overlay */}
              {currentStats.isSoldOut && (
                <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 text-center z-10">
                  <span className="px-5 py-2 rounded-full bg-rose-950 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase border border-rose-800 shadow-md">
                    Out of Stock
                  </span>
                  <span className="text-[11px] text-white/90 font-sans mt-1.5 font-medium">
                    Batch 01 allocation full (150/150 reserved)
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnails Row */}
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 sm:gap-2.5">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-all duration-150 bg-stone-50 ${
                    safeActiveIndex === idx 
                      ? 'border-[#DD6B80] ring-1 ring-[#DD6B80] shadow-xs' 
                      : 'border-[#F8D2DA] hover:border-[#E8B2BD] opacity-85 hover:opacity-100'
                  }`}
                >
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

          </div>

          {/* ================= SECTION 2: PRODUCT DETAILS ================= */}
          <div className="max-w-3xl mx-auto mt-8 sm:mt-10 pt-8 border-t border-[#F8D2DA] space-y-6">
            
            {/* Header Details */}
            <div>
              {/* Reviews rating pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF1F4] border border-[#FAD2DB] text-xs text-[#7E3846] mb-3 font-sans">
                <span className="text-amber-500 text-xs">★★★★★</span>
                <span className="font-semibold text-[#2D1C20]">{currentJournal.rating}</span>
                <span className="text-[#8C5E68]">• {currentJournal.reviewsCount} verified student reviews ♡</span>
              </div>

              {/* Product Title */}
              <h1 className="font-serif text-3xl sm:text-4xl text-[#2D1C20] font-normal leading-tight tracking-tight">
                {currentJournal.name}
              </h1>

              {/* Subtitle & Story */}
              <p className="text-sm sm:text-base font-serif italic text-[#8C5E68] mt-1">
                {currentJournal.tagline}
              </p>
              <p className="text-xs sm:text-sm text-[#69464C] mt-2 leading-relaxed font-sans">
                {currentJournal.shortStory}
              </p>
            </div>

            {/* Pre-Order Pricing Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div>
                <span className="text-[11px] text-[#8C5E68] block uppercase tracking-wider font-sans font-medium">
                  Pre-Order Reservation Deposit
                </span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-[#DD6B80]">
                    ₹{depositPrice}
                  </span>
                  <span className="text-xs text-[#8C5E68] font-sans">to reserve today</span>
                </div>
                <div className="text-xs text-[#69464C] mt-1 font-sans">
                  Total Journal Value: <strong className="text-[#2D1C20]">₹{basePrice}</strong> 
                  <span className="text-stone-400 line-through ml-1.5">₹{currentJournal.originalPrice}</span>
                </div>
              </div>

              <div className="w-full sm:w-auto p-3 sm:p-3.5 rounded-xl bg-[#FFE8EE] border border-[#F5CCD6] text-left sm:text-right text-xs font-sans text-[#7A2A38] space-y-0.5 sm:space-y-1">
                <div className="font-medium">Remaining Balance: ₹{balanceDueLater}</div>
                <div className="text-[11px] text-[#8C5E68]">Due upon campus dispatch in October 2026</div>
              </div>
            </div>

            {/* Craftsmanship & Material Highlights */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF5F7] border border-[#FAD2DB] text-xs text-[#69464C]">
              <div className="font-medium text-[#7E3846] tracking-wide uppercase text-[11px] mb-3 font-sans flex items-center justify-between">
                <span>Artisanal Stationery Highlights:</span>
                <span className="font-hand text-sm text-[#B05063] normal-case">120–150 GSM archival paper ♡</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#FFF0F3] border border-[#F8CCD6]">
                  <strong className="text-[#2D1C20] block font-medium">Zero Ink Bleed</strong>
                  <span className="text-[#8C5E68] text-[11px]">Tested with wet fountain pens</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F3F8F3] border border-[#D6E6D6]">
                  <strong className="text-[#2D1C20] block font-medium">180° Lay-Flat Binding</strong>
                  <span className="text-[#4E624E] text-[11px]">Comfortable on tiny dorm desks</span>
                </div>
                <div className="p-3 rounded-xl bg-[#FFF9EE] border border-[#F5E5C0]">
                  <strong className="text-[#2D1C20] block font-medium">Bespoke Personalization</strong>
                  <span className="text-[#6C5632] text-[11px]">Hand-embroidered & Katakana foil</span>
                </div>
              </div>
            </div>

            {/* Configuration Selectors */}
            <div className="space-y-5">
              
              {/* 1. Choose Journal Edition */}
              <div className="space-y-2">
                <div className="text-xs font-medium text-[#2D1C20] flex items-center justify-between font-sans">
                  <span>1. Select Journal Edition:</span>
                  <span className="text-[#8C5E68] text-xs">{currentJournal.paletteName}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {LAUNCH_PRINTS.map(p => {
                    const pStats = getPrintStats ? getPrintStats(p.name) : { remaining: 150, isSoldOut: false };
                    return (
                      <button
                        key={p.id}
                        onClick={() => handleJournalChange(p.id)}
                        className={`p-3 rounded-2xl border text-left transition flex items-center justify-between ${
                          selectedPrintId === p.id 
                            ? 'border-[#DD6B80] bg-[#FFE8EE] font-medium text-[#9E2B42] shadow-xs ring-1 ring-[#DD6B80]/40' 
                            : 'border-[#F3CCD5] bg-[#FFFBFC] text-[#69464C] hover:border-[#E8B2BD] hover:bg-[#FFF0F4]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <img src={p.editorialImage} alt={p.name} className="w-7 h-7 rounded-lg object-cover shrink-0 border border-[#F6D5DC]" />
                          <div className="flex flex-col">
                            <span className="text-xs font-medium line-clamp-1">{p.name}</span>
                            <span className="text-[10px] text-[#8C5E68]">₹{p.price}</span>
                          </div>
                        </div>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-sans shrink-0 ${
                          pStats.isSoldOut 
                            ? 'bg-rose-100 text-rose-800 font-semibold border border-rose-300' 
                            : 'bg-white/80 text-[#8C3847] border border-[#F5CCD6]'
                        }`}>
                          {p.badge || 'Batch 01'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Bespoke Personalization Input (if applicable) */}
              {currentJournal.isPersonalized && (
                <div className="p-4 rounded-2xl bg-[#FFF2F5] border border-[#F7CCD6] space-y-2">
                  <div className="flex items-center justify-between text-xs font-sans">
                    <span className="font-medium text-[#2D1C20] flex items-center gap-1.5">
                      <span>🪡</span>
                      <span>{currentJournal.personalizationLabel || 'Custom Name Personalization:'}</span>
                    </span>
                    <span className="text-[11px] text-[#A85E5E] font-hand">included in edition ♡</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      value={customName}
                      onChange={handleNameChange}
                      placeholder="e.g. Eleanor"
                      className="flex-1 px-4 py-2.5 rounded-xl bg-white border border-[#F5CCD6] text-xs sm:text-sm font-serif text-[#2D1C20] focus:outline-none focus:border-[#DD6B80] focus:ring-1 focus:ring-[#DD6B80]"
                      maxLength={16}
                    />
                    <div className="px-3 py-2 rounded-xl bg-white/80 border border-[#F5CCD6] text-xs font-hand text-[#8C3847] shrink-0">
                      Preview: “{customName || 'Your Name'}”
                    </div>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-[#8C5E68] font-sans">
                    {currentJournal.id.includes('katakana') 
                      ? 'Our linguistic team will convert your name into authentic Japanese Katakana before hot-stamping in rose-gold foil.' 
                      : 'Hand-embroidered in cursive dusty rose thread across your journal cover.'}
                  </p>
                </div>
              )}

              {/* 3. Choose Format / Size */}
              <div className="space-y-2">
                <div className="text-xs font-medium text-[#2D1C20] flex items-center justify-between font-sans">
                  <span>2. Format & Size:</span>
                  <span className="text-[#8C5E68] text-xs">{currentSize.dimensions}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {SIZES.map(s => (
                    <button
                      key={s.id}
                      onClick={() => handleSizeChange(s.id)}
                      className={`p-3 rounded-2xl border text-left text-xs transition ${
                        selectedSizeId === s.id 
                          ? 'border-[#DD6B80] bg-[#FFE8EE] font-medium text-[#9E2B42] shadow-xs ring-1 ring-[#DD6B80]/40' 
                          : 'border-[#F3CCD5] bg-[#FFFBFC] text-[#69464C] hover:border-[#E8B2BD] hover:bg-[#FFF0F4]'
                      }`}
                    >
                      <div className="font-serif text-xs sm:text-sm">{s.name}</div>
                      <div className="text-[10px] text-[#8C5E68] mt-0.5">{s.dimensions}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Choose Paper Ruling */}
              <div className="space-y-2">
                <div className="text-xs font-medium text-[#2D1C20] flex items-center justify-between font-sans">
                  <span>3. Paper Ruling Style:</span>
                  <span className="text-[#8C5E68] text-xs">{currentRuling.name}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {RULINGS.map(r => (
                    <button
                      key={r.id}
                      onClick={() => handleRulingChange(r.id)}
                      className={`p-3 rounded-2xl border text-left text-xs transition ${
                        selectedRulingId === r.id 
                          ? 'border-[#DD6B80] bg-[#FFE8EE] font-medium text-[#9E2B42] shadow-xs ring-1 ring-[#DD6B80]/40' 
                          : 'border-[#F3CCD5] bg-[#FFFBFC] text-[#69464C] hover:border-[#E8B2BD] hover:bg-[#FFF0F4]'
                      }`}
                    >
                      <div className="font-serif text-xs sm:text-sm">{r.name}</div>
                      <div className="text-[10px] text-[#8C5E68] mt-0.5 line-clamp-1">{r.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 5. Bundle Tier Selection */}
              <div className="space-y-2">
                <div className="text-xs font-medium text-[#2D1C20] flex items-center justify-between font-sans">
                  <span>4. Choose Bundle:</span>
                  <span className="text-[#8C5E68] text-xs">{currentTier.name}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {TIERS.map(t => (
                    <button
                      key={t.id}
                      onClick={() => handleTierChange(t.id)}
                      className={`p-3 rounded-2xl border text-left text-xs transition flex flex-col justify-between ${
                        selectedTierId === t.id 
                          ? 'border-[#DD6B80] bg-[#FFE8EE] font-medium text-[#9E2B42] shadow-xs ring-1 ring-[#DD6B80]/40' 
                          : 'border-[#F3CCD5] bg-[#FFFBFC] text-[#69464C] hover:border-[#E8B2BD] hover:bg-[#FFF0F4]'
                      }`}
                    >
                      <div>
                        <div className="font-serif text-xs sm:text-sm">{t.name}</div>
                        <div className="text-[10px] text-[#8C5E68] mt-0.5">{t.subtitle}</div>
                      </div>
                      <div className="text-[11px] font-semibold text-[#DD6B80] mt-2">
                        {t.id === 'single-journal' ? 'Standard' : t.id === 'writer-bundle' ? '+₹300' : '+₹700'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Inclusions List */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB] space-y-2 text-xs text-[#69464C]">
              <div className="font-medium text-[#7E3846] tracking-wide uppercase text-[11px] font-sans">
                What Arrives in Your Package:
              </div>
              {currentJournal.thoughtfulDetails.map((det, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="text-[#C27878] shrink-0">{det.icon}</span>
                  <div>
                    <strong className="text-[#2D1C20] font-medium">{det.title}: </strong>
                    <span>{det.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Primary Action Button */}
            <div className="pt-4 border-t border-[#F8D2DA] space-y-2.5">
              {currentStats.isSoldOut ? (
                <button
                  disabled
                  className="w-full py-4 rounded-full bg-[#F3CCD5] text-[#8C5E68] border border-[#E8B2BD] text-xs sm:text-sm font-medium tracking-wide cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <span>Batch 01 Sold Out</span>
                  <span>🔒</span>
                </button>
              ) : !timeLeft.isExpired ? (
                <button
                  onClick={handleReserveClick}
                  className="w-full py-4 rounded-full bg-[#DD6B80] hover:bg-[#CC5A6F] text-white text-xs sm:text-sm font-medium tracking-wide transition shadow-[0_4px_18px_rgba(221,107,128,0.35)] hover:shadow-[0_6px_25px_rgba(221,107,128,0.45)] hover:-translate-y-0.5 active:scale-98 flex items-center justify-center gap-2"
                >
                  <span>Pre-Orders Unlock September 9th, 8:00 PM</span>
                  <span className="text-xs">⏰</span>
                </button>
              ) : (
                <>
                  <button
                    onClick={handleReserveClick}
                    className="w-full py-4 rounded-full bg-[#DD6B80] hover:bg-[#CC5A6F] text-white text-xs sm:text-sm font-medium tracking-wide transition shadow-[0_4px_18px_rgba(221,107,128,0.35)] hover:shadow-[0_6px_25px_rgba(221,107,128,0.45)] hover:-translate-y-0.5 active:scale-98 flex items-center justify-center gap-2"
                  >
                    <span>Reserve with ₹{depositPrice} Deposit</span>
                    <span className="text-xs">♡</span>
                  </button>

                  {isShopifyConnected() && (
                    <a
                      href={generateShopifyCartPermalink({
                        quantity: 1,
                        personalization: customName,
                        size: currentSize.name,
                        ruling: currentRuling.name,
                        tier: currentTier.name
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-full bg-[#FFF0F4] hover:bg-[#FFE0E8] text-[#8C3847] border border-[#F5CCD6] text-xs sm:text-sm font-medium tracking-wide transition flex items-center justify-center gap-2"
                    >
                      <span>Buy via Shopify Checkout</span>
                      <span className="text-xs">🛍️</span>
                    </a>
                  )}
                </>
              )}
              <p className="text-center text-[11px] text-[#8C5E68] mt-2 font-sans">
                100% unconditional refund anytime before dispatch • Free campus shipping
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Testimonials */}
      <TestimonialsSection />

    </div>
  );
};

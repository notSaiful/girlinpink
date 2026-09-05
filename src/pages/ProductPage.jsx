import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { LAUNCH_PRINTS, SIZES, TIERS } from '../data/preorderData';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { useCountdown } from '../hooks/useCountdown';

export const ProductPage = ({ onNavigate }) => {
  const { setSelectedPrint, setSelectedSize, setSelectedTier, selectedPrint, getPrintStats } = useCart();
  const timeLeft = useCountdown();

  const [selectedPrintId, setSelectedPrintId] = useState(() => {
    if (selectedPrint?.id) return selectedPrint.id;
    if (typeof window !== 'undefined' && window.location.hash.includes('sky-blue')) {
      return 'sky-blue-gingham';
    }
    return 'french-rose-gingham';
  });
  const [selectedSizeId, setSelectedSizeId] = useState('hostel-single');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Sync if selectedPrint in cart changes from external navigation
  React.useEffect(() => {
    if (selectedPrint?.id && selectedPrint.id !== selectedPrintId) {
      setSelectedPrintId(selectedPrint.id);
      setActiveImageIndex(0);
    } else if (typeof window !== 'undefined' && window.location.hash.includes('sky-blue') && selectedPrintId !== 'sky-blue-gingham') {
      setSelectedPrintId('sky-blue-gingham');
      setActiveImageIndex(0);
    }
  }, [selectedPrint?.id]);

  const currentPrint = LAUNCH_PRINTS.find(p => p.id === selectedPrintId) || LAUNCH_PRINTS[0];
  const currentSize = SIZES.find(s => s.id === selectedSizeId) || SIZES[0];
  const currentTier = TIERS[0]; // Strictly Complete Bedding Kit

  const currentStats = getPrintStats 
    ? getPrintStats(currentPrint.name) 
    : { remaining: 150, isSoldOut: false, reserved: 0, capacity: 150 };

  const basePrice = Math.round(currentTier.price * currentSize.multiplier);
  const depositPrice = Math.round(currentTier.depositPrice * currentSize.multiplier);
  const balanceDueLater = basePrice - depositPrice;

  const galleryImages = currentPrint.gallery || [
    {
      src: currentPrint.editorialImage || '/products/french_rose_bed.jpg',
      label: 'Bed Overview'
    }
  ];

  const safeActiveIndex = activeImageIndex >= galleryImages.length ? 0 : activeImageIndex;

  const handlePrintChange = (printId) => {
    setSelectedPrintId(printId);
    setActiveImageIndex(0);
  };

  const handleReserveClick = () => {
    if (!timeLeft.isExpired) return; // Strictly locked until September 9th launch
    if (currentStats.isSoldOut) return;
    if (setSelectedPrint) setSelectedPrint(currentPrint);
    if (setSelectedSize) setSelectedSize(currentSize);
    if (setSelectedTier) setSelectedTier(currentTier);
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
      </div>      {/* Main Product Card: Stacked Layout (Images on Top, Details Below) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="relative bg-[#FFF8F9] rounded-3xl border border-[#F6D5DC] p-6 sm:p-10 shadow-[0_8px_30px_rgba(242,175,188,0.15)]">
          {/* Scrapbook Washi Tape Tab */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 sm:w-44 h-5 bg-[#FADADD]/85 backdrop-blur-xs border border-dashed border-[#E5A8B4]/70 rounded-xs shadow-2xs rotate-0.5 pointer-events-none z-10" />
          
          {/* ================= SECTION 1: PRODUCT IMAGES (TOP) ================= */}
          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            
            {/* Featured Image Frame */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-stone-100 border border-[#F8D2DA] shadow-sm">
              <img
                src={galleryImages[safeActiveIndex].src}
                alt={currentPrint.name}
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
                    : 'Only a few sets left'}
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
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 sm:gap-2.5">
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

          {/* ================= SECTION 2: PRODUCT DETAILS (BELOW IMAGES) ================= */}
          <div className="max-w-3xl mx-auto mt-8 sm:mt-10 pt-8 border-t border-[#F8D2DA] space-y-6">
            
            {/* Header Details */}
            <div>
              {/* Reviews rating pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF1F4] border border-[#FAD2DB] text-xs text-[#7E3846] mb-3 font-sans">
                <span className="text-amber-500 text-xs">★★★★★</span>
                <span className="font-semibold text-[#2D1C20]">4.95</span>
                <span className="text-[#8C5E68]">• 42 student reviews ♡</span>
              </div>

              {/* Product Title */}
              <h1 className="font-serif text-3xl sm:text-4xl text-[#2D1C20] font-normal leading-tight tracking-tight">
                {currentPrint.name}
              </h1>

              {/* Subtitle & Story */}
              <p className="text-sm sm:text-base font-serif italic text-[#8C5E68] mt-1">
                {currentPrint.tagline}
              </p>
              <p className="text-xs sm:text-sm text-[#69464C] mt-2 leading-relaxed font-sans">
                {currentPrint.shortStory}
              </p>
            </div>

            {/* Pre-Order Pricing Card */}
            <div className="p-5 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
                  Total Kit Value: <strong className="text-[#2D1C20]">₹{basePrice}</strong> 
                  <span className="text-stone-400 line-through ml-1.5">₹2,499</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FFE8EE] border border-[#F5CCD6] text-left sm:text-right text-xs font-sans text-[#7A2A38] space-y-1">
                <div className="font-medium">Remaining Balance: ₹{balanceDueLater}</div>
                <div className="text-[11px] text-[#8C5E68]">Due upon campus dispatch in October 2026</div>
              </div>
            </div>

            {/* Craftsmanship & Material Highlights: Scrapbook Notes */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF5F7] border border-[#FAD2DB] text-xs text-[#69464C]">
              <div className="font-medium text-[#7E3846] tracking-wide uppercase text-[11px] mb-3 font-sans flex items-center justify-between">
                <span>Craftsmanship & Material Highlights:</span>
                <span className="font-hand text-sm text-[#B05063] normal-case">100% long-staple cotton ♡</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#FFF0F3] border border-[#F8CCD6]">
                  <strong className="text-[#2D1C20] block font-medium">Marshmallow Soft</strong>
                  <span className="text-[#8C5E68] text-[11px]">Double enzyme pre-washed cotton</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F3F8F3] border border-[#D6E6D6]">
                  <strong className="text-[#2D1C20] block font-medium">360° Snug Cot Fit</strong>
                  <span className="text-[#4E624E] text-[11px]">Continuous elastic perimeter</span>
                </div>
                <div className="p-3 rounded-xl bg-[#FFF9EE] border border-[#F5E5C0]">
                  <strong className="text-[#2D1C20] block font-medium">100% Washed Percale</strong>
                  <span className="text-[#6C5632] text-[11px]">Pure, breathable natural fiber</span>
                </div>
              </div>
            </div>

            {/* Configuration Selectors */}
            <div className="space-y-4">
              
              {/* 1. Print Selection */}
              <div className="space-y-2">
                <div className="text-xs font-medium text-[#2D1C20] flex items-center justify-between font-sans">
                  <span>1. Choose Print:</span>
                  <span className="text-[#8C5E68] text-xs">{currentPrint.paletteName}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {LAUNCH_PRINTS.map(p => {
                    const pStats = getPrintStats ? getPrintStats(p.name) : { remaining: 150, isSoldOut: false };
                    return (
                      <button
                        key={p.id}
                        onClick={() => handlePrintChange(p.id)}
                        className={`p-3 rounded-2xl border text-left transition flex items-center justify-between ${
                          selectedPrintId === p.id 
                            ? 'border-[#DD6B80] bg-[#FFE8EE] font-medium text-[#9E2B42] shadow-xs ring-1 ring-[#DD6B80]/40' 
                            : 'border-[#F3CCD5] bg-[#FFFBFC] text-[#69464C] hover:border-[#E8B2BD] hover:bg-[#FFF0F4]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span 
                            className="w-3.5 h-3.5 rounded-full border border-stone-300 shrink-0" 
                            style={{ backgroundColor: p.checkColor }}
                          />
                          <span className="text-xs font-medium">{p.name.replace('The ', '')}</span>
                        </div>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-sans ${
                          pStats.isSoldOut 
                            ? 'bg-rose-100 text-rose-800 font-semibold border border-rose-300' 
                            : 'bg-white/80 text-[#8C3847] border border-[#F5CCD6]'
                        }`}>
                          {pStats.isSoldOut 
                            ? 'Out of Stock' 
                            : !timeLeft.isExpired 
                              ? 'Sept 9th' 
                              : 'A few left'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Cot Size Selection */}
              <div className="space-y-2">
                <div className="text-xs font-medium text-[#2D1C20] flex items-center justify-between font-sans">
                  <span>2. Cot Size:</span>
                  <span className="text-[#8C5E68] text-xs">{currentSize.dimensions} • {currentSize.depth}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {SIZES.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedSizeId(s.id)}
                      className={`p-3 rounded-2xl border text-left sm:text-center text-xs transition ${
                        selectedSizeId === s.id 
                          ? 'border-[#DD6B80] bg-[#FFE8EE] font-medium text-[#9E2B42] shadow-xs ring-1 ring-[#DD6B80]/40' 
                          : 'border-[#F3CCD5] bg-[#FFFBFC] text-[#69464C] hover:border-[#E8B2BD] hover:bg-[#FFF0F4]'
                      }`}
                    >
                      <div className="font-medium truncate">{s.name.replace('Hostel ', '')}</div>
                      <div className="text-[10px] text-[#8C5E68] mt-0.5">{s.dimensions}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Inclusions Checklist - The Complete Kit */}
            <div className="p-5 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB] space-y-2.5 text-xs text-[#69464C]">
              <div className="font-medium text-[#7E3846] tracking-wide uppercase text-[11px] font-sans flex items-center justify-between">
                <span>What Arrives in Your Complete Kit:</span>
                <span className="text-[#8C3847] bg-[#FFE8ED] px-2.5 py-0.5 rounded-full border border-[#F5CCD6] normal-case text-[11px] font-medium">
                  Full 4-Piece Set + Tote
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-sans">
                {currentTier.includes.map((inc, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C27878] mt-1.5 shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* September 9th Pre-Orders Launch Countdown Banner */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB] text-xs font-sans text-[#7E3846]">
              <div className="flex items-center gap-2 font-medium">
                <span className="text-sm">⏰</span>
                <span>Pre-Orders Open September 9th, 8:00 PM:</span>
              </div>
              <div className="font-mono font-semibold text-[#9E2B42] bg-white px-3 py-1 rounded-lg border border-[#F5CCD6] shadow-2xs">
                {timeLeft.isExpired ? 'Pre-Orders Live!' : timeLeft.formatted}
              </div>
            </div>

            {/* Primary Call to Action Button - Pre-Launch Mode */}
            <div className="pt-2 space-y-3">
              {currentStats.isSoldOut ? (
                <button
                  disabled
                  className="w-full py-4 rounded-full bg-[#F3CCD5] text-[#8C5E68] font-medium text-sm tracking-wide cursor-not-allowed flex items-center justify-center gap-2 border border-[#E8B2BD]"
                >
                  <span>Out of Stock (150/150 Reserved) 🔒</span>
                </button>
              ) : !timeLeft.isExpired ? (
                <div className="space-y-3">
                  <button
                    disabled
                    className="w-full py-4 rounded-full bg-[#F6CCD5] text-[#8C3847] font-medium text-sm tracking-wide cursor-not-allowed flex items-center justify-center gap-2 border border-[#EAA8B6] shadow-2xs"
                  >
                    <span>Pre-Orders Open September 9th, 8 PM 🔒</span>
                  </button>

                  <div className="p-4 rounded-2xl bg-[#FFF5F7] border border-[#FAD2DB] text-center space-y-1.5">
                    <div className="text-xs font-serif font-medium text-[#7E3846]">
                      Batch 01 Pre-Launch in Progress ♡
                    </div>
                    <p className="text-[11px] font-sans text-[#8C5E68]">
                      Orders strictly unlock on September 9th at 8:00 PM IST. Strictly capped at 150 allocations per print.
                    </p>
                  </div>
                </div>
              ) : (
                <button
                  onClick={handleReserveClick}
                  className="w-full py-4 rounded-full bg-[#DD6B80] hover:bg-[#CC5A6F] text-white font-medium text-sm tracking-wide transition-all duration-200 shadow-[0_4px_16px_rgba(221,107,128,0.35)] hover:shadow-[0_6px_22px_rgba(221,107,128,0.45)] hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Reserve Pre-Order — ₹{depositPrice} Deposit</span>
                  <span className="text-xs">♡</span>
                </button>
              )}

              <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-[#8C5E68] text-center font-sans">
                {currentStats.isSoldOut ? (
                  <span className="text-[#B05063] font-medium">This edition is currently out of stock. Please choose another edition above.</span>
                ) : !timeLeft.isExpired ? (
                  <span className="text-[#8C3847] font-medium">Pre-orders unlock September 9th at 8 PM • 100% Refund Guarantee</span>
                ) : (
                  <>
                    <span>100% Refund Guarantee</span>
                    <span>•</span>
                    <span>Free Campus Dispatch</span>
                    <span>•</span>
                    <span>Secured by Razorpay</span>
                  </>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Specifications & Craftsmanship Section: Scrapbook Treatment */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="relative bg-[#FFF8F9] rounded-3xl border border-[#F6D5DC] p-6 sm:p-10 shadow-[0_8px_30px_rgba(242,175,188,0.15)]">
          {/* Washi Tape Strip */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-36 sm:w-48 h-5 bg-[#FADADD]/85 backdrop-blur-xs border border-dashed border-[#E5A8B4]/70 rounded-xs shadow-2xs rotate-0.5 pointer-events-none" />

          {/* Section Heading */}
          <div className="max-w-xl mx-auto text-center mb-8 sm:mb-10">
            <span className="font-hand text-xl text-[#B05063] block mb-1">
              thoughtfully crafted for dorm rooms ♡
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2D1C20] font-normal tracking-tight">
              Thoughtfully Engineered for Student Rooms
            </h2>
            <p className="text-sm text-[#69464C] mt-1 font-sans">
              Practical construction details tailored for standard single cots.
            </p>
          </div>

          {/* 4 Thoughtful Construction Details Grid: Pastel Washi Polaroids */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-8">
            {/* Card 1: Rose */}
            <div className="relative p-5 rounded-2xl bg-[#FFF8F9] border border-[#F6D5DC] -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xs">
              <div className="absolute -top-2.5 left-6 w-20 h-4 bg-[#FADADD]/80 border border-dashed border-[#E5A8B4]/60 rounded-xs -rotate-2" />
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-[#C27878] font-serif">{currentPrint.thoughtfulDetails?.[0]?.icon || '✦'}</span>
                <h3 className="font-serif text-base font-normal text-[#2D1C20]">
                  {currentPrint.thoughtfulDetails?.[0]?.title || 'Four Interior Corner Ties'}
                </h3>
              </div>
              <p className="text-xs text-[#69464C] leading-relaxed font-sans">
                {currentPrint.thoughtfulDetails?.[0]?.desc || 'Secures your duvet or blanket in place throughout the night without shifting.'}
              </p>
            </div>

            {/* Card 2: Sage */}
            <div className="relative p-5 rounded-2xl bg-[#F3F8F3] border border-[#D6E6D6] rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xs">
              <div className="absolute -top-2.5 right-6 w-20 h-4 bg-[#E2EFE2]/85 border border-dashed border-[#A8C8A8]/60 rounded-xs rotate-2" />
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-[#4E7A4E] font-serif">{currentPrint.thoughtfulDetails?.[1]?.icon || '✦'}</span>
                <h3 className="font-serif text-base font-normal text-[#2D1C20]">
                  {currentPrint.thoughtfulDetails?.[1]?.title || 'Concealed Zip Closure'}
                </h3>
              </div>
              <p className="text-xs text-[#4E624E] leading-relaxed font-sans">
                {currentPrint.thoughtfulDetails?.[1]?.desc || 'Tucked beneath a seamless fabric fold to keep hardware hidden and quiet.'}
              </p>
            </div>

            {/* Card 3: Butter */}
            <div className="relative p-5 rounded-2xl bg-[#FFF9EE] border border-[#F5E5C0] -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xs">
              <div className="absolute -top-2.5 left-6 w-20 h-4 bg-[#FFF2D6]/85 border border-dashed border-[#ECD39E]/60 rounded-xs -rotate-2" />
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-[#B58532] font-serif">{currentPrint.thoughtfulDetails?.[2]?.icon || '✦'}</span>
                <h3 className="font-serif text-base font-normal text-[#2D1C20]">
                  {currentPrint.thoughtfulDetails?.[2]?.title || 'Envelope Pillowcases'}
                </h3>
              </div>
              <p className="text-xs text-[#6C5632] leading-relaxed font-sans">
                {currentPrint.thoughtfulDetails?.[2]?.desc || 'Clean overlapping back fold eliminates exposed zippers and metal edges.'}
              </p>
            </div>

            {/* Card 4: Sky Blue */}
            <div className="relative p-5 rounded-2xl bg-[#F2F7FB] border border-[#CFDEE7] rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xs">
              <div className="absolute -top-2.5 right-6 w-20 h-4 bg-[#DDEBF5]/85 border border-dashed border-[#B0C8D8]/60 rounded-xs rotate-2" />
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-[#3A6B88] font-serif">{currentPrint.thoughtfulDetails?.[3]?.icon || '✦'}</span>
                <h3 className="font-serif text-base font-normal text-[#2D1C20]">
                  {currentPrint.thoughtfulDetails?.[3]?.title || '360° Snug Cot Elastic'}
                </h3>
              </div>
              <p className="text-xs text-[#476070] leading-relaxed font-sans">
                {currentPrint.thoughtfulDetails?.[3]?.desc || '12-inch continuous pocket depth locks onto single mattresses with zero untucking.'}
              </p>
            </div>
          </div>

          {/* Care Guidelines Scrapbook Banner */}
          <div className="relative p-5 rounded-2xl bg-[#F3F8F3] border border-[#D6E6D6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="absolute -top-2.5 left-8 w-24 h-4 bg-[#E2EFE2]/85 border border-dashed border-[#A8C8A8]/60 rounded-xs -rotate-1" />
            <div>
              <div className="font-serif text-base font-medium text-[#2E422E]">
                Student Laundry Guidelines
              </div>
              <div className="font-hand text-lg text-[#3B663B] mt-0.5">
                cold machine wash • washes softer with every cycle • zero ironing needed 🧺☁️
              </div>
            </div>
            <div className="inline-flex items-center text-xs text-[#2E422E] bg-white/90 px-3.5 py-1.5 rounded-full border border-[#D6E6D6] shrink-0 font-sans shadow-2xs">
              Double Enzyme Pre-Washed ♡
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

    </div>
  );
};

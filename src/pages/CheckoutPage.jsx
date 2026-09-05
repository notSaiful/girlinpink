import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useCountdown } from '../hooks/useCountdown';
import { savePreOrder } from '../lib/supabase';

export const CheckoutPage = ({ onNavigate }) => {
  const {
    selectedPrint,
    selectedSize,
    selectedTier,
    isDepositOnly,
    setIsDepositOnly,
    basePrice,
    depositPrice,
    amountToPayNow,
    balanceDueLater,
    meta,
    setConfirmedOrder,
    getPrintStats,
    refreshCounts,
    MAX_CAPACITY_PER_SET
  } = useCart();

  const timeLeft = useCountdown();

  const printStats = getPrintStats 
    ? getPrintStats(selectedPrint?.name) 
    : { reserved: 0, remaining: 150, isSoldOut: false };

  const [step, setStep] = useState('checkout'); // 'checkout' | 'processing' | 'confirmed'
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    college: '',
    hostel: '',
    city: '',
    pincode: ''
  });
  const [orderReceipt, setOrderReceipt] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePay = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!timeLeft.isExpired) {
      setErrorMessage('Pre-orders are currently locked during pre-launch. Checkout will officially open on September 9th.');
      return;
    }

    if (printStats.isSoldOut) {
      setErrorMessage(`Batch 01 pre-order allocation for ${selectedPrint?.name || 'this edition'} is full (150/150 reserved). Please select another set.`);
      return;
    }

    setStep('processing');

    const receipt = {
      orderId: `GP-${Math.floor(1000 + Math.random() * 9000)}`,
      print: selectedPrint?.name || 'The French Rose Gingham',
      tier: selectedTier?.name || 'The Complete Bedding Kit',
      size: selectedSize?.name || 'Hostel Single Cot',
      dimensions: selectedSize?.dimensions || '36" × 75"',
      amountPaid: amountToPayNow,
      balanceDue: balanceDueLater,
      customer: formData,
      deliveryWindow: 'October 05 – October 12, 2026',
      allocationNumber: (printStats.reserved || 0) + 1
    };

    // Save pre-order to Supabase (and local backup) with 150 capacity limit enforcement
    try {
      const res = await savePreOrder(receipt);
      if (res && res.capacityReached) {
        setErrorMessage(res.error || `Batch 01 pre-order limit of 150 sets has been reached.`);
        setStep('checkout');
        if (refreshCounts) await refreshCounts();
        return;
      }
      if (refreshCounts) {
        await refreshCounts();
      }
    } catch (err) {
      console.warn('Could not persist pre-order to Supabase:', err);
    }

    // Simulate secure payment processing and show confirmed receipt
    setTimeout(() => {
      setOrderReceipt(receipt);
      if (setConfirmedOrder) setConfirmedOrder(receipt);
      setStep('confirmed');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  };

  return (
    <div className="w-full animate-in fade-in duration-300">
      
      {/* Navigation Ribbon */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-2 pb-4">
        <button
          onClick={() => onNavigate && onNavigate(step === 'confirmed' ? 'home' : 'product')}
          className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-stone-500 hover:text-[#221F1E] transition"
        >
          <span>←</span>
          <span>{step === 'confirmed' ? 'Back to Home' : 'Back to Customizer'}</span>
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2 sm:py-6">
        
        {step === 'confirmed' && orderReceipt ? (
          /* ================= ORDER CONFIRMATION SCREEN ================= */
          <div className="relative bg-[#FFF8F9] rounded-3xl border border-[#F6D5DC] p-8 sm:p-14 shadow-[0_8px_30px_rgba(242,175,188,0.15)] max-w-2xl mx-auto text-center mt-4">
            
            {/* Washi Tape Strip */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-36 h-5 bg-[#FADADD]/90 backdrop-blur-xs border border-dashed border-[#E8A5B2]/60 rounded-xs shadow-2xs rotate-1 z-10 flex items-center justify-center">
              <span className="text-[10px] font-hand text-[#A85E5E] tracking-wider">reservation confirmed ♡</span>
            </div>

            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#FFF1F4] border border-[#FAD2DB] flex items-center justify-center text-xl text-[#DD6B80]">
              ✓
            </div>

            <span className="text-xs font-medium tracking-widest uppercase text-[#DD6B80] font-sans block mb-2">
              Order Confirmed ♡
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl text-[#2D1C20] font-normal tracking-tight">
              Your Pre-Order Is Reserved
            </h1>

            <p className="text-sm text-[#69464C] mt-2 max-w-md mx-auto leading-relaxed font-sans">
              Your allocation has been secured in Batch 01. Your order confirmation details have been sent to {orderReceipt.customer.email || 'your email'}.
            </p>

            {/* Receipt Summary Card */}
            <div className="mt-8 p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB] text-left space-y-3 text-xs font-sans text-[#69464C]">
              <div className="flex justify-between items-center pb-3 border-b border-[#F8D2DA]">
                <span className="text-[#8C5E68]">Reference Number</span>
                <span className="font-mono font-medium text-[#9E2B42] bg-[#FFE8EE] px-2.5 py-0.5 rounded border border-[#F5CCD6]">
                  {orderReceipt.orderId}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#8C5E68]">Selected Print:</span>
                <span className="font-medium text-[#2D1C20]">{orderReceipt.print}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#8C5E68]">Bundle Tier:</span>
                <span className="font-medium text-[#2D1C20]">{orderReceipt.tier}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#8C5E68]">Cot Dimensions:</span>
                <span className="font-medium text-[#2D1C20]">{orderReceipt.size} • {orderReceipt.dimensions}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#8C5E68]">Batch Allocation:</span>
                <span className="font-medium text-[#2D1C20]">Batch 01 (Set #{orderReceipt.allocationNumber || 1} of 150)</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#8C5E68]">Delivery Window:</span>
                <span className="font-medium text-[#2D1C20]">{orderReceipt.deliveryWindow}</span>
              </div>

              <div className="flex justify-between pt-3 border-t border-[#F8D2DA] items-baseline">
                <span className="font-medium text-[#2D1C20]">Amount Paid via Razorpay:</span>
                <span className="font-serif font-medium text-xl text-[#2D1C20]">₹{orderReceipt.amountPaid}</span>
              </div>

              {orderReceipt.balanceDue > 0 && (
                <div className="flex justify-between text-xs text-[#8C5E68] pt-1">
                  <span>Balance due at campus dispatch:</span>
                  <span className="font-medium text-[#2D1C20]">₹{orderReceipt.balanceDue}</span>
                </div>
              )}
            </div>

            {/* Refund Assurance Note */}
            <div className="mt-6 p-4 rounded-2xl bg-[#FFF5F7] border border-[#FAD2DB] text-xs text-[#69464C] text-left">
              <strong className="text-[#DD6B80] block font-medium mb-0.5">Flexible Student Policy ♡</strong>
              <p className="leading-relaxed font-sans">
                If your college plans or hostel assignments change before dispatch, you can request a 100% full refund at any time with zero cancellation fee.
              </p>
            </div>

            <button
              onClick={() => onNavigate && onNavigate('home')}
              className="mt-8 px-8 py-3.5 rounded-full bg-[#DD6B80] hover:bg-[#CC5A6F] text-white text-xs font-medium tracking-wide transition shadow-[0_4px_16px_rgba(221,107,128,0.35)] hover:-translate-y-0.5 active:scale-95"
            >
              Return to Collection ♡
            </button>

          </div>
        ) : (
          /* ================= FULL PAGE CHECKOUT ================= */
          <div className="relative bg-[#FFF8F9] rounded-3xl border border-[#F6D5DC] p-6 sm:p-10 shadow-[0_8px_30px_rgba(242,175,188,0.15)] mt-4">
            
            {/* Top Washi Tape Strip */}
            <div className="absolute -top-3.5 left-10 w-44 h-5 bg-[#FADADD]/90 backdrop-blur-xs border border-dashed border-[#E8A5B2]/60 rounded-xs shadow-2xs -rotate-1 z-10 flex items-center justify-center">
              <span className="text-[10px] font-hand text-[#A85E5E] tracking-wider">batch 01 reservation desk ♡</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Left Column: Student Details & Payment (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                <div>
                  <span className="text-xs font-medium tracking-widest uppercase text-[#DD6B80] font-sans block mb-1">
                    Pre-Order Allocation ♡
                  </span>
                  <h1 className="font-serif text-3xl sm:text-4xl text-[#2D1C20] font-normal tracking-tight">
                    Secure Your Reservation
                  </h1>
                  <p className="text-sm text-[#69464C] mt-1 font-sans">
                    Batch 01 allocation is strictly limited to 150 sets per print edition. Pre-orders officially unlock on <strong>September 9th</strong>. Complimentary campus shipping across India.
                  </p>
                </div>

                {!timeLeft.isExpired && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF5F7] border border-[#FAD2DB] text-xs text-[#8C3847] space-y-2.5 font-sans shadow-xs">
                    <div className="font-semibold flex items-center gap-2 text-sm text-[#9E2B42]">
                      <span>⏰</span>
                      <span>Pre-Launch Mode: Pre-Orders Open September 9th</span>
                    </div>
                    <p className="text-[#69464C] leading-relaxed">
                      We are currently in pre-launch! Pre-order reservations for Batch 01 will officially go live on <strong>September 9th at 12:00 AM IST</strong>. Until then, you can explore the collection, customize dimensions, and preview what comes in your kit.
                    </p>
                    <button
                      type="button"
                      onClick={() => onNavigate && onNavigate('product')}
                      className="mt-1 px-4 py-2 rounded-full bg-[#DD6B80] hover:bg-[#CC5A6F] text-white text-xs font-medium tracking-wide transition shadow-xs inline-flex items-center gap-2"
                    >
                      <span>Explore Collection & Preview Dimensions ←</span>
                    </button>
                  </div>
                )}

                {printStats.isSoldOut && (
                  <div className="p-4 rounded-2xl bg-[#FFF1F4] border border-[#E8A5B2] text-xs text-[#9E2B42] space-y-2 font-sans shadow-xs">
                    <div className="font-semibold flex items-center gap-2">
                      <span>⚠️</span>
                      <span>Out of Stock: {selectedPrint?.name} (150/150 Reserved)</span>
                    </div>
                    <p className="text-[#69464C] leading-relaxed">
                      All 150 allocations for this bedding set in Batch 01 have already been secured. Please select our other available print edition to pre-order.
                    </p>
                    <button
                      type="button"
                      onClick={() => onNavigate && onNavigate('product')}
                      className="mt-1 px-4 py-2 rounded-full bg-[#DD6B80] hover:bg-[#CC5A6F] text-white text-xs font-medium tracking-wide transition shadow-xs"
                    >
                      Choose Another Print Pattern ←
                    </button>
                  </div>
                )}

                {errorMessage && (
                  <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-700 font-sans shadow-xs flex items-start gap-2">
                    <span className="shrink-0 text-sm">⚠️</span>
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handlePay} className="space-y-6">
                  
                  {/* Step 1: Student Information */}
                  <div className="relative p-5 rounded-2xl bg-[#FFF5F7] border border-[#FCD8E0] space-y-4 pt-6">
                    {/* Washi Tag */}
                    <div className="absolute -top-2.5 left-6 px-3 py-0.5 bg-[#FFF2D6] border border-dashed border-[#E2C799] rounded-xs shadow-2xs rotate-1 text-[10px] font-hand text-[#8C6D3B]">
                      step 01 • student details ♡
                    </div>

                    <div className="font-serif text-sm font-medium text-[#2D1C20] flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#FFE8EE] text-[#DD6B80] text-xs flex items-center justify-center font-sans font-bold">1</span>
                      <span>Contact Details</span>
                    </div>

                    <div className="space-y-3 font-sans">
                      <div>
                        <label className="text-xs text-[#69464C] font-medium block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Full Name"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#F3CCD5] bg-[#FFFBFC] text-xs focus:outline-none focus:border-[#DD6B80] focus:ring-1 focus:ring-[#DD6B80]/30"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs text-[#69464C] font-medium block mb-1">
                            Phone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 98860 43210"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-[#F3CCD5] bg-[#FFFBFC] text-xs focus:outline-none focus:border-[#DD6B80] focus:ring-1 focus:ring-[#DD6B80]/30"
                          />
                        </div>

                        <div>
                          <label className="text-xs text-[#69464C] font-medium block mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="name@university.edu"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-[#F3CCD5] bg-[#FFFBFC] text-xs focus:outline-none focus:border-[#DD6B80] focus:ring-1 focus:ring-[#DD6B80]/30"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Campus Delivery Address */}
                  <div className="relative p-5 rounded-2xl bg-[#F3F8F3] border border-[#D5E8D5] space-y-4 pt-6">
                    {/* Washi Tag */}
                    <div className="absolute -top-2.5 left-6 px-3 py-0.5 bg-[#E2EFE2] border border-dashed border-[#A3CFA3] rounded-xs shadow-2xs -rotate-1 text-[10px] font-hand text-[#4B734B]">
                      step 02 • dorm destination ♡
                    </div>

                    <div className="font-serif text-sm font-medium text-[#2D1C20] flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#E2EFE2] text-[#4B734B] text-xs flex items-center justify-center font-sans font-bold">2</span>
                      <span>Campus Delivery Destination</span>
                    </div>

                    <div className="space-y-3 font-sans">
                      <div>
                        <label className="text-xs text-[#69464C] font-medium block mb-1">
                          College or University *
                        </label>
                        <input
                          type="text"
                          required
                          name="college"
                          value={formData.college}
                          onChange={handleInputChange}
                          placeholder="e.g. Christ University Central Campus, Bangalore"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5E8D5] bg-[#FBFCFB] text-xs focus:outline-none focus:border-[#DD6B80] focus:ring-1 focus:ring-[#DD6B80]/30"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-[#69464C] font-medium block mb-1">
                          Hostel, PG Name, or Street Address *
                        </label>
                        <input
                          type="text"
                          required
                          name="hostel"
                          value={formData.hostel}
                          onChange={handleInputChange}
                          placeholder="e.g. Block B, Room 304"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5E8D5] bg-[#FBFCFB] text-xs focus:outline-none focus:border-[#DD6B80] focus:ring-1 focus:ring-[#DD6B80]/30"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs text-[#69464C] font-medium block mb-1">
                            City & State *
                          </label>
                          <input
                            type="text"
                            required
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Bangalore, Karnataka"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5E8D5] bg-[#FBFCFB] text-xs focus:outline-none focus:border-[#DD6B80] focus:ring-1 focus:ring-[#DD6B80]/30"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-[#69464C] font-medium block mb-1">
                            PIN Code *
                          </label>
                          <input
                            type="text"
                            required
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleInputChange}
                            placeholder="560029"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5E8D5] bg-[#FBFCFB] text-xs focus:outline-none focus:border-[#DD6B80] focus:ring-1 focus:ring-[#DD6B80]/30"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Pre-Order Reservation Deposit */}
                  <div className="relative p-5 rounded-2xl bg-[#F2F7FB] border border-[#D3E3F0] space-y-3 pt-6">
                    {/* Washi Tag */}
                    <div className="absolute -top-2.5 left-6 px-3 py-0.5 bg-[#DDEBF5] border border-dashed border-[#99BDDA] rounded-xs shadow-2xs rotate-1 text-[10px] font-hand text-[#456885]">
                      step 03 • deposit allocation ♡
                    </div>

                    <div className="font-serif text-sm font-medium text-[#2D1C20] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#DDEBF5] text-[#456885] text-xs flex items-center justify-center font-sans font-bold">3</span>
                        <span>Pre-Order Reservation Deposit</span>
                      </div>
                      <span className="text-xs font-semibold text-[#DD6B80] bg-[#FFE8EE] px-2.5 py-1 rounded-full border border-[#F5CCD6]">
                        ₹{amountToPayNow} Due Today
                      </span>
                    </div>

                    <p className="text-xs text-[#69464C] leading-relaxed font-sans">
                      To reserve your set from Batch 01, you only pay an initial pre-order deposit of <strong>₹{amountToPayNow}</strong> today. The remaining balance of <strong>₹{balanceDueLater}</strong> will be collected upon campus dispatch in October 2026.
                    </p>

                    <div className="p-3 rounded-xl bg-[#FFF8F9] border border-[#FAD2DB] flex items-center gap-2.5 text-xs text-[#8C5E68] font-sans">
                      <span className="text-[#DD6B80] text-sm">♡</span>
                      <span>100% unconditional refund anytime prior to dispatch if your college or hostel plans change.</span>
                    </div>
                  </div>

                  {/* Primary Checkout CTA */}
                  <div className="pt-2 space-y-3">
                    {printStats.isSoldOut ? (
                      <button
                        type="button"
                        disabled
                        className="w-full py-4 rounded-full bg-[#F3CCD5] text-[#8C5E68] font-medium text-sm tracking-wide cursor-not-allowed flex items-center justify-center gap-2 border border-[#E8B2BD]"
                      >
                        <span>Out of Stock (150/150 Reserved) 🔒</span>
                      </button>
                    ) : !timeLeft.isExpired ? (
                      <button
                        type="button"
                        disabled
                        className="w-full py-4 rounded-full bg-[#F6CCD5] text-[#8C3847] font-medium text-sm tracking-wide cursor-not-allowed flex items-center justify-center gap-2 border border-[#EAA8B6]"
                      >
                        <span>Pre-Orders Unlock September 9th 🔒</span>
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={step === 'processing'}
                        className="w-full py-4 rounded-full bg-[#DD6B80] hover:bg-[#CC5A6F] text-white font-medium text-sm tracking-wide transition-all duration-200 shadow-[0_4px_16px_rgba(221,107,128,0.35)] hover:-translate-y-0.5 active:scale-[0.99] disabled:opacity-75 flex items-center justify-center gap-2"
                      >
                        {step === 'processing' ? (
                          <span>Connecting to Razorpay...</span>
                        ) : (
                          <>
                            <span>Pay ₹{amountToPayNow} Pre-Order Deposit via Razorpay</span>
                            <span className="text-xs">♡</span>
                          </>
                        )}
                      </button>
                    )}

                    <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-[#8C5E68] text-center font-sans">
                      <span>100% Refund Guarantee</span>
                      <span>•</span>
                      <span>Free Campus Delivery</span>
                      <span>•</span>
                      <span>Secured by Razorpay</span>
                    </div>
                  </div>

                </form>

              </div>

              {/* Right Column: Order Summary (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative sticky top-24 bg-[#FFF8F9] rounded-3xl border border-[#F6D5DC] p-6 shadow-sm">
                  
                  {/* Top Right Washi Tape Tag */}
                  <div className="absolute -top-3 right-6 w-36 h-5 bg-[#FFF2D6]/90 backdrop-blur-xs border border-dashed border-[#E2C799] rounded-xs shadow-2xs rotate-2 z-10 flex items-center justify-center">
                    <span className="text-[10px] font-hand text-[#8C6D3B] tracking-wider">order packet preview ♡</span>
                  </div>

                  <div className="flex items-center justify-between mb-3 font-sans">
                    <span className="text-xs font-medium uppercase tracking-wider text-[#DD6B80]">
                      Order Summary ♡
                    </span>
                    <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${
                      printStats.isSoldOut 
                        ? 'bg-red-50 text-red-700 border-red-200 font-semibold' 
                        : 'bg-[#FFE8EE] text-[#9E2B42] border-[#F5CCD6]'
                    }`}>
                      {printStats.isSoldOut ? 'Out of Stock (150/150 Reserved)' : 'A few sets left'}
                    </span>
                  </div>

                  {/* Product Photo */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 border border-[#F8D2DA] shadow-sm mb-4">
                    <img
                      src={selectedPrint?.editorialImage || '/products/french_rose_bed.jpg'}
                      alt={selectedPrint?.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-3 bg-[#FFF8F9]/95 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-sans text-[#7E3846] border border-[#F7D5DC] shadow-xs">
                      {selectedPrint?.paletteName}
                    </div>
                  </div>

                  <h3 className="font-serif text-xl text-[#2D1C20] font-normal">
                    {selectedPrint?.name}
                  </h3>
                  <p className="text-xs font-serif italic text-[#8C5E68] mt-0.5">
                    {selectedPrint?.tagline}
                  </p>

                  <div className="my-4 py-3 border-y border-[#F8D2DA] space-y-2 text-xs font-sans text-[#69464C]">
                    <div className="flex justify-between">
                      <span className="text-[#8C5E68]">Edition:</span>
                      <span className="font-medium text-[#2D1C20]">The Complete Bedding Kit (4-Piece Set)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8C5E68]">Cot Dimensions:</span>
                      <span className="font-medium text-[#2D1C20]">{selectedSize?.name} • {selectedSize?.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8C5E68]">Dispatch Window:</span>
                      <span className="font-medium text-[#2D1C20]">{meta.dispatchDate}</span>
                    </div>
                  </div>

                  {/* Inclusions checklist */}
                  <div className="p-3.5 rounded-xl bg-[#FFF1F4] border border-[#FAD2DB] space-y-1.5 text-xs text-[#69464C] mb-4">
                    <div className="font-medium text-[#7E3846] tracking-wide uppercase text-[11px]">Included in package:</div>
                    {selectedTier?.includes?.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DD6B80] mt-1.5 shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="space-y-2 text-xs font-sans pt-2 border-t border-[#F8D2DA]">
                    <div className="flex justify-between text-[#8C5E68]">
                      <span>Complete Kit Value</span>
                      <span className="text-[#2D1C20]">₹{basePrice}</span>
                    </div>
                    <div className="flex justify-between text-[#8C5E68]">
                      <span>Campus Shipping</span>
                      <span className="text-emerald-700 font-medium">Free</span>
                    </div>
                    <div className="flex justify-between text-[#8C5E68]">
                      <span>Cotton Tote Packaging</span>
                      <span className="text-[#2D1C20] font-medium">Included</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-[#F8D2DA] font-serif text-base font-normal text-[#2D1C20]">
                      <span>Deposit Due Today</span>
                      <span className="font-medium text-[#DD6B80]">₹{amountToPayNow}</span>
                    </div>
                    <div className="flex justify-between text-xs text-[#8C5E68]">
                      <span>Balance at campus dispatch:</span>
                      <span className="font-medium text-[#2D1C20]">₹{balanceDueLater}</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
};

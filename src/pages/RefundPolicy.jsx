import React from 'react';

export const RefundPolicy = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-in fade-in duration-300">
      
      {/* Back button */}
      <button
        onClick={() => onNavigate && onNavigate('home')}
        className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-stone-500 hover:text-[#221F1E] transition mb-6"
      >
        <span>←</span>
        <span>Back to Home</span>
      </button>

      {/* Main Canvas Card */}
      <div className="relative bg-[#FFF8F9] rounded-3xl border border-[#F6D5DC] p-6 sm:p-12 shadow-[0_8px_30px_rgba(242,175,188,0.12)] mt-4">
        
        {/* Washi Tape Strip */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-44 h-5 bg-[#FADADD]/90 backdrop-blur-xs border border-dashed border-[#E8A5B2]/60 rounded-xs shadow-2xs rotate-1 z-10 flex items-center justify-center">
          <span className="text-[10px] font-hand text-[#A85E5E] tracking-wider">student refund guarantee ♡</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-medium tracking-widest uppercase text-[#DD6B80] font-sans block mb-2">
            Compliance & Transparency ♡
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#2D1C20] font-normal tracking-tight">
            Cancellation & Refund Policy
          </h1>
          <p className="text-sm text-[#69464C] mt-2 font-sans">
            Our transparent policy designed specifically around university semester move-in schedules.
          </p>
        </div>

        {/* Policy Content Blocks */}
        <div className="space-y-6 text-xs sm:text-sm font-sans text-[#69464C] leading-relaxed">
          
          {/* Section 1 */}
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base sm:text-lg text-[#2D1C20] font-medium mb-2">
              1. Order Cancellation (Pre-Dispatch Window)
            </h2>
            <p>
              Because Batch 01 is loomed in small editions for Autumn move-in, we allow 100% full, unconditional cancellations anytime before your parcel is dispatched from our packing facility in early October 2026.
            </p>
            <p className="mt-2">
              If your room allotment changes or you decide to cancel, contact our team at <a href="mailto:care@girlinpink.co" className="text-[#8E4350] font-medium underline">care@girlinpink.co</a> or phone +91 98860 43210 with your order confirmation reference.
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base sm:text-lg text-[#2D1C20] font-medium mb-2">
              2. Refund Processing Timelines
            </h2>
            <p>
              Cancellation requests are reviewed and approved within 24 business hours. The full pre-order deposit paid will be reversed directly to your original payment method via Razorpay.
            </p>
            <p className="mt-2 text-[#9E6E77] text-xs">
              Under standard banking protocols, funds reflect in your bank account or UPI wallet within 5 to 7 business days following cancellation approval.
            </p>
          </div>

          {/* Section 3 */}
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base sm:text-lg text-[#2D1C20] font-medium mb-2">
              3. Damaged or Defective Items on Delivery
            </h2>
            <p>
              Every bedding set undergoes dual quality inspection at the mill before packing. In the event that your parcel arrives damaged in transit or with manufacturing defects:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Notify us within 7 days of delivery at <a href="mailto:care@girlinpink.co" className="text-[#8E4350] font-medium underline">care@girlinpink.co</a> with photographic documentation.</li>
              <li>We will arrange a complimentary reverse pickup from your campus reception or hostel gate.</li>
              <li>You may select an immediate replacement from reserve stock or receive a 100% full refund.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base sm:text-lg text-[#2D1C20] font-medium mb-2">
              4. Complimentary Size Adjustments
            </h2>
            <p>
              If your institution assigns you a different cot dimension prior to shipping, you can update your sizing allocation at zero additional service charge by contacting customer care.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

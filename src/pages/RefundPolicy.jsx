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
              Because Batch 01 creative journals are hand-bound in small editions of 150, we allow 100% full, unconditional cancellations anytime before your parcel is dispatched from our Bangalore facility in early October 2026.
            </p>
            <p className="mt-2">
              If your university plans change or you decide to cancel before dispatch, simply email our support team at <a href="mailto:care@journaly.in" className="text-[#8E4350] font-medium underline">care@journaly.in</a> or phone +91 98860 43210 with your order confirmation reference.
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base sm:text-lg text-[#2D1C20] font-medium mb-2">
              2. Refund Processing Timelines
            </h2>
            <p>
              Cancellation requests are approved within 24 business hours. The full pre-order deposit or payment paid will be reversed directly to your original payment method via Razorpay within 5 to 7 banking days.
            </p>
          </div>

          {/* Section 3 */}
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base sm:text-lg text-[#2D1C20] font-medium mb-2">
              3. Damaged in Transit or Defective Items
            </h2>
            <p>
              Every journal is inspected by hand and packaged in rigid protective boxes with bubble cushioning. In the rare event that your journal or gift box arrives with damage from transit (bent corners, crushed box, or torn pages), notify us within 48 hours of delivery with photos. We will immediately dispatch a free replacement or issue a full refund.
            </p>
          </div>

          {/* Section 4 */}
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base sm:text-lg text-[#2D1C20] font-medium mb-2">
              4. Contact for Support
            </h2>
            <p>
              For any refund or cancellation inquiries, contact our student care team:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-[#69464C]">
              <li>Email: <a href="mailto:care@journaly.in" className="text-[#8E4350] underline">care@journaly.in</a></li>
              <li>Phone: +91 98860 43210 (Mon–Sat, 10 AM – 7 PM IST)</li>
              <li>Address: No. 42, 3rd Floor, 80 Feet Road, 4th Block, Koramangala, Bangalore 560034</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
};

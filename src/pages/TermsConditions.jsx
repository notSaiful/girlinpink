import React from 'react';

export const TermsConditions = ({ onNavigate }) => {
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
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-44 h-5 bg-[#FFF2D6]/90 backdrop-blur-xs border border-dashed border-[#E2C799]/60 rounded-xs shadow-2xs rotate-1 z-10 flex items-center justify-center">
          <span className="text-[10px] font-hand text-[#8C6D3B] tracking-wider">terms & batch terms ♡</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-medium tracking-widest uppercase text-[#DD6B80] font-sans block mb-2">
            Legal Terms ♡
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#2D1C20] font-normal tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-sm text-[#69464C] mt-2 font-sans">
            Terms governing pre-orders and services provided on girlinpink.co.
          </p>
        </div>

        {/* Policy Content Blocks */}
        <div className="space-y-6 text-xs sm:text-sm font-sans text-[#69464C] leading-relaxed">
          
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base text-[#2D1C20] font-medium mb-2">
              1. Introduction & Acceptance
            </h2>
            <p>
              These Terms and Conditions govern your use of the website <strong>girlinpink.co</strong> and the purchase of bedding products offered by <strong>girlinpink</strong>, operated by Glowup Living Retail LLP, Bangalore, India. By accessing or placing an order on this website, you agree to these terms.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base text-[#2D1C20] font-medium mb-2">
              2. Pre-Order & Batch Production Model
            </h2>
            <p>
              All products featured in Batch 01 are manufactured on a small-batch schedule to ensure minimal textile waste. Placing a pre-order reserves your fabric allocation in the production run. Target delivery dates (October 05–12, 2026) are scheduled for academic semester move-in. Customers retain the right to cancel anytime prior to dispatch for an unconditional 100% full refund.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base text-[#2D1C20] font-medium mb-2">
              3. Pricing & Payments via Razorpay
            </h2>
            <p>
              All prices listed on the website are in Indian Rupees (INR) inclusive of applicable taxes. Payments are processed securely via <strong>Razorpay</strong>, supporting UPI, Debit/Credit Cards, and Net Banking. We do not store sensitive payment card details or CVVs on our servers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base text-[#2D1C20] font-medium mb-2">
              4. Governing Law & Jurisdiction
            </h2>
            <p>
              These terms are governed by the laws of India. Any disputes arising out of or related to transactions on this website shall be subject to the exclusive jurisdiction of the competent courts in Bangalore, Karnataka, India.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base text-[#2D1C20] font-medium mb-2">
              5. Customer Support
            </h2>
            <p>
              For any questions regarding these terms, contact us at <a href="mailto:care@girlinpink.co" className="text-[#8E4350] font-medium underline">care@girlinpink.co</a> or by phone at +91 98860 43210.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

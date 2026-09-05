import React from 'react';

export const PrivacyPolicy = ({ onNavigate }) => {
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
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-44 h-5 bg-[#DDEBF5]/90 backdrop-blur-xs border border-dashed border-[#99BDDA]/60 rounded-xs shadow-2xs -rotate-1 z-10 flex items-center justify-center">
          <span className="text-[10px] font-hand text-[#456885] tracking-wider">student privacy assurance ♡</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-medium tracking-widest uppercase text-[#DD6B80] font-sans block mb-2">
            Data Protection ♡
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#2D1C20] font-normal tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#69464C] mt-2 font-sans">
            How girlinpink protects and manages your customer data.
          </p>
        </div>

        {/* Policy Content Blocks */}
        <div className="space-y-6 text-xs sm:text-sm font-sans text-[#69464C] leading-relaxed">
          
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base text-[#2D1C20] font-medium mb-2">
              1. Information Collected
            </h2>
            <p>
              When placing a pre-order on <strong>girlinpink.co</strong>, we collect only the necessary details required to fulfill and deliver your bedding:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Full Name</li>
              <li>Campus Delivery Destination (Institution, Hostel/PG Block, Room Number, City, PIN Code)</li>
              <li>Phone Number (for courier coordination and shipment tracking)</li>
              <li>Email Address (for order receipts and customer support)</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base text-[#2D1C20] font-medium mb-2">
              2. Data Usage & Security
            </h2>
            <p>
              Your personal information is utilized strictly for order processing and delivery logistics. We never sell, lease, or distribute customer details to third-party advertisers. All transaction data is processed securely via Razorpay under industry standard encryption.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base text-[#2D1C20] font-medium mb-2">
              3. Data Retention & Inquiries
            </h2>
            <p>
              You may request access to or deletion of your account records at any time by contacting our privacy compliance team at <a href="mailto:care@girlinpink.co" className="text-[#8E4350] font-medium underline">care@girlinpink.co</a>.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

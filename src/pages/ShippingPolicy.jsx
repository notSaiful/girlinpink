import React from 'react';

export const ShippingPolicy = ({ onNavigate }) => {
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
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-44 h-5 bg-[#E2EFE2]/90 backdrop-blur-xs border border-dashed border-[#A3CFA3]/60 rounded-xs shadow-2xs -rotate-1 z-10 flex items-center justify-center">
          <span className="text-[10px] font-hand text-[#4B734B] tracking-wider">campus dispatch schedule ♡</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-medium tracking-widest uppercase text-[#DD6B80] font-sans block mb-2">
            Fulfillment & Logistics ♡
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#2D1C20] font-normal tracking-tight">
            Shipping & Delivery Policy
          </h1>
          <p className="text-sm text-[#69464C] mt-2 font-sans">
            Direct campus deliveries to university hostels, PGs, and student residences across India.
          </p>
        </div>

        {/* Policy Content Blocks */}
        <div className="space-y-6 text-xs sm:text-sm font-sans text-[#69464C] leading-relaxed">
          
          {/* Section 1: Dispatch Timeline */}
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base sm:text-lg text-[#2D1C20] font-medium mb-2">
              1. Batch 01 Dispatch Schedule
            </h2>
            <p>
              Batch 01 preorders are crafted in limited runs of 150 sets at our partner heritage mill in Tamil Nadu.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong className="text-[#2D1C20]">Pre-Order Window:</strong> Open until September 15, 2026 or until allocation fills.</li>
              <li><strong className="text-[#2D1C20]">Weaving & Finishing:</strong> September 16 – September 30, 2026.</li>
              <li><strong className="text-[#2D1C20]">Campus Dispatch:</strong> October 05 – October 12, 2026, aligned with Autumn semester move-in.</li>
            </ul>
          </div>

          {/* Section 2: Transit Duration & Shipping Costs */}
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base sm:text-lg text-[#2D1C20] font-medium mb-2">
              2. Transit Timelines & Shipping Costs
            </h2>
            <p>
              We provide complimentary standard shipping across India on all Batch 01 preorders.
            </p>
            <p className="mt-2">
              Following dispatch from our fulfillment hub, transit typically requires 2 to 4 business days for major metropolitan hubs and 3 to 6 business days for regional university centers.
            </p>
          </div>

          {/* Section 3: Campus Gate & Hostel Security Desk Drops */}
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base sm:text-lg text-[#2D1C20] font-medium mb-2">
              3. Campus Reception & Hostel Coordination
            </h2>
            <p>
              You may specify your Hostel Block, Room Number, or Main Campus Security Gate during checkout. Our courier partners coordinate via phone and SMS prior to arrival to ensure smooth handover.
            </p>
          </div>

          {/* Section 4: Tracking Updates */}
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base sm:text-lg text-[#2D1C20] font-medium mb-2">
              4. Real-Time Tracking
            </h2>
            <p>
              Once your shipment enters transit, you will receive an automatic dispatch notification containing your airway bill number and live tracking link.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

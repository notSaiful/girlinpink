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
              Batch 01 handcrafted creative journals are produced in limited runs of 150 copies per edition.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong className="text-[#2D1C20]">Pre-Order Window:</strong> Open until September 15, 2026 or until 150 allocation per edition fills.</li>
              <li><strong className="text-[#2D1C20]">Hand-Binding & Foil Stamping:</strong> September 16 – September 30, 2026.</li>
              <li><strong className="text-[#2D1C20]">Campus Dispatch:</strong> October 05 – October 12, 2026, aligned with Autumn university move-in.</li>
            </ul>
          </div>

          {/* Section 2: Transit Duration & Shipping Costs */}
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base sm:text-lg text-[#2D1C20] font-medium mb-2">
              2. Transit Timelines & Shipping Costs
            </h2>
            <p>
              We provide <strong>100% Free Shipping</strong> on all Batch 01 pre-order reservations across India.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong className="text-[#2D1C20]">Metro Campuses (Delhi NCR, Bangalore, Mumbai, Chennai, Pune):</strong> 2 to 4 transit days after dispatch.</li>
              <li><strong className="text-[#2D1C20]">Rest of India & University Towns (Pilani, Manipal, Sonipat, Vellore):</strong> 3 to 6 transit days.</li>
              <li><strong className="text-[#2D1C20]">Hostel & PG Deliveries:</strong> Couriers deliver directly to campus security gates, hostel reception, or designated student mailrooms.</li>
            </ul>
          </div>

          {/* Section 3: Packaging & Protection */}
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base sm:text-lg text-[#2D1C20] font-medium mb-2">
              3. Protective Keepsake Packaging
            </h2>
            <p>
              Every journal is cushioned in tissue paper inside a signature rigid gift box with a satin ribbon tie, placed within an outer waterproof transit carton so your journal arrives with crisp, unbent corners.
            </p>
          </div>

          {/* Section 4: Tracking & Contact */}
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base sm:text-lg text-[#2D1C20] font-medium mb-2">
              4. Tracking & Support
            </h2>
            <p>
              Upon dispatch in early October, an SMS and email notification with your Bluedart/Delhivery live tracking link will be sent to your registered phone and email. For delivery assistance, contact:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-[#69464C]">
              <li>Email: <a href="mailto:care@girlinpink.co" className="text-[#8E4350] underline">care@girlinpink.co</a></li>
              <li>Phone: +91 98860 43210 (Mon–Sat, 10 AM – 7 PM IST)</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
};

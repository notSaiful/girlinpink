import React from 'react';

export const AboutUs = ({ onNavigate }) => {
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

      {/* Main Card */}
      <div className="relative bg-[#FFF8F9] rounded-3xl border border-[#F6D5DC] p-6 sm:p-12 shadow-[0_8px_30px_rgba(242,175,188,0.12)] mt-4">
        
        {/* Washi Tape Strip */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-44 h-5 bg-[#FADADD]/90 backdrop-blur-xs border border-dashed border-[#E8A5B2]/60 rounded-xs shadow-2xs rotate-1 z-10 flex items-center justify-center">
          <span className="text-[10px] font-hand text-[#A85E5E] tracking-wider">our dorm origin story ♡</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-medium tracking-widest uppercase text-[#DD6B80] font-sans block mb-2">
            About the Brand ♡
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#2D1C20] font-normal tracking-tight">
            Bedding for Borrowed Spaces
          </h1>
          <p className="text-sm text-[#69464C] mt-2 font-sans">
            Created by students to turn institutional dorm rooms and PGs into serene, personal sanctuaries.
          </p>
        </div>

        {/* Content Blocks */}
        <div className="space-y-6 text-xs sm:text-sm font-sans text-[#69464C] leading-relaxed">
          
          {/* Section 1: The Problem & Our Mission */}
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base sm:text-lg text-[#2D1C20] font-medium mb-2">
              1. Our Story & Purpose
            </h2>
            <p>
              Moving into a university hostel, PG, or first rented apartment in Bangalore often means living in a borrowed room. You cannot repaint the walls, drill shelves, or replace the cold metal iron cots. But your bed is where you decompress after long lectures, study late at night, and start your mornings.
            </p>
            <p className="mt-2">
              <strong className="text-[#2D1C20]">girlinpink</strong> was founded by students who were tired of scratchy, synthetic polyester sheets that slipped off thin cots every night. We set out to engineer 100% natural washed cotton percale bedding kits specifically tailored for student cot sizes.
            </p>
          </div>

          {/* Section 2: Direct Craftsmanship */}
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base sm:text-lg text-[#2D1C20] font-medium mb-2">
              2. Direct Mill Craftsmanship
            </h2>
            <p>
              We partner directly with our family weaving mill in Tamil Nadu, cutting out traditional middleman markups, overseas imports, and boutique retail storefront overheads.
            </p>
            <p className="mt-2">
              Every set is woven from 100% long-staple cotton percale at 300 thread count, double enzyme pre-washed for immediate broken-in comfort, and hand-tailored with continuous 360° elastic hems and interior duvet ties.
            </p>
          </div>

          {/* Section 3: Legal Entity & Commercial Details */}
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base sm:text-lg text-[#2D1C20] font-medium mb-2">
              3. Commercial Entity & Operations
            </h2>
            <p>
              <strong className="text-[#2D1C20]">girlinpink</strong> is a registered direct-to-consumer brand commercially owned and operated by <strong className="text-[#2D1C20]">Glowup Living Retail LLP</strong>, headquartered in Bangalore, Karnataka.
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5 text-xs text-[#69464C]">
              <li><strong className="text-[#2D1C20]">Operating Entity:</strong> Glowup Living Retail LLP</li>
              <li><strong className="text-[#2D1C20]">Brand:</strong> girlinpink (Dorm & Student Bedding)</li>
              <li><strong className="text-[#2D1C20]">Headquarters:</strong> No. 42, 3rd Floor, 80 Feet Road, 4th Block, Koramangala, Bangalore, Karnataka 560034, India</li>
              <li><strong className="text-[#2D1C20]">Customer Care:</strong> <a href="mailto:care@girlinpink.co" className="text-[#8E4350] underline font-medium">care@girlinpink.co</a> • +91 98860 43210</li>
              <li><strong className="text-[#2D1C20]">Payment Processing:</strong> Transactions processed securely via Razorpay Payment Gateway (PCI-DSS Level 1 Compliant)</li>
            </ul>
          </div>

          {/* Section 4: Student-First Guarantee */}
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base sm:text-lg text-[#2D1C20] font-medium mb-2">
              4. The Student-First Guarantee
            </h2>
            <p>
              Because campus allotments and room changes can happen unexpectedly, we provide a 100% unconditional refund anytime prior to shipment dispatch. Zero cancellation penalties, zero stress.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

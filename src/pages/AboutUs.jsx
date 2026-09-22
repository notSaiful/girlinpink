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
          <span className="text-[10px] font-hand text-[#A85E5E] tracking-wider">our stationery origin story ♡</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-medium tracking-widest uppercase text-[#DD6B80] font-sans block mb-2">
            About the Brand ♡
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#2D1C20] font-normal tracking-tight">
            Handwriting in a Fast-Paced World
          </h1>
          <p className="text-sm text-[#69464C] mt-2 font-sans">
            Created by students to turn cluttered dorm desks into quiet, mindful, creative sanctuaries.
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
              Between marathon lecture schedules, glowing phone screens, and noisy hostel corridors, students rarely have a quiet space that feels truly grounded. We realized that writing by hand on thick, textured paper was the single most calming, restorative ritual of our university days.
            </p>
            <p className="mt-2">
              <strong className="text-[#2D1C20]">journaly</strong> was born on crowded college desks. We set out to hand-bind journals that feel like treasured heirlooms—vegetable-tanned leather, heirloom lace, custom name embroidery, and Japanese Katakana foil—filled with 120–150 GSM archival paper that never bleeds.
            </p>
          </div>

          {/* Section 2: Direct Craftsmanship */}
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base sm:text-lg text-[#2D1C20] font-medium mb-2">
              2. Artisanal Bookbinding & Archival Paper
            </h2>
            <p>
              We eliminate traditional luxury stationery markups by working directly with master paper mills and artisanal bookbinders.
            </p>
            <p className="mt-2">
              Every journal is constructed with 180° lay-flat binding (exposed coptic stitch, smyth sewn, or twin wire-o), archival cotton rag or Japanese ivory paper tested for wet fountain pen ink washes, and packaged in signature keepsake gift boxes with ribbon ties.
            </p>
          </div>

          {/* Section 3: Legal Entity & Commercial Details */}
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base sm:text-lg text-[#2D1C20] font-medium mb-2">
              3. Commercial Entity & Operations
            </h2>
            <p>
              <strong className="text-[#2D1C20]">journaly</strong> is a registered direct-to-consumer brand commercially owned and operated by <strong className="text-[#2D1C20]">Glowup Living Retail LLP</strong>, headquartered in Bangalore, Karnataka.
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5 text-xs text-[#69464C]">
              <li><strong className="text-[#2D1C20]">Brand:</strong> journaly (Creative Journals & Aesthetic Stationery)</li>
              <li><strong className="text-[#2D1C20]">Operating Entity:</strong> Glowup Living Retail LLP (LLPIN: ACA-8941)</li>
              <li><strong className="text-[#2D1C20]">Customer Care:</strong> <a href="mailto:care@journaly.in" className="text-[#8E4350] underline font-medium">care@journaly.in</a> • +91 98860 43210</li>
              <li><strong className="text-[#2D1C20]">Payment Processing:</strong> Transactions processed securely via Razorpay Payment Gateway (PCI-DSS Level 1 Compliant)</li>
            </ul>
          </div>

          {/* Section 4: Student-First Guarantee */}
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base sm:text-lg text-[#2D1C20] font-medium mb-2">
              4. The Student-First Guarantee
            </h2>
            <p>
              Because campus schedules and college plans can shift, we provide a 100% unconditional refund anytime prior to package dispatch. Zero cancellation penalties, zero stress.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

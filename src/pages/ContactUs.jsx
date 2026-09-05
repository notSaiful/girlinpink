import React from 'react';

export const ContactUs = ({ onNavigate }) => {
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
          <span className="text-[10px] font-hand text-[#A85E5E] tracking-wider">student concierge desk ♡</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-medium tracking-widest uppercase text-[#DD6B80] font-sans block mb-2">
            Get in Touch ♡
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#2D1C20] font-normal tracking-tight">
            Customer Support
          </h1>
          <p className="text-sm text-[#69464C] mt-2 font-sans">
            Questions regarding sizing, delivery timelines, or pre-order modifications.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Email Support */}
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base text-[#2D1C20] font-medium mb-1">Email Support</h2>
            <p className="text-xs text-[#69464C] mb-3 font-sans">
              For order assistance, sizing guidance, and campus delivery questions:
            </p>
            <a 
              href="mailto:care@girlinpink.co" 
              className="text-sm font-medium text-[#8E4350] hover:underline"
            >
              care@girlinpink.co
            </a>
            <div className="text-xs text-[#9E6E77] mt-1">
              Response within 24 business hours
            </div>
          </div>

          {/* Phone Support */}
          <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB]">
            <h2 className="font-serif text-base text-[#2D1C20] font-medium mb-1">Phone & WhatsApp</h2>
            <p className="text-xs text-[#69464C] mb-3 font-sans">
              Direct line for urgent dispatch or payment inquiries:
            </p>
            <a 
              href="tel:+919886043210" 
              className="text-sm font-medium text-[#8E4350] hover:underline block"
            >
              +91 98860 43210
            </a>
            <div className="text-xs text-[#9E6E77] mt-1">
              Monday – Saturday, 10:00 AM – 6:30 PM IST
            </div>
          </div>

        </div>

        {/* Operating & Business Address */}
        <div className="p-6 rounded-2xl bg-[#FFF1F4] border border-[#FAD2DB] space-y-2 text-xs text-[#69464C]">
          <div className="font-serif text-sm font-medium text-[#2D1C20]">
            Registered Operating Address
          </div>
          <div className="font-sans leading-relaxed text-[#69464C]">
            <p className="font-medium text-[#2D1C20]">girlinpink • Glowup Living Retail LLP</p>
            <p>No. 42, 3rd Floor, 80 Feet Road, 4th Block, Koramangala</p>
            <p>Bangalore, Karnataka — 560034, India</p>
          </div>
          <div className="pt-2 border-t border-[#F8D2DA] text-xs text-[#9E6E77]">
            Grievance Officer: Tara R. • grievance@girlinpink.co
          </div>
        </div>

      </div>

    </div>
  );
};

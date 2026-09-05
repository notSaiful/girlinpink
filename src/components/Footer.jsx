import React from 'react';

export const Footer = ({ onNavigate }) => {
  return (
    <footer className="py-12 border-t border-[#F7D5DC] bg-[#FFF6F8]/95 text-[#6E4249] text-xs font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Top: Brand & Refined Subtitle */}
        <div className="text-center space-y-2 pb-6 border-b border-[#F7D5DC] flex flex-col items-center">
          <img 
            src="/logo.png" 
            alt="girlinpink logo" 
            className="w-12 h-12 object-contain rounded-full p-1 bg-white border border-[#F6D5DC] shadow-xs" 
          />
          <div className="font-serif text-2xl font-bold tracking-tight text-[#2D1C20]">
            girlinpink<span className="text-[#C27878] font-serif font-normal">.</span>
          </div>
          <p className="text-xs text-[#8C5E68] font-sans tracking-wide">
            Bedding thoughtfully crafted for borrowed spaces and student rooms ♡
          </p>
        </div>

        {/* Razorpay Required Legal & Compliance Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#6E4249]">
          <button 
            onClick={() => onNavigate && onNavigate('about')} 
            className="hover:text-[#8E4350] transition"
          >
            About Us
          </button>
          <span>•</span>
          <button 
            onClick={() => onNavigate && onNavigate('refund')} 
            className="hover:text-[#8E4350] transition"
          >
            Refund & Cancellation Policy
          </button>
          <span>•</span>
          <button 
            onClick={() => onNavigate && onNavigate('shipping')} 
            className="hover:text-[#8E4350] transition"
          >
            Shipping & Delivery Policy
          </button>
          <span>•</span>
          <button 
            onClick={() => onNavigate && onNavigate('terms')} 
            className="hover:text-[#8E4350] transition"
          >
            Terms & Conditions
          </button>
          <span>•</span>
          <button 
            onClick={() => onNavigate && onNavigate('privacy')} 
            className="hover:text-[#8E4350] transition"
          >
            Privacy Policy
          </button>
          <span>•</span>
          <button 
            onClick={() => onNavigate && onNavigate('contact')} 
            className="hover:text-[#8E4350] transition"
          >
            Contact Us
          </button>
        </div>

        {/* Merchant Business & Payment Security Details */}
        <div className="pt-4 border-t border-[#F7D5DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#9E6E77] text-center sm:text-left">
          <div className="space-y-1">
            <p>
              © {new Date().getFullYear()} girlinpink. Operated by Glowup Living Retail LLP. All rights reserved.
            </p>
            <p>
              Registered Address: 80 Feet Road, 4th Block, Koramangala, Bangalore, Karnataka 560034.
            </p>
            <p>
              Support: <a href="mailto:care@girlinpink.co" className="text-[#7A2A38] hover:underline">care@girlinpink.co</a> • Phone: +91 98860 43210
            </p>
          </div>

          {/* Secured by Razorpay badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFE8ED] border border-[#F5CCD6] text-[#8C3847] shrink-0 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="font-sans font-medium text-[11px]">Secured by Razorpay</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

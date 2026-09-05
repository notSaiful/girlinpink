import React from 'react';
import { useCart } from '../context/CartContext';

export const Header = ({ currentPage = 'home', onNavigate }) => {
  const { meta, getPrintStats } = useCart();
  const roseStats = getPrintStats ? getPrintStats('rose') : { remaining: 150 };
  const blueStats = getPrintStats ? getPrintStats('blue') : { remaining: 150 };

  const handleNavClick = (targetId) => {
    if (['about', 'contact', 'refund', 'shipping', 'terms', 'privacy'].includes(targetId)) {
      onNavigate && onNavigate(targetId);
      return;
    }
    if (targetId === 'home' || targetId === 'top') {
      onNavigate && onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (targetId === 'reserve' || targetId === 'product') {
      onNavigate && onNavigate('product');
      return;
    }
  };

  // Strictly Razorpay required pages as per user instruction
  const navItems = [
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'refund', label: 'Refund Policy' },
    { id: 'shipping', label: 'Shipping Policy' },
    { id: 'terms', label: 'Terms & Conditions' },
    { id: 'privacy', label: 'Privacy Policy' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FFF6F8]/95 backdrop-blur-md border-b border-[#F7D5DC] shadow-[0_4px_20px_rgba(240,165,180,0.09)]">
      {/* Refined Girly Announcement Strip with comfortable padding */}
      <div className="bg-[#FFE8ED] border-b border-[#F5CCD6] text-[#8C3847] px-4 sm:px-6 py-2.5 text-center text-xs sm:text-[13px] font-medium tracking-wide">
        <span className="font-serif italic font-medium">Batch 01 Autumn Drop:</span>
        <span className="font-sans ml-2">
          Strictly limited to 150 orders each • {roseStats.remaining} Rose & {blueStats.remaining} Sky Blue remaining ♡
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Brand Mark */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button 
              onClick={() => handleNavClick('home')} 
              className="group text-left flex items-center gap-3 py-2"
            >
              <img 
                src="/logo.png" 
                alt="girlinpink logo" 
                className="w-9 h-9 sm:w-11 sm:h-11 object-contain rounded-full p-0.5 bg-white border border-[#F6D5DC] shadow-xs group-hover:scale-105 transition-transform shrink-0" 
              />
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#2D1C20] group-hover:text-[#C27878] transition">
                  girlinpink<span className="text-[#C27878] font-serif font-normal">.</span>
                </span>
                <span className="hidden lg:inline text-xs tracking-wider uppercase text-[#A8727C] font-sans font-medium">
                  bedding collection
                </span>
              </div>
            </button>
          </div>

          {/* Razorpay Compliance Navigation Links with spacious gap */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-full text-xs lg:text-[13px] tracking-wide transition-all duration-150 ${
                  currentPage === item.id
                    ? 'bg-[#FCD2DB] text-[#7A2A38] font-medium shadow-xs'
                    : 'text-[#6E4249] hover:text-[#2D1C20] hover:bg-[#FEE9EE] font-normal'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Primary Action Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick('reserve')}
              className="px-6 py-2.5 sm:py-3 rounded-full bg-[#DD6B80] hover:bg-[#CC5A6F] text-white text-xs sm:text-sm font-medium tracking-wide transition shadow-[0_4px_16px_rgba(221,107,128,0.35)] hover:shadow-[0_6px_22px_rgba(221,107,128,0.45)] hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
            >
              <span>Reserve Set</span>
              <span className="text-xs">♡</span>
            </button>
          </div>

        </div>

        {/* Mobile Navigation Strip with generous breathing room */}
        <div className="md:hidden flex items-center justify-start pb-3.5 gap-2 overflow-x-auto no-scrollbar border-t border-[#F7D5DC] pt-2.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs whitespace-nowrap transition ${
                currentPage === item.id
                  ? 'bg-[#FCD2DB] text-[#7A2A38] font-medium shadow-2xs'
                  : 'text-[#6E4249] hover:bg-[#FEE9EE]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};


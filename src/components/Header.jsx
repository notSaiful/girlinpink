import React from 'react';
import { useCart } from '../context/CartContext';

export const Header = ({ currentPage = 'home', onNavigate }) => {
  const { meta, getPrintStats } = useCart();
  const roseStats = getPrintStats ? getPrintStats('rose') : { remaining: 150, isSoldOut: false };
  const blueStats = getPrintStats ? getPrintStats('blue') : { remaining: 150, isSoldOut: false };

  const getAnnouncementText = () => {
    if (roseStats.isSoldOut && blueStats.isSoldOut) {
      return 'Batch 01 All Editions Out of Stock (150/150 Reserved) 🔒';
    }
    if (roseStats.isSoldOut) {
      return 'French Rose is Out of Stock • Sky Blue Opens Sept 9th, 8 PM ♡';
    }
    if (blueStats.isSoldOut) {
      return 'Sky Blue is Out of Stock • French Rose Opens Sept 9th, 8 PM ♡';
    }
    return 'Pre-Orders Open September 9th, 8:00 PM • Strictly 150 allocations per print ♡';
  };

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
        <span className="font-serif italic font-medium">Batch 01 Pre-Launch Drop:</span>
        <span className="font-sans ml-2">
          {getAnnouncementText()}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
          
          {/* Brand Mark - Guaranteed 100% Visible & Never Truncated on Mobile or Desktop */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button 
              onClick={() => handleNavClick('home')} 
              className="group text-left flex items-center gap-2 sm:gap-2.5 py-1.5 shrink-0"
            >
              <img 
                src="/logo.png" 
                alt="girlinpink logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 object-contain p-0.5 sm:p-1 rounded-xl sm:rounded-2xl bg-white border border-[#F6D5DC] shadow-xs group-hover:scale-105 transition-transform shrink-0" 
              />
              <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#2D1C20] group-hover:text-[#C27878] transition whitespace-nowrap shrink-0">
                girlinpink<span className="text-[#C27878] font-serif font-normal">.</span>
              </span>
            </button>
          </div>

          {/* Razorpay Compliance Navigation Links with comfortable spacing */}
          <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-2 shrink-0">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-full text-xs lg:text-[13px] tracking-wide transition-all duration-150 whitespace-nowrap ${
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
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <button
              onClick={() => handleNavClick('reserve')}
              className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#DD6B80] hover:bg-[#CC5A6F] text-white text-xs sm:text-sm font-medium tracking-wide transition shadow-[0_4px_16px_rgba(221,107,128,0.35)] hover:shadow-[0_6px_22px_rgba(221,107,128,0.45)] hover:-translate-y-0.5 active:scale-95 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap shrink-0"
            >
              <span className="hidden sm:inline">Pre-Orders Sept 9th, 8 PM</span>
              <span className="sm:hidden">Drops Sept 9, 8 PM</span>
              <span className="text-xs">⏰</span>
            </button>
          </div>

        </div>

        {/* Mobile & Tablet Navigation Strip */}
        <div className="xl:hidden flex items-center justify-start sm:justify-center pb-2.5 gap-2 overflow-x-auto no-scrollbar border-t border-[#F7D5DC] pt-2 px-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs whitespace-nowrap shrink-0 transition ${
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


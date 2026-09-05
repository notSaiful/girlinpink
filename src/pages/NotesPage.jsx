import React from 'react';
import { useCart } from '../context/CartContext';

export const NotesPage = ({ onNavigate }) => {
  const { openReservation } = useCart();

  const notes = [
    {
      title: "will it pop off my cot at night? 🛏️",
      answer: "no way! we put a deep 12\" corner pocket and continuous 360° high-tension elastic all around. it locks onto 4\" thin foam cots or thick mattresses and never untucks when you toss and turn.",
      color: "bg-[#FFF9E6] border-amber-200/80 text-amber-950",
      tapeColor: "bg-amber-200/60",
      rotate: "-rotate-1"
    },
    {
      title: "is it sweaty polyester? ☁️",
      answer: "absolutely zero polyester. cheap Amazon sheets are spun plastic that trap body heat. we use 100% natural long-staple cotton percale that stays crisp, cool, and breathable in warm non-AC rooms.",
      color: "bg-[#F3F8F3] border-emerald-200/70 text-emerald-950",
      tapeColor: "bg-emerald-200/50",
      rotate: "rotate-2"
    },
    {
      title: "what if my room changes before October? 💌",
      answer: "college room allotments are messy—we get it! you can cancel anytime before shipping for a 100% instant full refund, or text us on WhatsApp to swap your cot size for free. pinky promise ♡",
      color: "bg-[#FFF0F4] border-rose-200 text-rose-950",
      tapeColor: "bg-rose-soft/70",
      rotate: "-rotate-2"
    },
    {
      title: "how do i wash it in hostel laundry? 🧺",
      answer: "it's already pre-washed twice at the mill with organic plant enzymes! toss it in regular washing machine or bucket wash. it will never shrink, never fade, and gets softer every single week.",
      color: "bg-[#F5F2FA] border-purple-200/70 text-purple-950",
      tapeColor: "bg-purple-200/50",
      rotate: "rotate-1"
    },
    {
      title: "strict landlord / warden rules? 🔒",
      answer: "that is the magic! no drilling, no nails, no peeling tape on campus paint. in twenty minutes, swapping your bed gives you the Pinterest room glow-up you've saved—100% security deposit safe.",
      color: "bg-[#FFF6ED] border-orange-200/80 text-orange-950",
      tapeColor: "bg-orange-200/50",
      rotate: "-rotate-1"
    },
    {
      title: "can i pay just a small deposit now? 🪙",
      answer: "yes! you can reserve your set with just a ₹290–₹390 deposit today to hold your spot in Batch 01 (150 sets). you only pay the rest when your package is ready to ship to campus.",
      color: "bg-[#F8F9FA] border-slate-200 text-slate-900",
      tapeColor: "bg-slate-200/60",
      rotate: "rotate-1"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-light border border-rose/20 text-rose-dark text-xs font-hand text-base mb-2">
          <span>page 04 • little notes & answers 💌</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-nearblack font-normal">
          honest little sticky notes
        </h2>
        <p className="font-hand text-xl text-nearblack/70 mt-1">
          answers to questions we had when moving into our first hostel.
        </p>
      </div>

      {/* Sticky Notes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {notes.map((n, i) => (
          <div 
            key={i}
            className={`p-6 rounded-2xl border shadow-soft relative transform ${n.rotate} hover:rotate-0 transition-transform duration-300 ${n.color}`}
          >
            {/* Cute top washi tape */}
            <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-4 border border-black/5 shadow-sm rounded-sm ${n.tapeColor}`} />
            
            <h3 className="font-serif text-lg font-normal mb-2 pt-1">
              {n.title}
            </h3>
            <p className="font-hand text-lg leading-snug">
              {n.answer}
            </p>
          </div>
        ))}
      </div>

      {/* Big Cute CTA Box */}
      <div className="mt-12 bg-white/90 backdrop-blur-md rounded-3xl border border-white p-8 text-center shadow-card max-w-xl mx-auto">
        <div className="text-3xl mb-2">🌸</div>
        <h3 className="font-serif text-2xl text-nearblack font-normal">
          ready to claim your bed?
        </h3>
        <p className="font-hand text-xl text-nearblack/70 mt-1 mb-5">
          batch 01 has 19 sets of Rose and 13 sets of Sage remaining.
        </p>
        <button
          onClick={() => openReservation()}
          className="px-8 py-3.5 rounded-full bg-rose hover:bg-rose-dark text-white text-sm font-medium transition shadow-soft"
        >
          reserve my set (from ₹850) ♡
        </button>
      </div>

      {/* Bottom Page Navigation Links */}
      <div className="mt-10 flex items-center justify-between text-xs font-hand text-lg text-nearblack/70">
        <button
          onClick={() => onNavigate('diary')}
          className="hover:text-rose transition flex items-center gap-1"
        >
          <span>←</span>
          <span>back to our diary</span>
        </button>

        <button
          onClick={() => onNavigate('sheets')}
          className="hover:text-rose transition flex items-center gap-1"
        >
          <span>back to the sheets</span>
          <span>➔</span>
        </button>
      </div>

    </div>
  );
};

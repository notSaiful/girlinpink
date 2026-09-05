import React from 'react';

export const TestimonialsSection = () => {
  const reviews = [
    {
      name: "Ananya, 19",
      college: "Christ University • Bangalore",
      stars: "⭐⭐⭐⭐⭐",
      quote: "my dorm room finally looks like my saved pinterest boards 😭 it’s so calming to curl up here after 9am lectures. completely changed the vibe of my room ♡",
      tapeColor: "bg-rose-soft/80 border-rose-300/40",
      bgColor: "bg-[#FFF8F9] border-[#F8D2DA]",
      rotate: "-rotate-1"
    },
    {
      name: "Rhea, 20",
      college: "Koramangala PG • Bangalore",
      stars: "⭐⭐⭐⭐⭐",
      quote: "my roommate literally asked for the link the first morning! the fitted sheet actually stays locked onto the weird thin foam cot and doesn't untuck at night ☁️",
      tapeColor: "bg-sage-light border-emerald-300/40",
      bgColor: "bg-[#F3F8F3] border-[#D6E6D6]",
      rotate: "rotate-1"
    },
    {
      name: "Tanya, 18",
      college: "Hostel Block C • Manipal",
      stars: "⭐⭐⭐⭐⭐",
      quote: "zero landlord rules, no holes in the wall, no paint peeling. in twenty minutes my cold iron cot went from depressing to so cozy & aesthetic 🌸",
      tapeColor: "bg-butter/70 border-amber-300/40",
      bgColor: "bg-[#FFF9EE] border-[#FBE3B5]",
      rotate: "-rotate-2"
    },
    {
      name: "Diya, 21",
      college: "St. Xavier's • Student Flat",
      stars: "⭐⭐⭐⭐⭐",
      quote: "washed it in the shared campus machines and it came out even softer. pure breathable cotton makes such a difference in monsoon humidity ✨",
      tapeColor: "bg-[#E0EDF5] border-sky-300/40",
      bgColor: "bg-[#F2F7FB] border-[#D1E3F0]",
      rotate: "rotate-1"
    }
  ];

  return (
    <section id="reviews" className="py-14 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-12 sm:mb-14">
        <span className="text-xs font-medium tracking-widest uppercase text-[#A85E5E] font-sans block mb-2">
          student love stories ♡
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2D1C20] font-normal tracking-tight">
          Real Room Transformations
        </h2>
        <p className="text-sm text-[#69464C] mt-2 font-sans">
          How girls are turning cold dorm cots and borrowed rooms into their personal sanctuaries.
        </p>
      </div>

      {/* Grid of Girly Scrapbook Reviews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-9">
        {reviews.map((r, i) => (
          <div
            key={i}
            className={`p-6 sm:p-7 rounded-3xl border shadow-soft relative transform ${r.rotate} hover:rotate-0 hover:scale-[1.01] transition-all duration-300 ${r.bgColor}`}
          >
            {/* Cute Washi tape pin */}
            <div className={`absolute -top-3 left-8 w-20 h-5 border shadow-xs rounded-xs transform -rotate-1 ${r.tapeColor}`} />

            {/* Stars & Emojis */}
            <div className="flex items-center justify-between mb-3.5 pt-1">
              <span className="text-xs tracking-wider">{r.stars}</span>
              <span className="text-xs font-sans text-[#A85E5E] font-medium">
                verified batch 01 ♡
              </span>
            </div>

            {/* Girly Hand Quote */}
            <p className="font-hand text-xl text-[#2D1C20]/90 leading-snug mb-4">
              “{r.quote}”
            </p>

            {/* Student Info */}
            <div className="pt-3.5 border-t border-black/5 flex items-center justify-between text-xs">
              <span className="font-serif font-semibold text-[#2D1C20]">
                {r.name}
              </span>
              <span className="text-[#8C5E68] font-sans text-xs">
                {r.college}
              </span>
            </div>

          </div>
        ))}
      </div>

      {/* Cute Calming Note Banner */}
      <div className="mt-12 p-5 rounded-3xl bg-[#FFF5F7] border border-[#F8D2DA] shadow-xs text-center max-w-lg mx-auto">
        <p className="font-hand text-lg sm:text-xl text-[#8E4350]">
          “you can’t change your hostel walls, but your bed will always be your safe haven ♡”
        </p>
      </div>

    </section>
  );
};

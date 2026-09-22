import React from 'react';

export const TestimonialsSection = () => {
  const reviews = [
    {
      name: "Aarushi, 19",
      college: "LSR • Delhi University",
      stars: "⭐⭐⭐⭐⭐",
      edition: "Dragonfly Botanical Leather",
      quote: "my sailor fountain pen and wet ink washes never bleed through! the deckle edges and gold dragonfly embossing on the dark leather look like a vintage fairy tale 😭✨",
      tapeColor: "bg-[#FADADD]/80 border-rose-300/50",
      bgColor: "bg-[#FFF8F9] border-[#F8D2DA]",
      rotate: "-rotate-1"
    },
    {
      name: "Meera, 20",
      college: "NIFT • Bangalore",
      stars: "⭐⭐⭐⭐⭐",
      edition: "Vintage Lace Junk Journal",
      quote: "the vintage lace junk journal has real crochet lace and tea-stained pockets! already storing my dried marigolds from orientation and concert tickets 🌸",
      tapeColor: "bg-[#E2EFE2]/80 border-emerald-300/50",
      bgColor: "bg-[#F3F8F3] border-[#D6E6D6]",
      rotate: "rotate-1"
    },
    {
      name: "Rhea, 20",
      college: "Ashoka University • Sonipat",
      stars: "⭐⭐⭐⭐⭐",
      edition: "Embroidered Oatmeal Linen",
      quote: "having my name hand-embroidered on oatmeal linen makes it feel so special. it opens 100% flat at 180° on my tiny dorm desk so writing is completely effortless 🪡",
      tapeColor: "bg-[#FFF2D6]/80 border-amber-300/50",
      bgColor: "bg-[#FFF9EE] border-[#FBE3B5]",
      rotate: "-rotate-2"
    },
    {
      name: "Kavya, 21",
      college: "Christ University • Bangalore",
      stars: "⭐⭐⭐⭐⭐",
      edition: "Katakana Sakura Edition",
      quote: "the vertical Katakana foil stamping of my name is so crisp and shiny! the 120 GSM Japanese paper glides so smoothly with fine gel pens ☁️",
      tapeColor: "bg-[#E0EDF5]/80 border-sky-300/50",
      bgColor: "bg-[#F2F7FB] border-[#D1E3F0]",
      rotate: "rotate-1"
    }
  ];

  return (
    <section id="reviews" className="py-14 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFE8ED] border border-[#F5CCD6] text-[#8C3847] text-[11px] font-sans font-medium tracking-wide mb-3">
          <span>💌</span>
          <span>Student Stories • Captured Across Campus Desks</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2D1C20] font-normal tracking-tight">
          The Dorm Desk Sanctuary Scrapbook
        </h2>
        <p className="font-serif italic text-lg text-[#DD6B80] mt-1">
          Real journals in daily university routines
        </p>
        <p className="text-xs sm:text-sm text-[#69464C] mt-2 font-sans max-w-lg mx-auto leading-relaxed">
          How students across universities are keeping lecture thoughts, bullet journaling, and finding daily calm in quiet hostel rooms.
        </p>
      </div>

      {/* Featured Scrapbook Desk Photo Showcase */}
      <div className="relative bg-[#FFF8F9] rounded-3xl border border-[#F6D5DC] p-4 sm:p-7 shadow-[0_8px_30px_rgba(240,165,180,0.12)] mb-12">
        {/* Washi Pin */}
        <div className="absolute -top-3 left-12 w-40 h-5 bg-[#FADADD]/90 backdrop-blur-xs border border-dashed border-[#E5A8B4] rounded-xs shadow-2xs -rotate-1 z-10 pointer-events-none flex items-center justify-center">
          <span className="text-[10px] font-hand text-[#8C3847] font-semibold tracking-wider">desk ritual 01 ♡</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Photo */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#F8D2DA] shadow-sm bg-white">
            <img
              src="/sections/dorm_desk_scrapbook.jpg"
              alt="Aesthetic dorm desk scrapbook with open creative journal, washi tape, fountain pens, and polaroid photos"
              className="w-full h-auto object-cover max-h-[440px]"
              loading="lazy"
            />
          </div>

          {/* Scrapbook Desk Note */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-medium uppercase tracking-widest text-[#DD6B80] font-sans block">
              Hostel Desk Sanctuary
            </span>
            <h3 className="font-serif text-2xl text-[#2D1C20] font-normal leading-snug">
              An Analog Island in a Digital Semester
            </h3>
            <p className="text-xs sm:text-sm text-[#69464C] font-sans leading-relaxed">
              Between fast lecture slides and endless notifications, the journaly desk ritual gives you space to slow down. Archival paper that holds pressed flowers, concert tickets, and late-night thoughts without wrinkling or bleeding.
            </p>

            <div className="pt-2 border-t border-[#F8D2DA] grid grid-cols-2 gap-3 text-xs font-sans">
              <div className="p-3 rounded-xl bg-white border border-[#F7CCD6]">
                <span className="font-serif text-lg font-normal text-[#DD6B80] block">4.98 / 5</span>
                <span className="text-[#8C5E68] text-[11px]">Campus Rating</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#F7CCD6]">
                <span className="font-serif text-lg font-normal text-[#DD6B80] block">0% Bleed</span>
                <span className="text-[#8C5E68] text-[11px]">Archival Tested</span>
              </div>
            </div>

            <p className="font-hand text-lg text-[#8E4350]">
              “the only 30 minutes of my day where my phone stays facedown ♡”
            </p>
          </div>
        </div>
      </div>

      {/* Grid of Student Polaroid Reviews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-8">
        {reviews.map((r, i) => (
          <div
            key={i}
            className={`p-6 sm:p-7 rounded-3xl border shadow-[0_6px_25px_rgba(242,175,188,0.12)] relative transform ${r.rotate} hover:rotate-0 hover:scale-[1.01] transition-all duration-300 ${r.bgColor}`}
          >
            {/* Cute Washi tape pin */}
            <div className={`absolute -top-3 left-8 w-24 h-5 border shadow-2xs rounded-xs transform -rotate-1 ${r.tapeColor}`} />

            {/* Stars & Edition */}
            <div className="flex items-center justify-between mb-3 pt-1">
              <span className="text-xs tracking-wider">{r.stars}</span>
              <span className="text-[11px] font-sans text-[#A85E5E] font-medium bg-white/70 px-2.5 py-0.5 rounded-full border border-black/5">
                {r.edition}
              </span>
            </div>

            {/* Handwritten Quote */}
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

      {/* Calming Note Banner */}
      <div className="mt-12 p-5 rounded-3xl bg-[#FFF5F7] border border-[#F8D2DA] shadow-xs text-center max-w-lg mx-auto">
        <p className="font-hand text-lg sm:text-xl text-[#8E4350]">
          “your days are too precious to get lost in a phone screen—write them down by hand ♡”
        </p>
      </div>

    </section>
  );
};

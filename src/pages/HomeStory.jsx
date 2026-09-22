import React from 'react';
import { FullScreenHero } from '../components/FullScreenHero';
import { PromotionalMarquee, PreLaunchTimerSection } from '../components/PromotionalBannerStrip';
import { ProductCarousel } from '../components/ProductCarousel';
import { ArchivalPaperLab } from '../components/ArchivalPaperLab';
import { UnboxingExperience } from '../components/UnboxingExperience';
import { TestimonialsSection } from '../components/TestimonialsSection';

export const HomeStory = ({ onNavigate }) => {
  const scrollToCarousel = () => {
    const el = document.getElementById('prints-carousel');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickNotes = [
    {
      title: "Will fountain pens or watercolors bleed through?",
      text: "Zero bleed through. We strictly use 120–150 GSM archival cotton rag and Japanese ivory paper. Even wet fountain pen inks dry crisply without ghosting."
    },
    {
      title: "How does the custom name / Katakana work?",
      text: "For the Embroidered, Katakana Sakura, and Daily Planner editions, you can enter your name or initials to be hand-stitched or hot-stamped in rose-gold foil."
    },
    {
      title: "Does the journal lay completely flat on a desk?",
      text: "Yes! Every journal features 180° lay-flat bookbinding (exposed coptic stitch, smyth-sewn, or twin wire spiral) so you never fight the spine on small dorm desks."
    },
    {
      title: "What happens if my college plans change before dispatch?",
      text: "We offer an unconditional 100% full refund guarantee. If your university plans change anytime before campus dispatch, you can request an instant full refund."
    }
  ];

  return (
    <div className="w-full">
      
      {/* Moving Promotional Marquee Strip (Below Header) */}
      <PromotionalMarquee />

      {/* 1. Full-Screen Hero */}
      <FullScreenHero onExplore={scrollToCarousel} />

      {/* 2. Order Launch Countdown Timer Section (Below Hero Section) */}
      <PreLaunchTimerSection onNavigate={onNavigate} onExplore={scrollToCarousel} />

      {/* 3. The 6 Creative Journals Product Carousel */}
      <ProductCarousel onNavigate={onNavigate} />

      {/* 4. The Archival Paper Laboratory (Split Bleed Test & Paper Science) */}
      <ArchivalPaperLab onNavigate={onNavigate} />

      {/* 5. Unboxing an Heirloom (Keepsake Box, Brass Clip & Campus Delivery) */}
      <UnboxingExperience onNavigate={onNavigate} />

      {/* 6. Real Student Dorm Desk Scrapbook (Testimonials) */}
      <TestimonialsSection />

      {/* 5. Our Story */}
      <section id="our-story" className="py-14 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-medium tracking-widest uppercase text-[#A85E5E] font-sans block mb-2">
            Brand Origin ♡
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#2D1C20] font-normal tracking-tight">
            Handwriting in a Digital World
          </h3>
          <p className="text-sm text-[#69464C] mt-2 font-sans">
            How two students created an intentional analog sanctuary for busy college lives.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Snapshot 1: Aesthetic Study Desk */}
          <div className="relative bg-[#FFF8F9] rounded-3xl border border-[#F6D5DC] p-6 sm:p-8 shadow-[0_8px_30px_rgba(242,175,188,0.15)] flex flex-col sm:flex-row items-center gap-6 sm:gap-8 -rotate-[0.5deg] hover:rotate-0 transition-transform duration-300">
            {/* Washi Tape Strip */}
            <div className="absolute -top-3 left-10 w-28 sm:w-36 h-5 bg-[#FADADD]/85 backdrop-blur-xs border border-dashed border-[#E5A8B4]/70 rounded-xs shadow-2xs rotate-1 pointer-events-none" />

            <div className="w-full sm:w-56 aspect-square rounded-2xl overflow-hidden border border-pink-100 p-1.5 bg-white shadow-xs shrink-0">
              <img src="/hero_aesthetic_desk.jpg" alt="Aesthetic dorm desk with open creative journal and matcha latte" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div>
              <span className="font-hand text-xl text-[#B05063] block mb-1">
                entry 01 • the quiet desk ritual ♡
              </span>
              <h4 className="font-serif text-2xl text-[#2D1C20] mb-2 font-normal">
                A Safe Haven for Messy Thoughts
              </h4>
              <p className="text-xs sm:text-sm text-[#69464C] leading-relaxed font-sans">
                College life in hostels and PGs moves at 100 miles an hour. Between endless phone screens, exams, and loud corridors, sitting down with a beautiful handcrafted journal is the one quiet ritual that grounds you. Your pages are where messy thoughts turn into clarity and peace.
              </p>
            </div>
          </div>

          {/* Snapshot 2: Archival Paper Craftsmanship */}
          <div className="relative bg-[#F3F8F3] rounded-3xl border border-[#D6E6D6] p-6 sm:p-8 shadow-[0_8px_30px_rgba(180,210,180,0.15)] flex flex-col sm:flex-row items-center gap-6 sm:gap-8 rotate-[0.5deg] hover:rotate-0 transition-transform duration-300">
            {/* Washi Tape Strip */}
            <div className="absolute -top-3 right-10 w-28 sm:w-36 h-5 bg-[#E2EFE2]/85 backdrop-blur-xs border border-dashed border-[#A8C8A8]/70 rounded-xs shadow-2xs -rotate-1 pointer-events-none" />

            <div className="w-full sm:w-56 aspect-square rounded-2xl overflow-hidden border border-green-100 p-1.5 bg-white shadow-xs shrink-0">
              <img src="/products/journals/dragonfly_botanical_leather.jpg" alt="Handcrafted dragonfly botanical leather journal with raw deckle edge paper" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div>
              <span className="font-hand text-xl text-[#3B663B] block mb-1">
                entry 02 • archival paper & bindings 🌿
              </span>
              <h4 className="font-serif text-2xl text-[#2D1C20] mb-2 font-normal">
                Zero Bleed & 180° Lay-Flat Spines
              </h4>
              <p className="text-xs sm:text-sm text-[#4E624E] leading-relaxed font-sans">
                We tested dozens of paper mills to engineer 120–150 GSM archival cotton and Japanese ivory papers that hold up against wet fountain pens, ink washes, and dark gel pens without ghosting. Stitched with lay-flat bindings so writing on small desks is effortlessly comfortable.
              </p>
            </div>
          </div>

          {/* Snapshot 3: Keepsake Gift Box Package */}
          <div className="relative bg-[#FFF9EE] rounded-3xl border border-[#F5E5C0] p-6 sm:p-8 shadow-[0_8px_30px_rgba(235,215,165,0.15)] flex flex-col sm:flex-row items-center gap-6 sm:gap-8 -rotate-[0.5deg] hover:rotate-0 transition-transform duration-300">
            {/* Washi Tape Strip */}
            <div className="absolute -top-3 left-12 w-28 sm:w-36 h-5 bg-[#FFF2D6]/85 backdrop-blur-xs border border-dashed border-[#ECD39E]/70 rounded-xs shadow-2xs rotate-1 pointer-events-none" />

            <div className="w-full sm:w-56 aspect-square rounded-2xl overflow-hidden border border-amber-100 p-1.5 bg-white shadow-xs shrink-0">
              <img src="/products/journals/vintage_lace_junk_journal.jpg" alt="Vintage lace junk journal with ephemera pockets and ribbon tie" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div>
              <span className="font-hand text-xl text-[#9B6A1A] block mb-1">
                entry 03 • keepsakes that last forever 🌸
              </span>
              <h4 className="font-serif text-2xl text-[#2D1C20] mb-2 font-normal">
                Delivered in Signature Keepsake Boxes
              </h4>
              <p className="text-xs sm:text-sm text-[#6C5632] leading-relaxed font-sans">
                Every journal is packaged like an heirloom treasure—cushioned in rigid gift boxes with satin ribbon ties and a free solid brass bookmark clip. Dispatched safely to campus gates and hostel reception desks across the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions: Scrapbook Polaroids */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-medium tracking-widest uppercase text-[#A85E5E] font-sans block mb-2">
            Questions & Answers ♡
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#2D1C20] font-normal tracking-tight">
            Common Inquiries
          </h3>
          <p className="text-sm text-[#69464C] mt-2 font-sans">
            Key details regarding paper GSM, personalization, and pre-order dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {quickNotes.map((note, idx) => (
            <div 
              key={idx}
              className={`relative p-6 sm:p-7 rounded-3xl bg-[#FFF8F9] border border-[#F6D5DC] shadow-[0_6px_25px_rgba(242,175,188,0.12)] ${idx % 2 === 0 ? '-rotate-0.5' : 'rotate-0.5'} hover:rotate-0 transition-transform duration-300`}
            >
              <div className="absolute -top-3 left-8 w-24 h-4.5 bg-[#FADADD]/80 backdrop-blur-xs border border-dashed border-[#E5A8B4]/60 rounded-xs -rotate-1" />
              <span className="font-hand text-lg text-[#B05063] block mb-1">
                note 0{idx + 1} ♡
              </span>
              <h4 className="font-serif text-base font-normal mb-2 text-[#2D1C20]">
                {note.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#69464C] leading-relaxed font-sans">
                {note.text}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

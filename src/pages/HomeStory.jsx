import React from 'react';
import { FullScreenHero } from '../components/FullScreenHero';
import { PromotionalMarquee, PreLaunchTimerSection } from '../components/PromotionalBannerStrip';
import { ProductCarousel } from '../components/ProductCarousel';
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
      title: "Will the fitted sheet stay securely on single cots?",
      text: "Yes. Our fitted sheets feature generous 12-inch pockets and continuous 360° elastic that stays anchored on both thin foam pads and thick mattresses."
    },
    {
      title: "Is the fabric 100% natural cotton?",
      text: "Every set is loomed from 100% long-staple cotton percale with zero synthetic polyester or microfiber, keeping you cool through warm nights."
    },
    {
      title: "How does it handle hostel laundry?",
      text: "The fabric is double pre-washed with organic plant enzymes so it is pre-shrunk and durable. Wash with cold water and air dry naturally."
    },
    {
      title: "What happens if room allotment changes before October?",
      text: "If your college plans change before campus dispatch, you can request an immediate 100% full refund with zero cancellation fees."
    }
  ];

  return (
    <div className="w-full">
      
      {/* Moving Promotional Marquee Strip (Below Header) */}
      <PromotionalMarquee />

      {/* 1. Full-Screen Hero */}
      <FullScreenHero onExplore={scrollToCarousel} />

      {/* 2. September 9th Launch Countdown Timer Section (Below Hero Section) */}
      <PreLaunchTimerSection onNavigate={onNavigate} onExplore={scrollToCarousel} />

      {/* 3. The Launch Prints Product Carousel */}
      <ProductCarousel onNavigate={onNavigate} />

      {/* 3. Real Room Transformations (Testimonials) */}
      <TestimonialsSection />

      {/* 4. Our Story */}
      <section id="our-story" className="py-14 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-medium tracking-widest uppercase text-[#A85E5E] font-sans block mb-2">
            Brand Origin ♡
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#2D1C20] font-normal tracking-tight">
            Designed for Borrowed Rooms
          </h3>
          <p className="text-sm text-[#69464C] mt-2 font-sans">
            How two students transformed student living into an intentional sanctuary.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Snapshot 1: Pinterest Dorm Bedroom */}
          <div className="relative bg-[#FFF8F9] rounded-3xl border border-[#F6D5DC] p-6 sm:p-8 shadow-[0_8px_30px_rgba(242,175,188,0.15)] flex flex-col sm:flex-row items-center gap-6 sm:gap-8 -rotate-[0.5deg] hover:rotate-0 transition-transform duration-300">
            {/* Washi Tape Strip */}
            <div className="absolute -top-3 left-10 w-28 sm:w-36 h-5 bg-[#FADADD]/85 backdrop-blur-xs border border-dashed border-[#E5A8B4]/70 rounded-xs shadow-2xs rotate-1 pointer-events-none" />

            <div className="w-full sm:w-56 aspect-square rounded-2xl overflow-hidden border border-pink-100 p-1.5 bg-white shadow-xs shrink-0">
              <img src="/story_aesthetic_dorm.jpg" alt="Aesthetic pastel pink gingham student dorm sanctuary" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div>
              <span className="font-hand text-xl text-[#B05063] block mb-1">
                entry 01 • dorm sanctuary ♡
              </span>
              <h4 className="font-serif text-2xl text-[#2D1C20] mb-2 font-normal">
                Overcoming Institutional Furniture
              </h4>
              <p className="text-xs sm:text-sm text-[#69464C] leading-relaxed font-sans">
                Moving into a shared dorm or PG often means cold metal cots, harsh tube lights, and synthetic sheets that slip off every night. We created girlinpink so students could easily transform their beds into a calm, welcoming retreat.
              </p>
            </div>
          </div>

          {/* Snapshot 2: Pinterest Washed Cotton Percale */}
          <div className="relative bg-[#F3F8F3] rounded-3xl border border-[#D6E6D6] p-6 sm:p-8 shadow-[0_8px_30px_rgba(180,210,180,0.15)] flex flex-col sm:flex-row items-center gap-6 sm:gap-8 rotate-[0.5deg] hover:rotate-0 transition-transform duration-300">
            {/* Washi Tape Strip */}
            <div className="absolute -top-3 right-10 w-28 sm:w-36 h-5 bg-[#E2EFE2]/85 backdrop-blur-xs border border-dashed border-[#A8C8A8]/70 rounded-xs shadow-2xs -rotate-1 pointer-events-none" />

            <div className="w-full sm:w-56 aspect-square rounded-2xl overflow-hidden border border-green-100 p-1.5 bg-white shadow-xs shrink-0">
              <img src="/story_aesthetic_cotton.jpg" alt="Macro detail of 100% washed cotton percale pink gingham fabric with dried flowers" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div>
              <span className="font-hand text-xl text-[#3B663B] block mb-1">
                entry 02 • pure washed percale ☁️
              </span>
              <h4 className="font-serif text-2xl text-[#2D1C20] mb-2 font-normal">
                100% Long-Staple Washed Cotton
              </h4>
              <p className="text-xs sm:text-sm text-[#4E624E] leading-relaxed font-sans">
                By partnering directly with family weaving mills in Tamil Nadu, we eliminated intermediary distribution fees. We craft 300 thread count percale in limited editions of 150, enzyme-washed for immediate broken-in comfort.
              </p>
            </div>
          </div>

          {/* Snapshot 3: Pinterest Canvas Tote Package */}
          <div className="relative bg-[#FFF9EE] rounded-3xl border border-[#F5E5C0] p-6 sm:p-8 shadow-[0_8px_30px_rgba(235,215,165,0.15)] flex flex-col sm:flex-row items-center gap-6 sm:gap-8 -rotate-[0.5deg] hover:rotate-0 transition-transform duration-300">
            {/* Washi Tape Strip */}
            <div className="absolute -top-3 left-12 w-28 sm:w-36 h-5 bg-[#FFF2D6]/85 backdrop-blur-xs border border-dashed border-[#ECD39E]/70 rounded-xs shadow-2xs rotate-1 pointer-events-none" />

            <div className="w-full sm:w-56 aspect-square rounded-2xl overflow-hidden border border-amber-100 p-1.5 bg-white shadow-xs shrink-0">
              <img src="/diary_tote_package.jpg" alt="Reusable canvas tote bag with pink gingham bow and lavender on student desk" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div>
              <span className="font-hand text-xl text-[#9B6A1A] block mb-1">
                entry 03 • canvas tote dispatch 🌸
              </span>
              <h4 className="font-serif text-2xl text-[#2D1C20] mb-2 font-normal">
                Direct to Campus Gates
              </h4>
              <p className="text-xs sm:text-sm text-[#6C5632] leading-relaxed font-sans">
                Packaged in our reusable cotton canvas tote bag, each set is dispatched directly to campus gates, hostel reception desks, or student apartments in early October just in time for move-in week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Frequently Asked Questions: Scrapbook Polaroids */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-medium tracking-widest uppercase text-[#A85E5E] font-sans block mb-2">
            Questions & Answers ♡
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#2D1C20] font-normal tracking-tight">
            Common Inquiries
          </h3>
          <p className="text-sm text-[#69464C] mt-2 font-sans">
            Key details regarding sizing, fabric, and preorder fulfillment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {/* FAQ 1 */}
          <div className="relative p-6 sm:p-7 rounded-3xl bg-[#FFF8F9] border border-[#F6D5DC] shadow-[0_6px_25px_rgba(242,175,188,0.12)] -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="absolute -top-3 left-8 w-24 h-4.5 bg-[#FADADD]/80 backdrop-blur-xs border border-dashed border-[#E5A8B4]/60 rounded-xs -rotate-2" />
            <span className="font-hand text-lg text-[#B05063] block mb-1">
              snug cot fit guarantee ♡
            </span>
            <h4 className="font-serif text-base font-normal mb-2 text-[#2D1C20]">
              {quickNotes[0].title}
            </h4>
            <p className="text-xs sm:text-sm text-[#69464C] leading-relaxed font-sans">
              {quickNotes[0].text}
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="relative p-6 sm:p-7 rounded-3xl bg-[#F2F7FB] border border-[#CFDEE7] shadow-[0_6px_25px_rgba(180,205,230,0.12)] rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="absolute -top-3 right-8 w-24 h-4.5 bg-[#DDEBF5]/85 backdrop-blur-xs border border-dashed border-[#B0C8D8]/60 rounded-xs rotate-2" />
            <span className="font-hand text-lg text-[#3A6B88] block mb-1">
              zero synthetic polyester ☁️
            </span>
            <h4 className="font-serif text-base font-normal mb-2 text-[#2D1C20]">
              {quickNotes[1].title}
            </h4>
            <p className="text-xs sm:text-sm text-[#476070] leading-relaxed font-sans">
              {quickNotes[1].text}
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="relative p-6 sm:p-7 rounded-3xl bg-[#F3F8F3] border border-[#D6E6D6] shadow-[0_6px_25px_rgba(180,210,180,0.12)] rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="absolute -top-3 left-8 w-24 h-4.5 bg-[#E2EFE2]/85 backdrop-blur-xs border border-dashed border-[#A8C8A8]/60 rounded-xs rotate-1" />
            <span className="font-hand text-lg text-[#3B663B] block mb-1">
              campus laundry friendly ✨
            </span>
            <h4 className="font-serif text-base font-normal mb-2 text-[#2D1C20]">
              {quickNotes[2].title}
            </h4>
            <p className="text-xs sm:text-sm text-[#4E624E] leading-relaxed font-sans">
              {quickNotes[2].text}
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="relative p-6 sm:p-7 rounded-3xl bg-[#FFF9EE] border border-[#F5E5C0] shadow-[0_6px_25px_rgba(235,215,165,0.12)] -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="absolute -top-3 right-8 w-24 h-4.5 bg-[#FFF2D6]/85 backdrop-blur-xs border border-dashed border-[#ECD39E]/60 rounded-xs -rotate-2" />
            <span className="font-hand text-lg text-[#9B6A1A] block mb-1">
              100% flexible student guarantee 🌸
            </span>
            <h4 className="font-serif text-base font-normal mb-2 text-[#2D1C20]">
              {quickNotes[3].title}
            </h4>
            <p className="text-xs sm:text-sm text-[#6C5632] leading-relaxed font-sans">
              {quickNotes[3].text}
            </p>
          </div>
        </div>
      </section>

      {/* 6. Reservation CTA Card: Scrapbook Card with Consistent Pink Button */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pb-20 text-center">
        <div className="relative bg-[#FFF8F9] rounded-3xl border border-[#F6D5DC] p-8 sm:p-12 shadow-[0_8px_30px_rgba(242,175,188,0.18)]">
          {/* Washi Tape Strip */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-5 bg-[#FADADD]/85 backdrop-blur-xs border border-dashed border-[#E5A8B4]/70 rounded-xs shadow-2xs rotate-1 pointer-events-none" />

          <span className="font-hand text-xl text-[#B05063] block mb-1">
            batch 01 move-in reservation ♡
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#2D1C20] font-normal tracking-tight">
            Reserve Your Bedding Set
          </h3>
          <p className="text-sm text-[#69464C] mt-2 mb-6 max-w-md mx-auto font-sans">
            Batch 01 is strictly limited to 150 sets loomed from 100% long-staple washed cotton percale.
          </p>
          <button
            onClick={scrollToCarousel}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#DD6B80] hover:bg-[#CC5A6F] text-white font-medium text-xs sm:text-sm tracking-wide transition shadow-[0_4px_16px_rgba(221,107,128,0.35)] hover:shadow-[0_6px_22px_rgba(221,107,128,0.45)] hover:-translate-y-0.5 active:scale-95"
          >
            <span>Explore the Collection</span>
            <span className="text-xs">♡</span>
          </button>
        </div>
      </div>

    </div>
  );
};

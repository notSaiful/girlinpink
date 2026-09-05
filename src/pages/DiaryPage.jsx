import React from 'react';

export const DiaryPage = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 animate-in fade-in duration-300">
      
      {/* Scrapbook Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-light border border-rose/20 text-rose-dark text-xs font-hand text-base mb-2">
          <span>page 03 • our diary 📖</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-nearblack font-normal">
          how it started
        </h2>
        <p className="font-hand text-xl text-nearblack/70 mt-1">
          three little snapshots from our hostel journal.
        </p>
      </div>

      {/* 3 Story Snapshots */}
      <div className="space-y-8">
        
        {/* Entry 01 */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-white p-6 sm:p-8 shadow-card relative flex flex-col sm:flex-row items-center gap-6">
          <div className="w-full sm:w-52 aspect-square rounded-2xl overflow-hidden border border-sand shadow-sm shrink-0 bg-cream-dark">
            <img 
              src="/diary_hostel_room.jpg" 
              alt="Cozy student dorm room corner" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-xs font-sans text-rose font-medium uppercase tracking-wider mb-1">
              entry 01 • the cold hostel room
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-nearblack mb-2 font-normal">
              “we hated sleeping on scratchy plastic”
            </h3>
            <p className="font-hand text-xl text-nearblack/80 leading-relaxed">
              moving into our first Bangalore hostel, the iron cots felt cold and depressing. cheap sheets online were sweaty synthetic plastic that slipped off every night. we wanted our bed to feel like a warm, calm sanctuary.
            </p>
          </div>
        </div>

        {/* Entry 02 */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-white p-6 sm:p-8 shadow-card relative flex flex-col sm:flex-row items-center gap-6">
          <div className="w-full sm:w-52 aspect-square rounded-2xl overflow-hidden border border-sand shadow-sm shrink-0 bg-cream-dark">
            <img 
              src="/diary_cotton_loom.jpg" 
              alt="Heritage weaving loom in Tamil Nadu" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-xs font-sans text-sage font-medium uppercase tracking-wider mb-1">
              entry 02 • loomed with love
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-nearblack mb-2 font-normal">
              “pure 100% washed cotton percale”
            </h3>
            <p className="font-hand text-xl text-nearblack/80 leading-relaxed">
              we skipped corporate retail markups and partnered with family looms in Tamil Nadu. woven in small batches of 150 and enzyme-washed twice so it’s broken-in and marshmallow-soft from night one ☁️
            </p>
          </div>
        </div>

        {/* Entry 03 */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-white p-6 sm:p-8 shadow-card relative flex flex-col sm:flex-row items-center gap-6">
          <div className="w-full sm:w-52 aspect-square rounded-2xl overflow-hidden border border-sand shadow-sm shrink-0 bg-cream-dark">
            <img 
              src="/diary_tote_package.jpg" 
              alt="Reusable canvas tote bag packaging" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-xs font-sans text-amber-700 font-medium uppercase tracking-wider mb-1">
              entry 03 • direct to your room gate
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-nearblack mb-2 font-normal">
              “honest student pricing (₹850–₹1,200)”
            </h3>
            <p className="font-hand text-xl text-nearblack/80 leading-relaxed">
              packed into our reusable canvas tote bag tied with a pink ribbon. delivered right to your campus desk before semester begins. pure calm, zero stress ✨
            </p>
          </div>
        </div>

      </div>

      {/* Handwritten Sign-off */}
      <div className="mt-10 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-sand/70 text-center">
        <p className="font-hand text-2xl text-nearblack">
          “you can’t change your hostel walls, but your bed will always be your safe haven ♡”
        </p>
        <p className="font-serif italic text-xs text-muted mt-1">
          Maya & Tara — girlinpink founders
        </p>
      </div>

      {/* Bottom Page Navigation Links */}
      <div className="mt-10 flex items-center justify-between text-xs font-hand text-lg text-nearblack/70">
        <button
          onClick={() => onNavigate('sheets')}
          className="hover:text-rose transition flex items-center gap-1"
        >
          <span>←</span>
          <span>back to the prints</span>
        </button>

        <button
          onClick={() => onNavigate('notes')}
          className="hover:text-rose transition flex items-center gap-1"
        >
          <span>read little notes (Q&A)</span>
          <span>➔</span>
        </button>
      </div>

    </div>
  );
};

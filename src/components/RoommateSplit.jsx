import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { PALETTES } from '../data/products';
import { sounds } from '../utils/soundFx';
import { 
  Users, 
  Sparkles, 
  Check, 
  Copy, 
  Share2, 
  ShoppingBag, 
  Flame, 
  Gift,
  CheckCheck
} from 'lucide-react';

export const RoommateSplit = () => {
  const { addToCart } = useCart();
  const [roommateCount, setRoommateCount] = useState(2);
  const [selectedColors, setSelectedColors] = useState([
    PALETTES[3], // Terracotta for Bed 1
    PALETTES[1], // Midnight for Bed 2
    PALETTES[0], // Charcoal for Bed 3
    PALETTES[2]  // Forest for Bed 4
  ]);
  const [copiedLink, setCopiedLink] = useState(false);

  const discountPercent = roommateCount >= 3 ? 25 : roommateCount === 2 ? 20 : 0;
  const singleKitPrice = 1599;
  const singleOriginalPrice = 2899;

  const totalRawPrice = singleKitPrice * roommateCount;
  const totalOriginalPrice = singleOriginalPrice * roommateCount;
  const discountAmount = Math.round((totalRawPrice * discountPercent) / 100);
  const finalGroupPrice = totalRawPrice - discountAmount;
  const pricePerStudent = Math.round(finalGroupPrice / roommateCount);
  const savingsPerStudent = singleOriginalPrice - pricePerStudent;

  const handleColorChange = (bedIndex, palette) => {
    sounds.playClick();
    const updated = [...selectedColors];
    updated[bedIndex] = palette;
    setSelectedColors(updated);
  };

  const handleCopyInvite = () => {
    sounds.playPop();
    const text = `Yo roomie! Let's get our DORMRIZZ stain-resistant hostel bedkits together so we unlock ${discountPercent}% group discount (only ₹${pricePerStudent} each with free gate delivery)! Link: https://dormrizz.com/split?beds=${roommateCount}`;
    navigator.clipboard.writeText(text);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const handleAddGroupBundle = () => {
    sounds.playChime();
    addToCart({
      productId: `roomie-group-${roommateCount}`,
      title: `${roommateCount}x Roommate Wingman Pack (${discountPercent}% OFF)`,
      colorId: selectedColors[0].id,
      colorName: selectedColors.slice(0, roommateCount).map(c => c.name).join(' + '),
      colorHex: selectedColors[0].hex,
      sizeId: 'hostel-single',
      sizeName: 'Hostel Single Cots (36"×75")',
      tier: 'classic',
      tierName: `${roommateCount}x All-Nighter Classic Kits`,
      addons: ['protector'],
      addonsDetails: [`${roommateCount}x Waterproof Mattress Shields Included`],
      price: finalGroupPrice,
      originalPrice: totalOriginalPrice,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80',
      isCustom: true
    });
  };

  return (
    <section id="roommate-split" className="py-16 md:py-24 bg-dorm-card/40 border-b border-dorm-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>WINGMAN GROUP BUY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Order With Roommates & Save Up to 25%
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Why order alone? Team up with your hostel roommates or wingmates. Pick individual colors for each bed and split the bill effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left: Selector & Live Bed Customization */}
          <div className="lg:col-span-7 bg-dorm-card border border-dorm-border rounded-2xl p-6 shadow-card space-y-6">
            
            {/* Roommate Slider / Count */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase text-dorm-textMuted font-semibold">
                  1. How Many Beds In Your Room?
                </span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800 font-mono">
                  {discountPercent}% Group Discount
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map(count => (
                  <button
                    key={count}
                    onClick={() => setRoommateCount(count)}
                    className={`py-3 rounded-xl border font-mono font-bold text-sm transition ${
                      roommateCount === count
                        ? 'border-emerald-500 bg-emerald-950/40 text-emerald-300 ring-1 ring-emerald-500 shadow-md'
                        : 'border-dorm-border bg-dorm-bg/60 text-slate-400 hover:text-white'
                    }`}
                  >
                    {count} {count === 1 ? 'Bed' : 'Beds'}
                  </button>
                ))}
              </div>
            </div>

            {/* Individual Color Picker for Each Roommate */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase text-dorm-textMuted font-semibold block">
                2. Pick Color for Each Roommate:
              </span>

              <div className="space-y-2.5">
                {[...Array(roommateCount)].map((_, idx) => (
                  <div key={idx} className="p-3 bg-dorm-bg/70 border border-dorm-border rounded-xl flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-4 h-4 rounded-full border border-white/30" 
                        style={{ backgroundColor: selectedColors[idx].hex }}
                      />
                      <span className="text-xs font-bold text-white">
                        Bed {idx + 1} ({idx === 0 ? 'You' : `Roomie ${idx}`}):
                      </span>
                      <span className="text-xs text-orange-400 font-medium">
                        {selectedColors[idx].name}
                      </span>
                    </div>

                    <div className="flex gap-1.5">
                      {PALETTES.map(pal => (
                        <button
                          key={pal.id}
                          onClick={() => handleColorChange(idx, pal)}
                          className={`w-6 h-6 rounded-md border transition ${
                            selectedColors[idx].id === pal.id ? 'ring-2 ring-emerald-400 scale-110' : 'opacity-60 hover:opacity-100'
                          }`}
                          style={{ backgroundColor: pal.hex, borderColor: pal.borderHex }}
                          title={pal.name}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Share link tool */}
            <div className="p-3.5 bg-dorm-bg/50 border border-dorm-border rounded-xl flex items-center justify-between gap-2 text-xs">
              <div className="text-slate-300 truncate">
                <span className="font-semibold text-white">Share with Wing/Hostel Group:</span>
                <span className="block text-[11px] text-slate-400 truncate">dormcozy.in/group-buy?beds={roommateCount}</span>
              </div>

              <button
                onClick={handleCopyInvite}
                className="px-3 py-1.5 rounded-lg bg-dorm-card hover:bg-dorm-cardHover border border-slate-600 text-xs font-semibold text-slate-200 flex items-center gap-1.5 shrink-0 transition"
              >
                {copiedLink ? (
                  <>
                    <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right: Group Price Calculation & CTA */}
          <div className="lg:col-span-5 bg-gradient-to-br from-dorm-card to-dorm-cardHover border border-emerald-500/40 rounded-2xl p-6 shadow-2xl space-y-5">
            
            <div className="flex items-center justify-between border-b border-dorm-border pb-3">
              <div className="text-xs font-mono uppercase text-emerald-400 font-bold">
                Wingman Split Summary
              </div>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono font-bold">
                {roommateCount} Bedkits Bundle
              </span>
            </div>

            {/* Big Per Person Cost Callout */}
            <div className="text-center p-4 rounded-xl bg-black/40 border border-emerald-500/20 space-y-1">
              <span className="text-xs text-dorm-textMuted uppercase font-mono tracking-wider">
                Cost Per Student:
              </span>
              <div className="text-4xl font-extrabold text-emerald-400 font-mono">
                ₹{pricePerStudent}
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Regular Individual Price: <span className="line-through">₹{singleOriginalPrice}</span>
              </div>
              <div className="text-xs font-bold text-amber-300 pt-1">
                🔥 You each save ₹{savingsPerStudent}!
              </div>
            </div>

            {/* Total breakdown */}
            <div className="space-y-2 text-xs text-slate-300 border-b border-dorm-border pb-3">
              <div className="flex justify-between">
                <span className="text-dorm-textMuted">Individual Total ({roommateCount}x Kits):</span>
                <span className="font-mono line-through text-slate-500">₹{totalOriginalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dorm-textMuted">Roomie Bulk Discount ({discountPercent}%):</span>
                <span className="font-mono text-emerald-400 font-bold">-₹{discountAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dorm-textMuted">Hostel Gate Express Delivery:</span>
                <span className="font-mono text-emerald-400 font-bold">FREE (₹0)</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-dorm-border/60">
                <span>Total for Entire Room:</span>
                <span className="font-mono text-base text-emerald-400">₹{finalGroupPrice}</span>
              </div>
            </div>

            {/* Add Group Bundle to Cart CTA */}
            <button
              onClick={handleAddGroupBundle}
              className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-glow flex items-center justify-center gap-2 transition transform active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Claim {roommateCount}-Bed Wingman Pack (₹{finalGroupPrice})</span>
            </button>

            <div className="text-center text-[11px] text-slate-400">
              ⚡ Delivered in 1 collective package directly to your hostel room / PG reception.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

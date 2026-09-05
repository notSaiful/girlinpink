import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CURATED_PRODUCTS, PALETTES } from '../data/products';
import { sounds } from '../utils/soundFx';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  Check, 
  RotateCcw, 
  GraduationCap, 
  Flame, 
  Droplets,
  Layers
} from 'lucide-react';

export const QuizModal = () => {
  const { activeModal, setActiveModal, addToCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    stayType: 'hostel',
    habit: 'maggi',
    climate: 'moderate'
  });

  if (activeModal !== 'quiz') return null;

  const handleSelectOption = (key, value) => {
    sounds.playClick();
    setAnswers(prev => ({ ...prev, [key]: value }));
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    } else {
      sounds.playChime();
      setCurrentStep(4); // Result step
    }
  };

  // Determine recommendation
  let recommendedProduct = CURATED_PRODUCTS[0]; // Maggi master by default
  if (answers.habit === 'coding') {
    recommendedProduct = CURATED_PRODUCTS[1]; // Midnight coder
  } else if (answers.climate === 'hot' || answers.habit === 'clean') {
    recommendedProduct = CURATED_PRODUCTS[3]; // Forest moss
  } else if (answers.stayType === 'flat') {
    recommendedProduct = CURATED_PRODUCTS[5]; // Flat grad luxury
  }

  const palette = PALETTES.find(p => p.id === recommendedProduct.colorId) || PALETTES[0];

  const handleClaimQuizKit = () => {
    sounds.playPop();
    addToCart({
      productId: recommendedProduct.id,
      title: recommendedProduct.title,
      colorId: recommendedProduct.colorId,
      colorName: palette.name,
      colorHex: palette.hex,
      sizeId: recommendedProduct.sizeId,
      sizeName: recommendedProduct.sizeId === 'hostel-single' ? 'Hostel Single Cot (36"×75")' : recommendedProduct.sizeId,
      tier: recommendedProduct.tier,
      tierName: 'All-Nighter Classic Kit',
      addons: ['protector'],
      addonsDetails: ['Waterproof Mattress Shield'],
      price: recommendedProduct.price + 399,
      originalPrice: recommendedProduct.originalPrice + 699,
      quantity: 1,
      image: recommendedProduct.images[0],
      isCustom: false
    });
    setActiveModal(null);
  };

  const handleResetQuiz = () => {
    setCurrentStep(1);
    setAnswers({
      stayType: 'hostel',
      habit: 'maggi',
      climate: 'moderate'
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-dorm-card border border-dorm-border rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={() => setActiveModal(null)}
          className="absolute top-4 right-4 p-2 rounded-full bg-dorm-bg text-slate-400 hover:text-white border border-dorm-border"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Quiz Step 1 */}
        {currentStep === 1 && (
          <div className="space-y-5 animate-in fade-in-50 duration-200">
            <div className="flex items-center gap-2 text-xs font-mono text-orange-400">
              <Sparkles className="w-4 h-4" />
              <span>QUESTION 1 OF 3</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Where are you moving into this semester?
            </h2>

            <div className="space-y-2.5 pt-2">
              <button
                onClick={() => handleSelectOption('stayType', 'hostel')}
                className="w-full p-4 rounded-xl border border-dorm-border bg-dorm-bg/60 hover:bg-dorm-bg hover:border-orange-500 text-left transition group"
              >
                <div className="font-bold text-sm text-white group-hover:text-dorm-accent flex items-center justify-between">
                  <span>🏢 College Hostel (Single Cot or Bunk Bed)</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition text-dorm-accent" />
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Narrow iron/wooden cots that need 360° tight elastic to prevent untucking.
                </p>
              </button>

              <button
                onClick={() => handleSelectOption('stayType', 'pg')}
                className="w-full p-4 rounded-xl border border-dorm-border bg-dorm-bg/60 hover:bg-dorm-bg hover:border-orange-500 text-left transition group"
              >
                <div className="font-bold text-sm text-white group-hover:text-dorm-accent flex items-center justify-between">
                  <span>🏡 Managed PG (Stanza, Zolo, Oxfordcaps, etc.)</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition text-dorm-accent" />
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Single wide or twin beds with springy foam mattresses.
                </p>
              </button>

              <button
                onClick={() => handleSelectOption('stayType', 'flat')}
                className="w-full p-4 rounded-xl border border-dorm-border bg-dorm-bg/60 hover:bg-dorm-bg hover:border-orange-500 text-left transition group"
              >
                <div className="font-bold text-sm text-white group-hover:text-dorm-accent flex items-center justify-between">
                  <span>🏙️ Shared Flat / 1BHK / Apartment</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition text-dorm-accent" />
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Queen / Double sized mattress looking for studio aesthetics.
                </p>
              </button>
            </div>
          </div>
        )}

        {/* Quiz Step 2 */}
        {currentStep === 2 && (
          <div className="space-y-5 animate-in fade-in-50 duration-200">
            <div className="flex items-center gap-2 text-xs font-mono text-orange-400">
              <Sparkles className="w-4 h-4" />
              <span>QUESTION 2 OF 3</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              What is your typical midnight room routine?
            </h2>

            <div className="space-y-2.5 pt-2">
              <button
                onClick={() => handleSelectOption('habit', 'maggi')}
                className="w-full p-4 rounded-xl border border-dorm-border bg-dorm-bg/60 hover:bg-dorm-bg hover:border-orange-500 text-left transition group"
              >
                <div className="font-bold text-sm text-white group-hover:text-dorm-accent flex items-center justify-between">
                  <span>🍜 3 AM Maggi, tea & midnight snacking in bed</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition text-dorm-accent" />
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  High risk of spills! Needs maximum oleophobic turmeric & oil resistance.
                </p>
              </button>

              <button
                onClick={() => handleSelectOption('habit', 'coding')}
                className="w-full p-4 rounded-xl border border-dorm-border bg-dorm-bg/60 hover:bg-dorm-bg hover:border-orange-500 text-left transition group"
              >
                <div className="font-bold text-sm text-white group-hover:text-dorm-accent flex items-center justify-between">
                  <span>💻 All-nighter coding, gaming & laptop grinds</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition text-dorm-accent" />
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Needs dark deep focus palette that is easy on the eyes and hides pen marks.
                </p>
              </button>

              <button
                onClick={() => handleSelectOption('habit', 'clean')}
                className="w-full p-4 rounded-xl border border-dorm-border bg-dorm-bg/60 hover:bg-dorm-bg hover:border-orange-500 text-left transition group"
              >
                <div className="font-bold text-sm text-white group-hover:text-dorm-accent flex items-center justify-between">
                  <span>🧘 Clean, minimalist & peaceful sleep</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition text-dorm-accent" />
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Needs ultra-breathable bio-weave with tranquil forest/slate tones.
                </p>
              </button>
            </div>
          </div>
        )}

        {/* Quiz Step 3 */}
        {currentStep === 3 && (
          <div className="space-y-5 animate-in fade-in-50 duration-200">
            <div className="flex items-center gap-2 text-xs font-mono text-orange-400">
              <Sparkles className="w-4 h-4" />
              <span>QUESTION 3 OF 3</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              How is the climate in your campus city?
            </h2>

            <div className="space-y-2.5 pt-2">
              <button
                onClick={() => handleSelectOption('climate', 'hot')}
                className="w-full p-4 rounded-xl border border-dorm-border bg-dorm-bg/60 hover:bg-dorm-bg hover:border-orange-500 text-left transition group"
              >
                <div className="font-bold text-sm text-white group-hover:text-dorm-accent flex items-center justify-between">
                  <span>☀️ Hot & Humid (Fan-only hostel room)</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition text-dorm-accent" />
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Needs lightweight, micro-porous breathable weave that stays cool.
                </p>
              </button>

              <button
                onClick={() => handleSelectOption('climate', 'cold')}
                className="w-full p-4 rounded-xl border border-dorm-border bg-dorm-bg/60 hover:bg-dorm-bg hover:border-orange-500 text-left transition group"
              >
                <div className="font-bold text-sm text-white group-hover:text-dorm-accent flex items-center justify-between">
                  <span>❄️ Chilly Campus / 24/7 Heavy AC</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition text-dorm-accent" />
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Needs 240 GSM all-season cloud comforter to keep you cozy.
                </p>
              </button>

              <button
                onClick={() => handleSelectOption('climate', 'moderate')}
                className="w-full p-4 rounded-xl border border-dorm-border bg-dorm-bg/60 hover:bg-dorm-bg hover:border-orange-500 text-left transition group"
              >
                <div className="font-bold text-sm text-white group-hover:text-dorm-accent flex items-center justify-between">
                  <span>🌤️ Balanced / All-Year Moderate</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition text-dorm-accent" />
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  All-around classic kit with versatile all-weather blanket.
                </p>
              </button>
            </div>
          </div>
        )}

        {/* Quiz Result Screen */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-in zoom-in-95 duration-200">
            <div className="text-center">
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-full font-bold">
                ✓ 99.2% MATTRESS & LIFESTYLE MATCH
              </span>
              <h2 className="text-2xl font-extrabold text-white mt-2">
                Your Ideal Hostel Bedkit:
              </h2>
            </div>

            {/* Recommended Kit Card */}
            <div className="p-5 rounded-2xl bg-dorm-bg border border-orange-500/40 flex flex-col sm:flex-row gap-5 items-center">
              <img
                src={recommendedProduct.images[0]}
                alt={recommendedProduct.title}
                className="w-full sm:w-40 h-36 rounded-xl object-cover border border-dorm-border"
              />

              <div className="space-y-2 flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="font-bold text-base text-white">{recommendedProduct.title}</span>
                  <span className="w-3 h-3 rounded-full border border-white/40" style={{ backgroundColor: palette.hex }} />
                </div>
                <p className="text-xs text-slate-300">
                  {recommendedProduct.subtitle}
                </p>
                <div className="text-xs text-emerald-400 font-mono">
                  Includes: Fitted Sheet + 2x Pillowcases + Cloud Comforter + Waterproof Shield
                </div>
                <div className="flex items-baseline justify-center sm:justify-start gap-2 pt-1">
                  <span className="text-xl font-bold text-white font-mono">
                    ₹{recommendedProduct.price + 399}
                  </span>
                  <span className="text-xs text-slate-500 line-through font-mono">
                    ₹{recommendedProduct.originalPrice + 699}
                  </span>
                  <span className="text-[11px] text-orange-400 font-bold">
                    (15% Student Code Included)
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={handleClaimQuizKit}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-extrabold text-sm shadow-glow flex items-center justify-center gap-2 transition"
              >
                <Sparkles className="w-4 h-4" />
                <span>Claim Recommended Bedkit Pack</span>
              </button>

              <button
                onClick={handleResetQuiz}
                className="w-full py-2 text-xs text-slate-400 hover:text-white flex items-center justify-center gap-1"
              >
                <RotateCcw className="w-3 h-3" /> Retake Quiz
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

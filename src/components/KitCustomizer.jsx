import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { PALETTES, BED_SIZES, KIT_TIERS, ADDONS } from '../data/products';
import { sounds } from '../utils/soundFx';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Check, 
  Plus, 
  ShieldCheck, 
  ShoppingBag, 
  Flame, 
  Sliders, 
  ArrowRight, 
  Star,
  Info,
  Layers,
  Pocket,
  Cloud,
  Zap
} from 'lucide-react';

export const KitCustomizer = () => {
  const { addToCart } = useCart();

  const [activeStep, setActiveStep] = useState(1);
  const [selectedSize, setSelectedSize] = useState(BED_SIZES[0]);
  const [selectedPalette, setSelectedPalette] = useState(PALETTES[3]); // Terracotta default
  const [selectedTier, setSelectedTier] = useState(KIT_TIERS[1]); // Classic default
  const [selectedAddons, setSelectedAddons] = useState(['protector']); // Default essential protector

  const handleStepChange = (stepNum) => {
    sounds.playClick();
    setActiveStep(stepNum);
  };

  const toggleAddon = (addonId) => {
    sounds.playClick();
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId) 
        : [...prev, addonId]
    );
  };

  // Price Calculation
  const baseTierPrice = Math.round(selectedTier.basePrice * selectedSize.priceMultiplier);
  const originalTierPrice = Math.round(selectedTier.originalPrice * selectedSize.priceMultiplier);
  
  const addonsCost = selectedAddons.reduce((sum, addonId) => {
    const addon = ADDONS.find(a => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const addonsOriginalCost = selectedAddons.reduce((sum, addonId) => {
    const addon = ADDONS.find(a => a.id === addonId);
    return sum + (addon ? addon.originalPrice : 0);
  }, 0);

  const totalPrice = baseTierPrice + addonsCost;
  const totalOriginalPrice = originalTierPrice + addonsOriginalCost;
  const totalSavings = totalOriginalPrice - totalPrice;

  const handleAddCustomKit = () => {
    sounds.playChime();
    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (e) {
      console.log(e);
    }

    const addonNames = selectedAddons.map(id => {
      const a = ADDONS.find(item => item.id === id);
      return a ? a.name : id;
    });

    addToCart({
      productId: `custom-kit-${selectedPalette.id}-${selectedTier.id}`,
      title: `Custom ${selectedTier.name} (${selectedPalette.name})`,
      colorId: selectedPalette.id,
      colorName: selectedPalette.name,
      colorHex: selectedPalette.hex,
      sizeId: selectedSize.id,
      sizeName: `${selectedSize.name} (${selectedSize.dimensions})`,
      tier: selectedTier.id,
      tierName: selectedTier.name,
      addons: selectedAddons,
      addonsDetails: addonNames,
      price: totalPrice,
      originalPrice: totalOriginalPrice,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80',
      isCustom: true
    });
  };

  const getAddonIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case 'Pocket': return <Pocket className="w-4 h-4 text-orange-400" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-blue-400" />;
      case 'Zap': return <Zap className="w-4 h-4 text-amber-400" />;
      case 'Layers': return <Layers className="w-4 h-4 text-purple-400" />;
      default: return <Sparkles className="w-4 h-4 text-orange-400" />;
    }
  };

  return (
    <section id="customizer" className="py-16 md:py-24 border-b border-dorm-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-semibold mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>KIT BUILDER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Build Your Custom PG Bedkit
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Configure your cot dimensions, aesthetic colorway, blanket tier, and hostel survival add-ons in 4 easy steps.
          </p>
        </div>

        {/* Step Tabs Navigation */}
        <div className="flex items-center justify-between max-w-3xl mx-auto mb-8 bg-dorm-card p-1.5 rounded-xl border border-dorm-border">
          {[
            { num: 1, label: '1. Bed / Cot Size' },
            { num: 2, label: '2. Deep Work Palette' },
            { num: 3, label: '3. Kit Tier' },
            { num: 4, label: '4. Add-Ons' }
          ].map(step => (
            <button
              key={step.num}
              onClick={() => setActiveStep(step.num)}
              className={`flex-1 py-2.5 px-2 rounded-lg text-xs sm:text-sm font-semibold transition text-center truncate ${
                activeStep === step.num
                  ? 'bg-dorm-accent text-white shadow-glow'
                  : 'text-dorm-textMuted hover:text-white hover:bg-dorm-cardHover'
              }`}
            >
              {step.label}
            </button>
          ))}
        </div>

        {/* Builder Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Center: Step Configuration Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* STEP 1: Bed Size Selection */}
            {activeStep === 1 && (
              <div className="bg-dorm-card border border-dorm-border rounded-2xl p-6 shadow-card space-y-4 animate-in fade-in-50 duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">Step 1: Choose Your Cot or Bed Size</h3>
                    <p className="text-xs text-dorm-textMuted mt-0.5">
                      All sizes feature 360° high-tension elastic to stay locked on springy & wooden cots.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {BED_SIZES.map((size) => {
                    const isSelected = selectedSize.id === size.id;
                    return (
                      <button
                        key={size.id}
                        onClick={() => setSelectedSize(size)}
                        className={`p-4 rounded-xl border text-left transition-all relative ${
                          isSelected
                            ? 'border-orange-500 bg-orange-500/10 ring-1 ring-orange-500 shadow-md'
                            : 'border-dorm-border bg-dorm-bg/60 hover:bg-dorm-bg hover:border-slate-600'
                        }`}
                      >
                        {size.recommended && (
                          <span className="absolute top-3 right-3 text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded">
                            Hostel Standard
                          </span>
                        )}
                        <div className="font-bold text-sm text-white">{size.name}</div>
                        <div className="text-xs font-mono text-dorm-accent font-semibold mt-0.5">
                          {size.dimensions}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-2 line-clamp-2">
                          {size.idealFor}
                        </div>
                        <div className="mt-2 text-[10px] text-slate-500 font-mono">
                          {size.thickness}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setActiveStep(2)}
                    className="px-6 py-2.5 rounded-xl bg-dorm-accent hover:bg-dorm-accentHover text-white text-xs font-bold flex items-center gap-1.5 transition"
                  >
                    <span>Next: Select Color</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Color Palette Selection */}
            {activeStep === 2 && (
              <div className="bg-dorm-card border border-dorm-border rounded-2xl p-6 shadow-card space-y-4 animate-in fade-in-50 duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">Step 2: Pick Your Deep Work Palette</h3>
                    <p className="text-xs text-dorm-textMuted mt-0.5">
                      Moody, glare-free aesthetic colors engineered to mask dust, pen ink & food spills.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {PALETTES.map((pal) => {
                    const isSelected = selectedPalette.id === pal.id;
                    return (
                      <button
                        key={pal.id}
                        onClick={() => setSelectedPalette(pal)}
                        className={`p-4 rounded-xl border text-left flex items-start gap-3.5 transition-all relative ${
                          isSelected
                            ? 'border-orange-500 bg-orange-500/10 ring-1 ring-orange-500 shadow-md'
                            : 'border-dorm-border bg-dorm-bg/60 hover:bg-dorm-bg hover:border-slate-600'
                        }`}
                      >
                        <div 
                          className="w-10 h-10 rounded-xl border shadow-sm shrink-0 mt-0.5 flex items-center justify-center"
                          style={{ 
                            backgroundColor: pal.hex,
                            borderColor: pal.borderHex 
                          }}
                        >
                          {isSelected && <Check className="w-5 h-5 text-white drop-shadow" />}
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-sm text-white">{pal.name}</span>
                            <span className="text-[10px] font-mono text-orange-400 bg-orange-500/10 px-1.5 py-0.2 rounded">
                              {pal.badge}
                            </span>
                          </div>
                          <div className="text-xs text-amber-300/90 font-medium mt-0.5">
                            {pal.subtitle}
                          </div>
                          <p className="text-[11px] text-slate-400 mt-1">
                            {pal.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setActiveStep(1)}
                    className="px-4 py-2 rounded-lg bg-dorm-bg border border-dorm-border text-xs text-slate-300 hover:text-white"
                  >
                    Back to Size
                  </button>
                  <button
                    onClick={() => setActiveStep(3)}
                    className="px-6 py-2.5 rounded-xl bg-dorm-accent hover:bg-dorm-accentHover text-white text-xs font-bold flex items-center gap-1.5 transition"
                  >
                    <span>Next: Choose Tier</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Kit Tier Selection */}
            {activeStep === 3 && (
              <div className="bg-dorm-card border border-dorm-border rounded-2xl p-6 shadow-card space-y-4 animate-in fade-in-50 duration-200">
                <div>
                  <h3 className="text-lg font-bold text-white">Step 3: Choose Your Kit Bundle Tier</h3>
                  <p className="text-xs text-dorm-textMuted mt-0.5">
                    Save up to 47% compared to buying fitted sheet, pillowcases and comforter separately.
                  </p>
                </div>

                <div className="space-y-3 pt-1">
                  {KIT_TIERS.map((tier) => {
                    const isSelected = selectedTier.id === tier.id;
                    const tierPrice = Math.round(tier.basePrice * selectedSize.priceMultiplier);
                    const origPrice = Math.round(tier.originalPrice * selectedSize.priceMultiplier);

                    return (
                      <button
                        key={tier.id}
                        onClick={() => setSelectedTier(tier)}
                        className={`w-full p-4 rounded-xl border text-left transition-all relative ${
                          isSelected
                            ? 'border-orange-500 bg-orange-500/10 ring-1 ring-orange-500 shadow-md'
                            : 'border-dorm-border bg-dorm-bg/60 hover:bg-dorm-bg hover:border-slate-600'
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-white">{tier.name}</span>
                            {tier.popular && (
                              <span className="text-[10px] font-bold bg-orange-500 text-white px-2 py-0.5 rounded-full">
                                #1 Student Choice
                              </span>
                            )}
                            {tier.bestValue && (
                              <span className="text-[10px] font-bold bg-emerald-500 text-white px-2 py-0.5 rounded-full">
                                Ultimate Bunker Value
                              </span>
                            )}
                          </div>

                          <div className="text-right">
                            <span className="font-bold font-mono text-base text-white">
                              ₹{tierPrice}
                            </span>
                            <span className="text-xs text-slate-500 line-through ml-1.5 font-mono">
                              ₹{origPrice}
                            </span>
                          </div>
                        </div>

                        <div className="text-xs text-amber-300/80 font-medium mt-0.5">
                          {tier.tagline}
                        </div>

                        {/* List of included items */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-3 pt-3 border-t border-dorm-border/60">
                          {tier.includes.map((inc, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300">
                              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span>{inc}</span>
                            </div>
                          ))}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setActiveStep(2)}
                    className="px-4 py-2 rounded-lg bg-dorm-bg border border-dorm-border text-xs text-slate-300 hover:text-white"
                  >
                    Back to Color
                  </button>
                  <button
                    onClick={() => setActiveStep(4)}
                    className="px-6 py-2.5 rounded-xl bg-dorm-accent hover:bg-dorm-accentHover text-white text-xs font-bold flex items-center gap-1.5 transition"
                  >
                    <span>Next: Add-ons</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Add-Ons Selection */}
            {activeStep === 4 && (
              <div className="bg-dorm-card border border-dorm-border rounded-2xl p-6 shadow-card space-y-4 animate-in fade-in-50 duration-200">
                <div>
                  <h3 className="text-lg font-bold text-white">Step 4: Essential Hostel Add-Ons</h3>
                  <p className="text-xs text-dorm-textMuted mt-0.5">
                    Upgrade your room setup with heavy-duty student survival accessories at bundle discount rates.
                  </p>
                </div>

                <div className="space-y-2.5 pt-1">
                  {ADDONS.map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-3.5 rounded-xl border text-left flex items-center justify-between gap-3 cursor-pointer transition ${
                          isChecked
                            ? 'border-orange-500 bg-orange-500/10 ring-1 ring-orange-500'
                            : 'border-dorm-border bg-dorm-bg/60 hover:bg-dorm-bg hover:border-slate-600'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition ${
                            isChecked 
                              ? 'bg-dorm-accent border-dorm-accent text-white' 
                              : 'border-slate-600 bg-dorm-bg'
                          }`}>
                            {isChecked && <Check className="w-3.5 h-3.5" />}
                          </div>

                          <div className="p-2 rounded-lg bg-dorm-bg border border-dorm-border shrink-0">
                            {getAddonIcon(addon.icon)}
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-xs sm:text-sm text-white">{addon.name}</span>
                              <span className="text-[10px] font-semibold bg-slate-800 text-slate-300 px-1.5 py-0.2 rounded">
                                {addon.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400 mt-0.5 max-w-md">
                              {addon.description}
                            </p>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <div className="font-bold font-mono text-sm text-orange-400">
                            +₹{addon.price}
                          </div>
                          <div className="text-[10px] text-slate-500 line-through font-mono">
                            ₹{addon.originalPrice}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setActiveStep(3)}
                    className="px-4 py-2 rounded-lg bg-dorm-bg border border-dorm-border text-xs text-slate-300 hover:text-white"
                  >
                    Back to Tier
                  </button>
                  <span className="text-xs text-emerald-400 font-medium">
                    ✓ Configuration Complete
                  </span>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Live Bed Preview & Summary Checkout Box */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Live Custom Bed Display Card */}
            <div className="bg-dorm-card border border-dorm-border rounded-2xl p-5 shadow-card space-y-4">
              
              <div className="flex items-center justify-between border-b border-dorm-border pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedPalette.hex }} />
                  <span className="font-bold text-sm text-white font-mono">{selectedPalette.name} Custom Kit</span>
                </div>
                <span className="text-xs font-mono text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded">
                  {selectedSize.dimensions}
                </span>
              </div>

              {/* Graphical Simulated Bed Box */}
              <div 
                className="h-56 rounded-xl p-4 flex flex-col justify-between transition-colors duration-300 relative overflow-hidden border shadow-inner"
                style={{ 
                  backgroundColor: selectedPalette.hex,
                  borderColor: selectedPalette.borderHex 
                }}
              >
                {/* Woven Fabric grid background */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

                {/* Pillows count based on tier */}
                <div className="relative z-10 flex justify-center gap-2 pt-1">
                  <div 
                    className="w-20 h-11 rounded-lg border shadow flex items-center justify-center text-[9px] font-mono text-white/70 backdrop-blur-sm"
                    style={{ borderColor: selectedPalette.borderHex, backgroundColor: 'rgba(255,255,255,0.08)' }}
                  >
                    Pillow 1
                  </div>
                  {selectedTier.id !== 'starter' && (
                    <div 
                      className="w-20 h-11 rounded-lg border shadow flex items-center justify-center text-[9px] font-mono text-white/70 backdrop-blur-sm"
                      style={{ borderColor: selectedPalette.borderHex, backgroundColor: 'rgba(255,255,255,0.08)' }}
                    >
                      Pillow 2
                    </div>
                  )}
                </div>

                {/* Comforter Visual if Classic or Pro */}
                <div className="relative z-10 mx-auto w-full max-w-[240px]">
                  {selectedTier.id !== 'starter' ? (
                    <div 
                      className="rounded-lg p-2.5 border shadow backdrop-blur-md text-center"
                      style={{ 
                        backgroundColor: 'rgba(15, 17, 23, 0.7)',
                        borderColor: selectedPalette.borderHex 
                      }}
                    >
                      <div className="text-[11px] font-bold text-white flex items-center justify-center gap-1">
                        <Cloud className="w-3 h-3 text-orange-400" />
                        All-Season Comforter / Blanket
                      </div>
                      <div className="text-[10px] text-slate-300 font-mono mt-0.5">
                        220 GSM Cloud Polyfill
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-[11px] font-mono text-white/50 bg-black/30 py-1 rounded">
                      Starter Fitted Sheet Only
                    </div>
                  )}
                </div>

                {/* Bottom Addons Indicators */}
                <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-300 bg-black/50 p-1.5 rounded backdrop-blur-sm">
                  <span>{selectedTier.name}</span>
                  <span className="text-emerald-400 font-bold">
                    {selectedAddons.length} Add-ons Active
                  </span>
                </div>
              </div>

              {/* Configuration Breakdown List */}
              <div className="space-y-1.5 text-xs text-slate-300 border-b border-dorm-border pb-3">
                <div className="flex justify-between">
                  <span className="text-dorm-textMuted">Size:</span>
                  <span className="font-semibold text-white">{selectedSize.name} ({selectedSize.dimensions})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dorm-textMuted">Colorway:</span>
                  <span className="font-semibold text-white">{selectedPalette.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dorm-textMuted">Tier:</span>
                  <span className="font-semibold text-white">{selectedTier.name}</span>
                </div>
                {selectedAddons.length > 0 && (
                  <div className="flex justify-between">
                    <span className="text-dorm-textMuted">Add-ons:</span>
                    <span className="font-semibold text-orange-400">
                      {selectedAddons.map(id => ADDONS.find(a => a.id === id)?.name).join(', ')}
                    </span>
                  </div>
                )}
              </div>

              {/* Price Calculation Box */}
              <div className="space-y-2 pt-1">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-dorm-textMuted block">Custom Bundle Total:</span>
                    <span className="text-2xl font-extrabold text-white font-mono">
                      ₹{totalPrice}
                    </span>
                    <span className="text-xs text-slate-500 line-through ml-2 font-mono">
                      ₹{totalOriginalPrice}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded font-mono">
                      SAVE ₹{totalSavings}
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-dorm-textMuted flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Apply code <strong className="text-white font-mono">STUDENT15</strong> at checkout for extra 15% off!
                </p>
              </div>

              {/* Main CTA Button */}
              <button
                onClick={handleAddCustomKit}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-extrabold text-sm shadow-glow flex items-center justify-center gap-2 transition transform active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add Custom Bedkit to Cart (₹{totalPrice})</span>
              </button>

              <div className="text-center">
                <span className="text-[11px] text-slate-400">
                  🚚 Free Day-1 Hostel Gate Delivery Included
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

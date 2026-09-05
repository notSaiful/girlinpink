import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { PALETTES, BED_SIZES } from '../data/products';
import { sounds } from '../utils/soundFx';
import { 
  X, 
  Star, 
  Check, 
  ShieldCheck, 
  ShoppingBag, 
  Droplets, 
  Layers, 
  Sparkles, 
  Wind, 
  ArrowRight,
  Info
} from 'lucide-react';

export const ProductModal = () => {
  const { 
    activeModal, 
    setActiveModal, 
    selectedProductForModal, 
    addToCart 
  } = useCart();

  if (activeModal !== 'product' || !selectedProductForModal) return null;

  const product = selectedProductForModal;
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(
    PALETTES.find(p => p.id === product.colorId) || PALETTES[0]
  );
  const [selectedSize, setSelectedSize] = useState(
    BED_SIZES.find(s => s.id === product.sizeId) || BED_SIZES[0]
  );

  const handleAddToCart = () => {
    sounds.playPop();
    addToCart({
      productId: product.id,
      title: product.title,
      colorId: selectedColor.id,
      colorName: selectedColor.name,
      colorHex: selectedColor.hex,
      sizeId: selectedSize.id,
      sizeName: `${selectedSize.name} (${selectedSize.dimensions})`,
      tier: product.tier || 'standard',
      tierName: product.category === 'kits' ? (product.tier === 'classic' ? 'All-Nighter Classic Kit' : 'The Grad Pro Kit') : product.title,
      addons: [],
      addonsDetails: [],
      price: product.price,
      originalPrice: product.originalPrice,
      quantity: 1,
      image: selectedImage,
      isCustom: false
    });
    setActiveModal(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-dorm-card border border-dorm-border rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Close Button */}
        <button
          onClick={() => setActiveModal(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-dorm-bg/80 hover:bg-dorm-bg text-slate-300 hover:text-white border border-dorm-border transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Gallery on Left */}
            <div className="md:col-span-6 space-y-3">
              <div className="relative h-72 sm:h-80 rounded-xl overflow-hidden bg-dorm-bg border border-dorm-border">
                <img
                  src={selectedImage}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-xs text-white font-mono flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>StainShield™ Verified</span>
                </div>
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`relative w-20 h-16 rounded-lg overflow-hidden border transition ${
                        selectedImage === img ? 'border-dorm-accent ring-2 ring-dorm-accent' : 'border-dorm-border opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Material Tech Box */}
              <div className="bg-dorm-bg/80 border border-dorm-border rounded-xl p-4 space-y-2 text-xs">
                <div className="font-bold text-white flex items-center gap-1.5 text-xs">
                  <Layers className="w-4 h-4 text-orange-400" />
                  <span>Fabric & Durability Specifications</span>
                </div>
                <div className="space-y-1.5 text-slate-300 text-[11px]">
                  <div><strong className="text-slate-200">Weave:</strong> {product.specs.fabric}</div>
                  <div><strong className="text-slate-200">Thermal Loft:</strong> {product.specs.fill}</div>
                  <div><strong className="text-slate-200">Hostel Laundry:</strong> {product.specs.wash}</div>
                  <div><strong className="text-slate-200">Coverage:</strong> {product.specs.warranty}</div>
                </div>
              </div>
            </div>

            {/* Product Details & Selection on Right */}
            <div className="md:col-span-6 space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs text-amber-400 mb-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-slate-200">{product.rating}</span>
                  <span className="text-dorm-textMuted">({product.reviewsCount} student reviews)</span>
                </div>

                <h2 className="text-2xl font-bold text-white">{product.title}</h2>
                <p className="text-xs text-slate-300 mt-1">{product.subtitle}</p>
              </div>

              {/* Price Row */}
              <div className="flex items-baseline gap-3 p-3 bg-dorm-bg/50 rounded-xl border border-dorm-border">
                <span className="text-3xl font-extrabold text-white font-mono">
                  ₹{product.price}
                </span>
                <span className="text-sm text-slate-500 line-through font-mono">
                  ₹{product.originalPrice}
                </span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 font-mono">
                  Save ₹{product.originalPrice - product.price}
                </span>
              </div>

              {/* Select Colorway */}
              <div>
                <div className="text-xs font-semibold text-slate-300 mb-2 flex items-center justify-between">
                  <span>Colorway: <strong className="text-white">{selectedColor.name}</strong></span>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {PALETTES.map((pal) => (
                    <button
                      key={pal.id}
                      onClick={() => setSelectedColor(pal)}
                      className={`h-9 rounded-lg border flex items-center justify-center transition ${
                        selectedColor.id === pal.id ? 'ring-2 ring-dorm-accent scale-105' : 'opacity-80'
                      }`}
                      style={{ backgroundColor: pal.hex, borderColor: pal.borderHex }}
                      title={pal.name}
                    >
                      {selectedColor.id === pal.id && <Check className="w-4 h-4 text-white" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Cot Size */}
              <div>
                <div className="text-xs font-semibold text-slate-300 mb-2">
                  Cot / Bed Size:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {BED_SIZES.slice(0, 2).map((sz) => (
                    <button
                      key={sz.id}
                      onClick={() => setSelectedSize(sz)}
                      className={`p-2.5 rounded-lg border text-left text-xs transition ${
                        selectedSize.id === sz.id
                          ? 'border-orange-500 bg-orange-500/10 text-white font-semibold'
                          : 'border-dorm-border bg-dorm-bg/60 text-slate-300'
                      }`}
                    >
                      <div className="font-bold">{sz.name}</div>
                      <div className="text-[10px] text-dorm-accent font-mono">{sz.dimensions}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-1.5 pt-1">
                <div className="text-xs font-semibold text-slate-300">Included Features:</div>
                {product.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Add to Cart CTA */}
              <div className="pt-2">
                <button
                  onClick={handleAddToCart}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-sm shadow-glow flex items-center justify-center gap-2 transition transform active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add Kit to Bag (₹{product.price})</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

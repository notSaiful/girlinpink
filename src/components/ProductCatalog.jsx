import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CURATED_PRODUCTS, PALETTES, CATEGORIES } from '../data/products';
import { sounds } from '../utils/soundFx';
import { 
  ShoppingBag, 
  Eye, 
  Star, 
  Check, 
  Sparkles, 
  Flame, 
  SlidersHorizontal,
  ShieldCheck,
  Droplets,
  Layers,
  Cloud,
  Zap
} from 'lucide-react';

export const ProductCatalog = () => {
  const { 
    addToCart, 
    setSelectedProductForModal, 
    setActiveModal,
    activeCatalogCategory,
    setActiveCatalogCategory 
  } = useCart();

  const [sortBy, setSortBy] = useState('popular');

  const filteredProducts = CURATED_PRODUCTS.filter(p => {
    if (activeCatalogCategory === 'all') return true;
    return p.category === activeCatalogCategory;
  }).sort((a, b) => {
    if (sortBy === 'popular') return b.reviewsCount - a.reviewsCount;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  const handleFilterClick = (catId) => {
    sounds.playClick();
    setActiveCatalogCategory(catId);
  };

  const handleOpenProduct = (prod) => {
    sounds.playSwoosh();
    setSelectedProductForModal(prod);
    setActiveModal('product');
  };

  const handleQuickAdd = (prod) => {
    sounds.playPop();
    const palette = PALETTES.find(p => p.id === prod.colorId) || PALETTES[0];
    addToCart({
      productId: prod.id,
      title: prod.title,
      colorId: prod.colorId || palette.id,
      colorName: palette.name,
      colorHex: palette.hex,
      sizeId: prod.sizeId || 'hostel-single',
      sizeName: prod.sizeId === 'twin-bunk' ? 'Hostel Bunk Bed (39"×75")' : 'Hostel Single Cot (36"×75")',
      tier: prod.tier || 'standard',
      tierName: prod.category === 'kits' ? (prod.tier === 'classic' ? 'All-Nighter Classic Kit' : 'The Grad Pro Kit') : prod.title,
      addons: [],
      addonsDetails: [],
      price: prod.price,
      originalPrice: prod.originalPrice,
      quantity: 1,
      image: prod.images[0],
      isCustom: false
    });
  };

  const getCategoryBadgeColor = (category) => {
    switch (category) {
      case 'bedsheets': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'blankets': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'pillows': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'kits': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'hacks': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      default: return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
    }
  };

  return (
    <section id="catalog" className="py-16 md:py-24 border-b border-dorm-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FF5500]/10 border border-[#FF5500]/30 text-[#FF5500] text-xs font-mono font-semibold mb-2">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>COLLEGE CAMPUS CATALOG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Badass Bedding Drops
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              Fitted sheets, cloud comforters, acne-defense satin pillowcases & survival kits engineered for hostel iron cots.
            </p>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 bg-dorm-card border border-dorm-border px-3 py-2 rounded-xl text-xs self-start md:self-auto">
            <SlidersHorizontal className="w-3.5 h-3.5 text-dorm-textMuted" />
            <span className="text-dorm-textMuted">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => {
                sounds.playClick();
                setSortBy(e.target.value);
              }}
              className="bg-transparent text-white font-semibold outline-none cursor-pointer"
            >
              <option value="popular" className="bg-dorm-card text-white">Most Popular in Campuses</option>
              <option value="rating" className="bg-dorm-card text-white">Highest Student Rating</option>
              <option value="price-low" className="bg-dorm-card text-white">Price: Low to High</option>
              <option value="price-high" className="bg-dorm-card text-white">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleFilterClick(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeCatalogCategory === cat.id
                  ? 'bg-gradient-to-r from-[#FF5500] to-amber-600 text-white shadow-glow'
                  : 'bg-dorm-card hover:bg-dorm-cardHover text-slate-300 border border-dorm-border'
              }`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const palette = PALETTES.find(p => p.id === product.colorId) || PALETTES[0];
            const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

            return (
              <div
                key={product.id}
                className="bg-dorm-card border border-dorm-border rounded-2xl overflow-hidden shadow-card hover:border-slate-500 transition-all duration-300 flex flex-col group"
              >
                {/* Image Section */}
                <div className="relative h-60 overflow-hidden bg-dorm-bg">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Badges Top Left */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                    {product.bestseller && (
                      <span className="bg-[#FF5500] text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-md uppercase tracking-wider font-mono">
                        🔥 #1 CAMPUS PICK
                      </span>
                    )}
                    {product.roommateDeal && (
                      <span className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-md uppercase tracking-wider font-mono">
                        🤝 ROOMIE BUNDLE (-20%)
                      </span>
                    )}
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider font-mono backdrop-blur-md ${getCategoryBadgeColor(product.category)}`}>
                      {product.category === 'bedsheets' && '🛏️ FITTED SHEET'}
                      {product.category === 'blankets' && '☁️ CLOUD BLANKET'}
                      {product.category === 'pillows' && '💤 SATIN / GRAPHIC CASE'}
                      {product.category === 'kits' && '⚡ ALL-IN-ONE BEDKIT'}
                      {product.category === 'hacks' && '🎒 DORM HACK'}
                    </span>
                  </div>

                  {/* Discount Badge Top Right */}
                  <div className="absolute top-3 right-3 bg-black/80 border border-white/20 text-amber-300 font-mono text-[11px] font-bold px-2 py-0.5 rounded-md z-10">
                    -{discount}%
                  </div>

                  {/* Stock Urgency Tag */}
                  {product.stockUrgency && (
                    <div className="absolute bottom-12 left-3 bg-black/85 backdrop-blur-md border border-orange-500/40 text-orange-400 text-[10px] font-mono px-2 py-0.5 rounded z-10 flex items-center gap-1">
                      <Flame className="w-3 h-3 text-[#FF5500]" />
                      <span>{product.stockUrgency}</span>
                    </div>
                  )}

                  {/* Color Swatch Pill */}
                  <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full flex items-center gap-1.5 text-xs text-white z-10">
                    <span 
                      className="w-3 h-3 rounded-full border border-white/40" 
                      style={{ backgroundColor: palette.hex }}
                    />
                    <span className="text-[11px] font-medium">{palette.name}</span>
                  </div>

                  {/* Quick View Button on Image */}
                  <button
                    onClick={() => handleOpenProduct(product)}
                    className="absolute bottom-3 right-3 bg-black/75 hover:bg-black text-white p-2 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    title="Quick Specs"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Rating & Reviews */}
                    <div className="flex items-center gap-2 text-xs text-amber-400 mb-1.5">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <span className="font-bold text-slate-200">{product.rating}</span>
                      <span className="text-dorm-textMuted text-[11px]">({product.reviewsCount} reviews)</span>
                    </div>

                    {/* Title */}
                    <h3 
                      onClick={() => handleOpenProduct(product)}
                      className="text-base font-bold text-white hover:text-orange-400 cursor-pointer transition line-clamp-1"
                    >
                      {product.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {product.subtitle}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="space-y-1.5 mt-3 pt-3 border-t border-dorm-border/60">
                      {product.highlights.slice(0, 2).map((hl, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action Buttons */}
                  <div className="pt-3 border-t border-dorm-border/80 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] text-dorm-textMuted font-mono">Student Price</div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-extrabold font-mono text-lg text-white">
                          ₹{product.price}
                        </span>
                        <span className="text-xs text-slate-500 line-through font-mono">
                          ₹{product.originalPrice}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleOpenProduct(product)}
                        className="px-3 py-2 rounded-xl bg-dorm-bg hover:bg-dorm-cardHover border border-dorm-border text-slate-300 text-xs font-semibold"
                      >
                        Specs
                      </button>

                      <button
                        onClick={() => handleQuickAdd(product)}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#FF5500] to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-xs shadow-glow flex items-center gap-1.5 transition transform active:scale-95"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

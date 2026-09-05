import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { sounds } from '../utils/soundFx';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Tag, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    rawSubtotal,
    rawOriginalTotal,
    promoDiscountAmount,
    shippingFee,
    finalTotal,
    totalSavings,
    appliedPromo,
    applyPromoCode,
    removePromoCode,
    promoSuccess,
    promoError,
    setActiveModal
  } = useCart();

  const [promoInput, setPromoInput] = useState('');

  if (!isCartOpen) return null;

  const handleClose = () => {
    sounds.playClick();
    setIsCartOpen(false);
  };

  const handleApply = (e) => {
    e.preventDefault();
    if (promoInput) {
      applyPromoCode(promoInput);
      setPromoInput('');
    }
  };

  const handleProceedCheckout = () => {
    sounds.playSwoosh();
    setIsCartOpen(false);
    setActiveModal('checkout');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        onClick={handleClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity cursor-pointer"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-dorm-card border-l border-dorm-border shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-dorm-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-dorm-accent" />
              <h2 className="font-extrabold text-base text-white">Your Bedkit Bag</h2>
              <span className="bg-dorm-bg border border-dorm-border px-2 py-0.5 rounded-full text-xs font-mono text-dorm-textMuted">
                {cart.reduce((a, b) => a + b.quantity, 0)} items
              </span>
            </div>

            <button
              onClick={handleClose}
              className="p-1.5 rounded-lg bg-dorm-bg text-slate-400 hover:text-white border border-dorm-border"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Delivery Incentive Banner */}
          <div className="bg-emerald-950/60 border-b border-emerald-800/60 px-4 py-2 flex items-center gap-2 text-xs text-emerald-300">
            <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Free Hostel Gate Express Delivery</strong> unlocked on your order!
            </span>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-dorm-bg border border-dorm-border flex items-center justify-center mx-auto text-slate-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-white text-base">Your kit bag is empty</h3>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Build your custom PG bedkit or pick a bestseller pack to get move-in ready.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 px-5 py-2 rounded-xl bg-dorm-accent text-white text-xs font-bold shadow-glow"
                >
                  Start Building Kit
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div 
                  key={item.id}
                  className="bg-dorm-bg/80 border border-dorm-border rounded-xl p-3.5 space-y-3 relative group"
                >
                  <div className="flex gap-3 items-start">
                    {/* Item Swatch / Thumbnail */}
                    <div 
                      className="w-16 h-16 rounded-lg shrink-0 border overflow-hidden relative flex items-center justify-center"
                      style={{ backgroundColor: item.colorHex || '#1E232E' }}
                    >
                      {item.image ? (
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-[10px] text-white font-mono">{item.colorName}</span>
                      )}
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-bold text-xs text-white truncate">{item.title}</h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-slate-500 hover:text-red-400 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-orange-400 font-medium">
                        {item.colorName} • {item.sizeName}
                      </div>

                      <div className="text-[10px] text-slate-400">
                        {item.tierName}
                      </div>

                      {item.addonsDetails && item.addonsDetails.length > 0 && (
                        <div className="text-[10px] text-emerald-400 font-mono mt-0.5 truncate">
                          + {item.addonsDetails.join(', ')}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Quantity & Price Row */}
                  <div className="flex items-center justify-between pt-2 border-t border-dorm-border/60">
                    <div className="flex items-center gap-2 bg-dorm-card border border-dorm-border rounded-lg px-2 py-1">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="text-slate-400 hover:text-white p-0.5"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-mono font-bold text-white px-1">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="text-slate-400 hover:text-white p-0.5"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="font-extrabold font-mono text-sm text-white">
                        ₹{item.price * item.quantity}
                      </span>
                      {item.originalPrice && (
                        <span className="text-[10px] text-slate-500 line-through ml-1.5 font-mono">
                          ₹{item.originalPrice * item.quantity}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Promo Code Input Box */}
            {cart.length > 0 && (
              <div className="bg-dorm-bg/60 border border-dorm-border rounded-xl p-3 space-y-2">
                <form onSubmit={handleApply} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      placeholder="Enter Coupon (STUDENT15)"
                      className="w-full bg-dorm-card border border-dorm-border rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 uppercase font-mono focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white border border-slate-600"
                  >
                    Apply
                  </button>
                </form>

                {/* Quick Coupon Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['STUDENT15', 'MAGGINIGHTS', 'ROOMIE20'].map((code) => (
                    <button
                      key={code}
                      onClick={() => applyPromoCode(code)}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border transition ${
                        appliedPromo === code 
                          ? 'bg-orange-500/20 text-orange-300 border-orange-500/40' 
                          : 'bg-dorm-card text-slate-400 border-dorm-border hover:text-white'
                      }`}
                    >
                      {code}
                    </button>
                  ))}
                </div>

                {appliedPromo && promoSuccess && (
                  <div className="text-[11px] text-emerald-400 flex items-center justify-between pt-1">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      {promoSuccess}
                    </span>
                    <button onClick={removePromoCode} className="text-slate-400 hover:text-white underline text-[10px]">
                      Remove
                    </button>
                  </div>
                )}

                {promoError && (
                  <div className="text-[11px] text-red-400 flex items-center gap-1 pt-1">
                    <AlertCircle className="w-3 h-3 text-red-400" />
                    {promoError}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Drawer Footer & Checkout Action */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-dorm-border bg-dorm-card space-y-3">
              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span className="text-dorm-textMuted">Subtotal:</span>
                  <span className="font-mono">₹{rawSubtotal}</span>
                </div>

                {promoDiscountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>Discount ({appliedPromo}):</span>
                    <span className="font-mono">-₹{promoDiscountAmount}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-dorm-textMuted">Hostel Gate Express Delivery:</span>
                  <span className="font-mono text-emerald-400 font-semibold">FREE</span>
                </div>

                <div className="flex justify-between text-sm font-extrabold text-white pt-2 border-t border-dorm-border">
                  <span>To Pay:</span>
                  <span className="font-mono text-lg text-white">₹{finalTotal}</span>
                </div>
              </div>

              <div className="bg-emerald-950/40 border border-emerald-800/40 p-2 rounded-lg text-[11px] text-emerald-300 text-center font-mono font-bold">
                🎉 Total Move-in Savings: ₹{totalSavings}
              </div>

              <button
                onClick={handleProceedCheckout}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-extrabold text-sm shadow-glow flex items-center justify-center gap-2 transition transform active:scale-95"
              >
                <span>Proceed to Hostel Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-3 text-[10px] text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" /> 1-Year Cot Fit Guarantee
                </span>
                <span>•</span>
                <span>UPI / Cards / COD Supported</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

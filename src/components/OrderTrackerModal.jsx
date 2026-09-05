import React from 'react';
import { useCart } from '../context/CartContext';
import { 
  CheckCircle2, 
  Truck, 
  MapPin, 
  Package, 
  X, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  Phone,
  Sparkles
} from 'lucide-react';

export const OrderTrackerModal = () => {
  const { activeModal, setActiveModal, lastOrder } = useCart();

  if (activeModal !== 'tracker' || !lastOrder) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-dorm-card border border-dorm-border rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close */}
        <button
          onClick={() => setActiveModal(null)}
          className="absolute top-4 right-4 p-2 rounded-full bg-dorm-bg text-slate-400 hover:text-white border border-dorm-border"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Celebration Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30 text-3xl">
            🎉
          </div>
          <h2 className="text-2xl font-extrabold text-white">
            Hostel Move-in Order Confirmed!
          </h2>
          <p className="text-xs text-slate-300 font-mono">
            Order ID: <strong className="text-orange-400">{lastOrder.orderId}</strong>
          </p>
        </div>

        {/* Estimated Arrival Banner */}
        <div className="p-4 rounded-xl bg-dorm-bg border border-orange-500/30 flex items-center gap-3.5">
          <div className="p-2.5 rounded-lg bg-orange-500/20 text-orange-400 shrink-0">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] text-dorm-textMuted uppercase font-mono">
              Estimated Move-In Delivery
            </div>
            <div className="text-sm font-bold text-white">
              {lastOrder.estimatedDelivery}
            </div>
            <div className="text-[11px] text-emerald-400 font-medium">
              ✓ Direct Gate Delivery to {lastOrder.deliveryAddress.college}
            </div>
          </div>
        </div>

        {/* Live Tracking Timeline */}
        <div className="bg-dorm-bg/60 border border-dorm-border rounded-xl p-4 space-y-4">
          <div className="text-xs font-mono uppercase text-dorm-textMuted font-bold">
            Live Dispatch Status:
          </div>

          <div className="space-y-4 relative before:absolute before:inset-0 before:left-2.5 before:w-0.5 before:bg-dorm-border">
            
            {/* Step 1 */}
            <div className="flex items-start gap-3 relative z-10">
              <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 text-[10px]">
                ✓
              </div>
              <div className="text-xs">
                <div className="font-bold text-white">Order Verified & Nanotech Coat Checked</div>
                <div className="text-slate-400 text-[11px]">DORMRIZZ Campus Fulfillment Hub • Just Now</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3 relative z-10">
              <div className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0 text-[10px] animate-pulse">
                ⏳
              </div>
              <div className="text-xs">
                <div className="font-bold text-orange-300">Packed in Compact Hostel Duffle</div>
                <div className="text-slate-400 text-[11px]">Ready for Courier Pickup</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3 relative z-10">
              <div className="w-5 h-5 rounded-full bg-dorm-border text-slate-500 flex items-center justify-center shrink-0 text-[10px]">
                3
              </div>
              <div className="text-xs">
                <div className="font-bold text-slate-400">Out for Delivery to Campus Gate</div>
                <div className="text-slate-500 text-[11px]">OTP verification sent to {lastOrder.deliveryAddress.phone}</div>
              </div>
            </div>

          </div>
        </div>

        {/* Destination Recap */}
        <div className="p-3.5 bg-dorm-bg border border-dorm-border rounded-xl text-xs space-y-1.5">
          <div className="flex justify-between text-slate-300">
            <span className="text-dorm-textMuted">Resident:</span>
            <span className="font-semibold text-white">{lastOrder.deliveryAddress.name}</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span className="text-dorm-textMuted">Hostel Cot:</span>
            <span className="font-semibold text-white">
              {lastOrder.deliveryAddress.hostelName}, {lastOrder.deliveryAddress.roomNo}
            </span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span className="text-dorm-textMuted">Total Paid:</span>
            <span className="font-mono font-bold text-emerald-400">₹{lastOrder.totalAmount} ({lastOrder.paymentMethod})</span>
          </div>
        </div>

        <button
          onClick={() => setActiveModal(null)}
          className="w-full py-3 rounded-xl bg-dorm-card hover:bg-dorm-cardHover border border-dorm-border text-slate-200 text-xs font-bold transition"
        >
          Close & Return to Store
        </button>

      </div>
    </div>
  );
};

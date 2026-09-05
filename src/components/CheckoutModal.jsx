import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { sounds } from '../utils/soundFx';
import confetti from 'canvas-confetti';
import { 
  X, 
  MapPin, 
  CreditCard, 
  Truck, 
  ShieldCheck, 
  CheckCircle2, 
  GraduationCap, 
  QrCode, 
  Smartphone, 
  Banknote,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const CheckoutModal = () => {
  const { 
    activeModal, 
    setActiveModal, 
    cart, 
    finalTotal, 
    clearCart, 
    appliedPromo,
    setLastOrder,
    studentInfo
  } = useCart();

  const [step, setStep] = useState(1); // 1: Address & Hostel info, 2: Payment
  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi', 'card', 'cod'
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    name: studentInfo.name || 'Aryan Verma',
    phone: '9876543210',
    college: studentInfo.college || 'IIT Delhi',
    hostelName: 'Nilgiri Hostel, Block B',
    roomNo: 'Room 412 (Upper Bunk)',
    city: 'New Delhi',
    gateInstructions: 'Call upon arriving at Main Campus Security Gate 1'
  });

  if (activeModal !== 'checkout') return null;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const orderId = `DORM-${Math.floor(100000 + Math.random() * 900000)}`;
      const orderData = {
        orderId,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        items: [...cart],
        totalAmount: finalTotal,
        paymentMethod: paymentMethod.toUpperCase(),
        deliveryAddress: { ...formData },
        status: 'Confirmed - Campus Hub Preparing Pack',
        estimatedDelivery: 'Tomorrow by 4:00 PM (Hostel Gate Delivery)'
      };

      sounds.playChime();
      setLastOrder(orderData);
      clearCart();
      
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.error(err);
      }

      setActiveModal('tracker');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-dorm-card border border-dorm-border rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 border-b border-dorm-border flex items-center justify-between bg-dorm-bg/50">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-orange-400">
              <Truck className="w-3.5 h-3.5" />
              <span>HOSTEL EXPRESS CHECKOUT</span>
            </div>
            <h2 className="font-bold text-lg text-white">
              {step === 1 ? 'Hostel & PG Delivery Details' : 'Select Payment Method'}
            </h2>
          </div>

          <button
            onClick={() => setActiveModal(null)}
            className="p-1.5 rounded-lg bg-dorm-card text-slate-400 hover:text-white border border-dorm-border"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Progress Indicators */}
          <div className="flex items-center justify-center gap-4 text-xs font-semibold">
            <span className={`flex items-center gap-1.5 ${step === 1 ? 'text-dorm-accent' : 'text-emerald-400'}`}>
              <span className="w-5 h-5 rounded-full bg-dorm-bg border flex items-center justify-center font-mono text-[10px]">1</span>
              Hostel Address
            </span>
            <span className="w-8 h-[1px] bg-dorm-border" />
            <span className={`flex items-center gap-1.5 ${step === 2 ? 'text-dorm-accent' : 'text-slate-500'}`}>
              <span className="w-5 h-5 rounded-full bg-dorm-bg border flex items-center justify-center font-mono text-[10px]">2</span>
              Payment & Order
            </span>
          </div>

          {step === 1 ? (
            /* STEP 1: Hostel Address Details */
            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Student Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-dorm-bg border border-dorm-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    WhatsApp Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-dorm-bg border border-dorm-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  College / University / Institute
                </label>
                <input
                  type="text"
                  required
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  placeholder="e.g. IIT Delhi, BITS Pilani, Christ University, DU"
                  className="w-full bg-dorm-bg border border-dorm-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Hostel / PG Name & Block
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.hostelName}
                    onChange={(e) => setFormData({ ...formData, hostelName: e.target.value })}
                    placeholder="e.g. Nilgiri Hostel / Stanza Living Room"
                    className="w-full bg-dorm-bg border border-dorm-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Room No / Floor / Bed Info
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.roomNo}
                    onChange={(e) => setFormData({ ...formData, roomNo: e.target.value })}
                    placeholder="e.g. Room 412 (Upper Bunk)"
                    className="w-full bg-dorm-bg border border-dorm-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Delivery Gate Note for Courier Agent
                </label>
                <input
                  type="text"
                  value={formData.gateInstructions}
                  onChange={(e) => setFormData({ ...formData, gateInstructions: e.target.value })}
                  placeholder="e.g. Hand over at Main Security Gate 2 or Warden Office"
                  className="w-full bg-dorm-bg border border-dorm-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-dorm-accent hover:bg-dorm-accentHover text-white font-bold text-sm shadow-glow flex items-center justify-center gap-2 transition"
                >
                  <span>Continue to Payment (₹{finalTotal})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            /* STEP 2: Payment Selection */
            <form onSubmit={handlePlaceOrder} className="space-y-5">
              <div className="space-y-3">
                
                {/* UPI QR Option */}
                <label className={`p-4 rounded-xl border flex items-start justify-between cursor-pointer transition ${
                  paymentMethod === 'upi'
                    ? 'border-orange-500 bg-orange-500/10 ring-1 ring-orange-500'
                    : 'border-dorm-border bg-dorm-bg/60 hover:bg-dorm-bg'
                }`}>
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                      className="mt-1 accent-orange-500"
                    />
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-2">
                        <span>Instant UPI Payment (GPay, PhonePe, Paytm, BHIM)</span>
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded font-mono">
                          Zero Fees
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Instant QR code generation or enter VPA / UPI ID.
                      </p>

                      {paymentMethod === 'upi' && (
                        <div className="mt-3 p-3 bg-dorm-bg rounded-lg border border-dorm-border flex items-center gap-4 animate-in fade-in">
                          <div className="w-20 h-20 bg-white rounded-lg p-1.5 flex items-center justify-center shrink-0">
                            <QrCode className="w-full h-full text-slate-900" />
                          </div>
                          <div className="text-[11px] text-slate-300 space-y-1">
                            <div className="font-bold text-white">Scan with any UPI App</div>
                            <div className="text-dorm-textMuted font-mono">UPI ID: dormcozy@icici</div>
                            <div className="text-emerald-400 font-semibold font-mono">Amount: ₹{finalTotal}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <Smartphone className="w-5 h-5 text-orange-400 shrink-0" />
                </label>

                {/* Cards / Netbanking */}
                <label className={`p-4 rounded-xl border flex items-start justify-between cursor-pointer transition ${
                  paymentMethod === 'card'
                    ? 'border-orange-500 bg-orange-500/10 ring-1 ring-orange-500'
                    : 'border-dorm-border bg-dorm-bg/60 hover:bg-dorm-bg'
                }`}>
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="mt-1 accent-orange-500"
                    />
                    <div>
                      <div className="text-xs font-bold text-white">
                        Debit / Credit Cards & Netbanking
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Visa, Mastercard, RuPay, Student Forex cards accepted.
                      </p>
                    </div>
                  </div>
                  <CreditCard className="w-5 h-5 text-blue-400 shrink-0" />
                </label>

                {/* Cash on Delivery / Pay on Move-in */}
                <label className={`p-4 rounded-xl border flex items-start justify-between cursor-pointer transition ${
                  paymentMethod === 'cod'
                    ? 'border-orange-500 bg-orange-500/10 ring-1 ring-orange-500'
                    : 'border-dorm-border bg-dorm-bg/60 hover:bg-dorm-bg'
                }`}>
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="mt-1 accent-orange-500"
                    />
                    <div>
                      <div className="text-xs font-bold text-white">
                        Cash on Delivery (Pay on Move-in Day)
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Pay via Cash or UPI directly to delivery partner at hostel gate.
                      </p>
                    </div>
                  </div>
                  <Banknote className="w-5 h-5 text-emerald-400 shrink-0" />
                </label>

              </div>

              {/* Order Summary Recap */}
              <div className="p-3.5 bg-dorm-bg/80 border border-dorm-border rounded-xl flex items-center justify-between text-xs">
                <div>
                  <span className="text-dorm-textMuted block">Delivering to:</span>
                  <span className="font-semibold text-white truncate max-w-xs block">
                    {formData.hostelName}, {formData.roomNo} ({formData.college})
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-dorm-textMuted block">Final Amount:</span>
                  <span className="font-extrabold font-mono text-base text-white">₹{finalTotal}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-3 rounded-xl bg-dorm-bg border border-dorm-border text-xs text-slate-300 hover:text-white"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-extrabold text-sm shadow-glow flex items-center justify-center gap-2 transition"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2 text-xs font-mono">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Generating Campus Order...
                    </span>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Confirm Order (₹{finalTotal})</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};

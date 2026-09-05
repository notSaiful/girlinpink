import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { LAUNCH_PRINTS, SIZES, TIERS } from '../data/preorderData';

export const PreOrderDrawer = () => {
  const {
    isDrawerOpen,
    closeReservation,
    selectedPrint,
    setSelectedPrint,
    selectedSize,
    setSelectedSize,
    selectedTier,
    setSelectedTier,
    isDepositOnly,
    setIsDepositOnly,
    basePrice,
    depositPrice,
    amountToPayNow,
    balanceDueLater,
    confirmedOrder,
    setConfirmedOrder,
    meta,
    tiers
  } = useCart();

  const [step, setStep] = useState('reserve'); // 'reserve' | 'confirmed'
  const [formData, setFormData] = useState({
    name: 'Ananya Sharma',
    email: 'ananya@university.edu',
    phone: '9876543210',
    addressType: 'dorm', // 'dorm' | 'home'
    college: 'Christ University / St. Josephs Bangalore',
    hostelDetails: 'Block B, Kaveri Wing, Room 304 (Single Cot)',
    city: 'Bangalore',
    pincode: '560029'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isDrawerOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const order = {
        orderId: `B01-${Math.floor(100 + Math.random() * 900)}`,
        tier: selectedTier.name,
        print: selectedPrint.name,
        size: selectedSize.name,
        isDepositOnly,
        amountPaid: amountToPayNow,
        balanceDue: balanceDueLater,
        customer: formData,
        deliveryWindow: 'October 05 – October 12, 2026'
      };
      setConfirmedOrder(order);
      setStep('confirmed');
    }, 800);
  };

  const handleClose = () => {
    closeReservation();
    if (step === 'confirmed') {
      setTimeout(() => setStep('reserve'), 300);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        onClick={handleClose}
        className="absolute inset-0 bg-[#24201E]/40 backdrop-blur-sm transition-opacity cursor-pointer"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-lg bg-[#FAF8F5] border-l border-sand shadow-2xl flex flex-col justify-between overflow-y-auto">
          
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-sand flex items-center justify-between bg-cream">
            <div>
              <span className="text-[10px] font-serif italic text-rose uppercase tracking-wider">
                {meta.batchName}
              </span>
              <h3 className="font-serif text-xl text-nearblack font-normal">
                {step === 'confirmed' ? 'Reservation Confirmed' : 'Reserve Your Bedding Set'}
              </h3>
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-sand/50 text-muted hover:text-nearblack transition text-lg leading-none"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 p-5 sm:p-6 space-y-6">
            
            {step === 'confirmed' && confirmedOrder ? (
              /* Confirmation Screen */
              <div className="space-y-6 py-4 animate-in zoom-in-95">
                <div className="w-12 h-12 rounded-full bg-rose-light text-rose flex items-center justify-center text-xl font-serif">
                  ✓
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif text-2xl text-nearblack">
                    You're locked in for Batch 01.
                  </h4>
                  <p className="text-xs text-muted font-sans leading-relaxed">
                    We just sent a confirmation receipt to <strong>{confirmedOrder.customer.email}</strong>. We'll email you weekly photo updates as the yarn is spun and woven at the mill.
                  </p>
                </div>

                {/* Receipt Card */}
                <div className="p-5 rounded-2xl bg-cream-card border border-sand space-y-3 text-xs font-sans">
                  <div className="flex justify-between pb-2 border-b border-sand">
                    <span className="text-muted">Reservation ID:</span>
                    <span className="font-mono font-medium text-nearblack">{confirmedOrder.orderId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Selected Print:</span>
                    <span className="font-medium text-nearblack">{confirmedOrder.print}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Mattress Size:</span>
                    <span className="font-medium text-nearblack">{confirmedOrder.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Expected Arrival:</span>
                    <span className="font-medium text-rose">{confirmedOrder.deliveryWindow}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-sand">
                    <span className="font-medium text-nearblack">Paid Today:</span>
                    <span className="font-serif font-bold text-nearblack text-sm">
                      ₹{confirmedOrder.amountPaid}
                    </span>
                  </div>
                  {confirmedOrder.balanceDue > 0 && (
                    <div className="flex justify-between text-[11px] text-muted">
                      <span>Balance due at dispatch:</span>
                      <span>₹{confirmedOrder.balanceDue}</span>
                    </div>
                  )}
                </div>

                {/* Refund Policy Note */}
                <div className="p-4 rounded-xl bg-rose-light/50 border border-rose/20 text-xs text-rose-dark">
                  <strong>100% Peace of Mind:</strong> If your room assignment or college plans change anytime before early October, email hello@thedormbed.co for an instant full refund.
                </div>

                <button
                  onClick={handleClose}
                  className="w-full py-3.5 rounded-full bg-rose text-white text-xs font-medium hover:bg-rose-dark transition shadow-soft"
                >
                  Return to Website
                </button>
              </div>
            ) : (
              /* Reservation Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Trust/Timeline Banner */}
                <div className="p-3.5 rounded-xl bg-rose-light border border-rose/20 flex items-start gap-3 text-xs text-rose-dark">
                  <span className="text-base leading-none mt-0.5">📦</span>
                  <div>
                    <strong>Ships early October 2026.</strong> Pre-orders fund ethical small-batch production with 0 waste. 100% refundable before dispatch.
                  </div>
                </div>

                {/* Step 1: Pick Tier */}
                <div className="space-y-2">
                  <label className="block text-xs font-serif italic text-nearblack font-semibold">
                    1. Choose Kit Tier:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tiers.map((t) => {
                      const isSelected = selectedTier.id === t.id;
                      return (
                        <div
                          key={t.id}
                          onClick={() => setSelectedTier(t)}
                          className={`p-3 rounded-xl border cursor-pointer transition ${
                            isSelected 
                              ? 'border-rose bg-cream-card shadow-soft ring-1 ring-rose' 
                              : 'border-sand bg-cream hover:bg-cream-card'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] uppercase font-sans tracking-wider text-rose font-medium">
                              {t.badge}
                            </span>
                            <span className="font-serif font-bold text-nearblack text-sm">
                              ₹{t.price}
                            </span>
                          </div>
                          <div className="font-serif text-xs font-medium text-nearblack">
                            {t.name}
                          </div>
                          <div className="text-[10px] text-muted mt-0.5">
                            {t.subtitle}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Pick Print */}
                <div className="space-y-2">
                  <label className="block text-xs font-serif italic text-nearblack font-semibold">
                    2. Select Your Print:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {LAUNCH_PRINTS.map((p) => {
                      const isSelected = selectedPrint.id === p.id;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setSelectedPrint(p)}
                          className={`p-3 rounded-xl border text-left transition ${
                            isSelected 
                              ? 'border-rose bg-cream-card shadow-soft ring-1 ring-rose' 
                              : 'border-sand bg-cream hover:bg-cream-card'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <span 
                              className="w-3 h-3 rounded-full border border-white"
                              style={{ backgroundColor: p.checkColor }}
                            />
                            <span className="font-serif text-xs font-medium text-nearblack truncate">
                              {p.name.replace('The ', '')}
                            </span>
                          </div>
                          <div className="text-[10px] text-muted">
                            {p.availableSets} sets left
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Pick Cot Size */}
                <div className="space-y-2">
                  <label className="block text-xs font-serif italic text-nearblack font-semibold">
                    3. Select Mattress Size:
                  </label>
                  <div className="space-y-2">
                    {SIZES.map((s) => {
                      const isSelected = selectedSize.id === s.id;
                      return (
                        <div
                          key={s.id}
                          onClick={() => setSelectedSize(s)}
                          className={`p-3 rounded-xl border cursor-pointer transition flex items-center justify-between text-xs ${
                            isSelected 
                              ? 'border-rose bg-cream-card shadow-soft ring-1 ring-rose' 
                              : 'border-sand bg-cream hover:bg-cream-card'
                          }`}
                        >
                          <div>
                            <div className="font-medium text-nearblack flex items-center gap-1.5">
                              <span>{s.name}</span>
                              <span className="text-[10px] text-muted font-sans">({s.dimensions})</span>
                            </div>
                            <div className="text-[11px] text-muted mt-0.5">
                              {s.description}
                            </div>
                          </div>
                          <span className="font-serif font-bold text-nearblack">
                            ₹{Math.round(selectedPrint.price * s.multiplier)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step 4: Payment Option Toggle */}
                <div className="space-y-2">
                  <label className="block text-xs font-serif italic text-nearblack font-semibold">
                    4. Payment Preference:
                  </label>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <button
                      type="button"
                      onClick={() => setIsDepositOnly(false)}
                      className={`p-3 rounded-xl border text-left transition ${
                        !isDepositOnly 
                          ? 'border-rose bg-cream-card shadow-soft ring-1 ring-rose' 
                          : 'border-sand bg-cream'
                      }`}
                    >
                      <div className="font-medium text-nearblack">Pay in Full</div>
                      <div className="text-rose font-serif font-bold text-sm mt-0.5">
                        ₹{basePrice}
                      </div>
                      <div className="text-[10px] text-muted mt-0.5">
                        Done & reserved
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsDepositOnly(true)}
                      className={`p-3 rounded-xl border text-left transition ${
                        isDepositOnly 
                          ? 'border-rose bg-cream-card shadow-soft ring-1 ring-rose' 
                          : 'border-sand bg-cream'
                      }`}
                    >
                      <div className="font-medium text-nearblack">Pay Small Deposit</div>
                      <div className="text-rose font-serif font-bold text-sm mt-0.5">
                        ₹{depositPrice}
                      </div>
                      <div className="text-[10px] text-muted mt-0.5">
                        Balance due at shipping
                      </div>
                    </button>
                  </div>
                </div>

                {/* Step 5: Contact & Hostel Shipping Details */}
                <div className="space-y-3 pt-2 border-t border-sand">
                  <div className="font-serif italic text-xs font-semibold text-nearblack">
                    5. Your Hostel / PG Delivery Details:
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-cream-card border border-sand focus:border-rose focus:outline-none text-nearblack"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-cream-card border border-sand focus:border-rose focus:outline-none text-nearblack"
                    />
                  </div>

                  <input
                    type="email"
                    required
                    placeholder="College or personal email (for loom updates)"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-cream-card border border-sand focus:border-rose focus:outline-none text-nearblack"
                  />

                  <input
                    type="text"
                    required
                    placeholder="College / University Name (e.g. IIT Delhi, Christ, DU)"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-cream-card border border-sand focus:border-rose focus:outline-none text-nearblack"
                  />

                  <input
                    type="text"
                    required
                    placeholder="Hostel / PG Room details (or home address for move-in)"
                    value={formData.hostelDetails}
                    onChange={(e) => setFormData({ ...formData, hostelDetails: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-cream-card border border-sand focus:border-rose focus:outline-none text-nearblack"
                  />
                </div>

                {/* Final CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-rose hover:bg-rose-dark text-white font-medium text-sm transition shadow-soft flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Reserving your set...</span>
                    ) : (
                      <span>
                        Confirm Reservation • Pay ₹{amountToPayNow}
                      </span>
                    )}
                  </button>

                  <p className="text-[11px] text-muted text-center mt-2">
                    100% refundable anytime before early October dispatch. Zero risk.
                  </p>
                </div>

              </form>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};

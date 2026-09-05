import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { sounds } from '../utils/soundFx';
import { 
  GraduationCap, 
  CheckCircle2, 
  Upload, 
  ShieldCheck, 
  X, 
  Sparkles,
  Building,
  CreditCard
} from 'lucide-react';

export const StudentVerificationModal = () => {
  const { 
    activeModal, 
    setActiveModal, 
    isStudentVerified, 
    setIsStudentVerified, 
    studentInfo, 
    setStudentInfo,
    applyPromoCode
  } = useCart();

  const [formData, setFormData] = useState({
    name: studentInfo.name || '',
    college: studentInfo.college || 'IIT Delhi',
    rollNo: studentInfo.rollNo || '2024CS10928',
    email: 'student@campus.ac.in'
  });
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifiedSuccess, setVerifiedSuccess] = useState(false);

  if (activeModal !== 'student_verify') return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsVerifying(true);

    setTimeout(() => {
      setIsVerifying(false);
      setIsStudentVerified(true);
      setStudentInfo({
        name: formData.name || 'Student Resident',
        college: formData.college,
        rollNo: formData.rollNo
      });
      applyPromoCode('STUDENT15');
      sounds.playChime();
      setVerifiedSuccess(true);

      setTimeout(() => {
        setActiveModal(null);
      }, 1500);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-dorm-card border border-dorm-border rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
        
        {/* Close */}
        <button
          onClick={() => setActiveModal(null)}
          className="absolute top-4 right-4 p-2 rounded-full bg-dorm-bg text-slate-400 hover:text-white border border-dorm-border"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-1.5">
          <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center mx-auto mb-2 border border-orange-500/30">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">
            Student ID Instant Verification
          </h3>
          <p className="text-xs text-slate-300">
            Verify your college status to unlock flat <strong className="text-orange-400">15% OFF</strong> on all bedkits + priority hostel gate delivery.
          </p>
        </div>

        {verifiedSuccess ? (
          <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-500 text-center space-y-2 animate-in zoom-in-95">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <div className="text-base font-bold text-white">Student ID Verified!</div>
            <p className="text-xs text-emerald-300 font-mono">
              Coupon code STUDENT15 has been auto-applied to your bag.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Aryan Verma"
                className="w-full bg-dorm-bg border border-dorm-border rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                College / University / Coaching Institute
              </label>
              <input
                type="text"
                required
                value={formData.college}
                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                placeholder="e.g. IIT Delhi, BITS Pilani, DU, Manipal, Allen Kota"
                className="w-full bg-dorm-bg border border-dorm-border rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-orange-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Roll No / Student ID
                </label>
                <input
                  type="text"
                  required
                  value={formData.rollNo}
                  onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
                  placeholder="e.g. 2024CS10928"
                  className="w-full bg-dorm-bg border border-dorm-border rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-orange-500 focus:outline-none font-mono"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Student / College Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@college.ac.in"
                  className="w-full bg-dorm-bg border border-dorm-border rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-orange-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Simulated ID Card dropzone */}
            <div className="border border-dashed border-dorm-border hover:border-slate-500 rounded-xl p-3 text-center cursor-pointer bg-dorm-bg/40">
              <Upload className="w-4 h-4 text-slate-400 mx-auto mb-1" />
              <span className="text-[11px] text-slate-300 block font-medium">
                (Optional) Upload photo of College ID or Admission Letter
              </span>
              <span className="text-[10px] text-slate-500">Supports JPG, PNG, PDF up to 5MB</span>
            </div>

            <button
              type="submit"
              disabled={isVerifying}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-sm shadow-glow flex items-center justify-center gap-2 transition"
            >
              {isVerifying ? (
                <span className="flex items-center gap-2 text-xs font-mono">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Verifying Campus Credentials...
                </span>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verify ID & Claim 15% OFF</span>
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};

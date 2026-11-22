import React, { useState } from 'react';
import { X, Send, Sparkles, MessageSquare, CheckCircle2 } from 'lucide-react';
import { RESORT_INFO } from '../data/hotelData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ReSolution! I am interested in building a luxury resort & hotel website like "The Haven Retreat".\nName: ${form.name || 'Not specified'}\nBusiness: ${form.businessName || 'Hotel/Resort'}\nPhone: ${form.phone || 'Provided on chat'}`
    );
    window.open(`https://wa.me/${RESORT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ name: '', businessName: '', phone: '', email: '', notes: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg rounded-2xl bg-[#0e2017] border border-[#c89d4c]/40 text-[#f6f4ee] shadow-2xl overflow-hidden p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#ede7da]/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#c89d4c]/15 text-[#dfb85c] mb-3 border border-[#c89d4c]/30">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white tracking-wide">
            Want a Luxury Website Like This?
          </h2>
          <p className="text-xs sm:text-sm text-[#ede7da]/80 mt-1.5 max-w-md mx-auto">
            ReSolution builds high-converting, bespoke digital experiences for boutique hotels, luxury resorts, and premium hospitality brands.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-white">Thank You, {form.name}!</h3>
            <p className="text-xs text-[#ede7da]/80">
              Our hospitality web strategists have received your inquiry. We will contact you within 24 hours with an exclusive concept proposal.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant Connect on WhatsApp</span>
              </button>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-xs transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-[#ede7da] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Malhotra"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#07130e] border border-[#c89d4c]/30 text-white text-xs haven-input-focus placeholder-[#849a8e]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#ede7da] mb-1">
                  Resort / Property Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Whispering Pines Resort"
                  value={form.businessName}
                  onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#07130e] border border-[#c89d4c]/30 text-white text-xs haven-input-focus placeholder-[#849a8e]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-[#ede7da] mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#07130e] border border-[#c89d4c]/30 text-white text-xs haven-input-focus placeholder-[#849a8e]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#ede7da] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="e.g. owner@resort.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#07130e] border border-[#c89d4c]/30 text-white text-xs haven-input-focus placeholder-[#849a8e]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#ede7da] mb-1">
                Tell us about your resort vision
              </label>
              <textarea
                rows={2}
                placeholder="Direct booking engine, room showcase, immersive 3D gallery, multi-property management..."
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#07130e] border border-[#c89d4c]/30 text-white text-xs haven-input-focus placeholder-[#849a8e] resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="w-full sm:flex-1 py-3 rounded-full bg-gradient-to-r from-[#dfb85c] to-[#c89d4c] text-[#0b1a13] font-semibold text-xs flex items-center justify-center gap-2 hover:brightness-105 transition-all shadow-lg cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Request Custom Proposal</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#173527] border border-[#c89d4c]/40 text-[#dfb85c] hover:bg-[#c89d4c] hover:text-[#0b1a13] transition-colors text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

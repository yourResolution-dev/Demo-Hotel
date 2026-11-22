import React from 'react';
import { X, Sparkles, Compass, Mountain, Flame, Calendar } from 'lucide-react';
import { EXPERIENCES_HIGHLIGHTS } from '../data/hotelData';

interface ExperiencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBookingModal: () => void;
}

export const ExperiencesModal: React.FC<ExperiencesModalProps> = ({
  isOpen,
  onClose,
  onOpenBookingModal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-[#0d1f17] rounded-3xl border border-[#c89d4c]/40 text-[#fbf9f4] shadow-2xl overflow-hidden">
        {/* Header Photo */}
        <div className="relative h-56 sm:h-64 w-full">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
            alt="Curated Resort Experiences"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f17] via-[#0d1f17]/60 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 sm:left-8">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#dfb85c] uppercase block">
              CURATED ADVENTURE & WELLNESS
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-white">
              Unforgettable Memories
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm text-[#ede7da]/90 leading-relaxed font-light">
            {EXPERIENCES_HIGHLIGHTS.description} Every activity is guided by certified local naturalists and wellness instructors to ensure both safety and authenticity.
          </p>

          {/* List of 4 Experiences */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EXPERIENCES_HIGHLIGHTS.items.map((exp, i) => (
              <div key={i} className="p-4 rounded-2xl bg-[#081510] border border-[#c89d4c]/20 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#dfb85c]" />
                    <h4 className="font-serif-luxury text-base font-bold text-white">{exp.title}</h4>
                  </div>
                </div>
                <p className="text-[11px] text-[#dfb85c] font-medium">{exp.time}</p>
                <p className="text-xs text-[#8ea498] leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-[#8ea498]">
              All experiences can be customized during check-in or pre-booked.
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenBookingModal();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#dfb85c] hover:bg-[#eed08b] text-[#0b1a13] font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Your Stay with Experiences</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

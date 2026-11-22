import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenBookingModal: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="relative w-full py-20 sm:py-28 overflow-hidden">
      {/* Background Cinematic Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80"
          alt="Lush green mountain valley panoramic landscape"
          className="w-full h-full object-cover object-center"
        />
        {/* Layered Rich Forest Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07130e]/95 via-[#07130e]/85 to-[#07130e]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Plan Your Perfect Getaway Today!
            </h2>
            <p className="text-xs sm:text-base text-[#ede7da]/90 mt-3 font-light leading-relaxed">
              Book your stay at The Haven Retreat and experience luxury, comfort and nature like never before.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={onOpenBookingModal}
              className="px-8 py-4 rounded-full bg-[#dfb85c] hover:bg-[#eed08b] text-[#0b1a13] font-bold text-xs sm:text-sm tracking-wide shadow-2xl hover:shadow-[0_0_25px_rgba(223,184,92,0.5)] transition-all cursor-pointer flex items-center gap-2.5 transform hover:scale-105 active:scale-95"
            >
              <Calendar className="w-4 h-4 text-[#0b1a13]" />
              <span>Book Your Stay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

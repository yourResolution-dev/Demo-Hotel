import React from 'react';
import { ArrowLeft, MessageSquare, Sparkles } from 'lucide-react';
import { RESORT_INFO } from '../data/hotelData';

interface ResolutionDemoBannerProps {
  onOpenInquiry?: () => void;
}

export const ResolutionDemoBanner: React.FC<ResolutionDemoBannerProps> = ({ onOpenInquiry }) => {
  const handleBack = () => {
    // If running standalone, go to root or parent
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hi ReSolution Team! I explored "The Haven Retreat" luxury hotel demo and I would love to build a similar premium website for my hotel / resort.'
    );
    window.open(`https://wa.me/${RESORT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <aside
      aria-label="Demo website notice and agency options"
      className="bg-[#050d09] text-xs sm:text-sm text-[#f6f4ee] border-b border-[#c89d4c]/25 py-2 sm:py-2.5 px-3 sm:px-6 w-full relative z-50"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        {/* Left: Back Link & Showcase Tag */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center sm:justify-start">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-1.5 text-[#dfb85c] hover:text-[#fcfbf8] font-medium transition-colors group cursor-pointer text-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Back to ReSolution</span>
          </button>
          <span className="hidden sm:inline-block text-[#3d594b]">|</span>
          <span className="inline-flex items-center gap-1.5 text-[#ede7da] font-light text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-[#dfb85c]">ReSolution Showcase:</span>
            <span className="hidden md:inline">The Haven Retreat Luxury Boutique Hotel & Resort Demo</span>
          </span>
        </div>

        {/* Right: CTA Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0d2218] border border-[#c89d4c]/40 text-[#dfb85c] hover:bg-[#c89d4c] hover:text-[#0b1a13] transition-all cursor-pointer font-medium text-[11px] sm:text-xs"
          >
            <MessageSquare className="w-3 h-3" />
            <span>WhatsApp Us</span>
          </button>

          <button
            onClick={onOpenInquiry || handleWhatsApp}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#dfb85c] to-[#c89d4c] text-[#0b1a13] font-semibold hover:shadow-[0_0_15px_rgba(223,184,92,0.4)] transition-all cursor-pointer text-[11px] sm:text-xs"
          >
            <Sparkles className="w-3 h-3" />
            <span>Want a Website Like This?</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

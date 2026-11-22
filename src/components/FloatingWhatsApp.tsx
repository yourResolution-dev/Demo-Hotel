import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { RESORT_INFO } from '../data/hotelData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    const message = encodeURIComponent(
      'Hello ReSolution! I just viewed "The Haven Retreat" hotel & resort website demo and I would love to discuss developing a premium website for my hotel / resort.'
    );
    window.open(`https://wa.me/${RESORT_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 sm:bottom-6 left-4 sm:left-6 z-40 flex items-center gap-2.5">
      {/* Floating Action Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#15803d] to-[#22c55e] text-white shadow-[0_8px_25px_rgba(22,163,74,0.45)] hover:shadow-[0_12px_32px_rgba(22,163,74,0.6)] flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 cursor-pointer border-2 border-white/40 relative group"
        aria-label="Contact ReSolution on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-400 border-2 border-white"></span>
        </span>
      </button>

      {/* Tooltip on hover / desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#091710] text-[#f6f4ee] border border-[#c89d4c]/30 shadow-xl text-xs whitespace-nowrap animate-fade-in">
          <span>Chat with ReSolution Agency</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-[#98a89f] hover:text-white"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}
    </div>
  );
};

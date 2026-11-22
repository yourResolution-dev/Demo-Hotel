import React from 'react';
import { X, Award, ShieldCheck, HeartHandshake, Trees } from 'lucide-react';
import { RESORT_INFO } from '../data/hotelData';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-[#0e2017] rounded-3xl border border-[#c89d4c]/40 text-[#fbf9f4] shadow-2xl overflow-hidden p-6 sm:p-10">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#ede7da]/70 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#dfb85c] uppercase font-sans-modern block mb-2">
            OUR HERITAGE & PHILOSOPHY
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">
            The Haven Retreat Story
          </h2>
          <div className="w-16 h-0.5 bg-[#dfb85c] mx-auto mt-3" />
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-[#ede7da]/90 leading-relaxed font-light">
          <p>
            Established in 2019, <strong>The Haven Retreat</strong> was born out of a desire to create a sanctuary where modern architectural elegance lives in symbiosis with wild, untamed nature.
          </p>
          <p>
            Spanning over 15 acres of protected indigenous woodlands and fragrant fruit orchards, every villa and suite was crafted using reclaimed teak, hand-chiseled river stone, and energy-conscious climate management to preserve the local bio-corridor.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
            <div className="p-4 rounded-xl bg-[#081510] border border-[#c89d4c]/20 text-center">
              <Trees className="w-6 h-6 text-[#dfb85c] mx-auto mb-2" />
              <h4 className="font-bold text-white text-xs mb-1">Eco-Conscious</h4>
              <p className="text-[11px] text-[#8ea498]">Zero single-use plastic, rainwater harvesting & solar power.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#081510] border border-[#c89d4c]/20 text-center">
              <HeartHandshake className="w-6 h-6 text-[#dfb85c] mx-auto mb-2" />
              <h4 className="font-bold text-white text-xs mb-1">Local Empowerment</h4>
              <p className="text-[11px] text-[#8ea498]">85% of our staff and produce come from neighboring villages.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#081510] border border-[#c89d4c]/20 text-center">
              <Award className="w-6 h-6 text-[#dfb85c] mx-auto mb-2" />
              <h4 className="font-bold text-white text-xs mb-1">Award Winning</h4>
              <p className="text-[11px] text-[#8ea498]">Ranked in the Top 10 Eco-Luxury Boutique Resorts in Eastern India.</p>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-white/10 text-center">
          <button
            onClick={onClose}
            className="px-8 py-2.5 rounded-full bg-[#dfb85c] text-[#0b1a13] font-bold text-xs hover:bg-[#eed08b] transition-colors"
          >
            Close Story
          </button>
        </div>
      </div>
    </div>
  );
};

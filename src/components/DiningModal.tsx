import React, { useState } from 'react';
import { X, Clock, Utensils, Calendar } from 'lucide-react';
import { DINING_HIGHLIGHTS, RESORT_INFO } from '../data/hotelData';

interface DiningModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBookingModal: () => void;
}

export const DiningModal: React.FC<DiningModalProps> = ({
  isOpen,
  onClose,
  onOpenBookingModal,
}) => {
  const [selectedMeal, setSelectedMeal] = useState<'all' | 'signature' | 'beverages'>('all');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-[#0d1f17] rounded-3xl border border-[#c89d4c]/40 text-[#fbf9f4] shadow-2xl overflow-hidden">
        {/* Header Photo */}
        <div className="relative h-56 sm:h-64 w-full">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
            alt="The Tamarind Dining Table"
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
              GOURMET MULTI-CUISINE RESTAURANT
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-white">
              The Tamarind Table
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm text-[#ede7da]/90 leading-relaxed font-light">
            {DINING_HIGHLIGHTS.description} We celebrate authentic local Bengal & Himalayan heritage recipes alongside Continental and Mediterranean classics.
          </p>

          {/* Dining Timings */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#081510] border border-[#c89d4c]/20">
            <div>
              <p className="text-[10px] text-[#8ea498] uppercase tracking-wider">Breakfast</p>
              <p className="text-xs font-semibold text-white mt-0.5">{DINING_HIGHLIGHTS.hours.breakfast}</p>
            </div>
            <div>
              <p className="text-[10px] text-[#8ea498] uppercase tracking-wider">Lunch</p>
              <p className="text-xs font-semibold text-white mt-0.5">{DINING_HIGHLIGHTS.hours.lunch}</p>
            </div>
            <div>
              <p className="text-[10px] text-[#8ea498] uppercase tracking-wider">High Tea</p>
              <p className="text-xs font-semibold text-white mt-0.5">{DINING_HIGHLIGHTS.hours.highTea}</p>
            </div>
            <div>
              <p className="text-[10px] text-[#8ea498] uppercase tracking-wider">Dinner</p>
              <p className="text-xs font-semibold text-white mt-0.5">{DINING_HIGHLIGHTS.hours.dinner}</p>
            </div>
          </div>

          {/* Chef's Signature Menu Highlights */}
          <div>
            <h3 className="font-serif-luxury text-xl font-bold text-[#dfb85c] mb-3 flex items-center gap-2">
              <Utensils className="w-4 h-4 text-[#dfb85c]" />
              <span>Chef's Signature Selections</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {DINING_HIGHLIGHTS.signatureDishes.map((dish, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[#12281e] border border-white/5 flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-medium text-xs sm:text-sm text-white">{dish.name}</p>
                    <span className="text-xs font-bold text-[#dfb85c] whitespace-nowrap">{dish.price}</span>
                  </div>
                  <p className="text-[11px] text-[#8ea498] mt-1 line-clamp-2">{dish.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Reserve Table or Book Stay Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-[#8ea498]">
              Resort guests enjoy complimentary daily gourmet breakfast buffet.
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onOpenBookingModal();
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#dfb85c] hover:bg-[#eed08b] text-[#0b1a13] font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Stay with Dining</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

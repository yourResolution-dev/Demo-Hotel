import React from 'react';
import { Users, Bed, ArrowRight, Sparkles } from 'lucide-react';
import { RoomItem } from '../types/hotel.types';

interface RoomCardProps {
  room: RoomItem;
  onViewDetails: (room: RoomItem) => void;
  onBookNow: (room: RoomItem) => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, onViewDetails, onBookNow }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#ebe5d7] hover:border-[#c89d4c]/50 haven-card-hover flex flex-col justify-between shadow-sm">
      {/* Room Image Container */}
      <div className="relative aspect-[16/11] overflow-hidden bg-[#0b1a13]">
        <img
          src={room.mainImage}
          alt={room.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Gradient Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-70 group-hover:opacity-40 transition-opacity" />

        {/* Badge (e.g. Most Popular) */}
        {room.badge && (
          <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#0b1a13]/85 text-[#dfb85c] border border-[#c89d4c]/40 text-[11px] font-bold tracking-wide flex items-center gap-1.5 backdrop-blur-md shadow-md">
            <Sparkles className="w-3 h-3 text-[#dfb85c]" />
            <span>{room.badge}</span>
          </div>
        )}
      </div>

      {/* Room Info Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Room Title */}
          <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#0b1a13] group-hover:text-[#173527] transition-colors leading-snug">
            {room.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#5a6d63] mt-1.5 font-light leading-relaxed line-clamp-2">
            {room.shortDesc}
          </p>

          {/* Key Specs: Capacity & Bed */}
          <div className="flex items-center gap-4 sm:gap-6 mt-4 pt-4 border-t border-[#f0eae0] text-xs text-[#45574d]">
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#c89d4c]" />
              <span>{room.capacity}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-[#c89d4c]" />
              <span>{room.bedType}</span>
            </div>
          </div>
        </div>

        {/* Price & Action Button Footer */}
        <div className="flex items-center justify-between mt-5 pt-3">
          <div className="flex items-baseline gap-1">
            <span className="font-serif-luxury text-2xl sm:text-2xl font-bold text-[#0b1a13]">
              {room.formattedPrice}
            </span>
            <span className="text-xs text-[#6e8276] font-normal">/night</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onViewDetails(room)}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0b1a13] hover:text-[#c89d4c] transition-colors cursor-pointer group/link py-1"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

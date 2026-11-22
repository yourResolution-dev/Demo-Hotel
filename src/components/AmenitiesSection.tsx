import React from 'react';
import {
  Waves,
  Sparkles,
  Dumbbell,
  TreePine,
  Wifi,
  Car,
  Building2,
} from 'lucide-react';
import { AMENITIES_DATA } from '../data/hotelData';

export const AmenitiesSection: React.FC = () => {
  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Waves':
        return <Waves className="w-6 h-6 text-[#0b1a13]" strokeWidth={1.75} />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#0b1a13]" strokeWidth={1.75} />;
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-[#0b1a13]" strokeWidth={1.75} />;
      case 'TreePine':
        return <TreePine className="w-6 h-6 text-[#0b1a13]" strokeWidth={1.75} />;
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-[#0b1a13]" strokeWidth={1.75} />;
      case 'Car':
        return <Car className="w-6 h-6 text-[#0b1a13]" strokeWidth={1.75} />;
      case 'Building2':
      default:
        return <Building2 className="w-6 h-6 text-[#0b1a13]" strokeWidth={1.75} />;
    }
  };

  return (
    <section className="w-full bg-[#fbf9f4] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#c89d4c] uppercase font-sans-modern block mb-2">
            OUR AMENITIES
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#0b1a13] tracking-tight">
            Facilities for a Perfect Stay
          </h2>
        </div>

        {/* 7 Amenity Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {AMENITIES_DATA.map((amenity) => (
            <div
              key={amenity.id}
              className="group bg-white rounded-2xl p-5 border border-[#ede7da] hover:border-[#c89d4c] hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center cursor-pointer haven-card-hover"
              title={amenity.description}
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-[#f6f3eb] group-hover:bg-[#dfb85c]/20 flex items-center justify-center mb-3 transition-colors">
                {getAmenityIcon(amenity.iconName)}
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-sm font-semibold text-[#0b1a13] group-hover:text-[#173527] transition-colors leading-snug">
                {amenity.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

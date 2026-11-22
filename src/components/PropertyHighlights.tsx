import React from 'react';
import { BedDouble, TreePine, UtensilsCrossed, Sparkles } from 'lucide-react';
import { RESORT_INFO } from '../data/hotelData';

export const PropertyHighlights: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BedDouble':
        return <BedDouble className="w-6 h-6 sm:w-7 sm:h-7 text-[#c89d4c]" strokeWidth={1.75} />;
      case 'TreePine':
        return <TreePine className="w-6 h-6 sm:w-7 sm:h-7 text-[#c89d4c]" strokeWidth={1.75} />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 sm:w-7 sm:h-7 text-[#c89d4c]" strokeWidth={1.75} />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-[#c89d4c]" strokeWidth={1.75} />;
    }
  };

  return (
    <section className="w-full bg-[#f6f3eb] pt-20 sm:pt-24 pb-12 sm:pb-16 border-b border-[#ebe5d7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#ded4c0]/70">
          {RESORT_INFO.propertyHighlights.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 pt-4 sm:pt-0 ${
                index !== 0 ? 'sm:pl-6 lg:pl-8' : ''
              }`}
            >
              {/* Icon Container with subtle golden border */}
              <div className="w-12 h-12 rounded-xl bg-white/90 border border-[#c89d4c]/30 flex items-center justify-center flex-shrink-0 shadow-sm">
                {getIcon(item.icon)}
              </div>

              {/* Text content */}
              <div>
                <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#0b1a13] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5a6d63] font-normal mt-0.5 font-sans-modern">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

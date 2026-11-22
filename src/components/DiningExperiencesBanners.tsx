import React from 'react';
import { ArrowRight } from 'lucide-react';

interface DiningExperiencesBannersProps {
  onOpenDining: () => void;
  onOpenExperiences: () => void;
}

export const DiningExperiencesBanners: React.FC<DiningExperiencesBannersProps> = ({
  onOpenDining,
  onOpenExperiences,
}) => {
  return (
    <section className="w-full bg-[#fbf9f4] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Dining Experience */}
          <div
            id="dining"
            className="group relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[420px] flex flex-col justify-end p-6 sm:p-10 shadow-xl border border-[#c89d4c]/20 haven-card-hover cursor-pointer"
            onClick={onOpenDining}
          >
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
              alt="Dining Experience - candlelight culinary dish and fine wine glass"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07130e] via-[#07130e]/70 to-[#07130e]/30" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

            {/* Content */}
            <div className="relative z-10 max-w-md space-y-3">
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#dfb85c] uppercase font-sans-modern">
                DINING EXPERIENCE
              </span>

              <h3 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white leading-tight">
                A Culinary Journey
              </h3>

              <p className="text-xs sm:text-sm text-[#ede7da]/90 leading-relaxed font-light">
                Savor a delightful selection of multi-cuisine dishes crafted by our expert chefs.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 hover:bg-[#dfb85c] text-white hover:text-[#0b1a13] font-semibold text-xs tracking-wide backdrop-blur-md border border-white/20 hover:border-[#dfb85c] transition-all cursor-pointer group/btn"
                >
                  <span>Explore Dining</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Experiences */}
          <div
            id="experiences"
            className="group relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[420px] flex flex-col justify-end p-6 sm:p-10 shadow-xl border border-[#c89d4c]/20 haven-card-hover cursor-pointer"
            onClick={onOpenExperiences}
          >
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
              alt="Hiker overlooking scenic mountain valley and mist"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07130e] via-[#07130e]/70 to-[#07130e]/30" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

            {/* Content */}
            <div className="relative z-10 max-w-md space-y-3">
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#dfb85c] uppercase font-sans-modern">
                EXPERIENCES
              </span>

              <h3 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white leading-tight">
                More Than a Stay
              </h3>

              <p className="text-xs sm:text-sm text-[#ede7da]/90 leading-relaxed font-light">
                Unwind, explore and create lasting memories with our curated experiences.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 hover:bg-[#dfb85c] text-white hover:text-[#0b1a13] font-semibold text-xs tracking-wide backdrop-blur-md border border-white/20 hover:border-[#dfb85c] transition-all cursor-pointer group/btn"
                >
                  <span>Explore Experiences</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

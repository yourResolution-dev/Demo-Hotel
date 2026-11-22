import React from 'react';
import { Calendar, Users, Star, MapPin, ArrowRight } from 'lucide-react';
import { RESORT_INFO } from '../data/hotelData';

interface AboutSectionProps {
  onDiscoverStory: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onDiscoverStory }) => {
  return (
    <section id="about" className="w-full bg-[#f6f3eb] py-16 sm:py-24 border-t border-[#ebe5d7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Cinematic Facade Image with Illuminated Signage */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[5/4] shadow-2xl border border-[#c89d4c]/30">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                alt="The Haven Retreat stone facade entrance illuminated by night warm lamps"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Glowing Brand Plaque on Entrance */}
              <div className="absolute inset-x-6 bottom-6 p-4 rounded-xl bg-[#091710]/85 backdrop-blur-md border border-[#c89d4c]/40 text-center shadow-lg">
                <div className="w-8 h-8 mx-auto text-[#dfb85c] mb-1">
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" className="w-full h-full">
                    <path
                      d="M32 10C32 10 39 24 39 36C39 42 36 46 32 48C28 46 25 42 25 36C25 24 32 10 32 10Z"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="fill-[#dfb85c]/20"
                    />
                    <path
                      d="M32 26C38 20 50 18 52 28C53 35 48 42 41 45C37 46 34 47 32 48"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M32 26C26 20 14 18 12 28C11 35 16 42 23 45C27 46 30 47 32 48"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h4 className="font-serif-luxury text-sm sm:text-base font-bold text-white tracking-[0.2em] uppercase">
                  THE HAVEN
                </h4>
                <p className="text-[9px] tracking-[0.25em] text-[#dfb85c] uppercase font-sans-modern font-semibold">
                  RETREAT
                </p>
              </div>
            </div>
          </div>

          {/* Center Column: Brand Story & CTA */}
          <div className="lg:col-span-4 space-y-5">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#c89d4c] uppercase font-sans-modern block">
              ABOUT US
            </span>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#0b1a13] leading-tight">
              A Retreat in Harmony with Nature
            </h2>

            <p className="text-sm sm:text-base text-[#4c5f54] leading-relaxed font-light">
              The Haven Retreat is a boutique hotel & resort designed for travelers who seek peace, comfort and memorable experiences. Nestled amidst nature, we offer modern luxury with heartfelt hospitality.
            </p>

            <div className="pt-2">
              <button
                onClick={onDiscoverStory}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0b1a13] hover:bg-[#153526] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all cursor-pointer group"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 text-[#dfb85c] transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Clean Stat Cards */}
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-4">
            {/* Stat 1: 5+ Years */}
            <div className="p-4 rounded-xl bg-white border border-[#ebe5d7] shadow-sm flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#f6f3eb] border border-[#c89d4c]/30 flex items-center justify-center flex-shrink-0 text-[#c89d4c]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="font-serif-luxury text-2xl font-bold text-[#0b1a13] leading-none">
                  5+
                </p>
                <p className="text-xs text-[#5a6d63] mt-0.5">Years of Hospitality</p>
              </div>
            </div>

            {/* Stat 2: 10K+ Happy Guests */}
            <div className="p-4 rounded-xl bg-white border border-[#ebe5d7] shadow-sm flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#f6f3eb] border border-[#c89d4c]/30 flex items-center justify-center flex-shrink-0 text-[#c89d4c]">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="font-serif-luxury text-2xl font-bold text-[#0b1a13] leading-none">
                  10K+
                </p>
                <p className="text-xs text-[#5a6d63] mt-0.5">Happy Guests</p>
              </div>
            </div>

            {/* Stat 3: 4.9/5 Rating */}
            <div className="p-4 rounded-xl bg-white border border-[#ebe5d7] shadow-sm flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#f6f3eb] border border-[#c89d4c]/30 flex items-center justify-center flex-shrink-0 text-[#c89d4c]">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <p className="font-serif-luxury text-2xl font-bold text-[#0b1a13] leading-none">
                  4.9/5
                </p>
                <p className="text-xs text-[#5a6d63] mt-0.5">Guest Rating</p>
              </div>
            </div>

            {/* Stat 4: 1 Scenic Location */}
            <div className="p-4 rounded-xl bg-white border border-[#ebe5d7] shadow-sm flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#f6f3eb] border border-[#c89d4c]/30 flex items-center justify-center flex-shrink-0 text-[#c89d4c]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-serif-luxury text-2xl font-bold text-[#0b1a13] leading-none">
                  1
                </p>
                <p className="text-xs text-[#5a6d63] mt-0.5">Scenic Location</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

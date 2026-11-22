import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { BookingSearchParams } from '../types/hotel.types';
import { BookingSearchPanel } from './BookingSearchPanel';

interface HeroProps {
  onOpenBookingModal: () => void;
  onSearchAvailability: (params: BookingSearchParams) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal, onSearchAvailability }) => {
  const scrollToRooms = () => {
    const el = document.getElementById('rooms');
    if (el) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-[90vh] sm:min-h-[85vh] flex flex-col justify-between overflow-hidden">
      {/* Background Image with Deep Forest Lighting Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2200&q=85"
          alt="The Haven Retreat luxury resort illuminated pool at dusk"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#081510] via-[#081510]/55 to-[#081510]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-[#07130e]/30 to-[#07130e]/85" />
      </div>

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Tagline kicker */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#eed08b] uppercase font-sans-modern">
              LUXURY • COMFORT • NATURE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-luxury font-bold text-white tracking-tight leading-[1.08] mb-6 drop-shadow-md">
            Escape the Ordinary. <br />
            <span className="italic font-normal text-[#dfb85c] font-serif-display">
              Experience the Extraordinary.
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg text-[#ede7da]/90 max-w-xl font-light font-sans-modern leading-relaxed mb-8 drop-shadow">
            A serene getaway where luxury, nature and warm hospitality come together for an unforgettable stay.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenBookingModal}
              className="px-6 sm:px-8 py-3.5 rounded-full bg-[#dfb85c] hover:bg-[#eed08b] text-[#0b1a13] font-bold text-xs sm:text-sm tracking-wide shadow-xl hover:shadow-[0_0_25px_rgba(223,184,92,0.45)] transition-all cursor-pointer flex items-center gap-2.5 transform hover:scale-[1.02] active:scale-95"
            >
              <span>Book Your Stay</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={scrollToRooms}
              className="px-6 sm:px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm tracking-wide border border-white/25 hover:border-white/40 backdrop-blur-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Explore Rooms</span>
              <Play className="w-3.5 h-3.5 fill-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Booking Search Panel at Base */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 w-full -mb-10 sm:-mb-12">
        <BookingSearchPanel onSearch={onSearchAvailability} />
      </div>
    </section>
  );
};

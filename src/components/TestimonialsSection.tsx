import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/hotelData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-[#fbf9f4] py-16 sm:py-24 border-t border-[#ebe5d7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Carousel Controls */}
        <div className="flex items-end justify-between mb-8 sm:mb-12">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-[#c89d4c] uppercase font-sans-modern block mb-2">
              GUEST STORIES
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#0b1a13] tracking-tight">
              What Our Guests Say
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-[#ded4c0] bg-white hover:bg-[#0b1a13] hover:text-[#dfb85c] text-[#0b1a13] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-[#ded4c0] bg-white hover:bg-[#0b1a13] hover:text-[#dfb85c] text-[#0b1a13] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 Testimonial Cards Layout matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.slice(0, 3).map((item, idx) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl p-6 sm:p-7 border border-[#ebe5d7] shadow-sm flex flex-col justify-between haven-card-hover ${
                idx === currentIndex ? 'ring-2 ring-[#c89d4c]/50' : ''
              }`}
            >
              <div>
                {/* Guest Profile & 5 Stars */}
                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    src={item.avatar}
                    alt={item.guestName}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#dfb85c]"
                  />
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-[#0b1a13]">
                      {item.guestName}
                    </h3>
                    <div className="flex items-center gap-1 mt-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#dfb85c] text-[#dfb85c]" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#4c5f54] font-light leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Room Stayed Tag */}
              <div className="mt-5 pt-3 border-t border-[#f5f1e8] flex items-center justify-between text-[11px] text-[#718579]">
                <span>Stayed in {item.roomStayed}</span>
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

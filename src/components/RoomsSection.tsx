import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { RoomItem } from '../types/hotel.types';
import { ROOMS_DATA } from '../data/hotelData';
import { RoomCard } from './RoomCard';

interface RoomsSectionProps {
  onViewDetails: (room: RoomItem) => void;
  onBookNow: (room: RoomItem) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onViewDetails, onBookNow }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'room' | 'suite' | 'villa'>('all');

  const filteredRooms = activeCategory === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter((r) => r.category === activeCategory);

  return (
    <section id="rooms" className="w-full bg-[#fbf9f4] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-[#c89d4c] uppercase font-sans-modern block mb-2">
              OUR STAYS
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#0b1a13] tracking-tight">
              Rooms & Suites
            </h2>
          </div>

          {/* Right Header Navigation & Filters */}
          <div className="flex items-center gap-4 flex-wrap justify-between md:justify-end">
            {/* Filter Tabs */}
            <div className="inline-flex p-1 rounded-full bg-[#ede7da]/60 border border-[#ded4c0]/50 text-xs">
              {[
                { id: 'all', label: 'All Stays' },
                { id: 'room', label: 'Rooms' },
                { id: 'suite', label: 'Suites' },
                { id: 'villa', label: 'Villas' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-3 sm:px-4 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                    activeCategory === tab.id
                      ? 'bg-[#0b1a13] text-[#dfb85c] shadow-sm'
                      : 'text-[#45574d] hover:text-[#0b1a13]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* View All button */}
            <button
              onClick={() => setActiveCategory('all')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0b1a13] hover:text-[#c89d4c] transition-colors cursor-pointer group"
            >
              <span>View All Rooms</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onViewDetails={onViewDetails}
              onBookNow={onBookNow}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

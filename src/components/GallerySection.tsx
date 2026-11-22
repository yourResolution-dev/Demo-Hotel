import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { GALLERY_DATA } from '../data/hotelData';
import { GalleryPhoto } from '../types/hotel.types';
import { LightboxModal } from './LightboxModal';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'pool', label: 'Swimming Pool' },
    { id: 'dining', label: 'Dining' },
    { id: 'landscapes', label: 'Landscapes' },
    { id: 'amenities', label: 'Spa & Wellness' },
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="gallery" className="w-full bg-[#f6f3eb] py-16 sm:py-24 border-t border-[#ebe5d7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#c89d4c] uppercase font-sans-modern block mb-2">
            PHOTO GALLERY
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#0b1a13] tracking-tight">
            Moments at The Haven Retreat
          </h2>
          <p className="text-xs sm:text-sm text-[#5a6d63] mt-2 font-light">
            Explore glimpses of our serene architecture, bespoke suites, and emerald landscapes.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#0b1a13] text-[#dfb85c] shadow-sm'
                  : 'bg-white/80 hover:bg-white text-[#45574d] border border-[#ebe5d7]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0b1a13] shadow-md border border-[#ebe5d7] hover:border-[#c89d4c] cursor-pointer"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

              {/* Hover Details */}
              <div className="absolute inset-x-5 bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif-luxury text-base font-bold text-white leading-snug">
                    {photo.title}
                  </h4>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-[11px] text-[#ede7da]/80 mt-1 line-clamp-1">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Popover */}
      <LightboxModal
        photo={activePhoto}
        photos={filteredPhotos}
        onClose={() => setActivePhoto(null)}
        onSelectPhoto={(p) => setActivePhoto(p)}
      />
    </section>
  );
};

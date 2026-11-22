import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryPhoto } from '../types/hotel.types';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  photos: GalleryPhoto[];
  onClose: () => void;
  onSelectPhoto: (photo: GalleryPhoto) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  photos,
  onClose,
  onSelectPhoto,
}) => {
  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    onSelectPhoto(photos[prevIdx]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
    onSelectPhoto(photos[nextIdx]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const prevIdx = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
        onSelectPhoto(photos[prevIdx]);
      }
      if (e.key === 'ArrowRight') {
        const nextIdx = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
        onSelectPhoto(photos[nextIdx]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, photos, onClose, onSelectPhoto]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-md animate-fade-in"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-black/60 text-white hover:bg-[#dfb85c] hover:text-black transition-colors"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-black/60 text-white hover:bg-[#dfb85c] hover:text-black transition-colors"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
      >
        <img
          src={photo.imageUrl}
          alt={photo.title}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
        />

        {/* Caption */}
        <div className="mt-4 text-center text-white px-4 max-w-2xl">
          <h4 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#dfb85c]">
            {photo.title}
          </h4>
          <p className="text-xs sm:text-sm text-[#ede7da]/80 mt-1 font-light">
            {photo.caption}
          </p>
        </div>
      </div>
    </div>
  );
};

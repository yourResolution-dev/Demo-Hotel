import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResolutionDemoBanner } from './components/ResolutionDemoBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PropertyHighlights } from './components/PropertyHighlights';
import { RoomsSection } from './components/RoomsSection';
import { AboutSection } from './components/AboutSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { DiningExperiencesBanners } from './components/DiningExperiencesBanners';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTop } from './components/BackToTop';
import { BookingEnquiryModal } from './components/BookingEnquiryModal';
import { InquiryModal } from './components/InquiryModal';
import { DiningModal } from './components/DiningModal';
import { ExperiencesModal } from './components/ExperiencesModal';
import { StoryModal } from './components/StoryModal';
import { RoomItem, BookingSearchParams } from './types/hotel.types';
import { RESORT_INFO } from './data/hotelData';

export const HotelDemoPage: React.FC = () => {
  const navigate = useNavigate();

  // Page title
  useEffect(() => {
    document.title = `${RESORT_INFO.name} | Luxury Boutique Hotel & Resort (ReSolution Demo)`;
  }, []);

  // Modal states
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState<string | undefined>(undefined);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [isDiningModalOpen, setIsDiningModalOpen] = useState(false);
  const [isExperiencesModalOpen, setIsExperiencesModalOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  // Search notification state
  const [searchFeedback, setSearchFeedback] = useState<string | null>(null);

  const handleOpenBookingModal = (roomId?: string) => {
    setSelectedRoomForBooking(roomId);
    setIsBookingModalOpen(true);
  };

  const handleViewDetails = (room: RoomItem) => {
    navigate(`/demos/hotel/rooms/${room.slug}`);
  };

  const handleBookNow = (room: RoomItem) => {
    handleOpenBookingModal(room.id);
  };

  const handleSearchAvailability = (params: BookingSearchParams) => {
    setSearchFeedback(
      `Showing available rooms for ${params.checkInDate} to ${params.checkOutDate} (${params.adults} Adults, ${params.children} Children)`
    );

    // Smooth scroll down to rooms section
    const roomsEl = document.getElementById('rooms');
    if (roomsEl) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = roomsEl.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: 'smooth',
      });
    }

    setTimeout(() => {
      setSearchFeedback(null);
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-[#fcfbf8] text-[#0b1a13] font-sans-modern flex flex-col justify-between selection:bg-[#dfb85c] selection:text-[#0b1a13]">
      {/* 1. ReSolution Agency Demo Showcase Top Banner */}
      <ResolutionDemoBanner onOpenInquiry={() => setIsInquiryModalOpen(true)} />

      {/* 2. Main Navigation Bar */}
      <Navbar onOpenBookingModal={() => handleOpenBookingModal()} />

      {/* Search Feedback Notification Toast */}
      {searchFeedback && (
        <div className="fixed top-20 right-4 z-50 bg-[#0b1a13] text-[#dfb85c] border border-[#c89d4c]/50 px-4 py-3 rounded-2xl shadow-2xl text-xs flex items-center gap-2 animate-fade-in backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{searchFeedback}</span>
        </div>
      )}

      {/* 3. Hero Section with Headline, Tagline, CTAs & Booking Search Panel */}
      <Hero
        onOpenBookingModal={() => handleOpenBookingModal()}
        onSearchAvailability={handleSearchAvailability}
      />

      {/* 4. Four Property Highlights */}
      <PropertyHighlights />

      {/* 5. Rooms & Suites Section */}
      <RoomsSection
        onViewDetails={handleViewDetails}
        onBookNow={handleBookNow}
      />

      {/* 6. About the Retreat with Exterior Photography, Story & Animated Stats */}
      <AboutSection onDiscoverStory={() => setIsStoryModalOpen(true)} />

      {/* 7. Seven Facilities / Amenities */}
      <AmenitiesSection />

      {/* 8. Dining & Curated Experiences Side-by-side Visual Banners */}
      <DiningExperiencesBanners
        onOpenDining={() => setIsDiningModalOpen(true)}
        onOpenExperiences={() => setIsExperiencesModalOpen(true)}
      />

      {/* 9. Guest Testimonials with Ratings & Carousel */}
      <TestimonialsSection />

      {/* 10. Interactive Image Gallery with Lightbox Navigation */}
      <GallerySection />

      {/* 11. Final CTA Section */}
      <FinalCtaSection onOpenBookingModal={() => handleOpenBookingModal()} />

      {/* 12. Full Brand Footer */}
      <Footer
        onOpenBookingModal={(rId) => handleOpenBookingModal(rId)}
        onOpenInquiry={() => setIsInquiryModalOpen(true)}
      />

      {/* Floating Helpers */}
      <FloatingWhatsApp />
      <BackToTop />

      {/* Interactive Modals */}
      <BookingEnquiryModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preselectedRoomId={selectedRoomForBooking}
      />

      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
      />

      <DiningModal
        isOpen={isDiningModalOpen}
        onClose={() => setIsDiningModalOpen(false)}
        onOpenBookingModal={() => handleOpenBookingModal()}
      />

      <ExperiencesModal
        isOpen={isExperiencesModalOpen}
        onClose={() => setIsExperiencesModalOpen(false)}
        onOpenBookingModal={() => handleOpenBookingModal()}
      />

      <StoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
      />
    </div>
  );
};

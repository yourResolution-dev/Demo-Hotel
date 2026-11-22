import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Users,
  Bed,
  Maximize,
  Compass,
  CheckCircle2,
  Calendar,
  Sparkles,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { ROOMS_DATA, RESORT_INFO } from '../data/hotelData';
import { RoomItem } from '../types/hotel.types';
import { ResolutionDemoBanner } from './ResolutionDemoBanner';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { BackToTop } from './BackToTop';
import { BookingEnquiryModal } from './BookingEnquiryModal';
import { InquiryModal } from './InquiryModal';

export const RoomDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find room or fallback to first room
  const room = ROOMS_DATA.find((r) => r.slug === slug) || ROOMS_DATA[0];

  const [activePhoto, setActivePhoto] = useState<string>(room.mainImage);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  useEffect(() => {
    setActivePhoto(room.mainImage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${room.title} | ${RESORT_INFO.name}`;
  }, [room]);

  // Similar rooms
  const similarRooms = ROOMS_DATA.filter((r) => r.id !== room.id).slice(0, 3);

  const handleBackToHome = () => {
    navigate('/demos/hotel');
  };

  return (
    <div className="min-h-screen bg-[#fcfbf8] text-[#0b1a13] font-sans-modern flex flex-col justify-between">
      {/* ReSolution Showcase Banner */}
      <ResolutionDemoBanner onOpenInquiry={() => setIsInquiryModalOpen(true)} />

      {/* Main Navbar */}
      <Navbar onOpenBookingModal={() => setIsBookingModalOpen(true)} />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-1 w-full">
        
        {/* Breadcrumbs & Back Button */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0b1a13] hover:text-[#c89d4c] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Rooms</span>
          </button>

          <div className="text-xs text-[#73887d] hidden sm:block">
            <span>Home</span> / <span>Rooms</span> / <span className="font-semibold text-[#0b1a13]">{room.title}</span>
          </div>
        </div>

        {/* Room Header Info */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#c89d4c] uppercase font-sans-modern">
              {room.category === 'villa' ? 'LUXURY VILLA' : room.category === 'suite' ? 'PREMIUM SUITE' : 'DELUXE ROOM'}
            </span>
            {room.badge && (
              <span className="px-2.5 py-0.5 rounded-full bg-[#0b1a13] text-[#dfb85c] text-[10px] font-bold tracking-wide">
                {room.badge}
              </span>
            )}
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#0b1a13] tracking-tight">
            {room.title}
          </h1>
          <p className="text-sm sm:text-base text-[#5a6d63] mt-1 font-light">
            {room.subtitle}
          </p>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Main Large Image */}
          <div className="lg:col-span-8 rounded-2xl overflow-hidden aspect-[16/10] bg-[#0b1a13] shadow-md border border-[#ebe5d7]">
            <img
              src={activePhoto}
              alt={room.title}
              className="w-full h-full object-cover object-center transition-all duration-500"
            />
          </div>

          {/* Thumbnails list */}
          <div className="lg:col-span-4 grid grid-cols-4 lg:grid-cols-1 gap-3">
            {room.galleryImages.map((imgUrl, idx) => (
              <div
                key={idx}
                onClick={() => setActivePhoto(imgUrl)}
                className={`relative rounded-xl overflow-hidden aspect-[16/10] cursor-pointer border-2 transition-all ${
                  activePhoto === imgUrl
                    ? 'border-[#c89d4c] shadow-md scale-[1.02]'
                    : 'border-transparent opacity-75 hover:opacity-100'
                }`}
              >
                <img
                  src={imgUrl}
                  alt={`${room.title} view ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Two-Column Details & Sticky Booking Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Left: Room Specifications & Amenities */}
          <div className="lg:col-span-7 space-y-8">
            {/* Quick Specs Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-white border border-[#ebe5d7] flex items-center gap-3">
                <Users className="w-5 h-5 text-[#c89d4c]" />
                <div>
                  <p className="text-[10px] text-[#73887d] uppercase">Capacity</p>
                  <p className="text-xs font-bold text-[#0b1a13]">{room.capacity}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#ebe5d7] flex items-center gap-3">
                <Bed className="w-5 h-5 text-[#c89d4c]" />
                <div>
                  <p className="text-[10px] text-[#73887d] uppercase">Bed Type</p>
                  <p className="text-xs font-bold text-[#0b1a13]">{room.bedType}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#ebe5d7] flex items-center gap-3">
                <Maximize className="w-5 h-5 text-[#c89d4c]" />
                <div>
                  <p className="text-[10px] text-[#73887d] uppercase">Room Size</p>
                  <p className="text-xs font-bold text-[#0b1a13]">{room.roomSize}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#ebe5d7] flex items-center gap-3">
                <Compass className="w-5 h-5 text-[#c89d4c]" />
                <div>
                  <p className="text-[10px] text-[#73887d] uppercase">Outlook View</p>
                  <p className="text-xs font-bold text-[#0b1a13] truncate">{room.view}</p>
                </div>
              </div>
            </div>

            {/* In-Depth Description */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#ebe5d7] shadow-sm space-y-4">
              <h2 className="font-serif-luxury text-2xl font-bold text-[#0b1a13]">
                About the {room.title}
              </h2>
              <p className="text-sm text-[#4c5f54] leading-relaxed font-light">
                {room.fullDesc}
              </p>

              {/* Highlights */}
              <div className="pt-4 border-t border-[#f5f1e8] space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0b1a13]">
                  Room Highlights
                </h4>
                <ul className="space-y-1.5">
                  {room.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-[#4c5f54] flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#c89d4c] flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Comprehensive Amenities List */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#ebe5d7] shadow-sm space-y-4">
              <h2 className="font-serif-luxury text-2xl font-bold text-[#0b1a13]">
                Room Amenities & Inclusions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {room.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs text-[#3f5247]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Booking Enquiry Card (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-[#0b1a13] rounded-3xl p-6 sm:p-8 text-[#fcfbf8] border border-[#c89d4c]/40 shadow-2xl space-y-6">
              
              <div className="flex items-baseline justify-between border-b border-white/10 pb-5">
                <div>
                  <span className="text-[10px] text-[#dfb85c] uppercase tracking-wider">Nightly Rate</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">
                      {room.formattedPrice}
                    </span>
                    <span className="text-xs text-[#8ea498]">/night</span>
                  </div>
                </div>
                <div className="text-right text-[11px] text-[#8ea498]">
                  <span>+ 12% GST applicable</span>
                  <p className="text-emerald-400 font-semibold mt-0.5">Breakfast Included</p>
                </div>
              </div>

              {/* Quick Perks */}
              <div className="space-y-2 text-xs text-[#ede7da]/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#dfb85c]" />
                  <span>Free cancellation up to 48 hours prior</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#dfb85c]" />
                  <span>Complimentary heated pool access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#dfb85c]" />
                  <span>Best Rate Guaranteed directly through retreat</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#dfb85c] to-[#c89d4c] hover:brightness-105 text-[#0b1a13] font-bold text-sm tracking-wide shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 transform active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve This {room.category === 'villa' ? 'Villa' : 'Room'}</span>
                </button>

                <a
                  href={`tel:${RESORT_INFO.phone}`}
                  className="w-full py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors border border-white/20"
                >
                  <Phone className="w-3.5 h-3.5 text-[#dfb85c]" />
                  <span>Direct Reservations: {RESORT_INFO.phoneDisplay}</span>
                </a>
              </div>

              <div className="pt-2 text-center text-[10px] text-[#8ea498] flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#dfb85c]" />
                <span>Instant Confirmation & No Prepayment Required Today</span>
              </div>
            </div>
          </div>

        </div>

        {/* Similar Rooms Recommendations */}
        <div className="border-t border-[#ebe5d7] pt-12">
          <div className="mb-8">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#c89d4c] uppercase font-sans-modern block mb-1">
              EXPLORE MORE
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#0b1a13]">
              Similar Stays You Might Love
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {similarRooms.map((simRoom) => (
              <div
                key={simRoom.id}
                onClick={() => navigate(`/demos/hotel/rooms/${simRoom.slug}`)}
                className="bg-white rounded-2xl overflow-hidden border border-[#ebe5d7] hover:border-[#c89d4c] haven-card-hover cursor-pointer"
              >
                <div className="aspect-[16/11] overflow-hidden">
                  <img
                    src={simRoom.mainImage}
                    alt={simRoom.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-serif-luxury text-xl font-bold text-[#0b1a13]">
                    {simRoom.title}
                  </h4>
                  <p className="text-xs text-[#5a6d63] mt-1 line-clamp-1">{simRoom.shortDesc}</p>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#f5f1e8]">
                    <span className="font-serif-luxury text-lg font-bold text-[#0b1a13]">
                      {simRoom.formattedPrice}
                      <span className="text-xs font-normal text-gray-500"> /night</span>
                    </span>
                    <span className="text-xs font-semibold text-[#c89d4c]">View Details &rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer
        onOpenBookingModal={(rId) => {
          setIsBookingModalOpen(true);
        }}
        onOpenInquiry={() => setIsInquiryModalOpen(true)}
      />

      {/* Floating Helpers */}
      <FloatingWhatsApp />
      <BackToTop />

      {/* Modals */}
      <BookingEnquiryModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preselectedRoomId={room.id}
      />

      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
      />
    </div>
  );
};

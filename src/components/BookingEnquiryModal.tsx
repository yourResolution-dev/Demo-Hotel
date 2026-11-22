import React, { useState, useEffect, useMemo } from 'react';
import { X, Calendar, Users, CheckCircle2, MessageSquare, CreditCard, ShieldCheck } from 'lucide-react';
import { ROOMS_DATA, RESORT_INFO } from '../data/hotelData';
import { RoomItem } from '../types/hotel.types';

interface BookingEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoomId?: string;
}

export const BookingEnquiryModal: React.FC<BookingEnquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedRoomId,
}) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 2);
  const formatDateForInput = (d: Date) => d.toISOString().split('T')[0];

  const [selectedRoomId, setSelectedRoomId] = useState<string>(
    preselectedRoomId || ROOMS_DATA[0].id
  );
  const [checkIn, setCheckIn] = useState(formatDateForInput(today));
  const [checkOut, setCheckOut] = useState(formatDateForInput(tomorrow));
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState('');

  useEffect(() => {
    if (preselectedRoomId) {
      setSelectedRoomId(preselectedRoomId);
    }
  }, [preselectedRoomId]);

  const selectedRoom: RoomItem = useMemo(() => {
    return ROOMS_DATA.find((r) => r.id === selectedRoomId) || ROOMS_DATA[0];
  }, [selectedRoomId]);

  // Calculate nights
  const nightsCount = useMemo(() => {
    try {
      const d1 = new Date(checkIn);
      const d2 = new Date(checkOut);
      const diffTime = d2.getTime() - d1.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    } catch {
      return 1;
    }
  }, [checkIn, checkOut]);

  // Calculation in INR
  const baseRate = selectedRoom.pricePerNight * nightsCount;
  const taxes = Math.round(baseRate * 0.12);
  const totalAmount = baseRate + taxes;

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = 'HAVEN-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationNumber(randomCode);
    setSubmitted(true);
  };

  const handleWhatsAppConfirmation = () => {
    const text = encodeURIComponent(
      `Hello The Haven Retreat! I would like to confirm my booking enquiry.\n` +
      `Booking Reference: ${confirmationNumber}\n` +
      `Room: ${selectedRoom.title}\n` +
      `Dates: ${checkIn} to ${checkOut} (${nightsCount} night${nightsCount > 1 ? 's' : ''})\n` +
      `Guests: ${adults} Adults, ${children} Children\n` +
      `Name: ${fullName}\n` +
      `Phone: ${phone}`
    );
    window.open(`https://wa.me/${RESORT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl my-6 bg-[#0c1e15] rounded-3xl border border-[#c89d4c]/40 text-[#fbf9f4] shadow-2xl overflow-hidden p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#ede7da]/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation View */
          <div className="text-center py-6 space-y-5 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#dfb85c] uppercase">
                RESERVATION ENQUIRY RECEIVED
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-1">
                We Look Forward to Welcoming You
              </h2>
              <p className="text-xs text-[#9eb5a8] mt-1">
                Booking Reference: <strong className="text-[#dfb85c] font-mono">{confirmationNumber}</strong>
              </p>
            </div>

            {/* Summary card */}
            <div className="bg-[#07130e] rounded-2xl p-4 sm:p-5 border border-[#c89d4c]/20 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#8ea498]">Room Selected:</span>
                <span className="font-bold text-white">{selectedRoom.title}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#8ea498]">Stay Duration:</span>
                <span className="text-white">{checkIn} to {checkOut} ({nightsCount} nights)</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#8ea498]">Guests:</span>
                <span className="text-white">{adults} Adults, {children} Children</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#8ea498]">Guest Contact:</span>
                <span className="text-white">{fullName} ({phone})</span>
              </div>
              <div className="flex justify-between pt-1 text-sm font-bold">
                <span className="text-[#dfb85c]">Estimated Total:</span>
                <span className="text-[#dfb85c]">₹{totalAmount.toLocaleString('en-IN')} (incl. GST)</span>
              </div>
            </div>

            <p className="text-[11px] text-[#8ea498] max-w-md mx-auto">
              Our concierge desk has received your request. We will reach out shortly via phone or WhatsApp to confirm your room assignment.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleWhatsAppConfirmation}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant Connect on WhatsApp</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Form View */
          <div>
            <div className="text-center mb-6">
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#dfb85c] uppercase font-sans-modern block">
                BOOK YOUR ESCAPE
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-1">
                Reservation Enquiry
              </h2>
              <p className="text-xs text-[#9eb5a8] mt-1">
                Experience authentic boutique luxury at The Haven Retreat
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Room */}
              <div>
                <label className="block text-xs font-semibold text-[#ede7da] mb-1">
                  Select Room / Suite *
                </label>
                <select
                  value={selectedRoomId}
                  onChange={(e) => setSelectedRoomId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#07130e] border border-[#c89d4c]/30 text-white text-xs haven-input-focus cursor-pointer"
                >
                  {ROOMS_DATA.map((r) => (
                    <option key={r.id} value={r.id} className="bg-[#0b1a13] text-white">
                      {r.title} — {r.formattedPrice} / night ({r.capacity})
                    </option>
                  ))}
                </select>
              </div>

              {/* Dates & Guests Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#ede7da] mb-1">
                    Check-in *
                  </label>
                  <input
                    type="date"
                    required
                    min={formatDateForInput(today)}
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#07130e] border border-[#c89d4c]/30 text-white text-xs haven-input-focus"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#ede7da] mb-1">
                    Check-out *
                  </label>
                  <input
                    type="date"
                    required
                    min={checkIn}
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#07130e] border border-[#c89d4c]/30 text-white text-xs haven-input-focus"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#ede7da] mb-1">
                    Guests *
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="w-1/2 px-2.5 py-2 rounded-xl bg-[#07130e] border border-[#c89d4c]/30 text-white text-xs haven-input-focus"
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                    </select>
                    <select
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                      className="w-1/2 px-2.5 py-2 rounded-xl bg-[#07130e] border border-[#c89d4c]/30 text-white text-xs haven-input-focus"
                    >
                      <option value="0">0 Child</option>
                      <option value="1">1 Child</option>
                      <option value="2">2 Children</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#ede7da] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Suman Sengupta"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#07130e] border border-[#c89d4c]/30 text-white text-xs haven-input-focus placeholder-[#657d71]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#ede7da] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#07130e] border border-[#c89d4c]/30 text-white text-xs haven-input-focus placeholder-[#657d71]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#ede7da] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. guest@havenretreat.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#07130e] border border-[#c89d4c]/30 text-white text-xs haven-input-focus placeholder-[#657d71]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#ede7da] mb-1">
                    Special Requests (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Quiet floor, honeymoon setup, airport taxi"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#07130e] border border-[#c89d4c]/30 text-white text-xs haven-input-focus placeholder-[#657d71]"
                  />
                </div>
              </div>

              {/* Price Calculation Box */}
              <div className="p-3.5 rounded-2xl bg-[#07130e] border border-[#c89d4c]/20 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#9eb5a8]">{selectedRoom.title} × {nightsCount} night{nightsCount > 1 ? 's' : ''}</span>
                  <p className="text-[11px] text-[#657d71]">Includes complimentary gourmet breakfast</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-[#dfb85c]">
                    ₹{totalAmount.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10px] text-[#657d71] block">+ 12% GST included</span>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#dfb85c] to-[#c89d4c] hover:brightness-105 text-[#0b1a13] font-bold text-xs sm:text-sm tracking-wide shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confirm Reservation Enquiry</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

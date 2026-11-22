import React, { useState } from 'react';
import { Calendar, Users, Search, ChevronDown, Plus, Minus } from 'lucide-react';
import { BookingSearchParams } from '../types/hotel.types';

interface BookingSearchPanelProps {
  onSearch: (params: BookingSearchParams) => void;
}

export const BookingSearchPanel: React.FC<BookingSearchPanelProps> = ({ onSearch }) => {
  // Today and Tomorrow formatted for default inputs
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 2);

  const formatDateForInput = (d: Date) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDateForInput(today));
  const [checkOut, setCheckOut] = useState(formatDateForInput(tomorrow));
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomsCount, setRoomsCount] = useState(1);
  const [isGuestPickerOpen, setIsGuestPickerOpen] = useState(false);
  const [dateError, setDateError] = useState<string | null>(null);

  const handleCheckInChange = (newDate: string) => {
    setCheckIn(newDate);
    // If checkout is before or same as check-in, advance checkout by 1 day
    if (newDate >= checkOut) {
      const nextDay = new Date(newDate);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOut(formatDateForInput(nextDay));
    }
    setDateError(null);
  };

  const handleCheckOutChange = (newDate: string) => {
    if (newDate <= checkIn) {
      setDateError('Check-out date must be after check-in date');
      return;
    }
    setDateError(null);
    setCheckOut(newDate);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (checkOut <= checkIn) {
      setDateError('Check-out date must be after check-in date');
      return;
    }
    setIsGuestPickerOpen(false);
    onSearch({
      checkInDate: checkIn,
      checkOutDate: checkOut,
      adults,
      children,
      roomsCount,
    });
  };

  // Helper display date
  const formatDisplayDate = (dateStr: string) => {
    try {
      const [year, month, day] = dateStr.split('-');
      const d = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      return d.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="w-full bg-[#fcfbf8] rounded-2xl sm:rounded-full p-2.5 sm:p-3 shadow-[0_15px_45px_rgba(0,0,0,0.25)] border border-[#c89d4c]/30">
      <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
        
        {/* Check-In Field */}
        <div className="flex-1 px-4 py-2 rounded-xl sm:rounded-full hover:bg-[#f5f1e8] transition-colors relative cursor-pointer border border-transparent hover:border-[#c89d4c]/30">
          <label className="text-[11px] font-semibold text-[#6d7f75] uppercase tracking-wider block">
            Check-in
          </label>
          <div className="flex items-center gap-2 mt-0.5">
            <Calendar className="w-4 h-4 text-[#c89d4c] flex-shrink-0" />
            <input
              type="date"
              min={formatDateForInput(today)}
              value={checkIn}
              onChange={(e) => handleCheckInChange(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#0b1a13] focus:outline-none cursor-pointer"
            />
          </div>
        </div>

        <div className="hidden sm:block w-[1px] h-9 bg-[#ded4c0]" />

        {/* Check-Out Field */}
        <div className="flex-1 px-4 py-2 rounded-xl sm:rounded-full hover:bg-[#f5f1e8] transition-colors relative cursor-pointer border border-transparent hover:border-[#c89d4c]/30">
          <label className="text-[11px] font-semibold text-[#6d7f75] uppercase tracking-wider block">
            Check-out
          </label>
          <div className="flex items-center gap-2 mt-0.5">
            <Calendar className="w-4 h-4 text-[#c89d4c] flex-shrink-0" />
            <input
              type="date"
              min={checkIn}
              value={checkOut}
              onChange={(e) => handleCheckOutChange(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#0b1a13] focus:outline-none cursor-pointer"
            />
          </div>
        </div>

        <div className="hidden sm:block w-[1px] h-9 bg-[#ded4c0]" />

        {/* Guests Field with Dropdown Popover */}
        <div className="flex-1 px-4 py-2 rounded-xl sm:rounded-full hover:bg-[#f5f1e8] transition-colors relative cursor-pointer border border-transparent hover:border-[#c89d4c]/30">
          <div onClick={() => setIsGuestPickerOpen(!isGuestPickerOpen)}>
            <label className="text-[11px] font-semibold text-[#6d7f75] uppercase tracking-wider block">
              Guests
            </label>
            <div className="flex items-center justify-between gap-1 mt-0.5">
              <div className="flex items-center gap-2 overflow-hidden">
                <Users className="w-4 h-4 text-[#c89d4c] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#0b1a13] truncate">
                  {adults} Adult{adults > 1 ? 's' : ''}, {children} Child{children !== 1 ? 'ren' : ''}
                </span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-[#6d7f75] flex-shrink-0" />
            </div>
          </div>

          {/* Guest Selector Popover */}
          {isGuestPickerOpen && (
            <div className="absolute top-full left-0 sm:left-auto right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-[#c89d4c]/30 p-4 z-50 text-[#0b1a13] animate-fade-in">
              <div className="space-y-3.5">
                {/* Adults */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-[#0b1a13]">Adults</p>
                    <p className="text-[10px] text-gray-500">Ages 13 and above</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      disabled={adults <= 1}
                      onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                      className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 cursor-pointer"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-5 text-center text-xs font-bold">{adults}</span>
                    <button
                      type="button"
                      disabled={adults >= 8}
                      onClick={() => setAdults((prev) => Math.min(8, prev + 1))}
                      className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-[#0b1a13]">Children</p>
                    <p className="text-[10px] text-gray-500">Ages 0 to 12</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      disabled={children <= 0}
                      onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
                      className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 cursor-pointer"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-5 text-center text-xs font-bold">{children}</span>
                    <button
                      type="button"
                      disabled={children >= 6}
                      onClick={() => setChildren((prev) => Math.min(6, prev + 1))}
                      className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Rooms */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                  <div>
                    <p className="text-xs font-bold text-[#0b1a13]">Rooms</p>
                    <p className="text-[10px] text-gray-500">Number of accommodations</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      disabled={roomsCount <= 1}
                      onClick={() => setRoomsCount((prev) => Math.max(1, prev - 1))}
                      className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 cursor-pointer"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-5 text-center text-xs font-bold">{roomsCount}</span>
                    <button
                      type="button"
                      disabled={roomsCount >= 4}
                      onClick={() => setRoomsCount((prev) => Math.min(4, prev + 1))}
                      className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsGuestPickerOpen(false)}
                  className="w-full mt-2 py-2 rounded-xl bg-[#0b1a13] text-[#dfb85c] text-xs font-bold hover:bg-[#153426] transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Action Button: Check Availability */}
        <div className="flex-shrink-0">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-xl sm:rounded-full bg-[#0b1a13] hover:bg-[#143224] text-[#dfb85c] hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer transform active:scale-95"
          >
            <Search className="w-4 h-4 text-[#dfb85c]" />
            <span>Check Availability</span>
          </button>
        </div>
      </form>

      {dateError && (
        <div className="px-4 py-1.5 mt-1 text-[11px] text-red-600 font-medium">
          {dateError}
        </div>
      )}
    </div>
  );
};

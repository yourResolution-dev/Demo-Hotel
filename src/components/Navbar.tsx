import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ArrowRight } from 'lucide-react';
import { RESORT_INFO } from '../data/hotelData';

interface NavbarProps {
  onOpenBookingModal: (preselectedRoom?: string) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal, activeSection = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Rooms', href: '#rooms', id: 'rooms' },
    { name: 'Dining', href: '#dining', id: 'dining' },
    { name: 'Experiences', href: '#experiences', id: 'experiences' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const offset = 75;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#081510]/95 backdrop-blur-md py-3 shadow-[0_4px_25px_rgba(0,0,0,0.5)] border-b border-[#c89d4c]/20'
          : 'bg-[#0a1811]/90 backdrop-blur-sm py-4 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Golden Lotus Motif */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            {/* Lotus SVG Emblem */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 text-[#dfb85c] group-hover:text-[#eed08b] transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
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
                <path
                  d="M32 48C42 50 56 46 58 37"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M32 48C22 50 8 46 6 37"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="32" cy="51" r="2.5" fill="#dfb85c" />
              </svg>
            </div>

            {/* Brand Title */}
            <div className="flex flex-col">
              <span className="font-serif-luxury text-base sm:text-xl font-bold tracking-[0.2em] text-[#fcfbf8] uppercase leading-tight group-hover:text-[#dfb85c] transition-colors">
                THE HAVEN RETREAT
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.3em] font-sans-modern font-semibold text-[#dfb85c] uppercase">
                HOTEL & RESORT
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-xs xl:text-sm font-sans-modern tracking-wide transition-all cursor-pointer relative py-1 ${
                    isActive
                      ? 'text-[#dfb85c] font-semibold'
                      : 'text-[#ede7da] hover:text-[#dfb85c] font-normal'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#dfb85c] rounded-full animate-fade-in" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Direct Phone & CTA */}
          <div className="hidden md:flex items-center gap-4 xl:gap-6">
            <a
              href={`tel:${RESORT_INFO.phone}`}
              className="inline-flex items-center gap-2 text-xs xl:text-sm font-medium text-[#ede7da] hover:text-[#dfb85c] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#dfb85c]" />
              <span>{RESORT_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-full bg-[#dfb85c] hover:bg-[#eed08b] text-[#0b1a13] font-semibold text-xs xl:text-sm shadow-md hover:shadow-[0_0_20px_rgba(223,184,92,0.45)] transition-all cursor-pointer transform hover:scale-[1.02] active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Your Stay</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenBookingModal()}
              className="px-3 py-1.5 rounded-full bg-[#dfb85c] text-[#0b1a13] font-semibold text-[11px] flex items-center gap-1"
            >
              <Calendar className="w-3 h-3" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#ede7da] hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a1811] border-b border-[#c89d4c]/30 px-4 pt-3 pb-6 space-y-3 animate-fade-in">
          <div className="flex flex-col space-y-2 border-b border-white/10 pb-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2 px-3 rounded-lg text-sm font-medium text-[#ede7da] hover:text-[#dfb85c] hover:bg-white/5 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={`tel:${RESORT_INFO.phone}`}
              className="inline-flex items-center gap-2 text-sm text-[#ede7da] px-3 py-2"
            >
              <Phone className="w-4 h-4 text-[#dfb85c]" />
              <span>{RESORT_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3 rounded-full bg-[#dfb85c] text-[#0b1a13] font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { RESORT_INFO } from '../data/hotelData';

interface FooterProps {
  onOpenBookingModal: (preselectedRoom?: string) => void;
  onOpenInquiry?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBookingModal, onOpenInquiry }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@') || !newsletterEmail.includes('.')) {
      setNewsletterError('Please enter a valid email address.');
      return;
    }
    setNewsletterError('');
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 75;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="w-full bg-[#081510] text-[#ede7da] border-t border-[#c89d4c]/20 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info & Socials */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 text-[#dfb85c] flex items-center justify-center">
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
                  <circle cx="32" cy="51" r="2.5" fill="#dfb85c" />
                </svg>
              </div>

              <div>
                <span className="font-serif-luxury text-lg font-bold tracking-[0.2em] text-[#fcfbf8] uppercase block leading-none">
                  THE HAVEN RETREAT
                </span>
                <span className="text-[9px] tracking-[0.3em] font-sans-modern font-semibold text-[#dfb85c] uppercase">
                  HOTEL & RESORT
                </span>
              </div>
            </div>

            <p className="text-xs text-[#9fb3a7] font-light leading-relaxed max-w-sm">
              A boutique hotel & resort offering luxury stays, fine dining and unforgettable experiences in nature.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={RESORT_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-[#dfb85c] hover:text-[#dfb85c] flex items-center justify-center transition-colors text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={RESORT_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-[#dfb85c] hover:text-[#dfb85c] flex items-center justify-center transition-colors text-white"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={RESORT_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-[#dfb85c] hover:text-[#dfb85c] flex items-center justify-center transition-colors text-white"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={RESORT_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-[#dfb85c] hover:text-[#dfb85c] flex items-center justify-center transition-colors text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2 text-xs text-[#9fb3a7]">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-[#dfb85c] transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-[#dfb85c] transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('rooms')} className="hover:text-[#dfb85c] transition-colors cursor-pointer">
                  Rooms
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('dining')} className="hover:text-[#dfb85c] transition-colors cursor-pointer">
                  Dining
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('experiences')} className="hover:text-[#dfb85c] transition-colors cursor-pointer">
                  Experiences
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="hover:text-[#dfb85c] transition-colors cursor-pointer">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-[#dfb85c] transition-colors cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Rooms */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Our Rooms</h4>
            <ul className="space-y-2 text-xs text-[#9fb3a7]">
              <li>
                <button onClick={() => onOpenBookingModal('deluxe-room')} className="hover:text-[#dfb85c] transition-colors cursor-pointer">
                  Deluxe Room
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBookingModal('executive-room')} className="hover:text-[#dfb85c] transition-colors cursor-pointer">
                  Executive Room
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBookingModal('premium-suite')} className="hover:text-[#dfb85c] transition-colors cursor-pointer">
                  Premium Suite
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBookingModal('villa-with-pool')} className="hover:text-[#dfb85c] transition-colors cursor-pointer">
                  Villa with Pool
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us & Stay Updated */}
          <div id="contact" className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact Us</h4>
            <div className="space-y-2.5 text-xs text-[#9fb3a7]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#dfb85c] flex-shrink-0 mt-0.5" />
                <span>{RESORT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#dfb85c] flex-shrink-0" />
                <a href={`tel:${RESORT_INFO.phone}`} className="hover:text-[#dfb85c]">
                  {RESORT_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#dfb85c] flex-shrink-0" />
                <a href={`mailto:${RESORT_INFO.email}`} className="hover:text-[#dfb85c]">
                  {RESORT_INFO.email}
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <h5 className="text-[11px] font-semibold text-white uppercase tracking-wider mb-1">
                Stay Updated
              </h5>
              <p className="text-[11px] text-[#9fb3a7] mb-2 font-light">
                Get the latest offers, packages and resort updates.
              </p>

              {newsletterSuccess ? (
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs py-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3.5 py-2.5 pr-11 rounded-lg bg-[#0e2219] border border-[#c89d4c]/30 text-white text-xs haven-input-focus placeholder-[#6f8578]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 rounded-md bg-[#dfb85c] text-[#0b1a13] hover:bg-[#eed08b] transition-colors"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                  {newsletterError && (
                    <p className="text-[10px] text-red-400 mt-1">{newsletterError}</p>
                  )}
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Attribution Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#849a8e]">
          <p>
            © 2026 The Haven Retreat. All Rights Reserved. A Demo Website by{' '}
            <button
              onClick={onOpenInquiry}
              className="text-[#dfb85c] hover:underline font-semibold cursor-pointer"
            >
              ReSolution
            </button>
            .
          </p>

          <div className="flex items-center gap-4 text-xs">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

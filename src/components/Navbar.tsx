import React, { useState, useEffect } from 'react';
import { WorldAirLogo } from './WorldAirLogo';
import { COMPANY_INFO } from '../data/mockData';
import { Phone, Menu, X, Plane, Send, Globe, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (initialType?: 'flight' | 'student' | 'visa' | 'holiday') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Flight Booking', href: '#flight-search' },
    { name: 'Student Offers', href: '#student-offers' },
    { name: 'Services', href: '#services' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Route Map', href: '#routes' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Micro Utility Bar */}
      <div className="bg-stone-950 text-stone-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-stone-800/80 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Credibility & Heritage */}
          <div className="flex items-center gap-3 text-[11px] font-medium text-stone-300">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Globe className="w-3.5 h-3.5" />
              <span>Sri Lanka's Established International Ticketing Agency</span>
            </span>
            <span className="text-stone-600">|</span>
            <span className="text-stone-400">25+ Years of Redefining Travel (Est. 1999)</span>
          </div>

          {/* Right: Direct Hotlines */}
          <div className="flex items-center gap-5 text-[11px]">
            <div className="flex items-center gap-4 text-stone-300">
              <a
                href="tel:0812224616"
                className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                title="Office Hotline"
              >
                <Phone className="w-3 h-3 text-red-500" />
                <span className="font-medium">0812 224 616</span>
              </a>
              <span className="text-stone-700">·</span>
              <a
                href={`tel:${COMPANY_INFO.primaryTel}`}
                className="hover:text-amber-400 transition-colors flex items-center gap-1.5 font-bold text-stone-100"
                title="Mobile Hotline"
              >
                <Phone className="w-3 h-3 text-emerald-400" />
                <span>{COMPANY_INFO.primaryPhone}</span>
              </a>
            </div>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20World%20Air,%20I%20would%20like%20to%20inquire%20about%20international%20flight%20tickets.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors bg-emerald-950/40 border border-emerald-800/60 px-2 py-0.5 rounded text-[10px]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Primary Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/98 backdrop-blur-md shadow-md py-2 border-b border-stone-200'
            : 'bg-white py-3 border-b border-stone-200/90'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo - Official Framed World Air Mark */}
          <a
            href="#hero"
            className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded transition-transform hover:scale-[1.02]"
            aria-label="World Air Home"
          >
            <WorldAirLogo
              variant="red"
              height={scrolled ? 42 : 48}
            />
          </a>

          {/* Center Navigation Links (strictly non-wrapping with clean spacing) */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-6 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-700 hover:text-red-700 text-[13px] xl:text-sm font-semibold tracking-normal transition-colors whitespace-nowrap py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-red-700 after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => onOpenInquiry('flight')}
              className="whitespace-nowrap bg-red-700 hover:bg-red-800 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded shadow-sm hover:shadow transition-all flex items-center gap-1.5 border border-red-800 cursor-pointer"
            >
              <Plane className="w-3.5 h-3.5" />
              <span>Book Flight</span>
            </button>

            <button
              onClick={() => onOpenInquiry('flight')}
              className="hidden xl:inline-flex whitespace-nowrap items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-red-700 border border-stone-300 hover:border-red-400 px-3.5 py-2.5 rounded transition-all bg-stone-50 hover:bg-white cursor-pointer"
            >
              <Send className="w-3 h-3 text-red-600" />
              <span>Get a Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-red-700 hover:bg-stone-100 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Animated Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-stone-800 hover:text-red-700 hover:bg-stone-50 rounded-md transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry('flight');
                }}
                className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-4 rounded text-center text-xs uppercase tracking-wider shadow flex items-center justify-center gap-2"
              >
                <Plane className="w-4 h-4" />
                <span>Book Flight / Get Quote</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.primaryTel}`}
                className="w-full bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold py-2.5 px-4 rounded text-center text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-red-600" />
                <span>Call Hotline: {COMPANY_INFO.primaryPhone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

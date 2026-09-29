import React, { useState, useEffect } from 'react';
import { WorldAirLogo } from './WorldAirLogo';
import { COMPANY_INFO } from '../data/mockData';
import { PageId } from '../types';
import { Phone, Menu, X, Plane, Send, Globe } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (initialType?: 'flight' | 'student' | 'visa' | 'holiday') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenInquiry,
}) => {
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

  // Removed "Student offer" and "Route map" as requested
  const navLinks: { name: string; page: PageId }[] = [
    { name: 'Home', page: 'home' },
    { name: 'Flight Booking', page: 'booking' },
    { name: 'About', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Destinations', page: 'destinations' },
    { name: 'Contact', page: 'contact' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

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
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded transition-transform hover:scale-[1.02] cursor-pointer text-left"
            aria-label="World Air Home"
          >
            <WorldAirLogo
              variant="red"
              height={scrolled ? 42 : 48}
            />
          </button>

          {/* Desktop Navigation Links with Active Page Highlighting */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleLinkClick(link.page)}
                  className={`text-sm font-semibold tracking-normal transition-all py-1.5 px-3 rounded-lg relative cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'text-red-700 bg-red-50 font-bold shadow-xs'
                      : 'text-stone-700 hover:text-red-700 hover:bg-stone-50'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-red-700 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => handleLinkClick('booking')}
              className="bg-red-700 hover:bg-red-800 text-white text-xs font-bold py-2 sm:py-2.5 px-3.5 sm:px-4 rounded-xl uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer border border-red-600 active:scale-95"
            >
              <Plane className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Book Flight</span>
              <span className="sm:hidden">Book</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-700 hover:text-red-700 hover:bg-stone-100 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => handleLinkClick(link.page)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between transition-colors text-left cursor-pointer ${
                      isActive
                        ? 'bg-red-50 text-red-700 font-bold'
                        : 'text-stone-800 hover:text-red-700 hover:bg-stone-50'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-red-700" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-stone-200 space-y-2">
              <a
                href={`tel:${COMPANY_INFO.primaryTel}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-stone-100 text-stone-800 text-xs font-bold"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call Hotline: {COMPANY_INFO.primaryPhone}</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20World%20Air,%20I%20would%20like%20to%20inquire%20about%20tickets.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600 text-white text-xs font-bold shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

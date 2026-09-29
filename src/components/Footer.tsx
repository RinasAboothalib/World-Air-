import React from 'react';
import { WorldAirLogo } from './WorldAirLogo';
import { COMPANY_INFO } from '../data/mockData';
import { PageId } from '../types';
import { Phone, Mail, Globe, MapPin, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
  onOpenInquiry?: (type?: 'flight' | 'student' | 'visa' | 'holiday') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInquiry }) => {
  const quickLinks: { name: string; page: PageId }[] = [
    { name: 'Home', page: 'home' },
    { name: 'Flight Booking & Fares', page: 'booking' },
    { name: 'About World Air', page: 'about' },
    { name: 'Aviation Services', page: 'services' },
    { name: 'Global Destinations', page: 'destinations' },
    { name: 'Contact Colombo Office', page: 'contact' },
  ];

  const popularDestinations = [
    'Japan',
    'Australia',
    'United Kingdom',
    'USA',
    'Canada',
    'Dubai (UAE)',
    'Singapore',
    'Malaysia',
    'Thailand',
    'Maldives',
  ];

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <WorldAirLogo variant="white" height={48} />
            </div>

            <h4 className="text-base font-bold text-white font-serif-luxury mb-1">
              {COMPANY_INFO.name}
            </h4>
            <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-3">
              {COMPANY_INFO.tagline}
            </p>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm mb-6">
              One of Sri Lanka’s established travel agencies specializing in international airline tickets, verified student fares, visa guidance, and unforgettable holiday experiences since 1999.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-colors"
                aria-label="World Air Facebook"
              >
                <span className="font-bold text-sm">f</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-colors"
                aria-label="World Air WhatsApp"
              >
                <span className="font-bold text-xs">WA</span>
              </a>
              <a
                href={`https://${COMPANY_INFO.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white hover:bg-red-700 hover:border-red-600 transition-colors"
                aria-label="World Air Official Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-600 pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    type="button"
                    onClick={() => onNavigate && onNavigate(link.page)}
                    className="text-stone-400 hover:text-white transition-colors block py-0.5 text-left cursor-pointer hover:translate-x-0.5 transition-transform"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Destinations */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">
              Popular Destinations
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs">
              {popularDestinations.map((dest) => (
                <button
                  key={dest}
                  type="button"
                  onClick={() => onNavigate && onNavigate('destinations')}
                  className="text-stone-400 hover:text-white transition-colors block py-0.5 text-left cursor-pointer"
                >
                  {dest}
                </button>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Hotlines */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-600 pl-2">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="text-stone-400">
                  {COMPANY_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <div>
                  <a
                    href={`tel:${COMPANY_INFO.primaryTel}`}
                    className="text-white hover:text-amber-400 font-semibold transition-colors block"
                  >
                    {COMPANY_INFO.primaryPhone}
                  </a>
                  <a
                    href="tel:0812224616"
                    className="text-stone-400 hover:text-white transition-colors block text-[11px]"
                  >
                    0812 224 616 (Office)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenInquiry && onOpenInquiry('flight')}
                  className="w-full bg-stone-900 hover:bg-stone-800 text-stone-200 text-xs font-bold py-2 px-3 rounded-lg border border-stone-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Custom Itinerary</span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Accreditation & License Badges */}
        <div className="py-6 border-b border-stone-800/80 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-stone-400">
            <span className="flex items-center gap-1.5 text-stone-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Civil Aviation Authority Licensed: <strong>A-789</strong></span>
            </span>
            <span>·</span>
            <span>Registered Under PV 66318</span>
            <span>·</span>
            <span>Official Sri Lanka Tourism Promotion Partner</span>
          </div>

          <div className="text-[11px] text-stone-500">
            Operating Hours: 24/7 Ticketing & Assistance Hotline
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            <span>Redefining Sri Lankan aviation & global travel since 1999</span>
            <Heart className="w-3 h-3 text-red-600 fill-red-600 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
};

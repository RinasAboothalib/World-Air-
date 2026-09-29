import React from 'react';
import { WorldAirLogo } from './WorldAirLogo';
import { COMPANY_INFO } from '../data/mockData';
import { Phone, Mail, Globe, MapPin, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Flight Booking', href: '#flight-search' },
    { name: 'Student Offers', href: '#student-offers' },
    { name: 'Visa Assistance', href: '#services' },
    { name: 'Holiday Packages', href: '#services' },
    { name: 'Contact', href: '#contact' },
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
              World Air (Pvt.) Ltd.
            </h4>
            <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-3">
              25+ Years of Redefining Travel
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
                <span className="text-xs font-bold">WA</span>
              </a>
              <a
                href="https://worldair.lk"
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
                  <a
                    href={link.href}
                    className="text-stone-400 hover:text-white hover:underline transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
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
                <a
                  key={dest}
                  href="#destinations"
                  className="text-stone-400 hover:text-white hover:underline transition-colors block py-0.5"
                >
                  {dest}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Hotlines */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-600 pl-2">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-stone-500 block text-[10px] uppercase font-bold">Office Line:</span>
                <a href="tel:0812224616" className="text-stone-200 hover:text-red-400 font-semibold">
                  0812 224 616
                </a>
              </div>

              <div>
                <span className="text-stone-500 block text-[10px] uppercase font-bold">Mobile & WhatsApp Hotline:</span>
                <a href="tel:+94777362822" className="text-white hover:text-emerald-400 font-bold text-sm block">
                  +94 777 362 822
                </a>
              </div>

              <div>
                <span className="text-stone-500 block text-[10px] uppercase font-bold">Ticketing & Reservations:</span>
                <a href="tel:+94777372316" className="text-stone-200 hover:text-red-400 font-semibold">
                  +94 777 372 316
                </a>
              </div>

              <div className="pt-1">
                <span className="text-stone-500 block text-[10px] uppercase font-bold">Inquiries Email:</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-stone-200 hover:text-amber-300">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Verification Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 World Air (Pvt.) Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Official Sri Lanka Travel Agency</span>
            <span>·</span>
            <span>International Airline Tickets & Student Fares</span>
            <span>·</span>
            <span className="text-stone-400">worldair.lk</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

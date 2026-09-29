import React from 'react';
import { Plane, GraduationCap, FileCheck2, Palmtree, ArrowRight, Check, Luggage } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceType: 'flight' | 'student' | 'visa' | 'holiday') => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-700 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
            <span>Comprehensive Aviation Services</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4 font-serif-luxury">
            Travel Solutions Designed Around You
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            From seamless international ticket issuance with global airline networks to specialized student luggage allocations and bespoke holidays.
          </p>
        </div>

        {/* 4 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 01 — International Flight Booking */}
          <div className="group bg-stone-50 border border-stone-200/90 rounded-2xl p-8 hover:border-red-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-100/40 rounded-bl-full pointer-events-none -z-0 group-hover:scale-125 transition-transform" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold text-red-700 tracking-widest uppercase">
                  01 — Ticketing
                </span>
                <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 shadow-sm flex items-center justify-center text-red-700 group-hover:bg-red-700 group-hover:text-white transition-colors">
                  <Plane className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif-luxury">
                International Flight Booking
              </h3>
              <p className="text-sm text-stone-600 mb-5 leading-relaxed">
                One-way, round-trip, and complex multi-city international airline tickets with personalized date flexibility and competitive fares.
              </p>

              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                  Key Direct & Transit Routes:
                </p>
                <div className="flex flex-wrap gap-1.5 text-xs text-stone-700">
                  {[
                    'London',
                    'Melbourne',
                    'Dubai',
                    'Tokyo',
                    'Singapore',
                    'Bangkok',
                    'Kuala Lumpur',
                    'New York',
                    'Montreal',
                    'Malé',
                    'Doha',
                    'Muscat',
                    'Kuwait City',
                    'Delhi',
                  ].map((city) => (
                    <span
                      key={city}
                      className="bg-white border border-stone-200 px-2.5 py-1 rounded text-stone-700 font-medium"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs font-medium text-stone-500">
                Direct booking & instant quotation
              </span>
              <button
                onClick={() => onSelectService('flight')}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-700 group-hover:text-red-800 hover:underline cursor-pointer"
              >
                <span>Book a Flight</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* 02 — Student Travel & Special Fares */}
          <div className="group bg-gradient-to-b from-amber-50/40 via-stone-50 to-stone-50 border-2 border-amber-300/80 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            {/* Student Special Badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Student Special</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold text-amber-800 tracking-widest uppercase">
                  02 — Academic Travel
                </span>
                <div className="w-12 h-12 rounded-xl bg-white border border-amber-200 shadow-sm flex items-center justify-center text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-stone-900 mb-2 font-serif-luxury">
                Student Travel & Special Fares
              </h3>

              <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-300 text-amber-900 px-3 py-1.5 rounded-lg text-xs font-bold mb-4">
                <Luggage className="w-4 h-4 text-amber-700" />
                <span>Up to 40kg baggage allowance on selected routes</span>
              </div>

              <p className="text-sm text-stone-600 mb-5 leading-relaxed">
                Dedicated international travel solutions for Sri Lankan students embarking on global higher education journeys.
              </p>

              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                  Key Academic Destinations:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-medium text-stone-800">
                  <span className="bg-white border border-stone-200 p-1.5 rounded text-center">🇯🇵 Japan</span>
                  <span className="bg-white border border-stone-200 p-1.5 rounded text-center">🇦🇺 Australia</span>
                  <span className="bg-white border border-stone-200 p-1.5 rounded text-center">🇬🇧 United Kingdom</span>
                  <span className="bg-white border border-stone-200 p-1.5 rounded text-center">🇺🇸 USA</span>
                  <span className="bg-white border border-stone-200 p-1.5 rounded text-center">🇨🇦 Canada</span>
                  <span className="bg-white border border-stone-200 p-1.5 rounded text-center">🇨🇳 China</span>
                  <span className="bg-white border border-stone-200 p-1.5 rounded text-center">🇹🇼 Taiwan</span>
                  <span className="bg-white border border-stone-200 p-1.5 rounded text-center">🌍 Europe</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-amber-200 flex items-center justify-between">
              <span className="text-xs font-semibold text-amber-800">
                Additional baggage & youth fare savings
              </span>
              <button
                onClick={() => onSelectService('student')}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 group-hover:text-amber-950 hover:underline cursor-pointer"
              >
                <span>Explore Student Offers</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* 03 — Visa Consultation */}
          <div className="group bg-stone-50 border border-stone-200/90 rounded-2xl p-8 hover:border-red-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-100/30 rounded-bl-full pointer-events-none -z-0 group-hover:scale-125 transition-transform" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold text-red-700 tracking-widest uppercase">
                  03 — Advisory
                </span>
                <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 shadow-sm flex items-center justify-center text-red-700 group-hover:bg-red-700 group-hover:text-white transition-colors">
                  <FileCheck2 className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif-luxury">
                Visa Consultation & Support
              </h3>
              <p className="text-sm text-stone-600 mb-5 leading-relaxed">
                Provide professional visa application and travel documentation guidance to minimize processing friction and avoid boarding rejections.
              </p>

              <div className="space-y-2 mb-6">
                {[
                  'Documentation checklist and verification guidance',
                  'Application form filling and embassy appointment booking',
                  'Destination-specific transit visa protocols',
                  'Pre-travel consultation & port of entry compliance',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs font-medium text-stone-500">
                Official embassy guidelines
              </span>
              <button
                onClick={() => onSelectService('visa')}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-700 group-hover:text-red-800 hover:underline cursor-pointer"
              >
                <span>Get Visa Assistance</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* 04 — Holiday Packages */}
          <div className="group bg-stone-50 border border-stone-200/90 rounded-2xl p-8 hover:border-red-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100/30 rounded-bl-full pointer-events-none -z-0 group-hover:scale-125 transition-transform" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase">
                  04 — Leisure & Holidays
                </span>
                <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 shadow-sm flex items-center justify-center text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                  <Palmtree className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif-luxury">
                Curated Holiday Packages
              </h3>
              <p className="text-sm text-stone-600 mb-5 leading-relaxed">
                Customized international vacation experiences blending premier airlines, verified 4/5-star accommodations, and private transfers.
              </p>

              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                  Featured Holiday Destinations:
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-stone-800">
                  {['Bali (Indonesia)', 'Thailand', 'Singapore', 'Malaysia', 'Maldives', 'India', 'Europe'].map((place) => (
                    <span
                      key={place}
                      className="bg-white border border-stone-200 px-3 py-1.5 rounded shadow-2xs"
                    >
                      {place}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs font-medium text-stone-500">
                Couples, families & group tours
              </span>
              <button
                onClick={() => onSelectService('holiday')}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-700 group-hover:text-red-800 hover:underline cursor-pointer"
              >
                <span>Explore Holidays</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

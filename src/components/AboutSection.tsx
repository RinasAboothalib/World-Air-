import React from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { ShieldCheck, Award, Users, CheckCircle2, Globe, ArrowRight, Plane } from 'lucide-react';

interface AboutSectionProps {
  onOpenInquiry: (initialType?: 'flight' | 'student' | 'visa' | 'holiday') => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenInquiry }) => {
  const highlights = [
    {
      title: '25+ Years of Experience',
      desc: 'Founded in 1999, guiding generations of Sri Lankan travelers with seasoned expertise.',
    },
    {
      title: 'International Airline Ticketing',
      desc: 'Direct ticketing partnerships with premier global carriers for optimized route pricing.',
    },
    {
      title: 'Student Travel Support',
      desc: 'Exclusive youth airfares, parent discounts, and extra baggage allowances up to 40kg.',
    },
    {
      title: 'Visa & Travel Documentation',
      desc: 'Comprehensive embassy guidelines, transit requirements, and application preparation.',
    },
    {
      title: 'Tailored Holiday Packages',
      desc: 'Curated international vacation itineraries with flight, hotel, and transfer coordination.',
    },
    {
      title: 'Personalized Customer Service',
      desc: 'Real travel professionals available around the clock to handle re-issues and queries.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-stone-50 border-t border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Collage & Aviation Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=1200&auto=format&fit=crop"
                alt="Modern international airport terminal with passenger boarding commercial jetliner"
                className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />

              {/* Floating verified experience badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 sm:p-5 shadow-xl border border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-lg bg-red-700 text-white flex items-center justify-center font-bold text-xl shadow-md">
                    25+
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 font-serif-luxury">
                      Years of Travel Leadership
                    </h4>
                    <p className="text-xs text-stone-500">
                      World Air (Pvt.) Ltd. · Established 1999
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 px-3 py-1.5 rounded">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Sri Lanka Trusted</span>
                </div>
              </div>
            </div>

            {/* Decorative subtle aircraft wing silhouette backdrop */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-100/50 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-amber-100/40 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Column: Editorial Corporate Narrative */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-red-700 text-xs font-bold uppercase tracking-widest mb-3">
              <Globe className="w-3.5 h-3.5" />
              <span>About World Air (Pvt.) Ltd.</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-5 font-serif-luxury leading-tight">
              25+ Years of Connecting Sri Lanka to the World
            </h2>

            <p className="text-base text-stone-600 mb-6 leading-relaxed">
              <strong className="text-stone-900 font-semibold">World Air (Pvt.) Ltd.</strong> has built its reputation as an established Sri Lankan travel agency specializing in international airline tickets and travel solutions. Over a quarter century, we have remained steadfast in our commitment to integrity, passenger care, and exceptional global connectivity.
            </p>

            <p className="text-sm text-stone-600 mb-8 leading-relaxed">
              Whether you are an undergraduate boarding your first international flight to Australia or the UK, a corporate executive flying to London or Dubai, or a family seeking an idyllic holiday in the Maldives or Europe, World Air provides personalized guidance, verified baggage benefits, and competitive international fares.
            </p>

            {/* Grid of Key Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-stone-900 mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-stone-500 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-stone-200">
              <button
                onClick={() => onOpenInquiry('flight')}
                className="bg-red-700 hover:bg-red-800 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded shadow transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Consult Our Specialists</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.primaryTel}`}
                className="text-xs font-semibold text-stone-700 hover:text-red-700 flex items-center gap-2 px-4 py-3 rounded border border-stone-300 hover:border-red-300 transition-colors"
              >
                <span>Direct Hotline: {COMPANY_INFO.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

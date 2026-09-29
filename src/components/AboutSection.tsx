import React from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { Award, CheckCircle2, Globe, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenInquiry: (initialType?: 'flight' | 'student' | 'visa' | 'holiday') => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenInquiry }) => {
  const highlights = [
    '25+ Years of Experience',
    'International Airline Ticketing',
    'Student Travel Support',
    'Visa & Travel Documentation',
    'Tailored Holiday Packages',
    'Personalized Customer Service',
  ];

  return (
    <section id="about" className="py-20 bg-stone-50 border-t border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Image with Equal Height Matching Text Column */}
          <div className="lg:col-span-6 relative flex flex-col">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white flex-1 min-h-[460px]">
              <img
                src="https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=1200&auto=format&fit=crop"
                alt="Modern international airport terminal with passenger boarding commercial jetliner"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />

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

            {/* Decorative background glow */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-100/50 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-amber-100/40 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Column: Narrative & Clean Bullet List without descriptions */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-red-700 text-xs font-bold uppercase tracking-widest mb-3">
              <Globe className="w-3.5 h-3.5" />
              <span>About World Air (Pvt.) Ltd.</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4 font-serif-luxury leading-tight">
              25+ Years of Connecting Sri Lanka to the World
            </h2>

            <p className="text-sm sm:text-base text-stone-600 mb-4 leading-relaxed">
              <strong className="text-stone-900 font-semibold">World Air (Pvt.) Ltd.</strong> has built its reputation as an established Sri Lankan travel agency specializing in international airline tickets and travel solutions. Over a quarter century, we have remained steadfast in our commitment to integrity, passenger care, and exceptional global connectivity.
            </p>

            <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
              Whether you are an undergraduate boarding your first international flight to Australia or the UK, a corporate executive flying to London or Dubai, or a family seeking an idyllic holiday in the Maldives or Europe, World Air provides personalized guidance, verified baggage benefits, and competitive international fares.
            </p>

            {/* Clean Checkmark List without description text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7 bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
              {highlights.map((title, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span className="text-xs sm:text-[13px] font-bold text-stone-800">
                    {title}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-stone-200">
              <button
                type="button"
                onClick={() => onOpenInquiry('flight')}
                className="bg-red-700 hover:bg-red-800 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-xl shadow transition-all flex items-center gap-2 cursor-pointer border border-red-800"
              >
                <span>Consult Our Specialists</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.primaryTel}`}
                className="text-xs font-semibold text-stone-700 hover:text-red-700 flex items-center gap-2 px-4 py-3 rounded-xl border border-stone-300 hover:border-red-300 transition-colors"
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

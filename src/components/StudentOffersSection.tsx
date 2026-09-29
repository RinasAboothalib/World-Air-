import React, { useState } from 'react';
import { STUDENT_DESTINATIONS } from '../data/mockData';
import {
  GraduationCap,
  Luggage,
  Sparkles,
  Plane,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Ticket,
  FileCheck
} from 'lucide-react';

interface StudentOffersSectionProps {
  onOpenStudentInquiry: (destinationCountry?: string) => void;
}

export const StudentOffersSection: React.FC<StudentOffersSectionProps> = ({
  onOpenStudentInquiry,
}) => {
  const [selectedCountry, setSelectedCountry] = useState(STUDENT_DESTINATIONS[0]);

  return (
    <section id="student-offers" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Background with luxury dark aviation student theme & soft atmospheric glow */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop"
          alt="International students at departure airport terminal"
          className="w-full h-full object-cover object-top opacity-20 filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/90 to-stone-950" />
      </div>

      {/* Floating subtle travel elements */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-30">
        <div className="absolute top-12 left-10 text-amber-300/40 animate-pulse">
          <Ticket className="w-10 h-10 rotate-12" />
        </div>
        <div className="absolute bottom-20 right-12 text-red-400/40">
          <Luggage className="w-12 h-12 -rotate-6" />
        </div>
        <div className="absolute top-1/2 right-1/4 text-white/20 animate-flight-dash">
          <Plane className="w-8 h-8 rotate-45" />
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with double gold/red luxury badges */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-red-800/90 border border-red-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              SPECIAL STUDENT FARES
            </span>
            <span className="inline-flex items-center gap-1.5 bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
              <Luggage className="w-3.5 h-3.5" />
              EXTRA BAGGAGE AVAILABLE ON SELECTED ROUTES
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-serif-luxury">
            Your Journey Starts Here
          </h2>
          <p className="text-lg sm:text-xl text-stone-300 font-medium font-serif-luxury mb-4">
            Special Student Airfares for Your International Education Journey
          </p>
          <p className="text-sm text-stone-400 leading-relaxed max-w-2xl mx-auto">
            World Air is Sri Lanka's leading specialist for student flight tickets. We negotiate exclusive academic airfares, high baggage allowances (up to 40kg), and flexible date change terms.
          </p>
        </div>

        {/* Destination Grid (8 Destination Cards with Original Country Flags) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
          {STUDENT_DESTINATIONS.map((dest) => {
            const isSelected = selectedCountry.country === dest.country;
            return (
              <button
                key={dest.country}
                type="button"
                onClick={() => setSelectedCountry(dest)}
                className={`p-2.5 sm:p-3 rounded-xl border text-center transition-all duration-300 flex flex-col items-center justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-red-700/90 border-red-500 shadow-lg shadow-red-900/40 scale-105 ring-2 ring-amber-400/50'
                    : 'bg-stone-800/80 border-stone-700 hover:bg-stone-800 hover:border-stone-500'
                }`}
              >
                {/* Original Country Flag fitting the box */}
                <div className="w-full h-11 sm:h-12 rounded-lg overflow-hidden mb-2 border border-white/20 shadow-xs bg-stone-900 flex items-center justify-center">
                  <img
                    src={dest.flagImg}
                    alt={`${dest.country} flag`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Full Country Name Only */}
                <span className="text-xs font-bold text-white tracking-wide block leading-tight">
                  {dest.country}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Country Spotlight Feature Box */}
        <div className="bg-stone-800/90 border border-stone-700 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Details */}
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3.5 mb-4">
                <div className="w-14 h-9 sm:w-16 sm:h-10 rounded-lg overflow-hidden shadow-md border-2 border-white/30 shrink-0">
                  <img
                    src={selectedCountry.flagImg}
                    alt={`${selectedCountry.country} flag`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-serif-luxury">
                    Study in {selectedCountry.country}
                  </h3>
                  <p className="text-xs text-stone-400">
                    Key University Hubs: {selectedCountry.universitiesHub}
                  </p>
                </div>
              </div>

              {/* Baggage allowance callout */}
              <div className="bg-red-950/60 border border-red-700/60 rounded-xl p-4 mb-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-red-600/30 border border-red-500 flex items-center justify-center text-amber-300 shrink-0">
                  <Luggage className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Baggage Allowance Privilege:
                  </div>
                  <div className="text-base font-bold text-white">
                    {selectedCountry.baggageAllowance}
                  </div>
                  <div className="text-[11px] text-stone-400">
                    *Applicable for students holding valid university offer letters or Student Visas.
                  </div>
                </div>
              </div>

              {/* Highlights & Intakes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {selectedCountry.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 text-xs text-amber-300 font-medium">
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>Popular Intakes: {selectedCountry.popularIntakes}</span>
                </div>
              </div>
            </div>

            {/* Right Action Card */}
            <div className="lg:col-span-4 bg-stone-900/90 border border-stone-700 p-6 rounded-xl flex flex-col justify-between text-center">
              <div className="mb-6">
                <span className="inline-block p-3 rounded-full bg-red-900/40 text-red-400 border border-red-700 mb-3">
                  <GraduationCap className="w-8 h-8 text-amber-400" />
                </span>
                <h4 className="text-base font-bold text-white mb-1">
                  Ready to Book Your Student Ticket?
                </h4>
                <p className="text-xs text-stone-400">
                  Speak directly with our dedicated student flight desk in Sri Lanka.
                </p>
              </div>

              <button
                onClick={() => onOpenStudentInquiry(selectedCountry.country)}
                className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3.5 px-4 rounded-lg text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 border border-red-600 cursor-pointer"
              >
                <span>Ask About Student Fares</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-stone-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Free Student Visa Verification Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Student Trust Proof Footnote */}
        <div className="text-center text-xs text-stone-400 border-t border-stone-800 pt-6">
          <span>Trusted by thousands of Sri Lankan students traveling to Monash, Melbourne, Deakin, Oxford, Warwick, Tokyo University, Toronto, and McGill over 25+ years.</span>
        </div>
      </div>
    </section>
  );
};

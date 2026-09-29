import React from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { Plane, FileText, MessageSquare, ArrowRight } from 'lucide-react';

interface CTASectionProps {
  onOpenInquiry: (initialType?: 'flight' | 'student' | 'visa' | 'holiday') => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenInquiry }) => {
  return (
    <section className="relative py-28 overflow-hidden bg-stone-950 text-white">
      {/* Background Airplane Wing Above Sunset Clouds */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2200&auto=format&fit=crop"
          alt="Airplane wing above clouds during golden sunset"
          className="w-full h-full object-cover object-center brightness-90"
        />
        {/* Luxury red & dark vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/80 to-red-950/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-300 bg-stone-900/60 border border-amber-400/30 px-3.5 py-1.5 rounded-full mb-6 backdrop-blur-md">
          <Plane className="w-3.5 h-3.5 text-red-500 -rotate-45" />
          <span>Begin Your Flight Experience</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 font-serif-luxury">
          Ready for Your Next Journey?
        </h2>

        <p className="text-base sm:text-xl text-stone-200 mb-10 max-w-2xl mx-auto leading-relaxed font-serif-luxury">
          "Let World Air help you find the right flight, fare and travel solution."
        </p>

        {/* 3 Prominent CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#flight-search"
            className="bg-red-700 hover:bg-red-800 text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded shadow-xl transition-all flex items-center gap-2.5 cursor-pointer border border-red-600 hover:scale-105 duration-200"
          >
            <Plane className="w-4 h-4" />
            <span>Book Your Ticket</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => onOpenInquiry('flight')}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md text-xs font-bold uppercase tracking-wider px-7 py-4 rounded transition-all flex items-center gap-2 cursor-pointer hover:border-white/60"
          >
            <FileText className="w-4 h-4 text-amber-300" />
            <span>Get a Quote</span>
          </button>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20World%20Air,%20I%20am%20ready%20for%20my%20next%20journey.%20Please%20assist%20me%20with%20flight%20details.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider px-6 py-4 rounded shadow-lg transition-all flex items-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

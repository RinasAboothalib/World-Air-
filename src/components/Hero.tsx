import React from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { Plane, Phone, ArrowRight, ShieldCheck, Award, Compass, FileText } from 'lucide-react';

interface HeroProps {
  onOpenInquiry: (initialType?: 'flight' | 'student' | 'visa' | 'holiday') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-stone-950 text-white">
      {/* Background Cinematic Airplane Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2200&auto=format&fit=crop"
          alt="International commercial airplane in flight above cloud layer"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          style={{ animationDuration: '24s' }}
        />
        {/* Luxury Deep Ruby & Midnight Overlay for WCAG contrast and brand atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/85 to-red-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/50" />
      </div>

      {/* Cinematic Animated Flight Path & Plane SVG in background */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-60">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 800"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Subtle curved transatlantic flight path arc */}
          <path
            d="M -100 620 C 300 450, 750 200, 1550 240"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            className="animate-flight-dash"
          />
          {/* Secondary subtle route */}
          <path
            d="M 100 700 C 600 550, 1000 380, 1600 420"
            stroke="rgba(197, 155, 39, 0.25)"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />

          {/* Glowing Colombo Departure Node */}
          <g transform="translate(420, 480)">
            <circle cx="0" cy="0" r="14" fill="rgba(166, 25, 46, 0.3)" />
            <circle cx="0" cy="0" r="6" fill="#A6192E" />
            <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
            <text x="14" y="4" fill="rgba(255,255,255,0.7)" fontSize="11" fontFamily="Inter" letterSpacing="1">
              COLOMBO (CMB)
            </text>
          </g>

          {/* Destination Nodes */}
          <g transform="translate(1080, 270)">
            <circle cx="0" cy="0" r="10" fill="rgba(197, 155, 39, 0.3)" />
            <circle cx="0" cy="0" r="4" fill="#C59B27" />
            <text x="12" y="4" fill="rgba(255,255,255,0.7)" fontSize="11" fontFamily="Inter" letterSpacing="1">
              LONDON / GLOBAL ROUTES
            </text>
          </g>
        </svg>

        {/* Slow cinematic moving airplane along curved trajectory */}
        <div
          className="absolute top-1/3 left-0 w-12 h-12 text-white/80 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none"
          style={{
            animation: 'floatPlane 32s linear infinite',
          }}
        >
          <div className="relative transform -rotate-12">
            <Plane className="w-8 h-8 text-amber-200 drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
            <div className="absolute top-3 -left-6 w-8 h-0.5 bg-gradient-to-l from-white/60 to-transparent" />
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full text-left flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Established Brand Kicker with subtle gold accent */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded border border-amber-500/30 bg-stone-900/60 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-300">
              25+ Years of Redefining Travel
            </span>
            <span className="text-stone-500">·</span>
            <span className="text-xs text-stone-300 tracking-wider">Est. 1999</span>
          </div>

          {/* Company Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight font-serif-luxury">
            World Air <span className="text-red-500">(Pvt.) Ltd.</span>
          </h1>

          {/* Main Headline */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-stone-200 mb-6 font-serif-luxury leading-snug">
            Your Trusted Partner for International Air Travel
          </p>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-stone-300 mb-9 leading-relaxed max-w-2xl font-normal">
            International airline tickets, student fares, visa guidance and unforgettable holiday experiences — all through one trusted travel partner.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-start gap-4 mb-10">
            <a
              href="#flight-search"
              className="bg-red-700 hover:bg-red-800 text-white font-semibold px-7 py-3.5 rounded shadow-lg hover:shadow-red-900/30 transition-all flex items-center gap-2.5 text-sm uppercase tracking-wider group cursor-pointer border border-red-600"
            >
              <Plane className="w-4 h-4 group-hover:-rotate-12 transition-transform" />
              <span>Book Your Flight</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => onOpenInquiry('flight')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-semibold px-6 py-3.5 rounded transition-all flex items-center gap-2 text-sm uppercase tracking-wider cursor-pointer"
            >
              <FileText className="w-4 h-4 text-amber-300" />
              <span>Get a Quote</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.primaryTel}`}
              className="bg-stone-900/80 hover:bg-stone-800 text-stone-200 border border-stone-700 px-5 py-3.5 rounded transition-all flex items-center gap-2 text-sm font-medium"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Now: {COMPANY_INFO.primaryPhone}</span>
            </a>
          </div>

          {/* Trust Indicator Bar in Single Line */}
          <div className="pt-6 border-t border-stone-800/80 flex items-center justify-start gap-x-4 xl:gap-x-6 text-xs text-stone-300 whitespace-nowrap overflow-x-auto pb-1">
            <div className="flex items-center gap-2 shrink-0">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-semibold text-stone-200">25+ Years of Industry Experience</span>
            </div>
            <span className="text-stone-600 shrink-0">|</span>
            <div className="flex items-center gap-2 shrink-0">
              <ShieldCheck className="w-4 h-4 text-red-400 shrink-0" />
              <span className="font-semibold text-stone-200">International Ticketing Specialists</span>
            </div>
            <span className="text-stone-600 shrink-0">|</span>
            <div className="flex items-center gap-2 shrink-0">
              <Compass className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-semibold text-stone-200">Sri Lanka's Established Travel Partner</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Curve into Search Widget */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-stone-100 to-transparent pointer-events-none" />

      {/* CSS Keyframes for slow airplane glide */}
      <style>{`
        @keyframes floatPlane {
          0% {
            transform: translate(-100px, 400px) scale(0.7) rotate(-15deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translate(650px, 180px) scale(1) rotate(-8deg);
            opacity: 0.9;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(1500px, 120px) scale(1.1) rotate(-5deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

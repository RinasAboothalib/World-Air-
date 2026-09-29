import React from 'react';
import { PageId } from '../types';
import { ChevronRight, Home, Phone, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
  currentPageName: string;
  onNavigate: (page: PageId) => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge,
  currentPageName,
  onNavigate,
}) => {
  return (
    <div className="bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 text-white py-12 sm:py-16 border-b border-stone-800 relative overflow-hidden">
      {/* Background ambient airline glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-800/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Bar */}
        <div className="flex items-center gap-2 text-xs text-stone-400 mb-4">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-stone-600" />
          <span className="text-amber-400 font-semibold">{currentPageName}</span>
        </div>

        {/* Title & Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            {badge && (
              <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-amber-400 bg-amber-950/60 border border-amber-800/60 px-3 py-0.5 rounded-full mb-3">
                {badge}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif-luxury mb-3">
              {title}
            </h1>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-normal">
              {subtitle}
            </p>
          </div>

          {/* Quick Direct Desk Connect */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.primaryTel}`}
              className="bg-stone-900/90 hover:bg-stone-800 border border-stone-700 text-stone-200 text-xs font-semibold py-2 px-3.5 rounded-xl transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{COMPANY_INFO.primaryPhone}</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20World%20Air,%20I%20am%20inquiring%20about%20${encodeURIComponent(currentPageName)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold py-2 px-3.5 rounded-xl transition-colors flex items-center gap-2 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

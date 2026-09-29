import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ServicesSection } from '../components/ServicesSection';
import { PageId } from '../types';
import { Plane, GraduationCap, FileCheck, Palmtree, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface ServicesPageProps {
  onSelectService: (service: 'flight' | 'student' | 'visa' | 'holiday') => void;
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  onNavigate,
}) => {
  return (
    <div className="bg-stone-50 min-h-screen">
      <PageHeader
        title="Our Aviation & Travel Services"
        subtitle="End-to-end travel solutions: discounted student airfares with extra baggage, corporate ticketing management, visa consultancy, and custom international holiday itineraries."
        badge="Full-Service Travel Agency"
        currentPageName="Services"
        onNavigate={onNavigate}
      />

      {/* Main Services Section */}
      <ServicesSection onSelectService={onSelectService} />

      {/* Corporate Travel Account Inquiry Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 text-white rounded-2xl p-8 sm:p-12 border border-stone-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
              Corporate & Institution Travel Accounts
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury mb-3">
              Need Dedicated Travel Management for your Company?
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              We provide corporate billing, priority booking changes, flexible payment terms, and dedicated account managers for corporate firms and educational organizations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => onSelectService('flight')}
              className="bg-red-700 hover:bg-red-800 text-white text-xs font-bold py-3.5 px-6 rounded-xl uppercase tracking-wider transition-all cursor-pointer shadow-md"
            >
              Open Corporate Account
            </button>
            <a
              href={`tel:${COMPANY_INFO.primaryTel}`}
              className="bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold py-3.5 px-6 rounded-xl uppercase tracking-wider transition-all flex items-center gap-2 border border-stone-700"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>{COMPANY_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

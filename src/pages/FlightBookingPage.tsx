import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { FlightSearch } from '../components/FlightSearch';
import { PageId, FlightInquiry } from '../types';
import { Plane, ShieldCheck, Clock, CheckCircle2, Phone, Headphones, Luggage } from 'lucide-react';
import { POPULAR_AIRPORTS, COMPANY_INFO } from '../data/mockData';

interface FlightBookingPageProps {
  onSearchInquiry: (inquiry: FlightInquiry) => void;
  onOpenInquiry: (type?: 'flight' | 'student' | 'visa' | 'holiday') => void;
  onNavigate: (page: PageId) => void;
}

export const FlightBookingPage: React.FC<FlightBookingPageProps> = ({
  onSearchInquiry,
  onOpenInquiry,
  onNavigate,
}) => {
  return (
    <div className="bg-stone-50 min-h-screen">
      <PageHeader
        title="Flight Booking & Ticket Reservations"
        subtitle="Search international airlines, compare genuine agent airfares from Colombo (CMB), and secure verified e-tickets with 24/7 passenger assistance."
        badge="Official Air Ticketing Desk"
        currentPageName="Flight Booking"
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Main Flight Search Widget */}
        <div className="mb-16">
          <FlightSearch onSearchInquiry={onSearchInquiry} />
        </div>

        {/* 3 Step Ticketing Process */}
        <div className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-10 mb-16 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-red-700 block mb-2">
              Seamless Ticketing
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif-luxury">
              How Booking Works at World Air
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              No hidden online markups or robot cancellations. Real licensed ticketing specialists manage your journey from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 text-center">
              <div className="w-12 h-12 bg-red-100 text-red-700 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 font-mono">
                1
              </div>
              <h3 className="font-bold text-stone-900 mb-2 font-serif-luxury text-lg">
                Submit Route & Dates
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Use the search engine above to select your departure date, destination, passengers, and cabin preference.
              </p>
            </div>

            <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 text-center">
              <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 font-mono">
                2
              </div>
              <h3 className="font-bold text-stone-900 mb-2 font-serif-luxury text-lg">
                Exclusive Fare Quotation
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Our ticketing experts cross-examine GDS inventories, student baggage perks (up to 40kg), and airline discounts.
              </p>
            </div>

            <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 text-center">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 font-mono">
                3
              </div>
              <h3 className="font-bold text-stone-900 mb-2 font-serif-luxury text-lg">
                Confirmed E-Ticket Issued
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Receive your airline PNR, verified ticket receipt, baggage allowance confirmation, and direct WhatsApp flight watch.
              </p>
            </div>
          </div>
        </div>

        {/* Direct Booking Helpline Card */}
        <div className="bg-stone-900 text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-800">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
              Urgent Or Multi-City Travel?
            </span>
            <h3 className="text-2xl font-bold font-serif-luxury mb-2">
              Speak Directly with our Senior Reservation Consultants
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
              We specialize in complex multi-destination itineraries, date re-routings, student extra luggage, and emergency departure tickets.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.primaryTel}`}
              className="bg-red-700 hover:bg-red-800 text-white text-xs font-bold py-3 px-5 rounded-xl uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call {COMPANY_INFO.primaryPhone}</span>
            </a>
            <button
              type="button"
              onClick={() => onOpenInquiry('flight')}
              className="bg-stone-800 hover:bg-stone-700 text-white text-xs font-bold py-3 px-5 rounded-xl uppercase tracking-wider transition-all cursor-pointer border border-stone-700"
            >
              <span>Custom Itinerary Inquiry</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

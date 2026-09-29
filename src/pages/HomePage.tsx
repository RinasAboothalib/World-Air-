import React from 'react';
import { Hero } from '../components/Hero';
import { QuickActions } from '../components/QuickActions';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { RouteMapSection } from '../components/RouteMapSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CTASection } from '../components/CTASection';
import { PageId, Destination } from '../types';
import { DESTINATIONS } from '../data/mockData';
import { Plane, ArrowRight, ShieldCheck, Award, Users } from 'lucide-react';

interface HomePageProps {
  onOpenInquiry: (type?: 'flight' | 'student' | 'visa' | 'holiday') => void;
  onNavigate: (page: PageId) => void;
  onSelectDestination: (dest: Destination) => void;
  onSelectRoute?: (origin: string, destination: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenInquiry,
  onNavigate,
  onSelectDestination,
  onSelectRoute,
}) => {
  const previewDestinations = DESTINATIONS.slice(0, 4);

  return (
    <div>
      {/* Aviation Hero with Quick Flight Booking Trigger */}
      <Hero onOpenInquiry={onOpenInquiry} />

      {/* Quick Actions Portal */}
      <QuickActions
        onSelectAction={(action) => {
          if (action === 'flight') onNavigate('booking');
          else if (action === 'contact') onNavigate('contact');
          else if (action === 'visa' || action === 'holiday' || action === 'student') onNavigate('services');
        }}
      />

      {/* Why Choose World Air & Credibility */}
      <WhyChooseUs />

      {/* Interactive Global World Map Flight Routes from Colombo (CMB) */}
      <RouteMapSection
        onSelectRoute={(origin, destination) => {
          if (onSelectRoute) {
            onSelectRoute(origin, destination);
          } else {
            onOpenInquiry('flight');
          }
        }}
      />

      {/* Featured Destinations Teaser with Link to Full Destinations Page */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-700 block mb-2">
                Popular Flight Corridors
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif-luxury">
                Featured World Destinations
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('destinations')}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-red-700 hover:text-red-800 cursor-pointer group"
            >
              <span>Explore All Destinations</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewDestinations.map((dest) => (
              <div
                key={dest.id}
                onClick={() => onSelectDestination(dest)}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white cursor-pointer border border-stone-200 hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={dest.image}
                    alt={dest.city}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute top-3 right-3 text-lg bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/20">
                    {dest.flag}
                  </span>
                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="text-[10px] uppercase font-bold text-amber-300 block tracking-wider">
                      {dest.airportCode} Airport
                    </span>
                    <h3 className="text-lg font-bold font-serif-luxury">{dest.city}</h3>
                    <p className="text-xs text-stone-300">{dest.country}</p>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-stone-600">From Colombo</span>
                  <span className="text-xs font-bold text-red-700 group-hover:underline">
                    Inquire Fares →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Passenger Reviews & Testimonials */}
      <TestimonialsSection />

      {/* Final Call to Action */}
      <CTASection onOpenInquiry={onOpenInquiry} />
    </div>
  );
};

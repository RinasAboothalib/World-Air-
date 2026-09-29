import React, { useState } from 'react';
import { DESTINATIONS } from '../data/mockData';
import { Destination } from '../types';
import { Plane, Clock, ArrowRight, MapPin, Sparkles } from 'lucide-react';

interface DestinationsSectionProps {
  onSelectDestination: (dest: Destination) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onSelectDestination,
}) => {
  const [activeRegion, setActiveRegion] = useState<string>('All');

  const regions = ['All', 'Asia', 'Middle East', 'Europe', 'North America', 'Australia'];

  const filteredDestinations =
    activeRegion === 'All'
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.region === activeRegion);

  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-700 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              <span>Global Airline Network</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-serif-luxury">
              Fly Beyond Borders
            </h2>
            <p className="text-sm text-stone-600 mt-2 max-w-xl">
              Direct and seamless one-stop international flight routes originating from Colombo (CMB) to the world's most vital commerce, education, and leisure capitals.
            </p>
          </div>

          {/* Region Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 bg-stone-100 p-1.5 rounded-lg border border-stone-200">
            {regions.map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => setActiveRegion(region)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  activeRegion === region
                    ? 'bg-red-700 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="group relative bg-stone-900 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-end min-h-[380px] border border-stone-200"
            >
              {/* Background Image with slow zoom */}
              <img
                src={dest.image}
                alt={`${dest.city}, ${dest.country}`}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Multi-layered cinematic gradient for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent group-hover:from-stone-950/95 transition-all duration-300" />

              {/* Top Tag & Flag */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="text-2xl filter drop-shadow">{dest.flag}</span>
                {dest.tag && (
                  <span className="bg-stone-900/80 backdrop-blur-md border border-stone-700 text-amber-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                    {dest.tag}
                  </span>
                )}
              </div>

              {/* Content Panel */}
              <div className="relative z-10 p-5 flex flex-col justify-end">
                <div className="mb-2">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-2xl font-bold text-white font-serif-luxury tracking-tight">
                      {dest.city}
                    </h3>
                    <span className="text-xs font-mono font-bold text-amber-400 bg-stone-900/60 px-2 py-0.5 rounded border border-stone-700">
                      {dest.airportCode}
                    </span>
                  </div>
                  <p className="text-xs text-stone-300 font-medium">
                    {dest.country} · {dest.region}
                  </p>
                </div>

                {/* Flight Duration from CMB */}
                <div className="flex items-center gap-2 text-xs text-stone-300 mb-3 bg-white/10 backdrop-blur-md px-2.5 py-1.5 rounded border border-white/10">
                  <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>From CMB: {dest.flightTimeFromCMB}</span>
                </div>

                <p className="text-xs text-stone-400 mb-4 line-clamp-2">
                  {dest.popularFor}
                </p>

                {/* Explore Route Button */}
                <button
                  type="button"
                  onClick={() => onSelectDestination(dest)}
                  className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-2.5 px-4 rounded text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow group-hover:bg-red-600 cursor-pointer border border-red-600"
                >
                  <Plane className="w-3.5 h-3.5 -rotate-45" />
                  <span>Inquire This Route</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

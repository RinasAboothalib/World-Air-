import React from 'react';
import { TRAVEL_INSPIRATIONS } from '../data/mockData';
import { Compass, ArrowRight, Plane } from 'lucide-react';

interface TravelInspirationProps {
  onSelectInspiration: (title: string) => void;
}

export const TravelInspiration: React.FC<TravelInspirationProps> = ({
  onSelectInspiration,
}) => {
  return (
    <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Curated Journeys</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-serif-luxury">
            Where Will You Fly Next?
          </h2>
          <p className="text-base text-stone-300 max-w-xl mx-auto font-normal">
            Immerse yourself in legendary world destinations. Let World Air arrange your flights, visas, and seamless connections.
          </p>
        </div>

        {/* Editorial Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRAVEL_INSPIRATIONS.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden min-h-[380px] flex flex-col justify-end p-6 border border-stone-800 shadow-xl cursor-pointer"
              onClick={() => onSelectInspiration(item.title)}
            >
              {/* Background Image with Zoom */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent group-hover:from-stone-950/90 transition-all duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    {item.category}
                  </span>
                  <span className="text-2xl">{item.flag}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 font-serif-luxury group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 mb-4 line-clamp-2">
                  {item.subtitle}
                </p>

                <div className="flex items-center gap-2 text-xs font-semibold text-white/90 group-hover:text-red-400 transition-colors">
                  <span>Plan This Trip With World Air</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

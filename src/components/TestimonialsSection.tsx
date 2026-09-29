import React from 'react';
import { TESTIMONIALS, COMPANY_INFO } from '../data/mockData';
import { Star, ShieldCheck, ThumbsUp, ExternalLink } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-700 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              <span>Verified Passenger Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-serif-luxury">
              Trusted by Travelers
            </h2>
            <p className="text-sm text-stone-600 mt-2 max-w-xl">
              Real reflections from Sri Lankan university scholars, corporate executives, and families who rely on World Air for international ticketing.
            </p>
          </div>

          {/* Facebook Recommendation Social Proof Card */}
          <a
            href={COMPANY_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-blue-50 hover:bg-blue-100/80 border border-blue-200 rounded-xl p-4 transition-all flex items-center gap-4 shadow-2xs self-start"
          >
            <div className="w-12 h-12 rounded-lg bg-[#1877F2] text-white flex items-center justify-center font-bold text-xl shadow-xs shrink-0">
              f
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-stone-900">
                  Loved by Our Travelers
                </span>
                <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <div className="flex items-center gap-1 text-sm font-extrabold text-blue-900">
                <ThumbsUp className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
                <span>86%+ Facebook Recommendation Score</span>
              </div>
              <p className="text-[11px] text-stone-500">
                Official World Air Sri Lanka Community
              </p>
            </div>
          </a>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-stone-50 border border-stone-200/90 rounded-2xl p-7 hover:border-red-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with Star Rating & Destination Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-stone-700 bg-white border border-stone-200 px-2.5 py-1 rounded flex items-center gap-1.5">
                    <span>{t.flag}</span>
                    <span>{t.destination}</span>
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-stone-700 leading-relaxed italic mb-6">
                  "{t.review}"
                </p>
              </div>

              {/* Author & Verification Info */}
              <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    {t.name}
                  </h4>
                  <p className="text-xs text-stone-500">
                    {t.role} · <span className="text-red-700 font-medium">{t.travelType}</span>
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

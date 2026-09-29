import React from 'react';
import { Award, Compass, GraduationCap, HeartHandshake, Tag, ShieldCheck, Globe, Users } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: '25+ Years of Experience',
      desc: 'Established travel expertise and long-standing industry presence in Sri Lanka since 1999.',
      accent: 'text-amber-600',
    },
    {
      icon: Compass,
      title: 'International Ticketing Specialists',
      desc: 'Deep specialized knowledge of complex international airline routing, stopovers, and fare classes.',
      accent: 'text-red-700',
    },
    {
      icon: GraduationCap,
      title: 'Student Travel Support',
      desc: 'Special airfares and verified extra baggage benefits (up to 40kg) for students pursuing higher education abroad.',
      accent: 'text-amber-600',
    },
    {
      icon: HeartHandshake,
      title: 'Personalized Service',
      desc: 'Dedicated travel consultants providing one-on-one attention, itinerary customization, and responsive rebooking assistance.',
      accent: 'text-red-700',
    },
    {
      icon: Tag,
      title: 'Competitive Fares',
      desc: 'Direct partner airline distribution giving Sri Lankan travelers access to highly competitive international rates.',
      accent: 'text-amber-600',
    },
    {
      icon: ShieldCheck,
      title: 'Trusted Travel Partner',
      desc: 'A verified, long-established Sri Lankan brand recognized for integrity, zero hidden charges, and authentic customer care.',
      accent: 'text-red-700',
    },
  ];

  return (
    <section className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-700 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
            <span>The World Air Advantage</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4 font-serif-luxury">
            Why Travelers Choose World Air
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Over 25 years of redefining international air travel through unwavering reliability, dedicated passenger advocacy, and unmatched fare intelligence.
          </p>
        </div>

        {/* 6 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-stone-200/90 rounded-2xl p-7 shadow-xs hover:shadow-md hover:border-red-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center mb-5 text-stone-800">
                    <Icon className={`w-6 h-6 ${pillar.accent}`} />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2.5 font-serif-luxury">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Stats Bar */}
        <div className="bg-white border-2 border-stone-200/80 rounded-2xl p-8 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
            <div className="pt-4 sm:pt-0">
              <div className="text-4xl sm:text-5xl font-extrabold text-red-700 font-serif-luxury mb-1">
                25+
              </div>
              <div className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-1">
                Years of Excellence
              </div>
              <p className="text-xs text-stone-500">
                Guiding Sri Lankan travelers continuously since 1999
              </p>
            </div>

            <div className="pt-6 sm:pt-0 sm:px-6">
              <div className="text-4xl sm:text-5xl font-extrabold text-stone-900 font-serif-luxury mb-1">
                120+
              </div>
              <div className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-1">
                International Destinations
              </div>
              <p className="text-xs text-stone-500">
                Spanning Asia, Europe, Middle East, Americas & Oceania
              </p>
            </div>

            <div className="pt-6 sm:pt-0 sm:px-6">
              <div className="text-4xl sm:text-5xl font-extrabold text-amber-600 font-serif-luxury mb-1">
                Thousands
              </div>
              <div className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-1">
                Of Satisfied Travelers
              </div>
              <p className="text-xs text-stone-500">
                Students, corporate executives & family holidaymakers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

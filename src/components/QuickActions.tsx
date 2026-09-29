import React from 'react';
import { Plane, GraduationCap, FileCheck, Palmtree, PhoneCall, ArrowUpRight } from 'lucide-react';

interface QuickActionsProps {
  onSelectAction: (action: 'flight' | 'student' | 'visa' | 'holiday' | 'contact') => void;
}

interface ActionItem {
  id: 'flight' | 'student' | 'visa' | 'holiday' | 'contact';
  title: string;
  desc: string;
  icon: React.ElementType;
  href: string;
  accentColor: string;
  badge?: string;
}

export const QuickActions: React.FC<QuickActionsProps> = ({ onSelectAction }) => {
  const actions: ActionItem[] = [
    {
      id: 'flight',
      title: 'Book a Ticket',
      desc: 'International flight tickets & best airline fares',
      icon: Plane,
      href: '#flight-search',
      accentColor: 'group-hover:text-red-700',
    },
    {
      id: 'student',
      title: 'Student Offers',
      desc: 'Special fares & up to 40kg baggage allowance',
      icon: GraduationCap,
      href: '#student-offers',
      accentColor: 'group-hover:text-amber-600',
      badge: 'Popular',
    },
    {
      id: 'visa',
      title: 'Visa Assistance',
      desc: 'Expert guidance, forms & documentation support',
      icon: FileCheck,
      href: '#services',
      accentColor: 'group-hover:text-red-700',
    },
    {
      id: 'holiday',
      title: 'Holiday Packages',
      desc: 'Customized vacations & luxury island getaways',
      icon: Palmtree,
      href: '#services',
      accentColor: 'group-hover:text-emerald-600',
    },
    {
      id: 'contact',
      title: 'Contact Us',
      desc: 'Direct hotline & personalized consultant service',
      icon: PhoneCall,
      href: '#contact',
      accentColor: 'group-hover:text-red-700',
    },
  ] as const;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {actions.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={() => onSelectAction(item.id as any)}
              className="group relative bg-white border border-stone-200/90 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-red-300 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Subtle top red/gold line highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-700 group-hover:bg-red-50 group-hover:text-red-700 group-hover:border-red-200 transition-colors">
                    <Icon className="w-5 h-5 transition-transform group-hover:scale-110 duration-200" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-red-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <div className="flex items-center gap-1.5 mb-1">
                  <h3 className="text-sm font-bold text-stone-900 group-hover:text-red-700 transition-colors">
                    {item.title}
                  </h3>
                  {item.badge && (
                    <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.2 rounded">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-stone-500 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

import React from 'react';
import { KeyRound, Compass, MapPin, PhoneCall } from 'lucide-react';

export const QuickHighlights: React.FC = () => {
  const highlights = [
    {
      title: 'Self Drive',
      description: 'Drive the car yourself and enjoy complete flexibility.',
      icon: KeyRound,
    },
    {
      title: 'Flexible Travel',
      description: 'Choose a vehicle according to your travel needs.',
      icon: Compass,
    },
    {
      title: 'Nagpur Based',
      description: 'Conveniently located in Shivaji Nagar, Nagpur.',
      icon: MapPin,
    },
    {
      title: 'Easy Enquiry',
      description: 'Call or enquire to check vehicle availability.',
      icon: PhoneCall,
    },
  ];

  return (
    <section id="highlights" className="relative -mt-8 sm:-mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-100/90 shadow-card card-hover flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 mb-4">
                  <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2 font-heading tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-xs font-semibold text-brand-blue">
                <span>Hascorp Standard</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

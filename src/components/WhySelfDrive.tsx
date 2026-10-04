import React from 'react';
import { Compass, UserCheck, Milestone, SlidersHorizontal } from 'lucide-react';

export const WhySelfDrive: React.FC = () => {
  const features = [
    {
      title: 'Freedom',
      description: 'Travel according to your own schedule.',
      icon: Compass,
      tag: 'Your Time',
      subtitle: 'No rigid pickup schedules or time pressure'
    },
    {
      title: 'Privacy',
      description: 'Enjoy your journey without a driver.',
      icon: UserCheck,
      tag: 'Confidentiality',
      subtitle: 'Complete private space for family & friends'
    },
    {
      title: 'Flexibility',
      description: 'Choose your route and travel plans.',
      icon: Milestone,
      tag: 'Your Route',
      subtitle: 'Spontaneous detours and custom stops'
    },
    {
      title: 'Convenience',
      description: 'Select a vehicle that suits your requirements.',
      icon: SlidersHorizontal,
      tag: 'Choice',
      subtitle: 'Right sized vehicle for every purpose'
    },
  ];

  return (
    <section id="why-self-drive" className="py-20 lg:py-28 bg-[#F4F9FD] border-y border-brand-navy-100/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-brand-blue-200/80 shadow-sm text-xs font-bold text-brand-navy uppercase tracking-wider">
            <span>The Self-Drive Advantage</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy font-heading tracking-tight">
            WHY SELF DRIVE?
          </h2>

          <p className="text-base text-slate-600">
            Experience the genuine pleasure of driving on your terms across Nagpur and surrounding regions.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-soft card-hover flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Subtle Color Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-navy to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div>
                  {/* Blue Line Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue-50 border border-brand-blue-200/80 text-brand-blue flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7 stroke-[1.75]" />
                  </div>

                  {/* Title & Tag */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-extrabold text-brand-navy font-heading">
                      {feature.title}
                    </h3>
                    <span className="text-[11px] font-bold text-brand-blue bg-brand-blue-50 px-2 py-0.5 rounded-md">
                      {feature.tag}
                    </span>
                  </div>

                  {/* Explicit Description Required */}
                  <p className="text-sm font-semibold text-slate-700 leading-relaxed mt-2">
                    {feature.description}
                  </p>

                  <p className="text-xs text-slate-500 mt-2 font-normal">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-14 max-w-4xl mx-auto bg-white rounded-2xl p-6 border border-brand-blue-200/80 shadow-card flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-brand-navy">
              Planning your next journey from Nagpur?
            </h4>
            <p className="text-sm text-slate-600">
              Reach out directly to discuss your trip duration, vehicle requirements, and booking slots.
            </p>
          </div>
          <a
            href="tel:+919607681995"
            className="flex-shrink-0 px-6 py-3 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold rounded-xl text-sm shadow-blue-glow transition-all"
          >
            Call +91 9607681995
          </a>
        </div>

      </div>
    </section>
  );
};

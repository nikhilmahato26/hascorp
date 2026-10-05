import React from 'react';
import { MapPin, Phone, Target, Sparkles, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle light background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue-50/60 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT: About Story, Mission & Actions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-navy-50 text-brand-navy text-xs font-bold tracking-wider uppercase">
              ABOUT HASCORP SELF DRIVE CARS
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy font-heading tracking-tight leading-tight">
              YOUR JOURNEY. <br />
              <span className="text-brand-blue">YOUR DRIVE.</span>
            </h2>

            {/* Our Story */}
            <div className="space-y-3 bg-slate-50/80 border border-slate-200/80 rounded-2xl p-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-blue flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-blue" />
                <span>Our Story</span>
              </h3>
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                Established in 2026, Hascorp Self Drive Cars was built on a simple premise: renting a vehicle in Nagpur should feel exactly like driving your own meticulously cared for car.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We started this journey because we believe that whether you are navigating city streets or heading out on a highway road trip, the quality of your drive matters.
              </p>
            </div>

            {/* Our Mission */}
            <div className="p-6 rounded-2xl bg-gradient-to-tr from-brand-navy to-brand-navy-800 text-white shadow-card relative overflow-hidden">
              <div className="flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-wider mb-2.5">
                <Target className="w-4 h-4" />
                <span>Our Mission</span>
              </div>
              <p className="text-base sm:text-lg font-semibold text-white leading-relaxed">
                “To provide Nagpur with a reliable and premium self drive experience where every customer feels confident behind the wheel.”
              </p>
            </div>

            {/* Quick Action */}
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="tel:+919607681995"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-navy text-white hover:bg-brand-navy-700 font-bold rounded-xl text-sm transition-all duration-200 shadow-sm"
              >
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>Call +91 9607681995</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-brand-navy hover:bg-slate-50 border border-slate-200 font-bold rounded-xl text-sm transition-all duration-200"
              >
                <span>View Contact Details</span>
              </a>
            </div>
          </div>

          {/* RIGHT: The Hascorp Standard & Location Card */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* The Hascorp Standard */}
            <div className="bg-slate-50/90 border border-slate-200/90 rounded-2xl p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-brand-navy font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-brand-blue" />
                <span>The Hascorp Standard</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                We don't just hand over the keys to a standard fleet vehicle; we obsess over the automotive details. We know that a truly great drive comes down to pristine mechanical maintenance, thoughtfully selected aesthetic upgrades, and immersive in cabin experiences.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We handle the rigorous upkeep, source the best replacement components, and fine tune our vehicles so you can focus entirely on the road ahead.
              </p>
            </div>

            {/* Location Highlight Card */}
            <div className="bg-brand-blue-50/70 border border-brand-blue-200/70 rounded-2xl p-6">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                  <MapPin className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-blue uppercase tracking-wider mb-1">
                    Pickup & Service Address
                  </h4>
                  <p className="text-sm sm:text-base font-bold text-brand-navy leading-snug">
                    Plot No 168, Shivaji Nagar, Near Shivaji Nagar Garden, Nagpur - 440010
                  </p>
                  <p className="text-xs text-brand-blue font-semibold mt-1">
                    We are at walking distance from Shankar Nagar Metro Station and L.A.D. Square Metro Station
                  </p>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    Nagpur, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

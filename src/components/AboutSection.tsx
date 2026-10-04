import React from 'react';
import { MapPin, Phone, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle light background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue-50/60 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: High Quality Car Photography */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              {/* Outer decorative card frame */}
              <div className="relative rounded-3xl overflow-hidden p-2 sm:p-3 bg-gradient-to-tr from-brand-navy-50 to-brand-blue-50 border border-brand-blue-100 shadow-card">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative group">
                  <img
                    src="/images/about-car.jpg"
                    alt="Self Drive Experience with Hascorp Cars Nagpur"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-900/30 via-transparent to-transparent pointer-events-none"></div>

                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-slate-100 shadow-md">
                    <p className="text-xs font-bold text-brand-navy flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
                      Designed for Personal, Family & Business Travel
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                      Explore Nagpur and beyond with the car of your choice
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: About Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-navy-50 text-brand-navy text-xs font-bold tracking-wider uppercase">
              About Hascorp
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy font-heading tracking-tight leading-tight">
              YOUR JOURNEY. <br />
              <span className="text-brand-blue">YOUR DRIVE.</span>
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Travel hassle free with our reliable self drive fleet. Perfect for business trips or family getaways, enjoy a smooth and comfortable ride every time.
            </p>

            {/* Key purpose list adhering strictly to provided facts */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 font-medium">
                  <strong>Personal & Family Trips:</strong> Freedom to enjoy your private road trips without an external driver.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 font-medium">
                  <strong>Business & Daily Commute:</strong> Professional self-drive transport tailored for city meetings and intercity routes.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 font-medium">
                  <strong>Flexible Schedules:</strong> You decide the departure time, route, and stopovers.
                </p>
              </div>
            </div>

            {/* Location Highlight Card */}
            <div className="bg-brand-blue-50/70 border border-brand-blue-200/70 rounded-2xl p-5 mt-6">
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

            {/* Quick Action */}
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="tel:+919607681995"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy text-white hover:bg-brand-navy-700 font-bold rounded-xl text-sm transition-all duration-200 shadow-sm"
              >
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>Call +91 9607681995</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-navy hover:bg-slate-50 border border-slate-200 font-bold rounded-xl text-sm transition-all duration-200"
              >
                <span>View Contact Details</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

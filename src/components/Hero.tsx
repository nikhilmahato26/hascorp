import React from 'react';
import { Phone, ArrowRight, ShieldCheck, MapPin, KeyRound, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F0F6FD] via-[#F8FBFE] to-white">
      {/* Abstract light curved decorative shapes & road lines */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full pointer-events-none overflow-hidden opacity-60">
        <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-brand-blue-100/70 to-brand-navy-50/40 blur-3xl"></div>
        <div className="absolute -bottom-10 right-1/4 w-[350px] h-[350px] rounded-full bg-brand-blue-200/40 blur-2xl"></div>
        
        {/* Subtle curved automotive flow lines */}
        <svg className="absolute inset-0 w-full h-full text-brand-blue/15" viewBox="0 0 600 600" fill="none">
          <path d="M-100,200 C150,150 350,450 700,300" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
          <path d="M-50,300 C200,250 400,550 750,400" stroke="currentColor" strokeWidth="1.5" />
          <path d="M0,100 C250,50 450,350 800,200" stroke="currentColor" strokeWidth="1" strokeDasharray="12 12" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-blue-200/70 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-blue animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                SELF DRIVE CAR RENTALS IN NAGPUR
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.1] font-heading">
              DRIVE YOUR WAY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy via-brand-navy-700 to-brand-blue">
                WITH HASCORP
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Reliable self-drive cars in Nagpur for flexible and convenient journeys. Choose your car and enjoy the freedom to travel on your own terms.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#fleet"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-xl shadow-blue-glow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Browse Cars</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="tel:+919607681995"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-brand-navy bg-white hover:bg-brand-blue-50 border-2 border-brand-navy/20 hover:border-brand-blue rounded-xl shadow-soft transition-all duration-200"
              >
                <Phone className="w-5 h-5 text-brand-blue" />
                <span>Call Now: +91 9607681995</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <div className="w-6 h-6 rounded-md bg-brand-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0">
                  <KeyRound className="w-3.5 h-3.5" />
                </div>
                <span>100% Self-Drive</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <div className="w-6 h-6 rounded-md bg-brand-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>Full Privacy</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 col-span-2 sm:col-span-1">
                <div className="w-6 h-6 rounded-md bg-brand-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>Shivaji Nagar, Nagpur</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Modern Automotive Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Soft blue glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-navy-100/30 rounded-3xl filter blur-xl transform scale-95"></div>

              {/* Vehicle Container */}
              <div className="relative bg-gradient-to-b from-white via-white to-brand-blue-50/50 p-2 sm:p-3 rounded-3xl border border-white shadow-card overflow-hidden group">
                
                {/* Clean vehicle photography */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-100">
                  <img
                    src="/images/hero-car.jpg"
                    alt="Hascorp Self Drive Cars Nagpur"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle light gradient at top/bottom for integration, NO black overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/20 via-transparent to-transparent pointer-events-none"></div>

                  {/* Badge on image */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-slate-100 shadow-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-blue" />
                    <span className="text-xs font-bold text-brand-navy">Premium Self-Drive Vehicles</span>
                  </div>
                </div>

                {/* Subtle Road Graphic line underneath image */}
                <div className="w-full h-1.5 mt-3 rounded-full road-line opacity-75"></div>
              </div>

              {/* Floating Feature Tag 1: Shivaji Nagar Hub */}
              <div className="absolute -bottom-5 -left-4 sm:left-4 bg-white px-4 py-3 rounded-2xl shadow-elevated border border-brand-blue-100 flex items-center gap-3 animate-bounce-subtle">
                <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center shadow-sm">
                  <MapPin className="w-5 h-5 text-brand-blue-light" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-navy leading-tight">Nagpur Location</p>
                  <p className="text-[11px] text-slate-500 font-medium">Shivaji Nagar Garden</p>
                </div>
              </div>

              {/* Floating Feature Tag 2: Easy Availability */}
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="absolute -top-4 -right-2 sm:right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-elevated border border-brand-blue-200/80 flex items-center gap-2.5 hover:scale-105 transition-transform cursor-pointer"
                title="Click to check availability"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
                <span className="text-xs font-extrabold text-brand-navy">Ready for Booking</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

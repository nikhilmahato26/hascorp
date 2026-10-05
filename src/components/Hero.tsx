import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { InstagramIcon, FacebookIcon } from './SocialIcons';
import { vehicles } from '../data/vehicles';

interface HeroProps {
  onOpenEnquiry?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Auto-play slider through fleet vehicles
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % vehicles.length);
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + vehicles.length) % vehicles.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % vehicles.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    if (distance > 40) {
      // swiped left -> next
      setCurrentIndex((prev) => (prev + 1) % vehicles.length);
    } else if (distance < -40) {
      // swiped right -> prev
      setCurrentIndex((prev) => (prev - 1 + vehicles.length) % vehicles.length);
    }
    setTouchStart(null);
  };

  const currentCar = vehicles[currentIndex];

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
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.1] font-heading">
              DRIVE YOUR WAY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy via-brand-navy-700 to-brand-blue">
                WITH HASCORP
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Travel hassle free with our reliable self drive fleet. Perfect for business trips or family getaways, enjoy a smooth and comfortable ride every time.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5">
              <a
                href="#fleet"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-bold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-xl shadow-blue-glow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Browse Cars</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/919607681995?text=Hello%20Hascorp%20Self%20Drive%20Cars%2C%20I%20would%20like%20to%20inquire%20about%20self-drive%20car%20booking%20in%20Nagpur."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-bold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="tel:+919607681995"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-bold text-brand-navy bg-white hover:bg-brand-blue-50 border-2 border-brand-navy/20 hover:border-brand-blue rounded-xl shadow-soft transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5 text-brand-blue" />
                <span>Call Now: +91 9607681995</span>
              </a>
            </div>

            {/* Location Badge & Social Links */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-blue-200/70 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-brand-blue animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                  SELF DRIVE CAR RENTALS IN NAGPUR
                </span>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/hascorpselfdrivecars?stkn=MW92NnNtejF2YWxseg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white text-slate-700 border border-slate-200 shadow-sm text-xs font-bold transition-all duration-200 group"
                  aria-label="Hascorp on Instagram"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-pink-600 group-hover:text-white transition-colors" />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://www.facebook.com/share/1DNjTtukJd/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#1877F2] hover:text-white text-slate-700 border border-slate-200 shadow-sm text-xs font-bold transition-all duration-200 group"
                  aria-label="Hascorp on Facebook"
                >
                  <FacebookIcon className="w-3.5 h-3.5 text-[#1877F2] group-hover:text-white transition-colors" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Modern Automotive Carousel */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Soft blue glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-navy-100/30 rounded-3xl filter blur-xl transform scale-95"></div>

              {/* Vehicle Container */}
              <div 
                className="relative bg-gradient-to-b from-white via-white to-brand-blue-50/50 p-2 sm:p-3 rounded-3xl border border-white shadow-card overflow-hidden group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                
                {/* Vehicle Showcase Box */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-white border border-slate-100/80 flex items-center justify-center p-4 sm:p-6">
                  <img
                    key={currentCar.id}
                    src={currentCar.image}
                    alt={`${currentCar.name} - Hascorp Self Drive Cars Nagpur`}
                    className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105 select-none"
                    loading="eager"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                    <span className="px-2.5 py-1 bg-brand-navy text-white text-[11px] font-bold rounded-lg shadow-sm">
                      {currentCar.category}
                    </span>
                    <span className="px-2 py-1 bg-white/95 backdrop-blur-sm border border-slate-200/80 text-brand-navy text-[11px] font-semibold rounded-lg shadow-xs">
                      {currentCar.transmission}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-emerald-50/95 backdrop-blur-sm border border-emerald-200/80 px-2.5 py-1 rounded-full text-[11px] font-bold text-emerald-700 shadow-xs z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Available</span>
                  </div>

                  {/* Left / Right Navigation Chevrons */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-brand-navy border border-slate-200/80 shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110 z-10 opacity-70 group-hover:opacity-100"
                    aria-label="Previous Vehicle"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-brand-navy border border-slate-200/80 shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110 z-10 opacity-70 group-hover:opacity-100"
                    aria-label="Next Vehicle"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Bottom Vehicle Info Badge */}
                  <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-sm flex items-center justify-between sm:justify-start gap-3 z-10">
                    <div>
                      <p className="text-xs font-bold text-brand-navy flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
                        <span>{currentCar.name}</span>
                      </p>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {currentCar.seats} Seater • {currentCar.fuelType} • Nagpur
                      </p>
                    </div>
                    <a
                      href="#fleet"
                      className="text-[11px] font-bold text-brand-blue hover:underline whitespace-nowrap hidden sm:inline-block ml-2"
                    >
                      View Fleet &rarr;
                    </a>
                  </div>
                </div>

                {/* Interactive Car Selector Indicator Pills */}
                <div className="flex items-center justify-center gap-1.5 mt-3 py-1">
                  {vehicles.map((v, idx) => (
                    <button
                      key={v.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? 'w-7 bg-brand-blue shadow-xs'
                          : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`View ${v.name}`}
                      title={v.name}
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

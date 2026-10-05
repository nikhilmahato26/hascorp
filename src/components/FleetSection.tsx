import React, { useState } from 'react';
import { vehicles, vehicleCategories } from '../data/vehicles';
import { 
  Car, 
  CalendarCheck, 
  Phone, 
  Fuel, 
  Users, 
  Cog,
  CheckCircle2
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FleetSectionProps {
  onOpenEnquiry?: (preferredCategory?: string) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Vehicles');

  const filteredVehicles = selectedCategory === 'All Vehicles'
    ? vehicles
    : vehicles.filter(v => v.category === selectedCategory);

  const handleCarWhatsApp = (carName: string) => {
    const text = encodeURIComponent(
      `Hello Hascorp Self Drive Cars, I would like to check availability and rates for the *${carName}* in Nagpur.`
    );
    window.open(`https://wa.me/919607681995?text=${text}`, '_blank');
  };

  return (
    <section id="fleet" className="py-20 lg:py-28 bg-[#F8FAFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-navy-50 border border-brand-navy-100 text-xs font-bold text-brand-navy uppercase tracking-wider">
            <Car className="w-3.5 h-3.5 text-brand-blue" />
            <span>Our Self-Drive Fleet</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy font-heading tracking-tight">
            CHOOSE YOUR RIDE
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Clean, sanitized, and well-maintained self-drive cars ready for your city commute, family vacations, and outstation trips.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {vehicleCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-blue text-white shadow-blue-glow scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((car) => (
            <div
              key={car.id}
              className="group bg-white rounded-3xl border border-slate-200/90 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
            >
              {/* Car Image Area */}
              <div className="p-6 bg-gradient-to-b from-slate-50 to-brand-blue-50/20 relative aspect-[16/11] flex items-center justify-center overflow-hidden border-b border-slate-100">
                <img
                  src={car.image || '/images/hero-car.jpg'}
                  alt={car.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                  loading="lazy"
                />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-brand-navy text-white text-xs font-bold rounded-lg shadow-sm">
                  {car.category}
                </span>

                {/* Transmission Pill */}
                <span className="absolute top-4 right-4 px-2.5 py-1 bg-white/95 backdrop-blur-sm border border-slate-200/70 text-slate-700 text-xs font-semibold rounded-lg shadow-xs">
                  {car.transmission}
                </span>
              </div>

              {/* Car Content Area */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-brand-navy font-heading leading-snug">
                        {car.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        Self Drive Car • Nagpur
                      </p>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-md flex-shrink-0">
                      Available
                    </span>
                  </div>

                  {/* Specs Row */}
                  <div className="grid grid-cols-3 gap-2 py-3 mt-3 border-y border-slate-100 text-xs text-slate-600 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span>{car.seats} {typeof car.seats === 'number' ? 'Seats' : 'Seater'}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Cog className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Fuel className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span>{car.fuelType}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  {car.features && (
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {car.features.map((feat, idx) => (
                        <span 
                          key={idx} 
                          className="text-[11px] font-medium bg-slate-50 text-slate-600 border border-slate-200/70 px-2 py-0.5 rounded-md flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-2.5 h-2.5 text-brand-blue flex-shrink-0" />
                          <span>{feat}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Action CTAs */}
                <div className="pt-4 space-y-2">
                  <button
                    onClick={() => onOpenEnquiry && onOpenEnquiry(car.name)}
                    className="w-full py-3 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold rounded-xl text-sm transition-all shadow-blue-glow flex items-center justify-center gap-2 active:scale-98"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Check Availability</span>
                  </button>

                  <button
                    onClick={() => handleCarWhatsApp(car.name)}
                    className="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl text-sm transition-all shadow-xs flex items-center justify-center gap-2 active:scale-98"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp Booking</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Location & Dispatch Note */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-brand-blue-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0"></span>
            <span className="font-semibold text-slate-800">Vehicles dispatched from Plot No 168, Shivaji Nagar, Nagpur.</span>
          </div>
          <span className="text-brand-blue font-bold">
            Walking distance from Shankar Nagar Metro Station & L.A.D. Square Metro Station
          </span>
        </div>

        {/* Bottom Banner */}
        <div className="mt-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-navy to-brand-navy-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-elevated">
          <div className="text-left space-y-1">
            <h4 className="text-lg sm:text-xl font-bold text-white font-heading">
              Need a custom rental, long-term booking, or specific model?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Get in touch with our Shivaji Nagar hub team for tailored rates and immediate dispatch.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <a
              href="tel:+919607681995"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-bold rounded-xl transition-all shadow-blue-glow"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 9607681995</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};


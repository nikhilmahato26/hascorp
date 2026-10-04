import React, { useState } from 'react';
import { vehicles, vehicleCategories } from '../data/vehicles';
import { 
  Car, 
  CalendarCheck, 
  Phone, 
  Sparkles, 
  Check, 
  Fuel, 
  Users, 
  Cog 
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FleetSectionProps {
  onOpenEnquiry?: (preferredCategory?: string) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Vehicles');
  const [selectedEnquiryType, setSelectedEnquiryType] = useState<string>('Any Vehicle');

  const filteredVehicles = selectedCategory === 'All Vehicles'
    ? vehicles
    : vehicles.filter(v => v.category === selectedCategory);

  const categories = [
    { name: 'Hatchback', desc: 'Compact & easy city driving' },
    { name: 'Sedan', desc: 'Comfortable family & highway trips' },
    { name: 'SUV', desc: 'High ground clearance & road presence' },
    { name: '7-Seater', desc: 'Spacious for groups and family journeys' },
    { name: 'Any Vehicle', desc: 'Tell us your requirement' }
  ];

  const handleQuickWhatsApp = (cat: string) => {
    const text = encodeURIComponent(
      `Hello Hascorp Self Drive Cars, I would like to check availability for a ${cat} self-drive car in Nagpur.`
    );
    window.open(`https://wa.me/919607681995?text=${text}`, '_blank');
  };

  return (
    <section id="fleet" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-navy-50 border border-brand-navy-100 text-xs font-bold text-brand-navy uppercase tracking-wider">
            <Car className="w-3.5 h-3.5 text-brand-blue" />
            <span>Self-Drive Fleet</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy font-heading tracking-tight">
            CHOOSE YOUR RIDE
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Explore available self-drive cars and enquire about the vehicle that fits your journey.
          </p>
        </div>

        {/* When Vehicles Array has items, render the full dynamic catalog */}
        {vehicles.length > 0 ? (
          <div>
            {/* Category Filter Pills */}
            <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
              {vehicleCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-brand-blue text-white shadow-blue-glow'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-soft overflow-hidden card-hover flex flex-col justify-between"
                >
                  <div className="p-4 bg-slate-50 relative aspect-[16/10] overflow-hidden">
                    <img
                      src={car.image || '/images/hero-car.jpg'}
                      alt={car.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <span className="absolute top-6 left-6 px-3 py-1 bg-brand-navy text-white text-xs font-bold rounded-lg shadow-sm">
                      {car.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-brand-navy font-heading">{car.name}</h3>
                        <p className="text-xs text-slate-500 font-medium">Self Drive | Nagpur</p>
                      </div>
                      {car.pricePerDay && (
                        <div className="text-right">
                          <span className="text-sm font-bold text-brand-blue">{car.pricePerDay}</span>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-xs text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-brand-blue" />
                        <span>{car.seats} Seats</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Cog className="w-4 h-4 text-brand-blue" />
                        <span>{car.transmission}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Fuel className="w-4 h-4 text-brand-blue" />
                        <span>{car.fuelType}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenEnquiry && onOpenEnquiry(car.name)}
                      className="w-full py-3 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold rounded-xl text-sm transition-all shadow-blue-glow flex items-center justify-center gap-2"
                    >
                      <CalendarCheck className="w-4 h-4" />
                      <span>Enquire for {car.name}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Initial Production State: Premium Availability Enquiry & Specific Car Portal */
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl bg-gradient-to-b from-[#F0F7FF] via-[#F8FBFE] to-white border-2 border-brand-blue-100 shadow-card p-8 sm:p-12 overflow-hidden text-left">
              
              {/* Decorative background light accents */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue-100/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

              <div className="relative z-10 space-y-8">
                
                {/* Notice Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-blue-100">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-brand-blue-200 text-xs font-bold text-brand-navy shadow-sm">
                      <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
                      <span>Live Fleet Availability</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading">
                      Looking for a specific car?
                    </h3>
                  </div>

                  <a
                    href="tel:+919607681995"
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy bg-white px-4 py-2.5 rounded-xl border border-brand-blue-200 hover:border-brand-blue shadow-sm transition-all flex-shrink-0"
                  >
                    <Phone className="w-4 h-4 text-brand-blue" />
                    <span>+91 9607681995</span>
                  </a>
                </div>

                {/* Subtext */}
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  Contact <strong className="text-brand-navy">Hascorp Self Drive Cars</strong> to check current vehicle availability. Tell us your preferred car category, dates, and journey plans for instant confirmation.
                </p>

                {/* Interactive Category Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-3">
                    Select your preferred vehicle type to enquire:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {categories.map((cat) => {
                      const isSelected = selectedEnquiryType === cat.name;
                      return (
                        <button
                          key={cat.name}
                          type="button"
                          onClick={() => setSelectedEnquiryType(cat.name)}
                          className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${
                            isSelected
                              ? 'bg-white border-brand-blue ring-2 ring-brand-blue/30 shadow-md'
                              : 'bg-white/80 border-slate-200 hover:border-brand-blue-200 hover:bg-white'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isSelected ? 'bg-brand-blue text-white' : 'bg-brand-blue-50 text-brand-blue'
                          }`}>
                            {isSelected ? <Check className="w-4 h-4" /> : <Car className="w-4 h-4" />}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-brand-navy font-heading">{cat.name}</p>
                            <p className="text-xs text-slate-500">{cat.desc}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    onClick={() => {
                      if (onOpenEnquiry) {
                        onOpenEnquiry(selectedEnquiryType);
                      } else {
                        handleQuickWhatsApp(selectedEnquiryType);
                      }
                    }}
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold rounded-xl shadow-blue-glow transition-all active:scale-95 text-base"
                  >
                    <CalendarCheck className="w-5 h-5" />
                    <span>Check Availability</span>
                  </button>

                  <button
                    onClick={() => handleQuickWhatsApp(selectedEnquiryType)}
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl shadow-sm transition-all active:scale-95 text-base"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    <span>WhatsApp Availability</span>
                  </button>
                </div>

                {/* Location Note */}
                <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Vehicles dispatched from Plot No 168, Shivaji Nagar, Nagpur.</span>
                  </div>
                  <span className="text-brand-blue font-semibold">
                    Walking distance from Shankar Nagar Metro Station & L.A.D. Square Metro Station
                  </span>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, User, Car, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVehicleCategory?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialVehicleCategory = 'Any Vehicle'
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [vehicleCategory, setVehicleCategory] = useState(initialVehicleCategory);
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialVehicleCategory) {
      setVehicleCategory(initialVehicleCategory);
    }
  }, [initialVehicleCategory]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `*Hascorp Self Drive Car Rental Enquiry*%0A%0A` +
      `*Name:* ${encodeURIComponent(fullName)}%0A` +
      `*Phone:* ${encodeURIComponent(phoneNumber)}%0A` +
      `*Vehicle Type:* ${encodeURIComponent(vehicleCategory)}%0A` +
      `*Pickup Date:* ${encodeURIComponent(pickupDate || 'To be decided')}%0A` +
      `*Return Date:* ${encodeURIComponent(returnDate || 'To be decided')}%0A` +
      (notes ? `*Destination/Notes:* ${encodeURIComponent(notes)}%0A` : '') +
      `*Location:* Shivaji Nagar, Nagpur`;

    // Open WhatsApp
    window.open(`https://wa.me/919607681995?text=${message}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-navy-950/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-brand-navy font-heading">
              Enquiry Submitted!
            </h3>
            <p className="text-slate-600 text-sm max-w-xs mx-auto">
              WhatsApp has been opened with your enquiry details. Our team at Shivaji Nagar, Nagpur will confirm your booking availability shortly.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <a
                href="tel:+919607681995"
                className="w-full py-3 bg-brand-blue text-white font-bold rounded-xl text-sm shadow-blue-glow inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: +91 9607681995</span>
              </a>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 text-slate-500 font-semibold text-sm hover:text-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue-50 px-2.5 py-1 rounded-md">
                Hascorp Self Drive Cars
              </span>
              <h3 className="text-2xl font-extrabold text-brand-navy font-heading mt-2">
                Check Vehicle Availability
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Shivaji Nagar, Nagpur • Walking distance from Shankar Nagar & L.A.D. Square Metro Stations
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Phone / WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Vehicle Category */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Preferred Car Category
                </label>
                <div className="relative">
                  <Car className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <select
                    value={vehicleCategory}
                    onChange={(e) => setVehicleCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                  >
                    <option value="Any Vehicle">Any Vehicle (Check what is free)</option>
                    <option value="Hatchback">Hatchback (Compact & City)</option>
                    <option value="Sedan">Sedan (Comfort & Family)</option>
                    <option value="SUV">SUV (Spacious & Ground Clearance)</option>
                    <option value="7-Seater">7-Seater / MUV (Large Group)</option>
                  </select>
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pickup Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      className="w-full pl-9 pr-2 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Return Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="w-full pl-9 pr-2 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Message / Destination */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Destination / Requirements (Optional)
                </label>
                <div className="relative">
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="E.g. Travel to Pench, Tadoba, Wardha, local Nagpur..."
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold rounded-xl text-sm shadow-blue-glow flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Enquire Availability on WhatsApp</span>
                </button>

                <a
                  href="tel:+919607681995"
                  className="w-full py-3 bg-white hover:bg-slate-50 text-brand-navy font-bold rounded-xl text-sm border border-slate-200 flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-brand-blue" />
                  <span>Or Call Directly: +91 9607681995</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

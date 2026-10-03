import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dates: '',
    message: ''
  });
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Website Enquiry - Hascorp Self Drive Cars*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      (formData.email ? `*Email:* ${encodeURIComponent(formData.email)}%0A` : '') +
      (formData.dates ? `*Dates:* ${encodeURIComponent(formData.dates)}%0A` : '') +
      `*Requirement:* ${encodeURIComponent(formData.message || 'Self Drive Car Booking Availability')}%0A` +
      `*Location:* Shivaji Nagar, Nagpur`;

    window.open(`https://wa.me/919607681995?text=${text}`, '_blank');
    setSentSuccess(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F4F9FD] border-t border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-brand-blue-200/80 text-xs font-bold text-brand-navy uppercase tracking-wider shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-brand-blue" />
            <span>Shivaji Nagar • Nagpur</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy font-heading tracking-tight">
            CONNECT WITH HASCORP
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Have questions about vehicle options or want to check instant availability? We are here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT: Contact Cards & Location Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-5 text-left">
            
            {/* Phone Card */}
            <a
              href="tel:+919607681995"
              className="group block bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft hover:border-brand-blue transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                    Call / Phone Enquiries
                  </span>
                  <h3 className="text-xl font-extrabold text-brand-navy mt-0.5 group-hover:text-brand-blue transition-colors font-heading">
                    +91 9607681995
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Click to dial directly for instant support & quotes
                  </p>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:hascorpselfdrivecars@gmail.com"
              className="group block bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft hover:border-brand-blue transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                    Email Correspondence
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-brand-navy mt-0.5 break-all group-hover:text-brand-blue transition-colors">
                    hascorpselfdrivecars@gmail.com
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Send detailed queries or booking confirmations
                  </p>
                </div>
              </div>
            </a>

            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-navy text-white flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-brand-blue-light" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                    Office & Dispatch Hub
                  </span>
                  <p className="text-sm sm:text-base font-bold text-brand-navy leading-snug">
                    Plot No 168, Shivaji Nagar, Near Shivaji Nagar Garden, Nagpur - 440010
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Nagpur, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Service Notice */}
            <div className="bg-brand-navy text-white rounded-2xl p-5 shadow-card flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-brand-blue-light flex-shrink-0" />
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-brand-blue-light">
                  Dedicated Self-Drive
                </p>
                <p className="text-xs text-slate-200 font-medium leading-relaxed">
                  Every vehicle is handed over clean, sanitized, and ready for you to drive yourself.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT: Direct Booking & Enquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-card text-left">
              
              <div className="mb-6 space-y-1">
                <h3 className="text-2xl font-extrabold text-brand-navy font-heading">
                  Send Booking Enquiry
                </h3>
                <p className="text-sm text-slate-600">
                  Fill in your travel dates and details below to check self-drive availability.
                </p>
              </div>

              {sentSuccess ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-brand-navy">Enquiry Opened in WhatsApp</h4>
                  <p className="text-xs text-slate-600">
                    Send the generated message in WhatsApp to connect with our Nagpur team instantly.
                  </p>
                  <button
                    onClick={() => setSentSuccess(false)}
                    className="text-xs font-bold text-brand-blue underline"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-navy mb-1.5">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-navy mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 96076 81995"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-navy mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-navy mb-1.5">
                        Travel / Rental Dates
                      </label>
                      <input
                        type="text"
                        value={formData.dates}
                        onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                        placeholder="E.g., 10th Oct to 13th Oct"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-1.5">
                      Your Travel Plans or Car Preference
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify your preferred car type (SUV, Hatchback, Sedan, 7-Seater) or trip purpose..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-3.5 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold rounded-xl text-sm shadow-blue-glow flex items-center justify-center gap-2 transition-all active:scale-95"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Enquiry via WhatsApp</span>
                    </button>

                    <a
                      href="tel:+919607681995"
                      className="w-full sm:w-auto px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-brand-navy font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-all"
                    >
                      <Phone className="w-4 h-4 text-brand-blue" />
                      <span>Quick Call</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center pt-2">
                    Direct enquiry goes straight to Hascorp management in Shivaji Nagar, Nagpur.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Map Preview / Location Box */}
        <div className="mt-12 bg-white rounded-3xl p-6 border border-slate-200/90 shadow-soft">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-brand-navy">Shivaji Nagar Garden Location</h4>
                <p className="text-xs text-slate-500">Plot No 168, Shivaji Nagar, Near Shivaji Nagar Garden, Nagpur - 440010</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Plot+No+168+Shivaji+Nagar+Near+Shivaji+Nagar+Garden+Nagpur+440010"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-brand-navy-50 hover:bg-brand-navy text-brand-navy hover:text-white font-bold rounded-xl text-xs transition-colors flex items-center gap-2"
            >
              <span>Open in Google Maps</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="mt-4 w-full h-64 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 relative">
            <iframe
              title="Hascorp Self Drive Cars Location Nagpur"
              src="https://maps.google.com/maps?q=Shivaji%20Nagar%20Garden%20Nagpur%20440010&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200/80 text-slate-600 relative z-10">
      {/* Upper Footer: Quick Links & Contact Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Quick Links (4 Cols) */}
          <div className="md:col-span-4 lg:col-span-4 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <a href="#home" className="hover:text-brand-blue transition-colors">Home</a>
              </li>
              <li>
                <a href="#why-self-drive" className="hover:text-brand-blue transition-colors">Why Self Drive?</a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-brand-blue transition-colors">Choose Your Ride</a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-blue transition-colors">About Hascorp</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-blue transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy font-heading">
              Nagpur Office & Dispatch
            </h4>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-slate-700 leading-snug block">
                    Plot No 168, Shivaji Nagar, Near Shivaji Nagar Garden, Nagpur - 440010, Maharashtra, India
                  </span>
                  <span className="text-xs text-brand-blue font-semibold block">
                    We are at walking distance from Shankar Nagar Metro Station and L.A.D. Square Metro Station
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <a
                  href="tel:+919607681995"
                  className="font-bold text-brand-navy hover:text-brand-blue transition-colors"
                >
                  +91 9607681995
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <a
                  href="mailto:hascorpselfdrivecars@gmail.com"
                  className="text-slate-700 hover:text-brand-blue transition-colors break-all"
                >
                  hascorpselfdrivecars@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Channels (3 Cols) */}
          <div className="md:col-span-12 lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy font-heading">
              Social Media
            </h4>
            <p className="text-xs text-slate-500">
              Follow Hascorp Self Drive Cars for latest updates and fleet additions.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://www.instagram.com/hascorpselfdrivecars?stkn=MW92NnNtejF2YWxseg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:text-white text-slate-700 flex items-center justify-center transition-all duration-200 shadow-2xs"
                aria-label="Hascorp on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/1DNjTtukJd/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-[#1877F2] hover:text-white text-slate-700 flex items-center justify-center transition-all duration-200 shadow-2xs"
                aria-label="Hascorp on Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar (Clean Light Aesthetic) */}
      <div className="border-t border-slate-100 bg-[#F4F8FD] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-brand-navy font-bold">HASCORP SELF DRIVE CARS</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Nagpur, Maharashtra</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white hover:bg-brand-blue hover:text-white text-slate-600 border border-slate-200 shadow-sm transition-all flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

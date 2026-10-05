import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, CalendarCheck, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Why Self Drive', href: '#why-self-drive' },
    { name: 'Cars & Fleet', href: '#fleet' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-slate-100' 
        : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100/80'
    }`}>
      {/* Top micro banner for Nagpur Service */}
      <div className="hidden lg:block bg-brand-navy-50/80 border-b border-brand-navy-100/60 py-1.5 px-4 mb-2 -mt-4 text-xs font-medium text-brand-navy-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Self-Drive Car Rental Service in Shivaji Nagar, Nagpur, Maharashtra</span>
          </div>
          <div className="flex items-center gap-4 text-brand-navy-800">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
              100% Privacy & Freedom
            </span>
            <a 
              href="mailto:hascorpselfdrivecars@gmail.com" 
              className="hover:text-brand-blue transition-colors"
            >
              hascorpselfdrivecars@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center focus:outline-none">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-brand-blue transition-colors duration-150 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919607681995"
              className="flex items-center gap-2 px-3.5 py-2 text-sm font-bold text-brand-navy bg-brand-blue-50 border border-brand-blue-200/80 rounded-xl hover:bg-brand-blue-100/60 transition-all group"
            >
              <div className="w-7 h-7 rounded-lg bg-brand-blue text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-blue">Direct Booking</span>
                <span className="leading-tight">+91 9607681995</span>
              </div>
            </a>

            <button
              onClick={onOpenEnquiry}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-xl shadow-blue-glow transition-all duration-200 active:scale-95"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Check Availability</span>
            </button>
          </div>

          {/* Mobile Menu & Call Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:+919607681995"
              className="p-2.5 rounded-xl bg-brand-blue-50 text-brand-blue border border-brand-blue-200 active:scale-95 transition-transform"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-brand-navy hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 mt-3 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-brand-blue py-2 px-3 rounded-lg hover:bg-brand-blue-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="tel:+919607681995"
                className="flex items-center justify-center gap-2 w-full py-3 bg-brand-blue-50 text-brand-navy font-bold rounded-xl border border-brand-blue-200 text-sm"
              >
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>Call +91 9607681995</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenEnquiry) onOpenEnquiry();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 bg-brand-blue text-white font-bold rounded-xl shadow-blue-glow text-sm"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Check Availability</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

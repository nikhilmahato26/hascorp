import React from 'react';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingActions: React.FC = () => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello Hascorp Self Drive Cars, I would like to inquire about self-drive car booking in Nagpur.'
    );
    window.open(`https://wa.me/919607681995?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Call Button */}
      <a
        href="tel:+919607681995"
        className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-navy hover:bg-brand-navy-700 text-white shadow-card flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 group border-2 border-white"
        aria-label="Direct Call Hascorp Self Drive Cars"
        title="Call +91 9607681995"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue-light" />
      </a>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-card flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 border-2 border-white"
        aria-label="Chat on WhatsApp"
        title="WhatsApp Availability Enquiry"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>
    </div>
  );
};

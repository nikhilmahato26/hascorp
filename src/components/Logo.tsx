import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'image' | 'vector' | 'hybrid';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md'
}) => {
  const heightClasses = {
    sm: 'h-8 md:h-10',
    md: 'h-10 md:h-12',
    lg: 'h-14 md:h-16'
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Brand Logo with exact typography & palette matching uploaded asset */}
      <div className="flex flex-col items-start leading-none group cursor-pointer">
        <img 
          src="/images/hascorp-logo-transparent.png" 
          alt="HASCORP SELF DRIVE CARS" 
          className={`${heightClasses[size]} w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]`}
          onError={(e) => {
            // Fallback to pure typographic logo if image is loading
            const target = e.currentTarget;
            target.style.display = 'none';
            const fallback = target.nextElementSibling;
            if (fallback) fallback.classList.remove('hidden');
          }}
        />
        <div className="hidden flex-col leading-none">
          <span className="font-extrabold tracking-wider text-[#043961] text-2xl md:text-3xl font-heading">
            HASCORP
          </span>
          <span className="font-bold tracking-widest text-[#1482CF] text-xs md:text-sm mt-0.5 font-heading uppercase">
            SELF DRIVE CARS
          </span>
        </div>
      </div>
    </div>
  );
};

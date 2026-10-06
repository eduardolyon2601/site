import React from 'react';

interface KosnoraLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'purple';
  layout?: 'stacked' | 'horizontal';
  showSymbol?: boolean;
}

export const KosnoraLogo: React.FC<KosnoraLogoProps> = ({
  className = '',
  variant = 'purple',
  layout = 'horizontal',
  showSymbol = true,
}) => {
  const isPurple = variant === 'purple';
  const textColor = variant === 'dark' ? 'text-neutral-950' : 'text-white';

  if (layout === 'stacked') {
    return (
      <div className={`flex flex-col items-center justify-center select-none group ${className}`}>
        {showSymbol && (
          <div className="relative mb-2">
            {/* Ambient Purple Luminous Glow */}
            <div className="absolute inset-0 bg-[#A855F7]/30 blur-md rounded-lg pointer-events-none" />
            <svg
              viewBox="0 0 64 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-9 sm:w-14 sm:h-10 relative z-10 transition-transform duration-300 group-hover:scale-105"
            >
              <defs>
                <linearGradient id="knrPurpleGradStacked" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C084FC" />
                  <stop offset="50%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#7E22CE" />
                </linearGradient>
              </defs>
              {/* KNR Monogram: Sharp geometric lines, angular cuts, strong diagonals */}
              {/* Letter K */}
              <path d="M4 6H12V22L24 6H33L19 24L34 42H24L12 26V42H4V6Z" fill="url(#knrPurpleGradStacked)" />
              {/* Letter N */}
              <path d="M25 6H33L47 31V6H55V42H47L33 17V42H25V6Z" fill="url(#knrPurpleGradStacked)" opacity="0.9" />
              {/* Letter R */}
              <path d="M42 6H56C61 6 64 9 64 14C64 18 61 21 57 22L64 42H55L49 24H49V42H42V6ZM49 18H55C56.5 18 57.5 17 57.5 14C57.5 11 56.5 10 55 10H49V18Z" fill="url(#knrPurpleGradStacked)" />
            </svg>
          </div>
        )}
        <span className={`font-black text-lg sm:text-xl tracking-[0.28em] uppercase font-['Montserrat'] ${textColor} relative z-10`}>
          KOSNORA
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {showSymbol && (
        <div className="relative shrink-0 flex items-center justify-center">
          {/* Subtle Ambient Purple Glow */}
          <div className="absolute inset-0 bg-[#A855F7]/30 blur-md rounded-md pointer-events-none" />
          <svg
            viewBox="0 0 64 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-6 sm:w-9 sm:h-7 relative z-10 transition-transform duration-300 group-hover:scale-105"
          >
            <defs>
              <linearGradient id="knrPurpleGradHoriz" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D8B4FE" />
                <stop offset="40%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#7E22CE" />
              </linearGradient>
            </defs>
            {/* KNR Monogram Symbol */}
            <path d="M4 6H12V22L24 6H33L19 24L34 42H24L12 26V42H4V6Z" fill="url(#knrPurpleGradHoriz)" />
            <path d="M25 6H33L47 31V6H55V42H47L33 17V42H25V6Z" fill="url(#knrPurpleGradHoriz)" opacity="0.9" />
            <path d="M42 6H56C61 6 64 9 64 14C64 18 61 21 57 22L64 42H55L49 24H49V42H42V6ZM49 18H55C56.5 18 57.5 17 57.5 14C57.5 11 56.5 10 55 10H49V18Z" fill="url(#knrPurpleGradHoriz)" />
          </svg>
        </div>
      )}
      <div className="flex flex-col">
        <span className={`font-black text-xl sm:text-2xl tracking-[0.24em] uppercase font-['Montserrat'] ${textColor} leading-none`}>
          KOSNORA
        </span>
      </div>
    </div>
  );
};

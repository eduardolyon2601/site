import React from 'react';

export const AnnouncementBar: React.FC = () => {
  const marqueeItems = [
    'SAME PHONE. DIFFERENT ENERGY.',
    '⚡ BATTERY-FREE PASSIVE NFC DISPLAY',
    'REFRESH YOUR LOOK IN 5 MINUTES',
    '⚡ DROP-TESTED COMPOSITE ARMOR',
    'DIY PICTURE SMART SCREEN',
    '⚡ FOUR SIGNATURE COLOR FINISHES',
    'YOUR MOOD CHANGES. YOUR CASE SHOULD TOO.',
    '⚡ COMPATIBLE W/ IPHONE 17 TO 12 PRO MAX',
  ];

  return (
    <div className="w-full bg-[#120F1D] text-white font-extrabold text-[11px] sm:text-xs tracking-wider uppercase overflow-hidden border-b border-[#A855F7]/30 py-2.5 relative z-50 select-none shadow-[0_4px_20px_rgba(168,85,247,0.15)]">
      <div className="flex whitespace-nowrap animate-[marquee_24s_linear_infinite] hover:[animation-play-state:paused]">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((text, idx) => (
          <span key={idx} className="mx-5 flex items-center gap-3">
            <span className="text-neutral-200">{text}</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C084FC] shadow-[0_0_6px_#C084FC]" />
          </span>
        ))}
      </div>
    </div>
  );
};

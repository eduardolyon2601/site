import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

interface MobileStickyBarProps {
  onCtaClick: () => void;
  isVisible: boolean;
  price?: string;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onCtaClick,
  isVisible,
  price = '$79.90',
}) => {
  const [dismissed, setDismissed] = useState(false);

  if (!isVisible || dismissed) return null;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 px-4 py-2.5 shadow-lg flex items-center justify-between gap-3">
      <div className="flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#9333EA]">
          KOSNORA CASE
        </span>
        <div className="flex items-baseline gap-1.5">
          <span className="text-base font-black text-neutral-950">
            {price}
          </span>
          <span className="text-[10px] text-neutral-500 font-bold uppercase">
            (From $59.90)
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onCtaClick}
          className="px-5 py-2.5 bg-gradient-to-r from-[#9333EA] via-[#8015F5] to-[#6B21A8] text-white font-black text-xs tracking-wider rounded-xl uppercase shadow-xs active:scale-95 flex items-center gap-1.5 cursor-pointer"
        >
          <span>GET MINE</span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </button>

        <button
          onClick={() => setDismissed(true)}
          className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-lg cursor-pointer"
          aria-label="Dismiss sticky bar"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

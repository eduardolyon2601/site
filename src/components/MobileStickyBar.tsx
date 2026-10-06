import React from 'react';
import { ArrowRight } from 'lucide-react';

interface MobileStickyBarProps {
  onCtaClick: () => void;
  isVisible: boolean;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onCtaClick, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 px-4 py-3 shadow-2xl flex items-center justify-between gap-4">
      <div className="flex flex-col">
        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
          KOSNORA Smart Case
        </span>
        <div className="flex items-baseline gap-1.5">
          <span className="text-base font-black text-white">
            $79.90
          </span>
          <span className="text-[10px] text-neutral-400 font-medium">
            (From $59.90 in bundle)
          </span>
        </div>
      </div>

      <button
        onClick={onCtaClick}
        className="px-5 py-2.5 bg-white text-black font-extrabold text-xs tracking-wider rounded-xl uppercase shadow-md active:scale-95 flex items-center gap-1.5 shrink-0"
      >
        <span>GET MINE</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

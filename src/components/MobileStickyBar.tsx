import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

interface MobileStickyBarProps {
  onCtaClick: () => void;
  isVisible: boolean;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onCtaClick, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-black/95 backdrop-blur-md border-t-2 border-neutral-800 px-4 py-3 shadow-2xl flex items-center justify-between gap-4">
      <div className="flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#C084FC]">
          KOSNORA SMART CASE
        </span>
        <div className="flex items-baseline gap-1.5">
          <span className="text-base font-black text-white">
            $79.90
          </span>
          <span className="text-[10px] text-neutral-400 font-bold uppercase">
            ($59.90 in Bundle)
          </span>
        </div>
      </div>

      <button
        onClick={onCtaClick}
        className="px-5 py-2.5 bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white font-black text-xs tracking-widest rounded-xl uppercase shadow-[0_0_15px_rgba(168,85,247,0.4)] active:scale-95 flex items-center gap-1.5 shrink-0 cursor-pointer"
      >
        <span>GET MINE</span>
        <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
      </button>
    </div>
  );
};

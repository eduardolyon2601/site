import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { InteractiveCaseViewer } from './InteractiveCaseViewer';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-black text-white pt-6 pb-16 sm:pt-12 sm:pb-24 overflow-hidden border-b border-neutral-900">
      {/* Background Ambience & Controlled Purple Glow */}
      <div className="absolute top-0 inset-x-0 h-80 bg-gradient-to-b from-[#1E1138]/50 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#9333EA]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[1.02] mb-4 uppercase">
            YOUR PHONE.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E9D5FF] to-[#C084FC] drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]">
              YOUR LOOK.
            </span>
          </h1>

          {/* Short, Powerful Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-semibold leading-snug max-w-2xl mx-auto mb-6">
            Change the picture on the back of your phone whenever you want — in just 5 minutes.
          </p>

          {/* 3 Short Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8 text-xs sm:text-sm font-bold text-neutral-200">
            <div className="inline-flex items-center gap-2 bg-neutral-950 border border-neutral-800 px-3.5 py-2 rounded-lg">
              <Check className="w-4 h-4 text-[#C084FC] stroke-[3]" />
              <span>Change your image anytime</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-neutral-950 border border-neutral-800 px-3.5 py-2 rounded-lg">
              <Check className="w-4 h-4 text-[#C084FC] stroke-[3]" />
              <span>Battery-free design</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-neutral-950 border border-neutral-800 px-3.5 py-2 rounded-lg">
              <Check className="w-4 h-4 text-[#C084FC] stroke-[3]" />
              <span>Make your phone uniquely yours</span>
            </div>
          </div>

          {/* CTA & Starting Price */}
          <div className="flex flex-col items-center justify-center gap-2.5">
            <button
              onClick={onCtaClick}
              className="w-full sm:w-auto px-10 sm:px-14 py-4 bg-gradient-to-r from-[#9333EA] via-[#A855F7] to-[#7E22CE] hover:brightness-110 text-white font-black text-sm sm:text-base tracking-widest rounded-xl shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:shadow-[0_0_35px_rgba(168,85,247,0.65)] transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 uppercase cursor-pointer"
            >
              <span>GET YOUR KOSNORA</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
            <span className="text-xs sm:text-sm font-bold text-neutral-400 tracking-wide">
              Starting at <span className="text-[#C084FC] font-black">$59.90 each</span>
            </span>
          </div>
        </div>

        {/* Visual Product Protagonist: Instant Interactive Demo */}
        <div className="mt-8 sm:mt-12">
          <InteractiveCaseViewer onSelectPlan={onCtaClick} />
        </div>
      </div>
    </section>
  );
};

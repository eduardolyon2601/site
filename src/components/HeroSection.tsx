import React from 'react';
import { Check, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { InteractiveCaseViewer } from './InteractiveCaseViewer';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-black text-white pt-10 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
      {/* Background Subtle Gradient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-neutral-900/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Kicker */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>KOSNORA Ink NFC Smart Phone Case</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            YOUR PHONE.<br />
            YOUR PICTURE.<br />
            <span className="text-neutral-300">YOUR MOOD.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-neutral-300 font-medium leading-relaxed max-w-2xl mx-auto mb-8">
            Change the picture on the back of your phone whenever you want — in just 5 minutes.
          </p>

          {/* 3 Quick Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-10 text-xs sm:text-sm font-medium text-neutral-300">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-white">
                <Check className="w-3 h-3 text-emerald-400" />
              </span>
              <span>Change your image anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-white">
                <Check className="w-3 h-3 text-emerald-400" />
              </span>
              <span>Battery-free smart display</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-white">
                <Check className="w-3 h-3 text-emerald-400" />
              </span>
              <span>Make your phone uniquely yours</span>
            </div>
          </div>

          {/* CTA & Microcopy */}
          <div className="flex flex-col items-center justify-center gap-3">
            <button
              onClick={onCtaClick}
              className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-white hover:bg-neutral-200 text-black font-extrabold text-sm sm:text-base tracking-wider rounded-xl shadow-xl transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-3 uppercase"
            >
              <span>GET YOUR KOSNORA CASE</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-neutral-400 font-medium tracking-wide">
              Available for selected iPhone models
            </p>
          </div>

          {/* Supported iPhone badges bar */}
          <div className="mt-8 pt-6 border-t border-neutral-900 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-neutral-400">
            <span className="text-neutral-300 mr-2">Compatible with:</span>
            {['iPhone 17 Series', 'iPhone 16 Series', 'iPhone 15 Series', 'iPhone 14 Series', 'iPhone 12 Series'].map((model) => (
              <span key={model} className="px-2.5 py-1 rounded bg-neutral-900/90 border border-neutral-800 text-neutral-300">
                {model}
              </span>
            ))}
          </div>
        </div>

        {/* Big Interactive Live Product Viewer with custom photos */}
        <div className="mt-10 sm:mt-14">
          <InteractiveCaseViewer onSelectPlan={onCtaClick} />
        </div>
      </div>
    </section>
  );
};

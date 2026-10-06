import React from 'react';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
import heroImg from '../assets/images/kosnora_hero_case_1791272211390.jpg';

interface ClosingSectionProps {
  onCtaClick: () => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-black text-white py-24 sm:py-32 relative overflow-hidden border-t border-neutral-800">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-900/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Visual Teaser */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5 text-neutral-200" />
          <span>The Smart Personalization Revolution</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight mb-6">
          STOP USING THE SAME LOOK EVERY DAY.
        </h2>

        {/* Subheadline */}
        <p className="text-lg sm:text-2xl text-neutral-200 font-semibold mb-4 max-w-3xl mx-auto">
          Make your phone as unique as you are.
        </p>

        {/* Promise Reinforcement */}
        <p className="text-sm sm:text-base text-neutral-400 font-medium mb-10 max-w-xl mx-auto">
          Change your picture whenever you want — in just 5 minutes.
        </p>

        {/* Product Visual Card */}
        <div className="max-w-xl mx-auto rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950 p-4 mb-10 shadow-2xl">
          <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
            <img
              src={heroImg}
              alt="KOSNORA Smart Display Phone Case"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-xs text-neutral-300 font-semibold">
              <span>Four Precision Colors</span>
              <span>100% Battery-Free</span>
            </div>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto px-10 sm:px-14 py-5 bg-white hover:bg-neutral-200 text-black font-extrabold text-base sm:text-lg tracking-wider rounded-xl shadow-2xl transition-all duration-200 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-3 uppercase"
          >
            <span>GET MY KOSNORA CASE</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Starting Price Notice */}
          <div className="text-xs sm:text-sm font-semibold text-neutral-300">
            Starting at $59.90 each when you buy 3.
          </div>

          {/* Emotional Urgency Copy */}
          <div className="mt-4 text-xs sm:text-sm text-neutral-400 font-normal italic max-w-md">
            "Your phone doesn't have to look like everyone else's."
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Sparkles, RefreshCcw, BatteryCharging, Eye, HeartHandshake, Palette, ArrowRight } from 'lucide-react';

interface BenefitsSectionProps {
  onCtaClick: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onCtaClick }) => {
  const benefits = [
    {
      title: 'PERSONALIZE YOUR PHONE',
      tagline: 'Make your phone look like yours.',
      description: 'Break free from anonymous hardware. Express what inspires you directly on your everyday device.',
      icon: Sparkles,
    },
    {
      title: 'CHANGE YOUR STYLE',
      tagline: 'Switch between photos, designs and moods whenever you want.',
      description: 'From formal meetings to weekend festivals, update the artwork to match the occasion in minutes.',
      icon: RefreshCcw,
    },
    {
      title: 'NO BATTERY REQUIRED',
      tagline: 'Enjoy the smart display concept without charging another device.',
      description: 'Zero battery degradation, zero cables. Your phone screen updates effortlessly via passive NFC.',
      icon: BatteryCharging,
    },
    {
      title: 'STAND OUT',
      tagline: 'A phone case designed to get attention.',
      description: 'An eye-catching statement piece that turns heads and sparks genuine conversation wherever you place it.',
      icon: Eye,
    },
    {
      title: 'PERFECT FOR YOUR FAVORITE MEMORIES',
      tagline: 'Display photos of your favorite people, pets, places and moments.',
      description: 'Keep your partner, your pet, or an unforgettable travel horizon right in front of you all day.',
      icon: HeartHandshake,
    },
    {
      title: 'YOUR STYLE, YOUR WAY',
      tagline: 'Match your phone to your personality.',
      description: 'Minimalist architecture, vibrant graphic art, or sentimental candid memories — you control the vibe.',
      icon: Palette,
    },
  ];

  return (
    <section id="benefits" className="bg-white text-neutral-900 py-20 sm:py-28 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3 block">
            Crafted For Expression
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 mb-6">
            Engineered To Be Truly Yours
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-medium leading-relaxed">
            Every detail of KOSNORA is built to elevate your smartphone experience without adding friction or complication.
          </p>
        </div>

        {/* 6 Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-center justify-center text-neutral-900 mb-6">
                    <Icon className="w-6 h-6 text-neutral-900" />
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-neutral-950 uppercase tracking-tight mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm font-semibold text-neutral-800 mb-2">
                    {b.tagline}
                  </p>
                  <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Transformation Banner */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-neutral-950 text-white p-8 sm:p-14 text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
              The Evolution
            </span>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <span className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-400">
                ONE PHONE CASE
              </span>
              <span className="text-2xl sm:text-4xl font-black text-white">
                →
              </span>
              <span className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white underline decoration-2 underline-offset-8">
                COUNTLESS LOOKS
              </span>
            </div>
            <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto font-normal leading-relaxed">
              Never buy another static case just to change your phone aesthetic. Keep one durable, protective smart case and evolve your look forever.
            </p>
            <div className="pt-4">
              <button
                onClick={onCtaClick}
                className="px-8 sm:px-10 py-4 bg-white hover:bg-neutral-200 text-black font-extrabold text-sm tracking-wider uppercase rounded-xl transition-all shadow-md active:scale-95 inline-flex items-center gap-2"
              >
                <span>MAKE MY PHONE UNIQUE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

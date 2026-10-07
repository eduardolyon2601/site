import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import heroImg from '../assets/images/kosnora_hero_case_1791272211390.jpg';
import coupleImg from '../assets/images/kosnora_couple_look_1791272221398.jpg';
import petImg from '../assets/images/kosnora_pet_look_1791272230677.jpg';
import travelImg from '../assets/images/kosnora_travel_art_1791272238854.jpg';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const previewOptions = [
    { id: 'art', label: 'Minimalist', src: heroImg },
    { id: 'couple', label: 'Couple', src: coupleImg },
    { id: 'pet', label: 'Pet', src: petImg },
    { id: 'travel', label: 'Travel', src: travelImg },
  ];

  const [activePreview, setActivePreview] = useState(0);

  return (
    <section className="bg-white text-neutral-900 pt-6 pb-12 sm:pt-12 sm:pb-20 border-b border-neutral-200 relative overflow-hidden">
      {/* Subtle soft purple ambient reflection */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F3E8FF]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text / Direct Response Column */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-neutral-950 uppercase leading-[1.02] mb-4">
              YOUR PHONE.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E22CE] via-[#9333EA] to-[#6B21A8]">
                YOUR LOOK.
              </span>
            </h1>

            {/* Short Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-semibold leading-relaxed max-w-lg mb-6">
              Change the picture on your phone whenever you want — in just 5 minutes.
            </p>

            {/* 3 Short Benefits */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center lg:items-start gap-2.5 sm:gap-3 mb-8 text-xs sm:text-sm font-bold text-neutral-800">
              <div className="inline-flex items-center gap-2 bg-neutral-50 border border-neutral-200 px-3.5 py-2 rounded-xl">
                <span className="w-4 h-4 rounded-full bg-[#9333EA] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Personalize your phone</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-neutral-50 border border-neutral-200 px-3.5 py-2 rounded-xl">
                <span className="w-4 h-4 rounded-full bg-[#9333EA] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Change your image anytime</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-neutral-50 border border-neutral-200 px-3.5 py-2 rounded-xl">
                <span className="w-4 h-4 rounded-full bg-[#9333EA] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>No battery required</span>
              </div>
            </div>

            {/* Price & Primary CTA */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onCtaClick}
                className="w-full sm:w-auto px-10 py-4.5 bg-gradient-to-r from-[#9333EA] via-[#8015F5] to-[#6B21A8] hover:brightness-110 text-white font-black text-sm tracking-widest rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-102 active:scale-95 flex items-center justify-center gap-2.5 uppercase cursor-pointer"
              >
                <span>GET YOUR KOSNORA</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <div className="text-center sm:text-left">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block">
                  Starting at
                </span>
                <span className="text-lg font-black text-neutral-950">
                  $59.90 each
                </span>
              </div>
            </div>
          </div>

          {/* Right Product Image Column (Protagonist) */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200 shadow-xl group">
              <img
                src={previewOptions[activePreview].src}
                alt={previewOptions[activePreview].label}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider">
                Display: {previewOptions[activePreview].label}
              </div>
            </div>

            {/* Quick Switcher Buttons */}
            <div className="flex items-center gap-2 mt-4">
              <span className="text-[11px] font-bold text-neutral-500 uppercase mr-1">Preview look:</span>
              {previewOptions.map((opt, idx) => (
                <button
                  key={opt.id}
                  onClick={() => setActivePreview(idx)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activePreview === idx
                      ? 'bg-[#9333EA] text-white shadow-xs'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

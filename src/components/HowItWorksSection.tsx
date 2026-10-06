import React from 'react';
import { ArrowRight, Image as ImageIcon, Smartphone, RefreshCw } from 'lucide-react';
import petImg from '../assets/images/kosnora_pet_look_1791272230677.jpg';
import coupleImg from '../assets/images/kosnora_couple_look_1791272221398.jpg';
import heroImg from '../assets/images/kosnora_hero_case_1791272211390.jpg';

interface HowItWorksSectionProps {
  onCtaClick: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onCtaClick }) => {
  const steps = [
    {
      num: '01',
      title: 'CHOOSE',
      desc: 'Choose the image you want.',
      icon: ImageIcon,
      img: coupleImg,
      alt: 'Choose any photo from your phone',
    },
    {
      num: '02',
      title: 'SET',
      desc: 'Set up your KOSNORA case.',
      icon: Smartphone,
      img: petImg,
      alt: 'Hold to back of phone to transmit via NFC',
    },
    {
      num: '03',
      title: 'CHANGE',
      desc: 'Change your look whenever you want.',
      icon: RefreshCw,
      img: heroImg,
      alt: 'Display stays active permanently with zero battery drain',
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#050508] text-white py-16 sm:py-24 border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-black tracking-widest text-[#C084FC] uppercase block mb-2">
            3 SIMPLE STEPS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            HOW IT WORKS
          </h2>
        </div>

        {/* 3 Step Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="group rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-[#A855F7]/50 transition-all p-5 sm:p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] to-[#A855F7]">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#C084FC] group-hover:bg-[#A855F7]/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm font-semibold text-neutral-400 mb-5">
                    {step.desc}
                  </p>
                </div>

                {/* Visual Image Demonstration */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 group-hover:border-[#A855F7]/30 transition-all">
                  <img
                    src={step.img}
                    alt={step.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 bg-gradient-to-r from-[#9333EA] via-[#A855F7] to-[#7E22CE] hover:brightness-110 text-white font-black text-sm tracking-widest rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all hover:scale-105 active:scale-95 uppercase cursor-pointer"
          >
            <span>CREATE MY LOOK</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
};

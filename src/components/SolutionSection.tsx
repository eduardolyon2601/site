import React from 'react';
import { ArrowRight, ZapOff, Image as ImageIcon, Sliders, Smartphone, RefreshCw } from 'lucide-react';
import heroImg from '../assets/images/kosnora_hero_case_1791272211390.jpg';

interface SolutionSectionProps {
  onCtaClick: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onCtaClick }) => {
  const steps = [
    {
      step: 'STEP 1',
      title: 'Choose your image',
      description: 'Choose the photo or design you want to display.',
      icon: ImageIcon,
    },
    {
      step: 'STEP 2',
      title: 'Set it up',
      description: 'Follow the simple setup process.',
      icon: Sliders,
    },
    {
      step: 'STEP 3',
      title: 'Enjoy your new look',
      description: 'Have a completely different look on your phone.',
      icon: Smartphone,
    },
    {
      step: 'STEP 4',
      title: 'Change it whenever you want',
      description: 'Switch your image whenever your mood or style changes.',
      icon: RefreshCw,
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#0D0E12] text-white py-20 sm:py-28 relative overflow-hidden border-t border-neutral-800">
      {/* Background Lighting Effect */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-neutral-800/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">
            The Innovation
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            One Case. Endless Possibilities.
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 font-medium leading-relaxed">
            The KOSNORA Smart Case transforms the back of your iPhone into a personalized visual canvas that changes as often as you do.
          </p>
        </div>

        {/* Feature Hero Presentation */}
        <div className="mb-20 rounded-3xl bg-neutral-900/90 border border-neutral-800 p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Showcase */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl group">
                <img
                  src={heroImg}
                  alt="KOSNORA Smart Display Case in detail"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300">
                  <span className="font-semibold">KOSNORA Ink Screen Finish</span>
                  <span className="font-medium">Passive NFC Architecture</span>
                </div>
              </div>
            </div>

            {/* Core Tech Callout */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-neutral-800/90 border border-neutral-700/80 text-emerald-400 text-xs font-bold uppercase tracking-wider w-fit">
                <ZapOff className="w-4 h-4 text-emerald-400" />
                <span>Zero Charging · Zero Internal Batteries</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                No Battery Required.
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
                Using passive NFC technology, the KOSNORA smart screen draws zero standby power. The case does not require any battery, charging dock, or cords. Once you beam your image onto the screen, it stays vibrant and permanent until you choose your next picture.
              </p>

              <div className="pt-2">
                <button
                  onClick={onCtaClick}
                  className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-neutral-200 text-black font-bold text-sm tracking-wide rounded-xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>CREATE MY LOOK</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Step Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-extrabold tracking-widest text-neutral-400">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white">
                      <Icon className="w-5 h-5 text-neutral-200" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-neutral-400 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

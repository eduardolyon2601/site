import React from 'react';
import { User, RefreshCcw, BatteryCharging, Sparkles } from 'lucide-react';

export const WhyKosnoraSection: React.FC = () => {
  const benefits = [
    {
      title: 'PERSONAL',
      desc: 'Make your phone feel like yours.',
      icon: User,
    },
    {
      title: 'CHANGEABLE',
      desc: 'Switch your image whenever you want.',
      icon: RefreshCcw,
    },
    {
      title: 'BATTERY-FREE',
      desc: 'No charging required for the display concept.',
      icon: BatteryCharging,
    },
    {
      title: 'DIFFERENT',
      desc: 'Stand out from ordinary phone cases.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="why-kosnora" className="bg-black text-white py-16 sm:py-24 border-b border-neutral-900 relative">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#9333EA]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-black tracking-widest text-[#C084FC] uppercase block mb-2">
            WHY KOSNORA
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            ONE CASE. ENDLESS LOOKS.
          </h2>
        </div>

        {/* Exactly 4 Key Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="group rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-[#A855F7]/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:bg-neutral-900/40"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#C084FC] mb-5 group-hover:scale-110 group-hover:border-[#A855F7]/40 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wider mb-2">
                    {b.title}
                  </h3>
                </div>

                <p className="text-sm font-semibold text-neutral-400 leading-snug">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

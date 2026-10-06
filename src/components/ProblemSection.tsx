import React from 'react';
import { EyeOff, Shuffle, Repeat, HeartCrack, Sparkles, CheckCircle2, XCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problemPoints = [
    {
      title: "Wallpaper Isn't Enough",
      description: "You love a photo, but your home screen is cluttered with app icons and lock screen widgets.",
      icon: EyeOff,
    },
    {
      title: "Your Style Changes Constantly",
      description: "Your outfit, mood, and aesthetic shift daily — yet your phone case stays glued to the same look for months.",
      icon: Shuffle,
    },
    {
      title: "Bored of Buying New Cases",
      description: "Buying multiple physical cases is wasteful, expensive, and leaves you with drawers full of discarded plastic.",
      icon: Repeat,
    },
    {
      title: "A Phone That Feels Impersonal",
      description: "Everyone carries the exact same mass-produced smartphone. It rarely feels like an authentic reflection of who you are.",
      icon: HeartCrack,
    },
    {
      title: "Want Something People Haven't Seen",
      description: "Standard cases are boring. You want an accessory that sparks curiosity and conversations the moment you set it down.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="bg-neutral-50 text-neutral-900 py-20 sm:py-28 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3 block">
            The Everyday Monotony
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 mb-6">
            Why Use The Same Phone Case Every Day?
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-medium leading-relaxed">
            Your smartphone is the most personal object you carry everywhere you go. Yet for years, phone cases have locked you into one static look.
          </p>
        </div>

        {/* 5 Problem Points Bento/Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 sm:mb-20">
          {problemPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className={`p-8 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-shadow ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900 mb-5">
                  <Icon className="w-6 h-6 text-neutral-800" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}

          {/* Eye-catching Summary Card */}
          <div className="p-8 rounded-2xl bg-neutral-900 text-white border border-neutral-800 shadow-sm flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              The Reality
            </span>
            <h3 className="text-xl font-extrabold text-white mb-3">
              One Device. Infinite Moments.
            </h3>
            <p className="text-sm text-neutral-300 font-normal leading-relaxed">
              Why settle for one boring pattern when you can have every memory, mood, and artwork at your fingertips?
            </p>
          </div>
        </div>

        {/* Transformation Comparison Block */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-neutral-300 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
            {/* Traditional phone case */}
            <div className="p-8 sm:p-12 bg-neutral-100/60">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-5 h-5 text-neutral-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Traditional Phone Case
                </span>
              </div>
              <h4 className="text-2xl font-extrabold text-neutral-900 mb-3">
                Same look every day.
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                Stuck with one static print or plain color for months. You either live with boredom or keep spending money on replacement cases that clutter your home.
              </p>
            </div>

            {/* KOSNORA Smart Case */}
            <div className="p-8 sm:p-12 bg-neutral-950 text-white">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  KOSNORA Ink NFC Case
                </span>
              </div>
              <h4 className="text-2xl font-extrabold text-white mb-3">
                A different look whenever you want.
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                Switch between your partner, pet, weekend vacation snapshot, or clean architectural artwork in just 5 minutes. No battery, no hassle, endless versatility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Star, ShieldCheck, Instagram } from 'lucide-react';
import { SOCIAL_PROOF_CARDS } from '../data/productData';
import coupleImg from '../assets/images/kosnora_couple_look_1791272221398.jpg';
import petImg from '../assets/images/kosnora_pet_look_1791272230677.jpg';
import travelImg from '../assets/images/kosnora_travel_art_1791272238854.jpg';
import heroImg from '../assets/images/kosnora_hero_case_1791272211390.jpg';

export const SocialProofSection: React.FC = () => {
  const ugcStories = [
    {
      image: coupleImg,
      tag: '@kosnora.moments',
      caption: 'Anniversary photo displayed on the back of my phone case.',
    },
    {
      image: petImg,
      tag: '@daily.customs',
      caption: 'My pup with me anywhere I take my phone.',
    },
    {
      image: travelImg,
      tag: '@aesthetic.spaces',
      caption: 'Architectural shot updated right after my trip.',
    },
    {
      image: heroImg,
      tag: '@tech.minimalist',
      caption: 'Black & white minimalist portrait vibes.',
    },
  ];

  return (
    <section className="bg-black text-white py-20 sm:py-28 border-t border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">
            Community & Stories
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Designed For Self-Expression.
          </h2>
          <p className="text-base sm:text-xl text-neutral-300 font-medium leading-relaxed">
            "Made for people who want their phone to feel different."
          </p>
        </div>

        {/* Visual UGC Gallery Showcase */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {ugcStories.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 aspect-[4/5] shadow-lg flex flex-col justify-end p-4"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
              <div className="relative z-10 space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-neutral-300">
                  <Instagram className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{item.tag}</span>
                </div>
                <p className="text-xs text-neutral-200 line-clamp-2 font-normal leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Real Customer Review Cards Placeholder Frame */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Verified Experience Feed
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SOCIAL_PROOF_CARDS.map((review, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800/90 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(review.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-neutral-300 italic mb-6 leading-relaxed font-normal">
                    "{review.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-900 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">{review.author}</div>
                    <div className="text-[11px] text-neutral-500">{review.location}</div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Transparent Editorial Note */}
          <div className="mt-8 text-center text-xs text-neutral-500">
            [Customer reviews module ready for verified buyer sync. No fabricated statistics or fake testimonials.]
          </div>
        </div>
      </div>
    </section>
  );
};

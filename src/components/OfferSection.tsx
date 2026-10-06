import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Smartphone } from 'lucide-react';
import { COMPATIBLE_IPHONE_MODELS, PRODUCT_COLORS, PRICING_TIERS } from '../data/productData';
import { PricingTier } from '../types';

interface OfferSectionProps {
  onSelectTier: (tier: PricingTier, modelId?: string, colorId?: string) => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onSelectTier }) => {
  const [selectedModel, setSelectedModel] = useState<string>(COMPATIBLE_IPHONE_MODELS[0].id);
  const [selectedColor, setSelectedColor] = useState<string>(PRODUCT_COLORS[0].id);

  const tiers = [
    {
      ...PRICING_TIERS[0],
      savingsBadge: null,
      highlight: false,
    },
    {
      ...PRICING_TIERS[1],
      savingsBadge: 'SAVE $20.00',
      highlight: false,
    },
    {
      ...PRICING_TIERS[2],
      savingsBadge: 'SAVE $60.00 · BEST VALUE',
      highlight: true,
    },
  ];

  return (
    <section id="pricing" className="bg-black text-white py-16 sm:py-24 border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-black tracking-widest text-[#C084FC] uppercase block mb-2">
            SIMPLE BUNDLES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-3">
            CHOOSE YOUR KOSNORA
          </h2>
          <p className="text-sm sm:text-base font-semibold text-neutral-400">
            Select your bundle and iPhone model. Battery-free NFC smart case included.
          </p>
        </div>

        {/* Quick Compatibility & Color Bar */}
        <div className="max-w-3xl mx-auto bg-neutral-950 border border-neutral-800 rounded-2xl p-4 sm:p-5 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Model Selector */}
          <div className="w-full sm:w-auto flex-1">
            <label className="text-[11px] font-black uppercase tracking-wider text-neutral-400 flex items-center gap-1.5 mb-1.5">
              <Smartphone className="w-3.5 h-3.5 text-[#C084FC]" />
              <span>Select Your iPhone:</span>
            </label>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-700 text-white font-bold text-xs sm:text-sm rounded-lg px-3 py-2.5 focus:border-[#A855F7] focus:outline-none cursor-pointer"
            >
              {COMPATIBLE_IPHONE_MODELS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>

          {/* Color Selector */}
          <div className="w-full sm:w-auto">
            <label className="text-[11px] font-black uppercase tracking-wider text-neutral-400 block mb-1.5">
              Finish Color:
            </label>
            <div className="flex items-center gap-2">
              {PRODUCT_COLORS.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedColor(c.id)}
                  title={c.name}
                  className={`w-8 h-8 rounded-full border-2 transition-transform cursor-pointer ${
                    selectedColor === c.id
                      ? 'border-[#C084FC] scale-110 shadow-[0_0_10px_rgba(168,85,247,0.5)]'
                      : 'border-neutral-700 hover:border-neutral-500'
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 3 Simple Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier) => {
            const isBestValue = tier.highlight;
            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 p-6 sm:p-7 ${
                  isBestValue
                    ? 'bg-neutral-950 border-2 border-[#A855F7] shadow-[0_0_30px_rgba(168,85,247,0.25)] md:-translate-y-2'
                    : 'bg-neutral-950/80 border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Savings / Value Badge */}
                {tier.savingsBadge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white text-[11px] font-black tracking-wider uppercase shadow-[0_0_12px_rgba(168,85,247,0.5)] flex items-center gap-1 whitespace-nowrap">
                    {isBestValue && <Sparkles className="w-3 h-3" />}
                    <span>{tier.savingsBadge}</span>
                  </div>
                )}

                <div>
                  {/* Card Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-2">
                    {tier.label}
                  </h3>

                  {/* Pricing Display */}
                  <div className="my-4 pb-4 border-b border-neutral-800/80">
                    {tier.quantity === 1 ? (
                      <div className="text-3xl sm:text-4xl font-black text-white">
                        ${tier.totalPrice.toFixed(2)}
                      </div>
                    ) : (
                      <div>
                        <div className="text-3xl sm:text-4xl font-black text-white">
                          ${tier.unitPrice.toFixed(2)}{' '}
                          <span className="text-sm font-bold text-neutral-400">EACH</span>
                        </div>
                        <div className="text-xs font-bold text-[#C084FC] mt-1">
                          ${tier.totalPrice.toFixed(2)} TOTAL
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-neutral-300 mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#C084FC] shrink-0" />
                      <span>{tier.quantity}x KOSNORA Smart Phone Case</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#C084FC] shrink-0" />
                      <span>Battery-free passive NFC display</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#C084FC] shrink-0" />
                      <span>Shock-absorbing protective frame</span>
                    </li>
                  </ul>
                </div>

                {/* Strong CTA */}
                <button
                  onClick={() => onSelectTier(tier, selectedModel, selectedColor)}
                  className={`w-full py-4 rounded-xl font-black text-xs sm:text-sm tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                    isBestValue
                      ? 'bg-gradient-to-r from-[#9333EA] via-[#A855F7] to-[#7E22CE] text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:brightness-110 hover:scale-[1.02] active:scale-95'
                      : 'bg-white hover:bg-neutral-200 text-black active:scale-95'
                  }`}
                >
                  <span>GET MY KOSNORA</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

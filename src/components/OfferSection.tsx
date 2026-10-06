import React, { useState } from 'react';
import { Check, ShieldCheck, ArrowRight, Smartphone, Sparkles, Box } from 'lucide-react';
import { PRICING_TIERS, WHATS_INCLUDED, COMPATIBLE_IPHONE_MODELS, PRODUCT_COLORS } from '../data/productData';
import { PricingTier } from '../types';

interface OfferSectionProps {
  onSelectTier: (tier: PricingTier, modelId?: string, colorId?: string) => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onSelectTier }) => {
  const [selectedModelId, setSelectedModelId] = useState(COMPATIBLE_IPHONE_MODELS[0].id);
  const [selectedColorId, setSelectedColorId] = useState(PRODUCT_COLORS[0].id);

  const selectedModel = COMPATIBLE_IPHONE_MODELS.find(m => m.id === selectedModelId) || COMPATIBLE_IPHONE_MODELS[0];
  const selectedColor = PRODUCT_COLORS.find(c => c.id === selectedColorId) || PRODUCT_COLORS[0];

  return (
    <section id="pricing" className="bg-neutral-50 text-neutral-900 py-20 sm:py-28 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3 block">
            Exclusive Packages
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 mb-6">
            Choose Your KOSNORA Experience
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-medium leading-relaxed">
            Order for yourself or bundle with a partner or friend. Every case is crafted with the battery-free smart NFC display.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isHighlighted = tier.popular || tier.bestValue;
            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  tier.bestValue
                    ? 'bg-neutral-950 text-white shadow-2xl ring-2 ring-neutral-900 md:-translate-y-2'
                    : tier.popular
                    ? 'bg-white border-2 border-neutral-900 shadow-xl'
                    : 'bg-white border border-neutral-200 shadow-md'
                }`}
              >
                {/* Optional Badge */}
                {tier.bestValue && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-black text-[11px] font-extrabold tracking-wider uppercase shadow-md">
                    BEST VALUE · SAVE $60
                  </div>
                )}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-neutral-900 text-white text-[11px] font-extrabold tracking-wider uppercase shadow-md">
                    MOST POPULAR · SAVE $20
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-baseline mb-4">
                    <span className={`text-xs font-extrabold tracking-widest uppercase ${
                      tier.bestValue ? 'text-neutral-400' : 'text-neutral-500'
                    }`}>
                      {tier.label}
                    </span>
                    {tier.savingsTotal > 0 && (
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                        tier.bestValue ? 'bg-neutral-800 text-emerald-400' : 'bg-neutral-100 text-emerald-600'
                      }`}>
                        Save ${tier.savingsTotal.toFixed(2)} total
                      </span>
                    )}
                  </div>

                  {/* Main Price Display */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl sm:text-5xl font-black tracking-tight ${
                        tier.bestValue ? 'text-white' : 'text-neutral-950'
                      }`}>
                        ${tier.unitPrice.toFixed(2)}
                      </span>
                      {tier.quantity > 1 && (
                        <span className={`text-sm font-semibold ${
                          tier.bestValue ? 'text-neutral-400' : 'text-neutral-500'
                        }`}>
                          / each
                        </span>
                      )}
                    </div>

                    {tier.quantity > 1 ? (
                      <div className="mt-1 space-y-0.5">
                        <div className={`text-sm font-bold ${
                          tier.bestValue ? 'text-neutral-200' : 'text-neutral-900'
                        }`}>
                          ${tier.totalPrice.toFixed(2)} total
                        </div>
                        <div className={`text-xs ${
                          tier.bestValue ? 'text-neutral-400' : 'text-neutral-500'
                        }`}>
                          Save $20 per case
                        </div>
                      </div>
                    ) : (
                      <div className="text-xs text-neutral-500 mt-1">
                        Standard single case price
                      </div>
                    )}
                  </div>

                  <p className={`text-xs sm:text-sm font-medium mb-6 ${
                    tier.bestValue ? 'text-neutral-300' : 'text-neutral-600'
                  }`}>
                    {tier.tagline}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-3 pt-4 border-t border-neutral-200/40 mb-8">
                    {WHATS_INCLUDED.map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-xs font-medium">
                        <Check className={`w-4 h-4 shrink-0 ${
                          tier.bestValue ? 'text-emerald-400' : 'text-neutral-900'
                        }`} />
                        <span className={tier.bestValue ? 'text-neutral-200' : 'text-neutral-700'}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onSelectTier(tier, selectedModelId, selectedColorId)}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 ${
                    tier.bestValue
                      ? 'bg-white hover:bg-neutral-200 text-black shadow-lg hover:shadow-xl'
                      : tier.popular
                      ? 'bg-neutral-900 hover:bg-neutral-800 text-white shadow-md'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-300'
                  }`}
                >
                  <span>GET {tier.quantity} {tier.quantity === 1 ? 'CASE' : 'CASES'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* What's Included & Compatibility Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto mb-16">
          {/* What's Included Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Box className="w-5 h-5 text-neutral-900" />
                <h3 className="text-lg font-bold text-neutral-950 uppercase tracking-tight">
                  What's Included
                </h3>
              </div>
              <p className="text-xs text-neutral-500 mb-6 font-normal">
                Everything you need to start personalizing the back of your phone straight out of the box:
              </p>
              <ul className="space-y-3.5">
                {WHATS_INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-neutral-800 font-medium">
                    <span className="w-5 h-5 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-neutral-900" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-neutral-100 text-xs text-neutral-500 font-medium">
              Zero additional cables or charging docks required.
            </div>
          </div>

          {/* Model & Color Selector */}
          <div id="compatibility" className="lg:col-span-7 p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="w-5 h-5 text-neutral-900" />
              <h3 className="text-lg font-bold text-neutral-950 uppercase tracking-tight">
                Compatible iPhone Models
              </h3>
            </div>
            <p className="text-xs text-neutral-500 mb-6 font-normal">
              Select your iPhone model and preferred case color below:
            </p>

            <div className="space-y-6">
              {/* Model Picker */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Select Your iPhone Model:
                </label>
                <select
                  value={selectedModelId}
                  onChange={(e) => setSelectedModelId(e.target.value)}
                  className="w-full py-3 px-4 rounded-xl border border-neutral-300 bg-neutral-50 text-neutral-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-neutral-900"
                >
                  {COMPATIBLE_IPHONE_MODELS.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name} ({m.series})
                    </option>
                  ))}
                </select>
              </div>

              {/* Color Picker */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Select Case Finish: <span className="text-neutral-950 font-extrabold">{selectedColor.name}</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {PRODUCT_COLORS.map((color) => {
                    const isSelected = selectedColorId === color.id;
                    return (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColorId(color.id)}
                        className={`flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'border-neutral-900 bg-neutral-100 shadow-xs ring-1 ring-neutral-900'
                            : 'border-neutral-200 hover:border-neutral-400 bg-white'
                        }`}
                      >
                        <span
                          className={`w-5 h-5 rounded-full border ${color.borderClass} shrink-0`}
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="text-xs font-bold text-neutral-900 truncate">
                          {color.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Current Selection Summary */}
              <div className="p-4 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-neutral-500">Selected Configuration</div>
                  <div className="text-sm font-bold text-neutral-900">
                    {selectedModel.name} · {selectedColor.name}
                  </div>
                </div>
                <button
                  onClick={() => onSelectTier(PRICING_TIERS[1], selectedModelId, selectedColorId)}
                  className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-bold uppercase tracking-wider"
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Warranty Section */}
        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-neutral-100 border border-neutral-300 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-neutral-900 mb-2">
            <ShieldCheck className="w-4 h-4 text-neutral-900" />
            <span>SHOP WITH CONFIDENCE</span>
          </div>
          <h4 className="text-lg font-bold text-neutral-950 mb-2">
            Our Commitment to Quality
          </h4>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            [Insert actual return/refund guarantee here. Every KOSNORA smart phone case undergoes rigorous quality control and inspection before leaving our distribution center.]
          </p>
        </div>
      </div>
    </section>
  );
};

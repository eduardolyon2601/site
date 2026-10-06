import React, { useState } from 'react';
import { X, Check, ShieldCheck, Lock, ArrowRight, Zap } from 'lucide-react';
import { PRICING_TIERS, COMPATIBLE_IPHONE_MODELS, PRODUCT_COLORS, WHATS_INCLUDED } from '../data/productData';
import { PricingTier } from '../types';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialTier?: PricingTier;
  initialModelId?: string;
  initialColorId?: string;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  initialTier,
  initialModelId,
  initialColorId,
}) => {
  const [selectedTier, setSelectedTier] = useState<PricingTier>(
    initialTier || PRICING_TIERS[1]
  );
  const [selectedModelId, setSelectedModelId] = useState<string>(
    initialModelId || COMPATIBLE_IPHONE_MODELS[0].id
  );
  const [selectedColorId, setSelectedColorId] = useState<string>(
    initialColorId || PRODUCT_COLORS[0].id
  );

  const [checkoutInitiated, setCheckoutInitiated] = useState(false);

  if (!isOpen) return null;

  const currentModel =
    COMPATIBLE_IPHONE_MODELS.find((m) => m.id === selectedModelId) || COMPATIBLE_IPHONE_MODELS[0];
  const currentColor =
    PRODUCT_COLORS.find((c) => c.id === selectedColorId) || PRODUCT_COLORS[0];

  const handleCheckoutClick = () => {
    setCheckoutInitiated(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/85 backdrop-blur-md flex justify-end">
      <div
        className="w-full max-w-xl h-full bg-[#08090D] text-white border-l-2 border-neutral-800 flex flex-col shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer Header */}
        <div className="sticky top-0 z-10 bg-[#08090D]/95 backdrop-blur-md px-6 py-5 border-b-2 border-neutral-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C084FC] shadow-[0_0_6px_#C084FC]" />
              <span className="text-[11px] font-black uppercase tracking-widest text-[#C084FC]">
                YOUR SELECTION
              </span>
            </div>
            <h3 className="text-xl font-black text-white uppercase tracking-tight">
              KOSNORA Smart Phone Case
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors cursor-pointer"
            aria-label="Close checkout drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-6 space-y-6 flex-1">
          {checkoutInitiated ? (
            /* Simulation of Checkout dispatch with explicit URL placeholder */
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(168,85,247,0.6)]">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h4 className="text-2xl font-black text-white uppercase">
                Configuration Ready
              </h4>
              <p className="text-sm text-neutral-300 max-w-md mx-auto font-medium leading-relaxed">
                You selected <strong>{selectedTier.quantity}x KOSNORA Smart Case</strong> in{' '}
                <strong>{currentColor.name}</strong> for <strong>{currentModel.name}</strong>.
              </p>

              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between text-neutral-400">
                  <span>Selected Package:</span>
                  <span className="text-white font-bold">{selectedTier.label}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Device Compatibility:</span>
                  <span className="text-white font-bold">{currentModel.name}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Finish:</span>
                  <span className="text-white font-bold">{currentColor.name}</span>
                </div>
                <div className="flex justify-between text-neutral-400 pt-2 border-t border-neutral-800">
                  <span>Total Due:</span>
                  <span className="text-[#C084FC] font-black text-base">
                    ${selectedTier.totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 text-purple-200 text-xs text-left max-w-md mx-auto">
                <strong>Integration Note:</strong>
                <br />
                <code>[Insert Checkout URL / Payment Gateway link here]</code>
                <br />
                Connect your direct Shopify / Stripe checkout link directly in this trigger.
              </div>

              <div className="pt-4 flex gap-3 justify-center">
                <button
                  onClick={() => setCheckoutInitiated(false)}
                  className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-bold uppercase cursor-pointer"
                >
                  Modify Selection
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white text-xs font-black uppercase tracking-wider cursor-pointer shadow-md"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Step 1: Select Bundle */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-neutral-300 mb-3">
                  1. Select Bundle Quantity:
                </label>
                <div className="space-y-3">
                  {PRICING_TIERS.map((tier) => {
                    const isSelected = selectedTier.id === tier.id;
                    return (
                      <div
                        key={tier.id}
                        onClick={() => setSelectedTier(tier)}
                        className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-neutral-950 border-[#A855F7] shadow-[0_0_15px_rgba(168,85,247,0.25)]'
                            : 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                isSelected ? 'border-[#A855F7] bg-[#A855F7] text-white' : 'border-neutral-600'
                              }`}
                            >
                              {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                            <div>
                              <div className="text-sm font-black text-white flex items-center gap-2 uppercase">
                                <span>{tier.label}</span>
                                {tier.bestValue && (
                                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-gradient-to-r from-[#9333EA] to-[#7E22CE] text-white">
                                    BEST VALUE
                                  </span>
                                )}
                                {tier.popular && (
                                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-neutral-900 border border-[#A855F7]/40 text-[#C084FC]">
                                    POPULAR
                                  </span>
                                )}
                              </div>
                              <div className="text-xs text-neutral-400 font-semibold">
                                {tier.quantity > 1
                                  ? `$${tier.unitPrice.toFixed(2)} each · $${tier.totalPrice.toFixed(2)} total`
                                  : '$79.90 single unit'}
                              </div>
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="text-base font-black text-white">
                              ${tier.totalPrice.toFixed(2)}
                            </div>
                            {tier.savingsTotal > 0 && (
                              <div className="text-[11px] text-[#C084FC] font-black uppercase">
                                Save ${tier.savingsTotal.toFixed(2)}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Choose iPhone Model */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-neutral-300 mb-2">
                  2. Compatible iPhone Model:
                </label>
                <select
                  value={selectedModelId}
                  onChange={(e) => setSelectedModelId(e.target.value)}
                  className="w-full py-3.5 px-4 rounded-xl border-2 border-neutral-800 bg-neutral-900 text-white text-sm font-bold focus:outline-none focus:border-[#A855F7]"
                >
                  {COMPATIBLE_IPHONE_MODELS.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name} ({m.series})
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 3: Choose Case Color */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-neutral-300 mb-2">
                  3. Select Finish: <span className="text-white font-black">{currentColor.name}</span>
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {PRODUCT_COLORS.map((color) => {
                    const isSelected = selectedColorId === color.id;
                    return (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColorId(color.id)}
                        className={`flex items-center gap-2.5 p-3 rounded-xl border-2 text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#A855F7] bg-neutral-900 shadow-sm'
                            : 'border-neutral-800 hover:border-neutral-700 bg-neutral-900/60'
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded-full border ${color.borderClass} shrink-0`}
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="text-xs font-black text-white truncate uppercase">
                          {color.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Summary & Price Breakdown */}
              <div className="p-4 rounded-2xl bg-neutral-950 border-2 border-neutral-800 space-y-3">
                <div className="text-xs font-black uppercase tracking-widest text-[#C084FC]">
                  ORDER SUMMARY
                </div>
                <div className="flex justify-between text-xs text-neutral-300">
                  <span>Product:</span>
                  <span className="font-bold text-white">
                    KOSNORA Ink NFC Case ({selectedTier.quantity}x)
                  </span>
                </div>
                <div className="flex justify-between text-xs text-neutral-300">
                  <span>Model:</span>
                  <span className="font-bold text-white">{currentModel.name}</span>
                </div>
                <div className="flex justify-between text-xs text-neutral-300">
                  <span>Color:</span>
                  <span className="font-bold text-white">{currentColor.name}</span>
                </div>

                {selectedTier.savingsTotal > 0 && (
                  <div className="flex justify-between text-xs text-[#C084FC] font-black pt-2 border-t border-neutral-800 uppercase">
                    <span>Bundle Discount:</span>
                    <span>-${selectedTier.savingsTotal.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-base font-black text-white pt-2 border-t border-neutral-800">
                  <span>Total Amount:</span>
                  <span className="text-xl text-[#C084FC]">
                    ${selectedTier.totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* What's included checklist */}
              <div className="space-y-2">
                <div className="text-xs font-black uppercase tracking-wider text-neutral-400">
                  IN THE BOX:
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-300 font-bold">
                  {WHATS_INCLUDED.map((item) => (
                    <div key={item} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#C084FC] shrink-0 stroke-[3]" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-2 flex items-center justify-center gap-6 text-[11px] text-neutral-400 font-bold uppercase tracking-wider">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" />
                  <span>256-Bit Encrypted</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C084FC]" />
                  <span>Certified Drop Armor</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Drawer Sticky Footer with CTA */}
        {!checkoutInitiated && (
          <div className="sticky bottom-0 bg-[#08090D] p-6 border-t-2 border-neutral-800">
            <button
              onClick={handleCheckoutClick}
              className="w-full py-4.5 px-6 bg-gradient-to-r from-[#9333EA] via-[#A855F7] to-[#7E22CE] hover:brightness-110 text-white font-black text-sm uppercase tracking-widest rounded-xl shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:shadow-[0_0_35px_rgba(168,85,247,0.65)] transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>PROCEED TO CHECKOUT (${selectedTier.totalPrice.toFixed(2)})</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
            <p className="text-[11px] text-neutral-500 text-center mt-2 font-bold uppercase tracking-wider">
              Tax calculated at checkout · Free domestic shipping
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, Check, ShieldCheck, Lock, ArrowRight, Truck } from 'lucide-react';
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

  const currentModel = COMPATIBLE_IPHONE_MODELS.find(m => m.id === selectedModelId) || COMPATIBLE_IPHONE_MODELS[0];
  const currentColor = PRODUCT_COLORS.find(c => c.id === selectedColorId) || PRODUCT_COLORS[0];

  const handleCheckoutClick = () => {
    setCheckoutInitiated(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm flex justify-end">
      <div 
        className="w-full max-w-xl h-full bg-neutral-950 text-white border-l border-neutral-800 flex flex-col shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer Header */}
        <div className="sticky top-0 z-10 bg-neutral-950/90 backdrop-blur-md px-6 py-5 border-b border-neutral-800 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
              Order Configuration
            </span>
            <h3 className="text-lg font-extrabold text-white">
              KOSNORA Smart Phone Case
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
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
              <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">
                Configuration Ready For Checkout
              </h4>
              <p className="text-sm text-neutral-300 max-w-md mx-auto font-normal leading-relaxed">
                You have configured <strong>{selectedTier.quantity} KOSNORA Smart Case(s)</strong> in <strong>{currentColor.name}</strong> for <strong>{currentModel.name}</strong>.
              </p>

              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between text-neutral-400">
                  <span>Selected Package:</span>
                  <span className="text-white font-semibold">{selectedTier.label}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Device Compatibility:</span>
                  <span className="text-white font-semibold">{currentModel.name}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Finish:</span>
                  <span className="text-white font-semibold">{currentColor.name}</span>
                </div>
                <div className="flex justify-between text-neutral-400 pt-2 border-t border-neutral-800">
                  <span>Total Due:</span>
                  <span className="text-emerald-400 font-bold text-sm">${selectedTier.totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/60 text-amber-300 text-xs text-left max-w-md mx-auto">
                <strong>Integration Note:</strong><br />
                <code>[Insert Checkout URL / Payment Gateway link here]</code><br />
                Connect your Shopify / Stripe / WooCommerce direct checkout link directly in this trigger.
              </div>

              <div className="pt-4 flex gap-3 justify-center">
                <button
                  onClick={() => setCheckoutInitiated(false)}
                  className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-semibold"
                >
                  Modify Selection
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Step 1: Select Bundle */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                  1. Select Quantity & Bundle:
                </label>
                <div className="space-y-3">
                  {PRICING_TIERS.map((tier) => {
                    const isSelected = selectedTier.id === tier.id;
                    return (
                      <div
                        key={tier.id}
                        onClick={() => setSelectedTier(tier)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-neutral-900 border-white ring-1 ring-white'
                            : 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                              isSelected ? 'border-white bg-white text-black' : 'border-neutral-600'
                            }`}>
                              {isSelected && <Check className="w-3.5 h-3.5" />}
                            </div>
                            <div>
                              <div className="text-sm font-bold text-white flex items-center gap-2">
                                <span>{tier.label}</span>
                                {tier.bestValue && (
                                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-emerald-900 text-emerald-300">
                                    Best Value
                                  </span>
                                )}
                                {tier.popular && (
                                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-neutral-800 text-neutral-200">
                                    Popular
                                  </span>
                                )}
                              </div>
                              <div className="text-xs text-neutral-400">
                                {tier.quantity > 1 ? `$${tier.unitPrice.toFixed(2)} each · $${tier.totalPrice.toFixed(2)} total` : '$79.90 single unit'}
                              </div>
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="text-base font-extrabold text-white">
                              ${tier.totalPrice.toFixed(2)}
                            </div>
                            {tier.savingsTotal > 0 && (
                              <div className="text-[11px] text-emerald-400 font-semibold">
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
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  2. Select Compatible iPhone Model:
                </label>
                <select
                  value={selectedModelId}
                  onChange={(e) => setSelectedModelId(e.target.value)}
                  className="w-full py-3.5 px-4 rounded-xl border border-neutral-800 bg-neutral-900 text-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-white"
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
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  3. Select Color: <span className="text-white font-semibold">{currentColor.name}</span>
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {PRODUCT_COLORS.map((color) => {
                    const isSelected = selectedColorId === color.id;
                    return (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColorId(color.id)}
                        className={`flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'border-white bg-neutral-900 ring-1 ring-white'
                            : 'border-neutral-800 hover:border-neutral-700 bg-neutral-900/60'
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded-full border ${color.borderClass} shrink-0`}
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="text-xs font-bold text-white truncate">
                          {color.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Summary & Price Breakdown */}
              <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Order Summary
                </div>
                <div className="flex justify-between text-xs text-neutral-300">
                  <span>Product:</span>
                  <span className="font-semibold text-white">KOSNORA Ink NFC Case ({selectedTier.quantity}x)</span>
                </div>
                <div className="flex justify-between text-xs text-neutral-300">
                  <span>Model:</span>
                  <span className="font-semibold text-white">{currentModel.name}</span>
                </div>
                <div className="flex justify-between text-xs text-neutral-300">
                  <span>Color:</span>
                  <span className="font-semibold text-white">{currentColor.name}</span>
                </div>

                {selectedTier.savingsTotal > 0 && (
                  <div className="flex justify-between text-xs text-emerald-400 font-semibold pt-2 border-t border-neutral-800">
                    <span>Bundle Discount:</span>
                    <span>-${selectedTier.savingsTotal.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-base font-extrabold text-white pt-2 border-t border-neutral-800">
                  <span>Total Amount:</span>
                  <span className="text-lg">${selectedTier.totalPrice.toFixed(2)}</span>
                </div>
              </div>

              {/* What's included checklist */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  In The Box:
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-300 font-medium">
                  {WHATS_INCLUDED.map((item) => (
                    <div key={item} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-2 flex items-center justify-center gap-6 text-[11px] text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" />
                  <span>256-Bit Encrypted</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Certified Quality</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Drawer Sticky Footer with CTA */}
        {!checkoutInitiated && (
          <div className="sticky bottom-0 bg-neutral-950 p-6 border-t border-neutral-800">
            <button
              onClick={handleCheckoutClick}
              className="w-full py-4 px-6 bg-white hover:bg-neutral-200 text-black font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <span>PROCEED TO CHECKOUT (${selectedTier.totalPrice.toFixed(2)})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-neutral-500 text-center mt-2 font-medium">
              Tax calculated at checkout · Free domestic shipping
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

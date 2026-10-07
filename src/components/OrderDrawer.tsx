import React, { useState } from 'react';
import { X, Check, ShieldCheck, Lock, ArrowRight, Truck } from 'lucide-react';
import { PRICING_TIERS, COMPATIBLE_IPHONE_MODELS, PRODUCT_COLORS } from '../data/productData';
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
  initialTier = PRICING_TIERS[1],
  initialModelId = COMPATIBLE_IPHONE_MODELS[0].id,
  initialColorId = PRODUCT_COLORS[0].id,
}) => {
  const [selectedTier, setSelectedTier] = useState<PricingTier>(initialTier);
  const [selectedModelId, setSelectedModelId] = useState<string>(initialModelId);
  const [selectedColorId, setSelectedColorId] = useState<string>(initialColorId);
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
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div
        className="w-full max-w-xl h-full bg-white text-neutral-900 border-l border-neutral-200 flex flex-col shadow-2xl overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4.5 border-b border-neutral-200 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#9333EA] block">
              YOUR SELECTION
            </span>
            <h3 className="text-lg font-black text-neutral-950 uppercase">
              KOSNORA Smart Phone Case
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
            aria-label="Close checkout drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-6 space-y-6 flex-1">
          {checkoutInitiated ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#9333EA] to-[#6B21A8] text-white flex items-center justify-center mx-auto shadow-md">
                <Check className="w-7 h-7 stroke-[3]" />
              </div>
              <h4 className="text-xl font-black text-neutral-950 uppercase">
                Order Configuration Ready
              </h4>
              <p className="text-sm text-neutral-600 max-w-md mx-auto font-medium">
                You selected <strong>{selectedTier.quantity}x KOSNORA Smart Case</strong> in{' '}
                <strong>{currentColor.name}</strong> for <strong>{currentModel.name}</strong>.
              </p>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between text-neutral-600">
                  <span>Selected Package:</span>
                  <span className="text-neutral-900 font-bold">{selectedTier.label}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Device Compatibility:</span>
                  <span className="text-neutral-900 font-bold">{currentModel.name}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Finish:</span>
                  <span className="text-neutral-900 font-bold">{currentColor.name}</span>
                </div>
                <div className="flex justify-between text-neutral-600 pt-2 border-t border-neutral-200 font-bold">
                  <span>Total Due:</span>
                  <span className="text-[#9333EA] font-black text-base">
                    ${selectedTier.totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="pt-4 flex gap-3 justify-center">
                <button
                  onClick={() => setCheckoutInitiated(false)}
                  className="px-5 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold uppercase cursor-pointer"
                >
                  Modify Selection
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#6B21A8] text-white text-xs font-black uppercase tracking-wider cursor-pointer shadow-xs"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Step 1: Select Bundle */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-neutral-700 mb-2">
                  1. Select Bundle:
                </label>
                <div className="space-y-2.5">
                  {PRICING_TIERS.map((tier) => {
                    const isSelected = selectedTier.id === tier.id;
                    return (
                      <div
                        key={tier.id}
                        onClick={() => setSelectedTier(tier)}
                        className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-[#FAF5FF] border-[#9333EA] shadow-xs'
                            : 'bg-neutral-50 border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center ${
                                isSelected ? 'border-[#9333EA] bg-[#9333EA] text-white' : 'border-neutral-400'
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <div>
                              <div className="text-sm font-black text-neutral-900 flex items-center gap-2 uppercase">
                                <span>{tier.label}</span>
                                {tier.bestValue && (
                                  <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-neutral-900 text-white">
                                    BEST VALUE
                                  </span>
                                )}
                                {tier.popular && !tier.bestValue && (
                                  <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-[#9333EA] text-white">
                                    POPULAR
                                  </span>
                                )}
                              </div>
                              <span className="text-xs text-neutral-500 font-medium">
                                {tier.quantity > 1
                                  ? `$${tier.unitPrice.toFixed(2)} each · $${tier.totalPrice.toFixed(2)} total`
                                  : '$79.90 single'}
                              </span>
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="text-sm font-black text-neutral-900">
                              ${tier.totalPrice.toFixed(2)}
                            </div>
                            {tier.savingsTotal > 0 && (
                              <div className="text-[10px] text-[#9333EA] font-black uppercase">
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
                <label className="block text-xs font-black uppercase tracking-wider text-neutral-700 mb-1.5">
                  2. Compatible iPhone Model:
                </label>
                <select
                  value={selectedModelId}
                  onChange={(e) => setSelectedModelId(e.target.value)}
                  className="w-full py-3 px-3.5 rounded-xl border border-neutral-300 bg-neutral-50 text-neutral-900 text-xs sm:text-sm font-bold focus:outline-none focus:border-[#9333EA]"
                >
                  {COMPATIBLE_IPHONE_MODELS.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 3: Choose Case Color */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-neutral-700 mb-1.5">
                  3. Finish: <span className="font-bold text-neutral-900">{currentColor.name}</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {PRODUCT_COLORS.map((c) => {
                    const isSelected = selectedColorId === c.id;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setSelectedColorId(c.id)}
                        className={`p-2.5 rounded-xl border-2 flex flex-col items-center gap-1 cursor-pointer transition-all ${
                          isSelected
                            ? 'border-[#9333EA] bg-[#FAF5FF] shadow-xs'
                            : 'border-neutral-200 bg-neutral-50 hover:border-neutral-300'
                        }`}
                      >
                        <span
                          className="w-5 h-5 rounded-full border border-neutral-300"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span className="text-[10px] font-bold text-neutral-800 truncate w-full text-center">
                          {c.name.split(' ')[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Drawer Sticky Footer Action */}
        {!checkoutInitiated && (
          <div className="sticky bottom-0 bg-white border-t border-neutral-200 p-5 space-y-2">
            <button
              onClick={handleCheckoutClick}
              className="w-full py-4 bg-gradient-to-r from-[#9333EA] via-[#8015F5] to-[#6B21A8] hover:brightness-110 text-white font-black text-xs sm:text-sm tracking-widest uppercase rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>CHECKOUT · ${selectedTier.totalPrice.toFixed(2)}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <div className="flex items-center justify-center gap-3 text-[11px] text-neutral-500 font-semibold pt-1">
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-[#9333EA]" /> Free US Delivery
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9333EA]" /> 30-Day Guarantee
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { BRAND_NAME } from '../data/productData';
import { PlaceholderModal } from './PlaceholderModal';

export const Footer: React.FC = () => {
  const [modalState, setModalState] = useState<{ isOpen: boolean; title: string; content: string }>({
    isOpen: false,
    title: '',
    content: '',
  });

  const openPolicy = (title: string, content: string) => {
    setModalState({ isOpen: true, title, content });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  const policies = [
    {
      label: 'Contact',
      content: `[Insert customer support contact details here]\n\nEmail: [Insert support@kosnora.com]\nOperational Hours: [Insert operational business hours]\nResponse time: Within 24-48 business hours.`,
    },
    {
      label: 'Shipping Policy',
      content: `[Insert actual shipping policy and estimated delivery timelines here]\n\nStandard domestic shipping across the US is handled via certified parcel services.\nTracking numbers are automatically emailed upon order dispatch.`,
    },
    {
      label: 'Return Policy',
      content: `[Insert actual return & exchange policy here]\n\nItems must be in original condition with intact packaging. For return instructions, contact customer service.`,
    },
    {
      label: 'Privacy Policy',
      content: `[Insert formal privacy policy here]\n\nKOSNORA values customer privacy. We collect only necessary transaction and shipping information to fulfill orders and do not sell your personal data.`,
    },
    {
      label: 'Terms of Service',
      content: `[Insert formal terms of service here]\n\nBy purchasing KOSNORA accessories, customers agree to standard terms of purchase, warranty conditions, and usage guidelines.`,
    },
  ];

  return (
    <>
      <footer className="bg-neutral-950 text-neutral-400 py-16 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
            {/* Brand Column */}
            <div className="md:col-span-6 space-y-4">
              <span className="text-2xl font-black tracking-[0.2em] text-white uppercase block">
                {BRAND_NAME}
              </span>
              <p className="text-sm font-semibold text-neutral-300">
                Make your phone uniquely yours.
              </p>
              <p className="text-xs text-neutral-400 max-w-sm leading-relaxed font-normal">
                Battery-free smart NFC phone cases engineered for endless personalized self-expression.
              </p>
            </div>

            {/* Links Column */}
            <div className="md:col-span-6 flex flex-col md:items-end justify-between space-y-6">
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-neutral-400">
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
                <a href="#benefits" className="hover:text-white transition-colors">
                  Benefits
                </a>
                <a href="#compatibility" className="hover:text-white transition-colors">
                  Compatibility
                </a>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </div>

              {/* Policy Legal Links */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-neutral-400">
                {policies.map((p) => (
                  <button
                    key={p.label}
                    onClick={() => openPolicy(p.label, p.content)}
                    className="hover:text-white transition-colors underline-offset-4 hover:underline text-left"
                  >
                    {p.label}
                  </button>
                ))}
              </div>

              {/* Social Media Placeholders */}
              <div className="flex items-center gap-4 text-xs text-neutral-400">
                <span className="font-semibold text-neutral-300">Social:</span>
                <span className="hover:text-white transition-colors cursor-pointer">[Instagram: @kosnora]</span>
                <span className="text-neutral-700">·</span>
                <span className="hover:text-white transition-colors cursor-pointer">[TikTok: @kosnora]</span>
              </div>
            </div>
          </div>

          {/* Copyright & Disclaimer */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-normal">
            <div>
              © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
            </div>
            <div className="text-neutral-400 text-center sm:text-right">
              iPhone is a trademark of Apple Inc. KOSNORA is an independent accessory brand.
            </div>
          </div>
        </div>
      </footer>

      <PlaceholderModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        content={modalState.content}
      />
    </>
  );
};

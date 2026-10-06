import React, { useState } from 'react';
import { KosnoraLogo } from './KosnoraLogo';
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
    setModalState((prev) => ({ ...prev, isOpen: false }));
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
      <footer className="bg-black text-neutral-400 py-16 border-t-2 border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
            {/* Brand Column */}
            <div className="md:col-span-6 space-y-4">
              <a href="#" className="inline-block">
                <KosnoraLogo />
              </a>
              <p className="text-sm font-bold text-neutral-200 uppercase tracking-wider">
                Make your phone uniquely yours.
              </p>
              <p className="text-xs text-neutral-400 max-w-sm leading-relaxed font-medium">
                Battery-free smart NFC phone cases engineered for endless personalized self-expression. Change your picture whenever you want.
              </p>
            </div>

            {/* Links Column */}
            <div className="md:col-span-6 flex flex-col md:items-end justify-between space-y-6">
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-black uppercase tracking-widest text-neutral-300">
                <a href="#how-it-works" className="hover:text-[#CEFF00] transition-colors">
                  How It Works
                </a>
                <a href="#benefits" className="hover:text-[#CEFF00] transition-colors">
                  Benefits
                </a>
                <a href="#compatibility" className="hover:text-[#CEFF00] transition-colors">
                  Compatibility
                </a>
                <a href="#faq" className="hover:text-[#CEFF00] transition-colors">
                  FAQ
                </a>
              </div>

              {/* Policy Legal Links */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-neutral-400 font-semibold">
                {policies.map((p) => (
                  <button
                    key={p.label}
                    onClick={() => openPolicy(p.label, p.content)}
                    className="hover:text-white transition-colors underline-offset-4 hover:underline text-left cursor-pointer"
                  >
                    {p.label}
                  </button>
                ))}
              </div>

              {/* Social Media Placeholders */}
              <div className="flex items-center gap-4 text-xs font-bold text-neutral-400">
                <span className="text-neutral-200">Social:</span>
                <span className="hover:text-[#CEFF00] transition-colors cursor-pointer">[Instagram: @kosnora]</span>
                <span className="text-neutral-700">·</span>
                <span className="hover:text-[#CEFF00] transition-colors cursor-pointer">[TikTok: @kosnora]</span>
              </div>
            </div>
          </div>

          {/* Copyright & Disclaimer */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-medium">
            <div>
              © {new Date().getFullYear()} KOSNORA. All rights reserved.
            </div>
            <div className="text-center sm:text-right">
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

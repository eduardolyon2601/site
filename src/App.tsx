import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhyKosnoraSection } from './components/WhyKosnoraSection';
import { SocialProofSection } from './components/SocialProofSection';
import { OfferSection } from './components/OfferSection';
import { FinalCtaFaqSection } from './components/FinalCtaFaqSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { OrderDrawer } from './components/OrderDrawer';
import { PRICING_TIERS } from './data/productData';
import { PricingTier } from './types';
import { CheckCircle2, GitBranch, X } from 'lucide-react';

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<PricingTier>(PRICING_TIERS[1]);
  const [selectedModelId, setSelectedModelId] = useState<string | undefined>(undefined);
  const [selectedColorId, setSelectedColorId] = useState<string | undefined>(undefined);
  const [showThemeInfo, setShowThemeInfo] = useState(false);

  const handleOpenCheckout = (tier?: PricingTier, modelId?: string, colorId?: string) => {
    if (tier) setSelectedTier(tier);
    if (modelId) setSelectedModelId(modelId);
    if (colorId) setSelectedColorId(colorId);
    setIsDrawerOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white font-['Montserrat',sans-serif] flex flex-col selection:bg-neutral-800 selection:text-white pb-14 md:pb-0">
      {/* High-Energy Announcement Marquee Bar */}
      <AnnouncementBar />

      {/* Top Banner: Shopify Online Store 2.0 Theme Verified */}
      <div className="bg-[#0C0D14] border-b border-neutral-800 px-4 py-2 text-xs font-semibold text-neutral-300 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#A855F7] shadow-[0_0_6px_#A855F7]" />
          <span>Shopify Online Store 2.0 Theme Native</span>
          <span className="hidden sm:inline text-neutral-500">·</span>
          <span className="hidden sm:inline text-neutral-400">Branch: <code>main</code></span>
        </div>
        <button
          onClick={() => setShowThemeInfo(!showThemeInfo)}
          className="text-neutral-400 hover:text-[#C084FC] underline underline-offset-2 text-[11px] cursor-pointer"
        >
          {showThemeInfo ? 'Hide Theme Info' : 'Shopify Theme & GitHub Info'}
        </button>
      </div>

      {/* Collapsible Shopify Architecture Guide */}
      {showThemeInfo && (
        <div className="bg-[#08090D] border-b border-neutral-800 p-4 sm:p-6 text-xs text-neutral-300">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#C084FC] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#A855F7]" />
                <span>Shopify Online Store 2.0 Theme Architecture</span>
              </div>
              <button
                onClick={() => setShowThemeInfo(false)}
                className="p-1 hover:text-white cursor-pointer"
                aria-label="Close panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-[11px]">
              <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800">
                <strong className="text-white block mb-1">/layout/</strong>
                <code>theme.liquid</code> (Master Layout)
              </div>
              <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800">
                <strong className="text-white block mb-1">/templates/</strong>
                <code>index.json</code>, <code>product.json</code>, <code>cart.json</code>, <code>404.json</code>
              </div>
              <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800">
                <strong className="text-white block mb-1">/sections/ (6 Core Sections)</strong>
                <code>hero.liquid</code>, <code>how-it-works.liquid</code>, <code>why-kosnora.liquid</code>, <code>social-proof.liquid</code>, <code>pricing-offer.liquid</code>, <code>final-cta-faq.liquid</code>
              </div>
              <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800">
                <strong className="text-white block mb-1">/assets/ & /config/</strong>
                <code>kosnora.css</code>, <code>kosnora.js</code>, photos, <code>settings_schema.json</code>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-purple-950/30 border border-purple-800/50 text-purple-200">
              <div className="flex items-center gap-2 font-bold mb-1">
                <GitBranch className="w-4 h-4 text-[#C084FC]" />
                <span>Ready to deploy via GitHub to Shopify:</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Connect your repository branch <strong>main</strong> in <strong>Shopify &gt; Online Store &gt; Themes &gt; Add theme &gt; Connect from GitHub</strong>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Top Header */}
      <Header onShopClick={() => handleOpenCheckout(PRICING_TIERS[1])} />

      <main className="flex-1">
        {/* 1️⃣ HERO — Dark background, instant product showcase */}
        <HeroSection onCtaClick={() => handleOpenCheckout(PRICING_TIERS[1])} />

        {/* 2️⃣ HOW IT WORKS — 3 simple steps (01 Choose, 02 Set, 03 Change) */}
        <HowItWorksSection onCtaClick={() => handleOpenCheckout(PRICING_TIERS[1])} />

        {/* 3️⃣ WHY KOSNORA — One compact section: Personal, Changeable, Battery-Free, Different */}
        <WhyKosnoraSection />

        {/* 4️⃣ SOCIAL PROOF + PRODUCT VISUAL — Lifestyle grid & honest proof */}
        <SocialProofSection />

        {/* 5️⃣ OFFER — 3 clear pricing cards (1, 2, 3 cases) + iPhone compatibility */}
        <OfferSection onSelectTier={(tier, mId, cId) => handleOpenCheckout(tier, mId, cId)} />

        {/* 6️⃣ FINAL CTA + FAQ — "MAKE YOUR PHONE YOURS." + Compact 6 FAQs */}
        <FinalCtaFaqSection onCtaClick={() => handleOpenCheckout(PRICING_TIERS[2])} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky CTA Bar */}
      <MobileStickyBar
        isVisible={!isDrawerOpen}
        onCtaClick={() => handleOpenCheckout(PRICING_TIERS[1])}
      />

      {/* Interactive Order & Checkout Configuration Drawer */}
      <OrderDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseCheckout}
        initialTier={selectedTier}
        initialModelId={selectedModelId}
        initialColorId={selectedColorId}
      />
    </div>
  );
}

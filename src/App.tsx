import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { BenefitsSection } from './components/BenefitsSection';
import { SocialProofSection } from './components/SocialProofSection';
import { OfferSection } from './components/OfferSection';
import { FaqSection } from './components/FaqSection';
import { ClosingSection } from './components/ClosingSection';
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
      {/* Top Banner: Shopify Online Store 2.0 Theme Verified */}
      <div className="bg-neutral-900 border-b border-neutral-800 px-4 py-2 text-xs font-semibold text-neutral-300 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Shopify Online Store 2.0 Native Theme Ready</span>
          <span className="hidden sm:inline text-neutral-500">·</span>
          <span className="hidden sm:inline text-neutral-400">Branch: <code>main</code></span>
        </div>
        <button
          onClick={() => setShowThemeInfo(!showThemeInfo)}
          className="text-neutral-400 hover:text-white underline underline-offset-2 text-[11px]"
        >
          {showThemeInfo ? 'Hide Theme Structure' : 'View Shopify Files & GitHub Guide'}
        </button>
      </div>

      {/* Collapsible Shopify Architecture Guide */}
      {showThemeInfo && (
        <div className="bg-neutral-950 border-b border-neutral-800 p-4 sm:p-6 text-xs text-neutral-300">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Shopify Online Store 2.0 Theme Directory Verified</span>
              </div>
              <button
                onClick={() => setShowThemeInfo(false)}
                className="p-1 hover:text-white"
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
                <strong className="text-white block mb-1">/sections/ (8 Sections)</strong>
                <code>hero.liquid</code>, <code>problem.liquid</code>, <code>solution.liquid</code>, <code>benefits.liquid</code>, <code>social-proof.liquid</code>, <code>pricing-offer.liquid</code>, <code>faq.liquid</code>, <code>closing.liquid</code>
              </div>
              <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800">
                <strong className="text-white block mb-1">/assets/ & /config/</strong>
                <code>kosnora.css</code>, <code>kosnora.js</code>, photos, <code>settings_schema.json</code>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/50 text-emerald-300">
              <div className="flex items-center gap-2 font-bold mb-1">
                <GitBranch className="w-4 h-4" />
                <span>How to connect directly in Shopify:</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                1. Push this repository to your GitHub repo on branch <strong>main</strong>.<br />
                2. In Shopify Admin, navigate to: <strong>Online Store &gt; Themes &gt; Add theme &gt; Connect from GitHub</strong>.<br />
                3. Select your repository and the <strong>main</strong> branch. Shopify will automatically validate and load the KOSNORA theme into your store!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Top Header */}
      <Header onShopClick={() => handleOpenCheckout(PRICING_TIERS[1])} />

      <main className="flex-1">
        {/* 1️⃣ HERO — Fundo escuro */}
        <HeroSection onCtaClick={() => handleOpenCheckout(PRICING_TIERS[1])} />

        {/* 2️⃣ PROBLEMA — Fundo claro */}
        <ProblemSection />

        {/* 3️⃣ SOLUÇÃO — Fundo diferenciado */}
        <SolutionSection onCtaClick={() => handleOpenCheckout(PRICING_TIERS[1])} />

        {/* 4️⃣ BENEFÍCIOS — Fundo claro */}
        <BenefitsSection onCtaClick={() => handleOpenCheckout(PRICING_TIERS[1])} />

        {/* 5️⃣ PROVA SOCIAL — Fundo escuro */}
        <SocialProofSection />

        {/* 6️⃣ OFERTA — Fundo claro */}
        <OfferSection onSelectTier={(tier, mId, cId) => handleOpenCheckout(tier, mId, cId)} />

        {/* 7️⃣ FAQ — Fundo neutro */}
        <FaqSection />

        {/* 8️⃣ FECHAMENTO — Fundo escuro */}
        <ClosingSection onCtaClick={() => handleOpenCheckout(PRICING_TIERS[2])} />
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

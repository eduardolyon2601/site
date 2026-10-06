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

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<PricingTier>(PRICING_TIERS[1]);
  const [selectedModelId, setSelectedModelId] = useState<string | undefined>(undefined);
  const [selectedColorId, setSelectedColorId] = useState<string | undefined>(undefined);

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

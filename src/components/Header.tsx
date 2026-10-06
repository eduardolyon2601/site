import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { KosnoraLogo } from './KosnoraLogo';

interface HeaderProps {
  onShopClick: () => void;
  cartCount?: number;
}

export const Header: React.FC<HeaderProps> = ({ onShopClick, cartCount = 1 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'HOW IT WORKS', href: '#how-it-works' },
    { label: 'WHY KOSNORA', href: '#why-kosnora' },
    { label: 'OFFER', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-black/95 backdrop-blur-md border-b border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Zone with official KNR + KOSNORA Logo */}
        <a href="#" className="flex items-center group">
          <KosnoraLogo variant="purple" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-black tracking-widest text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-[#C084FC] transition-colors py-1 uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Cart Icon Trigger */}
          <button
            onClick={onShopClick}
            className="relative p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white hover:border-[#A855F7]/60 transition-all active:scale-95 flex items-center justify-center cursor-pointer"
            title="Open Cart"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#A855F7] text-white font-extrabold text-[10px] flex items-center justify-center shadow-[0_0_8px_rgba(168,85,247,0.8)]">
              {cartCount}
            </span>
          </button>

          {/* Quick CTA with Electric Purple Glow */}
          <button
            onClick={onShopClick}
            className="hidden sm:inline-flex px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-black tracking-wider text-white bg-gradient-to-r from-[#9333EA] via-[#A855F7] to-[#7E22CE] hover:brightness-110 rounded-xl transition-all shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_25px_rgba(168,85,247,0.55)] active:scale-95 whitespace-nowrap uppercase cursor-pointer"
          >
            SHOP NOW
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950 border-b border-neutral-800 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-extrabold uppercase tracking-wider text-neutral-200 hover:text-[#C084FC] py-2 border-b border-neutral-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onShopClick();
              }}
              className="w-full py-4 bg-gradient-to-r from-[#9333EA] via-[#A855F7] to-[#7E22CE] text-white font-black text-sm tracking-wider uppercase rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.4)] text-center cursor-pointer"
            >
              GET YOUR KOSNORA
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

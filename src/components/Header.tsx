import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_NAME } from '../data/productData';

interface HeaderProps {
  onShopClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onShopClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Compatibility', href: '#compatibility' },
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
    <header className="sticky top-0 z-40 w-full bg-black/90 backdrop-blur-md border-b border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Zone: Clean single wordmark in Montserrat */}
        <a 
          href="#" 
          className="text-xl sm:text-2xl font-extrabold tracking-[0.2em] text-white hover:text-neutral-200 transition-colors uppercase"
        >
          {BRAND_NAME}
        </a>

        {/* Desktop Nav Zone */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-white transition-colors duration-150 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-3">
          <button
            onClick={onShopClick}
            className="px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold tracking-wide text-black bg-white hover:bg-neutral-200 rounded-xl transition-all shadow-md active:scale-95 whitespace-nowrap"
          >
            SHOP NOW
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-neutral-800 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-semibold uppercase tracking-wider text-neutral-300 hover:text-white py-2 border-b border-neutral-900"
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
              className="w-full py-3.5 bg-white text-black font-bold text-sm tracking-wide rounded-xl shadow-md text-center"
            >
              GET YOUR KOSNORA CASE
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

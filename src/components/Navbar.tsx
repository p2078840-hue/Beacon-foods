import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Menu as MenuIcon, 
  X, 
  Flame, 
  PhoneCall, 
  ArrowRight
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const { totalItemsCount, setIsCartOpen, setIsSearchOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Offers', href: '#offers' },
    { name: 'Contact', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    setMobileMenuOpen(false);
    const element = document.querySelector('#menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0f1013]/95 backdrop-blur-md shadow-2xl shadow-black/40 border-b border-white/10 py-3.5'
            : 'bg-gradient-to-b from-[#0f1013]/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              id="nav-logo-link"
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff5c26] to-[#d9480f] flex items-center justify-center shadow-lg shadow-[#ff5c26]/25 group-hover:scale-105 transition-transform">
                <Flame className="w-5 h-5 text-white fill-white" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-heading font-extrabold text-2xl tracking-tight text-white group-hover:text-[#ff5c26] transition-colors">
                    BiteCraft
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#ff5c26] animate-pulse"></span>
                </div>
                <span className="text-[10px] tracking-wider uppercase text-neutral-400 font-medium -mt-1 hidden sm:inline">
                  Artisanal Kitchen
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm font-medium text-neutral-300 hover:text-[#ff5c26] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#ff5c26] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Icons & CTA */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Search Icon */}
              <button
                id="navbar-search-btn"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search food menu"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white flex items-center justify-center transition-all border border-white/5 active:scale-95"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Cart Icon with Live Badge */}
              <button
                id="navbar-cart-btn"
                onClick={() => setIsCartOpen(true)}
                aria-label="View shopping cart"
                className="relative w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-white flex items-center justify-center transition-all border border-white/5 active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                {totalItemsCount > 0 && (
                  <span
                    id="navbar-cart-count"
                    className="absolute -top-1 -right-1 bg-[#ff5c26] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce"
                  >
                    {totalItemsCount}
                  </span>
                )}
              </button>

              {/* Order Now CTA */}
              <button
                id="navbar-order-btn"
                onClick={scrollToMenu}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ff5c26] to-[#e8590c] hover:from-[#ff6b35] hover:to-[#ff5c26] text-white font-semibold text-sm shadow-lg shadow-[#ff5c26]/20 hover:shadow-[#ff5c26]/35 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                id="navbar-mobile-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                className="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-200 hover:text-white active:scale-95"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden transition-opacity"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#12141a] border-l border-white/10 z-50 p-6 flex flex-col justify-between transform transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#ff5c26] flex items-center justify-center">
                <Flame className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white">BiteCraft</span>
            </div>
            <button
              id="mobile-nav-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-2 mt-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium text-neutral-200 hover:text-[#ff5c26] hover:bg-white/5 transition-all"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-white/10 space-y-3">
          <button
            id="mobile-menu-order-cta"
            onClick={scrollToMenu}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#ff5c26] text-white font-semibold text-sm shadow-lg shadow-[#ff5c26]/20 active:scale-95"
          >
            <span>Order Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 pt-2">
            <PhoneCall className="w-3.5 h-3.5 text-[#ff5c26]" />
            <span>Call us directly: (415) 890-2483</span>
          </div>
        </div>
      </div>
    </>
  );
};

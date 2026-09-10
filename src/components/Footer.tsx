import React, { useState } from 'react';
import { Flame, ArrowUp, X, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const [activePolicy, setActivePolicy] = useState<{ title: string; content: string } | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const policyDetails: Record<string, string> = {
    'Help Center': 'Our customer support concierge is ready to assist you daily from 11:00 AM to 11:30 PM. For immediate inquiries regarding an active order, call (415) 890-2483.',
    'Delivery Information': 'All deliveries are fulfilled within 25–35 minutes inside our 8-mile metro radius. Packaging utilizes triple-layer insulated thermal bags to maintain peak kitchen temperature.',
    'Refund Policy': 'If your meal arrived incorrect or did not meet our rigorous freshness criteria, notify us within 2 hours of delivery for a hassle-free instant credit or full refund.',
    'Terms & Conditions': 'BiteCraft guarantees 100% authentic fresh ingredients. All promo discounts and voucher codes are subject to specified minimum purchase requirements.',
    'Privacy Policy': 'Your privacy is paramount. Customer phone numbers and addresses are used solely for kitchen delivery logistics and are never sold to third-party brokers.'
  };

  return (
    <footer id="main-footer" className="bg-[#090a0d] border-t border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff5c26] to-[#d9480f] flex items-center justify-center shadow-lg shadow-[#ff5c26]/20">
                <Flame className="w-5 h-5 text-white fill-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
                  BiteCraft
                </span>
                <span className="text-[10px] uppercase font-bold text-[#ff7a45] tracking-widest">
                  Artisanal Kitchen
                </span>
              </div>
            </div>

            <p className="text-base font-semibold text-neutral-300 italic">
              “Crafted Fresh. Made to Crave.”
            </p>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Artisanal smash burgers, wood-fired pizzas, handcrafted pastas, and fresh sides crafted with farm-to-table passion.
            </p>

            <div className="pt-2 text-xs text-neutral-400 space-y-1">
              <p>{RESTAURANT_INFO.address}</p>
              <p className="font-mono text-white">{RESTAURANT_INFO.phone}</p>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Menu', href: '#menu' },
                { name: 'About', href: '#about' },
                { name: 'Offers', href: '#offers' },
                { name: 'Contact', href: '#contact' },
                { name: 'FAQ', href: '#faq' },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-[#ff5c26] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white">
              Customer Support
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              {[
                'Help Center',
                'Delivery Information',
                'Refund Policy',
                'Terms & Conditions',
                'Privacy Policy'
              ].map((policy) => (
                <li key={policy}>
                  <button
                    onClick={() => setActivePolicy({ title: policy, content: policyDetails[policy] })}
                    className="hover:text-white hover:underline transition-colors text-left"
                  >
                    {policy}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Hours (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white">
              Follow Our Craft
            </h4>
            <div className="flex items-center gap-2.5">
              {/* Facebook */}
              <a
                href="#facebook"
                aria-label="Follow BiteCraft on Facebook"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#ff5c26] text-neutral-300 hover:text-white flex items-center justify-center transition-all border border-white/5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Follow BiteCraft on Instagram"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#ff5c26] text-neutral-300 hover:text-white flex items-center justify-center transition-all border border-white/5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#tiktok"
                aria-label="Follow BiteCraft on TikTok"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#ff5c26] text-neutral-300 hover:text-white flex items-center justify-center transition-all border border-white/5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#youtube"
                aria-label="Subscribe to BiteCraft on YouTube"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#ff5c26] text-neutral-300 hover:text-white flex items-center justify-center transition-all border border-white/5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-neutral-400 block font-semibold">Kitchen Open Daily</span>
              <span className="text-xs font-mono text-emerald-400">11:00 AM – 11:30 PM</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 BiteCraft. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span className="text-neutral-500 hidden sm:inline">Crafted for Foodies</span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="flex items-center gap-1 text-white hover:text-[#ff5c26] transition-colors p-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Policy Modal */}
      {activePolicy && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setActivePolicy(null)}
        >
          <div 
            className="bg-[#141620] border border-white/15 rounded-3xl max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#ff5c26]" />
                <span>{activePolicy.title}</span>
              </h3>
              <button
                onClick={() => setActivePolicy(null)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4 text-sm text-neutral-300 leading-relaxed">
              {activePolicy.content}
            </div>
            <div className="mt-6 pt-3 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActivePolicy(null)}
                className="px-5 py-2 rounded-full bg-[#ff5c26] text-white text-xs font-bold"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

import React from 'react';
import { 
  ArrowRight, 
  UtensilsCrossed, 
  Star, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  HeartHandshake, 
  Leaf, 
  Flame,
  CheckCircle2
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Hero: React.FC = () => {
  const { setIsCartOpen } = useCart();

  const scrollToMenu = () => {
    const el = document.querySelector('#menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFavorites = () => {
    const el = document.querySelector('#favorites');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#0f1013] via-[#12131a] to-[#0d0e12]">
      {/* Subtle warm decorative glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#ff5c26]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#f59e0b]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-[#ff5c26] animate-ping" />
              <Flame className="w-4 h-4 text-[#ff5c26]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-neutral-300">
                Crafted Fresh. Made to Crave.
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight text-white leading-[1.08]">
              Good Food. <br />
              <span className="bg-gradient-to-r from-[#ff7a45] via-[#ff5c26] to-[#f59e0b] bg-clip-text text-transparent">
                Great Moments.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Freshly crafted meals, bold flavors, and unforgettable bites — made with quality ingredients and delivered with care.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-order-now-btn"
                onClick={scrollToMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff5c26] to-[#e8590c] hover:from-[#ff6e3a] hover:to-[#ff5c26] text-white font-bold text-base shadow-xl shadow-[#ff5c26]/30 hover:shadow-[#ff5c26]/50 transition-all hover:scale-[1.02] active:scale-95 group"
              >
                <span>Order Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-explore-menu-btn"
                onClick={scrollToFavorites}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-base border border-white/15 hover:border-white/30 backdrop-blur-md transition-all hover:scale-[1.02] active:scale-95"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#ff7a45]" />
                <span>Explore Menu</span>
              </button>
            </div>

            {/* Customer Rating Proof */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 border-t border-white/10">
              <div className="flex items-center -space-x-2.5">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="Customer avatar"
                  className="w-9 h-9 rounded-full border-2 border-[#12131a] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="Customer avatar"
                  className="w-9 h-9 rounded-full border-2 border-[#12131a] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                  alt="Customer avatar"
                  className="w-9 h-9 rounded-full border-2 border-[#12131a] object-cover"
                />
                <div className="w-9 h-9 rounded-full bg-[#ff5c26] text-white text-xs font-bold flex items-center justify-center border-2 border-[#12131a]">
                  +12k
                </div>
              </div>

              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-white font-bold text-sm ml-1">4.9 / 5</span>
                </div>
                <span className="text-xs text-neutral-400">
                  from 12,000+ satisfied restaurant diners
                </span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Rotating / glowing background accent */}
            <div className="relative w-full max-w-[480px] aspect-square">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-white/10 scale-95" />
              <div className="absolute inset-4 rounded-full border border-dashed border-[#ff5c26]/20" />
              
              {/* Main Food Photo Frame */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-black/80 border border-white/15 bg-neutral-900 group">
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85"
                  alt="Signature Smash Burger with melted cheddar, artisanal brioche bun and crispy fries"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark gradient overlay at bottom for badge contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1013]/90 via-transparent to-black/20" />

                {/* Overlaid Badges */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-xs font-semibold text-white">Chef's Signature Pick</span>
                </div>

                {/* Bottom Card details */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#14161f]/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-[#ff7a45] uppercase tracking-wider block">Today's Highlight</span>
                    <h3 className="text-sm font-bold text-white">Signature Smash Burger</h3>
                    <p className="text-xs text-neutral-400">Double Angus • Aged Cheddar</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black text-white">$12.99</span>
                    <div className="text-[10px] text-emerald-400 flex items-center justify-end gap-1 font-medium">
                      <CheckCircle2 className="w-3 h-3" /> Ready in 12m
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Floating Hot Delivery Tag */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-[#161822] border border-white/15 p-3 sm:p-4 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-[#ff5c26]/20 border border-[#ff5c26]/30 flex items-center justify-center text-[#ff5c26]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase text-neutral-400 block tracking-wider">Fast Delivery</span>
                  <span className="text-xs sm:text-sm font-bold text-white">Average 25-35 Mins</span>
                </div>
              </div>

              {/* Floating Freshness Tag */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-[#161822] border border-white/15 p-3 sm:p-4 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase text-neutral-400 block tracking-wider">Farm Fresh</span>
                  <span className="text-xs sm:text-sm font-bold text-white">100% Organic Prime</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Trust Section directly below the hero */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#ff5c26]/30 hover:bg-white/[0.05] transition-all">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Leaf className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">Fresh Ingredients</h4>
                <p className="text-xs text-neutral-400 hidden sm:block">Hand-sourced daily</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#ff5c26]/30 hover:bg-white/[0.05] transition-all">
              <div className="w-11 h-11 rounded-xl bg-[#ff5c26]/10 border border-[#ff5c26]/20 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#ff5c26]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">Fast Delivery</h4>
                <p className="text-xs text-neutral-400 hidden sm:block">Piping hot in 30 mins</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#ff5c26]/30 hover:bg-white/[0.05] transition-all">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">Quality You Can Taste</h4>
                <p className="text-xs text-neutral-400 hidden sm:block">Zero shortcuts taken</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#ff5c26]/30 hover:bg-white/[0.05] transition-all">
              <div className="w-11 h-11 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5 text-rose-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">Loved by Foodies</h4>
                <p className="text-xs text-neutral-400 hidden sm:block">4.9/5 star community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

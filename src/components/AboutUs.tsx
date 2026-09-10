import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ChefHat, 
  Flame, 
  Award, 
  X,
  Leaf,
  ShieldCheck
} from 'lucide-react';

export const AboutUs: React.FC = () => {
  const [showLearnMore, setShowLearnMore] = useState(false);

  return (
    <section id="about" className="py-20 bg-[#0d0e12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Premium Kitchen Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=85"
                alt="BiteCraft artisanal kitchen culinary preparation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12]/80 via-transparent to-black/20" />

              {/* Floating Chef Badge */}
              <div className="absolute top-6 left-6 bg-[#12141c]/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/15 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ff5c26] flex items-center justify-center text-white">
                  <ChefHat className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#ff7a45] uppercase tracking-wider block">Master Craft</span>
                  <h4 className="text-xs font-bold text-white">Chef Marco DeLuca</h4>
                </div>
              </div>

              {/* Bottom Stat Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#14161f]/90 backdrop-blur-md p-5 rounded-2xl border border-white/10 grid grid-cols-3 gap-3 text-center">
                <div>
                  <span className="font-heading font-black text-xl text-[#ff5c26] block">100%</span>
                  <span className="text-[11px] text-neutral-400 font-medium">Fresh Daily</span>
                </div>
                <div className="border-x border-white/10">
                  <span className="font-heading font-black text-xl text-amber-400 block">72 hr</span>
                  <span className="text-[11px] text-neutral-400 font-medium">Dough Age</span>
                </div>
                <div>
                  <span className="font-heading font-black text-xl text-emerald-400 block">4.9 ★</span>
                  <span className="text-[11px] text-neutral-400 font-medium">Satisfaction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Brand Story Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5c26]/10 border border-[#ff5c26]/20 text-[#ff7a45] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Culinary Heritage</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-[1.15]">
              Food Made With Passion
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
              At BiteCraft, we believe great food starts with great ingredients. Every meal is prepared with care, bold flavors, and a passion for creating moments worth sharing.
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed">
              Founded by passionate culinary artists who grew tired of cookie-cutter fast food, BiteCraft bridges the gap between gourmet dining sophistication and accessible, craving-worthy comfort food. We never cut corners, never use frozen fillers, and always hand-craft every sauce in-house.
            </p>

            {/* 4 Brand Core Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-[#ff5c26] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Quality Ingredients</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Certified Angus beef & organic local farms.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-[#ff5c26] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Fresh Preparation</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Cooked immediately to your ticket.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-[#ff5c26] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Handcrafted Sauces</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Proprietary spice blends & secret recipe aiolis.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-[#ff5c26] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Customer Satisfaction</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">100% happiness taste guarantee.</p>
                </div>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="pt-2">
              <button
                id="about-learn-more-btn"
                onClick={() => setShowLearnMore(true)}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/15 hover:border-[#ff5c26]/50 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Learn More About Our Craft</span>
                <ArrowRight className="w-4 h-4 text-[#ff5c26]" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Learn More Modal */}
      {showLearnMore && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-opacity"
          onClick={() => setShowLearnMore(false)}
        >
          <div 
            className="bg-[#14161f] border border-white/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#ff5c26] flex items-center justify-center text-white">
                  <Flame className="w-4 h-4 fill-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white">The BiteCraft Kitchen Standard</h3>
              </div>
              <button
                onClick={() => setShowLearnMore(false)}
                className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 space-y-5 text-sm text-neutral-300 leading-relaxed">
              <p>
                At BiteCraft, “Crafted Fresh. Made to Crave” is more than a tagline — it represents our everyday operational standard across our kitchen brigade:
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex gap-3.5">
                  <Leaf className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-base">1. Direct-From-Farm Sourcing</h4>
                    <p className="text-xs text-neutral-400 mt-1">
                      Our produce is harvested from California and Pacific Northwest organic cooperatives, delivered every morning at 6:00 AM before our kitchens open.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex gap-3.5">
                  <Flame className="w-5 h-5 text-[#ff5c26] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-base">2. Cast-Iron High Heat Searing</h4>
                    <p className="text-xs text-neutral-400 mt-1">
                      Every smash burger patty is hand-weighed, seasoned with sea salt and black peppercorn, and seared on cast iron at 500°F for that signature crispy lace edge.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex gap-3.5">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-base">3. Zero Artificial Preservatives</h4>
                    <p className="text-xs text-neutral-400 mt-1">
                      Our brioche buns are baked without synthetic dough conditioners, and our house-aged cheeses are completely natural and free from additives.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setShowLearnMore(false)}
                  className="px-6 py-2.5 rounded-full bg-[#ff5c26] text-white font-semibold text-sm hover:bg-[#ff6e3a] transition-all"
                >
                  Close & Explore Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

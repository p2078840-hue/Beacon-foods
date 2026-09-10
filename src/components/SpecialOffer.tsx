import React, { useState, useEffect } from 'react';
import { Tag, Sparkles, Clock, ArrowRight, Check, Flame, Copy } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const SpecialOffer: React.FC = () => {
  const { applyPromoCode, setIsCartOpen, showToast } = useCart();
  const [claimed, setClaimed] = useState(false);

  // Dynamic daily countdown that counts down to midnight today
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 42,
    seconds: 15,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0);
      const diff = midnight.getTime() - now.getTime();

      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClaimOffer = () => {
    applyPromoCode('BITECRAFT20');
    setClaimed(true);
    showToast('Promo BITECRAFT20 copied & applied for 20% OFF!');
  };

  const copyCode = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('BITECRAFT20');
    showToast('Code BITECRAFT20 copied to clipboard!');
  };

  return (
    <section id="offers" className="py-20 bg-[#0a0b0e] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff5c26]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-br from-[#181a24] via-[#14151e] to-[#121319] shadow-2xl shadow-black/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-16">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5c26]/15 border border-[#ff5c26]/30 text-[#ff7a45] text-xs font-bold uppercase tracking-wider">
                <Tag className="w-3.5 h-3.5" />
                <span>Limited-Time Welcome Offer</span>
              </div>

              <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                Hungry for a Deal?
              </h2>

              <div className="space-y-2">
                <p className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  Get <span className="text-[#ff5c26] underline decoration-[#ff5c26]/40 underline-offset-8">20% OFF</span> Your First Order
                </p>
                <p className="text-neutral-300 text-sm sm:text-base font-normal max-w-xl">
                  Taste our signature smash burgers, artisan wood-fired pizzas, and gourmet sides. Use coupon code at checkout or click claim below to auto-apply.
                </p>
              </div>

              {/* Coupon Code Pill */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div 
                  onClick={copyCode}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-black/50 border border-dashed border-[#ff5c26]/50 text-white font-mono text-sm cursor-pointer hover:border-[#ff5c26] hover:bg-black/70 transition-all group"
                  title="Click to copy coupon code"
                >
                  <span className="text-neutral-400 text-xs uppercase font-sans">Code:</span>
                  <span className="font-bold text-[#ff7a45] tracking-wider">BITECRAFT20</span>
                  <Copy className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs text-neutral-400">Valid on orders over $25</span>
              </div>

              {/* Daily Window Countdown */}
              <div className="pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  <Clock className="w-4 h-4 text-[#ff5c26]" />
                  <span>Today's Discount Window Closes In:</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <span className="font-heading font-black text-xl text-white">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] uppercase font-bold text-neutral-400">Hours</span>
                  </div>
                  <span className="font-bold text-xl text-neutral-500">:</span>
                  <div className="flex flex-col items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <span className="font-heading font-black text-xl text-white">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] uppercase font-bold text-neutral-400">Mins</span>
                  </div>
                  <span className="font-bold text-xl text-neutral-500">:</span>
                  <div className="flex flex-col items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <span className="font-heading font-black text-xl text-[#ff5c26]">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] uppercase font-bold text-neutral-400">Secs</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  id="claim-offer-btn"
                  onClick={handleClaimOffer}
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base shadow-xl transition-all active:scale-95 ${
                    claimed
                      ? 'bg-emerald-500 text-white shadow-emerald-500/30'
                      : 'bg-gradient-to-r from-[#ff5c26] to-[#e8590c] hover:from-[#ff6e3a] hover:to-[#ff5c26] text-white shadow-[#ff5c26]/30 hover:scale-[1.02]'
                  }`}
                >
                  {claimed ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Offer Claimed & Applied (20% OFF)</span>
                    </>
                  ) : (
                    <>
                      <span>Claim Offer</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <button
                  onClick={() => setIsCartOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/15 text-sm font-semibold transition-all active:scale-95"
                >
                  <span>View Cart</span>
                </button>
              </div>
            </div>

            {/* Right Promotional Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square max-w-[420px] mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/15 group">
                <img
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=85"
                  alt="Delicious Crispy BiteCraft Meal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Overlaid deal badge */}
                <div className="absolute top-4 right-4 bg-[#ff5c26] text-white font-heading font-black text-sm px-4 py-2 rounded-2xl shadow-xl shadow-[#ff5c26]/40 flex items-center gap-1.5 rotate-3">
                  <Flame className="w-4 h-4 fill-white" />
                  <span>SAVE 20%</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ff7a45]">Craving Special</span>
                  <h3 className="font-heading font-bold text-xl text-white">Crispy Chicken & Golden Fries Feast</h3>
                  <p className="text-xs text-neutral-300 mt-1">Includes craft honey dip & refreshing artisan cooler</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, Flame, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Newsletter: React.FC = () => {
  const { showToast } = useCart();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please provide a valid email format');
      return;
    }

    setError('');
    setIsSubscribed(true);
    showToast('🎉 You are subscribed! Check your inbox for 15% off.');
  };

  return (
    <section className="py-16 bg-[#0c0d11] relative overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#181a24] via-[#151722] to-[#12131b] border border-white/10 p-8 sm:p-12 shadow-2xl">
          {/* Subtle background flare */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff5c26]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff5c26]/15 border border-[#ff5c26]/30 text-[#ff7a45] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VIP Foodie Perks</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
              Get the Good Stuff.
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
              Sign up for exclusive offers, new menu updates and delicious deals delivered straight to your inbox.
            </p>

            {isSubscribed ? (
              <div className="pt-4 flex flex-col items-center justify-center gap-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Welcome to the BiteCraft VIP Club!</span>
                </div>
                <p className="text-xs text-neutral-400">
                  We've sent your welcome voucher to <strong className="text-white">{email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setIsSubscribed(false);
                    setEmail('');
                  }}
                  className="text-xs text-[#ff7a45] underline mt-1"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="pt-3 max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-grow">
                    <Mail className="w-4 h-4 text-neutral-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder="Enter your email"
                      className="w-full pl-11 pr-4 py-3.5 rounded-full bg-black/50 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#ff5c26]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#ff5c26] to-[#e8590c] hover:from-[#ff6e3a] hover:to-[#ff5c26] text-white font-bold text-xs shadow-lg shadow-[#ff5c26]/20 active:scale-95 transition-all shrink-0 cursor-pointer"
                  >
                    <span>Subscribe</span>
                  </button>
                </div>
                {error && <p className="text-[11px] text-red-400 mt-2 text-center">{error}</p>}
                <span className="text-[11px] text-neutral-500 block mt-2.5">
                  Zero spam. Only fresh deals and invitations. Unsubscribe anytime.
                </span>
              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

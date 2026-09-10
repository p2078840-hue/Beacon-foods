import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Toast: React.FC = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="bg-[#181a24] border border-[#ff5c26]/40 text-white px-5 py-3.5 rounded-2xl shadow-2xl shadow-black/80 flex items-center gap-3 backdrop-blur-md">
        <div className="w-7 h-7 rounded-lg bg-[#ff5c26]/20 border border-[#ff5c26]/30 flex items-center justify-center text-[#ff5c26] shrink-0">
          <CheckCircle2 className="w-4 h-4" />
        </div>
        <span className="text-xs sm:text-sm font-semibold text-neutral-100">
          {toastMessage}
        </span>
      </div>
    </div>
  );
};

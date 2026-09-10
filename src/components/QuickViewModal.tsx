import React, { useState } from 'react';
import { X, Star, Plus, Minus, Flame, Leaf, Clock, Check, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const QuickViewModal: React.FC = () => {
  const { quickViewItem, setQuickViewItem, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [specialNote, setSpecialNote] = useState('');
  const [isAdded, setIsAdded] = useState(false);

  if (!quickViewItem) return null;

  const handleClose = () => {
    setQuickViewItem(null);
    setQuantity(1);
    setSpecialNote('');
    setIsAdded(false);
  };

  const handleAdd = () => {
    addToCart(quickViewItem, quantity, specialNote);
    setIsAdded(true);
    setTimeout(() => {
      handleClose();
    }, 800);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClick={handleClose}
    >
      <div 
        className="bg-[#141620] border border-white/15 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-[#ff5c26] text-white flex items-center justify-center transition-colors border border-white/15"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Photo side */}
          <div className="relative aspect-square sm:aspect-auto sm:h-full bg-neutral-900">
            <img
              src={quickViewItem.image}
              alt={quickViewItem.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141620] via-transparent to-transparent sm:hidden" />

            {quickViewItem.badge && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-[#ff5c26] text-white shadow-lg">
                {quickViewItem.badge}
              </span>
            )}
          </div>

          {/* Details side */}
          <div className="p-6 flex flex-col justify-between space-y-5">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="uppercase font-bold tracking-wider text-[#ff7a45]">
                  {quickViewItem.category}
                </span>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-white">{quickViewItem.rating}</span>
                  <span className="text-neutral-400">({quickViewItem.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-heading font-extrabold text-2xl text-white">
                {quickViewItem.name}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {quickViewItem.description}
              </p>

              {/* Badges / Metrics */}
              <div className="flex flex-wrap gap-2 mt-4 text-xs">
                {quickViewItem.prepTime && (
                  <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#ff5c26]" /> {quickViewItem.prepTime}
                  </span>
                )}
                {quickViewItem.calories && (
                  <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                    🔥 {quickViewItem.calories} kcal
                  </span>
                )}
                {quickViewItem.isVegetarian && (
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center gap-1">
                    <Leaf className="w-3.5 h-3.5" /> Vegetarian
                  </span>
                )}
                {quickViewItem.spicyLevel && quickViewItem.spicyLevel > 0 ? (
                  <span className="px-2.5 py-1 rounded-lg bg-red-500/15 border border-red-500/30 text-red-400 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5" /> Spicy Level {quickViewItem.spicyLevel}/3
                  </span>
                ) : null}
              </div>

              {/* Ingredients list */}
              {quickViewItem.ingredients && quickViewItem.ingredients.length > 0 && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block mb-1.5">
                    Key Ingredients:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {quickViewItem.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.04] text-neutral-300 border border-white/5"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Special Note Input */}
              <div className="mt-4">
                <label className="text-[11px] font-semibold text-neutral-400 block mb-1">
                  Special Kitchen Note (optional):
                </label>
                <input
                  type="text"
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}
                  placeholder="e.g. Extra sauce, no onions, gluten-aware"
                  className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#ff5c26]"
                />
              </div>
            </div>

            {/* Bottom: Quantity & Add to Cart */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">Price</span>
                <span className="font-heading font-black text-2xl text-white">
                  ${(quickViewItem.price * quantity).toFixed(2)}
                </span>
              </div>

              {/* Quantity picker */}
              <div className="flex items-center bg-black/40 border border-white/10 rounded-xl p-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center text-xs font-bold text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Add Button */}
              <button
                onClick={handleAdd}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold shadow-lg transition-all active:scale-95 ${
                  isAdded
                    ? 'bg-emerald-500 text-white shadow-emerald-500/30'
                    : 'bg-gradient-to-r from-[#ff5c26] to-[#e8590c] hover:from-[#ff6e3a] hover:to-[#ff5c26] text-white shadow-[#ff5c26]/20'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

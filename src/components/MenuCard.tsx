import React, { useState } from 'react';
import { Star, Plus, Check, Info, Flame, Leaf } from 'lucide-react';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const { addToCart, setQuickViewItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(item, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1200);
  };

  return (
    <div
      id={`food-card-${item.id}`}
      className="group relative bg-[#13151c] rounded-3xl border border-white/10 hover:border-[#ff5c26]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
    >
      {/* Top Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900 cursor-pointer" onClick={() => setQuickViewItem(item)}>
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient dark scrim for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#13151c] via-transparent to-black/30" />

        {/* Badges */}
        <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5 items-center z-10">
          {item.badge && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide bg-[#ff5c26] text-white shadow-md shadow-[#ff5c26]/30">
              {item.badge}
            </span>
          )}
          {item.isVegetarian && (
            <span className="px-2 py-1 rounded-full text-[11px] font-bold bg-emerald-500/90 text-white flex items-center gap-1 backdrop-blur-sm">
              <Leaf className="w-3 h-3" /> Veg
            </span>
          )}
          {item.spicyLevel && item.spicyLevel > 1 && (
            <span className="px-2 py-1 rounded-full text-[11px] font-bold bg-red-600/90 text-white flex items-center gap-1 backdrop-blur-sm">
              <Flame className="w-3 h-3" /> Hot
            </span>
          )}
        </div>

        {/* Quick View Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setQuickViewItem(item);
          }}
          aria-label={`View details for ${item.name}`}
          className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/60 hover:bg-[#ff5c26] text-white flex items-center justify-center backdrop-blur-md border border-white/15 transition-all opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0"
        >
          <Info className="w-4 h-4" />
        </button>

        {/* Prep Time pill */}
        {item.prepTime && (
          <span className="absolute bottom-3 right-3 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-black/70 text-neutral-300 backdrop-blur-md border border-white/10">
            ⏱ {item.prepTime}
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-xs font-bold text-white">{item.rating}</span>
              <span className="text-xs text-neutral-400">({item.reviewsCount})</span>
            </div>
            {item.calories && (
              <span className="text-xs text-neutral-400 font-medium">
                {item.calories} kcal
              </span>
            )}
          </div>

          {/* Food Title */}
          <h3 
            className="font-heading font-bold text-lg text-white group-hover:text-[#ff5c26] transition-colors line-clamp-1 cursor-pointer"
            onClick={() => setQuickViewItem(item)}
          >
            {item.name}
          </h3>

          {/* Short Description */}
          <p className="mt-1.5 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Price and Add to Cart Button */}
        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium block">
              Price
            </span>
            <span className="font-heading font-black text-xl text-white">
              ${item.price.toFixed(2)}
            </span>
          </div>

          <button
            id={`add-to-cart-${item.id}`}
            onClick={handleAdd}
            aria-label={`Add ${item.name} to cart`}
            className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold transition-all shadow-md active:scale-95 ${
              isAdded
                ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                : 'bg-gradient-to-r from-[#ff5c26] to-[#e8590c] hover:from-[#ff6e3a] hover:to-[#ff5c26] text-white shadow-[#ff5c26]/20 hover:shadow-[#ff5c26]/40 hover:scale-[1.03]'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added!</span>
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
  );
};

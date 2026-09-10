import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Star, Plus, ArrowRight, AlertCircle, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { MENU_ITEMS } from '../data/menuData';
import { MenuItem } from '../types';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, addToCart, setQuickViewItem } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setSearchTerm('');
    }
  }, [isSearchOpen]);

  // Keyboard shortcut / close on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const results = searchTerm.trim()
    ? MENU_ITEMS.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.ingredients?.some((ing) => ing.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 p-4">
      <div 
        className="bg-[#141620] border border-white/15 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Box */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#ff5c26] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search burgers, pizzas, pastas, drinks, ingredients..."
            className="w-full bg-transparent border-none text-white text-base placeholder-neutral-500 focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 text-neutral-400 hover:text-white rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-neutral-400 border border-white/10 hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5">
          {!searchTerm.trim() ? (
            <div className="py-8 text-center space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block">
                Popular Quick Searches
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2 max-w-md mx-auto">
                {['Signature Smash Burger', 'Alfredo Pasta', 'Margherita Pizza', 'Crispy Chicken', 'Truffle Fries'].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setSearchTerm(term)}
                      className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#ff5c26]/20 hover:border-[#ff5c26]/40 text-xs text-neutral-300 hover:text-white border border-white/10 transition-colors"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 mx-auto">
                <AlertCircle className="w-6 h-6 text-[#ff7a45]" />
              </div>
              <h4 className="font-heading font-bold text-base text-white">
                No delicious matches found. Try another search.
              </h4>
              <p className="text-xs text-neutral-400">
                Check spelling or browse our favorites below.
              </p>
              <div className="flex justify-center gap-2 pt-1">
                {['Burgers', 'Pizza', 'Pasta', 'Chicken'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSearchTerm(cat)}
                    className="text-xs text-[#ff7a45] underline underline-offset-4 font-semibold"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block mb-1">
                Found {results.length} dishes matching "{searchTerm}"
              </span>

              {results.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setQuickViewItem(item);
                    setIsSearchOpen(false);
                  }}
                  className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-[#ff5c26]/30 cursor-pointer transition-all group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-xl object-cover shrink-0 border border-white/10"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-heading font-bold text-sm text-white group-hover:text-[#ff5c26] transition-colors truncate">
                          {item.name}
                        </h4>
                        {item.badge && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#ff5c26]/20 text-[#ff7a45] font-bold">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-neutral-400 mt-0.5">
                        <span className="font-mono text-white font-bold">${item.price.toFixed(2)}</span>
                        <span>•</span>
                        <span className="flex items-center gap-0.5 text-amber-400">
                          <Star className="w-3 h-3 fill-amber-400" />
                          <span>{item.rating}</span>
                        </span>
                        <span>•</span>
                        <span className="capitalize">{item.category}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(item, 1);
                    }}
                    className="p-2 rounded-xl bg-[#ff5c26]/20 hover:bg-[#ff5c26] text-[#ff7a45] hover:text-white transition-colors ml-3 shrink-0"
                    title="Add to cart"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

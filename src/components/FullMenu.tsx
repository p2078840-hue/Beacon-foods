import React, { useState, useMemo } from 'react';
import { Search, X, SlidersHorizontal, ArrowUpDown, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { Category, MenuItem } from '../types';
import { CategoryFilter } from './CategoryFilter';
import { MenuCard } from './MenuCard';

type SortOption = 'popular' | 'price-low' | 'price-high' | 'rating';

export const FullMenu: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [onlyVegetarian, setOnlyVegetarian] = useState(false);
  const [onlySpicy, setOnlySpicy] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('popular');

  // Filter and sort items
  const filteredAndSortedItems = useMemo(() => {
    let result = [...MENU_ITEMS];

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.ingredients?.some((ing) => ing.toLowerCase().includes(q))
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((item) => item.category === selectedCategory);
    }

    // Vegetarian filter
    if (onlyVegetarian) {
      result = result.filter((item) => item.isVegetarian);
    }

    // Spicy filter
    if (onlySpicy) {
      result = result.filter((item) => (item.spicyLevel ?? 0) > 0);
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
      default:
        result.sort((a, b) => b.reviewsCount - a.reviewsCount);
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, onlyVegetarian, onlySpicy, sortBy]);

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setOnlyVegetarian(false);
    setOnlySpicy(false);
    setSortBy('popular');
  };

  return (
    <section id="menu" className="py-20 bg-[#0f1014] relative border-t border-white/5">
      <div id="full-menu-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#ff7a45] px-3.5 py-1.5 rounded-full bg-[#ff5c26]/10 border border-[#ff5c26]/20 inline-block mb-3">
            Interactive Catalog
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Explore Full Menu
          </h2>
          <p className="mt-3 text-base text-neutral-400 font-normal">
            Search our complete culinary lineup. Filter by dietary preferences and add your favorites straight to your cart.
          </p>
        </div>

        {/* Search Bar & Controls Box */}
        <div className="bg-[#14161f] border border-white/10 rounded-3xl p-5 sm:p-6 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-grow max-w-xl">
              <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="menu-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search food by name, ingredient (e.g. burger, truffle, pasta)..."
                className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#ff5c26] focus:ring-1 focus:ring-[#ff5c26] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white p-1 rounded-full hover:bg-white/10"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort & Dietary Toggles */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Dietary Toggles */}
              <button
                onClick={() => setOnlyVegetarian(!onlyVegetarian)}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                  onlyVegetarian
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                    : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10'
                }`}
              >
                🌱 Vegetarian Only
              </button>

              <button
                onClick={() => setOnlySpicy(!onlySpicy)}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                  onlySpicy
                    ? 'bg-red-500/20 border-red-500 text-red-300'
                    : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10'
                }`}
              >
                🌶️ Spicy Only
              </button>

              {/* Sort By Dropdown */}
              <div className="relative inline-flex items-center">
                <select
                  id="menu-sort-dropdown"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="appearance-none bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold py-2.5 pl-3.5 pr-8 rounded-xl focus:outline-none focus:border-[#ff5c26] cursor-pointer"
                >
                  <option value="popular" className="bg-[#14161f]">Sort: Most Popular</option>
                  <option value="rating" className="bg-[#14161f]">Sort: Top Rated</option>
                  <option value="price-low" className="bg-[#14161f]">Sort: Price Low → High</option>
                  <option value="price-high" className="bg-[#14161f]">Sort: Price High → Low</option>
                </select>
                <ArrowUpDown className="w-3.5 h-3.5 text-neutral-400 absolute right-2.5 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-5 pt-5 border-t border-white/5">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </div>

        {/* Results Counter & Active Filter info */}
        <div className="flex items-center justify-between mb-6 px-1">
          <span className="text-xs sm:text-sm text-neutral-400">
            Showing <strong className="text-white font-bold">{filteredAndSortedItems.length}</strong> items
            {searchQuery && <span> matching "<span className="text-[#ff7a45]">{searchQuery}</span>"</span>}
          </span>

          {(searchQuery || selectedCategory !== 'all' || onlyVegetarian || onlySpicy) && (
            <button
              onClick={clearAllFilters}
              className="text-xs text-[#ff7a45] hover:text-[#ff9266] flex items-center gap-1.5 font-medium underline underline-offset-4"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset all filters</span>
            </button>
          )}
        </div>

        {/* Empty State when no results found */}
        {filteredAndSortedItems.length === 0 ? (
          <div className="bg-[#13151c] rounded-3xl border border-white/10 p-12 text-center max-w-xl mx-auto my-8">
            <div className="w-16 h-16 rounded-2xl bg-[#ff5c26]/10 border border-[#ff5c26]/20 flex items-center justify-center text-[#ff5c26] mx-auto mb-4">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-white mb-2">
              No delicious matches found.
            </h3>
            <p className="text-sm text-neutral-400 mb-6">
              We couldn't find any dishes matching "{searchQuery}". Try another search or choose from popular favorites below.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              <span className="text-xs text-neutral-500 mr-1">Popular searches:</span>
              {['Smash Burger', 'Alfredo', 'Margherita', 'Chicken', 'Fries'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-xs font-medium text-neutral-300 border border-white/10"
                >
                  {tag}
                </button>
              ))}
            </div>
            <button
              onClick={clearAllFilters}
              className="px-6 py-2.5 rounded-full bg-[#ff5c26] hover:bg-[#ff6e3a] text-white text-xs font-bold transition-all"
            >
              Clear Search & Show All
            </button>
          </div>
        ) : (
          /* Food Cards Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

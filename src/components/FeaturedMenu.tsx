import React, { useState, useMemo } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { Category } from '../types';
import { CategoryFilter } from './CategoryFilter';
import { MenuCard } from './MenuCard';

export const FeaturedMenu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  // Calculate item counts per category for the filter badges
  const itemCounts = useMemo(() => {
    const counts: Record<Category, number> = {
      all: MENU_ITEMS.length,
      burgers: 0,
      pizza: 0,
      pasta: 0,
      chicken: 0,
      sides: 0,
      drinks: 0,
    };
    MENU_ITEMS.forEach((item) => {
      if (counts[item.category] !== undefined) {
        counts[item.category]++;
      }
    });
    return counts;
  }, []);

  // Filter items
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return MENU_ITEMS;
    }
    return MENU_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const scrollToFullMenu = () => {
    const el = document.querySelector('#full-menu-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="favorites" className="py-20 bg-[#0d0e12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5c26]/10 border border-[#ff5c26]/20 text-[#ff7a45] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Selection</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Our Favorites
          </h2>

          <p className="mt-3 text-base text-neutral-400 font-normal">
            Customer-loved dishes crafted fresh every day with bold artisanal flavor.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-10">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            itemCounts={itemCounts}
          />
        </div>

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* Action to explore full search & full menu */}
        <div className="mt-14 text-center">
          <button
            onClick={scrollToFullMenu}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-white border border-white/15 hover:border-[#ff5c26]/40 text-sm font-semibold transition-all hover:scale-[1.02] active:scale-95"
          >
            <span>View Full Interactive Menu & Search</span>
            <ArrowRight className="w-4 h-4 text-[#ff5c26]" />
          </button>
        </div>
      </div>
    </section>
  );
};

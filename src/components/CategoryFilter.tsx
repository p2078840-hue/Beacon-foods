import React from 'react';
import { Category } from '../types';
import { Utensils, Sandwich, Pizza, Soup, Drumstick, Cookie, Wine } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
  itemCounts?: Record<Category, number>;
}

const CATEGORIES: { id: Category; label: string; icon: React.FC<{ className?: string }> }[] = [
  { id: 'all', label: 'All', icon: Utensils },
  { id: 'burgers', label: 'Burgers', icon: Sandwich },
  { id: 'pizza', label: 'Pizza', icon: Pizza },
  { id: 'pasta', label: 'Pasta', icon: Soup },
  { id: 'chicken', label: 'Chicken', icon: Drumstick },
  { id: 'sides', label: 'Sides', icon: Cookie },
  { id: 'drinks', label: 'Drinks', icon: Wine },
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  itemCounts
}) => {
  return (
    <div className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 scrollbar-none no-scrollbar justify-start md:justify-center">
      {CATEGORIES.map(({ id, label, icon: Icon }) => {
        const isActive = selectedCategory === id;
        const count = itemCounts ? itemCounts[id] : undefined;

        return (
          <button
            key={id}
            id={`filter-category-${id}`}
            onClick={() => onSelectCategory(id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 active:scale-95 ${
              isActive
                ? 'bg-gradient-to-r from-[#ff5c26] to-[#e8590c] text-white shadow-lg shadow-[#ff5c26]/25 scale-[1.02]'
                : 'bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 hover:border-white/20'
            }`}
          >
            <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-neutral-400'}`} />
            <span>{label}</span>
            {count !== undefined && (
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-black/30 text-neutral-400'
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

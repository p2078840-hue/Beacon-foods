import React from 'react';
import { Leaf, Flame, Zap, Award, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/restaurantData';

export const WhyChoose: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Leaf className="w-6 h-6 text-emerald-400" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#ff5c26]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#f59e0b]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-amber-300" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#ff5c26]" />;
    }
  };

  return (
    <section className="py-20 bg-[#0a0b0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#ff7a45] px-3.5 py-1.5 rounded-full bg-[#ff5c26]/10 border border-[#ff5c26]/20 inline-block mb-3">
            The BiteCraft Promise
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Why Choose BiteCraft
          </h2>
          <p className="mt-3 text-base text-neutral-400 font-normal">
            We hold ourselves to higher restaurant standards so every single meal is an experience you crave again.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-[#13151d] hover:bg-[#161822] rounded-3xl p-7 border border-white/10 hover:border-[#ff5c26]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                {/* Top Icon Pill */}
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#ff5c26]/30 transition-transform">
                  {getIcon(item.icon)}
                </div>

                {/* Index Step Number */}
                <span className="text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-wider block mb-1">
                  Pillar 0{index + 1}
                </span>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#ff5c26] transition-colors mb-2">
                  {item.title}
                </h3>

                {/* Tagline Quote */}
                <p className="text-sm font-semibold text-neutral-300 mb-3 italic">
                  "{item.description}"
                </p>

                {/* Extended Details */}
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  {item.details}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400 font-medium">
                <span>Verified Standard</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5c26]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

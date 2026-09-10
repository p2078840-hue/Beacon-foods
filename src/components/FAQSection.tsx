import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, Search } from 'lucide-react';
import { FAQ_ITEMS } from '../data/restaurantData';

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [filterQuery, setFilterQuery] = useState('');

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(filterQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 bg-[#0a0b0e] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#ff7a45] px-3.5 py-1.5 rounded-full bg-[#ff5c26]/10 border border-[#ff5c26]/20 inline-block mb-3">
            <HelpCircle className="w-3.5 h-3.5 inline mr-1" />
            Got Questions?
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-neutral-400 font-normal">
            Everything you need to know about our ordering process, fresh ingredients, and rapid delivery.
          </p>

          {/* Quick FAQ search */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Search questions (e.g. delivery, vegetarian, cancel)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#ff5c26]"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#141620] border-[#ff5c26]/30 shadow-lg shadow-black/40'
                    : 'bg-[#12131b] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  id={`faq-toggle-${faq.id}`}
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#ff5c26] text-white rotate-180'
                        : 'bg-white/5 text-neutral-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5">
          <p className="text-xs text-neutral-400">
            Still have questions? Our customer care specialists are available 7 days a week.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block mt-2 text-xs font-bold text-[#ff7a45] hover:text-[#ff9266] underline underline-offset-4"
          >
            Contact Customer Support &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};

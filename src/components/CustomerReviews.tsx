import React, { useState } from 'react';
import { Star, MessageSquare, Plus, CheckCircle2, X, Sparkles } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/restaurantData';
import { CustomerReview } from '../types';
import { useCart } from '../context/CartContext';

export const CustomerReviews: React.FC = () => {
  const { showToast } = useCart();
  const [reviews, setReviews] = useState<CustomerReview[]>(CUSTOMER_REVIEWS);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newDish, setNewDish] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) return;

    const newRev: CustomerReview = {
      id: 'rev-' + Date.now(),
      name: newName.trim(),
      role: newRole.trim() || 'Verified Food Lover',
      location: 'San Francisco, CA',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      rating: newRating,
      date: 'Just now',
      review: newComment.trim(),
      dishOrdered: newDish.trim() || 'Signature Smash Burger',
      verified: true
    };

    setReviews([newRev, ...reviews]);
    setShowAddModal(false);
    setNewName('');
    setNewRole('');
    setNewDish('');
    setNewComment('');
    showToast('Thank you for sharing your review! ⭐');
  };

  return (
    <section className="py-20 bg-[#0d0e12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5c26]/10 border border-[#ff5c26]/20 text-[#ff7a45] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Experiences</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              What Our Customers Say
            </h2>
            <p className="mt-3 text-base text-neutral-400 font-normal max-w-xl">
              From our crispy smash burgers to handcrafted pasta bowls, hear why diners make BiteCraft their top craving.
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/15 hover:border-[#ff5c26]/40 transition-all active:scale-95 shrink-0 self-start md:self-auto"
          >
            <Plus className="w-4 h-4 text-[#ff5c26]" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#14161f] border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/60 group"
            >
              <div>
                {/* Stars and date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-neutral-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-500 font-mono">{rev.date}</span>
                </div>

                {/* Dish ordered tag */}
                <div className="mb-3">
                  <span className="inline-block text-[11px] font-semibold text-[#ff7a45] bg-[#ff5c26]/10 px-2.5 py-0.5 rounded-full">
                    Ordered: {rev.dishOrdered}
                  </span>
                </div>

                {/* Review body */}
                <p className="text-sm text-neutral-300 leading-relaxed font-normal italic mb-6">
                  "{rev.review}"
                </p>
              </div>

              {/* Customer info */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/15"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-heading font-bold text-sm text-white truncate">
                      {rev.name}
                    </h4>
                    {rev.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" title="Verified Customer" />
                    )}
                  </div>
                  <p className="text-[11px] text-neutral-400 truncate">{rev.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal */}
      {showAddModal && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowAddModal(false)}
        >
          <div 
            className="bg-[#14161f] border border-white/15 rounded-3xl max-w-lg w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#ff5c26]" />
                <span>Share Your BiteCraft Experience</span>
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-4 mt-5">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Jordan Lee"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-[#ff5c26]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Dish You Ordered</label>
                <input
                  type="text"
                  value={newDish}
                  onChange={(e) => setNewDish(e.target.value)}
                  placeholder="e.g. Signature Smash Burger & Fries"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-[#ff5c26]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Rating</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewRating(star)}
                      className="p-1 text-amber-400 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-6 h-6 ${star <= newRating ? 'fill-amber-400 text-amber-400' : 'text-neutral-600'}`}
                      />
                    </button>
                  ))}
                  <span className="text-xs text-neutral-400 ml-2 font-bold">{newRating} of 5 Stars</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Your Review *</label>
                <textarea
                  rows={3}
                  required
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Tell us about the flavors, crispness, and delivery..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-[#ff5c26]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-neutral-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#ff5c26] text-white text-xs font-bold hover:bg-[#ff6e3a] transition-all"
                >
                  Post Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

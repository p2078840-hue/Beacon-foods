import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Tag, 
  Check, 
  Sparkles,
  UtensilsCrossed
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    discountAmount,
    deliveryFee,
    total,
    promoCode,
    discountPercent,
    promoError,
    applyPromoCode,
    removePromoCode,
    setIsCheckoutOpen
  } = useCart();

  const [inputCode, setInputCode] = useState('');

  if (!isCartOpen) return null;

  const handleApplyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    applyPromoCode(inputCode);
    setInputCode('');
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Amount needed for free delivery
  const neededForFreeDelivery = Math.max(0, 35 - subtotal);
  const deliveryProgress = Math.min(100, (subtotal / 35) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        id="cart-backdrop"
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#12141c] border-l border-white/10 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#ff5c26]/20 border border-[#ff5c26]/30 flex items-center justify-center text-[#ff5c26]">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white">Your Cart</h3>
                <span className="text-xs text-neutral-400">
                  {items.length} {items.length === 1 ? 'item' : 'items'} selected
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {items.length > 0 && (
                <button
                  onClick={clearCart}
                  title="Clear all cart items"
                  className="text-xs text-neutral-400 hover:text-red-400 p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  Clear all
                </button>
              )}
              <button
                id="cart-close-btn"
                onClick={() => setIsCartOpen(false)}
                aria-label="Close cart drawer"
                className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Free Delivery Bar */}
          {items.length > 0 && (
            <div className="bg-[#181a24] px-6 py-3 border-b border-white/5">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-neutral-300 font-medium">
                  {neededForFreeDelivery === 0 ? (
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Free delivery unlocked!
                    </span>
                  ) : (
                    <span>
                      Add <strong className="text-white">${neededForFreeDelivery.toFixed(2)}</strong> more for free delivery
                    </span>
                  )}
                </span>
                <span className="text-[10px] text-neutral-400 font-mono">
                  {Math.round(deliveryProgress)}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#ff5c26] to-emerald-400 transition-all duration-500 rounded-full"
                  style={{ width: `${deliveryProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* Cart Items List or Empty State */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-white mb-1">
                    Your cart is empty
                  </h4>
                  <p className="text-xs text-neutral-400 max-w-xs">
                    You haven't added any dishes yet. Explore our menu to find your next craving.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    const el = document.querySelector('#menu');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff5c26] text-white text-xs font-bold shadow-lg shadow-[#ff5c26]/20 active:scale-95"
                >
                  <UtensilsCrossed className="w-4 h-4" />
                  <span>Browse Our Favorites</span>
                </button>
              </div>
            ) : (
              items.map(({ item, quantity, specialInstructions }) => (
                <div
                  key={item.id}
                  className="bg-[#161822] border border-white/10 rounded-2xl p-3.5 flex gap-3.5 items-center justify-between"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0 border border-white/10"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-white truncate">{item.name}</h4>
                    <span className="text-xs font-black text-[#ff7a45]">
                      ${item.price.toFixed(2)}
                    </span>
                    {specialInstructions && (
                      <p className="text-[10px] text-neutral-400 italic truncate mt-0.5">
                        Note: {specialInstructions}
                      </p>
                    )}

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2.5 mt-2">
                      <div className="flex items-center bg-black/40 border border-white/10 rounded-lg p-0.5">
                        <button
                          onClick={() => updateQuantity(item.id, quantity - 1)}
                          aria-label="Decrease quantity"
                          className="w-6 h-6 rounded flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 active:scale-95"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center text-xs font-bold text-white">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, quantity + 1)}
                          aria-label="Increase quantity"
                          className="w-6 h-6 rounded flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 active:scale-95"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs text-neutral-400 font-mono">
                        = ${(item.price * quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Remove button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.name} from cart`}
                    className="p-2 text-neutral-500 hover:text-red-400 hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer with Calculations and Actions */}
          {items.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-[#161822] space-y-4">
              {/* Promo Code Box */}
              <div>
                {promoCode ? (
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                      <Check className="w-4 h-4" />
                      <span>Code <strong>{promoCode}</strong> applied ({discountPercent}% off)</span>
                    </div>
                    <button
                      onClick={removePromoCode}
                      className="text-neutral-400 hover:text-white text-xs underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCode} className="flex gap-2">
                    <div className="relative flex-grow">
                      <Tag className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={inputCode}
                        onChange={(e) => setInputCode(e.target.value)}
                        placeholder="Promo code (try BITECRAFT20)"
                        className="w-full pl-8 pr-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#ff5c26]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold border border-white/10 active:scale-95 transition-all"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {promoError && (
                  <p className="text-[11px] text-red-400 mt-1">{promoError}</p>
                )}
              </div>

              {/* Order Calculations */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-neutral-400">
                  <span>Subtotal</span>
                  <span className="text-white font-medium">${subtotal.toFixed(2)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount ({discountPercent}%)</span>
                    <span className="font-medium">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-neutral-400">
                  <span>Estimated Delivery</span>
                  <span className="text-white font-medium">
                    {deliveryFee === 0 ? (
                      <strong className="text-emerald-400">FREE</strong>
                    ) : (
                      `$${deliveryFee.toFixed(2)}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-white/10">
                  <span>Total</span>
                  <span className="font-heading font-black text-lg text-[#ff7a45]">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  id="cart-checkout-btn"
                  onClick={handleProceedToCheckout}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-gradient-to-r from-[#ff5c26] to-[#e8590c] hover:from-[#ff6e3a] hover:to-[#ff5c26] text-white font-bold text-sm shadow-xl shadow-[#ff5c26]/25 active:scale-95 transition-all"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="cart-continue-btn"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-2.5 text-center text-xs text-neutral-400 hover:text-white transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

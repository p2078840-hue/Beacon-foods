import React, { useState } from 'react';
import { 
  X, 
  CreditCard, 
  Banknote, 
  Smartphone, 
  ShieldCheck, 
  ArrowRight, 
  MapPin, 
  Phone, 
  User, 
  Mail, 
  FileText,
  AlertCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CheckoutFormData, ConfirmedOrder } from '../types';

export const CheckoutModal: React.FC = () => {
  const {
    items,
    subtotal,
    discountAmount,
    deliveryFee,
    total,
    isCheckoutOpen,
    setIsCheckoutOpen,
    clearCart,
    setLastConfirmedOrder
  } = useCart();

  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: 'Jane Doe',
    phoneNumber: '(415) 555-0199',
    email: 'jane.doe@example.com',
    deliveryAddress: '742 Evergreen Terrace, Apt 4B',
    city: 'San Francisco',
    specialInstructions: 'Ring doorbell twice. Please leave at front door.',
    paymentMethod: 'card'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutOpen) return null;

  const validate = () => {
    const errs: Partial<Record<keyof CheckoutFormData, string>> = {};

    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone Number is required';
    } else if (formData.phoneNumber.trim().length < 7) {
      errs.phoneNumber = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.deliveryAddress.trim()) errs.deliveryAddress = 'Delivery address is required';
    if (!formData.city.trim()) errs.city = 'City is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate real order dispatch
    setTimeout(() => {
      const orderId = 'BC-' + Math.floor(100000 + Math.random() * 900000);
      const confirmed: ConfirmedOrder = {
        orderId,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        customer: { ...formData },
        items: [...items],
        subtotal,
        discount: discountAmount,
        deliveryFee,
        total,
        estimatedDeliveryTime: '25-35 minutes'
      };

      setLastConfirmedOrder(confirmed);
      clearCart();
      setIsSubmitting(false);
      setIsCheckoutOpen(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div className="bg-[#13151f] border border-white/15 rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between shrink-0 bg-[#161824]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#ff5c26]/20 border border-[#ff5c26]/30 flex items-center justify-center text-[#ff5c26]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-white">Complete Your Order</h3>
              <span className="text-xs text-neutral-400">
                Safe & encrypted checkout • BiteCraft Kitchen Dispatch
              </span>
            </div>
          </div>

          <button
            id="checkout-close-btn"
            onClick={() => setIsCheckoutOpen(false)}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 flex-1">
          <form id="checkout-form" onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left 7 cols: Customer & Delivery Details */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Delivery Details */}
              <div className="space-y-4">
                <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#ff7a45] flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>1. Delivery Information</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#ff5c26] ${
                          errors.fullName ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                    </div>
                    {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="(415) 000-0000"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#ff5c26] ${
                          errors.phoneNumber ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                    </div>
                    {errors.phoneNumber && <p className="text-[11px] text-red-400 mt-1">{errors.phoneNumber}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#ff5c26] ${
                          errors.email ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                    </div>
                    {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  {/* Address */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Delivery Address *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={formData.deliveryAddress}
                        onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                        placeholder="Street, Building, Apt #..."
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#ff5c26] ${
                          errors.deliveryAddress ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                    </div>
                    {errors.deliveryAddress && <p className="text-[11px] text-red-400 mt-1">{errors.deliveryAddress}</p>}
                  </div>

                  {/* City */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      City / Area *
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. San Francisco"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-black/40 border text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#ff5c26] ${
                        errors.city ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.city && <p className="text-[11px] text-red-400 mt-1">{errors.city}</p>}
                  </div>

                  {/* Special Instructions */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Special Kitchen or Delivery Instructions
                    </label>
                    <div className="relative">
                      <FileText className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3" />
                      <textarea
                        rows={2}
                        value={formData.specialInstructions}
                        onChange={(e) => setFormData({ ...formData, specialInstructions: e.target.value })}
                        placeholder="e.g. Leave at reception, extra dipping sauce, gate code #1234"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#ff5c26]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-3 pt-2">
                <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#ff7a45] flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  <span>2. Payment Option</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Card Payment */}
                  <label
                    className={`cursor-pointer p-4 rounded-2xl border flex flex-col items-center justify-center text-center gap-2 transition-all ${
                      formData.paymentMethod === 'card'
                        ? 'bg-[#ff5c26]/10 border-[#ff5c26] text-white shadow-lg shadow-[#ff5c26]/10'
                        : 'bg-white/5 border-white/10 text-neutral-400 hover:bg-white/10'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                      className="sr-only"
                    />
                    <CreditCard className={`w-5 h-5 ${formData.paymentMethod === 'card' ? 'text-[#ff5c26]' : 'text-neutral-400'}`} />
                    <span className="text-xs font-bold text-white">Credit / Debit</span>
                    <span className="text-[10px] text-neutral-400">Visa, MC, Amex</span>
                  </label>

                  {/* Cash on Delivery */}
                  <label
                    className={`cursor-pointer p-4 rounded-2xl border flex flex-col items-center justify-center text-center gap-2 transition-all ${
                      formData.paymentMethod === 'cod'
                        ? 'bg-[#ff5c26]/10 border-[#ff5c26] text-white shadow-lg shadow-[#ff5c26]/10'
                        : 'bg-white/5 border-white/10 text-neutral-400 hover:bg-white/10'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                      className="sr-only"
                    />
                    <Banknote className={`w-5 h-5 ${formData.paymentMethod === 'cod' ? 'text-[#ff5c26]' : 'text-neutral-400'}`} />
                    <span className="text-xs font-bold text-white">Cash on Delivery</span>
                    <span className="text-[10px] text-neutral-400">Pay at your doorstep</span>
                  </label>

                  {/* Online / Digital Wallets */}
                  <label
                    className={`cursor-pointer p-4 rounded-2xl border flex flex-col items-center justify-center text-center gap-2 transition-all ${
                      formData.paymentMethod === 'online'
                        ? 'bg-[#ff5c26]/10 border-[#ff5c26] text-white shadow-lg shadow-[#ff5c26]/10'
                        : 'bg-white/5 border-white/10 text-neutral-400 hover:bg-white/10'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="online"
                      checked={formData.paymentMethod === 'online'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'online' })}
                      className="sr-only"
                    />
                    <Smartphone className={`w-5 h-5 ${formData.paymentMethod === 'online' ? 'text-[#ff5c26]' : 'text-neutral-400'}`} />
                    <span className="text-xs font-bold text-white">Online Payment</span>
                    <span className="text-[10px] text-neutral-400">Apple Pay / Google Pay</span>
                  </label>
                </div>

                <p className="text-[11px] text-neutral-400 flex items-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Frontend demo environment — ready for Stripe/Square API webhook integration.</span>
                </p>
              </div>

            </div>

            {/* Right 5 cols: Order Summary Box */}
            <div className="lg:col-span-5 bg-[#161824] rounded-2xl p-5 border border-white/10 flex flex-col justify-between space-y-4">
              <div>
                <h4 className="font-heading font-bold text-sm text-white mb-3 flex items-center justify-between">
                  <span>Order Summary</span>
                  <span className="text-xs text-neutral-400 font-mono">{items.length} items</span>
                </h4>

                {/* Items scroll */}
                <div className="max-h-52 overflow-y-auto space-y-2.5 pr-1 mb-4 divide-y divide-white/5">
                  {items.map(({ item, quantity }) => (
                    <div key={item.id} className="pt-2 first:pt-0 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-white/10 text-white font-mono font-bold text-[11px] flex items-center justify-center">
                          {quantity}x
                        </span>
                        <span className="text-neutral-200 font-medium truncate max-w-[160px]">
                          {item.name}
                        </span>
                      </div>
                      <span className="font-mono text-white font-bold">
                        ${(item.price * quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Subtotals */}
                <div className="space-y-2 border-t border-white/10 pt-3 text-xs">
                  <div className="flex justify-between text-neutral-400">
                    <span>Subtotal</span>
                    <span className="text-white">${subtotal.toFixed(2)}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-400">
                      <span>Welcome Discount</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-neutral-400">
                    <span>Delivery Fee</span>
                    <span className="text-white font-medium">
                      {deliveryFee === 0 ? <strong className="text-emerald-400">FREE</strong> : `$${deliveryFee.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="flex justify-between text-base font-bold text-white border-t border-white/10 pt-3">
                    <span>Grand Total</span>
                    <span className="font-heading font-black text-xl text-[#ff5c26]">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Time estimate */}
                <div className="mt-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5 text-xs text-neutral-300">
                  <Clock className="w-4 h-4 text-[#ff5c26] shrink-0" />
                  <span>Estimated Delivery Time: <strong>25–35 Mins</strong></span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                id="place-order-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-gradient-to-r from-[#ff5c26] to-[#e8590c] hover:from-[#ff6e3a] hover:to-[#ff5c26] text-white font-bold text-base shadow-xl shadow-[#ff5c26]/30 active:scale-95 transition-all disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing Order...</span>
                  </div>
                ) : (
                  <>
                    <span>Place Order (${total.toFixed(2)})</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Receipt, 
  ChefHat, 
  Bike, 
  Home, 
  Sparkles, 
  X,
  PhoneCall
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const OrderConfirmationModal: React.FC = () => {
  const { lastConfirmedOrder, setLastConfirmedOrder } = useCart();

  if (!lastConfirmedOrder) return null;

  const handleClose = () => {
    setLastConfirmedOrder(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#141620] border border-white/15 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden my-auto p-6 sm:p-8 relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Banner */}
        <div className="text-center space-y-3 pb-6 border-b border-white/10">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white">
            Order Confirmed! 🎉
          </h2>

          <p className="text-sm sm:text-base text-neutral-300">
            Thank you for choosing <span className="text-[#ff7a45] font-bold">BiteCraft</span>.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
            <span>Order #{lastConfirmedOrder.orderId}</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">Kitchen Preparing</span>
          </div>
        </div>

        {/* Live Delivery Progress Tracker */}
        <div className="py-6 border-b border-white/10">
          <div className="flex items-center justify-between text-xs text-neutral-400 font-semibold uppercase tracking-wider mb-4">
            <span className="flex items-center gap-1.5 text-white">
              <Clock className="w-4 h-4 text-[#ff5c26]" />
              Estimated Delivery: <strong>{lastConfirmedOrder.estimatedDeliveryTime}</strong>
            </span>
            <span className="text-[#ff7a45] font-mono">Arriving Hot</span>
          </div>

          {/* 4-Step Timeline */}
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 z-0" />
            <div className="absolute top-1/2 left-0 w-1/3 h-1 bg-gradient-to-r from-emerald-500 to-[#ff5c26] -translate-y-1/2 z-0" />

            <div className="relative z-10 flex justify-between">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-emerald-500/30">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold text-white mt-2">Confirmed</span>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-[#ff5c26] text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-[#ff5c26]/30 animate-pulse">
                  <ChefHat className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold text-[#ff7a45] mt-2">Cooking</span>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-white/10 text-neutral-400 flex items-center justify-center text-xs font-bold">
                  <Bike className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-medium text-neutral-400 mt-2">On the way</span>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-white/10 text-neutral-400 flex items-center justify-center text-xs font-bold">
                  <Home className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-medium text-neutral-400 mt-2">Delivered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Order Receipt Summary */}
        <div className="py-6 border-b border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
              <Receipt className="w-4 h-4 text-[#ff5c26]" /> Receipt Details
            </span>
            <span className="text-xs text-neutral-400 font-mono">Placed at {lastConfirmedOrder.timestamp}</span>
          </div>

          <div className="bg-black/30 rounded-2xl p-4 border border-white/5 divide-y divide-white/5 max-h-40 overflow-y-auto space-y-2">
            {lastConfirmedOrder.items.map(({ item, quantity }) => (
              <div key={item.id} className="pt-2 first:pt-0 flex items-center justify-between text-xs">
                <span className="text-neutral-200">
                  {quantity}x {item.name}
                </span>
                <span className="font-mono text-white font-semibold">
                  ${(item.price * quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          {/* Totals Breakdown */}
          <div className="grid grid-cols-2 gap-4 text-xs pt-1">
            <div className="space-y-1">
              <div className="text-neutral-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#ff5c26]" />
                <span className="truncate">{lastConfirmedOrder.customer.deliveryAddress}, {lastConfirmedOrder.customer.city}</span>
              </div>
              <div className="text-neutral-400 flex items-center gap-1">
                <PhoneCall className="w-3.5 h-3.5 text-neutral-500" />
                <span>{lastConfirmedOrder.customer.phoneNumber}</span>
              </div>
            </div>

            <div className="text-right space-y-1">
              <div className="text-neutral-400">Subtotal: ${lastConfirmedOrder.subtotal.toFixed(2)}</div>
              {lastConfirmedOrder.discount > 0 && (
                <div className="text-emerald-400">Discount: -${lastConfirmedOrder.discount.toFixed(2)}</div>
              )}
              <div className="text-white font-bold text-sm">
                Paid Total: <span className="text-[#ff7a45]">${lastConfirmedOrder.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleClose}
            className="flex-1 py-3.5 px-6 rounded-full bg-[#ff5c26] hover:bg-[#ff6e3a] text-white font-bold text-sm text-center shadow-lg shadow-[#ff5c26]/30 active:scale-95 transition-all"
          >
            Order Another Meal
          </button>
          <button
            onClick={() => {
              window.print();
            }}
            className="py-3.5 px-6 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 text-xs font-semibold text-center transition-all"
          >
            Print Receipt
          </button>
        </div>

      </div>
    </div>
  );
};

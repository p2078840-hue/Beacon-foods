import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, MenuItem, ConfirmedOrder } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (item: MenuItem, quantity?: number, specialInstructions?: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  promoCode: string;
  discountPercent: number;
  promoError: string;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  removePromoCode: () => void;
  subtotal: number;
  discountAmount: number;
  deliveryFee: number;
  total: number;
  totalItemsCount: number;
  lastConfirmedOrder: ConfirmedOrder | null;
  setLastConfirmedOrder: (order: ConfirmedOrder | null) => void;
  quickViewItem: MenuItem | null;
  setQuickViewItem: (item: MenuItem | null) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('bitecraft_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [promoCode, setPromoCode] = useState<string>('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [promoError, setPromoError] = useState<string>('');
  const [lastConfirmedOrder, setLastConfirmedOrder] = useState<ConfirmedOrder | null>(null);
  const [quickViewItem, setQuickViewItem] = useState<MenuItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('bitecraft_cart', JSON.stringify(items));
    } catch (e) {
      console.warn('Could not save cart to localStorage', e);
    }
  }, [items]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3000);
  };

  const addToCart = (item: MenuItem, quantity = 1, specialInstructions?: string) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((ci) => ci.item.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
          specialInstructions: specialInstructions || updated[existingIndex].specialInstructions
        };
        return updated;
      }
      return [...prev, { item, quantity, specialInstructions }];
    });
    showToast(`Added ${quantity}x "${item.name}" to cart!`);
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setItems((prev) =>
      prev.map((ci) => (ci.item.id === itemId ? { ...ci, quantity } : ci))
    );
  };

  const removeFromCart = (itemId: string) => {
    setItems((prev) => prev.filter((ci) => ci.item.id !== itemId));
    showToast('Item removed from cart.');
  };

  const clearCart = () => {
    setItems([]);
    setPromoCode('');
    setDiscountPercent(0);
    setPromoError('');
  };

  const applyPromoCode = (code: string) => {
    const formatted = code.trim().toUpperCase();
    if (formatted === 'BITECRAFT20' || formatted === 'CRAVE20' || formatted === 'FIRST20') {
      setPromoCode(formatted);
      setDiscountPercent(20);
      setPromoError('');
      showToast('🎉 Promo code applied! 20% discount added.');
      return { success: true, message: '20% discount applied to your order!' };
    } else if (formatted === 'FREESHIP') {
      setPromoCode(formatted);
      setDiscountPercent(10);
      setPromoError('');
      showToast('🎉 Free delivery promo applied!');
      return { success: true, message: 'Promo applied!' };
    } else {
      setPromoError('Invalid promo code. Try "BITECRAFT20" for 20% off.');
      return { success: false, message: 'Invalid promo code. Try "BITECRAFT20"' };
    }
  };

  const removePromoCode = () => {
    setPromoCode('');
    setDiscountPercent(0);
    setPromoError('');
    showToast('Promo code removed.');
  };

  const subtotal = items.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const discountAmount = Number(((subtotal * discountPercent) / 100).toFixed(2));
  // Free delivery over $35 or if empty
  const deliveryFee = subtotal === 0 ? 0 : subtotal >= 35 ? 0 : 3.99;
  const total = Number((Math.max(0, subtotal - discountAmount) + deliveryFee).toFixed(2));
  const totalItemsCount = items.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
        promoCode,
        discountPercent,
        promoError,
        applyPromoCode,
        removePromoCode,
        subtotal,
        discountAmount,
        deliveryFee,
        total,
        totalItemsCount,
        lastConfirmedOrder,
        setLastConfirmedOrder,
        quickViewItem,
        setQuickViewItem,
        toastMessage,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

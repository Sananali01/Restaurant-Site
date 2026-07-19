import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'embers_cart_v1';

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [isOpen, setIsOpen] = useState(false);
  const [coupon, setCoupon] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage unavailable, ignore */
    }
  }, [items]);

  const addItem = useCallback((dish, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === dish.id);
      if (existing) {
        return prev.map((i) => (i.id === dish.id ? { ...i, qty: i.qty + qty } : i));
      }
      return [...prev, { id: dish.id, name: dish.name, price: dish.price, image: dish.image, qty }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQty = useCallback((id, qty) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)).filter((i) => i.qty > 0)
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const applyCoupon = useCallback((code) => {
    const known = { EMBERS10: 0.1, WELCOME15: 0.15 };
    const key = code.trim().toUpperCase();
    if (known[key]) {
      setCoupon({ code: key, discount: known[key] });
      return { ok: true };
    }
    setCoupon(null);
    return { ok: false };
  }, []);

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    const discount = coupon ? subtotal * coupon.discount : 0;
    const tax = (subtotal - discount) * 0.08;
    const delivery = subtotal > 0 && subtotal - discount < 40 ? 4.5 : 0;
    const total = Math.max(0, subtotal - discount + tax + delivery);
    const count = items.reduce((sum, i) => sum + i.qty, 0);
    return { subtotal, discount, tax, delivery, total, count };
  }, [items, coupon]);

  const value = {
    items,
    isOpen,
    setIsOpen,
    addItem,
    removeItem,
    updateQty,
    clearCart,
    applyCoupon,
    coupon,
    totals,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

import { createContext, useContext, useState, useMemo } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

// Helper to parse "$180.000" to 180000
const parsePrice = (priceStr) => {
  if (!priceStr) return 0;
  // Remove formatting like $, dots, and commas if necessary.
  // We assume format "$180.000" -> remove $ and . -> parse as int.
  const numericString = priceStr.replace(/[^0-9]/g, '');
  return parseInt(numericString, 10);
};

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return removeFromCart(id);
    
    setCartItems(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const clearCart = () => setCartItems([]);

  const totalItems = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      return acc + (parsePrice(item.price) * item.quantity);
    }, 0);
  }, [cartItems]);

  // Format back to "$180.000"
  const formatPrice = (value) => {
    return "$" + value.toLocaleString("es-CO").replace(/,/g, '.');
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      subtotal,
      formatPrice,
      parsePrice
    }}>
      {children}
    </CartContext.Provider>
  );
}

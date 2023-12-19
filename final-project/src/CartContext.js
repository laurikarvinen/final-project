import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
  
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };

import React, { createContext, useState } from 'react';
import { Product } from '../../pages/ItemPage/ItemPage';

interface CartItem extends Product {
  quantity: number;
}

export interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  setCartItems: (updatedCartItems: CartItem[]) => void; // Add this line

}

const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  setCartItems: () => {}, // Add this line

});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      const newCartItem: CartItem = { ...product, quantity: 1 };
      setCartItems((prevCartItems) => [...prevCartItems, newCartItem]);
    }
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };
  const handleSetCartItems = (updatedCartItems: CartItem[]) => {
    setCartItems(updatedCartItems);
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,setCartItems: handleSetCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
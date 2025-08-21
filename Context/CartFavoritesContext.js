import React, { createContext, useContext, useState } from 'react';

const CartFavoritesContext = createContext();

export function CartFavoritesProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const addToFavorites = (book) => {
    setFavorites((prevFavorites) => [...prevFavorites, book]);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== id));
  };

  return (
    <CartFavoritesContext.Provider
      value={{ cart, favorites, addToCart, removeFromCart, addToFavorites, removeFromFavorites }}
    >
      {children}
    </CartFavoritesContext.Provider>
  );
}

export const useCartFavorites = () => useContext(CartFavoritesContext);

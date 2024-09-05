import React, { createContext, useState } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [reproducts, setReProducts] = useState([]);
  const [Cart, setCart] = useState([]);

  const addProducts = (products) => {
    setReProducts((prevProducts) => [...prevProducts, ...products]);
  };

  const addCart = (newItem) => {
    setCart((prevCart) => [...prevCart, newItem]); // Properly append new items to the cart
  };

  return (
    <ProductsContext.Provider value={{ reproducts, addCart, Cart, setCart, addProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

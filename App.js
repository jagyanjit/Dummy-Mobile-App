// App.js
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CartFavoritesProvider } from './context/CartFavoritesContext';
import AppNavigator from './AppNavigator';

export default function App() {
  return (
    <ThemeProvider>
      <CartFavoritesProvider>
        <AppNavigator />
      </CartFavoritesProvider>
    </ThemeProvider>
  );
}
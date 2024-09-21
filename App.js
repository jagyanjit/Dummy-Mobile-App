// App.js
import React from 'react';
import { ThemeProvider } from './Context/ThemeContext';
import { CartFavoritesProvider } from './Context/CartFavoritesContext';
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

// context/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

// Define light and dark themes
const lightTheme = {
  background: '#fff',
  text: '#000',
  button: '#007bff',
};

const darkTheme = {
  background: '#333',
  text: '#fff',
  button: '#007bff',
};

// Create context
const ThemeContext = createContext();

// Create a custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, useColorScheme } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const colorScheme = useColorScheme(); // Gets the system color scheme

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: theme.buttonBackground }]} onPress={toggleTheme}>
      <Text style={[styles.text, { color: theme.buttonText }]}>
        {theme.darkMode ? 'Light Mode' : 'Dark Mode'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
});

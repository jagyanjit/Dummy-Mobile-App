import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { BlurView } from 'expo-blur';

export default function WelcomeScreen({ navigation }) {
  const { theme } = useTheme();

  return (
    <ImageBackground
      source={{ uri: 'https://i.imgur.com/yhK0qil.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>eBooks</Text>
        <Text style={styles.quote}>“Knowledge is power”</Text>
      </View>
      <View style={[styles.innerContainer, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.text }}>Welcome</Text>
        <Button
          title="Go to Item List"
          onPress={() => navigation.navigate('ItemsList')}
          color={theme.button}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
  },
  titleContainer: {
    position: 'absolute',
    top: 50, 
    width: '100%',
    alignItems: 'center',
    zIndex: 1, 
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff', 
    textShadowColor: 'rgba(0, 0, 0, 0.5)', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  quote: {
    fontSize: 20,
    color: '#fff', 
    fontStyle: 'italic',
    marginTop: 10,
  },
  innerContainer: {
    padding: 16,
    borderRadius: 10,
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginTop: 100,
    alignItems: 'center',
  },
});

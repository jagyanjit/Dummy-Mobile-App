import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';

export default function SignUpScreen({ navigation }) {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    navigation.navigate('Login');
  };

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
        <Text style={[styles.subtitle, { color: theme.text }]}>Sign Up</Text>
        <TextInput
          style={[styles.input, { borderColor: theme.text, color: theme.text }]}
          placeholder="Email"
          placeholderTextColor={theme.text}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.input, { borderColor: theme.text, color: theme.text }]}
          placeholder="Password"
          placeholderTextColor={theme.text}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Sign Up" onPress={handleSignUp} color={theme.button} />
        <ThemeToggle />
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
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    borderRadius: 5,
  },
});

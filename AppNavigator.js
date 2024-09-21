import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from './context/ThemeContext';
import { MaterialIcons } from '@expo/vector-icons'; // Import icons
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ItemsListScreen from './screens/ItemsListScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import CartScreen from './screens/CartScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'ItemsList') {
            iconName = 'list'; // List icon
          } else if (route.name === 'Favourites') {
            iconName = 'favorite'; // Heart icon
          } else if (route.name === 'Cart') {
            iconName = 'shopping-cart'; // Cart icon
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { backgroundColor: theme.background },
        tabBarActiveTintColor: theme.button,
        tabBarInactiveTintColor: theme.text,
      })}
    >
      <Tab.Screen name="ItemsList" component={ItemsListScreen} />
      <Tab.Screen name="Favourites" component={FavouriteScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const { theme } = useTheme();

  const handleLogout = () => {
    // Implement your logout logic here
    alert('Logged out');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
          options={{
            headerStyle: { backgroundColor: theme.headerBackground },
            headerTintColor: theme.text,
          }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
            headerStyle: { backgroundColor: theme.headerBackground },
            headerTintColor: theme.text,
          }}
        />
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{
            headerStyle: { backgroundColor: theme.headerBackground },
            headerTintColor: theme.text,
          }}
        />
        <Stack.Screen 
          name="ItemsList" 
          component={BottomTabNavigator} 
          options={({ navigation }) => ({
            headerRight: () => (
              <MaterialIcons 
                name="logout" 
                size={24} 
                color={theme.text} 
                style={{ marginRight: 15 }} 
                onPress={() => {
                  handleLogout();
                  // Optional: Navigate to another screen after logout
                  navigation.navigate('SignUp'); // Replace 'SignUp' with the screen you want to navigate to after logout
                }} 
              />
            ),
            headerStyle: { backgroundColor: theme.headerBackground },
            headerTintColor: theme.text,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

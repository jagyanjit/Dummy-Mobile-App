import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function LogoutScreen({ navigation }) {
  useEffect(() => {

    navigation.reset({
      index: 0,
      routes: [{ name: 'SignUp' }],
    });
  }, [navigation]);

  return (
    <View>
      <Text>Logging out...</Text>
    </View>
  );
}

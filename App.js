import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginScreen from './screens/loginScreen';
import homeScreen from './screens/homeScreen';
import signupScreen from './screens/signupScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options= {{headerShown: false}} name="Log in" component={loginScreen} />
        <Stack.Screen options= {{headerShown: false}} name="Home" component={homeScreen} />
        <Stack.Screen options= {{headerShown: false}} name="Sign up" component={signupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { 
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

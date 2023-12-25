import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../../screens/login/LoginScreen'
import HomeScreen from '../../screens/home/HomeScreen'
import MainTabNavigator from '../MainTabNavigator/MainTabNavigator';
import WelcomeScreen from '../../screens/welcome/WelcomeScreen';
import SignUpScreen from '../../screens/signUp/SignUpScreen';

const Stack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen 
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}  
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Main"
        component={MainTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
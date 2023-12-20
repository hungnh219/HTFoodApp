import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../../screens/login/LoginScreen'
import HomeScreen from '../../screens/home/HomeScreen'
import MainTabNavigator from '../MainTabNavigator/MainTabNavigator';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={MainTabNavigator} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
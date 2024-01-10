import React, { useState, useEffect, useCallback } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import {useFocusEffect} from '@react-navigation/native';

import LoginScreen from '../../screens/login/LoginScreen'
import HomeScreen from '../../screens/home/HomeScreen'
import ReviewsScreen from '../../screens/reviews/ReviewsScreen';
import FoodDetailScreen from '../../screens/foodDetail/FoodDetailScreen';
import ProfileScreen from '../../screens/profile/ProfileScreen';
import EditProfileScreen from '../../screens/editProfile/EditProfileScreen';

const Stack = createStackNavigator();

function HomeStackNavigator({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
            headerShown: false,
        }}
        />
      <Stack.Screen
        name="FoodDetail"
        component={FoodDetailScreen}
        options={{
            headerShown: false,
        }}
        />
      <Stack.Screen
        name="Reviews"
        component={ReviewsScreen}
        options={{
            headerShown: true,
        }}
        />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarVisible: false,
        }}
        />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          headerShown: false,
          tabBarVisible: false,
        }}
        />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
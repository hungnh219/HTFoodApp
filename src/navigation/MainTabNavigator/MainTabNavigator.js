import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from '../../screens/home/HomeScreen';
import CategoriesScreen from '../../screens/categories/CategoriesScreen';
import CartScreen from '../../screens/cart/CartScreen';
import ProfileScreen from '../../screens/profile/ProfileScreen';
import MyOrdersScreen from '../../screens/myOrders/MyOrdersScreen';
import FavoritesScreen from '../../screens/favorites/FavoritesScreen';
import HomeStackNavigator from '../HomeStackNavigator/HomeStackNavigator';
import MyOrdersStackNavigator from '../MyOrdersStackNavigator/MyOrdersStackNavigator';

const Tab = createBottomTabNavigator();

function MainTabNavigator () {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
        }}
        />
      <Tab.Screen
        name="Category"
        component={CategoriesScreen}
        options={{
          headerShown: false,
        }}
        />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
        }}
        />
      <Tab.Screen
        name="MyOrdersStackNavigator"
        component={MyOrdersStackNavigator}
        options={{
          headerShown: false,
        }}
        />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          headerShown: false,
        }}
        />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;

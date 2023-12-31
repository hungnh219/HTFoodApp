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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function MainTabNavigator ({ route }) {
  return (
    <Tab.Navigator initialRouteName='HomeStackNavigator'>
      <Tab.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarStyle: { display: "flex" },
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        
        food-fork-drink
        />
      <Tab.Screen
        name="Category"
        component={CategoriesScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Category',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="food-fork-drink" color={color} size={26} />
          ),
        }}
        />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
        />
      <Tab.Screen
        name="MyOrdersStackNavigator"
        component={MyOrdersStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'My order',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="history" color={color} size={26} />
          ),
        }}
        />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
        />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;

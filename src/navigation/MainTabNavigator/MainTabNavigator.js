import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import HomeScreen from '../../screens/home/HomeScreen';
import CategoriesScreen from '../../screens/categories/CategoriesScreen';
import CartScreen from '../../screens/cart/CartScreen';
import ProfileScreen from '../../screens/profile/ProfileScreen';
import MyOrdersScreen from '../../screens/myOrders/MyOrdersScreen';
import FavoritesScreen from '../../screens/favorites/FavoritesScreen';
import HomeStackNavigator from '../HomeStackNavigator/HomeStackNavigator';
import MyOrdersStackNavigator from '../MyOrdersStackNavigator/MyOrdersStackNavigator';
import CartNavigator from '../CartNavigator/CartNavigator';

const Tab = createBottomTabNavigator();

function MainTabNavigator ({ route }) {
  return (
    <Tab.Navigator initialRouteName='HomeStackNavigator' screenOptions={{tabBarActiveTintColor: '#FE724C',}}>
      <Tab.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        options={{
          title: "Home",
          tabBarIcon: ({color}) => (<MaterialCommunityIcons name='home' size={36} color={color} />),
          headerShown: false,
          tabBarStyle: { display: "flex" },
          tabBarLabel:() => {return null},
        }}

        />
      <Tab.Screen
        name="Category"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({color}) => (<MaterialCommunityIcons name='format-list-bulleted' size={36} color={color} />),
          headerShown: false,
          tabBarLabel:() => {return null},
        }}
        />
      <Tab.Screen
        name="CartNavigator"
        component={CartNavigator}
        options={{
          tabBarIcon: ({color}) => (<MaterialCommunityIcons name='cart' size={36} color={color} />),
          headerShown: false,
          tabBarStyle: { display: "flex" },
          tabBarLabel:() => {return null},
        }}
        />
      <Tab.Screen
        name="MyOrdersStackNavigator"
        component={MyOrdersStackNavigator}
        options={{
          tabBarIcon: ({color}) => (<MaterialCommunityIcons name='clipboard-list' size={36} color={color} />),
          title: "Order",
          tabBarStyle: { display: "flex" },
          headerShown: false,
          tabBarLabel:() => {return null},
        }}
        />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({color}) => (<MaterialCommunityIcons name='heart' size={36} color={color} />),
          title: "Favorite",
          headerShown: false,
          showLabel: false,
          tabBarLabel:() => {return null},
        }}
        />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;

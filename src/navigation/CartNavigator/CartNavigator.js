import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../../screens/cart/CartScreen';
import CheckoutScreen from '../../screens/cart/CheckoutScreen';


const Stack = createStackNavigator();

function CartNavigator() {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen name="Cart" component={CartScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Checkout" component={CheckoutScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default CartNavigator;
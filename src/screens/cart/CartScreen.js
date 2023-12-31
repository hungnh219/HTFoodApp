import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import CartItem from '../../components/cartItem/CartItem';

import AppStyle from '../../styles/GlobalStyle'

function CartScreen () {
  const [cartItems, setCartItems] = useState([]);

  return (
    <View>
      <Text>Cart Screen</Text>
      <CartItem />
    </View>
  );
};

export default CartScreen;
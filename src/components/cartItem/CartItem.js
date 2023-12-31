import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useFocusEffect} from '@react-navigation/native';
import AppStyle from '../../styles/GlobalStyle';


function CartItem({ item }) {
    const foodData = {
        image: require('../../../assets/img/food.png'),
        price: 9.50,
        name: 'Ground Beef Tacos',
        description: 'Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.',
        rating: {
            count: 50,
            average: 4.5,
        },
    };

    const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < 9) {
      setQuantity(quantity + 1);
    }
  };

  const formatQuantity = (num) => {
    return num < 10 ? `0${num}` : num.toString();
  };


    return(
    <View style={AppStyle.CartItemStyles.container}>
        <Image source={foodData.image} style={AppStyle.CartItemStyles.image} />
        <Text style={AppStyle.CartItemStyles.name}>{foodData.name}</Text>
        <TouchableOpacity style={AppStyle.CartItemStyles.delete}>
            {/* xử lí xóa sp ở đây */}
            <Icon name="close" size={20} color="red" />
        </TouchableOpacity>
    
    <Text style={AppStyle.CartItemStyles.price}>{foodData.price} $</Text>
    <View style={AppStyle.CartItemStyles.quantityContainer}>
          <TouchableOpacity onPress={handleDecrease} style={AppStyle.CartItemStyles.decreaseQuantityButton}>
            <Text style={AppStyle.CartItemStyles.decreaseQuantityText}>-</Text>
          </TouchableOpacity>

          <Text style={AppStyle.CartItemStyles.quantityNumber}>{formatQuantity(quantity)}</Text>

          <TouchableOpacity onPress={handleIncrease} style={AppStyle.CartItemStyles.increaseQuantityButton}>
            <Text style={AppStyle.CartItemStyles.increaseQuantityText}>+</Text>
          </TouchableOpacity>
        
    </View>
    
    </View>
    );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
  },
});

export default CartItem;
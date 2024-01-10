import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useFocusEffect} from '@react-navigation/native';
import { useCart } from '../../services/api/CartContext';

import AppStyle from '../../styles/GlobalStyle';


function ItemList({ item }) {
  const { removeProduct } = useCart();

  const handleRemove = () => {
    removeProduct(item.index);
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
        <Image source={{ uri: item.imgDirect}} style={AppStyle.CartItemStyles.image} />
        <Text style={AppStyle.CartItemStyles.name}>{item.name}</Text>
        <TouchableOpacity style={AppStyle.CartItemStyles.delete} onPress={handleRemove}>
            {/* xử lí xóa sp ở đây */}
            <Icon name="close" size={20} color="red" />
        </TouchableOpacity>
        {/* <Text style={AppStyle.CartItemStyles.description}>{item.description}</Text> */}
    
    <Text style={AppStyle.CartItemStyles.price}>{item.price} VND</Text>
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

export default ItemList;
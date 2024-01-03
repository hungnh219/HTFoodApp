import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useFocusEffect} from '@react-navigation/native';
import AppStyle from '../../styles/GlobalStyle';


function OrderRatingItem({ item, navigation }) {

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
    <View style={AppStyle.OrderRatingItemStyles.container}>
        <Image source={{ uri: item.imgDirect}} style={AppStyle.OrderRatingItemStyles.image} />
        <Text style={AppStyle.OrderRatingItemStyles.name}>{item.name}</Text>
        <Text style={AppStyle.OrderRatingItemStyles.description}>{item.description}</Text>
    <Text style={AppStyle.OrderRatingItemStyles.price}>{item.price} VND</Text>
    <TouchableOpacity onPress={ () => navigation.navigate("Rating") } style={AppStyle.OrderRatingItemStyles.rate}>
        <Text style={{ color: '#fff' }}>Đánh giá</Text>
      </TouchableOpacity>
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

export default OrderRatingItem;
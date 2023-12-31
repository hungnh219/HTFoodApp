import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useFocusEffect} from '@react-navigation/native';
import AppStyle from '../../styles/GlobalStyle';


function UpcomingItem({ item, navigation }) {

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
    <View style={AppStyle.UpcomingItemStyles.container}>
        <Image source={{ uri: item.imgDirect}} style={AppStyle.UpcomingItemStyles.image} />
        <Text style={AppStyle.UpcomingItemStyles.name}>{item.name}</Text>
        
    
        <Text style={AppStyle.UpcomingItemStyles.price}>{item.price} VND</Text>
        
      <TouchableOpacity onPress={ () => navigation.navigate("Rating")} style={AppStyle.UpcomingItemStyles.rating}>
        <Text style={{color:'#fff'}}>Rate</Text>
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

export default UpcomingItem;
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useFocusEffect} from '@react-navigation/native';
import AppStyle from '../../styles/GlobalStyle';


function UpcomingItem({ item, navigation }) {

    const [quantity, setQuantity] = useState(1);

    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };


    return(
    <View style={AppStyle.UpcomingItemStyles.container}>
      <View style={AppStyle.UpcomingItemStyles.estimate}>
        <Text style={AppStyle.UpcomingItemStyles.estimateTitle}>Thời gian ước tính</Text>
        <Text style={AppStyle.UpcomingItemStyles.estimateTime}>{getRandomInt(10, 59)} phút</Text>
      </View>
      <View style={AppStyle.UpcomingItemStyles.status}>
        <Text style={AppStyle.UpcomingItemStyles.statusTitle}>Trạng thái</Text>
        <Text style={AppStyle.UpcomingItemStyles.statusContent}>Chờ giao hàng</Text>
      </View>
      
      
      <TouchableOpacity  style={AppStyle.UpcomingItemStyles.cancel}>
        <Text style={{color:'#000'}}>Hủy đơn</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate("OrderDetail") } style={AppStyle.UpcomingItemStyles.tracking}>
        <Text style={{color:'#fff'}}>Chi tiết đơn hàng</Text>
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
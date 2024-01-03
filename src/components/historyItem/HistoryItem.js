// src/components/FoodItem.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AppStyle from '../../styles/GlobalStyle'

function HistoryItem({ item, navigation }) {
  const getRandomDateTime = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };
  let startDateTime = new Date(2020, 0, 1); // 01/01/2020 00:00:00
  let endDateTime = new Date(); // ngày và giờ hiện tại



  return (
    <View style={AppStyle.HistoryItemStyles.container}>
      {/* <Image source={{ uri: item.imgDirect}} style={AppStyle.HistoryItemStyles.image} />
        <Text style={AppStyle.HistoryItemStyles.name}>{item.name}</Text>
        <Text style={AppStyle.HistoryItemStyles.description}>{item.description}</Text> */}


      <View style={AppStyle.HistoryItemStyles.statusQuantity}>
        <Text style={AppStyle.HistoryItemStyles.status}>Giao hàng thành công</Text>
        <Text style={AppStyle.HistoryItemStyles.quantity}>1 sản phẩm</Text>
      </View>

      <View style={AppStyle.HistoryItemStyles.datePrice}>
        <Text style={AppStyle.HistoryItemStyles.date}>{getRandomDateTime(startDateTime, endDateTime).toLocaleString()}</Text>
        <Text style={AppStyle.HistoryItemStyles.price}>Thành tiền: 100000 VND</Text>
      </View>
      <TouchableOpacity onPress={ () => navigation.navigate("OrderRating") } style={AppStyle.HistoryItemStyles.rate}>
        <Text style={{ color: '#000' }}>Đánh giá</Text>
      </TouchableOpacity>
      <TouchableOpacity style={AppStyle.HistoryItemStyles.reorder}>
        <Text style={{ color: '#fff' }}>Đặt lại</Text>
      </TouchableOpacity>

    </View>
  );
};


export default HistoryItem;
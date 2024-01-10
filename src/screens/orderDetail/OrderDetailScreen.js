import React, { useState, useFocusEffect, useCallback } from 'react';
import { View, Text, Image, FlatList, Button, TouchableOpacity, ScrollView } from 'react-native';
import OrderDetailItem from '../../components/orderDetail/OrderDetailItem';
import BackButton from '../../components/backButton/BackButton';


import AppStyle from '../../styles/GlobalStyle'
import { useCart } from '../../services/api/CartContext';

function OrderDetailScreen({ navigation }) {
  const { totalFee, productCartList, setProductCart, addProduct, removeProduct, getTotalFee } = useCart();

  // const dataList = [
  //   { "description": "Day la banh cuon", "id": 1, "imgDirect": "https://file.hstatic.net/200000836951/file/1_428af928f054439eba8fe6fdd480410b.png", "name": "Banh cuon", "price": 20000, "ratingAvarage": 3.8, "ratingCount": 30, "type": "FastFood" },
  //   { "description": "Day la hamburger hehe", "id": 2, "imgDirect": "https://file.hstatic.net/200000836951/file/3_aca8c22730794923b874492c9041b1f7.png", "name": "Hamburger", "price": 30000, "ratingAvarage": 4.5, "ratingCount": 32, "type": "FastFood" },
  //   { "description": "Day la ga ran", "id": 3, "imgDirect": "https://file.hstatic.net/200000836951/file/9_31c84b606d2d44eb94bc3e13ac681a67.png", "name": "Ga ran", "price": 15000, "ratingAvarage": 4, "ratingCount": 36, "type": "FastFood" },
  //   { "description": "Day la hotdog", "id": 4, "imgDirect": "https://file.hstatic.net/200000836951/file/4_cc677adf2bd54c13bfc873b197dac882.png", "name": "Hotdog", "price": 10000, "ratingAvarage": 3.7, "ratingCount": 20, "type": "FastFood" },
  //   { "description": "Day la banh cuon", "id": 5, "imgDirect": "https://file.hstatic.net/200000836951/file/2_b4e19facc7e84318adf9c235e0be642e.png", "name": "Khoai tay chien", "price": 20000, "ratingAvarage": 3.8, "ratingCount": 30, "type": "FastFood" },
  //   { "description": "Day la tra sua truyen thong", "id": 6, "imgDirect": "https://file.hstatic.net/200000836951/file/5_5f7ad588de2b40cab9ce86b7be509fcd.png", "name": "Tra sua truyen thong", "price": 28000, "ratingAvarage": 4.6, "ratingCount": 124, "type": "Drink" },
  //   { "description": "Day la tra sua matcha", "id": 7, "imgDirect": "https://file.hstatic.net/200000836951/file/10_01341dfd75d94c15a5114dda600b3b83.png", "name": "Tra sua matcha", "price": 25000, "ratingAvarage": 4.4, "ratingCount": 88, "type": "Drink" },
  //   { "description": "Day la tra dao", "id": 8, "imgDirect": "https://file.hstatic.net/200000836951/file/6_a50fad8b304b4aaeaa78d8732b55dd15.png", "name": "Tra dao", "price": 20000, "ratingAvarage": 3.9, "ratingCount": 72, "type": "Drink" },
  //   { "description": "Day la tra dau", "id": 9, "imgDirect": "https://file.hstatic.net/200000836951/file/7_466adbd2f9b446b4bc6ca04def5bec04.png", "name": "Tra dau", "price": 20000, "ratingAvarage": 4.2, "ratingCount": 60, "type": "Drink" },
  //   { "description": "Day la tra vai", "id": 10, "imgDirect": "https://file.hstatic.net/200000836951/file/8_84c19158d20c42f38158c26c8da4672e.png", "name": "Tra vai", "price": 20000, "ratingAvarage": 4.1, "ratingCount": 67, "type": "Drink" }
  // ];
  // const [OrderDetailItems, setOrderDetailItems] = useState([]);
  // const subtotal = dataList.reduce((total, item) => total + item.price, 0);
  // const deliveryFee = 5; // or calculate based on subtotal
  // const totalFee = subtotal + deliveryFee;
  
  return (
    <View>
      {/* xử lí logic giỏ hàng rỗng -> có thông báo riêng */}
      <View style={AppStyle.OrderDetailStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackButton />
        </TouchableOpacity>
        <Text style={AppStyle.OrderDetailStyles.headerTitle}>Chi tiết đơn hàng</Text>
      </View>
      <FlatList
        // style={{marginBottom: 200}}
        data={productCartList}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <OrderDetailItem
            item={item}
          />
        )}
      />
      <View style={AppStyle.CartStyles.priceContainer}>
        
        <View style={AppStyle.CartStyles.priceLine}>
          <Text style={[AppStyle.CartStyles.priceText, {fontWeight:'bold'}]}>Tổng tiền</Text>
          <Text style={[AppStyle.CartStyles.priceText, {fontWeight:'bold'}]}>{totalFee} VND</Text>
        </View>
      </View>
    </View>
  )
}

export default OrderDetailScreen
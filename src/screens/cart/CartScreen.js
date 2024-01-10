import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

import CartItem from '../../components/cartItem/CartItem';
import AppStyle from '../../styles/GlobalStyle';
import BackButton from '../../components/backButton/BackButton';
import { useCart } from '../../services/api/CartContext';

function CartScreen ({ navigation }) {
  // const { productCartList, setProductCart, addProduct, removeProduct } = useCart();
  const { totalFee, productCartList, setProductCart, addProduct, removeProduct, getTotalFee } = useCart();
  const [totalFee1, setDataList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://192.168.68.104:5236/api/HtFoodApp/GetProductByTypeName/fastfood');
        // setDataList(response.data);
        // setProductCart(response.data);
        // subtotal = dataList.reduce((total, item) => total + item.price, 0);
        // deliveryFee = 5; // or calculate based on subtotal
        // totalFee = subtotal + deliveryFee;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // const [cartTotalFee, setCartTotalFee] = useState(0);
  // useEffect(() => {
  //   const calculateTotalFee = () => {
  //     setCartTotalFee(totalFee);
  //   };

  //   calculateTotalFee();
  // }, []);

  // const dataList = [
  //   {"description": "Day la banh cuon", "id": 1, "imgDirect": "https://file.hstatic.net/200000836951/file/1_428af928f054439eba8fe6fdd480410b.png", "name": "Banh cuon", "price": 20000, "ratingAvarage": 3.8, "ratingCount": 30, "type": "FastFood"},
  //   {"description": "Day la hamburger hehe", "id": 2, "imgDirect": "https://file.hstatic.net/200000836951/file/3_aca8c22730794923b874492c9041b1f7.png", "name": "Hamburger", "price": 30000, "ratingAvarage": 4.5, "ratingCount": 32, "type": "FastFood"},
  //   {"description": "Day la ga ran", "id": 3, "imgDirect": "https://file.hstatic.net/200000836951/file/9_31c84b606d2d44eb94bc3e13ac681a67.png", "name": "Ga ran", "price": 15000, "ratingAvarage": 4, "ratingCount": 36, "type": "FastFood"},
  //   {"description": "Day la hotdog", "id": 4, "imgDirect": "https://file.hstatic.net/200000836951/file/4_cc677adf2bd54c13bfc873b197dac882.png", "name": "Hotdog", "price": 10000, "ratingAvarage": 3.7, "ratingCount": 20, "type": "FastFood"},
  //   {"description": "Day la banh cuon", "id": 5, "imgDirect": "https://file.hstatic.net/200000836951/file/2_b4e19facc7e84318adf9c235e0be642e.png", "name": "Khoai tay chien", "price": 20000, "ratingAvarage": 3.8, "ratingCount": 30, "type": "FastFood"},
  //   {"description": "Day la tra sua truyen thong", "id": 6, "imgDirect": "https://file.hstatic.net/200000836951/file/5_5f7ad588de2b40cab9ce86b7be509fcd.png", "name": "Tra sua truyen thong", "price": 28000, "ratingAvarage": 4.6, "ratingCount": 124, "type": "Drink"},
  //   {"description": "Day la tra sua matcha", "id": 7, "imgDirect": "https://file.hstatic.net/200000836951/file/10_01341dfd75d94c15a5114dda600b3b83.png", "name": "Tra sua matcha", "price": 25000, "ratingAvarage": 4.4, "ratingCount": 88, "type": "Drink"},
  //   {"description": "Day la tra dao", "id": 8, "imgDirect": "https://file.hstatic.net/200000836951/file/6_a50fad8b304b4aaeaa78d8732b55dd15.png", "name": "Tra dao", "price": 20000, "ratingAvarage": 3.9, "ratingCount": 72, "type": "Drink"},
  //   {"description": "Day la tra dau", "id": 9, "imgDirect": "https://file.hstatic.net/200000836951/file/7_466adbd2f9b446b4bc6ca04def5bec04.png", "name": "Tra dau", "price": 20000, "ratingAvarage": 4.2, "ratingCount": 60, "type": "Drink"},
  //   {"description": "Day la tra vai", "id": 10, "imgDirect": "https://file.hstatic.net/200000836951/file/8_84c19158d20c42f38158c26c8da4672e.png", "name": "Tra vai", "price": 20000, "ratingAvarage": 4.1, "ratingCount": 67, "type": "Drink"}
  // ];
  // const [cartItems, setCartItems] = useState([]);
  // const [cartItems, setCartItems] = useState([]);
  // const subtotal = dataList.reduce((total, item) => total + item.price, 0);
  // const deliveryFee = 5; // or calculate based on subtotal
  // const totalFee = subtotal + deliveryFee;
  return (
    <View>
      <View style={AppStyle.CartStyles.emptyCartContainer}>
        <Text style={AppStyle.CartStyles.emptyCartText}>Giỏ hàng</Text>
      </View>
      {productCartList.length > 0 ? (
        <FlatList
          data={productCartList.map((item, index) => ({ ...item, index }))}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <CartItem
              item={item} 
            />
          )}
        />
      ) : (
        // <View style={AppStyle.CartStyles.emptyCartContainer}>
        //   <Text style={AppStyle.CartStyles.emptyCartText}>Không có sản phẩm</Text>
        // </View>
        <View>
          <Image
            source={require('../../../assets/img/cart-empty.png')}
            style={{ width: '100%', height: 320 }}
          />
        </View>
      )}

      <View style={AppStyle.CartStyles.priceContainer}>
        {/* <View style={AppStyle.CartStyles.priceLine}>
          <Text style={AppStyle.CartStyles.priceText}>Tạm tính</Text>
          <Text style={AppStyle.CartStyles.priceText}>{totalFee} VND</Text>
        </View> */}
        {/* <View style={AppStyle.CartStyles.priceLine}>
          <Text style={AppStyle.CartStyles.priceText}>Phí vận chuyển</Text>
          <Text style={AppStyle.CartStyles.priceText}>{totalFee} VND</Text>
        </View> */}
        <View style={AppStyle.CartStyles.priceLine}>
          <Text style={[AppStyle.CartStyles.priceText, {fontWeight:'bold'}]}>Tổng tiền</Text>
          <Text style={[AppStyle.CartStyles.priceText, {fontWeight:'bold'}]}>{totalFee} VND</Text>
        </View>
      </View>

      <TouchableOpacity style={AppStyle.CartStyles.checkoutButton} onPress={() => navigation.navigate('Checkout')}>
        <Text style={AppStyle.CartStyles.checkoutButtonText}>Thanh toán</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;
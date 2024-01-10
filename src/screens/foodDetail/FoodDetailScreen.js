import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

import AppStyle from '../../styles/GlobalStyle'
import BackButton from '../../components/backButton/BackButton';
import { useProduct } from '../../services/api/ProductContext';
import { useCart } from '../../services/api/CartContext';
import { useFavorite } from '../../services/api/FavoriteContext';
function FoodDetailScreen({ navigation }) {
  // const [foodData, setProduct] = useState([]);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       // http://192.168.68.104:5206/api/Furniture/GetAllProducts
  //       const response = await axios.get('http://192.168.68.104:5236/api/HtFoodApp/GetAllProducts');
  //       // const response = await axios.get('http://192.168.68.104:5206/api/Furniture/GetAllProducts');
  //       console.log('check api data', response.data)
  //       console.log('check api data', response.data[0])
  //       setProduct(response.data[19]);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);
  // const foodData = {
  //   image: require('../../../assets/img/food.png'),
  //   price: 9.50,
  //   name: 'Ground Beef Tacos',
  //   description: 'Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.',
  //   rating: {
  //     count: 50,
  //     average: 4.5,
  //   },
  // };
  const { product } = useProduct();
  if (!product) {
    return null; // or display a loading indicator
  }
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

  useFocusEffect(
    useCallback(() => {
      const parent = navigation.getParent();
      if (parent) {
        parent.setOptions({
          tabBarStyle: { display: "none" },
        });
      }
    }, [navigation]),
  );

  const { productCartList, setProductCart, addProduct, removeProduct } = useCart();
  const { addProductFavorite } = useFavorite();
  console.log({...product, quantity});
  
  return (
    
    <View style={AppStyle.FoodDetailStyles.container}>
      <View style={AppStyle.OrderDetailStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackButton />
        </TouchableOpacity>
        <Text style={AppStyle.OrderDetailStyles.headerTitle}>Chi tiết sản phẩm</Text>
      </View>

      <View style={AppStyle.FoodDetailStyles.foodImageContainer}>
        <Image
          // style={AppStyle.FoodDetailStyles.foodImage}
          // style={{width: 400, height: 400}}
          // source={require('../../../assets/img/food.png')}
          source={{uri: product.imgDirect}}
          style={AppStyle.FoodDetailStyles.foodImage}
        />

        <TouchableOpacity onPress={() => {addProductFavorite(product)}} style={AppStyle.FoodDetailStyles.favoriteButton}>
          <MaterialCommunityIcons name='cards-heart' style={AppStyle.FoodDetailStyles.favoriteIcon}/>
        </TouchableOpacity>
      </View>

      <Text style={AppStyle.FoodDetailStyles.foodName}>{product.name}</Text>

      <View style={AppStyle.FoodDetailStyles.ratingContainer}>
        <MaterialCommunityIcons name='star' style={AppStyle.FoodDetailStyles.ratingIcon}/>
        <Text style={AppStyle.FoodDetailStyles.ratingAverage}>{product.ratingAverage}</Text>
        <Text style={AppStyle.FoodDetailStyles.ratingCount}>{"("}{product.ratingCount}{")"}</Text>
        <TouchableOpacity onPress={ () => navigation.navigate("Reviews")}>
          <Text style={AppStyle.FoodDetailStyles.ratingReview}>Xem đánh giá</Text>
        </TouchableOpacity>
      </View>

      <View style={AppStyle.FoodDetailStyles.priceAndQuantityContainer}>
        <Text style={AppStyle.FoodDetailStyles.foodPrice}>
          <Text style={AppStyle.FoodDetailStyles.foodPriceNumber}>{product.price}</Text>
          <Text>VND</Text>
        </Text>

        <View style={AppStyle.FoodDetailStyles.quantityContainer}>
          <TouchableOpacity onPress={handleDecrease} style={AppStyle.FoodDetailStyles.decreaseQuantityButton}>
            <Text style={AppStyle.FoodDetailStyles.decreaseQuantityText}>-</Text>
          </TouchableOpacity>

          <Text style={AppStyle.FoodDetailStyles.quantityNumber}>{formatQuantity(quantity)}</Text>

          <TouchableOpacity onPress={handleIncrease} style={AppStyle.FoodDetailStyles.increaseQuantityButton}>
            <Text style={AppStyle.FoodDetailStyles.increaseQuantityText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={AppStyle.FoodDetailStyles.foodDescription}>{product.description}</Text>
      {/* <TouchableOpacity style={AppStyle.ProfileStyles.logOutButton} onPress={ () => navigation.navigate('Cart')}> */}
      <TouchableOpacity style={AppStyle.ProfileStyles.logOutButton} onPress={() => addProduct(product, quantity)}>
        <Text style={AppStyle.ProfileStyles.logOutButtonText}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FoodDetailScreen;
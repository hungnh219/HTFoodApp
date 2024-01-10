import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useFocusEffect} from '@react-navigation/native';
import StarRating from 'react-native-star-rating-widget';
import BackButton from '../../components/backButton/BackButton';
import CustomTextInput from '../../components/customTextInput/CustomTextInput';

import AppStyle from '../../styles/GlobalStyle'
import { useCart } from '../../services/api/CartContext';
function RatingScreen({ navigation }) {
  const foodData = {
    image: require('../../../assets/img/food.png'),
    price: 9.50,
    name: 'Tacos thịt bò xay',
    description: 'Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.',
    rating: {
      count: 50,
      average: 4.5,
    },
  };
  const { totalFee, productCartList, setProductCart, addProduct, removeProduct, getTotalFee } = useCart();

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


const [rating, setRating] = useState(0);
  return (
    
    <View style={AppStyle.RatingStyles.container}>
      <View style={AppStyle.CheckoutStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackButton />
        </TouchableOpacity>
        <Text style={AppStyle.CheckoutStyles.headerTitle}>Đánh giá</Text>
      </View>

      <View style={AppStyle.RatingStyles.foodImageContainer}>
      
        <Image
          style={AppStyle.RatingStyles.foodImage}
          source={foodData.image}
        />

        <TouchableOpacity style={AppStyle.RatingStyles.favoriteButton}>
          <MaterialCommunityIcons name='cards-heart' style={AppStyle.RatingStyles.favoriteIcon}/>
        </TouchableOpacity>
      </View>

      <Text style={AppStyle.RatingStyles.foodName}>{foodData.name}</Text>

      <View style={AppStyle.RatingStyles.ratingContainer}>
        <MaterialCommunityIcons name='star' style={AppStyle.RatingStyles.ratingIcon}/>
        <Text style={AppStyle.RatingStyles.ratingAverage}>{foodData.rating.average}</Text>
        <Text style={AppStyle.RatingStyles.ratingCount}>{"("}{foodData.rating.count}{")"}</Text>
        <TouchableOpacity onPress={ () => navigation.navigate("Reviews")}>
          <Text style={AppStyle.RatingStyles.ratingReview}>Xem đánh giá</Text>
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center', }}>
      <StarRating
        rating={rating}
        onChange={setRating}
      />
      </View>
      
      <CustomTextInput style={{marginTop: 10, }} title={'Review'} content={'Đánh giá tại đây ...'}/>
      <TouchableOpacity style={AppStyle.ProfileStyles.logOutButton}>
        <Text style={AppStyle.ProfileStyles.logOutButtonText}>Gửi</Text>
      </TouchableOpacity>
      
      
    </View>
  );
};

export default RatingScreen;
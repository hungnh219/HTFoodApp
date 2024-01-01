import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useFocusEffect} from '@react-navigation/native';
import StarRating from 'react-native-star-rating-widget';
import BackButton from '../../components/backButton/BackButton';
import CustomTextInput from '../../components/customTextInput/CustomTextInput';

import AppStyle from '../../styles/GlobalStyle'

function FoodDetailScreen({ navigation }) {
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

const [rating, setRating] = useState(0);
  return (
    
    <View style={AppStyle.FoodDetailStyles.container}>
      <TouchableOpacity style={AppStyle.LoginStyles.backBtn} onPress={() => navigation.goBack()}>
        <BackButton />
      </TouchableOpacity>

      <View style={AppStyle.FoodDetailStyles.foodImageContainer}>
      
        <Image
          style={AppStyle.FoodDetailStyles.foodImage}
          source={foodData.image}
        />

        <TouchableOpacity onPress={handleDecrease} style={AppStyle.FoodDetailStyles.favoriteButton}>
          <MaterialCommunityIcons name='cards-heart' style={AppStyle.FoodDetailStyles.favoriteIcon}/>
        </TouchableOpacity>
      </View>

      <Text style={AppStyle.FoodDetailStyles.foodName}>{foodData.name}</Text>

      <View style={AppStyle.FoodDetailStyles.ratingContainer}>
        <MaterialCommunityIcons name='star' style={AppStyle.FoodDetailStyles.ratingIcon}/>
        <Text style={AppStyle.FoodDetailStyles.ratingAverage}>{foodData.rating.average}</Text>
        <Text style={AppStyle.FoodDetailStyles.ratingCount}>{"("}{foodData.rating.count}{")"}</Text>
        <TouchableOpacity onPress={ () => navigation.navigate("Reviews")}>
          <Text style={AppStyle.FoodDetailStyles.ratingReview}>See Review</Text>
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center', }}>
      <StarRating
        rating={rating}
        onChange={setRating}
      />
      </View>
      
      <CustomTextInput style={{marginTop: 10, }} title={'Review'} content={'Write review'}/>
      <TouchableOpacity style={AppStyle.ProfileStyles.logOutButton}>
        <Text style={AppStyle.ProfileStyles.logOutButtonText}>Submit</Text>
      </TouchableOpacity>
      
      
    </View>
  );
};

export default FoodDetailScreen;
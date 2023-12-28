import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useFocusEffect} from '@react-navigation/native';

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
  return (
    
    <View style={AppStyle.FoodDetailStyles.container}>
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

      <View style={AppStyle.FoodDetailStyles.priceAndQuantityContainer}>
        <Text style={AppStyle.FoodDetailStyles.foodPrice}>
          <Text>$</Text>
          <Text style={AppStyle.FoodDetailStyles.foodPriceNumber}>{foodData.price}</Text>
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

      <Text style={AppStyle.FoodDetailStyles.foodDescription}>{foodData.description}</Text>
    </View>
  );
};

export default FoodDetailScreen;
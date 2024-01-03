// src/components/FoodItem.js
import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppStyle from '../../styles/GlobalStyle'



function FoodItems_Landscape({item}) {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
        return(
          <View style={AppStyle.FoodItems_LandscapeStyles.container}>
          
          <View style={AppStyle.FoodItems_LandscapeStyles.foodImageContainer}>
            <Image source={{ uri: item.imgDirect}} style={AppStyle.FoodItems_LandscapeStyles.image} />
            
            <View style={AppStyle.FoodItems_LandscapeStyles.ratingContainer}>
              <Text style={ AppStyle.FoodItems_LandscapeStyles.rating}>
                {item.ratingAvarage}
                <MaterialCommunityIcons name="star" size={12} color="yellow" />
                ({item.ratingCount})
              </Text>
            </View>
            
            
            <TouchableOpacity onPress={handleDecrease} style={AppStyle.FoodItems_LandscapeStyles.favoriteButton}>
              <MaterialCommunityIcons name='cards-heart' style={AppStyle.FoodItems_LandscapeStyles.favoriteIcon}/>
            </TouchableOpacity>
          </View>

          <Text style={AppStyle.FoodItems_LandscapeStyles.name}>{item.name}</Text>
          <Text style={AppStyle.FoodItems_LandscapeStyles.price}>{item.price} VND</Text>

          {/* <TouchableOpacity  style={AppStyle.FoodItems_LandscapeStyles.addToCart}>
              <MaterialCommunityIcons name='cart-plus' size={20} color="white" />
            </TouchableOpacity> */}
            
          </View>
        );
};


export default FoodItems_Landscape;
// src/components/FoodItem.js
import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppStyle from '../../styles/GlobalStyle'



function FoodItems_Portrait({item}) {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
        return(
          <View style={AppStyle.FoodItems_PortraitStyles.container}>
          
          <View style={AppStyle.FoodItems_PortraitStyles.foodImageContainer}>
            <Image source={{ uri: item.imgDirect}} style={AppStyle.FoodItems_PortraitStyles.image} />
            
            <View style={AppStyle.FoodItems_PortraitStyles.ratingContainer}>
              <Text style={ AppStyle.FoodItems_PortraitStyles.rating}>
                {item.ratingAvarage}
                <MaterialCommunityIcons name="star" size={12} color="yellow" />
                ({item.ratingCount})
              </Text>
            </View>
            
            
            <TouchableOpacity onPress={handleDecrease} style={AppStyle.FoodItems_PortraitStyles.favoriteButton}>
              <MaterialCommunityIcons name='cards-heart' style={AppStyle.FoodItems_PortraitStyles.favoriteIcon}/>
            </TouchableOpacity>
          </View>

          <Text style={AppStyle.FoodItems_PortraitStyles.name}>{item.name}</Text>
          <Text style={AppStyle.FoodItems_PortraitStyles.price}>{item.price} VND</Text>
            
          </View>
        );
};


export default FoodItems_Portrait;
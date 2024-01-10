// src/components/FoodItem.js
import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import AppStyle from '../../styles/GlobalStyle'
import { useProduct } from '../../services/api/ProductContext';
import { useFavorite } from '../../services/api/FavoriteContext';

function FoodItems_Landscape({item}) {
  const navigation = useNavigation();
  const { setProductInfo } = useProduct();
  const { removeProductFavorite } = useFavorite();
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
        return(
          <TouchableOpacity
          style={AppStyle.FoodItems_LandscapeStyles.container}
          onPress={() => {
            setProductInfo(item);
            navigation.navigate('FoodDetail');
          }}
          >
            <View style={AppStyle.FoodItems_LandscapeStyles.foodImageContainer}>
              <Image source={{ uri: item.imgDirect}} style={AppStyle.FoodItems_LandscapeStyles.image} />
              
              <View style={AppStyle.FoodItems_LandscapeStyles.ratingContainer}>
                <Text style={ AppStyle.FoodItems_LandscapeStyles.rating}>
                  {item.ratingAvarage}
                  <MaterialCommunityIcons name="star" size={12} color="yellow" />
                  ({item.ratingCount})
                </Text>
              </View>
              
              
              <TouchableOpacity onPress={() => removeProductFavorite(item.index)} style={AppStyle.FoodItems_LandscapeStyles.favoriteButton}>
                <MaterialCommunityIcons name='close' style={AppStyle.FoodItems_LandscapeStyles.favoriteIcon}/>
              </TouchableOpacity>
            </View>

            <Text style={AppStyle.FoodItems_LandscapeStyles.name}>{item.name}</Text>
            <Text style={AppStyle.FoodItems_LandscapeStyles.price}>{item.price} VND</Text>

            {/* <TouchableOpacity  style={AppStyle.FoodItems_LandscapeStyles.addToCart}>
                <MaterialCommunityIcons name='cart-plus' size={20} color="white" />
              </TouchableOpacity> */}
          </TouchableOpacity>
        );
};


export default FoodItems_Landscape;
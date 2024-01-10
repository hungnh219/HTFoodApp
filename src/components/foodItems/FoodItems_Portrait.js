// src/components/FoodItem.js
import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import AppStyle from '../../styles/GlobalStyle'
import { useProduct } from '../../services/api/ProductContext';

import { useCart } from '../../services/api/CartContext';
import { useFavorite } from '../../services/api/FavoriteContext';

function FoodItems_Portrait({item}) {
  const { addProduct } = useCart();
  const { addProductFavorite } = useFavorite();
  const navigation = useNavigation();
  const {setProductInfo} = useProduct();

  const [quantity, setQuantity] = useState(1);
  return(
    // <View style={AppStyle.FoodItems_PortraitStyles.container}>
      
    // </View>

    <TouchableOpacity
    style={AppStyle.FoodItems_PortraitStyles.container}
    onPress={() => {
      setProductInfo(item);
      navigation.navigate('FoodDetail');
    }}
    >
      <View style={AppStyle.FoodItems_PortraitStyles.foodImageContainer}>
        <Image source={{ uri: item.imgDirect}} style={AppStyle.FoodItems_PortraitStyles.image} />
        
        <View style={AppStyle.FoodItems_PortraitStyles.ratingContainer}>
          <Text style={ AppStyle.FoodItems_PortraitStyles.rating}>
            {item.ratingAvarage}
            <MaterialCommunityIcons name="star" size={12} color="yellow" />
            ({item.ratingCount})
          </Text>
        </View>
        
        
        <TouchableOpacity onPress={() => addProductFavorite(item)} style={AppStyle.FoodItems_PortraitStyles.favoriteButton}>
          <MaterialCommunityIcons name='cards-heart' style={AppStyle.FoodItems_PortraitStyles.favoriteIcon}/>
        </TouchableOpacity>
      </View>

      <Text style={AppStyle.FoodItems_PortraitStyles.name}>{item.name}</Text>
      <Text style={AppStyle.FoodItems_PortraitStyles.price}>{item.price} VND</Text>

      <TouchableOpacity onPress={() => addProduct(item)} style={AppStyle.FoodItems_PortraitStyles.addToCart}>
        <MaterialCommunityIcons name='cart-plus' size={20} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};


export default FoodItems_Portrait;
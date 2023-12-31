// src/components/FoodItem.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AppStyle from '../../styles/GlobalStyle'

function FoodItems_Portrait({item}) {
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
        return(
          <View style={AppStyle.FoodItems_PortraitStyles.container}>
          <Image source={foodData.image} style={AppStyle.FoodItems_PortraitStyles.image} />
          <Text style={AppStyle.FoodItems_PortraitStyles.name}>{foodData.name}</Text>
          <Text style={AppStyle.FoodItems_PortraitStyles.price}>{foodData.price} $</Text>
          </View>
        );
};


export default FoodItems_Portrait;
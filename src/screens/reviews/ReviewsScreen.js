import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useFocusEffect} from '@react-navigation/native';

import AppStyle from '../../styles/GlobalStyle'

function ReviewsScreen ({ navigation }) {
  const reviewData = {
    image: require('../../../assets/img/avt.png'),
    price: 9.50,
    name: 'Alyce Lambo',
    date: '25/06/2023',
    content: 'Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.',
    rating: {
      count: 50,
      average: 4.5,
    },
  }

  useFocusEffect(
    useCallback(() => {
      const parent = navigation.getParent();
      if (parent) {
        parent.setOptions({
          tabBarStyle: { display: "none" },
        });
      }

      // return () => {
      //   if (parent) {
      //     parent.setOptions({
      //       tabBarStyle: { display: "flex" },
      //     });
      //   }
      // };
    }, [navigation]),
  );
  return (
    <View style={AppStyle.ReviewsStyles.container}>
      <View style={AppStyle.ReviewsStyles.user}>
        <Image
            style={AppStyle.ReviewsStyles.userImage}
            source={reviewData.image}
        />

        <View style={AppStyle.ReviewsStyles.userInfoContainer}>
          <Text style={AppStyle.ReviewsStyles.userName}>{reviewData.name}</Text>
          <View style={AppStyle.ReviewsStyles.ratingContainer}>
            <MaterialCommunityIcons name='star' style={AppStyle.ReviewsStyles.ratingIcon}/>
            <Text style={AppStyle.ReviewsStyles.ratingNumber}>{reviewData.rating.average}</Text>
          </View>
          <Text style={AppStyle.ReviewsStyles.reviewDate}>{reviewData.date}</Text>
        </View>
      </View>
      <Text style={AppStyle.ReviewsStyles.ratingContent}>{reviewData.content}</Text>
    </View>
  );
};

export default ReviewsScreen;
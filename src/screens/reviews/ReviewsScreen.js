import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios'
import AppStyle from '../../styles/GlobalStyle'
import { useProduct } from '../../services/api/ProductContext';

function ReviewsScreen ({ navigation }) {
  // const reviewData = {
  //   image: require('../../../assets/img/avt.png'),
  //   price: 9.50,
  //   name: 'Alyce Lambo',
  //   date: '25/06/2023',
  //   content: 'Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.',
  //   rating: {
  //     count: 50,
  //     average: 4.5,
  //   },
  // }
  const { product } = useProduct();
  console.log("product id: ", product.id);

  const [reviewData, getReviewData] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`http://192.168.68.104:5236/api/HtFoodApp/GetReviewById/${product.id}`);
        getReviewData(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchUsers();
  }, []);

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
      {reviewData.map((review) => (
      <View key={review.id} style={AppStyle.ReviewsStyles.user}>
        <Image
          style={AppStyle.ReviewsStyles.userImage}
          source={{ uri: review.imgDirect }}
        />

        <View style={AppStyle.ReviewsStyles.userInfoContainer}>
          <Text style={AppStyle.ReviewsStyles.userName}>{review.name}</Text>
          <View style={AppStyle.ReviewsStyles.ratingContainer}>
            <MaterialCommunityIcons name='star' style={AppStyle.ReviewsStyles.ratingIcon}/>
            <Text style={AppStyle.ReviewsStyles.ratingNumber}>{review.rating}</Text>
          </View>
          <Text style={AppStyle.ReviewsStyles.reviewDate}>{review.date}</Text>
        </View>
        <Text style={AppStyle.ReviewsStyles.ratingContent}>{review.content}</Text>
      </View>
    ))}
    </View>
  );
};

export default ReviewsScreen;
import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import CategoryItem from '../../components/categoryItem/CategoryItem';
import FoodItems_Portrait from '../../components/foodItems/FoodItems_Portrait';
import ScrollView from 'react-native-gesture-handler';

import AppStyle from '../../styles/GlobalStyle'

function CategoriesScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const changeSelectedCate = (category) => {
    setSelectedCategory(category);
  };

  const categories = [
    { type: 'All', image: require('../../../assets/img/burger.png') },
    { type: 'Pizza', image: require('../../../assets/img/pizza.png') },
    { type: 'Burger', image: require('../../../assets/img/burger.png') },
    { type: 'Sushi', image: require('../../../assets/img/donut.png') },
    // Add more categories as needed
  ];

  return (
    <View>
      <FlatList
        data={categories}
        horizontal={true}
        keyExtractor={(item) => item.type}
        renderItem={({ item }) => (
          <CategoryItem
            item={item}
            changeSelectedCate={changeSelectedCate}
            selectedCategory={selectedCategory}
          />
        )}
      />
      {/* xử lí hiện thị danh sách món ăn dưới này */}
    </View>
  );
}

export default CategoriesScreen;
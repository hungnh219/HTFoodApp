import React, { useState, useEffect, useCallback } from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Text, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import FoodItems_Portrait from '../../components/foodItems/FoodItems_Portrait';

import AppStyle from '../../styles/GlobalStyle'

function HomeScreen ({ navigation }) {
  const [searchText, setSearchText] = useState('')

  function handleSearch (text) {
    setSearchText(text);
  }

  useFocusEffect(
    useCallback(() => {
      const parent = navigation.getParent();
      if (parent) {
        parent.setOptions({
          tabBarStyle: { display: "flex" },
        });
      };
    }, [navigation]),
  );

  return (
    <View>
      <View style={AppStyle.HomeStyles.header}>
        <Text style={AppStyle.HomeStyles.headerTitle}>Find your{"\n"}favorite food</Text>
        <TouchableOpacity onPress={ () => navigation.navigate("Profile") }>
          <Image
            style={AppStyle.HomeStyles.headerAvt}
            source={require('../../../assets/img/avt.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={AppStyle.HomeStyles.searchContainer}>
        <SearchBar
          placeholder="What do you want to order?"
          placeholderTextColor="#DA6317"
          onChangeText={handleSearch}
          value={searchText}
          containerStyle={AppStyle.HomeStyles.searchBox}
          inputContainerStyle={AppStyle.HomeStyles.searchInputContainer}
          inputStyle={AppStyle.HomeStyles.searchInput}
          searchIcon={AppStyle.HomeStyles.searchIcon}
        />

        <Image
          style={AppStyle.HomeStyles.filterIcon}
          source={require('../../../assets/img/filter.png')}
        />
      </View>
      <ScrollView>
        <View style={AppStyle.HomeStyles.foodList}>
          <TouchableOpacity onPress={ () => navigation.navigate("FoodDetail")} style={AppStyle.HomeStyles.foodItem}>
            <FoodItems_Portrait />
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => navigation.navigate("FoodDetail")} style={AppStyle.HomeStyles.foodItem}>
            <FoodItems_Portrait />
          </TouchableOpacity>        
        </View>
        <View style={AppStyle.HomeStyles.foodList}>
          <TouchableOpacity onPress={ () => navigation.navigate("FoodDetail")} style={AppStyle.HomeStyles.foodItem}>
            <FoodItems_Portrait />
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => navigation.navigate("FoodDetail")} style={AppStyle.HomeStyles.foodItem}>
            <FoodItems_Portrait />
          </TouchableOpacity>        
        </View>
        <View style={AppStyle.HomeStyles.foodList}>
          <TouchableOpacity onPress={ () => navigation.navigate("FoodDetail")} style={AppStyle.HomeStyles.foodItem}>
            <FoodItems_Portrait />
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => navigation.navigate("FoodDetail")} style={AppStyle.HomeStyles.foodItem}>
            <FoodItems_Portrait />
          </TouchableOpacity>        
        </View>
        <View style={AppStyle.HomeStyles.foodList}>
          <TouchableOpacity onPress={ () => navigation.navigate("FoodDetail")} style={AppStyle.HomeStyles.foodItem}>
            <FoodItems_Portrait />
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => navigation.navigate("FoodDetail")} style={AppStyle.HomeStyles.foodItem}>
            <FoodItems_Portrait />
          </TouchableOpacity>        
        </View>
        <View style={AppStyle.HomeStyles.foodList}>
          <TouchableOpacity onPress={ () => navigation.navigate("FoodDetail")} style={AppStyle.HomeStyles.foodItem}>
            <FoodItems_Portrait />
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => navigation.navigate("FoodDetail")} style={AppStyle.HomeStyles.foodItem}>
            <FoodItems_Portrait />
          </TouchableOpacity>        
        </View>
      </ScrollView>
      
    </View>
  );
};

export default HomeScreen;
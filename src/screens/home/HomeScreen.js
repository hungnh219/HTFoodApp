import React, { useState, useEffect, useCallback } from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Text, Button, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import FoodItems_Portrait from '../../components/foodItems/FoodItems_Portrait';



import AppStyle from '../../styles/GlobalStyle'

function HomeScreen ({ navigation }) {
  const dataList = [
    {"description": "Day la banh cuon", "id": 1, "imgDirect": "https://file.hstatic.net/200000836951/file/1_428af928f054439eba8fe6fdd480410b.png", "name": "Banh cuon", "price": 20000, "ratingAvarage": 3.8, "ratingCount": 30, "type": "FastFood"},
    {"description": "Day la hamburger hehe", "id": 2, "imgDirect": "https://file.hstatic.net/200000836951/file/3_aca8c22730794923b874492c9041b1f7.png", "name": "Hamburger", "price": 30000, "ratingAvarage": 4.5, "ratingCount": 32, "type": "FastFood"},
    {"description": "Day la ga ran", "id": 3, "imgDirect": "https://file.hstatic.net/200000836951/file/9_31c84b606d2d44eb94bc3e13ac681a67.png", "name": "Ga ran", "price": 15000, "ratingAvarage": 4, "ratingCount": 36, "type": "FastFood"},
    {"description": "Day la hotdog", "id": 4, "imgDirect": "https://file.hstatic.net/200000836951/file/4_cc677adf2bd54c13bfc873b197dac882.png", "name": "Hotdog", "price": 10000, "ratingAvarage": 3.7, "ratingCount": 20, "type": "FastFood"},
    {"description": "Day la banh cuon", "id": 5, "imgDirect": "https://file.hstatic.net/200000836951/file/2_b4e19facc7e84318adf9c235e0be642e.png", "name": "Khoai tay chien", "price": 20000, "ratingAvarage": 3.8, "ratingCount": 30, "type": "FastFood"},
    {"description": "Day la tra sua truyen thong", "id": 6, "imgDirect": "https://file.hstatic.net/200000836951/file/5_5f7ad588de2b40cab9ce86b7be509fcd.png", "name": "Tra sua truyen thong", "price": 28000, "ratingAvarage": 4.6, "ratingCount": 124, "type": "Drink"},
    {"description": "Day la tra sua matcha", "id": 7, "imgDirect": "https://file.hstatic.net/200000836951/file/10_01341dfd75d94c15a5114dda600b3b83.png", "name": "Tra sua matcha", "price": 25000, "ratingAvarage": 4.4, "ratingCount": 88, "type": "Drink"},
    {"description": "Day la tra dao", "id": 8, "imgDirect": "https://file.hstatic.net/200000836951/file/6_a50fad8b304b4aaeaa78d8732b55dd15.png", "name": "Tra dao", "price": 20000, "ratingAvarage": 3.9, "ratingCount": 72, "type": "Drink"},
    {"description": "Day la tra dau", "id": 9, "imgDirect": "https://file.hstatic.net/200000836951/file/7_466adbd2f9b446b4bc6ca04def5bec04.png", "name": "Tra dau", "price": 20000, "ratingAvarage": 4.2, "ratingCount": 60, "type": "Drink"},
    {"description": "Day la tra vai", "id": 10, "imgDirect": "https://file.hstatic.net/200000836951/file/8_84c19158d20c42f38158c26c8da4672e.png", "name": "Tra vai", "price": 20000, "ratingAvarage": 4.1, "ratingCount": 67, "type": "Drink"}
  ];
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
      <FlatList
      data={dataList}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      renderItem = {({ item }) => (
        <FoodItems_Portrait 
          item={item} 
         />
      )}
      />
      
    </View>
  );
};

export default HomeScreen;
import React, { useState, useEffect, useCallback } from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

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
      <Button
        title="Food detail"
        onPress={ () => navigation.navigate("FoodDetail") }
      />
    </View>
  );
};

export default HomeScreen;
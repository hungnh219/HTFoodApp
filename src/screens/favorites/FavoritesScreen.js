import React from 'react';
import { View, Text, Button } from 'react-native';
import AppStyle from '../../styles/GlobalStyle'

function FavoritesScreen ({ navigation }) {
  return (
    <View>
      <Text>Home FavoritesScreen Hehe</Text>
      <Button
        title="Go to FoodDetail"
        onPress={ () => navigation.navigate("FoodDetail")}
      />
    </View>
  );
};

export default FavoritesScreen;
import React from 'react';
import { View, Text, Button } from 'react-native';
import AppStyle from '../../styles/GlobalStyle'

function HomeScreen ({ navigation }) {
  return (
    <View style={AppStyle.HomeStyles.container}>
      <Text>Home Screen Hehe</Text>
      <Button
        title="Food detail"
        onPress={ () => navigation.navigate("FoodDetail")}
      />
      <Button
        title="Profile"
        onPress={ () => navigation.navigate("Profile")}
      />
    </View>
  );
};

export default HomeScreen;
import React from 'react';
import { View, Text, Button } from 'react-native';

import AppStyle from '../../styles/GlobalStyle'

function FoodDetailScreen({ navigation }) {
  return (
    <View style={AppStyle.LoginStyles.container}>
      <Text>FoodDetailScreen Screen</Text>
      <Button
        title="Reviews"
        onPress={ () => navigation.navigate("Reviews")}
      />
    </View>
  );
};

export default FoodDetailScreen;
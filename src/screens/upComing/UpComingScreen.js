import React from 'react';
import { View, Text, Button } from 'react-native';

import AppStyle from '../../styles/GlobalStyle'

function UpComingScreen ({ navigation }) {
  return (
    <View style={AppStyle.LoginStyles.container}>
      <Text>Upcoming Screen</Text>
      <Button
        title="History"
        onPress={ () => navigation.navigate("History")}
      />
      <Button
        title="Rating"
        onPress={ () => navigation.navigate("Rating")}
      />
    </View>
  );
};

export default UpComingScreen;
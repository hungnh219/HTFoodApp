import React from 'react';
import { View, Text, Button } from 'react-native';

import AppStyle from '../../styles/GlobalStyle'

function HistoryScreen ({ navigation }) {
  return (
    <View style={AppStyle.LoginStyles.container}>
      <Text>History Screen</Text>
      <Button
        title="Upcoming"
        onPress={ () => navigation.navigate("Upcoming")}
      />
      <Button
        title="Rating"
        onPress={ () => navigation.navigate("Rating")}
      />
    </View>
  );
};

export default HistoryScreen;
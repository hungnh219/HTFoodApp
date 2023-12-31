import React from 'react';
import { View, Text, Button } from 'react-native';
import HistoryItem from '../../components/historyItem/HistoryItem'
import AppStyle from '../../styles/GlobalStyle'

function HistoryScreen ({ navigation }) {
  return (
    <View style={AppStyle.LoginStyles.container}>
      <Text>History Screen</Text>
      <HistoryItem /> {/* Use HistoryItem */}
      <Button
        title="Upcoming"
        onPress={ () => navigation.navigate("Upcoming")}
      />
      <Button
        title="Rating"
        onPress={ () => navigation.navigate("Rating")}
      />
      <HistoryItem /> 
    </View>
  );
}

export default HistoryScreen;
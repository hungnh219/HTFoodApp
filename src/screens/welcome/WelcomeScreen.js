import React from 'react';
import { View, Text, Button } from 'react-native';

import AppStyle from '../../styles/GlobalStyle'

function WelcomeScreen ({ navigation }) {
  return (
    <View>
      <Text>WelcomeScreen Hehe</Text>
      <Button
        title="Login"
        onPress={ () => navigation.navigate("Login")}
      />
    </View>
  );
};

export default WelcomeScreen;
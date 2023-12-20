import React from 'react';
import { View, Text, Button } from 'react-native';
import AppStyle from '../../styles/GlobalStyle'

function LoginScreen({ navigation }) {
  return (
    <View style={AppStyle.LoginStyles.container}>
      <Text>Login Screen</Text>
      <Button
        title="Go to HomeScreen"
        onPress={ () => navigation.navigate('Home')}
      />
    </View>
  );
};

export default LoginScreen;
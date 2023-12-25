import React from 'react';
import { View, Text, Button } from 'react-native';

import AppStyle from '../../styles/GlobalStyle'

function SignUpScreen ({ navigation }) {
  return (
    <View>
      <Text>SignUpScreen Hehe</Text>
      <Button
        title="Login"
        onPress={ () => navigation.navigate("Login")}
      />
    </View>
  );
};

export default SignUpScreen;
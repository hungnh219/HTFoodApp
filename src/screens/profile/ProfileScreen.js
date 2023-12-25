import React from 'react';
import { View, Text, Button } from 'react-native';
import AppStyle from '../../styles/GlobalStyle'

function ProfileScreen ({ navigation }) {
  return (
    <View>
      <Text>Home ProfileScreen Hehe</Text>
      <Button
        title="Edit profile"
        onPress={ () => navigation.navigate("EditProfile")}
      />

      <Button
        title="LogOut"
        onPress={ () => navigation.navigate("Login")}
      />
    </View>
  );
};

export default ProfileScreen;
import React from 'react';
import { View, Text, Button, ImageBackground, TouchableOpacity } from 'react-native';


import AppStyle from '../../styles/GlobalStyle'


function WelcomeScreen({ navigation }) {
  return (
    <View style={AppStyle.WelcomeStyles.container}>
      
      <ImageBackground source={require('../../../assets/img/unsplash.png')} style={AppStyle.WelcomeStyles.image} resizeMode="cover">
        <View style={AppStyle.WelcomeStyles.overlay} />
        <TouchableOpacity style={AppStyle.WelcomeStyles.skipBtn} onPress={ () => navigation.navigate('Login')}>
          <Text style={AppStyle.WelcomeStyles.orangeText}>Skip</Text>
        </TouchableOpacity>
        <View style={AppStyle.WelcomeStyles.welcome}>
          <Text style={AppStyle.WelcomeStyles.welcomeTitle}>Welcome to</Text>
          <Text style={[AppStyle.WelcomeStyles.welcomeTitle,AppStyle.WelcomeStyles.orangeText]}>HTFood</Text>
          <Text style={AppStyle.WelcomeStyles.welcomeMotto}>Tiện lợi và nhanh chóng!</Text>
        </View>
        
        
        
      </ImageBackground>
      
    </View>
  );
};

export default WelcomeScreen;
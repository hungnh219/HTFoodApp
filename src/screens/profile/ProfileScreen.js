import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useFocusEffect} from '@react-navigation/native';

import AppStyle from '../../styles/GlobalStyle'
import CustomTextBox from '../../components/customTextBox/CustomTextBox';

function ProfileScreen ({ navigation }) {
  const userProfile = {
    name: 'Hung dep trai',
    email: 'hungnh219@gmail.com',
    phoneNumber: '0909402109',
    address: 'thpt nhc, to ky, hoc mon, tphcm',
  };

  useFocusEffect(
    useCallback(() => {
      const parent = navigation.getParent();
      if (parent) {
        parent.setOptions({
          tabBarStyle: { display: "none" },
        });
      }
    }, [navigation]),
  );

  return (
    <View>
      <View >
        <View style={AppStyle.ProfileStyles.imageContainer}>
          <Image
            source={require('../../../assets/img/background-profile.png')}
          />
          <Image
            style={AppStyle.ProfileStyles.avtImage}
            source={require('../../../assets/img/avt.png')}
          />
          <TouchableOpacity onPress={{}} style={AppStyle.ProfileStyles.cameraButton}>
            <MaterialCommunityIcons name='camera' style={AppStyle.ProfileStyles.cameraIcon}/>
          </TouchableOpacity>
        </View>

        <View style={AppStyle.ProfileStyles.userNameAndEditProfileContainer}>
          <Text style={AppStyle.ProfileStyles.userName}>{userProfile.name}</Text>

          <TouchableOpacity onPress={ () => navigation.navigate('EditProfile')}>
            <Text style={AppStyle.ProfileStyles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View><CustomTextBox title={'name'} content={userProfile.name}/></View>

      <View><CustomTextBox title={'E-mail'} content={userProfile.email}/></View>

      <View><CustomTextBox title={'Phone number'} content={userProfile.phoneNumber}/></View>

      <TouchableOpacity style={AppStyle.ProfileStyles.logOutButton} onPress={ () => navigation.navigate('Login')}>
        <Text style={AppStyle.ProfileStyles.logOutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
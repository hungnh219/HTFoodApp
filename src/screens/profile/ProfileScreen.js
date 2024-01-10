import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios'

import BackButton from '../../components/backButton/BackButton';
import AppStyle from '../../styles/GlobalStyle'
import CustomTextBox from '../../components/customTextBox/CustomTextBox';
import FoodItems_Landscape from '../../components/foodItems/FoodItems_Landscape';
import { useAuth } from '../../services/api/AuthContext';

function ProfileScreen ({ navigation }) {
  // const userProfile = {
  //   name: 'Nguyen Hoang Hung',
  //   email: 'hungnh219@gmail.com',
  //   phoneNumber: '0909402109',
  //   address: 'thpt nhc, to ky, hoc mon, tphcm',
  // };
  const { userId } = useAuth();

  function handleSearch (text) {
    setSearchText(text);
  }

  const [userProfile, getUserProfile] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`http://192.168.68.104:5236/api/HtFoodApp/GetUserById/${userId}`);
        getUserProfile(response.data[0]);
        console.log(response.data[0])
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchUsers();
  }, []);

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
      <View style={AppStyle.OrderDetailStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackButton />
        </TouchableOpacity>
        <Text style={AppStyle.OrderDetailStyles.headerTitle}>Thông tin cá nhân</Text>
      </View>

      <View >
        <View style={AppStyle.ProfileStyles.imageContainer}>
          <Image
            source={require('../../../assets/img/background-profile.png')}
          />
          <Image
            style={AppStyle.ProfileStyles.avtImage}
            source={{ uri: userProfile.imgDirect}}
          />
          <TouchableOpacity onPress={{}} style={AppStyle.ProfileStyles.cameraButton}>
            <MaterialCommunityIcons name='camera' style={AppStyle.ProfileStyles.cameraIcon}/>
          </TouchableOpacity>
        </View>

        <View style={AppStyle.ProfileStyles.userNameAndEditProfileContainer}>
          <Text style={AppStyle.ProfileStyles.userName}>{userProfile.name}</Text>

          <TouchableOpacity onPress={ () => navigation.navigate('EditProfile')}>
            <Text style={AppStyle.ProfileStyles.editProfileText}>Chỉnh sửa thông tin</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View><CustomTextBox title={'Tên'} content={userProfile.name}/></View>

      <View><CustomTextBox title={'E-mail'} content={userProfile.mail}/></View>

      <View><CustomTextBox title={'Số điện thoại'} content={userProfile.phone}/></View>

      <TouchableOpacity style={AppStyle.ProfileStyles.logOutButton} onPress={ () => navigation.navigate('Login')}>
        <Text style={AppStyle.ProfileStyles.logOutButtonText}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
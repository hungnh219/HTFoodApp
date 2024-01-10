import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios'

import AppStyle from '../../styles/GlobalStyle'
import BackButton from '../../components/backButton/BackButton';
import CustomTextInput from '../../components/customTextInput/CustomTextInput';
import { useAuth } from '../../services/api/AuthContext';

function EditProfileScreen ({ navigation }) {
  const { userId } = useAuth();

  console.log("user id: ", userId);
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
    <View style={AppStyle.EditProfileStyles.container}>
      <View style={AppStyle.OrderDetailStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackButton />
        </TouchableOpacity>
        <Text style={AppStyle.OrderDetailStyles.headerTitle}>Chỉnh sửa thông tin</Text>
      </View>

      <View>
        <CustomTextInput title={'Họ & Tên'} content={userProfile.name}/>
      </View>
      <View>
        <CustomTextInput title={'Số điện thoại'} content={userProfile.phone}/>
      </View>
      <View>
        <CustomTextInput title={'Email'} content={userProfile.mail}/>
      </View>
      <View>
        <CustomTextInput title={'Ngày sinh'} content={userProfile.birthday}/>
      </View>
      <View>
        <CustomTextInput title={'Địa chỉ'} content={userProfile.address}/>
      </View>

      <TouchableOpacity style={AppStyle.EditProfileStyles.saveButton} onPress={ () => alert('hehe')}>
        <Text style={AppStyle.EditProfileStyles.saveButtonText}>Lưu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfileScreen;
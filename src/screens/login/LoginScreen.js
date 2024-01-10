import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Alert, ImageBackground, TouchableOpacity, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';

import AppStyle from '../../styles/GlobalStyle'
import BackButton from '../../components/backButton/BackButton';
import { useAuth } from '../../services/api/AuthContext';

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye-off');


  const { userId, login, logout } = useAuth();

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };


  const handleLogin = async () => {
    // if (username === 'hungnh219' && password === '123asd') {
    //   navigation.navigate('Main');
    // } else {
    //   Alert.alert('Invalid credentials');
    // }
    try {
      const response = await axios.post('http://192.168.68.104:5236/api/HtFoodApp/login', {
        Username: username,
        Password: password
      });
      
      if (response.data) {
        login(response.data)
        navigation.navigate('Main')
      }
    } catch (error) {
      console.error('Dang nhap sai', error);
    }
  };

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get('http://192.168.68.104:5236/api/HtFoodApp/login', {
  //         Username: username,
  //         Password: password,
  //       });
  //       console.log('check api data', username, username)
  //       console.log('check api data', response.data)
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  

  return (
    <View style={AppStyle.LoginStyles.container}>
      <ImageBackground source={require('../../../assets/img/loginbg.png')} style={AppStyle.LoginStyles.image} resizeMode="cover">
      <TouchableOpacity style={AppStyle.LoginStyles.backBtn} onPress={() => navigation.goBack()}>
        <BackButton />
      </TouchableOpacity>

      <Text style={AppStyle.LoginStyles.loginTitle}>Đăng nhập</Text>
      
      <Text style={AppStyle.LoginStyles.label}>Email</Text>
      <View style={AppStyle.LoginStyles.inputContainer}>
        <TextInput
          style={AppStyle.LoginStyles.inputField}
          value={username}
          onChangeText={setUsername}
          placeholder={'Email'}
        />
      </View>

      <Text style={AppStyle.LoginStyles.label}>Mật Khẩu</Text>
      <View style={AppStyle.LoginStyles.inputContainer}>
        <TextInput
          style={AppStyle.LoginStyles.inputField}
          name="password"
          placeholder="Nhập mật khẩu..."
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="newPassword"
          secureTextEntry={passwordVisibility}
          value={password}
          enablesReturnKeyAutomatically
          onChangeText={text => setPassword(text)}
        />
        <Pressable onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
        </Pressable>
      </View>
        
      <View style={AppStyle.LoginStyles.forgotContainer}>
        <Text style={[AppStyle.LoginStyles.orangeText, AppStyle.LoginStyles.forgotPassword]}>Quên mật khẩu?</Text>
      </View>

      <View style={AppStyle.LoginStyles.handleContainer}>
        <TouchableOpacity
          style={AppStyle.LoginStyles.loginBtn}
          onPress={handleLogin}>
          <Text style={AppStyle.LoginStyles.loginBtnText}>Đăng Nhập</Text>
        </TouchableOpacity>

        <TouchableOpacity style={AppStyle.LoginStyles.signUp} onPress={ () => navigation.navigate('SignUp')}>
          <Text style={AppStyle.LoginStyles.signUpText}>Không có tài khoản? <Text style={AppStyle.LoginStyles.orangeText}>Đăng ký</Text></Text>
        </TouchableOpacity>


        <Text style={AppStyle.LoginStyles.otherSignIn}>Đăng nhập bằng</Text>
        <View style={AppStyle.LoginStyles.methodsContainer}>
          <View style={AppStyle.LoginStyles.methods}>
            <Image style={AppStyle.LoginStyles.otherLogo} source={require('../../../assets/img/fb-icon.png')} />
            <Text>FACEBOOK</Text>
          </View>
          <View style={AppStyle.LoginStyles.methods}>
            <Image style={AppStyle.LoginStyles.otherLogo} source={require('../../../assets/img/gg-icon.png')} />
            <Text>GOOGLE</Text>
          </View>
        </View>

      </View>

      
      
      
      </ImageBackground>
      
    </View>
  );
};

export default LoginScreen;
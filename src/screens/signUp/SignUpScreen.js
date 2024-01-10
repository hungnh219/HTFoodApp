import React, { useState } from 'react';
import { View, Text, TextInput, Image, Alert, ImageBackground, TouchableOpacity, Pressable } from 'react-native';
import AppStyle from '../../styles/GlobalStyle'
import { MaterialCommunityIcons } from '@expo/vector-icons';

function SignUpScreen({ navigation }) {
  // const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };


  // const handleLogin = () => {
  //   // Here you can handle the login logic, like calling an API or navigating to another screen
  //   if (username === 'a' && password === 'a') {
  //     navigation.navigate('Main');
  //   } else {
  //     Alert.alert('Invalid credentials');
  //   }
  // };

  return (
    <View style={AppStyle.SignUpStyles.container}>
      <ImageBackground source={require('../../../assets/img/loginbg.png')} style={AppStyle.SignUpStyles.image} resizeMode="cover">
      
      <Text style={AppStyle.SignUpStyles.signUpTitle}>Đăng ký</Text>
      
<<<<<<< HEAD
      <Text style={AppStyle.SignUpStyles.label}>Họ và Tên</Text>
      <View style={AppStyle.SignUpStyles.inputContainer}>
        <TextInput
          style={AppStyle.SignUpStyles.inputField}
          placeholder={'Nhập tên ...'}
=======
      <Text style={AppStyle.SignUpStyles.label}>Full name</Text>
      <View style={AppStyle.SignUpStyles.inputContainer}>
        <TextInput
          style={AppStyle.SignUpStyles.inputField}
          placeholder={'Full name'}
>>>>>>> 9719e30007723ec66ba54745f270121421d25961
        />
      </View>

      <Text style={AppStyle.SignUpStyles.label}>Email</Text>
      <View style={AppStyle.SignUpStyles.inputContainer}>
        <TextInput
          style={AppStyle.SignUpStyles.inputField}
<<<<<<< HEAD
          placeholder={'Nhập Email ...'}
        />
      </View>

      <Text style={AppStyle.SignUpStyles.label}>Mật khẩu</Text>
=======
          placeholder={'Email'}
        />
      </View>

      <Text style={AppStyle.SignUpStyles.label}>Password</Text>
>>>>>>> 9719e30007723ec66ba54745f270121421d25961
      <View style={AppStyle.SignUpStyles.inputContainer}>
        <TextInput
          style={AppStyle.SignUpStyles.inputField}
          name="password"
<<<<<<< HEAD
          placeholder="Nhập mật khẩu ..."
=======
          placeholder="Password"
>>>>>>> 9719e30007723ec66ba54745f270121421d25961
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
        

      <View style={AppStyle.SignUpStyles.handleContainer}>
        <TouchableOpacity style={AppStyle.SignUpStyles.signUpBtn} >
<<<<<<< HEAD
          <Text style={AppStyle.SignUpStyles.signUpBtnText}>Đăng Ký</Text>
        </TouchableOpacity>

        <TouchableOpacity style={AppStyle.SignUpStyles.signUp} onPress={ () => navigation.navigate('Login')}>
          <Text style={AppStyle.SignUpStyles.signUpText}>Bạn đã có tài khoản? <Text style={AppStyle.SignUpStyles.orangeText}>Đăng nhập</Text></Text>
        </TouchableOpacity>


        <Text style={AppStyle.SignUpStyles.otherSignUp}>Đăng nhập bằng</Text>
=======
          <Text style={AppStyle.SignUpStyles.signUpBtnText}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={AppStyle.SignUpStyles.signUp} onPress={ () => navigation.navigate('Login')}>
          <Text style={AppStyle.SignUpStyles.signUpText}>Already have an account? <Text style={AppStyle.SignUpStyles.orangeText}>Login</Text></Text>
        </TouchableOpacity>


        <Text style={AppStyle.SignUpStyles.otherSignUp}>Sign up with</Text>
>>>>>>> 9719e30007723ec66ba54745f270121421d25961
        <View style={AppStyle.SignUpStyles.methodsContainer}>
          <View style={AppStyle.SignUpStyles.methods}>
            <Image style={AppStyle.SignUpStyles.otherLogo} source={require('../../../assets/img/fb-icon.png')} />
            <Text>FACEBOOK</Text>
          </View>
          <View style={AppStyle.SignUpStyles.methods}>
            <Image style={AppStyle.SignUpStyles.otherLogo} source={require('../../../assets/img/gg-icon.png')} />
            <Text>GOOGLE</Text>
          </View>
        </View>

      </View>

      
      
      
      </ImageBackground>
      
    </View>
  );
};

export default SignUpScreen;
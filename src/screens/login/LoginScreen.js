import React, { useState } from 'react';
import { View, Text, TextInput, Image, Alert, ImageBackground, TouchableOpacity, Pressable } from 'react-native';
import AppStyle from '../../styles/GlobalStyle'
import BackButton from '../../components/backButton/BackButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
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


  const handleLogin = () => {
    // Here you can handle the login logic, like calling an API or navigating to another screen
    if (username === 'a' && password === 'a') {
      navigation.navigate('Main');
    } else {
      Alert.alert('Invalid credentials');
    }
  };

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

      <Text style={AppStyle.LoginStyles.label}>Password</Text>
      <View style={AppStyle.LoginStyles.inputContainer}>
        <TextInput
          style={AppStyle.LoginStyles.inputField}
          name="password"
          placeholder="Password"
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
        <Text style={[AppStyle.LoginStyles.orangeText, AppStyle.LoginStyles.forgotPassword]}>Forgot password?</Text>
      </View>

      <View style={AppStyle.LoginStyles.handleContainer}>
        <TouchableOpacity style={AppStyle.LoginStyles.loginBtn} onPress={handleLogin}>
          <Text style={AppStyle.LoginStyles.loginBtnText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={AppStyle.LoginStyles.signUp} onPress={ () => navigation.navigate('SignUp')}>
          <Text style={AppStyle.LoginStyles.signUpText}>Don't have an account? <Text style={AppStyle.LoginStyles.orangeText}>Sign Up</Text></Text>
        </TouchableOpacity>


        <Text style={AppStyle.LoginStyles.otherSignIn}>Sign in with</Text>
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
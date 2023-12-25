import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import AuthStackNavigator from './src/navigation/AuthStackNavigator/AuthStackNavigator'
import AppStyle from './src/styles/GlobalStyle';

function App() {
  return (
    <SafeAreaView style={AppStyle.AppStyles.safeArea}>
      <NavigationContainer>
        <AuthStackNavigator/>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;


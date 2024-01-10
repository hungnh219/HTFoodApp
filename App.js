import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'

import { ProductProvider } from './src/services/api/ProductContext';
import { AuthProvider } from './src/services/api/AuthContext';
import { CartProvider } from './src/services/api/CartContext';
import { FavoriteProvider } from './src/services/api/FavoriteContext';
import { OrderProvider } from './src/services/api/OrderContext';
import AuthStackNavigator from './src/navigation/AuthStackNavigator/AuthStackNavigator';
import AppStyle from './src/styles/GlobalStyle';

function App() {
  return (
    <SafeAreaView style={AppStyle.AppStyles.safeArea}>
      <OrderProvider>
        <FavoriteProvider>
          <CartProvider>
            <AuthProvider>
              <ProductProvider>
                <NavigationContainer>
                  <AuthStackNavigator/>
                </NavigationContainer>
              </ProductProvider>
            </AuthProvider>
          </CartProvider>
        </FavoriteProvider>
      </OrderProvider>
    </SafeAreaView>
  );
}

export default App;


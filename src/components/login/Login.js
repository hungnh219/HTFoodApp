import React, { useState, useEffect, useCallback } from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import axios from 'axios';

import { useProduct } from '../../services/api/ProductContext'
import AppStyle from '../../styles/GlobalStyle'

function Login () {
  const [products, setProducts] = useState([]);
  const {setProductInfo} = useProduct();
  const navigation = useNavigation();
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://192.168.68.104:5236/api/HtFoodApp/GetAllProducts');
        // console.log('check api data', response.data)
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <View>
      
    </View>
  );
};

export default Login;
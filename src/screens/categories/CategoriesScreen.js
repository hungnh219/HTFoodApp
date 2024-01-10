import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import ScrollView from 'react-native-gesture-handler';
import axios from 'axios';

import AppStyle from '../../styles/GlobalStyle'
import CategoryItem from '../../components/categoryItem/CategoryItem';
import FoodItems_Portrait from '../../components/foodItems/FoodItems_Portrait';

function CategoriesScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dataList, setDataList] = useState(getInitialData());

  const [allProductList, setAllProductList] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://192.168.68.104:5236/api/HtFoodApp/GetAllProducts');
        setAllProductList(response.data);
        setDataList(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const [fastFoodList, setFastFoodList] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://192.168.68.104:5236/api/HtFoodApp/GetProductByTypeName/fastfood');
        setFastFoodList(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const [milkTeaList, setMilkTeaList] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://192.168.68.104:5236/api/HtFoodApp/GetProductByTypeName/milktea');
        setMilkTeaList(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const [teaList, setTeaList] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://192.168.68.104:5236/api/HtFoodApp/GetProductByTypeName/tea');
        setTeaList(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const [snackList, setSnackList] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://192.168.68.104:5236/api/HtFoodApp/GetProductByTypeName/snack');
        setSnackList(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  function getInitialData() {
    initData = allProductList;
    return initData;
  }

  const changeSelectedCate = (category) => {
    console.log(category);
    let updatedDataList = [];
    if (category == 'Fast') {
      updatedDataList = fastFoodList;
    }

    else if (category == 'Milktea') {
      updatedDataList = milkTeaList;
    }

    else if (category == 'Tea') {
      updatedDataList = teaList;
    }

    else if (category == 'Snack') {
      updatedDataList = snackList;
    }

    else {
      updatedDataList = getInitialData();
    }

    setSelectedCategory(category);
    setDataList(updatedDataList);
  };

  const categories = [
    { type: 'All', image: require('../../../assets/img/all.png') },
    { type: 'Fast', image: require('../../../assets/img/fastfood.png') },
    { type: 'Milktea', image: require('../../../assets/img/milk_tea.png') },
    { type: 'Tea', image: require('../../../assets/img/tea.png') },
    { type: 'Snack', image: require('../../../assets/img/snack.png') },
    // Add more categories as needed
  ];
  // let dataList = [
  //   {"description": "Day la banh cuon", "id": 1, "imgDirect": "https://file.hstatic.net/200000836951/file/1_428af928f054439eba8fe6fdd480410b.png", "name": "Banh cuon", "price": 20000, "ratingAvarage": 3.8, "ratingCount": 30, "type": "FastFood"},
  //   {"description": "Day la hamburger hehe", "id": 2, "imgDirect": "https://file.hstatic.net/200000836951/file/3_aca8c22730794923b874492c9041b1f7.png", "name": "Hamburger", "price": 30000, "ratingAvarage": 4.5, "ratingCount": 32, "type": "FastFood"},
  //   {"description": "Day la ga ran", "id": 3, "imgDirect": "https://file.hstatic.net/200000836951/file/9_31c84b606d2d44eb94bc3e13ac681a67.png", "name": "Ga ran", "price": 15000, "ratingAvarage": 4, "ratingCount": 36, "type": "FastFood"},
  //   {"description": "Day la hotdog", "id": 4, "imgDirect": "https://file.hstatic.net/200000836951/file/4_cc677adf2bd54c13bfc873b197dac882.png", "name": "Hotdog", "price": 10000, "ratingAvarage": 3.7, "ratingCount": 20, "type": "FastFood"},
  //   {"description": "Day la banh cuon", "id": 5, "imgDirect": "https://file.hstatic.net/200000836951/file/2_b4e19facc7e84318adf9c235e0be642e.png", "name": "Khoai tay chien", "price": 20000, "ratingAvarage": 3.8, "ratingCount": 30, "type": "FastFood"},
  //   {"description": "Day la tra sua truyen thong", "id": 6, "imgDirect": "https://file.hstatic.net/200000836951/file/5_5f7ad588de2b40cab9ce86b7be509fcd.png", "name": "Tra sua truyen thong", "price": 28000, "ratingAvarage": 4.6, "ratingCount": 124, "type": "Drink"},
  //   {"description": "Day la tra sua matcha", "id": 7, "imgDirect": "https://file.hstatic.net/200000836951/file/10_01341dfd75d94c15a5114dda600b3b83.png", "name": "Tra sua matcha", "price": 25000, "ratingAvarage": 4.4, "ratingCount": 88, "type": "Drink"},
  //   {"description": "Day la tra dao", "id": 8, "imgDirect": "https://file.hstatic.net/200000836951/file/6_a50fad8b304b4aaeaa78d8732b55dd15.png", "name": "Tra dao", "price": 20000, "ratingAvarage": 3.9, "ratingCount": 72, "type": "Drink"},
  //   {"description": "Day la tra dau", "id": 9, "imgDirect": "https://file.hstatic.net/200000836951/file/7_466adbd2f9b446b4bc6ca04def5bec04.png", "name": "Tra dau", "price": 20000, "ratingAvarage": 4.2, "ratingCount": 60, "type": "Drink"},
  //   {"description": "Day la tra vai", "id": 10, "imgDirect": "https://file.hstatic.net/200000836951/file/8_84c19158d20c42f38158c26c8da4672e.png", "name": "Tra vai", "price": 20000, "ratingAvarage": 4.1, "ratingCount": 67, "type": "Drink"}
  // ];

  return (
    <View>
      <FlatList
        style={AppStyle.CategoriesStyles.category}
        data={categories}
        horizontal={true}
        keyExtractor={(item) => item.type}
        renderItem={({ item }) => (
          <CategoryItem
            item={item}
            changeSelectedCate={changeSelectedCate}
            selectedCategory={selectedCategory}
          />
        )}
      />
      {/* xử lí hiện thị danh sách món ăn dưới này */}
      <FlatList
      data={dataList}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      renderItem = {({ item }) => (
        <FoodItems_Portrait 
          item={item} 
         />
      )}
      style={{marginBottom: 150}}
      />
    </View>
  );
}

export default CategoriesScreen;
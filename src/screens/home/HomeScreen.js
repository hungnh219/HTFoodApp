import React, { useState, useEffect, useCallback } from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet, FlatList, ScrollView, Dimensions  } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';
import Carousel from 'react-native-reanimated-carousel';

import { useProduct } from '../../services/api/ProductContext';
import { useAuth } from '../../services/api/AuthContext';
import { useFavorite } from '../../services/api/FavoriteContext';
import { useCart } from '../../services/api/CartContext';
import AppStyle from '../../styles/GlobalStyle'

function HomeScreen () {
  const width = Dimensions.get('window').width;
  const [searchText, setSearchText] = useState('')
  const [name, setName] = useState('')
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();
  const { setProductInfo } = useProduct();
  const { userId } = useAuth();
  const { addProduct } = useCart();
  const { addProductFavorite } = useFavorite();
  function handleSearch (text) {
    setSearchText(text);
    // filterProducts(text)
  }
  function getName(fullName) {
    let name = fullName.split(' ');
    let lastName = name[name.length - 1];
    return lastName;
  }
  const [userProfile, getUserProfile] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`http://192.168.68.104:5236/api/HtFoodApp/GetUserById/${userId}`);
        getUserProfile(response.data[0]);
        setName(
          getName(response.data[0].name)
        )
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchUsers();
  }, []);
  // const filterProducts = (text) => {
  //   const filteredProducts = products.filter((product) =>
  //     product.name.toLowerCase().includes(text.toLowerCase())
  //   );
  
  //   setFilteredProducts(filteredProducts);
  // };

  
  // const [products, setProducts] = useState([]);
  
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

  // const renderProductItem = ({ item }) => (
  //   <TouchableOpacity
  //     style={styles.productContainer}
  //     onPress={() => {
  //       setProductInfo(item);
  //       navigation.navigate('FoodDetail');
  //     }}
  //   >
  //     <Image style={styles.productImage} source={{ uri: item.imgDirect }} />
  //     <Text style={styles.productName}>{item.name}</Text>
  //     <View style={styles.productDetailsContainer}>
  //       <View style={styles.ratingContainer}>
  //         <Text style={styles.ratingText}>{`Rating: ${item.ratingAverage}`}</Text>
  //         <Text style={styles.ratingText}>{`(${item.ratingCount} reviews)`}</Text>
  //       </View>
  //       <Text style={styles.productPrice}>{`${item.price}VND`}</Text>
  //       {/* <TouchableOpacity style={styles.addToCartButton}>
  //         <Text style={styles.addToCartButtonText}>Add to Cart</Text>
  //       </TouchableOpacity> */}
  //     </View>
  //   </TouchableOpacity>
  // );

  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      // style={styles.productContainer}
      style={AppStyle.FoodItems_PortraitStyles.container}
      onPress={() => {
        setProductInfo(item);
        navigation.navigate('FoodDetail');
      }}
    >
      <View style={AppStyle.FoodItems_PortraitStyles.foodImageContainer}>
        <Image source={{ uri: item.imgDirect}} style={AppStyle.FoodItems_PortraitStyles.image} />
        
        <View style={AppStyle.FoodItems_PortraitStyles.ratingContainer}>
          <Text style={ AppStyle.FoodItems_PortraitStyles.rating}>
            {item.ratingAvarage}
            <MaterialCommunityIcons name="star" size={12} color="yellow" />
            ({item.ratingCount})
          </Text>
        </View>
        
        
        <TouchableOpacity onPress={() => addProductFavorite(item)} style={AppStyle.FoodItems_PortraitStyles.favoriteButton}>
          <MaterialCommunityIcons name='cards-heart' style={AppStyle.FoodItems_PortraitStyles.favoriteIcon}/>
        </TouchableOpacity>
      </View>

      <Text style={AppStyle.FoodItems_PortraitStyles.name}>{item.name}</Text>
      <Text style={AppStyle.FoodItems_PortraitStyles.price}>{item.price} VND</Text>

      <TouchableOpacity onPress={() => addProduct(item)} style={AppStyle.FoodItems_PortraitStyles.addToCart}>
        <MaterialCommunityIcons name='cart-plus' size={20} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
  useFocusEffect(
    useCallback(() => {
      const parent = navigation.getParent();
      if (parent) {
        parent.setOptions({
          tabBarStyle: { display: "flex" },
        });
      };
    }, [navigation]),
  );

  return (
    <View style={AppStyle.HomeStyles.headerContainer}>
      <View style={AppStyle.HomeStyles.header}>
        <Text style={AppStyle.HomeStyles.headerTitle}>Xin chào,{"\n"}{name}</Text>
        <TouchableOpacity onPress={ () => navigation.navigate("Profile") }>
          <Image
            style={AppStyle.HomeStyles.headerAvt}
            // source={require('../../../assets/img/avt.png')}
            source={{ uri: userProfile.imgDirect }}
          />
        </TouchableOpacity>
      </View>
      <View style={AppStyle.HomeStyles.searchContainer}>
        <SearchBar
          placeholder="Bạn muốn tìm món gì?"
          placeholderTextColor="#DA6317"
          onChangeText={handleSearch}
          value={searchText}
          containerStyle={AppStyle.HomeStyles.searchBox}
          inputContainerStyle={AppStyle.HomeStyles.searchInputContainer}
          inputStyle={AppStyle.HomeStyles.searchInput}
          searchIcon={AppStyle.HomeStyles.searchIcon}
        />

        {/* <Image
          style={AppStyle.HomeStyles.filterIcon}
          source={require('../../../assets/img/filter.png')}
        /> */}
      </View>
      {/* <Button
        title="Food detail"
        onPress={ () => navigation.navigate("FoodDetail") }
      /> */}

      <Carousel
        style={{ marginVertical: 12, }}
        loop
        width={width}
        height={160}
        autoPlay={true}
        data={products}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <Image source={{ uri: item.imgDirect}} style={{ width: '100%', height: 160 }} />
        )}
      />

      <ScrollView style={AppStyle.HomeStyles.container}>
        <Text style={AppStyle.HomeStyles.sectionTitle}>Sản Phẩm Bán Chạy</Text>
        <FlatList
          data={searchText ? products.filter((product) => product.id % 2 !== 0 && product.name.toLowerCase().includes(searchText.toLowerCase())) : products.filter((product) => product.id % 2 !== 0)}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
        <Text style={AppStyle.HomeStyles.sectionTitle}>Sản Phẩm Mới</Text>
        <FlatList
          data={searchText ? products.filter((product) => product.id % 2 === 0 && product.name.toLowerCase().includes(searchText.toLowerCase())) : products.filter((product) => product.id % 2 === 0)}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          style={{marginBottom: 50}}
        />
      </ScrollView>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     // padding: 16,
//     marginBottom: 160,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginVertical: 10,
//     marginHorizontal: 20,
//   },
//   bannerItem: {
//     width: '100%',
//     height: 200,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   bannerImage: {
//     width: '100%',
//     height: '100%',
//   },
//   bannerTitle: {
//     fontSize: 18,
//     color: '#fff',
//     position: 'absolute',
//     bottom: 16,
//     textAlign: 'center',
//   },
//   productContainer: {
//     flex: 1,
//     margin: 8,
//     borderRadius: 8,
//     overflow: 'hidden',
//     backgroundColor: '#fff',
//     elevation: 2,
//   },
//   productImage: {
//     width: '100%',
//     height: 150,
//   },
//   productName: {
//     fontSize: 16,
//     margin: 8,
//   },
//   productDetailsContainer: {
//     flex: 1,
//     justifyContent: 'space-between',
//     padding: 8,
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   ratingText: {
//     fontSize: 14,
//     marginRight: 4,
//   },
//   productPrice: {
//     fontSize: 14,
//     marginBottom: 8,
//     color: '#888',
//   },
//   addToCartButton: {
//     backgroundColor: '#3498db',
//     padding: 8,
//     borderRadius: 4,
//     alignSelf: 'flex-end', 
//     alignItems: 'center',
//   },
//   addToCartButtonText: {
//     color: '#fff',
//   },
// });

export default HomeScreen;
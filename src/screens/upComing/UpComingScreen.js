import React, {useState} from 'react';

import {StyleSheet, Text, View, TouchableOpacity, FlatList, Button} from 'react-native';
import CustomSwitch from '../../components/customSwitch/CustomSwitch';
import UpcomingItem from '../../components/upcoming/upcomingItem';
import BackButton from '../../components/backButton/BackButton';

import AppStyle from '../../styles/GlobalStyle'
import { useOrder } from '../../services/api/OrderContext';

function UpComingScreen ({ navigation }) {
  const { productOrderList, setProductOrder } = useOrder();

  console.log(productOrderList);
  
  return (
    <View>
      <View style={AppStyle.UpcomingStyles.container}>
          <CustomSwitch
            selectionMode={1}
            roundCorner={true}
            option1={'Chờ giao hàng'}
            option2={'Lịch sử đơn đặt'}
            onSelectSwitch={(index) => {
              if (index === 1) {
                navigation.navigate("Upcoming");
              } else if (index === 2) {
                selectionMode = 2;
                navigation.navigate("History");  
              }
            }}
            selectionColor={'#FE724C'}
          />
      </View>
            
      <FlatList
      data={productOrderList.slice(0, 1)}
      keyExtractor={item => item.id.toString()}
      renderItem = {({ item }) => (
        <UpcomingItem
          item={item} 
          navigation={navigation}
         />
      )}
      />
    </View>
  );
};

export default UpComingScreen;
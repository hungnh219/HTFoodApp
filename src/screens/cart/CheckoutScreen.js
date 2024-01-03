import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';


import AppStyle from '../../styles/GlobalStyle'
import CustomTextInput from '../../components/customTextInput/CustomTextInput';
import BackButton from '../../components/backButton/BackButton';

function CheckoutScreen({ navigation }) {
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

  const [paymentMethod, setPaymentMethod] = React.useState('cash');

  return (
    <View style={AppStyle.CheckoutStyles.container}>
      <View style={AppStyle.CheckoutStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackButton />
        </TouchableOpacity>
        <Text style={AppStyle.CheckoutStyles.headerTitle}>Thanh toán</Text>
      </View>
      <View>
        <CustomTextInput title={'Người nhận'} content={'Nguyen Hoang Hung'} />
      </View>
      <View>
        <CustomTextInput title={'Số điện thoại'} content={'0909402109'} />
      </View>
      <View>
        <CustomTextInput title={'Địa chỉ'} content={''} />
      </View>
      <View>
        <CustomTextInput title={'Ghi chú'} content={''} />
      </View>
      <View style={AppStyle.CheckoutStyles.method}>
        <RadioButton.Group
          onValueChange={newValue => setPaymentMethod(newValue)}
          value={paymentMethod}
        >
          <View>
            <Text>Thanh toán khi nhận hàng</Text>
            <RadioButton value="cash" />
          </View>
          <View>
            <Text>Chuyển khoản</Text>
            <RadioButton value="transfer" />
          </View>
        </RadioButton.Group>
      </View>

      <TouchableOpacity
        style={AppStyle.CheckoutStyles.saveButton}
        onPress={() => {
          if (paymentMethod === 'cash') {
            // handle cash payment
          } else if (paymentMethod === 'transfer') {
            // handle transfer payment
          }
          alert('Đặt hàng thành công');
        }}
      >
        <Text style={AppStyle.CheckoutStyles.saveButtonText}>Đặt hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckoutScreen;
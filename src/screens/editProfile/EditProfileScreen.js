import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import AppStyle from '../../styles/GlobalStyle'
import CustomTextInput from '../../components/customTextInput/CustomTextInput';

function EditProfileScreen ({ navigation }) {
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

  return (
    <View style={AppStyle.EditProfileStyles.container}>
      <View>
        <CustomTextInput title={'Full Name'} content={'Nguyen Hoang Hung'}/>
      </View>
      <View>
        <CustomTextInput title={'Mobile Number'} content={'0909402109'}/>
      </View>
      <View>
        <CustomTextInput title={'State'} content={''}/>
      </View>
      <View>
        <CustomTextInput title={'City'} content={''}/>
      </View>
      <View>
        <CustomTextInput title={'Street'} content={''}/>
      </View>

      <TouchableOpacity style={AppStyle.EditProfileStyles.saveButton} onPress={ () => alert('hehe')}>
        <Text style={AppStyle.EditProfileStyles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfileScreen;
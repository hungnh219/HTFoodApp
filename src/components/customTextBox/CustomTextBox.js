import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';

import AppStyle from '../../styles/GlobalStyle'

function CustomTextBox({ title, content }) {
  return (
    <View style={AppStyle.CustomTextBoxStyles.container}>
        <Text style={AppStyle.CustomTextBoxStyles.title}>{title}</Text>
        <View style={AppStyle.CustomTextBoxStyles.content}>
            <Text style={AppStyle.CustomTextBoxStyles.contentText}>{content}</Text>
        </View>
    </View>
  );
};

export default CustomTextBox;
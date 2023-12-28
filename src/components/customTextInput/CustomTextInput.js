import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, TextInput } from 'react-native';

import AppStyle from '../../styles/GlobalStyle'

function CustomTextInput({ title, content }) {
    const [text, onChangeText] = useState('')
  return (
    <View style={AppStyle.CustomTextInputStyles.container}>
        <Text style={AppStyle.CustomTextInputStyles.title}>{title}</Text>
        <View style={AppStyle.CustomTextInputStyles.content}>
            <TextInput
                style={AppStyle.CustomTextInputStyles.contentText}
                placeholder={content}
                onChangeText={onChangeText}
                value={text}
            />
        </View>
    </View>
  );
};

export default CustomTextInput;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function BackButton() {
  return (
    <View style={styles.button}>
      <MaterialCommunityIcons name='chevron-left' size={22} color="#232323" />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {

    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 30,
    color: 'black',
  },
});

export default BackButton;
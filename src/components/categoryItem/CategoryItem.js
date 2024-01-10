import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';


function CategoryItem({ item, changeSelectedCate, selectedCategory }) {
  

  const isSelected = item.type === selectedCategory;

  return (
    <TouchableOpacity
      style={[styles.item, isSelected && styles.selectedItem]}
      onPress={() => changeSelectedCate(item.type)}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.type}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    height: 110,
    backgroundColor: 'white',
    borderRadius: 45,
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
  },
  selectedItem: {
    backgroundColor: '#FE724C',
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default CategoryItem;
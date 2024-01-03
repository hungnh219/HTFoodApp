import { StyleSheet } from 'react-native'

const FoodItems_LandscapeStyles = StyleSheet.create({
    container: {
      width: '90%',
      padding: 10,
      marginLeft: 20,
      marginVertical: 10,
      backgroundColor: 'rgba(249, 168, 77, 0.3)',
      borderRadius: 16,
    },
    foodImageContainer: {
        position: 'relative',
    },
    image: {
        height: 180,
        borderRadius: 16,
    },
    ratingContainer: {
        position: 'absolute',
        left: 8,
        top: 8,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 16,
    },
    rating: {
        fontSize: 10,
        fontWeight: '700',
    },
    favoriteButton: {
        position: 'absolute',
        right: 8,
        top: 8,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#FE724C',
        justifyContent: 'center',
        alignItems: 'center',
    },
    favoriteIcon: {
        fontSize: 20,
        color: '#fff',
    },
    name: {
      fontSize: 16,
      fontWeight: '700',
    },
    price: {
      fontSize: 16,
      color: '#000',
    },
    addToCart: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: '#FE724C',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
export default FoodItems_LandscapeStyles;
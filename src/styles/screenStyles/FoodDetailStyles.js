import { StyleSheet } from 'react-native'


const FoodDetailStyles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 20,
    },

    // food info
    foodImageContainer: {
        position: 'relative',
    },
    foodImage: {
        width: '100%',
        height: 300,
        borderRadius: 16,
    },
    foodName: {
        fontSize: 28,
        fontWeight: '700',
        marginTop: 24,
    },
    favoriteButton: {
        position: 'absolute',
        right: 20,
        top: 20,
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
    // rating
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 4,
    },
    ratingIcon: {
        fontSize: 22,
        color: 'rgba(255, 197, 41, 1)',
        paddingRight: 8,
    },
    ratingAverage: {
        fontWeight: '900',
        paddingRight: 8,
    },
    ratingCount: {
        color: 'rgba(151, 150, 161, 1)',
        paddingRight: 8,
    },
    ratingReview: {
        color: '#FE724C',
        fontSize: 16,
        textDecorationLine: 'underline'
    },

    // price and quantity
    priceAndQuantityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },

    // price
    foodPrice: {
        color: '#FE724C',
        fontWeight: '600',
        fontSize: 20,
    },
    foodPriceNumber: {
        fontSize: 32,
    },

    // quantity
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityNumber: {
        paddingHorizontal: 12,
        fontWeight: '700',
        fontSize: 20,
    },
    decreaseQuantityButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FE724C'
    },
    decreaseQuantityText: {
        fontSize: 20,
        color: '#FE724C',
        fontWeight: '800',
    },
    increaseQuantityButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#FE724C',
        justifyContent: 'center',
        alignItems: 'center',
    },
    increaseQuantityText: {
        fontSize: 24,
        color: '#fff',
    },
    
    // description
    foodDescription: {
        color: '#858992',
        fontSize: 16,
        letterSpacing: 1,
    }
});

export default FoodDetailStyles;

import { StyleSheet } from 'react-native'


const RatingStyles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: 10,
    },

    // food info
    foodImageContainer: {
        position: 'relative',
    },
    foodImage: {
        width: '100%',
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

    
});

export default RatingStyles;

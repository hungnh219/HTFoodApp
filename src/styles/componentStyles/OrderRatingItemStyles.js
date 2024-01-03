import { StyleSheet } from 'react-native'

const OrderRatingItemStyles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    name: {
        position: 'absolute',
        top: 10,
        left: 130,
        fontSize: 16,
        fontWeight: '700',
        
    },
    description: {
        position: 'absolute',
        top: 40,
        left: 130,
    },
    price: {
        position: 'absolute',
        bottom: 15,
        left: 130,
        fontSize: 16,
    },
    rate: {
        position: 'absolute',
        bottom: 10,
        right: 20,
        padding: 10,
        borderRadius: 20,
        fontSize: 16,
        backgroundColor: '#FE724C',
    },
});
export default OrderRatingItemStyles;
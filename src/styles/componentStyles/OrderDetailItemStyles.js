import { StyleSheet } from 'react-native'

const OrderDetailItemStyles = StyleSheet.create({
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
    quantityContainer: {
        position: 'absolute',
        bottom: 15,
        right: 10,
        fontSize: 16,
    },
    quantityNumber: {
        paddingHorizontal: 12,
        fontWeight: '700',
        fontSize: 16,
    },
});
export default OrderDetailItemStyles;
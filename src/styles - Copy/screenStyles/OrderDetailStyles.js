import { StyleSheet } from 'react-native'

const OrderDetailStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    header: { 
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 60,
    },
    priceContainer: {
        marginHorizontal: 10,
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#fff',
    },
    priceLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 3,
    },
    priceText: {
        fontSize: 18,
        // fontWeight : 'bold',
    },
    
});

export default OrderDetailStyles;
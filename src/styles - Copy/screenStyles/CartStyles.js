import { StyleSheet } from 'react-native'

const CartStyles = StyleSheet.create({
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
        marginLeft: 90,
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
    checkoutButton: {
        marginTop: 40,
        marginHorizontal: 60,
        height: 60,
        backgroundColor: '#FE724C',
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkoutButtonText: {
        color: '#fff',
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: '800',
    },
});

export default CartStyles;

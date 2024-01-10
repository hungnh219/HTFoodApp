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
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 'auto',
        // textAlign: 'center',
        // marginLeft: 90,
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
    emptyCartContainer: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FE724C',
    },
    emptyCartText: {
        fontSize: 24,
        color: '#fff', // Choose a color that fits your design
        fontWeight: '800',
        textTransform: 'capitalize',
        paddingHorizontal: 24,
        lineHeight: 24,
    },
});

export default CartStyles;

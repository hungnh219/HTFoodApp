import { StyleSheet } from 'react-native'

const CartItemStyles = StyleSheet.create({
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
    delete: {
        position: 'absolute',
        right: 10,
        top: 10,
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
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 15,
        right: 10,
        fontSize: 16,
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
});
export default CartItemStyles;
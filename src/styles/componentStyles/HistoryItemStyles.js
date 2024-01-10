import { StyleSheet } from 'react-native'

const HistoryItemStyles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 10,
        height: 120,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
    },
    // image: {
    //   width: 100,
    //   height: 100,
    //   borderRadius: 20,
    // },
    // name: {
    //     position: 'absolute',
    //     top: 10,
    //     left: 130,
    //     fontSize: 16,
    //     fontWeight: '700',
        
    // },
    // delete: {
    //     position: 'absolute',
    //     right: 10,
    //     top: 10,
    // },
    // description: {
    //     position: 'absolute',
    //     top: 40,
    //     left: 130,
    // },
    statusQuantity: {
        position: 'absolute',
        top: 10,
        left: 10,
        marginLeft: 10,
    },
    status: {
        fontSize: 16,
        color: 'green',
    },
    quantity: {
        fontSize: 16,
    },
    datePrice: {
        position: 'absolute',
        top: 10,
        right: 10,
        marginRight: 10,
    },
    date: {
        fontSize: 16,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    rate: {
        position: 'absolute',
        bottom: 10,
        left: 80,
        backgroundColor: '#f3f3f3',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 0.5,
    },
    reorder: {
        position: 'absolute',
        bottom: 10,
        right: 80,
        backgroundColor: '#FE724C',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 0.5,
    },
});
export default HistoryItemStyles;
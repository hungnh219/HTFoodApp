import { StyleSheet } from 'react-native'

const UpcomingItemStyles = StyleSheet.create({
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


    price: {
        position: 'absolute',
        bottom: 50,
        left: 130,
        fontSize: 16,
    },
    rating: {
        position: 'absolute',
        bottom: 10,
        left: 130,
        fontSize: 16,
        backgroundColor: '#FE724C',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
});
export default UpcomingItemStyles;
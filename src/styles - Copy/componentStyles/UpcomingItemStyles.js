import { StyleSheet } from 'react-native'

const UpcomingItemStyles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 10,
        height: 120,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
    },
    estimate: {
        position: 'absolute',
        top: 10,
        left: 10,
        marginLeft: 10,
    },
    estimateTitle: {
        fontSize: 16,
    },
    estimateTime: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    status: {
        position: 'absolute',
        top: 10,
        right: 10,
        marginRight: 10,
    },
    statusTitle: {
        fontSize: 16,
    },
    statusContent: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cancel: {
        position: 'absolute',
        bottom: 10,
        left: 60,
        backgroundColor: '#f3f3f3',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 0.5,
    },
    tracking: {
        position: 'absolute',
        bottom: 10,
        right: 40,
        backgroundColor: '#FE724C',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 0.5,
    },
});
export default UpcomingItemStyles;
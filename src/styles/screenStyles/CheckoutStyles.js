import { StyleSheet } from 'react-native'

const CheckoutStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    method: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10,
    }, 
    
    saveButton: {
        marginBottom: 60,
        marginHorizontal: 60,
        height: 60,
        backgroundColor: '#FE724C',
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: '800',
    },
});

export default CheckoutStyles;

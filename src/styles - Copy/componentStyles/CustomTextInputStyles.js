import { StyleSheet } from 'react-native'


const CustomTextInputStyles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 12,
    },
    title: {
        color: '#9796A1',
        textTransform: 'capitalize',
        marginBottom: 8,
    },
    content: {
        width: '100%',
        height: 48,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.5)'
    },
    contentText: {
        paddingLeft: 12,
        fontSize: 20,
        fontWeight: '800',
    },
});

export default CustomTextInputStyles;

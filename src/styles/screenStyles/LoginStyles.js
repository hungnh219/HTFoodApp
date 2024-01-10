import { StyleSheet } from 'react-native'

const LoginStyles = StyleSheet.create({
    container: {
        flex: 1,   
    },
    image: {
        flex: 1,        
    },
    backBtn: {
        marginTop: 20,
        marginLeft: 20,
    },
    loginTitle: {
        marginLeft: 25,
        marginTop: 40,
        marginBottom: 20,
        fontSize: 40,
        fontWeight: 'bold',
    },
    label: {
        marginLeft: 25,
        fontSize: 18,
    },
    inputContainer: {
        marginHorizontal: 25,
        marginVertical: 10,
        paddingLeft: 10,
        width: '87%',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#d7d7d7'
    },
    inputField: {
        padding: 14,
        fontSize: 18,
        width: '90%',        
    },
    forgotContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    forgotPassword: {
        fontSize: 16,
    },
    orangeText: {
        color: '#FE724C',
    },
    handleContainer: {
        justifyContent: 'center',
        alignItems: 'center',  
    },
    loginBtn: {
        backgroundColor: '#FE724C',
        borderRadius: 27,        
    }, 
    loginBtnText: {
        paddingVertical: 15,
        paddingHorizontal: 100,  
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signUp: {
        marginVertical: 25,
    },
    signUpText: {
        fontSize: 16,
    },
    otherSignIn: {
        marginVertical: 20,
        fontSize: 16,
    },
    methodsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    methods: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30,
    },
    otherLogo: {
        width: 50,
        height: 50,
        borderRadius: 50,
        margin: 10,
    },
});

export default LoginStyles;

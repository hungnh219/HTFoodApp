import { StyleSheet } from 'react-native'

const SignUpStyles = StyleSheet.create({
    container: {
        flex: 1,   
    },
    image: {
        flex: 1,        
    },
    signUpTitle: {
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
    orangeText: {
        color: '#FE724C',
    },
    handleContainer: {
        justifyContent: 'center',
        alignItems: 'center',  
    },
    signUpBtn: {
        marginVertical: 25,
        backgroundColor: '#FE724C',
        borderRadius: 27,        
    }, 
    signUpBtnText: {
        paddingVertical: 15,
        paddingHorizontal: 100,  
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signUp: {
        // marginVertical: 25,
    },
    signUpText: {
        fontSize: 16,
        marginBottom: 20,
    },
    otherSignUp: {
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

export default SignUpStyles;

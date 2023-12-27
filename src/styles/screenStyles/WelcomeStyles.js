import { StyleSheet } from 'react-native'

const WelcomeStyles = StyleSheet.create({
    container: {
        flex: 1,   
    },
    image: {
        flex: 1,        
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    skipBtn: {
        width: 55,
        height: 32,
        marginTop: 50,
        marginLeft: 320,
        backgroundColor: '#fff',
        borderRadius: 27,
        justifyContent: 'center',
        alignItems: 'center',       
    },
    orangeText: {
        color: '#FE724C',
    },
    welcome: {
        marginTop: 150,
        marginHorizontal: 20,
    },
    welcomeTitle: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    welcomeMotto: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000',         
    },   
    
    
});

export default WelcomeStyles;

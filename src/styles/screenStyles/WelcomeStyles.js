import { StyleSheet } from 'react-native'

const WelcomeStyles = StyleSheet.create({
    container: {
        flex: 1,   
    },
    image: {
<<<<<<< HEAD
        flex: 1,    
        position: 'relative',    
=======
        flex: 1,        
>>>>>>> 9719e30007723ec66ba54745f270121421d25961
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    skipBtn: {
<<<<<<< HEAD
        position: 'absolute',
        width: 55,
        height: 32,
        top: 40,
        right: 20,
=======
        width: 55,
        height: 32,
        marginTop: 50,
        marginLeft: 320,
>>>>>>> 9719e30007723ec66ba54745f270121421d25961
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

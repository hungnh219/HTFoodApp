import { StyleSheet } from 'react-native'

const ProfileStyles = StyleSheet.create({
    // userImage
    imageContainer: {
        position: 'relative',
    },
    avtImage: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 8,
        borderColor: '#fff',
        position: 'absolute',
        left: '50%',
        bottom: 40,
        transform: [{ translateX: -50 }],
    },
    cameraButton: {
        position: 'absolute',
        left: '50%',
        transform: [{ translateX: 16 }],
        bottom: 44,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: 'rgba(179,179,179, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraIcon: {
        fontSize: 18,
        color: '#fff',
    },

    // username and edit info button
    userNameAndEditProfileContainer: {
        alignItems: 'center'
    },
    // userName
    userName: {
       fontWeight: '600',
       fontSize: 24,
       textTransform: 'capitalize',
       marginTop: -32,
       marginBottom: 4,
    },
    editProfileText: {
        color: '#9796A1',
    },

    // logout button
    logOutButton: {
        marginTop: 80,
        marginHorizontal: 60,
        height: 60,
        backgroundColor: '#FE724C',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logOutButtonText: {
        color: '#fff',
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: '800',
    },
});

export default ProfileStyles;

import { StyleSheet } from 'react-native'

const ReviewsStyles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        marginBottom: 20,
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userAvt: {
        position: 'relative',
    },
    userImage: {
        height: 48,
        width: 48,
        borderRadius: 24,
    },
    userInfoContainer: {
        paddingLeft: 20,
    },
    userName: {
        fontWeight: '600',
        fontSize: 16,
    },
    reviewDate: {
        color: '#B3B3B3',
    },
    ratingContainer: {
        flexDirection: 'row',
    },
    ratingIcon: {
        fontSize: 22,
        color: 'rgba(255, 197, 41, 1)',
        paddingRight: 8,
    },
    ratingNumber: {
        alignItems: 'center',
        transform: [{ translateY: 1 }],
        color: 'rgba(255, 197, 41, 1)',
        fontWeight: '800',
        fontSize: 16,
    },
    ratingContent: {
        paddingTop: 12,
        fontSize: 16,
        color: '#7F7D92',
        letterSpacing: 1,
    },
});

export default ReviewsStyles;

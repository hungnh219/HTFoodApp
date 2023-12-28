import { StyleSheet } from 'react-native'

const HomeStyles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    },
    header: {
        marginTop: 20,
        flexDirection: 'row',
        marginHorizontal: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        fontWeight: '800',
        fontSize: 36,
        textTransform: 'capitalize',
        paddingRight: 20,
    },
    headerAvt: {
        borderRadius: 20,
        width: 60,
        height: 60,
    },
    searchContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    searchBox: {
        flex: 0.95,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        margin: 0,
        padding: 0,
        paddingRight: 20,
    },
    searchInputContainer: {
        backgroundColor: 'rgba(249, 168, 77, 0.3)',
        borderRadius: 20,
    },
    searchInput: {
        backgroundColor: 'rgba(249, 168, 77, 0.1)',
        // backgroundColor: 'red',
        color: '#DA6317',
    },
    searchIcon: {
        color: '#DA6317',
        size: 30,
    },
    filterIcon: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(249, 168, 77, 0.1)',
        borderRadius: 12,
    }
});

export default HomeStyles;

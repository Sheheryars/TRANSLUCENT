import { StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CONTENT_WIDTH = SCREEN_WIDTH * 0.9;
const DELETE_WIDTH = 80;

const lightSavedChatsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        paddingTop: 70,
        backgroundColor: '#FFFFFF',
        width: '100%',
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000',
        fontFamily: 'Futura',
        left: 10,
    },
    placeholder: {
        width: 28,
    },
    chatList: {
        paddingHorizontal: 16,
    },
    chatItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        backgroundColor: '#FFFFFF',
        width: CONTENT_WIDTH,
    },
    chatItemContent: {
        flex: 1,
    },
    chatTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 4,
    },
    chatPreview: {
        fontSize: 14,
        color: '#666666',
    },
    chatDate: {
        fontSize: 12,
        color: '#999999',
    },
    deleteButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: DELETE_WIDTH,
        height: '100%',
    },
    icon: {
        color: '#000000',
    },
});

export default lightSavedChatsStyles;
import { StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CONTENT_WIDTH = SCREEN_WIDTH * 0.9;
const DELETE_WIDTH = 80;

const darkSavedChatsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        paddingTop: 70,
        backgroundColor: '#121212',
        width: '100%',
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
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
        borderBottomColor: '#2C2C2C',
        backgroundColor: '#1E1E1E',
        width: CONTENT_WIDTH,
    },
    chatItemContent: {
        flex: 1,
    },
    chatTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 4,
    },
    chatPreview: {
        fontSize: 14,
        color: '#BBBBBB',
    },
    chatDate: {
        fontSize: 12,
        color: '#888888',
    },
    deleteButton: {
        backgroundColor: '#FF4136',
        justifyContent: 'center',
        alignItems: 'center',
        width: DELETE_WIDTH,
        height: '100%',
    },
    icon: {
        color: '#FFFFFF',
    },
});

export default darkSavedChatsStyles;
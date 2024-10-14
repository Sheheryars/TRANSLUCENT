import { StyleSheet } from 'react-native';

const lightAuraStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        paddingTop: 70,
        backgroundColor: '#FFFFFF',
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000',
        fontFamily: 'Futura',
        left: 10,
    },
    savedButton: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    messageList: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    messageBubble: {
        maxWidth: '80%',
        padding: 12,
        borderRadius: 20,
        marginVertical: 8,
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#DCF8C6',
    },
    aiMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#F0F0F0',
    },
    messageText: {
        fontSize: 16,
        color: '#000000',
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: '#F0F0F0',
        paddingBottom: 30,
    },
    input: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginRight: 10,
        fontSize: 16,
        color: '#000000',
    },
    sendButton: {
        backgroundColor: '#000000',
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: '#000000',
    },
});

export default lightAuraStyles;
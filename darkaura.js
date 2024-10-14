import { StyleSheet } from 'react-native';

const darkAuraStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        paddingTop: 70,
        backgroundColor: '#121212',
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontFamily: 'Futura',
        left: 10,
    },
    savedButton: {
        fontSize: 20,
        color: '#FFFFFF',
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
        backgroundColor: '#1ABC9C',  
    },
    aiMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#797d7f',  
    },
    messageText: {
        fontSize: 16,
        color: '#FFFFFF',
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: '#1E1E1E',
        paddingBottom: 30,
    },
    input: {
        flex: 1,
        backgroundColor: '#2C2C2C',
        borderRadius: 25,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginRight: 10,
        fontSize: 16,
        color: '#FFFFFF',
    },
    sendButton: {
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: '#FFFFFF',
    },
});

export default darkAuraStyles;

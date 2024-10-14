import { StyleSheet } from 'react-native';

const darkStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 70,
        paddingBottom: 20,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#2C2C2C',
    },
    backButton: {
        position: 'absolute',
        left: 16,
        top: 75,
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF',
        left: 10,
    },
    content: {
        flex: 1,
    },
    sectionTitle: {
        fontSize: 16,
        color: '#FFFFFF',
        marginLeft: 16,
        marginTop: 24,
        marginBottom: 8,
    },
    notificationItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    notificationItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    notificationIcon: {
        marginRight: 16,
    },
    notificationItemTitle: {
        fontSize: 16,
        color: '#FFFFFF',
    },
    text: {
        color: '#FFFFFF',
    },
    switch: {
        trackColor: { false: "#4D4D4D", true: "#a6acaf" },
        thumbColor: { false: "#BDBDBD", true: "#FFFFFF" },
        ios_backgroundColor: "#3e3e3e",
    },
});

export default darkStyles;
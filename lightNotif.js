import { StyleSheet } from 'react-native';

const lightStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 70,
        paddingBottom: 20,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    backButton: {
        position: 'absolute',
        left: 16,
        top: 75,
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000000',
        left: 10,
    },
    content: {
        flex: 1,
    },
    sectionTitle: {
        fontSize: 16,
        color: '#000000',
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
        color: '#000000',
    },
    text: {
        color: '#000000',
    },
    switch: {
        trackColor: { false: "#D1D1D1", true: "#81b0ff" },
        thumbColor: { false: "#F4F3F4", true: "#FFFFFF" },
        ios_backgroundColor: "#3e3e3e",
    },
});

export default lightStyles;
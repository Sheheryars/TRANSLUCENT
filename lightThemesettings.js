import { StyleSheet } from 'react-native';

const lightStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        paddingTop: 75,
        backgroundColor: '#FFFFFF',
    },
    headerTitle: {
        fontSize: 38,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
    },
    sectionTitle: {
        fontSize: 16,
        marginLeft: 16,
        marginTop: 24,
        marginBottom: 8,
    },
    settingsItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#F0F0F0',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    settingsItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    settingsIcon: {
        marginRight: 16,
    },
    settingsItemTitle: {
        fontSize: 16,
    },
    settingsItemRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    settingsItemValue: {
        fontSize: 14,
        color: '#666666',
        marginRight: 8,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        width: '70%',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    themeOption: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginVertical: 5,
        backgroundColor: '#F0F0F0',
        borderRadius: 5,
        width: '100%',
    },
    selectedTheme: {
        backgroundColor: '#aed6f1',
    },
    themeIcon: {
        marginRight: 10,
    },
    themeText: {
        fontSize: 16,
    },
    applyButton: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#000000',
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    applyButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        color: '#000000',
    },
});

export default lightStyles;
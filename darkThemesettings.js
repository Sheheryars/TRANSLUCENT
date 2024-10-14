import { StyleSheet } from 'react-native';

const darkStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        paddingTop: 75,
        backgroundColor: '#121212',
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
        backgroundColor: '#1E1E1E',
        borderBottomWidth: 1,
        borderBottomColor: '#2C2C2C',
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
        color: '#BBBBBB',
        marginRight: 8,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContent: {
        backgroundColor: '#1E1E1E',
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
        backgroundColor: '#2C2C2C',
        borderRadius: 5,
        width: '100%',
    },
    selectedTheme: {
        backgroundColor: '#d0d3d4',
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
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    applyButtonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        color: '#FFFFFF',
    },
});

export default darkStyles;
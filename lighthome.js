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
        padding: 20,
        paddingTop: 80,
        backgroundColor: '#FFFFFF',
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'Futura',
    },
    scrollContent: {
        flexGrow: 1,
        padding: 16,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    gridItem: {
        aspectRatio: 1,
        marginBottom: 16,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#F0F0F0',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4.65,
        elevation: 8,
    },
    gradientBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#F0F0F0',
    },
    itemTitle: {
        fontSize: 22,
        fontFamily: 'Helvetica-Bold',
        position: 'absolute',
        top: 20,
        left: 20,
    },
    batteryText: {
        fontSize: 22,
        fontFamily: 'Helvetica',
        position: 'absolute',
        top: 20,
        right: 20,
    },
    icon: {
        alignSelf: 'center',
    },
    itemText: {
        fontSize: 16,
        marginTop: 12,
        textAlign: 'center',
        fontFamily: 'Helvetica-Bold',
    },
    settingsOverlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
    },
    silentModeActive: {
        backgroundColor: '#4A4A4A',
    },
    silentModeActiveBackground: {
        backgroundColor: '#4A4A4A',
    },
    silentModeActiveText: {
        color: '#FFFFFF',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        textAlign: 'center',
    },
    text: {
        color: '#000000',
    },
});

export default lightStyles;
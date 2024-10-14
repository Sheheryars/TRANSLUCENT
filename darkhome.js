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
        padding: 20,
        paddingTop: 80,
        backgroundColor: '#121212',
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'Futura',
        color: '#FFFFFF',
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
        backgroundColor: '#1E1E1E',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    gradientBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#1E1E1E',
    },
    itemTitle: {
        fontSize: 22,
        fontFamily: 'Helvetica-Bold',
        position: 'absolute',
        top: 20,
        left: 20,
        color: '#FFFFFF',
    },
    batteryText: {
        fontSize: 22,
        fontFamily: 'Helvetica',
        position: 'absolute',
        top: 20,
        right: 20,
        color: '#FFFFFF',
    },
    icon: {
        alignSelf: 'center',
    },
    itemText: {
        fontSize: 16,
        marginTop: 12,
        textAlign: 'center',
        fontFamily: 'Helvetica-Bold',
        color: '#FFFFFF',
    },
    settingsOverlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: '#121212',
    },
    silentModeActive: {
        backgroundColor: '#D3D3D3', // Light grey when active
    },
    silentModeActiveBackground: {
        backgroundColor: '#D3D3D3', // Light grey for the grid item background
    },
    silentModeActiveText: {
        color: '#000000', // Change the text color to black for contrast
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContent: {
        backgroundColor: '#1E1E1E',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#FFFFFF',
    },
    text: {
        color: '#FFFFFF', 
    },
});

export default darkStyles;

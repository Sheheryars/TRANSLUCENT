import { StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CONTENT_WIDTH = SCREEN_WIDTH * 0.9;

const darkStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    contentContainer: {
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        paddingTop: 80,
        backgroundColor: '#121212',
        width: '100%',
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontFamily: 'Futura',
        marginLeft: 16,
        left: 55,
        top: -4,
    },
    topBox: {
        width: CONTENT_WIDTH,
        backgroundColor: '#1F1F1F',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        padding: 20,
        marginTop: 20,
        alignItems: 'center',
        alignSelf: 'center',
    },
    calorieCircleContainer: {
        width: CONTENT_WIDTH * 0.6,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    calorieCircle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 1000,
        borderWidth: 10,
        borderColor: '#2C2C2C',
    },
    progressCircle: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 1000,
        borderWidth: 10,
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: '#FFFFFF', // Changed progress color to white
        borderTopColor: '#FFFFFF',  // Changed progress color to white
        transform: [{ rotate: '-45deg' }],
    },
    innerCircle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#121212',
        width: '85%',
        height: '85%',
        borderRadius: 1000,
    },
    remainingCalories: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    remainingText: {
        fontSize: 16,
        color: '#FFFFFF',
    },
    calorieInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    calorieInfoText: {
        fontSize: 14,
        color: '#FFFFFF',
    },
    macrosRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    macroItem: {
        alignItems: 'center',
        flex: 1,
    },
    macroTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 5,
    },
    macroText: {
        fontSize: 12,
        color: '#FFFFFF',
    },
    macroBar: {
        width: '100%',
        height: 4,
        backgroundColor: '#2C2C2C',
        borderRadius: 2,
        marginBottom: 5,
    },
    macroProgress: {
        height: '100%',
        borderRadius: 2,
        backgroundColor: '#FFFFFF',
    },
    mealsContainer: {
        marginTop: 40,
        paddingHorizontal: 20,
        width: '100%',
    },
    mealItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: '#121212',
        borderBottomWidth: 1,
        borderBottomColor: '#2C2C2C',
        paddingBottom: 15,
    },
    mealInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    mealName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#FFFFFF',
    },
    mealCalories: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    calorieText: {
        fontSize: 14,
        color: '#FFFFFF',
        marginRight: 10,
    },
    addButton: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: '#121212',
        fontSize: 16,
        fontWeight: 'bold',
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#121212',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#2C2C2C',
    },
    tabItem: {
        alignItems: 'center',
    },
    tabText: {
        fontSize: 10,
        color: '#3498db',
        marginTop: 4,
    },
});

export default darkStyles;

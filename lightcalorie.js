import { StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CONTENT_WIDTH = SCREEN_WIDTH * 0.9;

const lightStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    contentContainer: {
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        paddingTop: 80,
        backgroundColor: '#FFFFFF',
        width: '100%',
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000',
        fontFamily: 'Futura',
        marginLeft: 16,
        left: 55,
        top: -4,
    },
    topBox: {
        width: CONTENT_WIDTH,
        backgroundColor: '#F3F3F3',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000000',
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
        borderColor: '#DDDDDD',
    },
    progressCircle: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 1000,
        borderWidth: 10,
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: '#000000',  // Black progress indicator
        borderTopColor: '#000000',    // Black progress indicator
        transform: [{ rotate: '-45deg' }],
    },
    innerCircle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        width: '85%',
        height: '85%',
        borderRadius: 1000,
    },
    remainingCalories: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#000000',
    },
    remainingText: {
        fontSize: 16,
        color: '#000000',
    },
    calorieInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    calorieInfoText: {
        fontSize: 14,
        color: '#000000',
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
        color: '#000000',
        marginBottom: 5,
    },
    macroText: {
        fontSize: 12,
        color: '#000000',
    },
    macroBar: {
        width: '100%',
        height: 4,
        backgroundColor: '#DDDDDD',
        borderRadius: 2,
        marginBottom: 5,
    },
    macroProgress: {
        height: '100%',
        borderRadius: 2,
        backgroundColor: '#000000',
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
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#DDDDDD',
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
        color: '#000000',
    },
    mealCalories: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    calorieText: {
        fontSize: 14,
        color: '#000000',
        marginRight: 10,
    },
    addButton: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#DDDDDD',
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

export default lightStyles;

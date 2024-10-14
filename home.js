import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Animated, TouchableWithoutFeedback, ScrollView, useWindowDimensions, Dimensions, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Settings from './settings.js';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import theme styles
import lightStyles from './styles/lighthome.js';
import darkStyles from './styles/darkhome.js';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Home = () => {
    const router = useRouter();
    const { width, height } = useWindowDimensions();
    const isPortrait = height > width;

    const gridItemWidth = isPortrait ? '48%' : '31%';
    const largeItemWidth = isPortrait ? '100%' : '48%';

    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isSilentMode, setIsSilentMode] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const settingsAnimatedValue = useRef(new Animated.Value(SCREEN_WIDTH)).current;
    const animatedValue = useRef(new Animated.Value(1)).current;
    const [currentTheme, setCurrentTheme] = useState('light');
    const [styles, setStyles] = useState(lightStyles);
    
    useEffect(() => {
        loadTheme();
        loadSilentModeState();
    }, []);

    const loadTheme = async () => {
        try {
            const savedTheme = await AsyncStorage.getItem('theme');
            if (savedTheme !== null) {
                setCurrentTheme(savedTheme);
                setStyles(savedTheme === 'dark' ? darkStyles : lightStyles);
            }
        } catch (error) {
            console.error('Error loading theme:', error);
        }
    };

    const loadSilentModeState = async () => {
        try {
            const savedSilentMode = await AsyncStorage.getItem('silentMode');
            if (savedSilentMode !== null) {
                setIsSilentMode(JSON.parse(savedSilentMode));
            }
        } catch (error) {
            console.error('Error loading silent mode state:', error);
        }
    };

    const handleIconPressIn = () => {
        Animated.spring(animatedValue, {
            toValue: 0.8,
            friction: 3,
            useNativeDriver: true,
        }).start();
    };

    const handleIconPressOut = () => {
        Animated.spring(animatedValue, {
            toValue: 1,
            friction: 3,
            useNativeDriver: true,
        }).start(() => {
            setIsSettingsOpen(true);
            Animated.timing(settingsAnimatedValue, {
                toValue: 0,
                duration: 200, 
                useNativeDriver: true,
            }).start();
        });
    };

    const closeSettings = () => {
        Animated.timing(settingsAnimatedValue, {
            toValue: SCREEN_WIDTH,
            duration: 200, 
            useNativeDriver: true,
        }).start(() => setIsSettingsOpen(false));
    };

    const toggleSilentMode = async () => {
        const newSilentMode = !isSilentMode;
        setIsSilentMode(newSilentMode);
        setShowModal(true);
        setTimeout(() => setShowModal(false), 1000);
        try {
            await AsyncStorage.setItem('silentMode', JSON.stringify(newSilentMode));
        } catch (error) {
            console.error('Error saving silent mode state:', error);
        }
    };

    const renderGridItem = (iconName, text, isAuraSpecs = false, battery = null, additionalStyle = {}, onPress = null) => {
        const itemStyle = [
            styles.gridItem,
            additionalStyle,
            text === "Silent Mode" && isSilentMode ? styles.silentModeActive : {},
        ];

        // Handle touch events
        const handlePress = () => {
            if (onPress) {
                onPress();
            } else {
                // Default actions for other buttons
                switch (text) {
                    case "Translate":
                        router.push('/translation');
                        break;
                    case "Teleprompt":
                        router.push('/teleprompter');
                        break;
                    case "QuickNote":
                        router.push('/notes');
                        break;
                    case "Aura AI":
                        router.push('/aura_ai');
                        break;
                    case "Navigate":
                        router.push('/navigation');
                        break;
                    case "Calorie Calculator":
                        router.push('/calorie');
                        break;
                   // case "AuraSpecs":
                    //        router.push('/3d_model');
                      //      break;
                    default:
                        break;
                }
            }
        };

        return (
            <TouchableWithoutFeedback onPress={handlePress}>
                <Animated.View style={itemStyle}>
                    <View style={[styles.gradientBackground, text === "Silent Mode" && isSilentMode ? styles.silentModeActiveBackground : {}]}>
                        {isAuraSpecs ? (
                            <>
                                <Text style={[styles.itemTitle, styles.text]}>{text}</Text>
                                <Text style={[styles.batteryText, styles.text]}>{battery}</Text>
                                <Ionicons name="glasses-outline" size={200} color={styles.text.color} style={styles.icon} />
                            </>
                        ) : (
                            <>
                                <Ionicons name={iconName} size={40} color={text === "Silent Mode" && isSilentMode ? "#FFFFFF" : styles.text.color} />
                                <Text style={[styles.itemText, text === "Silent Mode" && isSilentMode ? styles.silentModeActiveText : {}]}>{text}</Text>
                            </>
                        )}
                    </View>
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={[styles.headerText, styles.text]}>TRANSLUCENT</Text>
                <TouchableWithoutFeedback
                    onPressIn={handleIconPressIn}
                    onPressOut={handleIconPressOut}
                >
                    <Animated.View style={{ transform: [{ scale: animatedValue }] }}>
                        <Ionicons name="options-outline" size={28} color={styles.text.color} />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.grid}>
                    {renderGridItem("glasses-outline", "AuraSpecs", true, '46%', { width: largeItemWidth, aspectRatio: 2 })}
                    {renderGridItem("notifications-off-outline", "Silent Mode", false, null, { width: gridItemWidth }, toggleSilentMode)}
                    {renderGridItem("document-text-outline", "QuickNote", false, null, { width: gridItemWidth })}
                    {renderGridItem("language-outline", "Translate", false, null, { width: gridItemWidth })}
                    {renderGridItem("navigate-circle-outline", "Navigate", false, null, { width: gridItemWidth })}
                    {renderGridItem("list-outline", "Teleprompt", false, null, { width: gridItemWidth })}
                    {renderGridItem("mic-outline", "Aura AI", false, null, { width: gridItemWidth, backgroundColor: currentTheme === 'dark' ? '#8B8000' : '#FFFF00' })}
                    {renderGridItem("videocam-outline", "Record", false, null, { width: gridItemWidth })}
                    {renderGridItem("nutrition-outline", "Calorie Calculator", false, null, { width: gridItemWidth })}
                </View>
            </ScrollView>

            <Animated.View 
                style={[
                    styles.settingsOverlay,
                    {
                        transform: [{ translateX: settingsAnimatedValue }],
                    },
                ]}
            >
                <Settings onClose={closeSettings} />
            </Animated.View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={showModal}
                onRequestClose={() => setShowModal(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={[styles.modalText, styles.text]}>
                            {isSilentMode ? "Glasses changed to silent mode" : "Glasses changed to normal mode"}
                        </Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Home;

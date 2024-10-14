import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

// Import theme styles
import lightStyles from './styles/lightcalorie';
import darkStyles from './styles/darkcalorie';

const CalorieCalculator = () => {
    const [goalCalories, setGoalCalories] = useState('2361'); // Updated default goal
    const [consumedCalories, setConsumedCalories] = useState(1291);
    const [remainingCalories, setRemainingCalories] = useState(826);
    const [burnedCalories, setBurnedCalories] = useState(244);
    const [macros, setMacros] = useState({ carbs: 206, protein: 35, fat: 32 });
    const [meals, setMeals] = useState([
        { name: 'Breakfast', calories: 535, icon: 'cafe-outline' },
        { name: 'Lunch', calories: 647, icon: 'fast-food-outline' },
        { name: 'Dinner', calories: 529, icon: 'restaurant-outline' },
        { name: 'Snacks', calories: 106, icon: 'nutrition-outline' },
    ]);
    const router = useRouter();
    const [currentTheme, setCurrentTheme] = useState('light');
    const [styles, setStyles] = useState(lightStyles);

    useEffect(() => {
        loadTheme();
        updateRemainingCalories();
    }, [consumedCalories]);

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

    const updateRemainingCalories = () => {
        const remaining = parseInt(goalCalories) - consumedCalories;
        setRemainingCalories(remaining > 0 ? remaining : 0);
    };

    const addCaloriesFromCamera = (calories) => {
        // This function would be called after processing the camera image
        setConsumedCalories(prevCalories => prevCalories + calories);
        // Update meals and macros as needed
    };

    const openCamera = () => {
        // Implement camera functionality here
        console.log("Opening camera for food image capture");
        // After capturing and processing the image, call addCaloriesFromCamera(calories)
    };

    const renderCalorieCircle = () => {
        const progress = (consumedCalories / parseInt(goalCalories)) * 100;
    
        return (
            <View style={styles.calorieCircle}>
                <View style={[styles.progressCircle, { transform: [{ rotate: `${progress * 3.6}deg` }] }]} />
                <View style={styles.innerCircle}>
                    <Text style={styles.remainingCalories}>{remainingCalories}</Text>
                    <Text style={styles.remainingText}>Remaining</Text>
                </View>
            </View>
        );
    };
    
    const renderMacros = () => (
        <View style={styles.macrosRow}>
            <View style={styles.macroItem}>
                <Text style={styles.macroTitle}>Carbs</Text>
                <View style={styles.macroBar}>
                    <View style={[styles.macroProgress, { width: `${(macros.carbs / 258) * 100}%` }]} />
                </View>
                <Text style={styles.macroText}>{macros.carbs}/258g</Text>
            </View>
            <View style={styles.macroItem}>
                <Text style={styles.macroTitle}>Protein</Text>
                <View style={styles.macroBar}>
                    <View style={[styles.macroProgress, { width: `${(macros.protein / 103) * 100}%` }]} />
                </View>
                <Text style={styles.macroText}>{macros.protein}/103g</Text>
            </View>
            <View style={styles.macroItem}>
                <Text style={styles.macroTitle}>Fat</Text>
                <View style={styles.macroBar}>
                    <View style={[styles.macroProgress, { width: `${(macros.fat / 68) * 100}%` }]} />
                </View>
                <Text style={styles.macroText}>{macros.fat}/68g</Text>
            </View>
        </View>
    );
    
    const renderMeals = () => (
        <View style={styles.mealsContainer}>
            {meals.map((meal, index) => (
                <View key={index} style={styles.mealItem}>
                    <View style={styles.mealInfo}>
                        <Ionicons name={meal.icon} size={24} color={currentTheme === 'dark' ? '#fff' : '#000'} />
                        <Text style={styles.mealName}>{meal.name}</Text>
                    </View>
                    <View style={styles.mealCalories}>
                        <Text style={styles.calorieText}>{meal.calories} Cal</Text>
                        <TouchableOpacity style={styles.addButton} onPress={openCamera}>
                            <Text style={styles.addButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </View>
    );
    

    const handleBack = () => {
        router.back();
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={28} color={currentTheme === 'dark' ? '#FFFFFF' : '#000000'} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Daily Calories</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.topBox}>
                    <View style={styles.calorieCircleContainer}>
                        {renderCalorieCircle()}
                    </View>
                    <View style={styles.calorieInfo}>
                        <Text style={styles.calorieInfoText}>{consumedCalories} Eaten</Text>
                        <Text style={styles.calorieInfoText}>{burnedCalories} Burned</Text>
                    </View>
                    {renderMacros()}
                </View>
                {renderMeals()}
            </ScrollView>        
        </View>
    );
};

export default CalorieCalculator;

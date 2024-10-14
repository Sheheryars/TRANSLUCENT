import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightStyles } from './styles/lightnavigate';
import { darkStyles } from './styles/darknavigate';

const Navigation = () => {
  const router = useRouter();
  const [destination, setDestination] = useState('');
  const [currentTheme, setCurrentTheme] = useState('light');
  const styles = currentTheme === 'dark' ? darkStyles : lightStyles;

  const loadTheme = useCallback(async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedTheme !== null) {
        setCurrentTheme(savedTheme);
      }
    } catch (error) {
      console.error('Error loading theme:', error);
    }
  }, []);

  useEffect(() => {
    loadTheme();
  }, [loadTheme]);

  const handleBack = () => {
    router.back();
  };

  const handleNavigate = () => {
    // Here you would integrate with the Google Maps API
    console.log('Navigating to:', destination);
    // Implement navigation logic
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={28} color={currentTheme === 'dark' ? '#FFFFFF' : '#000000'} />
          </TouchableOpacity>
          <Text style={styles.headerText}>NAVIGATION</Text>
        </View>

        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapText}>Map will be displayed here</Text>
          {/* Replace this View with the actual Google Maps component */}
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.locationContainer}>
            <Ionicons name="location" size={24} color={currentTheme === 'dark' ? '#FFFFFF' : '#000000'} style={styles.icon} />
            <Text style={styles.locationText}>Current Location</Text>
          </View>
          <View style={styles.destinationContainer}>
            <Ionicons name="flag" size={24} color={currentTheme === 'dark' ? '#FFFFFF' : '#000000'} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Enter destination"
              placeholderTextColor={currentTheme === 'dark' ? '#AAAAAA' : '#666666'}
              value={destination}
              onChangeText={setDestination}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.navigateButton} onPress={handleNavigate}>
          <Text style={styles.navigateButtonText}>Start Navigation</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Navigation;
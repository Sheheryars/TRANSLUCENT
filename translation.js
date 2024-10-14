import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightStyles } from './styles/lighttranslation';
import { darkStyles } from './styles/darktranslation';

// Common Languages
const languages = [
  'ENGLISH', 'FRENCH', 'CHINESE', 'JAPANESE', 'KOREAN',
  'SPANISH', 'ARABIC', 'HINDI', 'THAI', 'VIETNAMESE',
  'GERMAN', 'ITALIAN', 'PORTUGUESE', 'RUSSIAN', 'SWEDISH',
  'DUTCH', 'TURKISH', 'NORWEGIAN', 'FINNISH', 'DANISH'
];

const TranslationPage = () => {
  const router = useRouter();
  const [selectedLanguageBefore, setSelectedLanguageBefore] = useState('ENGLISH');
  const [selectedLanguageAfter, setSelectedLanguageAfter] = useState('FRENCH');
  const [engageMessage, setEngageMessage] = useState('');
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

  const handleLanguageSelect = (language, isBefore) => {
    if (isBefore) {
      setSelectedLanguageBefore(language);
    } else {
      setSelectedLanguageAfter(language);
    }
  };

  const handleEngagePress = () => {
    if (selectedLanguageBefore === selectedLanguageAfter) {
      Alert.alert('Same Language Selected', 'You cannot engage with the same language for both lists.');
      return;
    }
    setEngageMessage(`Engaging Translation from ${selectedLanguageBefore} to ${selectedLanguageAfter}.`);
    
    setTimeout(() => {
      setEngageMessage('');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 5 }}>
          <Ionicons name="arrow-back" size={28} color={currentTheme === 'dark' ? '#FFFFFF' : '#000000'} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Aura Translation</Text>
      </View>

      <View style={styles.translationBlock}>
        <View style={styles.translationBox}>
          <View style={styles.abbreviationContainer}>
            <Text style={styles.abbreviationText}>
              {selectedLanguageBefore.slice(0, 3).toUpperCase()} 
              <View style={styles.arrowContainer}>
                <Ionicons name="arrow-forward" size={35} color={currentTheme === 'dark' ? '#FFFFFF' : '#000000'} />
              </View>
              {selectedLanguageAfter.slice(0, 3).toUpperCase()}
            </Text>
          </View>

          <View style={styles.translationHeader}>
            <ScrollView
              style={[styles.languageList, styles.leftLanguageList]}
              showsVerticalScrollIndicator={false}
              nestedScrollEnabled={true}
            >
              {languages.map((language, index) => (
                <TouchableOpacity 
                  key={index} 
                  onPress={() => handleLanguageSelect(language, true)}
                >
                  <Text 
                    style={[
                      styles.languageOption,
                      { opacity: selectedLanguageBefore === language ? 1 : 0.5 }
                    ]}
                  >
                    {language}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <View style={styles.arrowContainer}>
              {/* Empty to align arrow above the two lists */}
            </View>

            <ScrollView
              style={styles.languageList}
              showsVerticalScrollIndicator={false}
              nestedScrollEnabled={true}
            >
              {languages.map((language, index) => (
                <TouchableOpacity 
                  key={index} 
                  onPress={() => handleLanguageSelect(language, false)}
                >
                  <Text 
                    style={[
                      styles.languageOption,
                      { opacity: selectedLanguageAfter === language ? 1 : 0.5 }
                    ]}
                  >
                    {language}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={handleEngagePress}
        style={styles.engageButtonContainer}
      >
        <View style={styles.engageButton}>
          <Ionicons name="git-compare-outline" size={20} color={currentTheme === 'dark' ? '#FFFFFF' : '#000000'} style={styles.icon} />
          <Text style={styles.engageButtonText}>Engage</Text>
        </View>
      </TouchableOpacity>

      {engageMessage !== '' && (
        <Text style={styles.messageText}>{engageMessage}</Text>
      )}
    </View>
  );
};

export default TranslationPage;
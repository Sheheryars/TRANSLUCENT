import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightStyles } from './styles/lightteleprompt';
import { darkStyles } from './styles/darkteleprompt';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CONTENT_WIDTH = SCREEN_WIDTH * 0.9;
const DELETE_WIDTH = 80;

const TeleprompterPage = () => {
  const router = useRouter();
  const [speech, setSpeech] = useState('');
  const [timePerLine, setTimePerLine] = useState('3');
  const [savedSpeeches, setSavedSpeeches] = useState([]);
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

  const handleSave = () => {
    if (speech.trim() === '') {
      Alert.alert('Error', 'Please enter some text for the teleprompter.');
      return;
    }
    
    const newSpeech = {
      id: Date.now().toString(),
      text: speech,
      timePerLine: parseInt(timePerLine, 10)
    };

    setSavedSpeeches(prevSpeeches => [newSpeech, ...prevSpeeches]);
    setSpeech('');
    setTimePerLine('3');
  };

  const handlePlay = (selectedSpeech) => {
    Alert.alert('Playing Speech', `Playing: ${selectedSpeech.text.substring(0, 50)}...`);
  };

  const handleDelete = (id) => {
    setSavedSpeeches(prevSpeeches => prevSpeeches.filter(speech => speech.id !== id));
  };

  const renderRightActions = (progress, dragX, id) => {
    return (
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDelete(id)}
      >
        <Ionicons name="trash-outline" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    );
  };

  const renderSavedSpeech = ({ item, index }) => (
    <Swipeable
      renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, item.id)}
      overshootRight={false}
      rightThreshold={DELETE_WIDTH}
    >
      <View style={styles.savedSpeechItem}>
        <Text style={styles.savedSpeechNumber}>{savedSpeeches.length - index}</Text>
        <Text style={styles.savedSpeechText} numberOfLines={2}>
          {item.text}
        </Text>
        <TouchableOpacity onPress={() => handlePlay(item)}>
          <Ionicons name="play-circle-outline" size={24} color={currentTheme === 'dark' ? '#FFFFFF' : '#000000'} />
        </TouchableOpacity>
      </View>
    </Swipeable>
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color={currentTheme === 'dark' ? '#FFFFFF' : '#000000'} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Teleprompter</Text>
      </View>

      <FlatList
        contentContainerStyle={styles.contentContainer}
        ListHeaderComponent={
          <>
            <TextInput
              style={styles.textInput}
              multiline
              placeholder="Enter your speech here..."
              placeholderTextColor={currentTheme === 'dark' ? '#AAAAAA' : '#666666'}
              value={speech}
              onChangeText={setSpeech}
            />

            <View style={styles.timeSettings}>
              <Text style={styles.label}>Seconds per line:</Text>
              <TextInput
                style={styles.timeInput}
                keyboardType="numeric"
                value={timePerLine}
                onChangeText={setTimePerLine}
              />
            </View>

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save Speech</Text>
            </TouchableOpacity>

            <Text style={styles.savedSpeechesHeader}>Saved Speeches</Text>
          </>
        }
        data={savedSpeeches}
        renderItem={renderSavedSpeech}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text style={styles.noSpeechesText}>No saved speeches yet</Text>}
      />
    </GestureHandlerRootView>
  );
};

export default TeleprompterPage;
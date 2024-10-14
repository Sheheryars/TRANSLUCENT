import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import theme styles
import lightWriteNotesStyles from './styles/lightwritenotes.js';
import darkWriteNotesStyles from './styles/darkwritenotes.js';

const WriteNotesPage = () => {
  const router = useRouter();
  const { id, text } = useLocalSearchParams();
  const [noteText, setNoteText] = useState(text || '');
  const [noteId, setNoteId] = useState(id || Date.now().toString());
  const [originalDate, setOriginalDate] = useState(null);
  const [currentTheme, setCurrentTheme] = useState('light');
  const [styles, setStyles] = useState(lightWriteNotesStyles);

  useEffect(() => {
    if (id) {
      setNoteId(id);
      loadExistingNote(id);
    } else {
      setOriginalDate(new Date().toLocaleString());
    }
    loadTheme();
  }, [id]);

  const loadTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedTheme !== null) {
        setCurrentTheme(savedTheme);
        setStyles(savedTheme === 'dark' ? darkWriteNotesStyles : lightWriteNotesStyles);
      }
    } catch (error) {
      console.error('Error loading theme:', error);
    }
  };

  const loadExistingNote = async (noteId) => {
    try {
      const noteData = await AsyncStorage.getItem(`@note:${noteId}`);
      if (noteData) {
        const parsedNote = JSON.parse(noteData);
        setNoteText(parsedNote.text);
        setOriginalDate(parsedNote.date);
      }
    } catch (e) {
      console.error('Failed to load existing note', e);
    }
  };

  const handleSave = async () => {
    Keyboard.dismiss();
    if (noteText.trim()) {
      const now = new Date().toLocaleString();
      const note = {
        id: noteId,
        text: noteText,
        date: originalDate || now,
        lastEdited: now,
      };
      try {
        await AsyncStorage.setItem(`@note:${noteId}`, JSON.stringify(note));
      } catch (e) {
        console.error('Failed to save the note', e);
      }
    }
  };

  const handleBack = async () => {
    await handleSave();
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color={styles.icon.color} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Write Note</Text>
        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
          <Ionicons name="checkmark" size={28} color={styles.icon.color} />
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Start typing your note..."
        placeholderTextColor={currentTheme === 'dark' ? '#999' : '#666'}
        value={noteText}
        onChangeText={setNoteText}
        autoFocus
      />
    </View>
  );
};

export default WriteNotesPage;
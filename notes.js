import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useFocusEffect } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightStyles } from './styles/lightnotes';
import { darkStyles } from './styles/darknotes';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CONTENT_WIDTH = SCREEN_WIDTH * 0.9;
const DELETE_WIDTH = 80;

const NotesPage = () => {
  const router = useRouter();
  const [savedNotes, setSavedNotes] = useState([]);
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

  const loadNotes = useCallback(async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const noteKeys = keys.filter(key => key.startsWith('@note:'));
      const notePromises = noteKeys.map(key => AsyncStorage.getItem(key));
      const noteValues = await Promise.all(notePromises);
      const notes = noteValues
        .map(JSON.parse)
        .sort((a, b) => {
          const dateA = new Date(a.lastEdited || a.date);
          const dateB = new Date(b.lastEdited || b.date);
          return dateB - dateA;
        });
      setSavedNotes(notes);
    } catch (e) {
      console.error('Failed to load notes', e);
    }
  }, []);

  useEffect(() => {
    loadTheme();
  }, [loadTheme]);

  useFocusEffect(
    useCallback(() => {
      loadNotes();
      loadTheme();
    }, [loadNotes, loadTheme])
  );

  const handleDelete = async (id) => {
    try {
      await AsyncStorage.removeItem(`@note:${id}`);
      setSavedNotes(prevNotes => prevNotes.filter(note => note.id !== id));
    } catch (e) {
      console.error('Failed to delete note', e);
    }
  };

  const renderRightActions = (progress, dragX, id) => (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => handleDelete(id)}
    >
      <Ionicons name="trash-outline" size={24} color="#FFFFFF" />
    </TouchableOpacity>
  );

  const renderNote = ({ item }) => (
    <Swipeable
      renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, item.id)}
      overshootRight={false}
      rightThreshold={DELETE_WIDTH}
    >
      <TouchableOpacity
        onPress={() => router.push({
          pathname: '/write_notes',
          params: { id: item.id, text: item.text },
        })}
      >
        <View style={styles.noteItem}>
          <View style={styles.noteContent}>
            <Text style={styles.noteText} numberOfLines={2}>{item.text}</Text>
            <Text style={styles.noteDate}>
              {item.lastEdited ? `Edited: ${item.lastEdited}` : `Created: ${item.date}`}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color={currentTheme === 'dark' ? '#FFFFFF' : '#000000'} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notes</Text>
        <TouchableOpacity onPress={() => router.push('/write_notes')}>
          <Ionicons name="add" size={28} color={currentTheme === 'dark' ? '#FFFFFF' : '#000000'} />
        </TouchableOpacity>
      </View>

      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={savedNotes}
        renderItem={renderNote}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text style={styles.noNotesText}>No notes saved yet</Text>}
      />
    </GestureHandlerRootView>
  );
};

export default NotesPage;
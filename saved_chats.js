import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import theme styles
import lightSavedChatsStyles from './styles/lightsavedchats.js';
import darkSavedChatsStyles from './styles/darksavedchats.js';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CONTENT_WIDTH = SCREEN_WIDTH * 0.9;
const DELETE_WIDTH = 80;

// Updated mock data to include full conversation history
const initialMockSavedChats = [
    {
        id: '1',
        title: 'How to make pasta',
        date: '2023-10-01',
        preview: 'Can you give me a simple recipe for pasta?',
        messages: [
            { id: 1, text: "Can you give me a simple recipe for pasta?", sender: 'user' },
            { id: 2, text: "Certainly! Here's a simple recipe for pasta:", sender: 'ai' },
            { id: 3, text: "1. Boil water in a large pot\n2. Add salt to the water\n3. Add pasta and cook according to package instructions\n4. Drain the pasta\n5. Add your favorite sauce\n6. Enjoy!", sender: 'ai' },
            { id: 4, text: "Thanks! What sauce do you recommend?", sender: 'user' },
            { id: 5, text: "For a quick and easy sauce, you can try a simple tomato sauce or garlic and olive oil (aglio e olio). Would you like a recipe for either of these?", sender: 'ai' },
        ]
    }, // ... (keep the existing mock data)
];

const SavedChats = () => {
    const router = useRouter();
    const [savedChats, setSavedChats] = useState(initialMockSavedChats);
    const [currentTheme, setCurrentTheme] = useState('light');
    const [styles, setStyles] = useState(lightSavedChatsStyles);

    useEffect(() => {
        loadTheme();
    }, []);

    const loadTheme = async () => {
        try {
            const savedTheme = await AsyncStorage.getItem('theme');
            if (savedTheme !== null) {
                setCurrentTheme(savedTheme);
                setStyles(savedTheme === 'dark' ? darkSavedChatsStyles : lightSavedChatsStyles);
            }
        } catch (error) {
            console.error('Error loading theme:', error);
        }
    };

    const handleDelete = (id) => {
        setSavedChats(prevChats => prevChats.filter(chat => chat.id !== id));
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

    const renderChatItem = ({ item }) => (
        <Swipeable
            renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, item.id)}
            overshootRight={false}
            rightThreshold={DELETE_WIDTH}
        >
            <TouchableOpacity 
                style={styles.chatItem}
                onPress={() => {
                    router.push({
                        pathname: '/aura_ai',
                        params: { chatData: JSON.stringify(item) }
                    });
                }}
            >
                <View style={styles.chatItemContent}>
                    <Text style={styles.chatTitle}>{item.title}</Text>
                    <Text style={styles.chatPreview}>{item.preview}</Text>
                </View>
                <Text style={styles.chatDate}>{item.date}</Text>
            </TouchableOpacity>
        </Swipeable>
    );

    return (
        <GestureHandlerRootView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={28} color={styles.icon.color} />
                </TouchableOpacity>
                <Text style={styles.headerText}>SAVED CHATS</Text>
                <View style={styles.placeholder} />
            </View>

            <FlatList
                data={savedChats}
                renderItem={renderChatItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.chatList}
            />
        </GestureHandlerRootView>
    );
};

export default SavedChats;
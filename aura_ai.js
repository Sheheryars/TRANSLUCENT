import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import theme styles
import lightAuraStyles from './styles/lightaura.js';
import darkAuraStyles from './styles/darkaura.js';

const AuraAI = () => {
    const router = useRouter();
    const { chatData } = useLocalSearchParams();
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [currentTheme, setCurrentTheme] = useState('light');
    const [styles, setStyles] = useState(lightAuraStyles);
    const flatListRef = useRef(null);

    useEffect(() => {
        if (chatData) {
            const parsedChatData = JSON.parse(chatData);
            setMessages(parsedChatData.messages || []);
        }
        loadTheme();
    }, [chatData]);

    const loadTheme = async () => {
        try {
            const savedTheme = await AsyncStorage.getItem('theme');
            if (savedTheme !== null) {
                setCurrentTheme(savedTheme);
                setStyles(savedTheme === 'dark' ? darkAuraStyles : lightAuraStyles);
            }
        } catch (error) {
            console.error('Error loading theme:', error);
        }
    };

    const handleSend = () => {
        if (input.trim()) {
            const newMessage = { id: Date.now(), text: input, sender: 'user' };
            setMessages(prevMessages => [...prevMessages, newMessage]);
            setInput('');
            // Here you would typically send the message to your AI service
            // and then add the response to the messages
            setTimeout(() => {
                const aiResponse = { id: Date.now() + 1, text: "This is a sample AI response.", sender: 'ai' };
                setMessages(prevMessages => [...prevMessages, aiResponse]);
            }, 1000);
        }
    };

    const renderMessage = ({ item }) => (
        <View style={[styles.messageBubble, item.sender === 'user' ? styles.userMessage : styles.aiMessage]}>
            <Text style={styles.messageText}>{item.text}</Text>
        </View>
    );

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color={styles.icon.color} />
                </TouchableOpacity>
                <Text style={styles.headerText}>AURA AI</Text>
                <TouchableOpacity onPress={() => router.push('/saved_chats')}>
                    <Text style={styles.savedButton}>Saved</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                ref={flatListRef}
                data={messages}
                renderItem={renderMessage}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.messageList}
                onContentSizeChange={() => flatListRef.current.scrollToEnd({animated: true})}
            />

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={input}
                    onChangeText={setInput}
                    placeholder="Ask a question..."
                    placeholderTextColor={currentTheme === 'dark' ? '#999' : '#666'}
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                    <Ionicons name="send" size={24} color={currentTheme === 'dark' ? '#000000' : '#FFFFFF'} />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default AuraAI;
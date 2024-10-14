import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import theme styles
import lightStyles from './styles/lightThemesettings.js';
import darkStyles from './styles/darkThemesettings.js';

const SettingsItem = ({ icon, title, onPress, value, styles }) => (
    <TouchableOpacity style={styles.settingsItem} onPress={onPress}>
        <View style={styles.settingsItemLeft}>
            <Ionicons name={icon} size={24} color={styles.text.color} style={styles.settingsIcon} />
            <Text style={[styles.settingsItemTitle, styles.text]}>{title}</Text>
        </View>
        <View style={styles.settingsItemRight}>
            {value && <Text style={[styles.settingsItemValue, styles.text]}>{value}</Text>}
            <Ionicons name="chevron-forward" size={20} color={styles.text.color} />
        </View>
    </TouchableOpacity>
);

const ThemeModal = ({ visible, onClose, onSelectTheme, currentTheme, styles }) => {
    const [selectedTheme, setSelectedTheme] = useState(currentTheme);

    const handleApply = () => {
        if (selectedTheme) {
            onSelectTheme(selectedTheme);
        }
        onClose();
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={[styles.modalTitle, styles.text]}>Choose Theme</Text>
                    <TouchableOpacity
                        style={[styles.themeOption, selectedTheme === 'light' && styles.selectedTheme]}
                        onPress={() => setSelectedTheme('light')}
                    >
                        <Ionicons name="sunny-outline" size={24} color={styles.text.color} style={styles.themeIcon} />
                        <Text style={[styles.themeText, styles.text]}>Light Mode</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.themeOption, selectedTheme === 'dark' && styles.selectedTheme]}
                        onPress={() => setSelectedTheme('dark')}
                    >
                        <Ionicons name="moon-outline" size={24} color={styles.text.color} style={styles.themeIcon} />
                        <Text style={[styles.themeText, styles.text]}>Dark Mode</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
                        <Text style={styles.applyButtonText}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const Settings = () => {
    const router = useRouter();
    const [isThemeModalVisible, setIsThemeModalVisible] = useState(false);
    const [currentTheme, setCurrentTheme] = useState('light');
    const [styles, setStyles] = useState(lightStyles);

    useEffect(() => {
        loadTheme();
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

    const handleSettingsItemPress = (settingName) => {
        switch (settingName) {
            case 'Notification':
                router.push('/notifications');
                break;
            case 'Theme':
                setIsThemeModalVisible(true);
                break;
            default:
                console.log(`Navigating to ${settingName} settings`);
        }
    };

    const handleSelectTheme = async (theme) => {
        setCurrentTheme(theme);
        setStyles(theme === 'dark' ? darkStyles : lightStyles);
        try {
            await AsyncStorage.setItem('theme', theme);
        } catch (error) {
            console.error('Error saving theme:', error);
        }
        setIsThemeModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push('./home')} style={{ marginTop: 5 }}>
                    <Ionicons name="arrow-back" size={30} color={styles.text.color} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, styles.text]}>Settings</Text>
                <View style={{ width: 30 }} />
            </View>
            <ScrollView style={styles.content}>
                <Text style={[styles.sectionTitle, styles.text]}>Features</Text>
                <SettingsItem 
                    icon="notifications-outline" 
                    title="Notification" 
                    onPress={() => handleSettingsItemPress('Notification')} 
                    styles={styles}
                />
                <SettingsItem 
                    icon="apps-outline" 
                    title="Dashboard" 
                    onPress={() => handleSettingsItemPress('Dashboard')} 
                    styles={styles}
                />
                
                <Text style={[styles.sectionTitle, styles.text]}>General</Text>
                <SettingsItem 
                    icon="eye-outline" 
                    title="HeadUp Settings" 
                    onPress={() => handleSettingsItemPress('HeadUp')} 
                    styles={styles}
                />
                <SettingsItem 
                    icon="glasses-outline" 
                    title="Wear Detection" 
                    onPress={() => handleSettingsItemPress('WearDetection')} 
                    styles={styles}
                />
                <SettingsItem 
                    icon="language-outline" 
                    title="System Language" 
                    onPress={() => handleSettingsItemPress('SystemLanguage')} 
                    styles={styles}
                />
                <SettingsItem 
                    icon="color-palette-outline" 
                    title="Theme" 
                    value={currentTheme === 'light' ? 'Light' : 'Dark'}
                    onPress={() => handleSettingsItemPress('Theme')} 
                    styles={styles}
                />
                <SettingsItem 
                    icon="mic-outline" 
                    title="Speech Language" 
                    onPress={() => handleSettingsItemPress('SpeechLanguage')} 
                    styles={styles}
                />
                <SettingsItem 
                    icon="lock-closed-outline" 
                    title="Access Control" 
                    onPress={() => handleSettingsItemPress('AccessControl')} 
                    styles={styles}
                />
                <SettingsItem 
                    icon="refresh-outline" 
                    title="Reset Options" 
                    onPress={() => handleSettingsItemPress('ResetOptions')} 
                    styles={styles}
                />
                
                <Text style={[styles.sectionTitle, styles.text]}>About</Text>
                <SettingsItem 
                    icon="book-outline" 
                    title="Learn and Explore" 
                    onPress={() => handleSettingsItemPress('LearnAndExplore')} 
                    styles={styles}
                />
            </ScrollView>
            <ThemeModal
                visible={isThemeModalVisible}
                onClose={() => setIsThemeModalVisible(false)}
                onSelectTheme={handleSelectTheme}
                currentTheme={currentTheme}
                styles={styles}
            />
        </View>
    );
};

export default Settings;
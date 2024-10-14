import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import theme styles
import lightStyles from './styles/lightNotif';
import darkStyles from './styles/darkNotif';

const NotificationItem = ({ iconName, title, isEnabled, onToggle, styles }) => (
    <View style={styles.notificationItem}>
        <View style={styles.notificationItemLeft}>
            <Ionicons name={iconName} size={24} color={styles.text.color} style={styles.notificationIcon} />
            <Text style={[styles.notificationItemTitle, styles.text]}>{title}</Text>
        </View>
        <Switch
            value={isEnabled}
            onValueChange={onToggle}
            trackColor={styles.switch.trackColor}
            thumbColor={isEnabled ? styles.switch.thumbColor.true : styles.switch.thumbColor.false}
            ios_backgroundColor={styles.switch.ios_backgroundColor}
        />
    </View>
);

const Notifications = () => {
    const router = useRouter();
    const [notifications, setNotifications] = useState({
        Calendar: true,
        Call: true,
        Messages: true,
        Mail: true,
        WhatsApp: false,
        Messenger: false,
        Gmail: false,
        Instagram: true,
        Facebook: false,
        Outlook: false,
    });
    const [currentTheme, setCurrentTheme] = useState('light');
    const [styles, setStyles] = useState(lightStyles);

    useEffect(() => {
        loadTheme();
        loadNotificationSettings();
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

    const loadNotificationSettings = async () => {
        try {
            const savedSettings = await AsyncStorage.getItem('notificationSettings');
            if (savedSettings !== null) {
                setNotifications(JSON.parse(savedSettings));
            }
        } catch (error) {
            console.error('Error loading notification settings:', error);
        }
    };

    const handleNotificationToggle = async (app) => {
        const updatedNotifications = { ...notifications, [app]: !notifications[app] };
        setNotifications(updatedNotifications);
        try {
            await AsyncStorage.setItem('notificationSettings', JSON.stringify(updatedNotifications));
        } catch (error) {
            console.error('Error saving notification settings:', error);
        }
    };

    const getIconName = (app) => {
        const icons = {
            Calendar: 'calendar',
            Call: 'call',
            Messages: 'chatbubble',
            Mail: 'mail',
            WhatsApp: 'logo-whatsapp',
            Gmail: 'mail',
            Instagram: 'logo-instagram',
            Facebook: 'logo-facebook',
            Messenger: 'chatbubbles',
            Outlook: 'mail',
        };
        return icons[app] || 'apps';
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={30} color={styles.text.color} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, styles.text]}>Notifications</Text>
            </View>
            <ScrollView style={styles.content}>
                {Object.entries(notifications).slice(0, 4).map(([app, isEnabled]) => (
                    <NotificationItem
                        key={app}
                        iconName={getIconName(app)}
                        title={app}
                        isEnabled={isEnabled}
                        onToggle={() => handleNotificationToggle(app)}
                        styles={styles}
                    />
                ))}
                <Text style={[styles.sectionTitle, styles.text]}>Apps Filter</Text>
                {Object.entries(notifications).slice(4).map(([app, isEnabled]) => (
                    <NotificationItem
                        key={app}
                        iconName={getIconName(app)}
                        title={app}
                        isEnabled={isEnabled}
                        onToggle={() => handleNotificationToggle(app)}
                        styles={styles}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default Notifications;
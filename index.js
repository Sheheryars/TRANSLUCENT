import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';

const SplashScreen = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [text, setText] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  useEffect(() => {
    if (!fontLoaded) return;

    const fullText = "TRANSLUCENT";
    let currentIndex = 0;

    const typewriterInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText((prev) => prev + fullText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typewriterInterval);
        animateElements();
      }
    }, 100);

    return () => clearInterval(typewriterInterval);
  }, [fontLoaded]);

  const animateElements = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  };

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
          {text}
        </Animated.Text>
        <Animated.View
          style={[
            styles.logoContainer,
            {
              opacity: fadeAnim,
              transform: [
                { scale: scaleAnim },
                { rotate: spin },
              ],
            },
          ]}
        >
          <Ionicons name="glasses-outline" size={200} color="#000000" />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
    letterSpacing: 3,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  logoContainer: {
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 8,
  },
});

export default SplashScreen;
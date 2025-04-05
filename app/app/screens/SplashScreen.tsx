import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';

// Remplace 'RootStackParamList' par le nom de ton type de navigation si différent
type RootStackParamList = {
  Splash: undefined;
  Welcome: undefined;
};

type SplashScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Splash'>;
};

export default function SplashScreen({ navigation }: SplashScreenProps) {
  const logoScale = new Animated.Value(0);
  const textOpacity = new Animated.Value(0);

  useEffect(() => {
    Animated.sequence([
      Animated.spring(logoScale, {
        toValue: 1,
        useNativeDriver: true,
        tension: 10,
        friction: 2,
      }),
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => {
        navigation.replace('Welcome');
      }, 2000);
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, { transform: [{ scale: logoScale }] }]}>
        <MaterialCommunityIcons name="rocket-launch" size={80} color="#1976D2" />
      </Animated.View>
      <Animated.Text style={[styles.title, { opacity: textOpacity }]}>
        EntrepreneurQuest
      </Animated.Text>
      <Animated.Text style={[styles.subtitle, { opacity: textOpacity }]}>
        Votre aventure commence ici
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
});

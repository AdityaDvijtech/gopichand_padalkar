import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient colors={["#ffb300", "#ff9800"]} style={styles.container}>
      <View style={styles.centered}>
        <Image
          source={{ uri: 'https://via.placeholder.com/120x120.png?text=Logo' }}
          style={styles.logo}
        />
        <Text style={styles.title}>PublicConnect</Text>
        <Text style={styles.subtitle}>Connect With Your Community</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
    borderRadius: 60,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
  },
}); 
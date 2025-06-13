import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const themeColors = {
  yellowPrimary: '#FFD700',
  yellowLight: '#FFFACD',
  white: '#FFFFFF',
  textDark: '#212121',
  textLight: '#585858',
  black: '#000000',
};

const historyEvents = [
  {
    year: 'Ancient Times',
    title: 'Origins of Dhangar Community',
    description: 'The Dhangar community has its roots in ancient pastoral traditions, with a rich heritage of animal husbandry and sustainable living practices.',
    image: 'https://via.placeholder.com/300x200.png?text=Ancient+Times'
  },
  {
    year: 'Medieval Period',
    title: 'Cultural Evolution',
    description: 'During this period, the community developed unique cultural practices, traditional knowledge systems, and sustainable agricultural methods.',
    image: 'https://via.placeholder.com/300x200.png?text=Medieval+Period'
  },
  {
    year: 'Modern Era',
    title: 'Contemporary Contributions',
    description: 'Today, the Dhangar community continues to make significant contributions to agriculture, animal husbandry, and sustainable development.',
    image: 'https://via.placeholder.com/300x200.png?text=Modern+Era'
  }
];

export default function HistoryScreen({ navigation }) {
  return (
    <LinearGradient colors={[themeColors.yellowLight, themeColors.white]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.historyHeader}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={themeColors.textDark} />
          </TouchableOpacity>
          <Text style={styles.historyTitle}>Our Heritage</Text>
        </View>

        <View style={styles.heroSection}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/400x250.png?text=Dhangar+Heritage' }} 
            style={styles.heroImage} 
          />
          <Text style={styles.heroTitle}>The Dhangar Legacy</Text>
          <Text style={styles.heroSubtitle}>A Journey Through Time</Text>
        </View>

        {historyEvents.map((event, index) => (
          <View key={index} style={styles.timelineItem}>
            <View style={styles.timelineYear}>
              <Text style={styles.yearText}>{event.year}</Text>
            </View>
            <View style={styles.timelineContent}>
              <Image source={{ uri: event.image }} style={styles.timelineImage} />
              <Text style={styles.timelineTitle}>{event.title}</Text>
              <Text style={styles.timelineDescription}>{event.description}</Text>
            </View>
          </View>
        ))}

        <View style={styles.quoteSection}>
          <Text style={styles.quoteText}>
            "Preserving our heritage is not just about remembering the past, but building our future."
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.white,
  },
  scrollContent: {
    padding: 16,
  },
  historyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: themeColors.white,
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    elevation: 2,
    borderWidth: 1,
    borderColor: themeColors.yellowLight,
  },
  historyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themeColors.textDark,
  },
  heroSection: {
    marginBottom: 24,
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: themeColors.textDark,
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 18,
    color: themeColors.textLight,
  },
  timelineItem: {
    marginBottom: 24,
    backgroundColor: themeColors.white,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    borderWidth: 1,
    borderColor: themeColors.yellowLight,
  },
  timelineYear: {
    backgroundColor: themeColors.yellowPrimary,
    padding: 12,
  },
  yearText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: themeColors.textDark,
  },
  timelineContent: {
    padding: 16,
  },
  timelineImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 12,
  },
  timelineTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: themeColors.textDark,
    marginBottom: 8,
  },
  timelineDescription: {
    fontSize: 16,
    color: themeColors.textLight,
    lineHeight: 24,
  },
  quoteSection: {
    backgroundColor: themeColors.yellowLight,
    padding: 20,
    borderRadius: 12,
    marginTop: 16,
    marginBottom: 24,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: themeColors.textDark,
    textAlign: 'center',
    lineHeight: 26,
  },
});
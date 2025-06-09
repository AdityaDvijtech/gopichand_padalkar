import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppImages from '../assets/images';

export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient colors={["#ffffff", "#ffffff"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={AppImages.gopichand} style={styles.banner} />
        <View style={styles.statsRow}>
          <View style={styles.statCard}><Text style={styles.statNum}>4536</Text><Text style={styles.statLabel}>Complaint</Text></View>
          <View style={styles.statCard}><Text style={styles.statNum}>276</Text><Text style={styles.statLabel}>Visitors</Text></View>
        </View>
        <View style={styles.cardRow}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Schemes')}><Text style={styles.cardText}>Schemes</Text></TouchableOpacity>
          <TouchableOpacity style={styles.card}><Text style={styles.cardText}>Visit Events</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.learnMoreBtn} onPress={() => navigation.navigate('Detail')}><Text style={styles.learnMoreText}>Learn More</Text></TouchableOpacity>
        <Image source={{uri: 'https://via.placeholder.com/350x100.png?text=Event'}} style={styles.eventImg} />
        <View style={styles.socialRow}>
          <Image source={{uri: 'https://img.icons8.com/color/48/000000/instagram-new.png'}} style={styles.socialIcon} />
          <Image source={{uri: 'https://img.icons8.com/color/48/000000/facebook-new.png'}} style={styles.socialIcon} />
          <Image source={{uri: 'https://img.icons8.com/color/48/000000/youtube-play.png'}} style={styles.socialIcon} />
          <Image source={{uri: 'https://img.icons8.com/color/48/000000/twitter.png'}} style={styles.socialIcon} />
          <Image source={{uri: 'https://img.icons8.com/color/48/000000/google-logo.png'}} style={styles.socialIcon} />
        </View>
        <TouchableOpacity style={styles.registerBtn} onPress={() => navigation.navigate('Complaint')}><Text style={styles.registerBtnText}>Register Your Complaint</Text></TouchableOpacity>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <View style={styles.eventCard}><Text style={styles.eventCardText}>Dhangar Yatra</Text></View>
          <View style={styles.eventCard}><Text style={styles.eventCardText}>Marriage Events</Text></View>
          <View style={styles.eventCard}><Text style={styles.eventCardText}>Education Schemes</Text></View>
        </ScrollView>
        <TouchableOpacity style={styles.learnMoreBtn} onPress={() => navigation.navigate('Detail')}><Text style={styles.learnMoreText}>Learn More</Text></TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const themeColors = {
  yellowPrimary: '#FFD700', // A nice gold-like yellow, adjust as needed
  yellowLight: '#FFFACD',  // A lighter yellow for accents or backgrounds
  white: '#FFFFFF',
  textDark: '#212121',     // A dark gray for primary text (better than pure black sometimes)
  textLight: '#585858',    // A lighter gray for secondary text
  black: '#000000',
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: themeColors.white, // Main background set to white
    },
    scrollContent: {
      padding: 16,
      alignItems: 'center',
    },
    banner: { // You might want a banner that fits the new theme
      width: 450,
      height: 275,
      borderRadius: 12,
      marginBottom: 16,
      backgroundColor: themeColors.yellowLight, // Example: Light yellow background for banner placeholder
    },
    statsRow: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    statCard: { // Cards remain white, providing contrast
      backgroundColor: themeColors.white,
      borderRadius: 8,
      padding: 16,
      alignItems: 'center',
      flex: 1,
      marginHorizontal: 4,
      borderWidth: 1, // Optional: add a subtle border
      borderColor: themeColors.yellowLight, // Optional: light yellow border
      elevation: 2, // Add some shadow for depth
    },
    statNum: {
      fontSize: 20,
      fontWeight: 'bold',
      color: themeColors.textDark,
    },
    statLabel: {
      fontSize: 14,
      color: themeColors.textLight,
    },cardRow: {
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          marginBottom: 16,
        },
        card: { // Cards remain white
          backgroundColor: themeColors.white,
          borderRadius: 8,
          padding: 24,
          alignItems: 'center',
          flex: 1,
          marginHorizontal: 4,
          borderWidth: 1,
          borderColor: themeColors.yellowLight,
          elevation: 2,
        },
        cardText: {
          color: themeColors.textDark,
          fontWeight: 'bold',
        },
        learnMoreBtn: { // Primary action button with yellow background
          backgroundColor: themeColors.yellowPrimary,
          borderRadius: 8,
          paddingVertical: 12, // Added more vertical padding for better tap target
          paddingHorizontal: 20,
          alignItems: 'center',
          marginVertical: 12, // Increased margin
          width: '100%',
          elevation: 3,
        },
        learnMoreText: { // Text on the yellow button
          color: themeColors.textDark, // Dark text for contrast on yellow
          fontWeight: 'bold',
          fontSize: 16,
        },
        eventImg: { // You might want an image that fits the theme
          width: 350,
          height: 100,
          borderRadius: 12,
          marginBottom: 16,
          backgroundColor: themeColors.yellowLight, // Example placeholder background
        },socialRow: {
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 16,
            },
            socialIcon: { // Consider if these icons fit the new theme, or use themed versions
              width: 36,
              height: 36,
              marginHorizontal: 6,
              // tintColor: themeColors.yellowPrimary, // If you want to tint monochrome icons
            },
            registerBtn: { // Another primary action button
              backgroundColor: themeColors.yellowPrimary,
              borderRadius: 8,
              paddingVertical: 12,
              paddingHorizontal: 20,
              alignItems: 'center',
              marginVertical: 12,
              width: '100%',
              elevation: 3,
            },
            registerBtnText: {
              color: themeColors.textDark, // Dark text for contrast on yellow
              fontWeight: 'bold',
              fontSize: 16,
            },
            horizontalScroll: {
              marginVertical: 12,
            },
            eventCard: { // Event cards remain white, could have yellow accents
              backgroundColor: themeColors.white,
              borderRadius: 8,
              padding: 16,
              marginHorizontal: 8,
              borderWidth: 1,
              borderColor: themeColors.yellowLight,
              elevation: 2,
              minWidth: 150, // Give them a bit more width
            },
            eventCardText: {
                 color: themeColors.textDark,
                 fontWeight: 'bold',
            },
});
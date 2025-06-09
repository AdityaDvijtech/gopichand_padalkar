import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppImages from '../assets/images'; // Assuming this path is correct

// Define your theme colors (can be imported from a central theme file)
const themeColors = {
  yellowPrimary: '#FFD700',
  yellowLight: '#FFFACD',
  white: '#FFFFFF',
  textDark: '#212121',
  textLight: '#585858',
  // black: '#000000', // Already available if needed
};

const sections = [
  {
    title: 'Government Schemes',
    image: AppImages.governmentSchemes,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper, metus vitae sollicitudin maximus, tortor nulla mollis augue, at ornare diam nibh a magna. Donec iaculis, erat eget fringilla sagittis, augue metus pellentesque arcu, eu luctus turpis orci quis turpis. Ut id ullamcorper nunc, et vehicula tellus. Nulla sodales mollis lorem in finibus. Aenean erat risus, vehicula quis turpis nec, ultricies eleifend felis. Praesent at mi tellus. Phasellus pharetra blandit purus ut mollis. Quisque sit amet eros congue, interdum tortor et, tincidunt neque.'
  },
  {
    title: 'Sessions',
    image: AppImages.session,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper, metus vitae sollicitudin maximus, tortor nulla mollis augue, at ornare diam nibh a magna. Donec iaculis, erat eget fringilla sagittis, augue metus pellentesque arcu, eu luctus turpis orci quis turpis. Ut id ullamcorper nunc, et vehicula tellus. Nulla sodales mollis lorem in finibus. Aenean erat risus, vehicula quis turpis nec, ultricies eleifend felis. Praesent at mi tellus. Phasellus pharetra blandit purus ut mollis. Quisque sit amet eros congue, interdum tortor et, tincidunt neque.'
  },
  {
    title: 'Visit Sessions',
    image: AppImages.visitSession,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper, metus vitae sollicitudin maximus, tortor nulla mollis augue, at ornare diam nibh a magna. Donec iaculis, erat eget fringilla sagittis, augue metus pellentesque arcu, eu luctus turpis orci quis turpis. Ut id ullamcorper nunc, et vehicula tellus. Nulla sodales mollis lorem in finibus. Aenean erat risus, vehicula quis turpis nec, ultricies eleifend felis. Praesent at mi tellus. Phasellus pharetra blandit purus ut mollis. Quisque sit amet eros congue, interdum tortor et, tincidunt neque.'
  },
  {
    title: 'Festivals',
    image: AppImages.festivals,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper, metus vitae sollicitudin maximus, tortor nulla mollis augue, at ornare diam nibh a magna. Donec iaculis, erat eget fringilla sagittis, augue metus pellentesque arcu, eu luctus turpis orci quis turpis. Ut id ullamcorper nunc, et vehicula tellus. Nulla sodales mollis lorem in finibus. Aenean erat risus, vehicula quis turpis nec, ultricies eleifend felis. Praesent at mi tellus. Phasellus pharetra blandit purus ut mollis. Quisque sit amet eros congue, interdum tortor et, tincidunt neque.'
  },
];

export default function GovernmentSchemesScreen() {
  return (
    // Using themeColors.white for a solid white background with LinearGradient.
    // You can remove LinearGradient if you just want a solid color set in styles.container.
    <LinearGradient colors={[themeColors.white, themeColors.white]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {sections.map((section, idx) => (
          <View key={idx} style={styles.section}>
            <Image source={section.image} style={styles.sectionImg} />
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.sectionDesc}>{section.desc}</Text>
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: themeColors.white, // Can be set here if not using LinearGradient for solid color
  },
  scrollContent: {
    padding: 20, // Increased padding a bit
  },
  section: {
    backgroundColor: themeColors.white, // Ensure section background is white
    borderRadius: 12, // Add rounded corners to the section cards
    padding: 16,
    marginBottom: 24,
    elevation: 3, // Add a bit of shadow for depth
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1, // Optional: subtle border
    borderColor: themeColors.yellowLight, // Optional: light yellow border
  },
  sectionImg: {
    width: '100%',
    height: 180, // Increased height for better visual
    borderRadius: 8,
    marginBottom: 12, // Increased margin
    backgroundColor: themeColors.yellowLight, // Placeholder background for the image area
  },
  sectionTitle: {
    fontSize: 20, // Slightly larger title
    fontWeight: 'bold',
    color: themeColors.textDark,
    marginBottom: 8, // Increased margin
  },
  sectionDesc: {
    color: themeColors.textLight, // Using lighter text for description
    fontSize: 15, // Slightly larger description text
    lineHeight: 22, // Improved line height for readability
  },
});
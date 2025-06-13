import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppImages from '../assets/images';
import { Ionicons } from '@expo/vector-icons';

const themeColors = {
  yellowPrimary: '#FFD700',
  yellowLight: '#FFFACD',
  white: '#FFFFFF',
  textDark: '#212121',
  textLight: '#585858',
  black: '#000000',
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
    <LinearGradient colors={[themeColors.yellowLight, themeColors.white]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
         <View style={styles.complaintHeader}>
                   <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                     <Ionicons name="arrow-back" size={24} color={themeColors.textDark} />
                   </TouchableOpacity>
                   <Text style={styles.complaintTitle}>Government Schemes</Text>
         </View>

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
complaintHeader: {
    flexDirection: 'row',
    marginBottom: 12,
    marginTop: 8,
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
    complaintTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: themeColors.textDark,
      },
  container: {
    flex: 1,
    backgroundColor: themeColors.white,
  },
  scrollContent: {
    padding: 16,
  },
  section: {
    backgroundColor: themeColors.white,
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 2,
    borderWidth: 1,
    borderColor: themeColors.yellowLight,
  },
  sectionImg: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: themeColors.textDark,
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  sectionDesc: {
    fontSize: 16,
    color: themeColors.textLight,
    lineHeight: 24,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
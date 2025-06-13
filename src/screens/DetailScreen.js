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

const detailData = {
  title: "Dhangar Community Heritage",
  subtitle: "Preserving Our Rich Cultural Legacy",
  image: "https://via.placeholder.com/800x400.png?text=Dhangar+Heritage",
  description: "The Dhangar community has a rich heritage that spans centuries, with deep roots in pastoral traditions and sustainable living practices. Our community has contributed significantly to agriculture, animal husbandry, and cultural preservation.",
  highlights: [
    {
      title: "Traditional Knowledge",
      description: "Centuries of accumulated wisdom in sustainable farming and animal husbandry practices."
    },
    {
      title: "Cultural Heritage",
      description: "Rich traditions in music, dance, and festivals that celebrate our community's identity."
    },
    {
      title: "Modern Contributions",
      description: "Continued impact on agriculture and sustainable development in contemporary society."
    }
  ],
  stats: [
    { label: "Years of Heritage", value: "500+" },
    { label: "Community Members", value: "1M+" },
    { label: "States Covered", value: "12+" }
  ]
};

export default function DetailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.detailHeader}>
          <Image source={{ uri: detailData.image }} style={styles.detailImage} />
          <View style={styles.detailOverlay} />
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color={themeColors.white} />
          </TouchableOpacity>
          <View style={styles.detailHeaderContent}>
            <Text style={styles.detailTitle}>{detailData.title}</Text>
            <Text style={styles.detailSubtitle}>{detailData.subtitle}</Text>
          </View>
        </View>

        <View style={styles.detailContent}>
          <View style={styles.detailSection}>
            <Text style={styles.detailText}>{detailData.description}</Text>
          </View>

          <View style={styles.detailSection}>
            <Text style={styles.detailSectionTitle}>Key Highlights</Text>
            {detailData.highlights.map((highlight, index) => (
              <View key={index} style={styles.detailCard}>
                <Text style={styles.detailCardTitle}>{highlight.title}</Text>
                <Text style={styles.detailText}>{highlight.description}</Text>
              </View>
            ))}
          </View>

          <View style={styles.detailSection}>
            <Text style={styles.detailSectionTitle}>Community Stats</Text>
            <View style={styles.statsContainer}>
              {detailData.stats.map((stat, index) => (
                <View key={index} style={styles.statCard}>
                  <Text style={styles.statValue}>{stat.value}</Text>
                  <Text style={styles.statLabel}>{stat.label}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.white,
  },
  detailHeader: {
    height: 300,
    position: 'relative',
  },
  detailImage: {
    width: '100%',
    height: '100%',
  },
  detailOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  detailHeaderContent: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  detailTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: themeColors.white,
    marginBottom: 8,
  },
  detailSubtitle: {
    fontSize: 18,
    color: themeColors.white,
    opacity: 0.9,
  },
  detailContent: {
    padding: 20,
  },
  detailSection: {
    marginBottom: 24,
  },
  detailSectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: themeColors.textDark,
    marginBottom: 16,
  },
  detailCard: {
    backgroundColor: themeColors.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: themeColors.yellowLight,
    elevation: 2,
  },
  detailCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: themeColors.textDark,
    marginBottom: 8,
  },
  detailText: {
    fontSize: 16,
    color: themeColors.textLight,
    lineHeight: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    backgroundColor: themeColors.white,
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: themeColors.yellowLight,
    elevation: 2,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themeColors.yellowPrimary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: themeColors.textLight,
    textAlign: 'center',
  },
}); 
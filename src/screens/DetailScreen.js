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
  title: "गोपीचंद पडळकर",
  subtitle: "महाराष्ट्र विधानसभा सदस्य",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/40px-Flag_of_India.svg.png",
  description: "गोपीचंद कुंडलिक पडळकर (जन्म १ ऑक्टोबर १९८२) हे भारतीय राजकारणी आणि भारतीय जनता पक्षाचे सदस्य आहेत. ते सध्या जत विधानसभा मतदारसंघाचे प्रतिनिधित्व करणारे महाराष्ट्र विधानसभेचे सदस्य आहेत. याआधी, ते १४ मे २०२० ते २३ नोव्हेंबर २०२४ पर्यंत महाराष्ट्र विधान परिषदेचे सदस्य होते.",
  highlights: [
    {
      title: "प्रारंभिक जीवन",
      description: "सांगली जिल्ह्यातील पडळकरवाडी येथे कुंडलिक आणि हिराबाई पडळकर यांच्या पोटी जन्म. त्यांचे वडील कुंडलिक पडळकर प्राथमिक शिक्षक होते. ते महाराष्ट्रातील आदिवासी धनगर समाजातील आहेत आणि उच्च माध्यमिक शिक्षण पूर्ण केले आहेत."
    },
    {
      title: "राजकीय कारकीर्द",
      description: "राष्ट्रीय समाज पक्षातून राजकीय कारकीर्द सुरू केली. २०१४ मध्ये भाजपात सामील झाले, नंतर २०१९ मध्ये वंचित बहुजन आघाडीत सामील झाले आणि ऑक्टोबर २०१९ मध्ये पुन्हा भाजपात सामील झाले. २०१९ च्या विधानसभा निवडणुकीत बारामतीत अजित पवारांविरुद्ध लढले."
    },
    {
      title: "सध्याचे पद",
      description: "महाराष्ट्र विधानसभा सदस्य (२०२४-सध्याचे), भाजप महाराष्ट्राचे प्रवक्ता आणि याआधी महाराष्ट्र विधान परिषदेचे सदस्य (२०२०-२०२४) होते."
    }
  ],
  stats: [
    { label: "जन्म", value: "१९८२" },
    { label: "मतदारसंघ", value: "जत" },
    { label: "पक्ष", value: "भाजप" }
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
    marginTop: 20,
    paddingTop: 0,
  },
  detailHeader: {
    height: 300,
    position: 'relative',
    marginTop: 0,
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
    marginHorizontal: 8,
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
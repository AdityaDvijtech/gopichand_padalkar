import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import AppImages from '../assets/images';

const { width } = Dimensions.get('window');

const themeColors = {
  yellowPrimary: '#FFD700',
  yellowLight: '#FFFACD',
  white: '#FFFFFF',
  textDark: '#212121',
  textLight: '#585858',
  black: '#000000',
  timeline: '#FFD700',
};

const historyEvents = [
  {
    year: '१९८२',
    title: 'जन्म आणि प्रारंभिक जीवन',
    description: 'सांगली जिल्ह्यातील पडळकरवाडी येथे कुंडलिक आणि हिराबाई पडळकर यांच्या पोटी जन्म. वडील कुंडलिक पडळकर प्राथमिक शिक्षक होते. महाराष्ट्रातील आदिवासी धनगर समाजातील.',
    image: AppImages.gopichand,
  },
  {
    year: '२०१४',
    title: 'राजकीय कारकीर्दीची सुरुवात',
    description: 'राष्ट्रीय समाज पक्षातून राजकीय कारकीर्द सुरू केली. २०१४ मध्ये भारतीय जनता पक्षात सामील झाले. अटपाडी-खानापूर मतदारसंघातून विधानसभा निवडणूक लढवली.',
    image: AppImages.banner,
  },
  {
    year: '२०१९',
    title: 'राजकीय प्रवास',
    description: 'वंचित बहुजन आघाडीत सामील झाले आणि सांगली लोकसभा मतदारसंघातून निवडणूक लढवली. ऑक्टोबर २०१९ मध्ये पुन्हा भाजपात सामील झाले आणि बारामतीत अजित पवारांविरुद्ध विधानसभा निवडणूक लढवली.',
    image: AppImages.speech,
  },
  {
    year: '२०२०',
    title: 'विधान परिषद सदस्य',
    description: '१४ मे २०२० रोजी महाराष्ट्र विधान परिषदेचे सदस्य म्हणून निवड झाली. भाजप महाराष्ट्राचे प्रवक्ता म्हणून काम केले.',
    image: AppImages.banner1,
  },
  {
    year: '२०२४',
    title: 'विधानसभा सदस्य',
    description: 'जत विधानसभा मतदारसंघातून महाराष्ट्र विधानसभेचे सदस्य म्हणून निवड झाली. सध्या महाराष्ट्र विधानसभेचे सदस्य आणि भाजपाचे प्रवक्ता म्हणून काम करत आहेत.',
    image: AppImages.gopichand,
  }
];

export default function HistoryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient 
        colors={[themeColors.yellowLight, themeColors.white]} 
        style={styles.headerGradient}
      >
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color={themeColors.textDark} />
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Image 
              source={AppImages.gopichandAvatar}
              style={styles.headerImage} 
            />
            <View style={styles.headerText}>
              <Text style={styles.headerTitle}>गोपीचंद पडळकर</Text>
              <Text style={styles.headerSubtitle}>राजकीय प्रवास</Text>
            </View>
          </View>
        </View>
      </LinearGradient>

      {/* Timeline */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.timelineContainer}>
          {historyEvents.map((event, index) => (
            <View key={index} style={styles.timelineEvent}>
              {/* Timeline Line */}
              <View style={styles.timelineLine}>
                <View style={styles.timelineDot} />
                {index !== historyEvents.length - 1 && <View style={styles.timelineConnector} />}
              </View>

              {/* Event Content */}
              <View style={styles.eventContent}>
                <View style={styles.yearBadge}>
                  <Text style={styles.yearText}>{event.year}</Text>
                </View>
                <View style={styles.eventCard}>
                  <Image source={event.image} style={styles.eventImage} />
                  <View style={styles.eventDetails}>
                    <Text style={styles.eventTitle}>{event.title}</Text>
                    <Text style={styles.eventDescription}>{event.description}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Quote */}
        <View style={styles.quoteContainer}>
          <LinearGradient
            colors={[themeColors.yellowLight, themeColors.white]}
            style={styles.quoteGradient}
          >
            <Text style={styles.quoteText}>
              "समाजाच्या विकासासाठी आणि महाराष्ट्राच्या प्रगतीसाठी काम करण्याची प्रतिबद्धता"
            </Text>
          </LinearGradient>
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
  headerGradient: {
    paddingTop: 40,
    paddingBottom: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 4,
  },
  header: {
    paddingHorizontal: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: themeColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    elevation: 2,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
    borderWidth: 3,
    borderColor: themeColors.white,
  },
  headerText: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themeColors.textDark,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: themeColors.textLight,
  },
  scrollView: {
    flex: 1,
  },
  timelineContainer: {
    padding: 16,
  },
  timelineEvent: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  timelineLine: {
    width: 24,
    alignItems: 'center',
    marginRight: 16,
  },
  timelineDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: themeColors.timeline,
    borderWidth: 4,
    borderColor: themeColors.white,
    elevation: 2,
  },
  timelineConnector: {
    width: 2,
    flex: 1,
    backgroundColor: themeColors.timeline,
    marginVertical: 8,
  },
  eventContent: {
    flex: 1,
  },
  yearBadge: {
    backgroundColor: themeColors.yellowLight,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  yearText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: themeColors.textDark,
  },
  eventCard: {
    backgroundColor: themeColors.white,
    borderRadius: 16,
    elevation: 2,
    overflow: 'hidden',
  },
  eventImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  eventDetails: {
    padding: 16,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: themeColors.textDark,
    marginBottom: 8,
  },
  eventDescription: {
    fontSize: 14,
    color: themeColors.textLight,
    lineHeight: 20,
  },
  quoteContainer: {
    padding: 16,
    marginBottom: 24,
  },
  quoteGradient: {
    padding: 20,
    borderRadius: 16,
    elevation: 2,
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: themeColors.textDark,
    textAlign: 'center',
    lineHeight: 24,
  },
});
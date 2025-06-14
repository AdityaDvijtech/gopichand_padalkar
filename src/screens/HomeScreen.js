import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Video } from 'expo-av';
import Carousel from 'react-native-reanimated-carousel';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import AppImages from '../assets/images';

const openLink = async (url) => {
  try {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  } catch (error) {
    console.error("Error opening link: ", error);
  }
};

export default function HomeScreen({ navigation }) {
  const carouselItems = [
    { id: 1, image: AppImages.gopichand },
    { id: 2, image: AppImages.speech },
    { id: 3, image: AppImages.devendra },
    { id: 4, image: AppImages.reservation },
  ];

  const width = Dimensions.get('window').width;
  const [isMuted, setIsMuted] = useState(true);
  const thoughts = [
    // '"यश अंतिम नाही, अपयश घातक नाही; महत्त्वाचं म्हणजे पुढे जाण्याचं धैर्य."',
    '"स्वप्न पाहा, आणि ती पूर्ण करण्यासाठी मेहनत करा."',
    '"प्रत्येक दिवस नवीन संधी घेऊन येतो."',
    '"परिश्रमाशिवाय यश मिळत नाही."',
  ];
  const [thoughtIndex, setThoughtIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setThoughtIndex((prev) => (prev + 1) % thoughts.length);
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <LinearGradient colors={["#ffffff", "#ffffff"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <LinearGradient colors={[themeColors.yellowLight, themeColors.white]} style={styles.carouselBg}>
          <View style={styles.welcomeRow}>
            <Image source={AppImages.bjp} style={styles.bjpLogo} />
            <Text style={styles.welcomeText}>Welcome!</Text>
          </View>
          <Carousel
            width={width}
            height={275}
            data={carouselItems}
            autoPlay
            autoPlayInterval={3000}
            loop
            onSnapToItem={setCarouselIndex}
            renderItem={({ item, index }) => {
              const isActive = index === carouselIndex;
              return (
                <Animated.View style={[styles.carouselImageWrapper, isActive && styles.activeCarouselImageWrapper]}>
                  <Image source={item.image} style={[styles.banner, { width }]} resizeMode="cover" />
                </Animated.View>
              );
            }}
            style={{ marginBottom: 8 }}
          />
          <View style={styles.paginationContainer}>
            {carouselItems.map((_, idx) => (
              <View
                key={idx}
                style={[
                  styles.paginationDot,
                  carouselIndex === idx && styles.paginationDotActive,
                ]}
              />
            ))}
          </View>
          <View style={styles.thoughtContainer}>
            <Text style={styles.thoughtTitle}>सदिच्छ विचार</Text>
            <Text style={styles.thoughtText}>{thoughts[thoughtIndex]}</Text>
          </View>
        </LinearGradient>

        <View style={styles.videoContainer}>
          <Video
            source={AppImages.video}
            style={styles.video}
            resizeMode="cover"
            isMuted={isMuted}
            shouldPlay
            isLooping
          />
          <TouchableOpacity
            style={styles.muteButton}
            onPress={() => setIsMuted((prev) => !prev)}
          >
            <Text style={styles.muteButtonText}>{isMuted ? 'आवाज सुरू करा' : 'आवाज बंद करा'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.socialRow}>
          <TouchableOpacity onPress={() => openLink('http://instagram.com/gopichand__padalkar/?hl=en')}>
            <Image source={{ uri: 'https://img.icons8.com/color/48/000000/instagram-new.png' }} style={styles.socialIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openLink('https://www.facebook.com/GopichandMLC/')}>
            <Image source={{ uri: 'https://img.icons8.com/color/48/000000/facebook-new.png' }} style={styles.socialIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openLink('https://www.youtube.com/@GopichandPadalkar')}>
            <Image source={{ uri: 'https://img.icons8.com/color/48/000000/youtube-play.png' }} style={styles.socialIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openLink('https://x.com/GopichandP_MLC/status/1854457095657058388')}>
            <Image source={{ uri: 'https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000' }} style={styles.socialIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openLink('https://www.google.com/search?q=Gopichand+Padalkar')}>
            <Image source={{ uri: 'https://img.icons8.com/color/48/000000/google-logo.png' }} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.aboutSection}>
          <Text style={styles.aboutTitle}>गोपीचंद पडळकर</Text>
          <Text style={styles.aboutText}>
            गोपीचंद कुंदलिक पडळकर हे महाराष्ट्रातील एक लोकप्रिय राजकारणी आणि सामाजिक कार्यकर्ते आहेत. ते धनगर समाजाचे प्रतिनिधित्व करतात आणि या समाजासाठी आरक्षण व हक्कांसाठी त्यांनी दीर्घकाळ आंदोलन केलं आहे. त्यांनी आपल्या राजकीय कारकिर्दीची सुरुवात राष्ट्रवादी समाज पक्षातून केली आणि २०१४ मध्ये भाजपामध्ये प्रवेश केला. त्यांच्या आक्रमक भाषणशैलीसाठी ते ओळखले जातात आणि सामान्य जनतेशी त्यांचा भावनिक संबंध खूप घट्ट आहे...
          </Text>
          <TouchableOpacity style={styles.readMoreBtn} onPress={() => navigation.navigate('Detail')}>
            <Text style={styles.readMoreBtnText}>अधिक वाचा</Text>
          </TouchableOpacity>
        </View>


        {/* Upcoming Events Section */}
        <View style={styles.eventsSection}>
          <Text style={styles.eventsTitle}>📅 आगामी कार्यक्रम</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.eventsHorizontalScroll}>
            <View style={styles.eventCardMain}>
              <Text style={styles.eventName}>धनगर समाज मेळावा</Text>
              <Text style={styles.eventDetails}>ठिकाण: पुणे</Text>
              <Text style={styles.eventDetails}>दिनांक: २५ जून २०२४</Text>
              <TouchableOpacity style={styles.interestedBtn}>
                <Text style={styles.interestedBtnText}>रुचि आहे</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.eventCardMain}>
              <Text style={styles.eventName}>जनजागृती रॅली</Text>
              <Text style={styles.eventDetails}>ठिकाण: सोलापूर</Text>
              <Text style={styles.eventDetails}>दिनांक: ५ जुलै २०२४</Text>
              <TouchableOpacity style={styles.interestedBtn}>
                <Text style={styles.interestedBtnText}>रुचि आहे</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        {/* Horizontal Cards Section above Video */}
        <View style={styles.storiesSection}>
          <Text style={styles.storiesTitle}>🌟 कथा आणि प्रेरणा</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesHorizontalScroll}>
            <View style={styles.storyCard}>
              <Image source={{ uri: 'https://picsum.photos/seed/story1/120/80' }} style={styles.storyCardImage} />
              <Text style={styles.storyCardTitle}>यशोगाथा</Text>
              <Text style={styles.storyCardDesc}>समाजातील यशस्वी व्यक्तींच्या कथा</Text>
            </View>
            <View style={styles.storyCard}>
              <Image source={{ uri: 'https://picsum.photos/seed/story2/120/80' }} style={styles.storyCardImage} />
              <Text style={styles.storyCardTitle}>प्रेरणादायी कथा</Text>
              <Text style={styles.storyCardDesc}>प्रेरणा देणाऱ्या कथा</Text>
            </View>
            <View style={styles.storyCard}>
              <Image source={{ uri: 'https://picsum.photos/seed/story3/120/80' }} style={styles.storyCardImage} />
              <Text style={styles.storyCardTitle}>समाजातील बदल</Text>
              <Text style={styles.storyCardDesc}>समाजात घडलेले सकारात्मक बदल</Text>
            </View>
          </ScrollView>
        </View>

        {/* <View style={styles.cardRow}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Schemes')}><Text style={styles.cardText}>सरकारी योजना</Text></TouchableOpacity>
        </View> */}

        {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <View style={styles.eventCard}><Text style={styles.eventCardText}>Dhangar Yatra</Text></View>
          <View style={styles.eventCard}><Text style={styles.eventCardText}>Marriage Events</Text></View>
          <View style={styles.eventCard}><Text style={styles.eventCardText}>Education Schemes</Text></View>
        </ScrollView> */}
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
    backgroundColor: themeColors.white,
    marginTop: 20,
    paddingTop: 0,
  },
  scrollContent: {
    padding: 16,
    paddingTop: 0,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  banner: {
    height: 275,
    marginBottom: 16,
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
  },
  cardRow: {
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
  thoughtContainer: {
    backgroundColor: themeColors.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: 320,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: themeColors.yellowLight,
    elevation: 2,
  },
  thoughtTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: themeColors.textDark,
    marginBottom: 8,
  },
  thoughtText: {
    fontSize: 16,
    color: themeColors.textLight,
    fontStyle: 'italic',
  },
  videoContainer: {
    width: '100%',
    height: 200,
    marginVertical: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: themeColors.yellowLight,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  socialRow: {
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
  aboutSection: {
    backgroundColor: themeColors.white,
    borderRadius: 8,
    padding: 16,
    marginVertical: 16,
    width: '100%',
    borderWidth: 1,
    borderColor: themeColors.yellowLight,
    elevation: 2,
  },
  aboutTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themeColors.textDark,
    marginBottom: 8,
  },
  aboutText: {
    fontSize: 15.5,
    color: themeColors.textDark,
    lineHeight: 20,
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
  muteButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  muteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  readMoreBtn: {
    backgroundColor: themeColors.yellowPrimary,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginTop: 12,
    alignSelf: 'flex-start',
    elevation: 2,
  },
  readMoreBtnText: {
    color: themeColors.textDark,
    fontWeight: 'bold',
    fontSize: 15,
  },

  carouselImageWrapper: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 8,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ scale: 0.96 }],
  },
  activeCarouselImageWrapper: {
    transform: [{ scale: 1 }],
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 2,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#e0c200',
    marginHorizontal: 4,
    opacity: 0.4,
  },
  paginationDotActive: {
    backgroundColor: themeColors.yellowPrimary,
    opacity: 1,
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  eventsSection: {
    width: '100%',
    marginBottom: 16,
    marginTop: 8,
    alignItems: 'flex-start',
  },
  eventsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: themeColors.textDark,
    marginBottom: 8,
  },
  eventsHorizontalScroll: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 8,
  },
  eventCardMain: {
    backgroundColor: themeColors.white,
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: themeColors.yellowLight,
    elevation: 2,
    width: 240,
    marginRight: 14,
    marginBottom: 8,
  },
  eventName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: themeColors.textDark,
    marginBottom: 4,
  },
  eventDetails: {
    fontSize: 15,
    color: themeColors.textLight,
    marginBottom: 2,
  },
  interestedBtn: {
    backgroundColor: themeColors.yellowPrimary,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 18,
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'flex-start',
    elevation: 2,
  },
  interestedBtnText: {
    color: themeColors.textDark,
    fontWeight: 'bold',
    fontSize: 15,
  },
  storiesSection: {
    width: '100%',
    marginBottom: 8,
    marginTop: 8,
    alignItems: 'flex-start',
  },
  storiesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: themeColors.textDark,
    marginBottom: 8,
  },
  storiesHorizontalScroll: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 8,
  },
  storyCard: {
    backgroundColor: themeColors.white,
    borderRadius: 10,
    padding: 0,
    borderWidth: 1,
    borderColor: themeColors.yellowLight,
    elevation: 2,
    width: 220,
    marginRight: 14,
    marginBottom: 8,
    overflow: 'hidden',
    alignItems: 'flex-start',
  },
  storyCardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: themeColors.textDark,
    marginBottom: 4,
    marginLeft: 10,
  },
  storyCardDesc: {
    fontSize: 15,
    color: themeColors.textLight,
    marginBottom: 2,
    marginLeft: 10,
  },
  storyCardImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 8,
    backgroundColor: themeColors.yellowLight,
  },
  welcomeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    marginTop: 0,
  },
  bjpLogo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10, // space between logo and text
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: themeColors.textDark,
    letterSpacing: 1,
  },
  carouselBg: {
    width: '100%',
    paddingTop: 0,
    marginTop: 0,
  },
});
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function DetailScreen({ navigation }) {
  return (
    <LinearGradient colors={["#ffb300", "#ff9800"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerRow}>
          <Text style={styles.header} onPress={() => navigation.goBack()}>{'<'} </Text>
          <Text style={styles.headerTitle}>Mr. Gopichand Padalkar</Text>
        </View>
        <Image source={{ uri: 'https://randomuser.me/api/portraits/men/2.jpg' }} style={styles.img} />
        <Text style={styles.subtitle}>MLA, BHAJAPA, Sangli</Text>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper, metus vitae sollicitudin maximus, tortor nulla mollis augue, at ornare diam nibh a magna. Donec iaculis, erat eget fringilla sagittis, augue metus pellentesque arcu, eu luctus turpis orci quis turpis. Ut id ullamcorper nunc, et vehicula tellus. Nulla sodales mollis lorem in finibus. Aenean erat risus, vehicula quis turpis nec, ultricies eleifend felis. Praesent at mi tellus. Phasellus pharetra blandit purus ut mollis. Quisque sit amet eros congue, interdum tortor et, tincidunt neque. Suspendisse lobortis erat ut laoreet porta. Cras turpis arcu, bibendum id lectus eu, convallis tempor nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ut lorem vitae ex interdum imperdiet eget eu augue. Aenean commodo tempor sapien, vel tincidunt quam tempor nec.
        </Text>
        <Text style={styles.desc}>
          Duis vehicula eros rhoncus purus efficitur, a feugiat sem molestie. Vestibulum vitae pellentesque felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius tellus a fringilla tincidunt. Integer tellus lectus, maximus et neque at, fermentum condimentum sem. Fusce malesuada quam vel nisi bibendum porta. Nunc a imperdiet nibh. Maecenas vitae tellus dui.
        </Text>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { padding: 16 },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  header: { fontSize: 24, color: '#fff', marginRight: 8 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff', flex: 1 },
  img: { width: '100%', height: 180, borderRadius: 8, marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#fff', marginBottom: 8, textAlign: 'center' },
  desc: { color: '#fff', fontSize: 14, marginBottom: 8 },
}); 
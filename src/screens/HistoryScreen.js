import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HistoryScreen({ navigation }) {
  return (
    <LinearGradient colors={["#ffb300", "#ff9800"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerRow}>
          <Text style={styles.header} onPress={() => navigation.goBack()}>{'< History'}</Text>
        </View>
        <Image source={{ uri: 'https://via.placeholder.com/200x200.png?text=History' }} style={styles.img} />
        <Text style={styles.title}>The word "Dhangar"</Text>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper, metus vitae sollicitudin maximus, tortor nulla mollis augue, at ornare diam nibh a magna. Donec iaculis, erat eget fringilla sagittis, augue metus pellentesque arcu, eu luctus turpis orci quis turpis. Ut id ullamcorper nunc, et vehicula tellus. Nulla sodales mollis lorem in finibus. Aenean erat risus, vehicula quis turpis nec, ultricies eleifend felis. Praesent at mi tellus. Phasellus pharetra blandit purus ut mollis. Quisque sit amet eros congue, interdum tortor et, tincidunt neque.
        </Text>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper, metus vitae sollicitudin maximus, tortor nulla mollis augue, at ornare diam nibh a magna. Donec iaculis, erat eget fringilla sagittis, augue metus pellentesque arcu, eu luctus turpis orci quis turpis. Ut id ullamcorper nunc, et vehicula tellus. Nulla sodales mollis lorem in finibus. Aenean erat risus, vehicula quis turpis nec, ultricies eleifend felis. Praesent at mi tellus. Phasellus pharetra blandit purus ut mollis. Quisque sit amet eros congue, interdum tortor et, tincidunt neque.
        </Text>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { padding: 16 },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  header: { fontSize: 24, fontWeight: 'bold', color: '#fff', flex: 1 },
  img: { width: 200, height: 200, borderRadius: 8, alignSelf: 'center', marginBottom: 16 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#fff', marginBottom: 8, textAlign: 'center' },
  desc: { color: '#fff', fontSize: 14, marginBottom: 8 },
}); 
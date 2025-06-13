import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const themeColors = {
  yellowPrimary: '#FFD700',
  yellowLight: '#FFFACD',
  white: '#FFFFFF',
  textDark: '#212121',
  textLight: '#585858',
  black: '#000000',
};

export default function ProfileScreen({ navigation }) {
  const [profile, setProfile] = useState({
    name: 'Mr. Rakesh Shinde',
    email: '',
    fullName: '',
    address: '',
    phone: '',
    pincode: '',
    dob: '',
  });

  const handleChange = (key, value) => setProfile({ ...profile, [key]: value });

  return (
    <LinearGradient colors={[themeColors.yellowLight, themeColors.white]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backBtnText}>{'<'}</Text>
        </TouchableOpacity>
        <View style={styles.centered}>
          <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.avatar} />
          <Text style={styles.name}>{profile.name}</Text>
        </View>
        <View style={styles.inputRow}>
          <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/new-post.png'}} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Email" value={profile.email} onChangeText={v => handleChange('email', v)} placeholderTextColor={themeColors.textLight} />
        </View>
        <View style={styles.inputRow}>
          <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/user.png'}} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Full Name" value={profile.fullName} onChangeText={v => handleChange('fullName', v)} placeholderTextColor={themeColors.textLight} />
        </View>
        <View style={styles.inputRow}>
          <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/marker.png'}} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Address" value={profile.address} onChangeText={v => handleChange('address', v)} placeholderTextColor={themeColors.textLight} />
        </View>
        <View style={styles.inputRow}>
          <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/phone.png'}} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Phone No" value={profile.phone} onChangeText={v => handleChange('phone', v)} placeholderTextColor={themeColors.textLight} />
          <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/marker.png'}} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Pincode" value={profile.pincode} onChangeText={v => handleChange('pincode', v)} placeholderTextColor={themeColors.textLight} />
        </View>
        <View style={styles.inputRow}>
          <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/birthday-cake.png'}} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Date of Birth" value={profile.dob} onChangeText={v => handleChange('dob', v)} placeholderTextColor={themeColors.textLight} />
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
    alignItems: 'center',
  },
  backBtn: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
    backgroundColor: themeColors.white,
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    borderWidth: 1,
    borderColor: themeColors.yellowLight,
  },
  backBtnText: {
    fontSize: 24,
    color: themeColors.textDark,
  },
  centered: {
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 60,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: themeColors.yellowPrimary,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: themeColors.textDark,
    marginBottom: 8,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: themeColors.white,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: themeColors.yellowLight,
    paddingHorizontal: 12,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
    tintColor: themeColors.textLight,
  },
  input: {
    flex: 1,
    height: 50,
    color: themeColors.textDark,
    fontSize: 16,
  },
}); 
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
    <LinearGradient colors={["#ffb300", "#ff9800"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={{fontSize: 24}}>{'<'}</Text>
        </TouchableOpacity>
        <View style={styles.centered}>
          <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.avatar} />
          <Text style={styles.name}>{profile.name}</Text>
        </View>
        <View style={styles.inputRow}>
          <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/new-post.png'}} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Email" value={profile.email} onChangeText={v => handleChange('email', v)} />
        </View>
        <View style={styles.inputRow}>
          <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/user.png'}} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Full Name" value={profile.fullName} onChangeText={v => handleChange('fullName', v)} />
        </View>
        <View style={styles.inputRow}>
          <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/marker.png'}} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Address" value={profile.address} onChangeText={v => handleChange('address', v)} />
        </View>
        <View style={styles.inputRow}>
          <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/phone.png'}} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Phone No" value={profile.phone} onChangeText={v => handleChange('phone', v)} />
          <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/marker.png'}} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Pincode" value={profile.pincode} onChangeText={v => handleChange('pincode', v)} />
        </View>
        <View style={styles.inputRow}>
          <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/birthday-cake.png'}} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Date of Birth" value={profile.dob} onChangeText={v => handleChange('dob', v)} />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { padding: 16 },
  backBtn: { position: 'absolute', top: 40, left: 20, zIndex: 2 },
  centered: { alignItems: 'center', marginBottom: 16 },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 12, backgroundColor: '#fff' },
  name: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 16 },
  inputRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 8, marginBottom: 16, paddingHorizontal: 8 },
  icon: { width: 24, height: 24, marginRight: 8 },
  input: { flex: 1, height: 48, fontSize: 16 },
}); 
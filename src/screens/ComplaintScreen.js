import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function ComplaintScreen({ navigation }) {
  const [form, setForm] = useState({
    fullName: '',
    address: '',
    phone: '',
    pincode: '',
    checked: false,
  });

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  return (
    <LinearGradient colors={["#ffb300", "#ff9800"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={{fontSize: 24}}>{'<'}</Text>
        </TouchableOpacity>
        <Image source={{ uri: 'https://via.placeholder.com/350x150.png?text=Map' }} style={styles.map} />
        <View style={styles.inputRow}>
          <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/user.png'}} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Full Name" value={form.fullName} onChangeText={v => handleChange('fullName', v)} />
        </View>
        <View style={styles.inputRow}>
          <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/marker.png'}} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Address" value={form.address} onChangeText={v => handleChange('address', v)} />
        </View>
        <View style={styles.inputRow}>
          <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/phone.png'}} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Phone No" value={form.phone} onChangeText={v => handleChange('phone', v)} />
          <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/marker.png'}} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Pincode" value={form.pincode} onChangeText={v => handleChange('pincode', v)} />
        </View>
        <View style={styles.checkboxRow}>
          <TouchableOpacity onPress={() => handleChange('checked', !form.checked)}>
            <Ionicons name={form.checked ? 'checkbox' : 'square-outline'} size={24} color={form.checked ? '#ff9800' : '#fff'} />
          </TouchableOpacity>
          <Text style={styles.checkboxText}>Welcome our community within 5 min to action your complaint.</Text>
        </View>
        <View style={styles.uploadBox}>
          <Text style={styles.uploadText}>Drop Here Image, Document, Video</Text>
        </View>
        <TextInput style={styles.input} placeholder="Write here ..." multiline />
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { padding: 16 },
  backBtn: { position: 'absolute', top: 40, left: 20, zIndex: 2 },
  map: { width: '100%', height: 150, borderRadius: 12, marginBottom: 16 },
  inputRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 8, marginBottom: 16, paddingHorizontal: 8 },
  icon: { width: 24, height: 24, marginRight: 8 },
  input: { flex: 1, height: 48, fontSize: 16, marginBottom: 8 },
  checkboxRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  checkboxText: { color: '#fff', fontSize: 12, marginLeft: 8, flex: 1 },
  uploadBox: { backgroundColor: '#fff', borderRadius: 8, padding: 16, alignItems: 'center', marginBottom: 16 },
  uploadText: { color: '#ff9800', fontWeight: 'bold' },
  submitBtn: { width: '100%', borderRadius: 8, backgroundColor: '#fff', padding: 12, alignItems: 'center', marginTop: 8 },
  submitBtnText: { color: '#ff9800', fontWeight: 'bold', fontSize: 18 },
}); 
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [mobile, setMobile] = useState('');
  const [checked, setChecked] = useState(false);

  return (
    <LinearGradient colors={["#ffb300", "#ff9800"]} style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={{fontSize: 24}}>{'<'}</Text>
      </TouchableOpacity>
      <View style={styles.centered}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100x100.png?text=Logo' }}
          style={styles.logo}
        />
        <Text style={styles.title}>PublicConnect</Text>
        <Text style={styles.subtitle}>Connect With Your Community</Text>
        <Text style={styles.welcome}>WELCOME BACK</Text>
        <Text style={styles.loginTo}>Login To Your Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={setMobile}
        />
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('OtpVerification')}>
          <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{ color: '#fff', marginBottom: 8, textDecorationLine: 'underline' }}>Register</Text>
        </TouchableOpacity>
        <View style={styles.checkboxRow}>
          <TouchableOpacity onPress={() => setChecked(!checked)}>
            <Ionicons name={checked ? 'checkbox' : 'square-outline'} size={24} color={checked ? '#ff9800' : '#fff'} />
          </TouchableOpacity>
          <Text style={styles.checkboxText}>
            By providing my phone number, I hereby agree and accept the terms and privacy policy in use of the app.
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  backBtn: { position: 'absolute', top: 40, left: 20, zIndex: 2 },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 24 },
  logo: { width: 100, height: 100, marginBottom: 16, borderRadius: 50, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 4 },
  subtitle: { fontSize: 14, color: '#fff', opacity: 0.8, marginBottom: 24 },
  welcome: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 4 },
  loginTo: { fontSize: 14, color: '#fff', marginBottom: 16 },
  input: { width: '100%', backgroundColor: '#fff', borderRadius: 8, padding: 12, marginBottom: 16, fontSize: 16 },
  loginBtn: { width: '100%', borderRadius: 8, borderWidth: 2, borderColor: '#fff', padding: 12, alignItems: 'center', marginBottom: 16 },
  loginBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  checkboxRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  checkboxText: { color: '#fff', fontSize: 12, marginLeft: 8, flex: 1 },
}); 
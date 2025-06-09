import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function RegisterScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <LinearGradient colors={["#ffb300", "#ff9800"]} style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={{fontSize: 24}}>{'<'}</Text>
      </TouchableOpacity>
      <View style={styles.centered}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Log In To Your Account</Text>
        <View style={styles.inputRow}>
          <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/user.png'}} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
        </View>
        <View style={styles.inputRow}>
          <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/new-post.png'}} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
        </View>
        <View style={styles.inputRow}>
          <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/lock-2.png'}} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
        </View>
        <View style={styles.inputRow}>
          <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/lock-2.png'}} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
        </View>
        <Text style={styles.orContinue}>Or Continue With</Text>
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialBtn}>
            <Image source={{uri: 'https://img.icons8.com/color/48/000000/google-logo.png'}} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Image source={{uri: 'https://img.icons8.com/color/48/000000/facebook-new.png'}} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.submitBtn} onPress={() => navigation.navigate('OtpVerification')}>
          <Text style={styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  backBtn: { position: 'absolute', top: 40, left: 20, zIndex: 2 },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 24 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 4 },
  subtitle: { fontSize: 14, color: '#fff', opacity: 0.8, marginBottom: 24 },
  inputRow: { flexDirection: 'row', alignItems: 'center', width: '100%', backgroundColor: '#fff', borderRadius: 8, marginBottom: 16, paddingHorizontal: 8 },
  icon: { width: 24, height: 24, marginRight: 8 },
  input: { flex: 1, height: 48, fontSize: 16 },
  orContinue: { color: '#000', marginVertical: 12, fontWeight: 'bold' },
  socialRow: { flexDirection: 'row', marginBottom: 16 },
  socialBtn: { marginHorizontal: 8 },
  socialIcon: { width: 36, height: 36 },
  submitBtn: { width: '100%', borderRadius: 8, borderWidth: 2, borderColor: '#fff', padding: 12, alignItems: 'center', marginTop: 8 },
  submitBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
}); 
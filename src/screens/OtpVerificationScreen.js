import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function OtpVerificationScreen({ navigation }) {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleOtpChange = (value, idx) => {
    const newOtp = [...otp];
    newOtp[idx] = value;
    setOtp(newOtp);
  };

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
        <Text style={styles.otpTitle}>OTP Verification</Text>
        <Text style={styles.otpSubtitle}>We have sent OTP on your register mobile Number</Text>
        <Text style={styles.verification}>Verification</Text>
        <View style={styles.otpRow}>
          {[0,1,2,3].map((i) => (
            <TextInput
              key={i}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="number-pad"
              value={otp[i]}
              onChangeText={val => handleOtpChange(val, i)}
            />
          ))}
        </View>
        <TouchableOpacity>
          <Text style={styles.resend}>Don't receive OTP? <Text style={{textDecorationLine: 'underline'}}>Resend</Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.verifyBtn} onPress={() => navigation.replace('MainTabs')}>
          <Text style={styles.verifyBtnText}>Verify</Text>
        </TouchableOpacity>
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
  otpTitle: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 4 },
  otpSubtitle: { fontSize: 14, color: '#fff', marginBottom: 16 },
  verification: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 12 },
  otpRow: { flexDirection: 'row', justifyContent: 'center', marginBottom: 16 },
  otpInput: { width: 48, height: 48, backgroundColor: '#ffd54f', borderRadius: 8, marginHorizontal: 8, textAlign: 'center', fontSize: 24, borderWidth: 1, borderColor: '#fff' },
  resend: { color: '#fff', marginBottom: 16, marginTop: 8, fontSize: 14 },
  verifyBtn: { width: '100%', borderRadius: 8, borderWidth: 2, borderColor: '#fff', padding: 12, alignItems: 'center', marginTop: 8 },
  verifyBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
}); 
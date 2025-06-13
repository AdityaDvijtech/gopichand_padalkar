import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppImages from '../assets/images';

const themeColors = {
  yellowPrimary: '#FFD700',
  yellowLight: '#FFFACD',
  white: '#FFFFFF',
  textDark: '#212121',
  textLight: '#585858',
  black: '#000000',
};

export default function OtpVerificationScreen({ navigation }) {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleOtpChange = (value, idx) => {
    const newOtp = [...otp];
    newOtp[idx] = value;
    setOtp(newOtp);
  };

  return (
    <LinearGradient colors={[themeColors.yellowLight, themeColors.white]} style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.backBtnText}>{'<'}</Text>
      </TouchableOpacity>
      <View style={styles.centered}>
        <Image
          source={AppImages.gopichandAvatar}
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
          <Text style={styles.resend}>Don't receive OTP? <Text style={styles.resendLink}>Resend</Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.verifyBtn} onPress={() => navigation.replace('MainTabs')}>
          <Text style={styles.verifyBtnText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.white,
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: themeColors.yellowPrimary,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: themeColors.textDark,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: themeColors.textLight,
    marginBottom: 30,
  },
  otpTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themeColors.textDark,
    marginBottom: 8,
  },
  otpSubtitle: {
    fontSize: 16,
    color: themeColors.textLight,
    marginBottom: 24,
    textAlign: 'center',
  },
  verification: {
    fontSize: 18,
    color: themeColors.textDark,
    marginBottom: 16,
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: themeColors.yellowLight,
    borderRadius: 8,
    marginHorizontal: 8,
    textAlign: 'center',
    fontSize: 20,
    color: themeColors.textDark,
    backgroundColor: themeColors.white,
  },
  resend: {
    fontSize: 14,
    color: themeColors.textLight,
    marginBottom: 24,
  },
  resendLink: {
    textDecorationLine: 'underline',
    color: themeColors.textDark,
  },
  verifyBtn: {
    backgroundColor: themeColors.yellowPrimary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: 'center',
    elevation: 2,
  },
  verifyBtnText: {
    color: themeColors.textDark,
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 
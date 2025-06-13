import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import AppImages from '../assets/images';

const themeColors = {
  yellowPrimary: '#FFD700',
  yellowLight: '#FFFACD',
  white: '#FFFFFF',
  textDark: '#212121',
  textLight: '#585858',
  black: '#000000',
};

export default function LoginScreen({ navigation }) {
  const [mobile, setMobile] = useState('');
  const [checked, setChecked] = useState(false);

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
        <Text style={styles.welcome}>WELCOME BACK</Text>
        <Text style={styles.loginTo}>Login To Your Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={setMobile}
          placeholderTextColor={themeColors.textLight}
        />
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('OtpVerification')}>
          <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
        <View style={styles.checkboxRow}>
          <TouchableOpacity onPress={() => setChecked(!checked)}>
            <Ionicons 
              name={checked ? 'checkbox' : 'square-outline'} 
              size={24} 
              color={checked ? themeColors.yellowPrimary : themeColors.textDark} 
            />
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
    borderWidth: 1,
    borderColor: themeColors.yellowLight,
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
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themeColors.textDark,
    marginBottom: 8,
  },
  loginTo: {
    fontSize: 16,
    color: themeColors.textLight,
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: themeColors.white,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: themeColors.yellowLight,
    color: themeColors.textDark,
    fontSize: 16,
  },
  loginBtn: {
    backgroundColor: themeColors.yellowPrimary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
  },
  loginBtnText: {
    color: themeColors.textDark,
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerText: {
    color: themeColors.textDark,
    marginBottom: 8,
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  checkboxText: {
    color: themeColors.textLight,
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
  },
}); 
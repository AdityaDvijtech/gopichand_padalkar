import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const themeColors = {
  yellowPrimary: '#FFD700',
  yellowLight: '#FFFACD',
  white: '#FFFFFF',
  textDark: '#212121',
  textLight: '#585858',
  black: '#000000',
};

export default function RegisterScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <LinearGradient colors={[themeColors.yellowLight, themeColors.white]} style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.backBtnText}>{'<'}</Text>
      </TouchableOpacity>
      <View style={styles.centered}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Create Your Account</Text>
        <View style={styles.inputRow}>
          <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/user.png'}} style={styles.icon} />
          <TextInput 
            style={styles.input} 
            placeholder="Full Name" 
            value={fullName} 
            onChangeText={setFullName}
            placeholderTextColor={themeColors.textLight}
          />
        </View>
        <View style={styles.inputRow}>
          <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/new-post.png'}} style={styles.icon} />
          <TextInput 
            style={styles.input} 
            placeholder="Email" 
            value={email} 
            onChangeText={setEmail}
            placeholderTextColor={themeColors.textLight}
          />
        </View>
        <View style={styles.inputRow}>
          <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/lock-2.png'}} style={styles.icon} />
          <TextInput 
            style={styles.input} 
            placeholder="Password" 
            value={password} 
            onChangeText={setPassword} 
            secureTextEntry
            placeholderTextColor={themeColors.textLight}
          />
        </View>
        <View style={styles.inputRow}>
          <Image source={{uri: 'https://img.icons8.com/ios-filled/50/000000/lock-2.png'}} style={styles.icon} />
          <TextInput 
            style={styles.input} 
            placeholder="Confirm Password" 
            value={confirmPassword} 
            onChangeText={setConfirmPassword} 
            secureTextEntry
            placeholderTextColor={themeColors.textLight}
          />
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
  container: {
    flex: 1,
    backgroundColor: themeColors.white,
    marginTop: 20,
    paddingTop: 0,
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
    paddingTop: 0,
    marginHorizontal: 8,
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
  orContinue: {
    color: themeColors.textLight,
    marginVertical: 20,
    fontSize: 16,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialBtn: {
    backgroundColor: themeColors.white,
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: themeColors.yellowLight,
    elevation: 2,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  submitBtn: {
    backgroundColor: themeColors.yellowPrimary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginTop: 16,
    elevation: 2,
  },
  submitBtnText: {
    color: themeColors.textDark,
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 
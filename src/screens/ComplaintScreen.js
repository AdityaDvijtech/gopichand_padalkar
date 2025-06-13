import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const themeColors = {
  yellowPrimary: '#FFD700',
  yellowLight: '#FFFACD',
  white: '#FFFFFF',
  textDark: '#212121',
  textLight: '#585858',
  black: '#000000',
};

export default function ComplaintScreen({ navigation }) {
  const [form, setForm] = useState({
    fullName: '',
    address: '',
    phone: '',
    pincode: '',
    description: '',
    checked: false,
  });

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  return (
    <LinearGradient colors={[themeColors.yellowLight, themeColors.white]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.complaintHeader}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={themeColors.textDark} />
          </TouchableOpacity>
          <Text style={styles.complaintTitle}>File a Complaint</Text>
        </View>

        <View style={styles.complaintForm}>
          <Text style={styles.formLabel}>Full Name</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Enter your full name"
            value={form.fullName}
            onChangeText={v => handleChange('fullName', v)}
            placeholderTextColor={themeColors.textLight}
          />

          <Text style={styles.formLabel}>Address</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Enter your address"
            value={form.address}
            onChangeText={v => handleChange('address', v)}
            placeholderTextColor={themeColors.textLight}
          />

          <View style={styles.rowContainer}>
            <View style={styles.columnContainer}>
              <Text style={styles.formLabel}>Phone Number</Text>
              <TextInput
                style={styles.formInput}
                placeholder="phone number"
                keyboardType="phone-pad"
                value={form.phone}
                onChangeText={v => handleChange('phone', v)}
                placeholderTextColor={themeColors.textLight}
              />
            </View>
            <View style={styles.columnContainer}>
              <Text style={styles.formLabel}>Pincode</Text>
              <TextInput
                style={styles.formInput}
                placeholder="Enter pincode"
                keyboardType="number-pad"
                value={form.pincode}
                onChangeText={v => handleChange('pincode', v)}
                placeholderTextColor={themeColors.textLight}
              />
            </View>
          </View>

          <Text style={styles.formLabel}>Description</Text>
          <TextInput
            style={styles.formTextArea}
            placeholder="Describe your complaint in detail"
            multiline
            value={form.description}
            onChangeText={v => handleChange('description', v)}
            placeholderTextColor={themeColors.textLight}
          />

          <TouchableOpacity style={styles.uploadSection}>
            <Ionicons name="cloud-upload-outline" size={32} color={themeColors.textDark} />
            <Text style={styles.uploadText}>Upload Supporting Documents</Text>
            <Text style={styles.uploadSubtext}>Images, Videos, or Documents</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.checkboxRow}
            onPress={() => handleChange('checked', !form.checked)}
          >
            <Ionicons 
              name={form.checked ? 'checkbox' : 'square-outline'} 
              size={24} 
              color={form.checked ? themeColors.yellowPrimary : themeColors.textDark} 
            />
            <Text style={styles.checkboxText}>
              I agree to the terms and conditions of filing a complaint
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[
              styles.submitButton,
              !form.checked && styles.submitButtonDisabled
            ]}
            disabled={!form.checked}
          >
            <Text style={styles.submitButtonText}>Submit Complaint</Text>
          </TouchableOpacity>
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
  },
  complaintHeader: {
    flexDirection: 'row',
    marginBottom: 12,
    marginTop: 8,
  },
  backButton: {
    backgroundColor: themeColors.white,
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    elevation: 2,
    borderWidth: 1,
    borderColor: themeColors.yellowLight,
  },
  complaintTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themeColors.textDark,
  },
  complaintForm: {
    backgroundColor: themeColors.white,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    borderWidth: 1,
    borderColor: themeColors.yellowLight,
  },
  formLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: themeColors.textDark,
    marginBottom: 8,
  },
  formInput: {
    backgroundColor: themeColors.white,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: themeColors.yellowLight,
    color: themeColors.textDark,
    fontSize: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  columnContainer: {
    flex: 1,
    marginHorizontal: 4,
  },
  formTextArea: {
    backgroundColor: themeColors.white,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: themeColors.yellowLight,
    color: themeColors.textDark,
    fontSize: 16,
    height: 120,
    textAlignVertical: 'top',
  },
  uploadSection: {
    backgroundColor: themeColors.yellowLight,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: themeColors.yellowPrimary,
  },
  uploadText: {
    fontSize: 16,
    color: themeColors.textDark,
    marginTop: 8,
    fontWeight: 'bold',
  },
  uploadSubtext: {
    fontSize: 12,
    color: themeColors.textLight,
    marginTop: 4,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  checkboxText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: themeColors.textLight,
  },
  submitButton: {
    backgroundColor: themeColors.yellowPrimary,
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    elevation: 2,
  },
  submitButtonDisabled: {
    opacity: 0.5,
  },
  submitButtonText: {
    color: themeColors.textDark,
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 
import { StyleSheet } from 'react-native';

export const themeColors = {
  // Primary Colors
  primary: '#1E88E5',      // Main blue
  primaryDark: '#1565C0',  // Darker blue for gradients
  primaryLight: '#64B5F6', // Lighter blue for accents
  
  // Secondary Colors
  secondary: '#2196F3',    // Secondary blue
  secondaryDark: '#1976D2', // Darker secondary blue
  secondaryLight: '#90CAF9', // Lighter secondary blue
  
  // White Shades
  white: '#FFFFFF',
  whiteLight: '#F5F5F5',
  whiteDark: '#E0E0E0',
  
  // Text Colors
  textDark: '#212121',
  textLight: '#757575',
  
  // Status Colors
  success: '#4CAF50',
  error: '#F44336',
  warning: '#FFC107',
  
  // Background Colors
  background: '#FFFFFF',
  backgroundLight: '#F5F5F5',
  backgroundDark: '#E3F2FD',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.background,
  },
  scrollContent: {
    padding: 16,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Common Components
  card: {
    backgroundColor: themeColors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: themeColors.textDark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  button: {
    backgroundColor: themeColors.primary,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: themeColors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: themeColors.white,
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: themeColors.primaryLight,
    fontSize: 16,
  },
  // History Screen Styles
  historyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 16,
    backgroundColor: themeColors.primary,
  },
  backButton: {
    padding: 8,
  },
  historyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themeColors.white,
    marginLeft: 16,
  },
  heroSection: {
    alignItems: 'center',
    marginBottom: 32,
    backgroundColor: themeColors.primary,
    padding: 20,
    borderRadius: 16,
  },
  heroImage: {
    width: '100%',
    height: 250,
    borderRadius: 16,
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: themeColors.white,
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 18,
    color: themeColors.white,
    opacity: 0.9,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  timelineYear: {
    width: 100,
    paddingRight: 16,
    borderRightWidth: 2,
    borderRightColor: themeColors.primary,
    alignItems: 'flex-end',
  },
  yearText: {
    color: themeColors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  timelineContent: {
    flex: 1,
    paddingLeft: 16,
  },
  timelineImage: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 12,
  },
  timelineTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: themeColors.textDark,
    marginBottom: 8,
  },
  timelineDescription: {
    fontSize: 14,
    color: themeColors.textLight,
    lineHeight: 20,
  },
  quoteSection: {
    backgroundColor: themeColors.primaryLight,
    borderRadius: 16,
    padding: 24,
    margin: 16,
    alignItems: 'center',
  },
  quoteText: {
    fontSize: 18,
    color: themeColors.white,
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 26,
  },
  // Complaint Screen Styles
  complaintHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 16,
    backgroundColor: themeColors.primary,
  },
  complaintTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themeColors.white,
    marginLeft: 16,
  },
  complaintForm: {
    backgroundColor: themeColors.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    elevation: 2,
    shadowColor: themeColors.textDark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  formLabel: {
    color: themeColors.textDark,
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
  },
  formInput: {
    backgroundColor: themeColors.whiteLight,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: themeColors.primaryLight,
  },
  formTextArea: {
    backgroundColor: themeColors.whiteLight,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    height: 120,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: themeColors.primaryLight,
  },
  uploadSection: {
    borderWidth: 2,
    borderColor: themeColors.primary,
    borderStyle: 'dashed',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: themeColors.backgroundLight,
  },
  uploadText: {
    color: themeColors.primary,
    fontSize: 16,
    marginBottom: 8,
  },
  submitButton: {
    backgroundColor: themeColors.primary,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  submitButtonText: {
    color: themeColors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Detail Screen Styles
  detailHeader: {
    height: 300,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: themeColors.primary,
  },
  detailImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  detailOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(30, 136, 229, 0.7)',
  },
  detailTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: themeColors.white,
    marginBottom: 8,
  },
  detailSubtitle: {
    fontSize: 16,
    color: themeColors.white,
    opacity: 0.9,
  },
  detailContent: {
    padding: 20,
    backgroundColor: themeColors.background,
  },
  detailSection: {
    marginBottom: 24,
  },
  detailSectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: themeColors.textDark,
    marginBottom: 12,
  },
  detailText: {
    fontSize: 16,
    color: themeColors.textLight,
    lineHeight: 24,
  },
  detailCard: {
    backgroundColor: themeColors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: themeColors.textDark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: themeColors.primaryLight,
  },
}); 
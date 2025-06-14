# gopichand_padalkar Developer Guide

Welcome to the **gopichand_padalkar** project! This guide will help you set up, develop, and contribute to the app efficiently.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Assets](#assets)
- [Navigation](#navigation)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)

---

## Project Overview

gopichand_padalkar is a React Native application built with Expo, designed to provide information and services for the Dhangar community. It features authentication, government schemes, complaint registration, history, and user profile management.

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or above recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/):
  ```bash
  npm install -g expo-cli
  ```
- Android Studio or Xcode (for device emulation, optional)

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd gopichand_padalkar
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

---

## Available Scripts

- `npm start` – Start the Expo development server
- `npm run android` – Run the app on an Android device/emulator
- `npm run ios` – Run the app on an iOS device/simulator (Mac only)
- `npm run web` – Run the app in a web browser

---

## Project Structure

```
├── App.js                # App entry, sets up navigation and providers
├── index.js              # Registers the root component with Expo
├── app.json              # Expo configuration
├── assets/               # App icons, splash, and static images
├── src/
│   ├── navigation/       # Navigation setup (AppNavigator.js)
│   ├── screens/          # Main app screens (Home, Login, Profile, etc.)
│   ├── assets/           # App-specific images and images.js
│   ├── components/       # (Reusable UI components)
│   ├── constants/        # (Static data/configuration)
│   ├── hooks/            # (Custom React hooks)
│   └── utils/            # (Utility functions)
```

### Key Screens
- **SplashScreen**: Initial loading screen
- **LoginScreen / RegisterScreen / OtpVerificationScreen**: User authentication
- **HomeScreen**: Main dashboard
- **GovernmentSchemesScreen**: Info on government schemes
- **ComplaintScreen**: Register complaints
- **HistoryScreen**: View complaint history
- **ProfileScreen**: User profile
- **DetailScreen**: Detailed info view

---

## Assets
- **/assets/**: App-wide icons, splash, and adaptive icons
- **/src/assets/**: App images, managed via `images.js` for easy imports

---

## Navigation
- Uses React Navigation (stack + bottom tabs)
- Main navigation is set up in `src/navigation/AppNavigator.js`
- Bottom tabs: Home, Schemes, Complaint, History, Profile
- Stack navigation for authentication and detail screens

---

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit and push (`git commit -m 'Add feature' && git push`)
5. Open a Pull Request

---

## Troubleshooting
- If you encounter issues with dependencies, try deleting `node_modules` and `package-lock.json`, then run `npm install` again.
- For Expo issues, refer to the [Expo documentation](https://docs.expo.dev/).

---

## License
This project is for educational and community purposes.

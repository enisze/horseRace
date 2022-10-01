import 'dotenv/config'

export default {
  expo: {
    name: 'horseRace',
    slug: 'horseRace',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './app/assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './app/assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,

      config: {
        googleMobileAdsAppId: 'ca-app-pub-7941882405849156~9233114658',
      },
    },
    android: {
      package: 'com.eniszejnilovic.horseRace',
      versionCode: 4,
      permissions: [],
      adaptiveIcon: {
        foregroundImage: './app/assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
      config: {
        googleMobileAdsAppId: 'ca-app-pub-7941882405849156~9233114658',
      },
    },
    web: {
      favicon: './app/assets/favicon.png',
    },

    extra: {
      // Add your extra configs here
      mainViewBannerId: process.env.GOOGLE_ADMOB_MAINVIEW_BANNER_ID,
      startViewBannerId: process.env.GOOGLE_ADMOB_STARTVIEW_BANNER_ID,
      modalBannerId: process.env.GOOGLE_ADMOB_STARTVIEW_BANNER_ID,

      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseDatabaseUrl: process.env.FIREBASE_DATABASE_URL,
      firebaseProjectId: process.env.FIREBASE_PROJECTID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      firebaseMeasurmentId: process.env.FIREBASE_MEASUREMENTID,
    },
  },
}

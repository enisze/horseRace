import 'dotenv/config'

export default {
  expo: {
    name: 'horseRace',
    slug: 'horseRace',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './libs/assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './libs/assets/splash.png',
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
      versionCode: 6,
      permissions: [],
      adaptiveIcon: {
        foregroundImage: './libs/assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
      config: {
        googleMobileAdsAppId: 'ca-app-pub-7941882405849156~9233114658',
      },
    },
    web: {
      favicon: './libs/assets/favicon.png',
    },

    extra: {
      // Add your extra configs here
      mainViewBannerId: process.env.GOOGLE_ADMOB_MAINVIEW_BANNER_ID,
      startViewBannerId: process.env.GOOGLE_ADMOB_STARTVIEW_BANNER_ID,
      modalBannerId: process.env.GOOGLE_ADMOB_STARTVIEW_BANNER_ID,
    },
  },
}

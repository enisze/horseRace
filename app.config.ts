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
        googleMobileAdsAppId: 'ca-app-pub-3940256099942544/2247696110',
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './libs/assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
      config: {
        googleMobileAdsAppId: 'ca-app-pub-3940256099942544/2247696110',
      },
    },
    web: {
      favicon: './libs/assets/favicon.png',
    },

    extra: {
      // Add your extra configs here
      apiKey: process.env.GOOGLE_ADMOB_PRODUCTION_KEY,
    },
  },
}

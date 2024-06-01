import type { ExpoConfig } from '@expo/config'

import 'dotenv/config'

const defineConfig = (): ExpoConfig => ({
  name: 'horseRace',
  slug: 'horseRace',
  scheme: ['horserace'],
  owner: 'eniszej',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  runtimeVersion: {
    policy: 'sdkVersion',
  },
  splash: {
    image: './assets/icon.png',
    resizeMode: 'contain',
    backgroundColor: '#1F104A',
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: 'https://u.expo.dev/7eb073d8-81bd-409a-9b6a-09db2d499c73',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    bundleIdentifier: 'your.bundle.identifier',
    supportsTablet: true,
    config: {
      googleMobileAdsAppId: 'ca-app-pub-7941882405849156~9233114658',
    },
  },
  android: {
    package: 'com.eniszejnilovic.horseRace',
    adaptiveIcon: {
      foregroundImage: './assets/icon.png',
      backgroundColor: '#1F104A',
    },
    permissions: [],
  },
  // extra: {
  //   eas: {
  //     projectId: "your-eas-project-id",
  //   },
  // },
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  plugins: [
    ['expo-router'],
    ['./expo-plugins/with-modify-gradle.js'],
    [
      'expo-build-properties',
      {
        android: {
          compileSdkVersion: 33,
        },
        ios: {
          deploymentTarget: '13.4',
        },
      },
    ],
  ],
  extra: {
    // Add your extra configs here
    mainViewBannerId: process.env.GOOGLE_ADMOB_MAINVIEW_BANNER_ID,
    startViewBannerId: process.env.GOOGLE_ADMOB_STARTVIEW_BANNER_ID,
    modalBannerId: process.env.GOOGLE_ADMOB_STARTVIEW_BANNER_ID,
    eas: {
      projectId: '7eb073d8-81bd-409a-9b6a-09db2d499c73',
    },
  },
})

export default defineConfig

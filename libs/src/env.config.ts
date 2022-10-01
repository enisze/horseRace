import Constants from 'expo-constants'

export const GOOGLE_ADMOB_MAINVIEW_BANNER_ID: string =
  Constants?.manifest?.extra?.mainViewBannerId
export const GOOGLE_ADMOB_STARTVIEW_BANNER_ID: string =
  Constants?.manifest?.extra?.startViewBannerId

export const GOOGLE_ADMOB_MODAL_BANNER_ID: string =
  Constants?.manifest?.extra?.modalBannerId

export const FIREBASE_API_KEY: string =
  Constants?.manifest?.extra?.firebaseApiKey
export const FIREBASE_AUTH_DOMAIN: string =
  Constants?.manifest?.extra?.firebaseAuthDomain
export const FIREBASE_DATABASE_URL: string =
  Constants?.manifest?.extra?.firebaseDatabaseUrl
export const FIREBASE_PROJECTID: string =
  Constants?.manifest?.extra?.firebaseProjectId
export const FIREBASE_STORAGE_BUCKET: string =
  Constants?.manifest?.extra?.firebaseStorageBucket
export const FIREBASE_MESSAGING_SENDER_ID: string =
  Constants?.manifest?.extra?.firebaseMessagingSenderId
export const FIREBASE_APP_ID: string = Constants?.manifest?.extra?.firebaseAppId
export const FIREBASE_MEASUREMENTID: string =
  Constants?.manifest?.extra?.firebaseMeasurmentId

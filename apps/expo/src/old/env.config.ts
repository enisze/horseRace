import Constants from "expo-constants";

export const GOOGLE_ADMOB_MAINVIEW_BANNER_ID: string =
  Constants?.expoConfig?.extra?.mainViewBannerId;
export const GOOGLE_ADMOB_STARTVIEW_BANNER_ID: string =
  Constants?.expoConfig?.extra?.startViewBannerId;

export const GOOGLE_ADMOB_MODAL_BANNER_ID: string =
  Constants?.expoConfig?.extra?.modalBannerId;

console.log(Constants);

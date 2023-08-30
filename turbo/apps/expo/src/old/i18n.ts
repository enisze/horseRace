import * as Localization from "expo-localization";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import de from "../old/locales/de/horseRace.json";
import en from "../old/locales/en/horseRace.json";

void i18next.use(initReactI18next).init({
  resources: {
    de: { general: de },
    en: { general: en },
  },
  defaultNS: "general",
  lng: Localization.locale,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  cleanCode: true,
});

export const useLocale = () => {
  return Localization.locale;
};

export default i18next;

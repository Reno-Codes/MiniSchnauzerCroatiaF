import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "@/translations/en.json";
import hrTranslations from "@/translations/hr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    hr: { translation: hrTranslations },
  },
  lng: "hr", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
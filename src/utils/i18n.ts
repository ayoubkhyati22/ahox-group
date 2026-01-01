import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import de from '../locales/de.json';
import en from '../locales/en.json';
import ar from '../locales/ar.json';
import sq from '../locales/sq.json';

const resources = {
  de: { translation: de },
  en: { translation: en },
  ar: { translation: ar },
  sq: { translation: sq }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['de', 'en', 'ar', 'sq'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
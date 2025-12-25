import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import de from '../locales/de.json';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import darija from '../locales/darija.json';

const resources = {
  de: { translation: de },
  en: { translation: en },
  fr: { translation: fr },
  darija: { translation: darija },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { defaultLang } from './config-lang.js';
import enLocales from './langs/en.js';

const lng = defaultLang.value;

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enLocales },
    },
    lng,
    fallbackLng: defaultLang.value,
    debug: false,
    ns: ['translation'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { defaultLanguage, languagesResources } from './languageConfig';

const fallbackLng = defaultLanguage;
const availableLanguages = ['en', 'it' /*, 'de', 'fr', 'es'*/];

const options = {
  // order and from where user language should be detected
  order: ['localStorage'],

  // keys or params to lookup language from
  lookupLocalStorage: 'i18nextLng',

  // cache user language on
  caches: ['localStorage'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // only detect languages that are in the whitelist
  checkWhitelist: true,
  // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
  cookieOptions: { path: '/' },
};

i18n
  .use(LanguageDetector)
  // connect with React
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: process.env.NODE_ENV === 'development',
    detection: options,

    // lng: 'en',
    fallbackLng,
    supportedLngs: availableLanguages,

    resources: languagesResources,
    load: 'languageOnly',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    react: {
      useSuspense: true,
    },
  });

export default i18n;

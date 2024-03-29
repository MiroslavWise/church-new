import i18nPlugin from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { ru } from '../languages/ru'
import { by } from '../languages/by'

export default i18nPlugin
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
                resources: { ru: { translations: ru }, by: { translations: by }},
                fallbackLng: 'ru',
                debug: true,
                keySeparator: false,
                supportedLngs: ['ru', 'by'],
                ns: ['translations'],
                defaultNS: 'translations',
                interpolation: {
                        escapeValue: true,
                },
        });

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        sculpture: 'Scultpure',
        installation: 'Installation',
        workshop: 'Workshop + Food Forest',
        twoDimensional: 'Two Dimensional',
      },
    },
    es: {
      translation: {
        escultura: 'Escultura',
        installation: 'Instalacion',
        workshop: 'Taller + Bosque de Alimentos',
        twoDimensional: 'Bidimensional',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

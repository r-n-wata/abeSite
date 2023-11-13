import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        sculpture: 'Sculpture',
        installation: 'Installation',
        workshop: 'Workshop + Food Forest Garden',
        twoDimensional: 'Two Dimensional',
        about: 'About',
        contact: 'Contact',
      },
    },
    es: {
      translation: {
        sculpture: 'Escultura',
        installation: 'Instalacion',
        workshop: 'Taller + Bosque Comestible',
        twoDimensional: 'Bidimensional',
        about: 'About',
        contact: 'Contacto',
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

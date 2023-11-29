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
        aboutParagraphOne:
          'Since 2013, I have lived in Bacalar in the Mexican Caribbean. Here, I built my house + workshop + edible forest. The environment in which I live has a very interesting biological diversity. On one hand, my artistic research has been linked to my practice in agriculture, and on the other my coexistence with the lagoon, the jungle, the stromatolites, the mangrove, the cenotes and the fauna has influenced my work from the conceptual part to aesthetic exploration.',
        aboutParagraphTwo:
          'Finding and collecting materials is fundamental in my process. Within my edible forest, I find materials that I work with such as: stones, wood, cotton, turmeric and red earth (in Mayan: “KanKab”, that I extract from the ground).',
        aboutParagraphThree:
          'I am interested in exploring topics such as fertility, food autonomy, seeds, melipona bees, habitable spaces and some invisible processes of nature.',
        aboutParagraphFour:
          'For ten years, I have investigated the pod of a tree called -  flanboyan - with which I have made installations, sculptures and two-dimensional works.',
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
        aboutParagraphOne:
          'Desde el 2013 radico en Bacalar en el caribe mexicano. Aquí construí mi casa + taller + bosque comestible. El entorno en el que vivo tiene una diversidad biológica muy interesante. Por un lado, mi investigación artística se ha vinculado con mi práctica en la agricultura, por otro lado, mi convivencia con la laguna, la selva, los estromatolitos, el manglar, los cenotes y la fauna ha influenciado mi obra desde la parte conceptual a la exploración estética.',
        aboutParagraphTwo:
          'El hallazgo y recolección de los materiales es fundamental en mi proceso. Dentro de mi bosque comestible encuentro materiales con los que trabajo tales como piedras, maderas, algodón, cúrcuma y tierra roja (en Maya llamada “KanKab” que extraigo del suelo).',
        aboutParagraphThree:
          'Me interesa explorar temas como: la fecundidad, la autonomía alimentaria, las semillas, las abejas meliponas, espacios habitables y algunos procesos invisibles de la naturaleza.',
        aboutParagraphFour:
          'Desde hace diez años he investigado la vaina de un árbol llamado flanboyan con la cual he realizado instalaciones, esculturas y obras bidimensionales.',
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

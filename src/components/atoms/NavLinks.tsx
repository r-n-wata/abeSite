import { useTranslation } from 'react-i18next';

function NavLinks() {
  const { t } = useTranslation();
  return {
    navs: [
      {
        id: 1,
        name: t('sculpture'),
        // subNav: [],
      },
      {
        id: 2,
        name: t('installation'),
        // subNav: [],
      },
      {
        id: 3,
        name: t('workshop'),
        // subNav: [],
      },
      {
        id: 4,
        name: t('twoDimensional'),
        // subNav: [],
      },
    ],
  };
}

export default NavLinks;

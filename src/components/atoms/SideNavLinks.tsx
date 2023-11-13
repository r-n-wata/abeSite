import { useTranslation } from 'react-i18next';

function SideNavLinks() {
  const { t } = useTranslation();
  return {
    navs: [
      {
        id: 1,
        name: t('about'),
        // subNav: [],
      },
      {
        id: 2,
        name: t('contact'),
        // subNav: [],
      },
    ],
  };
}

export default SideNavLinks;

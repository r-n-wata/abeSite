import { useTranslation } from 'react-i18next';

function SideNavLinks() {
  const { t } = useTranslation();
  return {
    navs: [
      {
        id: 1,
        name: t('about'),
        link: '/about',
      },
      {
        id: 2,
        name: t('contact'),
        link: '/contact',
      },
    ],
  };
}

export default SideNavLinks;

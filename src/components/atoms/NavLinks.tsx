import { useTranslation } from 'react-i18next';

function NavLinks() {
  const { t } = useTranslation();
  return {
    navs: [
      {
        id: 1,
        name: t('sculpture'),
        subNav: [
          {
            name: 'Sculpture ',
            href: '/sculpture',
          },
          {
            name: 'Sculpture ',
            href: '/sculpture',
          },
          {
            name: 'Sculpture ',
            href: '/sculpture3',
          },
        ],
      },
      {
        id: 2,
        name: t('installation'),
        subNav: [
          {
            name: 'Installation',
            href: '/installation1',
          },
          {
            name: 'Installation',
            href: '/installation2',
          },
          {
            name: 'Installation',
            href: '/installation3',
          },
        ],
      },
      {
        id: 3,
        name: t('workshop'),
        subNav: [
          {
            name: 'Workshop 1',
            href: '/workshop1',
          },
          {
            name: 'Workshop 2',
            href: '/workshop2',
          },
          {
            name: 'Workshop 3',
            href: '/workshop3',
          },
        ],
      },
      {
        id: 4,
        name: t('twoDimensional'),
        subNav: [
          {
            name: 'Biodimentional',
            href: '/biodimentional1',
          },
          {
            name: 'Biodimentional',
            href: '/biodimentional2',
          },
          {
            name: 'Biodimentional',
            href: '/biodimentional3',
          },
        ],
      },
    ],
  };
}

export default NavLinks;

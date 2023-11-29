import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../../context/LanguageContext';
import { rightNavs } from '../../utils/rightNavs';
import { useContext } from 'react';
import SideNav from '../molecules/SideNav';

function RightNav({ styles }: { styles: string }) {
  const { i18n } = useTranslation();
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    changeLanguage(lng);
  };

  return (
    <SideNav
      navs={rightNavs}
      styles={styles}
      language={language}
      handleClick={() => handleLanguageChange(language === 'en' ? 'es' : 'en')}
    />
  );
}

export default RightNav;

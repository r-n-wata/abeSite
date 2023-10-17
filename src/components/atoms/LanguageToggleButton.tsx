import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../../context/LanguageContext';

const LanguageToggleButton = () => {
  const { i18n } = useTranslation();
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    changeLanguage(lng);
  };

  return (
    <div className="flex fixed bottom-4 right-4">
      <div
        onClick={() => handleLanguageChange(language === 'en' ? 'es' : 'en')}
        className="w-8 h-8 transition-transform transform ease-in-out duration-300  hover:translate-y-0 hover:scale-110  "
      >
        <img
          src={
            language === 'en'
              ? '/assets/languages/usa.png'
              : '/assets/languages/mexico.png'
          }
          alt=""
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default LanguageToggleButton;

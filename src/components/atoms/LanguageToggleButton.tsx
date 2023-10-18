import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../../context/LanguageContext';

interface LanguageToggleButtonProps {
  styles?: string;
}

const LanguageToggleButton = ({ styles }: LanguageToggleButtonProps) => {
  const { i18n } = useTranslation();
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    changeLanguage(lng);
  };

  // Note: styles prop is not being used in this component

  return (
    <div className={`flex fixed bottom-4 right-8 ${styles}`}>
      <div
        onClick={() => handleLanguageChange(language === 'en' ? 'es' : 'en')}
        className="w-8 h-8 transition-transform transform ease-in-out duration-300  hover:translate-y-0 hover:scale-110  mobile:w-6 mobile:h-6"
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

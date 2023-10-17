import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Route from './App';
import i18n from './i18n'; // Import the i18n setup
import { I18nextProvider } from 'react-i18next';
import { LanguageProvider } from './context/LanguageContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <I18nextProvider i18n={i18n}>
        <Route />
      </I18nextProvider>
    </LanguageProvider>
  </React.StrictMode>
);

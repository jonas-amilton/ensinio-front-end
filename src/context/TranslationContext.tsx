import React, { createContext, useEffect, useState } from 'react';

import { TranslationProps } from '../interfaces/requestInterfaces';
import { TranslationContextProps } from '../interfaces/translationInterfaceProps';
import { getTranslations } from '../services/requests';
import { LanguagesType } from '../types/languagesType';

const Context = createContext<TranslationContextProps>({
  loading: true,
  currentLang: 'pt',
  setCurrentLang: () => {},
  t: (title: string) => title,
  translationData: [],
});

function useTranslation() {
  const [loading, setLoading] = useState(true);
  const [translationData, setTranslationData] = useState<TranslationProps[]>(
    []
  );
  const [currentLang, setCurrentLang] = useState<LanguagesType>('pt');

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const data = await getTranslations();
        setTranslationData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchTranslations();

    const languageStorage = localStorage.getItem('language');

    if (languageStorage) {
      setCurrentLang(JSON.parse(languageStorage));
    } else {
      const navigatorLanguage = navigator.language;
      if (navigatorLanguage.includes('en')) {
        setCurrentLang('en');
      } else if (navigatorLanguage.includes('pt')) {
        setCurrentLang('pt');
      } else if (navigatorLanguage.includes('es')) {
        setCurrentLang('es');
      }
    }
  }, []);

  const t = (title: string) => {
    const translatedText = translationData.find(
      (td) => td.title.toLowerCase() === title.toLowerCase()
    );

    if (!translatedText) {
      return 'Translation not found';
    }

    return translatedText.value[currentLang];
  };

  const setCurrentLangAndStorage = (language: LanguagesType) => {
    localStorage.setItem('language', JSON.stringify(language));
    setCurrentLang(language);
  };

  return {
    loading,
    currentLang,
    setCurrentLang: setCurrentLangAndStorage,
    t,
    translationData,
  };
}

const TranslationProvider: React.FC = ({ children }) => {
  const { loading, currentLang, setCurrentLang, t, translationData } =
    useTranslation();

  return (
    <Context.Provider
      value={{ loading, currentLang, setCurrentLang, t, translationData }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context as TranslationContext, TranslationProvider };

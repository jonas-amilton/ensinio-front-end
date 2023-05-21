import { LanguagesType } from '../types/languagesType';
import { TranslationProps } from './requestInterfaces';

export interface TranslationContextProps {
  loading: boolean;
  currentLang: LanguagesType;
  setCurrentLang: (language: LanguagesType) => void;
  t: (title: string) => string;
  translationData: TranslationProps[];
}

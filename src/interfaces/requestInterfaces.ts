import { LanguagesProps } from './languageInterfaces';

export interface ItemProps {
  id: number;
  title: LanguagesProps;
  description: LanguagesProps;
}

export interface TranslationProps {
  id: number;
  title: string;
  value: LanguagesProps;
}

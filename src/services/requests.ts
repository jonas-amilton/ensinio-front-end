import { ItemProps, TranslationProps } from '../interfaces/requestInterfaces';
import api from './api';

export const getItems: () => Promise<ItemProps[]> = async () => {
  const items = await api.get('/items').then((response) => response.data);
  return items;
};

export const getTranslations: () => Promise<TranslationProps[]> = async () => {
  const translations = await api
    .get('/translations')
    .then((response) => response.data);
  return translations;
};

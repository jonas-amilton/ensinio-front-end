import React from 'react';

import { LanguagesDropdownProps } from '../../interfaces/languagesDropdownProps';
import LanguagesDropdownItem from '../LanguagesDropdownItem';
import Container from './styles';

const LanguagesDropdown: React.FC<LanguagesDropdownProps> = ({ items }) => (
  <Container>
    {items && items.map((item) => <LanguagesDropdownItem {...item} />)}
  </Container>
);

export default LanguagesDropdown;

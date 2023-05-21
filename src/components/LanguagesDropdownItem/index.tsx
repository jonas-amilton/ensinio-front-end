import React from 'react';

import CheckIcon from '../../assets/icons/check.svg';
import Text from '../Text';
import Container from './styles';

export interface LanguagesDropdownItemProps {
  icon: string;
  title: string;
  checked?: boolean;
  key: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const LanguagesDropdownItem: React.FC<LanguagesDropdownItemProps> = ({
  icon,
  title,
  checked = false,
  onClick,
}) => (
  <Container aria-hidden="true" checked={checked} onClick={onClick}>
    <img alt={title} src={icon} />
    <Text color="textTertiary" fontWeight={400} size="small">
      {title}
    </Text>
    {checked && <img alt={title} src={CheckIcon} />}
  </Container>
);

export default LanguagesDropdownItem;

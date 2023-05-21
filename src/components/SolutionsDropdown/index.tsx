import React from 'react';

import Heading from '../Heading';
import SolutionsDropdownItem, {
  SolutionsDropdownItemProps,
} from '../SolutionsDropdownItem';
import Container from './styles';

interface SolutionsDropdownProps {
  title: string;
  items: SolutionsDropdownItemProps[];
}

const SolutionsDropdown: React.FC<SolutionsDropdownProps> = ({
  title,
  items,
}) => (
  <Container>
    <Heading
      color="linkPrimaryOpacity"
      fontFamily="fontSecondary"
      fontWeight={500}
      letterSpacing="0.12rem"
      level={3}
      size="xsmall"
    >
      {title}
    </Heading>
    <div>
      {items.map((item) => (
        <SolutionsDropdownItem {...item} />
      ))}
    </div>
  </Container>
);

export default SolutionsDropdown;

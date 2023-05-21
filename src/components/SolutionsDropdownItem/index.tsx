import React from 'react';

import Heading from '../Heading';
import Text from '../Text';
import Container from './styles';

export interface SolutionsDropdownItemProps {
  icon: string;
  title: string;
  desciption: string;
  key: string;
}

const SolutionsDropdownItem: React.FC<SolutionsDropdownItemProps> = ({
  icon,
  title,
  desciption,
}) => (
  <Container>
    <img alt={title} src={icon} />
    <div>
      <Heading color="textTertiary" size="xsmall">
        {title}
      </Heading>
      <Text color="textTertiaryOpacity" fontWeight={400} size="xsmall">
        {desciption}
      </Text>
    </div>
  </Container>
);

export default SolutionsDropdownItem;

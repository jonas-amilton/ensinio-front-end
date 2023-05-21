import React from 'react';

import { CardProps } from '../../interfaces/cardPropsInterface';
import Heading from '../Heading';
import Text from '../Text';
import Container from './styles';

const Card: React.FC<CardProps> = ({ icon, title, description }) => (
  <Container>
    <img alt={title} src={icon} />
    <Heading color="textTertiary" fontWeight={600} size="small">
      {title}
    </Heading>
    <Text color="textTertiaryOpacity" fontWeight={400} size="xsmall">
      {description}
    </Text>
  </Container>
);

export default Card;

import React from 'react';

import { Container, Dot } from './styles';

const Loading: React.FC = () => (
  <Container>
    <Dot delay="0s" />
    <Dot delay=".1s" />
    <Dot delay=".2s" />
  </Container>
);

export default Loading;

import React from 'react';

import PersonImage from '../../assets/images/person.png';
import BackgroundIcons from '../../components/BackgroundIcons';
import Container from '../../components/Container';
import HomeLeftContainer from '../../components/HomeLeftContainer';
import HomeMainContainer from '../../components/HomeMainContainer';
import { HeaderContainer, MainContainer } from './styles';

const Home: React.FC = () => (
  <>
    <HeaderContainer>
      <Container>
        <HomeLeftContainer />
        <img alt="person" id="person" src={PersonImage} />
      </Container>
      <BackgroundIcons />
    </HeaderContainer>
    <MainContainer>
      <Container>
        <HomeMainContainer />
      </Container>
    </MainContainer>
  </>
);

export default Home;

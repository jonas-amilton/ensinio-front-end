import React, { useContext } from 'react';

import MultiMedia from '../../assets/icons/multimedia.svg';
import PlayImage from '../../assets/icons/play.svg';
import { TranslationContext } from '../../context/TranslationContext';
import Heading from '../Heading';
import Link from '../Link';
import PrimaryButton from '../PrimaryButton';
import Text from '../Text';
import Container from './styles';

const HomeLeftContainer: React.FC = () => {
  const { t } = useContext(TranslationContext);
  return (
    <Container>
      <Heading
        color="textSecondary"
        fontFamily="fontSecondary"
        fontWeight={500}
        letterSpacing="0.18rem"
        level={3}
        size="xsmall"
      >
        <img alt="MultiMedia" src={MultiMedia} />
        {t('All in one platform')}
      </Heading>
      <Heading fontWeight={500} lineHeight="1.1" size="large">
        {t('Your powerful and profitable online school')}
      </Heading>
      <Text size="small">
        {t(
          'Have your own 100% white label online school with social network, gamification, subscription club, ecommerce and complete ODL system.'
        )}
      </Text>
      <div>
        <PrimaryButton>{t('Start now')}</PrimaryButton>
        <Link href="asd">
          <img alt="Play" src={PlayImage} />
          {t('Watch video')}
        </Link>
      </div>
    </Container>
  );
};

export default HomeLeftContainer;

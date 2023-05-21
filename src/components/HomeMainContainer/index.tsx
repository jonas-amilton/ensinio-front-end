import React, { useContext, useEffect, useState } from 'react';

import ArrowRight from '../../assets/icons/arrow-right.svg';
import IconFolder from '../../assets/icons/icon-folder.svg';
import IconPlay from '../../assets/icons/icon-play.svg';
import IconTrilhas from '../../assets/icons/icon-trilhas.svg';
import Line from '../../assets/icons/line.svg';
import RocketIcon from '../../assets/icons/rocket.svg';
import { TranslationContext } from '../../context/TranslationContext';
import { ItemProps } from '../../interfaces/requestInterfaces';
import { getItems } from '../../services/requests';
import Card from '../Card';
import Heading from '../Heading';
import Link from '../Link';
import Text from '../Text';
import Container from './styles';

const icons = [IconTrilhas, IconPlay, IconFolder];

const HomeMainContainer: React.FC = () => {
  const { t, currentLang } = useContext(TranslationContext);
  const [items, setItems] = useState<ItemProps[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const newItems = await getItems();
      setItems(newItems);
    };

    fetchItems();
  }, []);

  return (
    <Container>
      <div id="header">
        <Heading
          color="linkPrimaryOpacity"
          fontFamily="fontSecondary"
          fontWeight={500}
          letterSpacing="0.12rem"
          level={3}
          size="xsmall"
        >
          <img alt="Line" src={Line} />
          {t('We think about every detail')}
        </Heading>
        <Heading
          color="textTertiaryOpacity"
          fontWeight={400}
          level={4}
          size="xsmall"
        >
          {t('Discover some of our resources')} ⚡
        </Heading>
      </div>

      <Heading color="textTertiary" fontWeight={500} lineHeight="1.2">
        {t('We want the student to feel comfortable while learning')}
      </Heading>

      <div id="cards">
        {items.map((data) => (
          <Card
            description={data.description[currentLang]}
            icon={icons[data.id - 1]}
            key={data.id}
            title={data.title[currentLang]}
          />
        ))}
      </div>

      <hr />

      <div id="footer">
        <Text color="textTertiaryOpacity" fontWeight={500} size="xsmall">
          <img alt="Rocket" src={RocketIcon} />
          {t('See all other resources available to help you')}
        </Text>
        <Link
          color="linkPrimary"
          fontWeight={500}
          href="#vermais"
          size="xsmall"
        >
          {t('See more')}
          <img alt="Arrow Right" src={ArrowRight} />
        </Link>
      </div>
    </Container>
  );
};

export default HomeMainContainer;

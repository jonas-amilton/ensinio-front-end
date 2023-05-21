import React, { useContext, useState } from 'react';

import BrazilIcon from '../../assets/icons/brazil.svg';
import EadIcon from '../../assets/icons/ead.svg';
import AppIcon from '../../assets/icons/icon-app.svg';
import GamificationIcon from '../../assets/icons/icon-gamification.svg';
import SocialIcon from '../../assets/icons/icon-social.svg';
import LogoImage from '../../assets/icons/logo.svg';
import ProfileIcon from '../../assets/icons/profile';
import SpainIcon from '../../assets/icons/spain.svg';
import UsaIcon from '../../assets/icons/usa.svg';
import { TranslationContext } from '../../context/TranslationContext';
import Container from '../Container';
import LanguagesDropdown from '../LanguagesDropdown';
import { LanguagesDropdownItemProps } from '../LanguagesDropdownItem';
import NavItemsList, { NavItemPropsExtended } from '../NavItemsList/index';
import SolutionsDropdown from '../SolutionsDropdown';
import { SolutionsDropdownItemProps } from '../SolutionsDropdownItem';
import NavBarContainer from './styles';

const NavBar: React.FC = () => {
  const { t, currentLang, setCurrentLang } = useContext(TranslationContext);
  const [navbarBgActive, setNavbarBgActive] = useState(false);

  const solutionsItems: SolutionsDropdownItemProps[] = [
    {
      key: '01',
      desciption: t('Lorem ipsum dolor sit amet'),
      title: t('Create an Online School'),
      icon: EadIcon,
    },
    {
      key: '02',
      desciption: t('Lorem ipsum dolor sit amet'),
      title: t('Community and social network'),
      icon: AppIcon,
    },
    {
      key: '03',
      desciption: t('Lorem ipsum dolor sit amet'),
      title: t('Gamification'),
      icon: GamificationIcon,
    },
    {
      key: '04',
      desciption: t('Lorem ipsum dolor sit amet'),
      title: t('Mobile app'),
      icon: SocialIcon,
    },
  ];

  const languagesItems: LanguagesDropdownItemProps[] = [
    {
      icon: BrazilIcon,
      key: '01',
      title: 'PT',
      checked: currentLang === 'pt',
      onClick: () => setCurrentLang('pt'),
    },
    {
      icon: UsaIcon,
      key: '02',
      title: 'EN',
      checked: currentLang === 'en',
      onClick: () => setCurrentLang('en'),
    },
    {
      icon: SpainIcon,
      key: '03',
      title: 'ES',
      checked: currentLang === 'es',
      onClick: () => setCurrentLang('es'),
    },
  ];

  const centerItems: NavItemPropsExtended[] = [
    {
      key: '01',
      text: t('Solutions'),
      dropdownComponent: () => (
        <SolutionsDropdown items={solutionsItems} title={t('Main Solutions')} />
      ),
    },
    { key: '02', text: t('Prices') },
    { key: '03', text: t('Academy') },
    { key: '04', text: t('Blog') },
    { key: '05', text: t('Contact') },
  ];

  const rightItems: NavItemPropsExtended[] = [
    { key: '11', leftIcon: ProfileIcon, text: t('Sing On') },
    { key: '12', text: t('Start now'), type: 'button' },
    {
      key: '13',
      dropdownComponent: () => <LanguagesDropdown items={languagesItems} />,
      text: currentLang.toUpperCase(),
    },
  ];

  function changeBackground() {
    if (window.scrollY >= 15) {
      setNavbarBgActive(true);
    } else {
      setNavbarBgActive(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <NavBarContainer navbarBgActive={navbarBgActive}>
      <Container>
        <NavItemsList
          centerItems={centerItems}
          logo={LogoImage}
          rightItems={rightItems}
        />
      </Container>
    </NavBarContainer>
  );
};

export default NavBar;

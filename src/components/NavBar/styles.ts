import styled from 'styled-components';

import { NavBarProps } from '../../interfaces/stylesInterfaces';

const NavBarContainer = styled('header')<NavBarProps>`
  position: fixed;
  width: 100%;
  height: 85px;
  background: ${(props) =>
    props.navbarBgActive
      ? props.theme.colors.backgroundPrimary
      : 'rgba(0, 0, 0, 0.03)'};
  backdrop-filter: blur(7px);
  --webkit-backdrop-filter: blur(7px);

  z-index: 2000;

  display: flex;
  align-items: center;
  transition: 0.6s;
`;

export default NavBarContainer;

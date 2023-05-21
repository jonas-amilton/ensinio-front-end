import React, { useState } from 'react';

import CloseIcon from '../../assets/icons/close.svg';
import MenuIcon from '../../assets/icons/menu.svg';
import { NavItemProps } from '../../interfaces/navItemPropsInterface';
import NavItem from '../NavItem';
import NavItemsListContainer from './styles';

export interface NavItemPropsExtended extends NavItemProps {
  key: string;
}

interface NavItemsListProps {
  logo: string;
  centerItems: NavItemPropsExtended[];
  rightItems: NavItemPropsExtended[];
}

const NavItemsList: React.FC<NavItemsListProps> = ({
  logo,
  centerItems,
  rightItems,
}) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <NavItemsListContainer toggleMenu={toggleMenu}>
      <img alt="logo" src={logo} />
      <nav>
        <div id="nav-center-items">
          <ul>
            {centerItems.map((props) => (
              <li key={props.key}>
                <NavItem {...props} />
              </li>
            ))}
          </ul>
        </div>
        <div className="splitter">&nbsp;</div>
        <div id="nav-right-items">
          <ul>
            {rightItems.map((props) => (
              <li data-testid={`nav-item-right-${props.key}`} key={props.key}>
                <NavItem {...props} />
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div
        aria-hidden="true"
        id="hamburguer-menu"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <img alt="Menu" src={toggleMenu ? CloseIcon : MenuIcon} />
      </div>
    </NavItemsListContainer>
  );
};

export default NavItemsList;

import React from 'react';

import ArrowDropIcon from '../../assets/icons/arrow-down';
import { NavItemProps } from '../../interfaces/navItemPropsInterface';
import Text from '../Text';
import { NavItemA, NavItemButton } from './styles';

const NavItem: React.FC<NavItemProps> = ({
  text,
  type = 'default',
  to,
  dropdownComponent,
  leftIcon,
}) => {
  function getChildren() {
    if (leftIcon) {
      return (
        <Text id="icon" kind="span" size="xxsmall">
          {leftIcon({})} {text}
        </Text>
      );
    }
    if (dropdownComponent) {
      return (
        <>
          <Text className="dropdown" kind="span" size="xxsmall">
            {text} <ArrowDropIcon />
          </Text>
          <div className="dropdown-content">{dropdownComponent({})}</div>
        </>
      );
    }
    return text;
  }

  if (type === 'default') {
    return (
      <NavItemA href={to}>
        <Text className="dropdown" kind="span" size="xxsmall">
          {getChildren()}
        </Text>
      </NavItemA>
    );
  }
  return <NavItemButton href={to}>{text}</NavItemButton>;
};

export default NavItem;

import styled from 'styled-components';

interface NavItemsListContainerProps {
  toggleMenu: boolean;
}

const NavItemsListContainer = styled('div')<NavItemsListContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > img {
    height: 46px;
  }

  nav {
    display: flex;
    align-items: center;
  }

  #nav-center-items ul li a {
    padding: 0 1.6rem;
  }

  #nav-right-items ul li a {
    padding: 0.6rem 2rem;
  }

  #hamburguer-menu {
    display: none;
    height: 30px;
    width: 30px;
    cursor: pointer;
    transition: 0.6s;
  }
  #hamburguer-menu:hover {
    opacity: 0.7;
  }

  .splitter {
    background-color: ${(props) => props.theme.colors.iconsSecondary};
    width: 1px;
    line-height: 1.5rem;
    margin: 0 1rem;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-align: center;
  }

  ul li {
    display: inline-block;
  }

  @media (max-width: 1320px) {
    #nav-center-items ul li a {
      padding: 0 1.4rem;
    }

    #nav-right-items ul li a {
      padding: 0.6rem 1rem;
    }
  }

  @media (max-width: 1220px) {
    .splitter {
      width: 0;
      margin: 1rem 0;
    }

    > nav {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      position: absolute;
      right: ${(props) => (props.toggleMenu ? '0' : '-1000px')};
      top: 85px;
      height: 100vh;
      width: 250px;
      border-radius: 15px 0 0 0;
      border-left: 1px solid ${(props) => props.theme.colors.primary};
      padding: 20px 10px;
      background-color: ${(props) => props.theme.colors.backgroundSecondary};
      transition: 0.6s;
      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    }

    #nav-center-items ul {
      height: 200px !important;
    }

    #nav-right-items ul {
      height: 140px !important;
    }

    #nav-center-items ul li a {
      padding: 1.6rem 0;
    }

    #nav-right-items ul li a {
      padding: 2rem 0.6rem;
    }

    ul li {
      display: block;
    }

    #hamburguer-menu {
      display: block;
    }
  }

  @media (max-width: 770px) {
    width: 90vw;
    > nav {
      width: 180px;
    }

    #nav-right-items ul li a:hover .dropdown-content {
      margin-top: -140px;
      width: 200px;
    }
  }
`;

export default NavItemsListContainer;

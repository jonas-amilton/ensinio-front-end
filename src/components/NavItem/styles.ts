import styled from 'styled-components';

export const NavItemA = styled('a')`
  padding: 0.2rem 1.2rem;
  color: ${(props) => props.theme.colors.textPrimary};
  transition: 0.2s;
  width: 100%;

  &:hover {
    color: ${(props) => props.theme.colors.textPrimaryHover};
  }

  #icon svg {
    margin-bottom: -2px;
    margin-right: 0.4rem;
    height: 1.3rem;
    width: 1.3rem;
    vertical-align: bottom;
  }

  &:hover #icon svg {
    stroke: ${(props) => props.theme.colors.textPrimaryHover};
  }

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .dropdown svg {
    margin-left: 0.4rem;
    height: 0.55rem;
    transition: 0.2s;
  }

  &:hover .dropdown > svg {
    fill: ${(props) => props.theme.colors.textPrimaryHover};
    transform: rotate(-180deg);
  }

  .dropdown-content {
    position: absolute;
    background-color: ${(props) => props.theme.colors.backgroundPrimary};
    margin-left: 1rem;
    margin-top: -1000px;
    padding-top: 15px;
    visibility: hide;
    opacity: 0;
    transition: opacity 1.2s;
  }

  &:hover .dropdown-content {
    margin-top: 0;
    display: flex;
    opacity: 1;
    transition: opacity 1.2s;
  }

  @media (max-width: 1220px) {
    color: ${(props) => props.theme.colors.textTertiary};
    padding: 1.2rem 0.2rem;
    #icon,
    .dropdown {
      color: ${(props) => props.theme.colors.textTertiary};
    }
    #icon svg {
      stroke: ${(props) => props.theme.colors.textTertiary} !important;
    }
    .dropdown > svg {
      fill: ${(props) => props.theme.colors.textTertiary};
    }
    .dropdown-content {
      width: 270px;
      right: 0px;
      padding: 0;
      padding-top: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const NavItemButton = styled('a')`
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 0.92rem;
  transition: 0.2s;
  border: 1px solid ${(props) => props.theme.colors.buttonBorder};
  border-radius: 1.5rem;
  padding: 0.6rem 1.6rem !important;

  &:hover {
    border-color: ${(props) => props.theme.colors.buttonHoverBorder};
    background-color: ${(props) => props.theme.colors.buttonHoverBackColor};
    color: #130c25;
  }

  @media (max-width: 1220px) {
    color: ${(props) => props.theme.colors.textTertiary};
  }
  @media (max-width: 720px) {
    width: 20px;
  }
`;

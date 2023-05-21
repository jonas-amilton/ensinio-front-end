import styled from 'styled-components';

interface ContainerProps {
  checked: boolean;
}

const Container = styled('div')<ContainerProps>`
  width: 75px;
  display: flex;
  align-items: center;
  padding: 8px 15px;
  cursor: pointer;
  background: ${(props) =>
    props.checked
      ? 'linear-gradient(90deg, #5F41D9 -880.48%, rgba(95, 65, 217, 0) 100%);'
      : 'transparent'};
  transition: 0.2s;

  img:first-child {
    margin-right: 8px;
  }
  img:last-child {
    margin-left: 16px;
  }

  &:hover {
    opacity: 0.6;
  }
`;

export default Container;

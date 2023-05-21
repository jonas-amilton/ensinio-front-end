import styled from 'styled-components';

const Container = styled('div')`
  background-color: ${(props) => props.theme.colors.backgroundSecondary};

  display: flex;
  flex-direction: column;
  cursor: default;
  border-radius: 6px;

`;

export default Container;

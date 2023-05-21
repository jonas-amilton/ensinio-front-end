import styled from 'styled-components';

const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  margin: 1rem 0;

  img {
    margin-right: 1rem;
  }

  > div {
    display: flex;
    flex-direction: column;
  }
`;

export default Container;

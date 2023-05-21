import styled from 'styled-components';

const Container = styled('div')`
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  border: 1px solid ${(props) => props.theme.colors.primary};

  display: flex;
  flex-direction: column;
  cursor: default;
  border-radius: 6px;
  padding: 1rem 0;

  h3 {
    padding: 1rem 0;
    padding-left: 4rem;
    text-transform: uppercase;
    text-align: left;
    width: 100%;
  }
  > div {
    text-align: left;
    width: 620px;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    flex-wrap: wrap;
    h1,
    p {
      width: 100%;
    }
  }
  @media (max-width: 1220px) {
    width: 260px;
    margin: 0 0.3rem;
    padding: 0;
    > div {
      text-align: left;
      width: 240px;
      display: flex;
      justify-content: space-arround;
      padding: 0 0.5rem;
      flex-wrap: no-wrap;
      h1,
      p {
        width: 100%;
      }
    }
    h3 {
      padding-left: 1rem;
    }
  }
`;

export default Container;

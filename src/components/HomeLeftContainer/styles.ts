import styled from 'styled-components';

const Container = styled('div')`
  z-index: 100;

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 450px;
  padding-top: 5rem;
  margin-left: 1.5rem;

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    img {
      margin-bottom: -2px;
      margin-right: 20px;
    }
  }

  h3,
  p {
    margin-bottom: 3rem;
  }
  h1 {
    margin-bottom: 3.2rem;
  }

  div {
    margin: 0;
    height: auto;
    display: flex;
    a:first-child {
      margin-right: 2.5rem;
    }
    a:last-child {
      display: flex;
      align-items: center;
      img {
        margin-right: 0.5rem;
      }
    }
  }

  @media (max-width: 1120px) {
    width: 90%;
    max-width: 600px;
    margin-left: 0;
  }
`;

export default Container;

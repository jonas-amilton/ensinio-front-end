import styled from 'styled-components';

const Container = styled('div')`
  height: 100vh;
  max-height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  margin-top: 1.5rem;

  #header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h3 {
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        margin-right: 15px;
      }
    }
    > h4 {
      text-align: right;
    }
  }

  > h1 {
    margin-top: 2rem;
  }

  #cards {
    width: 100%;
    margin: 4rem 0;
    display: flex;
    justify-content: space-between;
    > div {
      margin-right: 25px;
    }

    div:last-child {
      margin-right: 15px;
    }
  }

  hr {
    border: none;
    border-top: 1px solid #e7e7e9;
  }

  #footer {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        margin-left: 20px;
      }
    }
    p {
      display: flex;
      align-items: center;

      img {
        margin-right: 1.5rem;
      }
    }
  }

  @media (max-width: 1220px) {
    height: 110vh;
    max-height: 1366px;
  }
  @media (max-width: 900px) {
    height: 110vh;
    max-height: 1124px;
  }

  @media (max-width: 760px) {
    height: 120vh;
    min-height: 1024px;
    max-height: 1125px;
    #cards {
      flex-direction: column;
      align-items: center;
      > div {
        width: 200px;
        margin-right: 0;
      }
      div:nth-child(even) {
        align-self: flex-end;
        text-align: right;
      }
      div:nth-child(odd) {
        align-self: flex-start;
      }
      > div {
        margin-bottom: -3rem;
      }
      > div:last-child {
        margin-bottom: 1rem;
      }
    }
  }

  @media (max-width: 520px) {
    height: 90vh;
    min-height: 790px;
    max-height: 825px;
  }
`;

export default Container;

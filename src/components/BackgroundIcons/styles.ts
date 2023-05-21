import styled from 'styled-components';

const Container = styled('div')`
  z-index: 1;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 50px;
  height: 50px;
  width: 95vw;

  img {
    position: absolute;
    height: 105.5px;
    width: 105.5px;
  }

  img:nth-child(1) {
    top: -22px;
    left: 5%;
  }

  img:nth-child(2) {
    top: -90px;
    left: 25%;
    transform: rotate(-14.5deg);
    height: 70.5px;
    width: 70.5px;
  }

  img:nth-child(3) {
    top: -22px;
    right: 0;
  }

  img:nth-child(4) {
    top: 13px;
    left: 45%;
    height: 88.5px;
    width: 88.5px;
  }

  img:nth-child(5) {
    top: -35px;
    right: 20%;
    height: 70.5px;
    width: 70.5px;
  }

  @media (max-width: 1120px) {
    img:nth-child(4) {
      top: -25px;
    }
  }
  @media (max-width: 720px) {
    img:nth-child(1),
    img:nth-child(3) {
      top: -45px;
    }
  }
  @media (max-width: 520px) {
    img:nth-child(2) {
      display: none;
    }
    img:nth-child(1) {
      top: -28px;
    }
    img:nth-child(3) {
      top: -40px;
    }
    img:nth-child(4) {
      top: 15px;
      left: 40%;
    }
  }
`;

export default Container;

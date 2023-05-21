import styled, { keyframes } from 'styled-components';

const BounceAnimation = keyframes`
0% { margin-bottom: 0; }
50% { margin-bottom: 25px }
100% { margin-bottom: 0 }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 100000;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface DotProps {
  delay: string | number;
}

export const Dot = styled.div<DotProps>`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin: 0 5px;

  /* Animation */
  animation: ${BounceAnimation} 0.8s linear infinite;
  animation-delay: ${(props) => props.delay};
`;

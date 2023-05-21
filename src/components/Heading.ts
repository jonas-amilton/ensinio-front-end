import styled, { css } from 'styled-components';

import { HeadingProps } from '../interfaces/stylesInterfaces';
import defaultTheme from '../styles/themes';

const Heading = styled('h1').attrs<HeadingProps>(({ level = 1 }) => ({
  as: `h${level}`,
}))<HeadingProps>`
  ${({
    fontFamily = 'fontPrimary',
    color = 'textPrimary',
    size = 'normal',
    fontWeight = 700,
    lineHeight = 1.5,
    letterSpacing = 0,
  }) => css`
    font-size: ${defaultTheme.sizes[size]};
    color: ${defaultTheme.colors[color]};
    font-weight: ${fontWeight};
    font-family: ${defaultTheme.fonts[fontFamily]};
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing};
  `}
`;

export default Heading;

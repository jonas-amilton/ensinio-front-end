import styled, { css } from 'styled-components';

import { TextProps } from '../interfaces/stylesInterfaces';
import defaultTheme from '../styles/themes';

const Text = styled('p').attrs<TextProps>(({ kind = 'p' }) => ({
  as: `${kind}`,
}))<TextProps>`
  ${({
    color = 'textPrimary',
    fontFamily = 'fontPrimary',
    size = 'normal',
    fontWeight = 300,
    lineHeight = 1.5,
  }) => css`
    font-size: ${defaultTheme.sizes[size]};
    color: ${defaultTheme.colors[color]};
    font-weight: ${fontWeight};
    font-family: ${defaultTheme.fonts[fontFamily]};
    line-height: ${lineHeight};
  `}
`;

export default Text;

import styled, { css } from 'styled-components';

import { LinkProps } from '../interfaces/stylesInterfaces';
import defaultTheme from '../styles/themes';

const Link = styled('a')<LinkProps>`
  ${({
    color = 'textPrimary',
    fontFamily = 'fontPrimary',
    size = 'small',
    fontWeight = 500,
    lineHeight = 1.5,
  }) => css`
    font-size: ${defaultTheme.sizes[size]};
    color: ${defaultTheme.colors[color]};
    font-weight: ${fontWeight};
    font-family: ${defaultTheme.fonts[fontFamily]};
    line-height: ${lineHeight};

    &:hover {
      color: ${(props) => props.theme.colors.textPrimaryHover};
    }
  `}
`;

export default Link;

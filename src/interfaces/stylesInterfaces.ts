import { ThemeProps } from './themeInterfaces';

export interface HeadingProps {
  color?: keyof ThemeProps['colors'];
  size?: keyof ThemeProps['sizes'];
  fontFamily?: keyof ThemeProps['fonts'];
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  lineHeight?: string | number;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  letterSpacing?: string | number;
}

export interface TextProps {
  color?: keyof ThemeProps['colors'];
  size?: keyof ThemeProps['sizes'];
  fontFamily?: keyof ThemeProps['fonts'];
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  lineHeight?: string | number;
  letterSpacing?: string | number;
  kind?: 'p' | 'span' | '';
}

export interface ButtonProps {
  size?: keyof ThemeProps['sizes'];
  fontFamily?: keyof ThemeProps['fonts'];
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  lineHeight?: string | number;
  letterSpacing?: string | number;
}

export interface LinkProps {
  color?: keyof ThemeProps['colors'];
  size?: keyof ThemeProps['sizes'];
  fontFamily?: keyof ThemeProps['fonts'];
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  lineHeight?: string | number;
  letterSpacing?: string | number;
}

export interface NavBarProps {
  navbarBgActive: boolean;
}

export interface ThemeProps {
  colors: {
    primary?: string;
    secondary?: string;
    textPrimary?: string;
    textPrimaryHover?: string;
    textSecondary?: string;
    textTertiary?: string;
    textTertiaryOpacity?: string;
    linkPrimary?: string;
    linkPrimaryOpacity?: string;
    backgroundPrimary?: string;
    backgroundSecondary?: string;
    headerBackground?: string;
    iconsSecondary?: string;
    buttonBorder?: string;
    buttonHoverBorder?: string;
    buttonHoverBackColor?: string;
  };
  sizes: {
    xxsmall: string | number;
    xsmall: string | number;
    small: string | number;
    normal: string | number;
    large: string | number;
    xlarge: string | number;
    xxlarge: string | number;
  };
  fonts: {
    fontPrimary: string;
    fontSecondary: string;
  };
}

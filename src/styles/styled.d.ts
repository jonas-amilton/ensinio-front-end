import 'styled-components';
import ThemeProps from '../interfaces/themeInterfaces';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeProps {}
}

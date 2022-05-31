import 'styled-components';
import themes from '.';

declare module 'styled-components' {
  type ThemeType = typeof themes;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme extends ThemeType {}
}

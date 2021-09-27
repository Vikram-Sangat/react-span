import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import defaultTheme from './theme';

interface Props {
  children: React.ReactNode;
  theme?:Record<string,any>;
}

export const Theme: React.FC<Props> = ({ children,theme }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
Theme.defaultProps={
  theme:defaultTheme
};
export default Theme;

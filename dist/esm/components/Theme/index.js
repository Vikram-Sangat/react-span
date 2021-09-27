import _pt from "prop-types";
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './theme';
export const Theme = ({
  children,
  theme
}) => /*#__PURE__*/React.createElement(ThemeProvider, {
  theme: theme
}, children);
Theme.propTypes = {
  children: _pt.node.isRequired
};
Theme.defaultProps = {
  theme: defaultTheme
};
export default Theme;
//# sourceMappingURL=index.js.map
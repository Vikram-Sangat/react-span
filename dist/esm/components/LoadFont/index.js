import _pt from "prop-types";
import * as React from 'react';
import webfont from 'webfontloader';
export const LoadFont = ({
  config,
  children
}) => {
  React.useEffect(() => {
    webfont.load(config);
  }, [config]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
};
LoadFont.propTypes = {
  children: _pt.node.isRequired
};
export default LoadFont;
//# sourceMappingURL=index.js.map
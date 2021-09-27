import * as React from 'react';

import webfont from 'webfontloader';

interface Props {
  children: React.ReactNode;
  config: webfont.Config;
}
export const LoadFont: React.FC<Props> = ({ config, children }) => {
  React.useEffect(() => {
    webfont.load(config);
  }, [config]);
  return <>{children}</>;
};

export default LoadFont;

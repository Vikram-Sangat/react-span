import * as React from 'react';

import { Config } from 'webfontloader';

interface Props {
  children: React.ReactNode;
  config: Config;
}
export const LoadFont: React.FC<Props> = ({ config, children }) => {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const webfont = require('webfontloader');
      webfont.load(config);
    }
  }, [config]);
  return <>{children}</>;
};

export default LoadFont;

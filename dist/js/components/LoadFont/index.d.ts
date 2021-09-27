import * as React from 'react';
import webfont from 'webfontloader';
interface Props {
    children: React.ReactNode;
    config: webfont.Config;
}
export declare const LoadFont: React.FC<Props>;
export default LoadFont;

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { LoadFont } from '.';
import { Span } from '../Span';
storiesOf('LoadFont', module).add('Default', () => /*#__PURE__*/React.createElement(LoadFont, {
  config: {
    google: {
      families: ['Lato']
    }
  }
}, /*#__PURE__*/React.createElement(Span, {
  fontFamily: "Lato",
  fontSize: 30
}, "I am text")));
//# sourceMappingURL=LoadFont.stories.js.map
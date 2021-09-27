import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import { LoadFont } from '.';
import { Span } from '../Span';

storiesOf('LoadFont', module).add('Default', () => (
  <LoadFont config={{ google: { families: ['Lato'] } }}>
    <Span fontFamily='Lato' fontSize={30}>I am text</Span>
  </LoadFont>
));

import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import { Span } from '.';

storiesOf('Span', module).add('Default', () => <Span  fontSize={3} >I am text</Span>);

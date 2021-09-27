import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import { Theme } from '.';
import { Span } from '../Span';

storiesOf('Theme', module).add('Default', () => <Theme><Span color='navy'>I am text</Span></Theme>);

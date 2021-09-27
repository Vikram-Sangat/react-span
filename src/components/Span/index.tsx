import * as React from 'react';

import styled from 'styled-components';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  zIndex,
  ZIndexProps,
} from 'styled-system';

interface Props
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    TypographyProps,
    ShadowProps,
    ZIndexProps {}
export const Span = styled('span')<Props>(
  compose(
    background,
    border,
    color,
    zIndex,
    flexbox,
    layout,
    position,
    shadow,
    space,
    typography
  )
);
export default Span;

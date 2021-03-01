import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import {
  border,
  BorderProps,
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
  flexbox,
  FlexboxProps,
} from 'styled-system'

import { color, ColorProps } from '../../styles/colorOverride'

export interface ListContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    SpaceProps,
    ShadowProps,
    ColorProps,
    LayoutProps,
    TypographyProps,
    PositionProps,
    BorderProps,
    FlexboxProps {
  ref?: React.MutableRefObject<HTMLDivElement>
}

export const ListContainer = styled.ul<ListContainerProps>`
  display: flex;
  flex-direction: column;
  list-style: none;

  margin: 0;
  padding: 0;

  ${space};
  ${shadow};
  ${color};
  ${typography};
  ${layout};
  ${border};
  ${position};
  ${flexbox};
`

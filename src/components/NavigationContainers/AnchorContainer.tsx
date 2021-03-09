import React, { HTMLAttributes } from 'react'
import {
  BorderProps,
  border,
  FlexboxProps,
  layout,
  LayoutProps,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  position,
  flexbox,
} from 'styled-system'
import { ColorProps } from '../../styles/colorOverride'
import styled from 'styled-components'

export interface AnchorContainerProps
  extends HTMLAttributes<HTMLAnchorElement>,
    SpaceProps,
    ShadowProps,
    ColorProps,
    LayoutProps,
    TypographyProps,
    PositionProps,
    BorderProps,
    FlexboxProps {
  href: string
}

const StyledAnchor = styled.a<AnchorContainerProps>`
  ${space};
  ${shadow};
  ${typography};
  ${layout};
  ${border};
  ${position};
  ${flexbox};
`

export const AnchorContainer: React.FC<AnchorContainerProps> = (props: AnchorContainerProps) => {
  return <StyledAnchor {...props}>{props.children}</StyledAnchor>
}

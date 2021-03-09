import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
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

export interface LinkContainerProps
  extends React.RefAttributes<HTMLAnchorElement>,
    LinkProps,
    SpaceProps,
    ShadowProps,
    ColorProps,
    LayoutProps,
    TypographyProps,
    PositionProps,
    BorderProps,
    FlexboxProps {}

const StyledLink = styled(Link)<LinkContainerProps>`
  ${space};
  ${shadow};
  ${typography};
  ${layout};
  ${border};
  ${position};
  ${flexbox};
`

export const LinkContainer: React.FC<LinkContainerProps> = (props: LinkContainerProps) => {
  return <StyledLink {...props}>{props.children}</StyledLink>
}

/* eslint-disable indent */
import { darken, lighten } from 'polished'
import { HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'
import { space, SpaceProps, typography, TypographyProps } from 'styled-system'
import { color, ColorProps } from '../../styles/colorOverride'

export interface CustomTypographyProps
  extends HTMLAttributes<HTMLFontElement>,
    SpaceProps,
    ColorProps,
    TypographyProps {}

export interface LinkProps extends HTMLAttributes<HTMLAnchorElement>, SpaceProps, ColorProps, TypographyProps {
  noDecoration?: boolean
  reverse?: boolean
}

export const Title = styled.h1<CustomTypographyProps>`
  margin: 0;
  padding: 0;
  font-size: ${theme.fontSizes[4]};
  font-weight: ${theme.fontWeights[4]};
  letter-spacing: ${theme.letterSpacings.mega};

  ${space};
  ${color};
  ${typography};
`

export const Paragraph = styled.p<CustomTypographyProps>`
  margin: 0;
  padding: 0;
  font-size: ${theme.fontSizes[3]};
  font-weight: ${theme.fontWeights[3]};
  letter-spacing: ${theme.letterSpacings.normal};
  line-height: ${theme.lineHeights[4]};

  ${space};
  ${color};
  ${typography};
`

export const AnchorLink = styled.a<LinkProps>`
    margin: 0;
    padding: 0;
    font-size: ${(props) => props.theme.fontSizes[2]};
    font-weight: ${(props) => props.theme.fontWeights[5]};
    letter-spacing: ${(props) => props.theme.letterSpacings.normal};
    color: ${(props) => props.theme.colors.black};

    &:hover {
        color: ${(props) => lighten(0.15, props.theme.colors.black)};
    }

    ${(props) =>
      props.noDecoration &&
      css`
        text-decoration: none;
      `}

    ${(props) =>
      props.reverse &&
      css`
        color: ${(props) => props.theme.colors.white};

        &:hover {
          color: ${(props) => darken(0.15, props.theme.colors.white)};
        }
      `}

    ${space};
    ${typography};
`

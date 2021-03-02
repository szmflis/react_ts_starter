/* eslint-disable indent */
import { darken, lighten } from 'polished'
import { HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'
import { space, SpaceProps, typography, TypographyProps } from 'styled-system'
import { color, ColorProps } from '../../styles/colorOverride'
import { ListElement } from '../ListElement/ListElement'

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
  font-size: ${theme.fontSizes[5]};
  font-weight: ${theme.fontWeights[4]};
  letter-spacing: ${theme.letterSpacings.mega};

  ${space};
  ${color};
  ${typography};
`

export const SectionTitle = styled.h2<CustomTypographyProps>`
  margin: 0;
  padding: 0;
  font-size: ${theme.fontSizes[4]};
  font-weight: ${theme.fontWeights[4]};
  letter-spacing: ${theme.letterSpacings.extra};

  ${space};
  ${color};
  ${typography};
`

export const Subtitle = styled.h3<CustomTypographyProps>`
  margin: 0;
  padding: 0;
  font-size: ${theme.fontSizes[3]};
  font-weight: ${theme.fontWeights[4]};
  letter-spacing: ${theme.letterSpacings.normal};

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

export const Caption = styled.p<CustomTypographyProps>`
  margin: 0;
  padding: 0;
  font-size: ${theme.fontSizes[2]};
  font-weight: ${theme.fontWeights[3]};
  letter-spacing: ${theme.letterSpacings.tight};

  ${space};
  ${color};
  ${typography};
`

export const HighlightedNumber = styled.p<CustomTypographyProps>`
  margin: 0;
  padding: 0;
  font-size: ${theme.fontSizes[5]};
  font-weight: ${theme.fontWeights[8]};
  letter-spacing: ${theme.letterSpacings.mega};

  ${space};
  ${color};
  ${typography};
`

export const Status = styled.p<CustomTypographyProps>`
  margin: 0;
  padding: 0;
  font-size: ${theme.fontSizes[5]};
  font-weight: ${theme.fontWeights[3]};
  letter-spacing: ${theme.letterSpacings.normal};

  ${space};
  ${color};
  ${typography};
`

export const RouterLink = styled(Link)<LinkProps>`
    margin: 0;
    padding: 0;
    font-size: ${theme.fontSizes[2]};
    font-weight: ${theme.fontWeights[5]};
    letter-spacing: ${theme.letterSpacings.normal};
    color: ${theme.colors.black};

    &:hover {
        color: ${lighten(0.15, theme.colors.black)};
    }

    ${(props) =>
      props.noDecoration &&
      css`
        text-decoration: none;
      `}

    ${(props) =>
      props.reverse &&
      css`
        color: ${theme.colors.white};

        &:hover {
          color: ${darken(0.15, theme.colors.white)};
        }
      `}

    ${space};
    ${typography};
`

export const AnchorLink = styled.a<LinkProps>`
    margin: 0;
    padding: 0;
    font-size: ${theme.fontSizes[2]};
    font-weight: ${theme.fontWeights[5]};
    letter-spacing: ${theme.letterSpacings.normal};
    color: ${theme.colors.black};

    &:hover {
        color: ${theme.colors.primaryDarkest};
    }

    ${(props) =>
      props.noDecoration &&
      css`
        text-decoration: none;
      `}

    ${(props) =>
      props.reverse &&
      css`
        color: ${theme.colors.white};

        &:hover {
          color: ${darken(0.15, theme.colors.white)};
        }
      `}

    ${ListElement}:hover & {
      color: ${theme.colors.primaryDarkest};
    }
    
    
    ${space};
    ${typography};
`

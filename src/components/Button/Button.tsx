/* eslint-disable indent */
import styled, { css } from 'styled-components'
import {
  border,
  BorderProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  variant,
} from 'styled-system'
import { theme } from '../../styles/theme'

import buttons from '../../styles/variants/buttons'
import { Icon } from '../Icon/Icon'
import { Caption } from '../Typography/Typography'

import { RawButton, RawButtonProps } from './RawButton'

export interface ButtonProps
  extends RawButtonProps,
    SpaceProps,
    ShadowProps,
    LayoutProps,
    TypographyProps,
    PositionProps,
    BorderProps {
  variant?: keyof typeof buttons
  small?: boolean
  reverse?: boolean
}

const buttonStyle = variant({ key: 'buttons' })

/* TODO add icon animation on button hover */

export const Button = styled(RawButton)<ButtonProps>`
    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
    justify-content: center;
    align-items: center;
    align-content: center;
    
    cursor: pointer;
    border: none;
    outline: none;
    text-transform: uppercase;

    height: 38px;
    padding: 0 3rem;

    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.2s;
    border-radius: 35px;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: translateY(-1px);
    }

    ${Caption} {
      font-family: inherit;
      font-size: ${theme.fontSizes[2]};
      font-weight: ${theme.fontWeights[4]};
      letter-spacing: 2.5px;
    }

    ${Icon} {
      ${({ reverse }) =>
        reverse
          ? css`
              margin-right: ${theme.space[3]}px;
            `
          : css`
              margin-left: ${theme.space[3]}px;
            `}
      font-size: ${theme.fontSizes[4]};
    }

    ${({ small }) =>
      small &&
      css`
        height: 34px;
        padding: 0 2rem;
        ${Caption} {
          font-size: ${theme.fontSizes[1]};
          font-weight: ${theme.fontWeights[8]};
        }
      `}

    ${(props) =>
      props.children
        ? css``
        : css`
            padding: 0 1rem;
            ${Icon} {
              margin: 0;
            }
          `}

    ${border};
    ${layout};
    ${position};
    ${space};
    ${typography};
    ${buttonStyle};
    
    ${(props) => props.disabled && buttons.disabled};
`

export const NavigationButton = styled(Button)`
  flex-direction: column-reverse;
  height: auto;
  width: auto;
  padding: 1rem;
  border-radius: 8px;

  background: inherit;
  box-shadow: none;

  &:hover {
    box-shadow: none;
    background-color: ${theme.colors.grey};
    transform: none;
  }

  &:active {
    background-color: ${theme.colors.greyDark};
  }

  ${Icon} {
    margin: 0 0 0.5rem 0; // resetting margin applied in Button Component.
    ${({ children }) =>
      !children &&
      css`
        margin: 0;
        font-size: ${theme.fontSizes[5]};
      `}
  }
`

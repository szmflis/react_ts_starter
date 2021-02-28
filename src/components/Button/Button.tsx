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
}

const buttonStyle = variant({ key: 'buttons' })

/* TODO add icon animation on button hover */

export const Button = styled(RawButton)<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    
    cursor: pointer;
    border: none;
    outline: none;
    text-transform: uppercase;

    height: 38px;
    padding: 0 3rem;
    margin: 5px;

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
      margin-left: ${theme.space[3]}px;
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

    ${border}
    ${layout}
    ${position}
    ${space}
    ${buttonStyle}
    
    ${(props) => props.disabled && buttons.disabled}
`

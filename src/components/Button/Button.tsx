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
}

const buttonStyle = variant({ key: 'buttons' })

export const Button = styled(RawButton)<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    
    cursor: pointer;
    border: none;
    outline: none;
    text-transform: uppercase;

    font-family: inherit;
    font-size: ${theme.fontSizes[2]};
    font-weight: ${theme.fontWeights[4]};
    letter-spacing: 2.5px;

    height: 38px;
    padding: 0 3rem;
    margin: 5px;


    /*height: 34px;
    padding: 0 2rem;
      also font sizes 1 and weights 8 is a small one
    */

    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.2s;
    border-radius: 35px;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    }

    ${Icon} {
      font-size: ${theme.fontSizes[4]};
      margin-left: ${theme.space[3]}px;
    }

    ${border}
    ${layout}
    ${position}
    ${space}
    ${buttonStyle}
    
    ${(props) => props.disabled && buttons.disabled}
`

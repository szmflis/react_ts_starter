/* eslint-disable indent */
import React from 'react'
import { Button, ButtonProps } from './Button'
import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'
import { Icon } from '../Icon/Icon'

export interface AnchorButtonProps extends ButtonProps {
  href: string
  label?: string
}

const StyledAnchorButton = styled(Button)<AnchorButtonProps>`
  flex-direction: column-reverse;
  height: auto;
  width: auto;
  padding: 1rem;
  border-radius: 8px;

  background-color: transparent;
  box-shadow: none;

  &:hover {
    background-color: ${theme.colors.grey};
    box-shadow: none;
    transform: none;
  }

  ${Icon} {
    margin: 0 0 0.5rem 0; // resetting margin applied in Button Component.
    ${({ label }) =>
      !label &&
      css`
        margin: 0;
        font-size: ${theme.fontSizes[5]};
      `}
  }
`

export const AnchorButton: React.FC<AnchorButtonProps> = (props: AnchorButtonProps) => {
  return (
    <StyledAnchorButton {...props} onClick={() => window.open(props.href)} label={props.label}>
      {props.label}
    </StyledAnchorButton>
  )
}

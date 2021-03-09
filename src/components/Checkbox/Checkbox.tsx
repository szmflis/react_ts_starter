import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { theme } from '../../styles/theme'

import { RawCheckbox } from './RawCheckbox'
import { InputHTMLAttributes } from 'react'

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement>, SpaceProps {
  reverse?: boolean
}

export const Checkbox = styled(RawCheckbox)<CheckboxProps>`
  display: flex;
  align-items: center;
  position: relative;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  user-select: none;

  &,
  & > * {
    color: ${({ checked }) => (checked ? theme.colors.primaryDark : theme.fontColorBase)};
  }

  &:hover,
  &:hover > * {
    color: ${({ disabled }) => (disabled ? theme.colors.disabled : theme.colors.primaryDark)};
  }

  &,
  & > * {
    color: ${(props) => props.disabled && theme.colors.disabled};
  }

  input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    display: none;
  }

  ${space};
`

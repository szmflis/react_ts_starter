import styled, { css } from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { theme } from '../../styles/theme'

import { RawInput, RawInputProps } from './RawInput'

export interface InputProps extends RawInputProps, SpaceProps {
  valid?: boolean
  touched?: boolean
}

export const Input = styled(RawInput)<InputProps>`
  display: flex;
  flex-direction: column;

  label {
    margin-top: ${theme.space[3]}px;
  }

  input {
    border: none;
    padding: 1.3rem 0.5rem;
    width: 100%;
    color: ${theme.colors.black};
    font-size: ${theme.fontSizes[3]};
    border-bottom: 1px solid ${theme.colors.primaryLight};

    &::placeholder {
      opacity: 0.7;
    }

    &:focus {
      outline: none;
      background-color: ${theme.colors.greyLight};
    }

    border-color: ${({ valid }) => (valid ? theme.colors.success : theme.colors.danger)};
    border-color: ${({ touched }) => !touched && theme.colors.primaryDark};

    ${({ disabled }) =>
      disabled &&
      css`
        background-color: ${theme.colors.greyLight};
        border-color: ${theme.colors.greyDarkest};
        cursor: default;
      `}
  }
  ${space};
`

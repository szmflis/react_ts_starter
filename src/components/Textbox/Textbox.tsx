import styled, { css } from 'styled-components'
import { space, SpaceProps, layout, LayoutProps } from 'styled-system'
import { RawTextbox, RawTextboxProps } from './RawTextbox'
import { theme } from '../../styles/theme'

export interface TextareaProps extends RawTextboxProps, SpaceProps, LayoutProps {
  valid?: boolean
  touched?: boolean
}

const touchedInvalid = css`
  border: 1px solid ${theme.colors.warning};
`

const touchedValid = css`
  border: 1px solid ${theme.colors.success};
`

const untouched = css`
  border: 1px solid ${theme.colors.grey};
`

export const Textarea = styled(RawTextbox)<TextareaProps>`
  display: flex;
  flex-direction: column;

  textarea {
    border-radius: ${theme.radii[1]}px;
    width: 100%;
    height: ${theme.sizes[6]}px;
    padding: ${theme.space[3]}px;
    resize: none;

    &:focus {
      outline: none;
      border: 1px solid ${theme.colors.primaryLight};
    }

    ${({ valid }) => (valid ? touchedValid : touchedInvalid)};
    ${({ touched }) => !touched && untouched};

    ${space};
    ${layout};
  }

  label {
    font-size: ${theme.fontSizes[1]};
    margin-bottom: ${`${theme.space[2]}px`};
  }
`

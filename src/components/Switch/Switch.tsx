import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { theme } from '../../styles/theme'
import { RawSwitch, RawSwitchProps } from './RawSwitch'
import { TypographyProps, typography } from 'styled-system'

export interface SwitchProps extends RawSwitchProps, SpaceProps, TypographyProps {}

export const Switch = styled(RawSwitch)<SwitchProps>`
  // Container for Switch element (moving dot within greyed background)
  // It only aligns the Switch with its label
  display: flex;
  align-items: center;

  div {
    // Container for moving dot element
    display: flex;
    position: relative;
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    user-select: none;

    width: 60px;
    height: 26px;
    padding: 0.4rem;

    margin-right: ${({ label }) => (label ? '0.8rem' : '')};
    background-color: ${({ checked }) => (checked ? theme.colors.primaryLight : theme.colors.greyDarkest)};

    border-radius: 25px;

    transition: 0.3s background-color;
    span {
      // Moving dot element
      height: 18px;
      width: 18px;

      border-radius: 50%;
      background-color: ${theme.colors.white};
      transform: ${({ checked }) => (checked ? 'translateX(34px)' : '')};
      transition: 0.3s transform;
      input {
        position: absolute;
        opacity: 0;
        height: 0;
        width: 0;
        display: none;
      }
    }
  }

  label {
    color: ${({ checked }) => (checked ? theme.colors.primaryDarkest : theme.colors.black)};
    transition: 0.3s color;
  }

  input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    display: none;
  }

  ${space};
  ${typography};
`

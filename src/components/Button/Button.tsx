import styled from 'styled-components'
import { variant } from 'styled-system'
import { theme } from '../../styles/theme'
import buttons from '../../styles/variants/buttons'
import { space, SpaceProps } from 'styled-system'

const buttonVariant = variant({ key: 'buttons' })

interface ButtonProps extends SpaceProps {
  width?: string
  mar?: string
  variant?: keyof typeof buttons
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  text-decoration: none;
  outline: none;
  border: none;
  color: ${theme.colors.white};
  font-family: inherit;

  /* Styling */
  margin: ${({ mar }) => mar};
  font-size: ${theme.fontSize.big};
  font-weight: ${theme.fontWeight.semibold};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: ${({ width }) => width || '180px'};
  height: 47px;
  box-shadow: ${theme.effects.boxShadowPrimary};
  border-radius: 3rem;
  transition: all 0.3s;

  ${buttonVariant}
  ${space}
`

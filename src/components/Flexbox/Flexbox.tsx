import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { space, SpaceProps, flexbox, FlexboxProps } from 'styled-system'

interface FlexProps extends SpaceProps, FlexboxProps {
  width?: string
  debug?: boolean
}

export const Flexbox = styled.div<FlexProps>`
  display: flex;
  border: ${({ debug }) => (debug ? '1px solid red' : '')};
  ${space};
  ${flexbox};
`

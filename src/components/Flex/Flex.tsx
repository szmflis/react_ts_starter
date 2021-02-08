import styled, { css } from 'styled-components'
import { flexbox, FlexboxProps } from 'styled-system'

import { Box, BoxProps } from '../Box/Box'

export interface FlexProps extends FlexboxProps, BoxProps {
  centerContent?: boolean
}

export const Flex = styled(Box)<FlexProps>`
  display: flex;

  ${(props: FlexProps) =>
    props.centerContent &&
    css`
      justify-content: center;
      align-items: center;
    `}

  ${flexbox};
`

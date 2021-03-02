/* eslint-disable indent */
import { RawListElement, RawListElementProps } from './RawListElement'
import { SpaceProps } from 'styled-system'
import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'
import { Icon } from '../Icon/Icon'

export interface ListElementProps extends RawListElementProps, SpaceProps {
  reverse?: boolean
}

export const ListElement = styled(RawListElement)<ListElementProps>`
  display: flex;
  flex-direction: ${({ reverse }) => reverse && 'row-reverse'};
  justify-content: ${({ reverse }) => (reverse ? 'flex-end' : 'space-between')};

  cursor: pointer;
  padding: 1rem;

  background-color: ${theme.colors.white};

  &:hover {
    background-color: ${theme.colors.greyLight};
    color: ${theme.colors.primaryDarkest};
  }

  transition: all 0.1s;

  ${Icon} {
    ${({ reverse }) =>
      reverse
        ? css`
            margin-right: 1rem;
          `
        : css`
            margin-left: 1rem;
          `}
  }
`

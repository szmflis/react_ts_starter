/* eslint-disable indent */
import { RawListElement } from './RawListElement'
import { layout, LayoutProps, space, SpaceProps, typography, TypographyProps } from 'styled-system'
import styled, { css } from 'styled-components'
import { LiHTMLAttributes } from 'react'
import { theme } from '../../styles/theme'
import { Icon } from '../Icon/Icon'

export interface ListElementProps extends LiHTMLAttributes<HTMLLIElement>, SpaceProps, LayoutProps, TypographyProps {}
export interface ListElementButtonProps extends ListElementProps {
  reverse?: boolean
}

export const ListElement = styled(RawListElement)<ListElementProps>`
  padding: 5px 0;
  ${space};
  ${layout};
  ${typography};
`

export const ListElementButton = styled(ListElement)<ListElementButtonProps>`
  display: flex;
  align-items: center;

  flex-direction: ${({ reverse }) => reverse && 'row-reverse'};
  justify-content: ${({ reverse }) => (reverse ? 'flex-end' : 'space-between')};

  cursor: pointer;
  padding: 1rem;
  white-space: nowrap;

  background-color: ${theme.colors.white};
  font-weight: 600;

  &:hover {
    background-color: ${theme.colors.greyLight};
    color: ${theme.colors.primaryDarkest};
  }

  ${Icon} {
    font-size: ${theme.fontSizes[4]};

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

/* eslint-disable indent */
import styled from 'styled-components'
import { space, SpaceProps, typography, TypographyProps, variant } from 'styled-system'

import { color, ColorProps } from '../../styles/colorOverride'
import tags from '../../styles/variants/tags'
import { RawTag, RawTagProps } from './RawTag'

export interface TagProps extends RawTagProps, SpaceProps, TypographyProps, ColorProps {
  variant?: keyof typeof tags
}

const tagStyle = variant({ key: 'tags' })

export const Tag = styled(RawTag)<TagProps>`
  display: inline-flex;

  height: fit-content;
  width: fit-content;

  cursor: pointer;
  padding: ${(props) => `${props.theme.space[2]}px ${props.theme.space[4]}px`};
  border-radius: ${(props) => props.theme.radii[3]}px;
  background-color: ${(props) => props.theme.colors.primary};

  & > * {
    font-weight: ${(props) => props.theme.fontWeights[5]};

    ${typography};
    ${color};

    background-color: transparent;
  }

  ${tagStyle}
  ${space};
  ${color};
`

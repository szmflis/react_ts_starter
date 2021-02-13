import styled from 'styled-components'
import { space, SpaceProps, typography, TypographyProps, variant } from 'styled-system'
import { RawIcon, RawIconProps } from './RawIcon'
import { color, ColorProps } from '../../styles/colorOverride'
import icons from '../../styles/variants/icons'

export interface IconProps extends RawIconProps, SpaceProps, TypographyProps, ColorProps {
  transTime?: number
  variant?: keyof typeof icons
}

/* variants are used for on hover effects  */
const iconVariant = variant({ key: 'icons' })

/* 
  Actual styling happens on Flex component returned from RawIcon. 
  That's becouse svg icons can be modified as text, so applying textSize
  to that Flex component actually sizes the icon aswell.
  It also makes centering alot easier.
*/
export const Icon = styled(RawIcon)<IconProps>`
  ${space};
  ${color};
  ${typography};
  ${iconVariant};

  transition: ${({ transTime }) => (transTime ? transTime : 0.4)}s;
`

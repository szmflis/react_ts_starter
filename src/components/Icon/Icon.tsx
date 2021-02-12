import styled from 'styled-components'
import { space, SpaceProps, typography, TypographyProps } from 'styled-system'
import { RawIcon, RawIconProps } from './RawIcon'
import { color, ColorProps } from '../../styles/colorOverride'
import { theme } from '../../styles/theme'

export interface IconProps extends RawIconProps, SpaceProps, TypographyProps, ColorProps {
  fill?: string
}

export const Icon = styled(RawIcon)<IconProps>`
  font-size: ${theme.fontSizes[5]};

  ${space};
  ${color};
  ${typography};

  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`

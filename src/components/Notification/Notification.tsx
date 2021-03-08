import styled from 'styled-components'
import { border, BorderProps, space, SpaceProps, typography, TypographyProps, variant } from 'styled-system'
import { ColorProps } from '../../styles/colorOverride'

import notificationVariants from '../../styles/variants/notifications'

import { RawNotification } from './RawNotification'
import { theme } from '../../styles/theme'
import { Caption } from '../Typography/Typography'

export interface NotificationProps extends SpaceProps, TypographyProps, BorderProps, ColorProps {
  variant?: keyof typeof notificationVariants
}

const notificationVariant = variant({ key: 'notifications' })

export const Notification = styled(RawNotification)<NotificationProps>`
  display: flex;

  animation: 0.2s ${theme.keyframes.fadeInTranslateY};
  transition: 0.2s all;

  ${Caption} {
    font-weight: ${theme.fontWeights[5]};
    ${typography};
  }

  ${border};
  ${space};
  ${notificationVariant};
`

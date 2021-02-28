import styled from 'styled-components'
import { border, BorderProps, space, SpaceProps, typography, TypographyProps, variant } from 'styled-system'
import { color, ColorProps } from '../../styles/colorOverride'
import { theme } from '../../styles/theme'
import notificationVariants from '../../styles/variants/notifications'
import { Caption } from '../Typography/Typography'
import { RawNotification, RawNotificationProps } from './RawNotification'

export interface NotificationProps extends RawNotificationProps, SpaceProps, TypographyProps, BorderProps, ColorProps {
  visible: boolean
  variant?: keyof typeof notificationVariants
}

const notificationVariant = variant({ key: 'notifications' })

export const Notification = styled(RawNotification)<NotificationProps>`
  display: flex;

  display: ${({ visible }) => !visible && 'none'};
  transition: all 0.3s;

  ${Caption} {
    font-size: ${theme.fontSizes[3]};
    font-weight: ${theme.fontWeights[4]};

    ${typography};
    ${color}
    ${notificationVariant};
  }

  ${border};
  ${space};
`

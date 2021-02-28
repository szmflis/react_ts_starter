import React, { HTMLAttributes } from 'react'
import { Icon } from '../Icon/Icon'
import { IconType } from '../Icon/RawIcon'
import { Caption } from '../Typography/Typography'

export interface RawNotificationProps extends HTMLAttributes<HTMLDivElement> {
  text: string | null
  icon?: IconType
  color?: string
}

export const RawNotification: React.FC<RawNotificationProps> = (props: RawNotificationProps) => {
  const { className, text, icon, color } = props

  return (
    <div className={className}>
      <Caption textColor={color}>{text}</Caption>
      {icon && <Icon type={icon} fontSize="inherit" />}
    </div>
  )
}

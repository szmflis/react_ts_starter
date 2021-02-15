import React, { ButtonHTMLAttributes } from 'react'
import icons from '../../styles/variants/icons'
import { Icon } from '../Icon/Icon'
import { IconType } from '../Icon/RawIcon'
import { Caption } from '../Typography/Typography'

export interface RawButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconType
  iconVariant?: keyof typeof icons
}

export const RawButton: React.FC<RawButtonProps> = (props: RawButtonProps) => {
  const { onClick, className, children, icon, disabled, type, title } = props
  const onClickHandler = !disabled ? onClick : undefined

  return (
    <button className={className} onClick={onClickHandler} disabled={disabled} type={type} title={title}>
      <Caption>{children}</Caption>
      {icon && <Icon type={icon} fontSize="inherit" />}
    </button>
  )
}

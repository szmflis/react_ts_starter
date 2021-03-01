import React, { LiHTMLAttributes } from 'react'
import { IconType } from '../Icon/RawIcon'
import { Icon } from '../Icon/Icon'

export interface RawListElementProps extends LiHTMLAttributes<HTMLLIElement> {
  icon?: IconType
}

export const RawListElement: React.FC<RawListElementProps> = (props: RawListElementProps) => {
  return (
    <li className={props.className} onClick={props.onClick}>
      {props.children}
      {props.icon && <Icon type={props.icon} fontSize={3} transTime={0.1} />}
    </li>
  )
}

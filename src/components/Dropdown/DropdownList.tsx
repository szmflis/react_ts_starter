import React, { HTMLAttributes } from 'react'
import { IconType } from 'react-icons'
import { Button } from '../Button/Button'
import { Dropdown, DropdownProps } from './Dropdown'

export const DropdownList: React.FC<DropdownProps> = (props: DropdownProps) => {
  return <Dropdown {...props}>{props.children}</Dropdown>
}

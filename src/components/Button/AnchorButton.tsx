/* eslint-disable indent */
import React from 'react'
import { ButtonProps, NavigationButton } from './Button'

export interface AnchorButtonProps extends ButtonProps {
  href: string
}

export const AnchorButton: React.FC<AnchorButtonProps> = (props: AnchorButtonProps) => {
  return (
    <a href={props.href}>
      <NavigationButton variant="transparent" icon={props.icon} label={!!props.children}>
        {props.children}
      </NavigationButton>
    </a>
  )
}

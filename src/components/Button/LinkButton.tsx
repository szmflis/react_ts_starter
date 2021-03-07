import React from 'react'
import { ButtonProps, NavigationButton } from './Button'
import { Link } from 'react-router-dom'

export interface LinkButtonProps extends ButtonProps {
  to: string
}

export const LinkButton: React.FC<LinkButtonProps> = (props: LinkButtonProps) => {
  return (
    <Link to={props.to}>
      <NavigationButton variant="transparent" icon={props.icon} label={!!props.children}>
        {props.children}
      </NavigationButton>
    </Link>
  )
}

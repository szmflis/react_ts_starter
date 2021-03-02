import React from 'react'
import { ListElement, ListElementProps } from './ListElement'
import { AnchorLink } from '../Typography/Typography'

export interface ListElementLinkWrapperProps extends ListElementProps {
  href: string
  noDecoration?: boolean
  anchorReverse?: boolean
}

export const ListElementLinkWrapper: React.FC<ListElementLinkWrapperProps> = (props: ListElementLinkWrapperProps) => {
  return (
    <ListElement {...props} onClick={() => window.open(props.href)}>
      <AnchorLink noDecoration={props.noDecoration} reverse={props.anchorReverse}>
        {props.children}
      </AnchorLink>
    </ListElement>
  )
}

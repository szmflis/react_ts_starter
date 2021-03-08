import React, { HTMLAttributes } from 'react'
import { Caption } from '../Typography/Typography'

export const RawNotification: React.FC<HTMLAttributes<HTMLDivElement>> = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children } = props

  return (
    <div className={className}>
      <Caption>{children}</Caption>
    </div>
  )
}

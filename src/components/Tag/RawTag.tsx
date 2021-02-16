import React, { HTMLAttributes } from 'react'

import { Caption } from '../Typography/Typography'
import { Icon } from '../Icon/Icon'
import { Flex } from '../Flex/Flex'
import tags from '../../styles/variants/tags'

export interface RawTagProps extends HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void
  variant?: keyof typeof tags
}

export const RawTag: React.FC<RawTagProps> = (props: RawTagProps) => {
  const { onRemove, className, children } = props

  return (
    <Flex className={className} alignItems="center" onClick={onRemove}>
      <Caption>{children}</Caption>
      {onRemove && <Icon type="close" fontSize="inherit" ml={3} />}
    </Flex>
  )
}

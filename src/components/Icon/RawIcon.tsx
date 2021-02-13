import React, { HTMLAttributes } from 'react'
import { Flex } from '../Flex/Flex'
import { icons } from './icons'

/* getting type of each icon for code suggestions */
export type IconType = keyof typeof icons

export interface RawIconProps extends HTMLAttributes<HTMLDivElement> {
  type: IconType
}

export const RawIcon: React.FC<RawIconProps> = (props: RawIconProps) => {
  return (
    <Flex className={props.className} centerContent>
      {/* props.type will take corresponding icon from icons array */}
      {icons[props.type]}
    </Flex>
  )
}

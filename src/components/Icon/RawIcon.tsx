import React, { HTMLAttributes } from 'react'
import { Box } from '../Box/Box'
import { icons } from './icons'

export type IconType = keyof typeof icons

export interface RawIconProps extends HTMLAttributes<HTMLDivElement> {
  type: IconType
}

export const RawIcon: React.FC<RawIconProps> = (props: RawIconProps) => {
  return <Box className={props.className}>{icons[props.type]}</Box>
}

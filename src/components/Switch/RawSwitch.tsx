import React, { HTMLAttributes } from 'react'
import { Box } from '../Box/Box'
import { Flex } from '../Flex/Flex'

export interface RawSwitchProps extends HTMLAttributes<HTMLDivElement> {
  label?: string
}

export const RawSwitch: React.FC<RawSwitchProps> = (props: RawSwitchProps) => {
  const label = props.label ? <label>{props.label}</label> : null

  return <div className={props.className}></div>
}

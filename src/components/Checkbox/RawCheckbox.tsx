import React, { InputHTMLAttributes } from 'react'

import { Icon } from '../Icon/Icon'
import { IconType } from '../Icon/RawIcon'

export const RawCheckbox: React.FC<InputHTMLAttributes<HTMLInputElement>> = (
  props: InputHTMLAttributes<HTMLInputElement>
) => {
  const iconName: IconType = props.checked ? 'checkedSquare' : 'square'

  return (
    <label className={props.className}>
      <Icon mr={4} type={iconName} fontSize={4} />
      <input
        type="checkbox"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        checked={props.checked}
        disabled={props.disabled}
      />
      {props.children}
    </label>
  )
}

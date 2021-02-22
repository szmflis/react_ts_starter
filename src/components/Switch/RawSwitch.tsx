import React, { InputHTMLAttributes } from 'react'

export interface RawSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const RawSwitch: React.FC<RawSwitchProps> = (props: RawSwitchProps) => {
  const input = (
    <input
      type="checkbox"
      checked={props.checked}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      disabled={props.disabled}
    />
  )

  const label = props.label ? <label>{props.label}</label> : null

  return (
    <label className={props.className}>
      {/* Input element */}
      {input}

      {/* Visual element of switch */}
      <div>
        <span></span>
      </div>

      {/* Label for switch */}
      {label}
    </label>
  )
}

// searchbar with suggestions

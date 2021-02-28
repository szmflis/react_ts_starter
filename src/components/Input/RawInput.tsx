import React, { InputHTMLAttributes } from 'react'

export interface RawInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  value?: string
}

export const RawInput: React.FC<RawInputProps> = (props: RawInputProps) => {
  const type = props.type || 'text'

  const input = (
    <input
      type={type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
      placeholder={props.placeholder}
      autoComplete={props.autoComplete}
      autoFocus={props.autoFocus}
      disabled={props.disabled}
      onBlur={props.onBlur}
      title={props.title}
      required={props.required}
      pattern={props.pattern}
      maxLength={props.maxLength}
      minLength={props.minLength}
    />
  )

  const label = props.label ? <label>{props.label}</label> : null

  return (
    <div className={props.className}>
      {label}
      {input}
    </div>
  )
}

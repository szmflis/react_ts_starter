import React, { TextareaHTMLAttributes } from 'react'

export interface RawTextboxProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string
  label?: string
}

export const RawTextbox: React.FC<RawTextboxProps> = (props: RawTextboxProps) => {
  const { onChange, className, disabled, placeholder, label } = props

  const textbox = <textarea placeholder={placeholder} onChange={onChange} disabled={disabled}></textarea>

  const textboxLabel = label ? <label>{label}</label> : null
  return (
    <div className={className}>
      {textboxLabel}
      {textbox}
    </div>
  )
}

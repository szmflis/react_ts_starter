import React, { InputHTMLAttributes } from 'react'

export interface RawSliderProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const RawSlider: React.FC<RawSliderProps> = (props: RawSliderProps) => {
  const { value, min, max, onChange, className, label, step } = props

  return (
    <div className={className}>
      {label && <label>{label}</label>}
      <input type="range" min={min} max={max} value={value} onChange={onChange} step={step} />
    </div>
  )
}

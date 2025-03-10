import React from 'react'
import { RadioButtonProps } from './RadioButton.types'

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  disabled = false,
}) => {
  return (
    <label className={`radio-button ${disabled ? 'disabled' : ''}`}>
      <input
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        style={{ cursor: disabled ? 'not-allowed' : 'default' }}
      />
      <span
        className="radio-label"
        style={{
          color: disabled ? 'gray' : 'black',
          cursor: disabled ? 'not-allowed' : 'default',
        }}
      >
        {label}
      </span>
    </label>
  )
}

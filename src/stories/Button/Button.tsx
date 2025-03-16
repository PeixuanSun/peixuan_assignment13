import React from 'react'
import styled from 'styled-components'
import {    ButtonProps } from './Button.types'

/** Styled button component */
const StyledButton = styled.button<ButtonProps>`
  display: inline-block;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border: 0;
  border-radius: ${({ prounded }) => (rounded ? '50px' : '5px')};
  font-weight: 700;
  line-height: 1;
  font-family: 'Arial', sans-serif;
  padding: ${({ size }) =>
    size === 'small'
      ? '8px 14px'
      : size === 'large'
        ? '12px 24px'
        : '10px 18px'};
  font-size: ${({ size }) =>
    size === 'small' ? '12px' : size === 'large' ? '16px' : '14px'};
  background-color: ${({ primary, disabled }) =>
    disabled ? '#ccc' : primary ? '#007bff' : 'transparent'};
  color: ${({ primary, disabled }) =>
    disabled ? '#999' : primary ? 'white' : '#333'};
  pointer-events: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};

  &[disabled] {
    opacity: 0.5;
  }

  /** ✅ 添加响应式适配 */
  @media (max-width: 768px) {
    font-size: 14px; /* 在小屏幕上自动变小 */
    padding: 8px 12px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 10px; /* 更小屏幕上，按钮更紧凑 */
  }
`

/** Button component for user interaction */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  label,
  disabled = false,
  rounded = false, // 👈 Add rounded with a default value
  ...props
}) => {
  return (
    <StyledButton
      primary={primary}
      size={size}
      disabled={disabled}
      rounded={rounded}
      {...props}
    >
      {label}
    </StyledButton>
  )
}

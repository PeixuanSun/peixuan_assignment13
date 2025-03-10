import React from 'react'
import styled from 'styled-components'
import { TextProps } from './Text.types'

const StyledText = styled.p<{
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}>`
  font-size: ${({ size }) =>
    size === 'small' ? '12px' : size === 'large' ? '18px' : '14px'};
  color: ${({ disabled }) => (disabled ? '#aaa' : '#333')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  user-select: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  transition: all 0.2s ease-in-out;
`

export const Text: React.FC<TextProps> = ({ content, size, disabled }) => {
  return (
    <StyledText size={size} disabled={disabled}>
      {content}
    </StyledText>
  )
}

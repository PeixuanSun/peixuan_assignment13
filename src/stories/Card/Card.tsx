import React from 'react'
import styled from 'styled-components'
import { CardProps } from './Card.types'

const StyledCard = styled.div<CardProps>`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : 'none')};
`

export const Card: React.FC<CardProps> = ({ children, disabled }) => {
  return <StyledCard disabled={disabled}>{children}</StyledCard>
}

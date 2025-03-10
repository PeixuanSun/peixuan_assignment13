import React from 'react'
import styled from 'styled-components'
import { LabelProps } from './Label.types'

/** Styled label component */
const StyledLabel = styled.label<{ disabled?: boolean }>`
  font-size: 14px;
  color: ${({ disabled }) => (disabled ? '#999' : '#333')};
  margin-bottom: 4px;
  display: block;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  user-select: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  transition: all 0.2s ease;

  &:hover {
    color: ${({ disabled }) => !disabled && '#666'};
  }
`

const RequiredIndicator = styled.span`
  color: ${({ disabled }: { disabled?: boolean }) =>
    disabled ? '#999' : 'red'};
  margin-left: 4px;
`

/** Label component for displaying text */
export const Label: React.FC<LabelProps> = ({
  text,
  htmlFor,
  required = false,
  disabled = false,
}) => {
  return (
    <StyledLabel htmlFor={htmlFor} disabled={disabled}>
      {text}
      {required && <RequiredIndicator disabled={disabled}>*</RequiredIndicator>}
    </StyledLabel>
  )
}

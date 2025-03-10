import React from 'react'
import styled from 'styled-components'
import { DropdownProps } from './Dropdown.types'

const StyledDropdown = styled.select<{ disabled?: boolean }>`
  padding: 8px;
  border: 1px solid ${(props) => (props.disabled ? '#e0e0e0' : '#ccc')};
  background-color: ${(props) => (props.disabled ? '#f5f5f5' : 'white')};
  color: ${(props) => (props.disabled ? '#999' : 'inherit')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    border-color: ${(props) => (props.disabled ? '#e0e0e0' : '#999')};
  }
`

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  onChange,
  disabled = false,
}) => {
  return (
    <StyledDropdown onChange={onChange} disabled={disabled}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledDropdown>
  )
}

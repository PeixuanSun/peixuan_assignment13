import React from 'react'
import { TableHeaderProps } from './TableHeader.types'
import styled from 'styled-components'

const StyledTableHeader = styled.th<{ disabled?: boolean }>`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  background-color: ${(props) => (props.disabled ? '#f5f5f5' : '#ffffff')};
  color: ${(props) => (props.disabled ? '#999999' : '#333333')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  user-select: ${(props) => (props.disabled ? 'none' : 'auto')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#f5f5f5' : '#fafafa')};
  }
`

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  disabled = false,
  ...props
}) => {
  return (
    <StyledTableHeader disabled={disabled} {...props}>
      {children}
    </StyledTableHeader>
  )
}

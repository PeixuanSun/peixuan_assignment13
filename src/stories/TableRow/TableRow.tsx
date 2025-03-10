import React from 'react'
import styled from 'styled-components'
import { TableRowProps } from './TableRow.types'

const StyledTableRow = styled.tr<{ disabled?: boolean }>`
  &:nth-child(even) {
    background-color: ${(props) => (props.disabled ? '#f0f0f0' : '#f9f9f9')};
  }

  ${(props) =>
    props.disabled &&
    `
    opacity: 0.6;
    cursor: not-allowed;
    color: #666;
    border: 1px solid #ccc;
    
    td {
      pointer-events: none;
    }
  `}
`

export const TableRow: React.FC<TableRowProps> = ({
  children,
  disabled = false,
}) => {
  return <StyledTableRow disabled={disabled}>{children}</StyledTableRow>
}

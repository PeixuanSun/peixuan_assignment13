import React from 'react'
import { TableCellProps } from './TableCell.types'
import styled from 'styled-components'

const StyledTableCell = styled.td<{ disabled?: boolean }>`
  padding: 8px 16px;
  border: 1px solid #e0e0e0;

  ${({ disabled }) =>
    disabled &&
    `
    background-color: #f5f5f5;
    color: #999;
    cursor: not-allowed;
    user-select: none;
  `}
`

export const TableCell: React.FC<TableCellProps> = ({
  children,
  disabled = false,
}) => {
  return <StyledTableCell disabled={disabled}>{children}</StyledTableCell>
}

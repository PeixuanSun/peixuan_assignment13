import React from 'react'
import styled from 'styled-components'
import { TableProps } from './Table.types'

const StyledTable = styled.table<{ disabled?: boolean }>`
  border-collapse: collapse;
  width: 100%;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f4f4f4;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`

const Header = styled.thead``
const Row = styled.tr``
const Cell = styled.td``

export const Table: React.FC<TableProps> & {
  Header: typeof Header
  Row: typeof Row
  Cell: typeof Cell
} = ({ children, disabled = false, ...props }) => {
  return (
    <StyledTable disabled={disabled} {...props}>
      {children}
    </StyledTable>
  )
}

Table.Header = Header
Table.Row = Row
Table.Cell = Cell

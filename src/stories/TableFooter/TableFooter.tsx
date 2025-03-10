import React from 'react'
import styled from 'styled-components'
import { TableFooterProps } from './TableFooter.types'

const StyledTableFooter = styled.tfoot<{ disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? '#e9e9e9' : '#f2f2f2')};
  color: ${(props) => (props.disabled ? '#999999' : 'inherit')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'auto')};

  td {
    opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  }
`

export const TableFooter: React.FC<TableFooterProps> = ({
  children,
  disabled = false,
}) => {
  return <StyledTableFooter disabled={disabled}>{children}</StyledTableFooter>
}

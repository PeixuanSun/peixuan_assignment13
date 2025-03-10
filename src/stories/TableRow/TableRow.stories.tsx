import React from 'react'
import { TableRow } from './TableRow.tsx'

export default {
  title: 'Example/TableRow',
  component: TableRow,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    children: (
      <>
        <td>Row Cell 1</td>
        <td>Row Cell 2</td>
      </>
    ),
    disabled: false,
  },
}

export const Disabled = {
  args: {
    children: (
      <>
        <td>Row Cell 1</td>
        <td>Row Cell 2</td>
      </>
    ),
    disabled: true,
  },
}

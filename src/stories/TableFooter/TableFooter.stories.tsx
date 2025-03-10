import React from 'react'
import { TableFooter } from './TableFooter.tsx'

export default {
  title: 'Example/TableFooter',
  component: TableFooter,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    children: (
      <tr>
        <td>Footer Cell 1</td>
        <td>Footer Cell 2</td>
      </tr>
    ),
    disabled: false,
  },
}

export const Disabled = {
  args: {
    children: (
      <tr>
        <td>Footer Cell 1</td>
        <td>Footer Cell 2</td>
      </tr>
    ),
    disabled: true,
  },
}

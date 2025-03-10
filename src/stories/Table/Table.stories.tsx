import React from 'react'
import { Table } from './Table.tsx'

export default {
  title: 'Example/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {},
}

export const Default = {
  args: {
    disabled: false,
    children: (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Cell>Header 1</Table.Cell>
            <Table.Cell>Header 2</Table.Cell>
          </Table.Row>
        </Table.Header>
        <tbody>
          <Table.Row>
            <Table.Cell>Row 1 Cell 1</Table.Cell>
            <Table.Cell>Row 1 Cell 2</Table.Cell>
          </Table.Row>
        </tbody>
      </Table>
    ),
  },
}

export const Disabled = {
  args: {
    disabled: true,
    children: (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Cell>Header 1</Table.Cell>
            <Table.Cell>Header 2</Table.Cell>
          </Table.Row>
        </Table.Header>
        <tbody>
          <Table.Row>
            <Table.Cell>Row 1 Cell 1</Table.Cell>
            <Table.Cell>Row 1 Cell 2</Table.Cell>
          </Table.Row>
        </tbody>
      </Table>
    ),
  },
}

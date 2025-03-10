import { TableCell } from './TableCell.tsx'

export default {
  title: 'Example/TableCell',
  component: TableCell,
  tags: ['autodocs'],
  parameters: {},
}

export const Default = {
  args: {
    children: 'Cell Content',
  },
}

export const Disabled = {
  args: {
    children: 'Disabled Cell Content',
    disabled: true,
  },
}

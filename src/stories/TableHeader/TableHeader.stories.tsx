import { TableHeader } from './TableHeader.tsx'

export default {
  title: 'Example/TableHeader',
  component: TableHeader,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    children: 'Header',
    disabled: false,
  },
}

export const Disabled = {
  args: {
    children: 'Disabled Header',
    disabled: true,
  },
}

import { Dropdown } from './Dropdown.tsx'

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
    onChange: () => {},
    disabled: false,
  },
}

export const Disabled = {
  args: {
    ...Default.args,
    disabled: true,
  },
}

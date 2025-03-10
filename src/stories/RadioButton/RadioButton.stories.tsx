import { RadioButton } from './RadioButton.tsx'

export default {
  title: 'Example/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    label: 'Option 1',
    name: 'example',
    value: '1',
    disabled: false,
  },
}

export const Disabled = {
  args: {
    label: 'Disabled Option',
    name: 'example',
    value: '2',
    disabled: true,
  },
}

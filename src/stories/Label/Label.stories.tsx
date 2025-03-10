import { Label } from './Label.tsx'

export default {
  title: 'Example/Label',
  component: Label,
  tags: ['autodocs'],

  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
}

export const Default = {
  args: {
    text: 'Default Label',
    htmlFor: 'input-id',
  },
}

export const Required = {
  args: {
    text: 'Required Label',
    htmlFor: 'input-id',
    required: true,
  },
}

export const Disabled = {
  args: {
    text: 'Disabled Label',
    htmlFor: 'input-id',
    disabled: true,
  },
}

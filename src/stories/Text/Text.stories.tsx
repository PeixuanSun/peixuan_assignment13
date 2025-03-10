import { Text } from './Text.tsx'

export default {
  title: 'Example/Text',
  component: Text,
  tags: ['autodocs'],

  argTypes: {
    content: { control: 'text' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
  },
}

export const Default = {
  args: {
    content: 'This is a text component.',
  },
}

export const Large = {
  args: {
    content: 'This is a large text component.',
    size: 'large',
  },
}

export const Disabled = {
  args: {
    content: 'This is a disabled text component.',
    disabled: true,
  },
}

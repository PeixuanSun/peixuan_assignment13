import { Card } from './Card.tsx'

export default {
  title: 'Example/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {},
}

export const Default = {
  args: {
    children: 'This is a card component.',
  },
}

export const Disabled = {
  args: {
    children: 'This is a disabled card component.',
    disabled: true,
  },
}

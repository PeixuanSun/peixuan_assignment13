import { Image } from './Image.tsx'

export default {
  title: 'Example/Image',
  component: Image,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    src: 'https://cdn.pixabay.com/photo/2023/05/31/11/14/smoothie-8031132_640.jpg',
    alt: 'Placeholder Image',
    disabled: false,
  },
}

export const Disabled = {
  args: {
    ...Default.args,
    disabled: true,
  },
}

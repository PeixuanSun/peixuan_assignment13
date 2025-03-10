import { HeroImage } from './HeroImage.tsx'

export default {
  title: 'Example/HeroImage',
  component: HeroImage,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    src: 'https://cdn.pixabay.com/photo/2023/05/31/11/14/smoothie-8031132_640.jpg',
    alt: 'Hero Image',
  },
}

export const Disabled = {
  args: {
    src: 'https://cdn.pixabay.com/photo/2023/05/31/11/14/smoothie-8031132_640.jpg',
    alt: 'Disabled Hero Image',
    disabled: true,
  },
}

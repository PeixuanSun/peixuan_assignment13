import React from 'react'
import { render } from '@testing-library/react'
import { Image } from './Image'

describe('Image Component', () => {
  it('should be visible', () => {
    const { getByAltText } = render(
      <Image src="https://via.placeholder.com/150" alt="Test Image" />
    )
    expect(getByAltText('Test Image')).toBeVisible()
  })

  it('should have disabled styles when disabled prop is true', () => {
    const { getByAltText } = render(
      <Image src="https://via.placeholder.com/150" alt="Test Image" disabled />
    )
    const image = getByAltText('Test Image')
    expect(image).toHaveStyle('cursor: not-allowed')
    expect(image).toHaveStyle('opacity: 0.5')
  })
})

import React from 'react'
import { render } from '@testing-library/react'
import { HeroImage } from './HeroImage'

describe('HeroImage Component', () => {
  it('should be visible', () => {
    const { getByAltText } = render(
      <HeroImage
        src="https://via.placeholder.com/800x400"
        alt="Test Hero Image"
      />
    )
    expect(getByAltText('Test Hero Image')).toBeVisible()
  })
})

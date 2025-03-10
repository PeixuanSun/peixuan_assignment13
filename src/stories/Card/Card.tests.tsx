import React from 'react'
import { render } from '@testing-library/react'
import { Card } from './Card'

describe('Card Component', () => {
  it('should be visible', () => {
    const { getByText } = render(<Card>This is a card.</Card>)
    expect(getByText('This is a card.')).toBeVisible()
  })
})

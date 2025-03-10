import React from 'react'
import { render } from '@testing-library/react'
import { Text } from './Text'

describe('Text Component', () => {
  it('should be visible', () => {
    const { getByText } = render(<Text content="Test Text" />)
    expect(getByText('Test Text')).toBeVisible()
  })

  it('should change color when disabled', () => {
    const { getByText } = render(<Text content="Disabled Text" disabled />)
    const textElement = getByText('Disabled Text')
    expect(textElement).toHaveStyle('color: #aaa')
  })
})

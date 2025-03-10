import React from 'react'
import { render } from '@testing-library/react'
import { TableHeader } from './TableHeader'

describe('TableHeader Component', () => {
  it('should be visible', () => {
    const { getByText } = render(<TableHeader>Test Header</TableHeader>)
    expect(getByText('Test Header')).toBeVisible()
  })
})

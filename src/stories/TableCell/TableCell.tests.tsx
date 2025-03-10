import React from 'react'
import { render } from '@testing-library/react'
import { TableCell } from './TableCell'

describe('TableCell Component', () => {
  it('should be visible', () => {
    const { getByText } = render(<TableCell>Test Cell</TableCell>)
    expect(getByText('Test Cell')).toBeVisible()
  })
})

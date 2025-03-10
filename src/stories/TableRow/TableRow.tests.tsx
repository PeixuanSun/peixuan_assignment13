import React from 'react'
import { render } from '@testing-library/react'
import { TableRow } from './TableRow'

describe('TableRow Component', () => {
  it('should be visible', () => {
    const { getByText } = render(
      <TableRow>
        <td>Test Row</td>
      </TableRow>
    )
    expect(getByText('Test Row')).toBeVisible()
  })

  it('should have disabled styles when disabled prop is true', () => {
    const { container } = render(
      <TableRow disabled>
        <td>Disabled Row</td>
      </TableRow>
    )
    const row = container.firstChild
    expect(row).toHaveStyle('cursor: not-allowed')
    expect(row).toHaveStyle('opacity: 0.6')
  })
})

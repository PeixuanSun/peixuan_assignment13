import React from 'react'
import { render } from '@testing-library/react'
import { TableFooter } from './TableFooter'
import '@testing-library/jest-dom'

describe('TableFooter Component', () => {
  it('should be visible', () => {
    const { getByText } = render(
      <TableFooter>
        <tr>
          <td>Test Footer</td>
        </tr>
      </TableFooter>
    )
    expect(getByText('Test Footer')).toBeVisible()
  })

  it('should apply disabled styles when disabled prop is true', () => {
    const { container } = render(
      <TableFooter disabled>
        <tr>
          <td>Test Footer</td>
        </tr>
      </TableFooter>
    )
    const tfoot = container.querySelector('tfoot')
    expect(tfoot).toHaveStyle({
      backgroundColor: '#e9e9e9',
      cursor: 'not-allowed',
    })
  })
})

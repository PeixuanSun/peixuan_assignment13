import React from 'react'
import { render } from '@testing-library/react'
import { Table } from './Table'

describe('Table Component', () => {
  it('should be visible', () => {
    const { getByText } = render(
      <Table>
        <thead>
          <tr>
            <th>Header</th>
          </tr>
        </thead>
      </Table>
    )
    expect(getByText('Header')).toBeVisible()
  })
})

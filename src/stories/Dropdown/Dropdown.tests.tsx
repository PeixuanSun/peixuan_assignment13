import React from 'react'
import { render } from '@testing-library/react'
import { Dropdown } from './Dropdown'

describe('Dropdown Component', () => {
  const defaultProps = {
    options: [{ label: 'Option 1', value: '1' }],
    onChange: () => {},
  }

  it('should be visible', () => {
    const { getByRole } = render(<Dropdown {...defaultProps} />)
    expect(getByRole('combobox')).toBeVisible()
  })

  it('should be disabled when disabled prop is true', () => {
    const { getByRole } = render(<Dropdown {...defaultProps} disabled={true} />)
    expect(getByRole('combobox')).toBeDisabled()
  })
})

import React from 'react'
import { render } from '@testing-library/react'
import { RadioButton } from './RadioButton'

describe('RadioButton Component', () => {
  it('should be visible', () => {
    const { getByLabelText } = render(
      <RadioButton label="Test Radio" name="test" value="1" />
    )
    expect(getByLabelText('Test Radio')).toBeVisible()
  })
})

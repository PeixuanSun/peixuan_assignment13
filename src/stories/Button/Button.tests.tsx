import React from 'react'
import { render } from '@testing-library/react'
import { Button } from './Button'

describe('Button Component', () => {
  it('should be visible', () => {
    const { getByText } = render(<Button label="Test Button" />)
    expect(getByText('Test Button')).toBeVisible()
  })

  it('should change color when disabled', () => {
    const { getByText } = render(<Button label="Disabled Button" disabled />)
    const buttonElement = getByText('Disabled Button')
    expect(buttonElement).toHaveStyle('background-color: #ccc')
    expect(buttonElement).toHaveStyle('color: #999')
  })

  it('should have different styles on small screens', () => {
    global.innerWidth = 480 // 模拟小屏幕
    const { getByText } = render(<Button label="Small Screen Button" />)
    const buttonElement = getByText('Small Screen Button')
    expect(buttonElement).toHaveStyle('font-size: 12px')
    expect(buttonElement).toHaveStyle('padding: 6px 10px')
  })
})

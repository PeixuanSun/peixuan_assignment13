import React from 'react'
import { render } from '@testing-library/react'
import { Label } from './Label.tsx'

describe('Label Component', () => {
  it('should render with default state', () => {
    const { getByText } = render(<Label text="Test Label" htmlFor="input-id" />)
    const label = getByText('Test Label')
    expect(label).toBeVisible()
    expect(label).toHaveStyle('color: #333')
    expect(label).toHaveStyle('cursor: default')
  })

  it('should render in disabled state', () => {
    const { getByText } = render(
      <Label text="Disabled Label" htmlFor="input-id" disabled />
    )
    const label = getByText('Disabled Label')
    expect(label).toHaveStyle('color: #999')
    expect(label).toHaveStyle('cursor: not-allowed')
    expect(label).toHaveStyle('opacity: 0.6')
  })

  it('should render required indicator', () => {
    const { container } = render(<Label text="Required Label" required />)
    const requiredIndicator = container.querySelector('span')
    expect(requiredIndicator).toHaveTextContent('*')
    expect(requiredIndicator).toHaveStyle('color: red')
  })

  it('should render disabled required indicator', () => {
    const { container } = render(
      <Label text="Required Label" required disabled />
    )
    const requiredIndicator = container.querySelector('span')
    expect(requiredIndicator).toHaveStyle('color: #999')
  })
})

import React from 'react'
import styled from 'styled-components'
import { ImageProps } from './Image.types'

const StyledImage = styled.img<{ disabled?: boolean }>`
  max-width: 100%;
  height: auto;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  filter: ${(props) => (props.disabled ? 'grayscale(100%)' : 'none')};
  transition: all 0.3s ease;
`

export const Image: React.FC<ImageProps> = ({ src, alt, disabled = false }) => {
  return <StyledImage src={src} alt={alt} disabled={disabled} />
}

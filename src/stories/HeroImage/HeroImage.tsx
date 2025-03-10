import React from 'react'
import styled from 'styled-components'
import { HeroImageProps } from './HeroImage.types'

const StyledHeroImage = styled.img<{ disabled?: boolean }>`
  width: 100%;
  height: auto;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

export const HeroImage: React.FC<HeroImageProps> = ({ src, alt, disabled }) => {
  return <StyledHeroImage src={src} alt={alt} disabled={disabled} />
}

import React from 'react'
import styled from 'styled-components'

interface DefaultSectionProps {
  children: React.ReactNode
}

const DefaultSection = ({ children }: DefaultSectionProps) => {
  return <DefaultSectionContainer>{children}</DefaultSectionContainer>
}

const DefaultSectionContainer = styled('div')`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.default.lightGray};
`

export default DefaultSection

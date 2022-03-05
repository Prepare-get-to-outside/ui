import React from 'react'
import styled from 'styled-components'

interface CardSectionProps {
  children?: React.ReactNode
}

export const CardSection = ({ children }: CardSectionProps) => {
  return (
    <BoxContainer>
      <BoxContent>{children}</BoxContent>
    </BoxContainer>
  )
}

const BoxContainer = styled('div')`
  width: 100%;
  height: 100%;
  max-width: 700px;
  max-height: 700px;
  margin: 0 auto;
  background: ${({ theme }) => theme.default.main};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 33px;
  padding: 35px;
`
const BoxContent = styled('div')`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

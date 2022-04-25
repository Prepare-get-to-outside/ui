import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
interface CardSectionProps {
  children?: React.ReactNode
}

interface CardProps {
  title: string
  children?: React.ReactNode
}

export const CardSection = ({ children }: CardSectionProps) => {
  return (
    <BoxContainer>
      <BoxContent>{children}</BoxContent>
    </BoxContainer>
  )
}

CardSection.Card = ({ title, children }: CardProps) => {
  return (
    <CardRow>
      <Col flex="100px">
        <Column>{title}</Column>
      </Col>
      <Col flex="auto">{children}</Col>
    </CardRow>
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

const CardRow = styled(Row)``

const Column = styled('h3')`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
`

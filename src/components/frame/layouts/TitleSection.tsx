import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

interface TitleLayoutProps {
  title: string
}

interface TitleSectionProps {
  layoutProps: TitleLayoutProps
  children: React.ReactNode
}

const TitleSection = ({ layoutProps, children }: TitleSectionProps) => {
  const router = useRouter()

  return (
    <TitleSectionContainer>
      <TitleSectionArea>
        <BackBtn type="text" icon={<ArrowLeftOutlined onClick={() => router.back()} />} />
        <Title>{layoutProps.title}</Title>
      </TitleSectionArea>
      {children}
    </TitleSectionContainer>
  )
}

//TODO: position
const TitleSectionContainer = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 35px;
  background-color: ${({ theme }) => theme.zzup.main};
`

const TitleSectionArea = styled('div')`
  display: flex;
  align-items: center;
  padding: 35px;
`

const Title = styled('h1')`
  display: inline-block;
  font-weight: bold;
  font-size: 48px;
  color: ${({ theme }) => theme.zzup.title};
`

const BackBtn = styled(Button)`
  width: 48px;
  height: 48px;
  margin-right: 16px;

  & > span {
    font-size: 48px;
    font-weight: 1000;
    color: ${({ theme }) => theme.zzup.title};
    margin-right: 16px;
  }
`

export default TitleSection

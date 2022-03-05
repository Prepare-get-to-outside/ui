import React from 'react'
import styled from 'styled-components'
import { Layout } from 'antd'
import { Navigation } from '@/components/frame/section/Navigation'
import { DynamicLayout } from './DynamicLayout'

interface FrameProps {
  layoutProps?: any
  children: React.ReactNode
}

export const Frame = ({ layoutProps, children }: FrameProps) => {
  return (
    <LayoutStyled>
      <Navigation />
      <ContentStyled>
        <DynamicLayout layoutProps={layoutProps}>{children}</DynamicLayout>
      </ContentStyled>
    </LayoutStyled>
  )
}

const LayoutStyled = styled(Layout)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.default.main};
`

const ContentStyled = styled(Layout.Content)`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.default.main};
`

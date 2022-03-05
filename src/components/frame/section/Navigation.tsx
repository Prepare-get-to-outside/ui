import React, { useEffect, useCallback, useMemo, useState } from 'react'
import { withRouter, NextRouter } from 'next/router'
import styled from 'styled-components'
import { Layout, Button } from 'antd'
import {
  LeftOutlined,
  RightOutlined,
  FolderOpenFilled,
  UsergroupAddOutlined,
} from '@ant-design/icons'
import url from '@/constant/url'

interface WithRouterProps {
  router: NextRouter
}

const _Navigation = ({ router }: WithRouterProps) => {
  const [collapse, setCollapse] = useState(router.pathname === url.main)
  const handleOnClick = () => setCollapse(!collapse)
  const ArrowComponent = useMemo(() => (collapse ? LeftOutlined : RightOutlined), [collapse])
  const title = collapse ? 'Dr.ZZup' : 'ZZ'

  useEffect(() => {
    setCollapse(router.pathname === url.main)
  }, [router.pathname])

  const goHome = () => router.push(url.main)

  const dynamicBtns = useCallback(
    (icon: React.ReactNode, title: string, ...rest) => {
      return collapse ? (
        <NaviBtns block icon={icon} {...rest}>
          {title}
        </NaviBtns>
      ) : (
        icon
      )
    },
    [collapse],
  )

  const iconStyle = { fontSize: collapse ? '24px' : '18px', color: '#ffffff' }

  return (
    <Layout.Sider width={collapse ? 380 : 70}>
      <NavigationContainer>
        <LogoTitle collapse={collapse} onClick={goHome}>
          {title}
        </LogoTitle>
        {dynamicBtns(<FolderOpenFilled style={iconStyle} />, '개인리스트')}
        {dynamicBtns(<UsergroupAddOutlined style={iconStyle} />, '그룹리스트')}
        <NaviCollapse>
          <ArrowComponent style={{ ...iconStyle, fontWeight: 1000 }} onClick={handleOnClick} />
        </NaviCollapse>
      </NavigationContainer>
    </Layout.Sider>
  )
}

export const Navigation = withRouter(_Navigation)

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 5px 1em;
  background-color: ${({ theme }) => theme.orange.shallow};
  padding: 50px 32px;
  gap: 55px;
`

const LogoTitle = styled('h1')<{ collapse: boolean }>`
  font-family: Risque;
  font-style: normal;
  font-weight: normal;
  font-size: ${({ collapse }) => (collapse ? '72px' : '48px')};
  color: ${({ theme }) => theme.default.main};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`
const NaviBtns = styled(Button)`
  &&& {
    color: ${({ theme }) => theme.default.main};
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 32px;
    font-weight: 600;
    letter-spacing: 5px;
    padding: 10px 50px;
    height: 80px;
    border: 0;
    border-radius: 16px;
  }
`

const NaviCollapse = styled('div')`
  position: absolute;
  bottom: 14px;
  right: 9px;
`

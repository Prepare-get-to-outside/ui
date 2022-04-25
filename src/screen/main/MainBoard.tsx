import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
// import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import { ShopOutlined, PlusOutlined } from '@ant-design/icons'
import url from '@/constant/url'

const actions = [{ icon: <ShopOutlined />, name: '맛집등록' }]

export const MainBoard = () => {
  const router = useRouter()

  return (
    <MainBoardContainer>
      <MainBoardContent>
        <HeadTitle>
          쩝쩝박사님 알아 맞혀보세요~
          <br /> 딩동댕동
        </HeadTitle>
      </MainBoardContent>
      <MainBoardContent>
        <DoctorImage src="Doctor.png" alt="doctor" />
      </MainBoardContent>
      <PlusBtn
        ariaLabel="SubFunction"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<PlusOutlined />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => router.push(url.register)}
          />
        ))}
      </PlusBtn>
    </MainBoardContainer>
  )
}

const MainBoardContainer = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-content: space-between;
`

const MainBoardContent = styled('div')`
  width: 100%;
  text-align: center;
  flex: 1;
`

const HeadTitle = styled('h1')`
  font-size: 45px;
  padding-top: 100px;
  letter-spacing: 5px;
  color: ${({ theme }) => theme.orange.light};
`

const DoctorImage = styled('img')`
  width: 415px;
`

const PlusBtn = styled(SpeedDial)`
  & > button {
    background-color: ${({ theme }) => theme.orange.deep};
  }

  & > button:hover {
    background-color: ${({ theme }) => theme.orange.deep};
    opacity: 0.7;
  }
`

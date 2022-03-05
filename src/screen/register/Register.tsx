import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next' //GetStaticPaths, GetServerSideProps
import { Row, Col, Button, Input, Select, Slider, Switch, notification } from 'antd'
import { CardSection } from '@/components/frame/section/CardSection'
import url from '@/constant/url'

interface DataType {
  store_name?: string
  store_address?: string
}

interface RegisterPageProps {
  data?: GetServerSideProps & DataType
}

const foodKind = ['한식', '양식', '일식', '중식', '베트남', '태국', '인도', '디저트', '기타']
const list = ['대학탐방먹보들', '맛선생님들다과회']

const minMoney = 1000
const maxMoney = 200000

const marks = {
  [minMoney]: '1,000원',
  50000: '50,000원',
  100000: '100,000원',
  150000: '150,000원',
  [maxMoney]: {
    style: {
      color: '#f50',
    },
    label: <strong>200,000원</strong>,
  },
}

export const RegisterPage = ({ data }: RegisterPageProps) => {
  const router = useRouter()
  const [kind, setKind] = useState('')
  const [priceRange, setPriceRange] = useState<[number, number]>([30000, 100000])
  const [isVisit, setIsVisit] = useState(false)
  const [shareList, setShareList] = useState([])
  const [tags, setTags] = useState('')
  const [memo, setMemo] = useState('')

  const onRegister = () => {
    if (kind) {
      notification['success']({
        message: '맛집등록 성공했습니다.',
        description: '맛집 정보는 서비스 관리자가 사업장 확인 후 등록되오니 참고 부탁드립니다.',
        onClose: () => router.push(url.main),
      })
    } else {
      notification['warning']({
        message: '필수 값이 입력되지 않았습니다.',
        description: '필수 정보가 누락되었습니다. 확인 후 입력 바랍니다.',
      })
    }
  }
  return (
    <Container>
      <Col flex={'1 1'}>
        <Row style={{ height: '100%' }}>
          <Col flex="0 1 600px">
            <InformContainer>
              <Row>
                <Col flex="100px">
                  <Column>이름</Column>
                </Col>
                <Col flex="auto">
                  <RestraurantName>{data?.store_name}</RestraurantName>
                </Col>
              </Row>
              <Row>
                <Col flex="100px">
                  <Column>위치</Column>
                </Col>
                <Col flex="auto">
                  <Inform>{data?.store_address}</Inform>
                </Col>
              </Row>
            </InformContainer>
            <Row>
              <Col flex={1} />
            </Row>
          </Col>
          <Col flex="auto">
            <CardSection>
              <CardRow>
                <Col flex="100px">
                  <Column>종류</Column>
                </Col>
                <Col flex="auto">
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Search to Food"
                    optionFilterProp="children"
                    onChange={(value) => setKind(value)}
                  >
                    {foodKind.map((food, idx) => (
                      <Select.Option key={`select_${idx}`} value={(idx + 1).toString()}>
                        {food}
                      </Select.Option>
                    ))}
                  </Select>
                </Col>
              </CardRow>
              <CardRow>
                <Col flex="100px">
                  <Column>가격대</Column>
                </Col>
                <Col flex="auto">
                  <Slider
                    range
                    marks={marks}
                    value={priceRange}
                    step={500}
                    min={minMoney}
                    max={maxMoney}
                    onChange={(value) => setPriceRange(value)}
                  />
                </Col>
              </CardRow>
              <CardRow>
                <Col flex="100px">
                  <Column>방문여부</Column>
                </Col>
                <Col flex="auto">
                  <Switch checked={isVisit} onChange={() => setIsVisit(!isVisit)} />
                </Col>
              </CardRow>
              <CardRow>
                <Col flex="100px">
                  <Column>공유목록</Column>
                </Col>
                <Col flex="auto">
                  <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="select list"
                    defaultValue={shareList}
                    onChange={(value) => {
                      setShareList(value)
                    }}
                    optionLabelProp="label"
                  >
                    {list.map((name, idx) => (
                      <Select.Option key={`select_${idx}`} value={name} label={name}>
                        <div>{name}</div>
                      </Select.Option>
                    ))}
                  </Select>
                </Col>
              </CardRow>
              <CardRow>
                <Col flex="100px">
                  <Column>태그</Column>
                </Col>
                <Col flex="auto">
                  <Input
                    showCount
                    maxLength={50}
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />
                </Col>
              </CardRow>
              <CardRow>
                <Col flex="100px">
                  <Column>메모</Column>
                </Col>
                <Col flex="auto">
                  <Input
                    showCount
                    maxLength={100}
                    value={memo}
                    onChange={(e) => setMemo(e.target.value)}
                  />
                </Col>
              </CardRow>
            </CardSection>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row justify="end" align="bottom" style={{ marginTop: '30px' }}>
          <RegisterBtn onClick={onRegister}>등록</RegisterBtn>
        </Row>
      </Col>
    </Container>
  )
}

const CardRow = styled(Row)``

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 1;
}`

const InformContainer = styled('div')`
  padding: 50px 15px 0px 35px;
`

const Column = styled('h3')`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
`

const RestraurantName = styled('p')`
  font-size: 24px;
`
const Inform = styled('p')`
  font-size: 20px;
`

const RegisterBtn = styled(Button)`
  &&& {
    width: 128px;
    height: 54px;
    background: ${({ theme }) => theme.orange.littleDeep};
    color: ${({ theme }) => theme.default.main};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    font-weight: 500;
    font-size: 24px;
  }
`

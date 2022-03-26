import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { Layout, PageHeader, Row, Col } from "antd";
import styled from "styled-components";
import RestaurantTable from "./RestaurantTable";

const { Header, Footer, Sider, Content } = Layout;

const PageHeaderStyeld = styled(PageHeader)`
  border: 1px solid rgb(235, 237, 240);
`;

const ContentStyled = styled(Content)`
    padding: 20px
`

const RestaurantList: FC = observer(() => {
  return (
    <Layout>
      <PageHeaderStyeld onBack={() => null} title="맛집목록" />
      <Layout>
        <ContentStyled>
          <Row>
            <Col span={24}>
              <RestaurantTable />
            </Col>
          </Row>
        </ContentStyled>
      </Layout>
      <Footer>dr.Zz</Footer>
    </Layout>
  );
});

export default RestaurantList;

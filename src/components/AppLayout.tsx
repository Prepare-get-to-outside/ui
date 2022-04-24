import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Menu, Row, Col } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  BulbOutlined,
  AppstoreAddOutlined,
  UnorderedListOutlined,
  BookOutlined,
  CarOutlined,
} from "@ant-design/icons";

import UserProfile from "@/components/UserProfile";
import LoginForm from "@/components/LoginForm";

type RouterInfoType = { [key: string]: { key: string; title: string } };
const ROUTER_INFO: RouterInfoType = {
  "/": { key: "home", title: "Home" },
  "/resister": { key: "rest-resister", title: "맛집 등록" },
};
const PRODUCT_NAME = "쩝쩝박사";

const Container = styled(Row)`
  padding: 20px 30px;
`;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const router = useRouter();
  const { pathname } = router;

  let menuKey = "",
    title = "";

  if (ROUTER_INFO.hasOwnProperty(pathname)) {
    menuKey = ROUTER_INFO[pathname]["key"];
    title = ROUTER_INFO[pathname]["title"];
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{!title ? PRODUCT_NAME : `${title} | ${PRODUCT_NAME}`}</title>
      </Head>
      <Menu mode="horizontal" defaultSelectedKeys={[menuKey]}>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.SubMenu key="restaurant" title="맛집" icon={<BulbOutlined />}>
          <Menu.Item key="rest-resister" icon={<AppstoreAddOutlined />}>
            <Link href="/resister">
              <a>맛집 등록</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="rest-list" icon={<UnorderedListOutlined />}>
            <Link href="/resister">
              <a>맛집 리스트</a>
            </Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="my-list" icon={<UserOutlined />}>
          <Link href="/profile">
            <a>My List</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="shared-list" icon={<CarOutlined />}>
          <Link href="/signup">
            <a>공유목록</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="shared-list-research" icon={<UserOutlined />}>
          <Link href="/profile">
            <a>공유목록 구경하기</a>
          </Link>
        </Menu.Item>
        <Menu.SubMenu key="settings" title="설정" icon={<CarOutlined />}>
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="profile" icon={<BookOutlined />}>
              <Link href="/profile">
                <a>User Info</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="app" icon={<CarOutlined />}>
              Navigation Two
            </Menu.Item>
            <Menu.Item key="disabled" disabled>
              Navigation Three
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
      </Menu>
      <Container gutter={20}>
        <Col xs={24} md={18}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://www.notion.so/vivabin/4649966ff8b94fa59b611629127314a9"
            target="_blank"
            rel="noreferrer noopener"
          >
            쩝쩝박사 notion
          </a>
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </Col>
      </Container>
    </>
  );
};

export default AppLayout;

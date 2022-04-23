import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LoginLayout = styled(Form)`
  max-width: 300px;
`;

const LoginButton = styled(Button)`
  width: 100%;
`;

const FindWrapper = styled.ul`
  padding: 20px 0 35px;
  text-align: center;
  list-style: none;
`;

const FindList = styled.li`
  position: relative;
  display: inline-block;
`;

const CombinedFindList = styled(FindList)`
  & {
    padding-left: 28px;
  }
  &::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 12px;
    width: 1px;
    height: 12px;
    border-radius: 0.5px;
    background-color: #dadada;
  }
`;

interface LoginFormProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm = ({ setIsLoggedIn }: LoginFormProps) => {
  const onSubmitForm = (values: any) => {
    console.log("Received values of form: ", values);
    setIsLoggedIn(true);
  };

  return (
    <LoginLayout
      name="normal_login"
      initialValues={{ remember: true }}
      onFinish={onSubmitForm}
    >
      <Form.Item
        name="user-id"
        rules={[{ required: true, message: "아이디를 입력해 주세요." }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="아이디"
        />
      </Form.Item>
      <Form.Item
        name="user-password"
        rules={[{ required: true, message: "비밀번호를 입력해 주세요." }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="비밀번호"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>로그인 상태 유지</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <LoginButton type="primary" htmlType="submit" loading={false}>
          로그인
        </LoginButton>
        <FindWrapper>
          <FindList>
            <Link href="/">
              <a>비밀번호 찾기</a>
            </Link>
          </FindList>
          <CombinedFindList>
            <Link href="/">
              <a>아이디 찾기</a>
            </Link>
          </CombinedFindList>
          <CombinedFindList>
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </CombinedFindList>
        </FindWrapper>
      </Form.Item>
    </LoginLayout>
  );
};

export default LoginForm;

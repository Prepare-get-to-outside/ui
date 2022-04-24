import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

const Signup = () => {
  const onSubmit = (values: any) => {
    console.log("Success:", values);
  };

  const onSubmitFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onSubmit}
        onFinishFailed={onSubmitFailed}
        autoComplete="off"
      >
        <Form.Item
          label="아이디"
          name="user-id"
          rules={[{ required: true, message: "아이디를 입력해 주세요." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="닉네임"
          name="user-nick"
          rules={[{ required: true, message: "닉네임을 입력해 주세요." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="비밀번호"
          name="user-password"
          rules={[{ required: true, message: "비밀번호를 입력해 주세요." }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="비밀번호 체크"
          name="user-password-check"
          rules={[{ required: true, message: "비밀번호를 입력해 주세요." }]}
        >
          <Input.Password />
        </Form.Item>
        {/* <Form.Item
          label="약관 동의"
        >
        </Form.Item> */}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            가입하기
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Signup;

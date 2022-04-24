import React from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import {
  Form,
  PageHeader,
  Input,
  Select,
  Switch,
  InputNumber,
  Tag,
  Button,
} from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
const RestAmountTilde = styled.span`
  margin: 0 1em;
`;

const Resister: NextPage = () => {
  const [form] = Form.useForm();
  const onChangeIsVisit = (checked: boolean, event: Event) => {
    console.log(`checked: ${checked}, event: ${event}`);
  };
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  const onReset = () => {
    form.resetFields();
  };

  const headerStates = ["process", "resolve", "reject"];
  const defaultHeaderStateIndex = headerStates.indexOf(headerStates[0]);
  const headerColor = ["blue", "green", "red"];
  const headerTexts = ["작성중", "등록완료", "등록실패"];

  return (
    <>
      <Form
        form={form}
        name="register_restaurants"
        {...formItemLayout}
        onFinish={onFinish}
      >
        <PageHeader
          className="site-page-header"
          title="맛집 등록"
          subTitle={""}
          tags={
            <Tag color={headerColor[defaultHeaderStateIndex]}>
              {headerTexts[defaultHeaderStateIndex]}
            </Tag>
          }
        />
        <Form.Item label="이름" name="rest-name">
          <Input disabled={true} defaultValue="새벽 감자탕" />
        </Form.Item>
        <Form.Item label="위치" name="rest-location">
          <Input
            disabled={true}
            defaultValue="서울시 강동구 성내동 올림픽로 58길"
          />
          <Input disabled={true} defaultValue="2층" />
        </Form.Item>
        <Form.Item
          name="rest-type"
          label="종류"
          hasFeedback
          rules={[
            {
              required: true,
              message: "종류를 선택해주세요",
            },
          ]}
        >
          <Select>
            <Option value="1">한식</Option>
            <Option value="2">양식</Option>
            <Option value="3">일식</Option>
            <Option value="4">중식</Option>
            <Option value="5">베트남</Option>
            <Option value="6">태국</Option>
            <Option value="7">인도</Option>
            <Option value="8">기타</Option>
            <Option value="9">디저트</Option>
          </Select>
        </Form.Item>

        <Form.Item name="is-visit" label="방문여부">
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={onChangeIsVisit}
          />
        </Form.Item>

        <Form.Item
          name="select-shared-list"
          label="공유 목록 선택"
          rules={[
            {
              type: "array",
            },
          ]}
        >
          <Select mode="multiple" placeholder="선택">
            <Option value="1">순대 맛집</Option>
            <Option value="2">모두의 로컬 맛집</Option>
            <Option value="3">안주 맛집</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="rest-amount"
          label="가격대"
          rules={[{ required: true, message: "가격대를 입력해주세요" }]}
        >
          <InputNumber
            prefix="₩"
            defaultValue={0}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
          />
          <RestAmountTilde>~</RestAmountTilde>
          <InputNumber
            prefix="₩"
            defaultValue={0}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
          />
        </Form.Item>

        <Form.Item name="rest-memo" label="메모">
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>

        <Form.Item name="rest-tag" label="태그">
          {/* 태그 */}
          {/* <TagComponent /> */}
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          <Button htmlType="button" onClick={onReset}>
            취소
          </Button>
          <Button type="primary" htmlType="submit">
            등록
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Resister;

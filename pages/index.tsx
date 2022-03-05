import React from "react";
import type { NextPage } from "next";
import {
  Typography,
  Form,
  Input,
  Select,
  Switch,
  Slider,
  Button,
  Tag,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Title } = Typography;
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const Home: NextPage = () => {
  const [form] = Form.useForm();
  const onFinish = (values: String) => {
    console.log("Received values of form: ", values);
  };
  const onReset = () => {
    form.resetFields();
  };
  const [tags, setTags] = useState([]);
  const [tagInputVisible, setTagInputVisible] = useState(false);
  const [tagInputValue, setTagInputValue] = useState("");
  const [editTagInputIndex, setEditTagInputIndex] = useState(-1);
  const [editTagInputValue, seteditTagInputValue] = useState("");

  return (
    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        "input-number": 0,
      }}
    >
      <Typography>
        <Title level={2}>맛집등록</Title>
      </Typography>
      <Form.Item label="이름" name="name">
        <Input disabled={true} defaultValue="새벽 감자탕" />
      </Form.Item>
      <Form.Item label="위치" name="location">
        <Input
          disabled={true}
          defaultValue="서울시 강동구 성내동 올림픽로 58길"
        />
        <Input disabled={true} defaultValue="2층" />
      </Form.Item>
      <Form.Item
        name="select"
        label="종류"
        hasFeedback
        rules={[
          {
            required: true,
            message: "종류를 선택해주세요",
          },
        ]}
      >
        <Select defaultValue="korean">
          <Option value="korean">한식</Option>
          <Option value="western-food">양식</Option>
        </Select>
      </Form.Item>

      <Form.Item name="switch" label="방문여부" valuePropName="isvisit">
        <Switch />
      </Form.Item>

      <Form.Item
        name="select-multiple"
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
        name="slider"
        label="가격대"
        rules={[{ required: true, message: "가격대를 입력해주세요" }]}
      >
        <Slider
          min={0}
          max={100000}
          step={10000}
          marks={{
            0: "0",
            30000: "30,000",
            50000: "50,000",
            100000: "100,000",
          }}
        />
      </Form.Item>

      <Form.Item name="memo" label="메모">
        <Input.TextArea showCount maxLength={100} />
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
  );
};

export default Home;

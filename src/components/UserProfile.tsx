import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

interface UserProfileProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserProfile = ({ setIsLoggedIn }: UserProfileProps) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={
          //   <Avatar src="https://joeschmoe.io/api/v1/random" />
          <Avatar>Avatar</Avatar>
        }
        title="ID"
        // description="This is the description"
      />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
